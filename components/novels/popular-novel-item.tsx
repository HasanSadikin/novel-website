import { getImagePublicURL } from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";
import Image from "next/image";

const PopularNovelItem = async ({ novel }: { novel: any }) => {
  const supabase = getServerSupabase();
  const image = await getImagePublicURL(supabase, novel.image);
  return (
    <li className="relative">
      <div className="absolute w-full h-full">
        <Image
          src={image}
          alt={novel.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
