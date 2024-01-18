import { getServerSupabase } from "@/lib/serverSupabase";
import Image from "next/image";

const PopularNovelItem = async ({ novel }: { novel: any }) => {
  const supabase = getServerSupabase();
  const { data } = await supabase.storage
    .from("bagong_translation")
    .getPublicUrl(novel.image);
  return (
    <li className="relative">
      <div className="absolute w-full h-full">
        <Image
          src={data.publicUrl}
          alt={novel.title}
          fill
          className="object-cover blur-sm "
        />
        <div className="absolute w-full h-full bg-black/70 z-[1]"></div>
      </div>
      <div className="relative z-[2] grid grid-cols-4">
        <div className="col-span-1"></div>
        <div className="col-span-3">
          <h1>{novel.name}</h1>
        </div>
      </div>
    </li>
  );
};

export default PopularNovelItem;
