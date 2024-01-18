"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import Image from "next/image";
import Link from "next/link";

import NovelGenreList from "./novel-genre-list";
import NovelRating from "./novel-rating";

import { Database } from "@/types/supabase";
import { Novel } from "@/types/novel";

const NovelItemClient = ({ novel }: { novel: Novel }) => {
  const [image, setImage] = useState<string>("");
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    async function getImage() {
      const {
        data: { publicUrl: novelImage },
      } = supabase.storage.from("bagong_translation").getPublicUrl(novel.image);
      setImage(novelImage);
    }
    getImage();
  }, []);

  return (
    <li className="bg-white border-b-2 border-gray-100 py-2 grid grid-cols-4 max-h-36 overflow-hidden">
      <div className="col-span-1 aspect-[3/4]">
        <Link
          href={`/novels/${novel.slug}`}
          className="w-full h-full object-cover"
        >
          {image ? (
            <Image
              src={image}
              alt={novel.novel_name}
              width={300}
              height={300}
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 animate-pulse"></div>
          )}
        </Link>
      </div>
      <div className="col-span-3 px-3 py-2 flex flex-col">
        <Link href={`/novels/${novel.slug}`} className=" ">
          <h1 className="font-bold text-lg truncate">{novel.novel_name}</h1>
        </Link>
        <h1 className="text-gray-500 text-sm italic">{novel.author}</h1>
        <NovelRating rating={novel.star} />
        <NovelGenreList genres={novel.genres} />
      </div>
    </li>
  );
};

export default NovelItemClient;
