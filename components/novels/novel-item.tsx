import Image from "next/image";
import Link from "next/link";

import NoImage from "@/components/images/no-image";
import NovelGenreList from "./novel-genre-list";
import NovelRating from "./novel-rating";

import { Novel } from "@/types/novel";
import { getServerSupabase } from "@/lib/serverSupabase";
import { getImagePublicURL } from "@/lib/clientSupabase";

const NovelItem = async ({ novel }: { novel: Novel }) => {
  const novelImage = await getImagePublicURL(getServerSupabase(), novel.image);

  return (
    <li className="bg-white border-b-2 border-gray-200 py-2 grid grid-cols-7 max-h-56 overflow-hidden">
      <div className="col-span-2 aspect-[3/4]">
        <Link
          href={`/novels/${novel.slug}`}
          className="w-full h-full object-cover"
        >
          {novelImage ? (
            <Image
              src={novelImage}
              alt={novel.novel_name}
              width={300}
              height={300}
              className="w-full h-full"
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
        <Link href={`/search/author/${novel.author_id}`}>
          <h1 className="text-gray-500 text-sm italic">{novel.author}</h1>
        </Link>
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

export default NovelItem;
