import { useServerSupabase } from "@/lib/useSupabase";
import Image from "next/image";
import NovelGenreList from "./novel-genre-list";
import NovelRating from "./novel-rating";
import Link from "next/link";

const NovelItem = async ({ novel }: { novel: any }) => {
  const supabase = useServerSupabase();
  const {
    data: { publicUrl: novelImage },
  } = await supabase.storage
    .from("bagong_translation")
    .getPublicUrl(novel.image);

  const { data } = await supabase
    .from("GenreGroups")
    .select(`genre: genre_id (name, color, id)`)
    .eq("novel_id", novel.id);

  return (
    <li className="bg-white border-b-2 border-gray-200 py-2 grid grid-cols-4">
      <div className="col-span-1">
        <Link href={`/novels/${novel.slug}`} className=" ">
          <Image
            src={novelImage}
            alt={novel.title}
            width={100}
            height={100}
            className="w-full h-full"
          />
        </Link>
      </div>
      <div className="col-span-3 px-3 py-2 flex flex-col">
        <Link href={`/novels/${novel.slug}`} className=" ">
          <h1 className="font-bold text-lg truncate">{novel.name}</h1>
        </Link>
        <h1 className="text-gray-500 text-sm italic">{novel.author.name}</h1>
        <NovelRating rating={novel.star} />
        <NovelGenreList genres={data} />
      </div>
    </li>
  );
};

export default NovelItem;
