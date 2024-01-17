"use client";

import { Suspense, useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import NovelGenreList from "./novel-genre-list";
import { Database } from "@/types/supabase";
import NovelRating from "./novel-rating";

const NovelItemClient = ({ novel }: { novel: any }) => {
  const [genreGroup, setGenreGroup] = useState<any[] | null>(null);
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    async function getImage() {
      const supabase = createClientComponentClient<Database>();
      const {
        data: { publicUrl: novelImage },
      } = supabase.storage.from("bagong_translation").getPublicUrl(novel.image);
      setImage(novelImage);
    }
    getImage();
  }, []);

  useEffect(() => {
    async function getGenreGroup() {
      const supabase = createClientComponentClient<Database>();
      const { data } = await supabase
        .from("GenreGroups")
        .select(`genre: genre_id (name, color, id)`)
        .eq("novel_id", novel.id);

      setGenreGroup(data);
    }
    getGenreGroup();
  }, [novel]);

  return (
    <li className="bg-white border-b-2 border-gray-100 py-2 grid grid-cols-4">
      <div className="col-span-1 aspect-[3/4]">
        <Link href={`/novels/${novel.slug}`} className=" ">
          {image ? (
            <Image
              src={image}
              alt={novel.title}
              width={100}
              height={100}
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 animate-pulse"></div>
          )}
        </Link>
      </div>
      <div className="col-span-3 px-3 py-2 flex flex-col">
        <Link href={`/novels/${novel.slug}`} className=" ">
          <h1 className="font-bold text-lg truncate">{novel.name}</h1>
        </Link>
        <h1 className="text-gray-500 text-sm italic">{novel.author.name}</h1>
        <NovelRating rating={novel.star} />
        {genreGroup ? (
          <NovelGenreList genres={genreGroup} />
        ) : (
          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="text-xs px-3 py-1 w-20 h-6 bg-gray-300 animate-pulse rounded-md"></li>
            <li className="text-xs px-3 py-1 w-16 h-6 bg-gray-300 animate-pulse rounded-md"></li>
            <li className="text-xs px-3 py-1 w-10 h-6 bg-gray-300 animate-pulse rounded-md"></li>
            <li className="text-xs px-3 py-1 w-16 h-6 bg-gray-300 animate-pulse rounded-md"></li>
            <li className="text-xs px-3 py-1 w-16 h-6 bg-gray-300 animate-pulse rounded-md"></li>
            <li className="text-xs px-3 py-1 w-10 h-6 bg-gray-300 animate-pulse rounded-md"></li>
            <li className="text-xs px-3 py-1 w-20 h-6 bg-gray-300 animate-pulse rounded-md"></li>
          </ul>
        )}
      </div>
    </li>
  );
};

export default NovelItemClient;
