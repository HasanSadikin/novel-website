import { getServerPublicUrl, useServerSupabase } from "@/lib/useSupabase";
import Image from "next/image";

const PopularNovelItem = async ({ novel }: { novel: any }) => {
  const image = await getServerPublicUrl(novel.image);
  return (
    <li className="relative">
      <div className="absolute w-full h-full">
        <Image
          src={image}
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
