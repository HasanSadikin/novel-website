"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import NovelGenreList from "./novel-genre-list";
import NovelRating from "./novel-rating";

import { Novel } from "@/types/novel";
import { getClientSupabase, getImagePublicURL } from "@/lib/clientSupabase";
import NoImage from "../images/no-image";

const NovelItemClient = ({ novel }: { novel: Novel }) => {
  const [image, setImage] = useState<string | null>("");

  useEffect(() => {
    async function getImage() {
      const novelImage = await getImagePublicURL(
        getClientSupabase(),
        novel.image
      );
      setImage(novelImage);
    }
    getImage();
  }, [novel.image]);

  return (
    <li className="bg-white border-b-2 border-gray-200 py-2 grid grid-cols-7 max-h-56 overflow-hidden">
      <div className="col-span-2 aspect-[3/4] relative">
        <Link
          href={`/novels/${novel.slug}`}
          className="w-full h-full object-cover"
        >
          {image ? (
            <Image
              src={image}
              alt={novel.novel_name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <NoImage />
          )}
        </Link>
      </div>
      <div className="col-span-5 px-3 flex flex-col">
        <Link href={`/novels/${novel.slug}`} className=" ">
          <h1 className="font-bold text-lg truncate">{novel.novel_name}</h1>
        </Link>
        <div className="flex gap-1">
          <Link href={`/search/author/${novel.author_id}`}>
            <h1 className="text-gray-500 text-sm italic">{novel.author}</h1>
          </Link>
          <span>{" - "}</span>
          <Link href={`/search/origin/${novel.origin}`}>
            <h1 className="text-gray-500 text-sm italic">{novel.origin}</h1>
          </Link>
        </div>
        <NovelRating rating={novel.star} className="py-4" />
        <NovelGenreList
          genres={novel.genres}
          genres_slugs={novel.genres_slugs}
          className="overflow-hidden h-[53px]"
        />
      </div>
    </li>
  );
};

export default NovelItemClient;
