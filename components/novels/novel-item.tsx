import { useServerSupabase } from "@/lib/useSupabase";
import Image from "next/image";
import NovelGenreList from "./novel-genre-list";
import NovelRating from "./novel-rating";
import Link from "next/link";
import { Novel } from "@/types/novel";

const NovelItem = async ({ novel }: { novel: Novel }) => {
  const supabase = useServerSupabase();
  const {
    data: { publicUrl: novelImage },
  } = supabase.storage.from("bagong_translation").getPublicUrl(novel.image);

  return (
    <li className="bg-white border-b-2 border-gray-200 py-2 grid grid-cols-4 max-h-52 overflow-hidden">
      <div className="col-span-1 aspect-[3/4]">
        <Link
          href={`/novels/${novel.slug}`}
          className="w-full h-full object-cover"
        >
          <Image
            src={novelImage}
            alt={novel.novel_name}
            width={300}
            height={300}
            className="w-full h-full"
          />
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

export default NovelItem;
