import { Novel } from "@/types/novel";
import Image from "next/image";
import NovelRating from "./novel-rating";
import NovelGenreList from "./novel-genre-list";
import NovelAction from "./novel-action";
import NovelChapterList from "./novel-chapter-list";
import NovelCommentList from "./novel-comment-list";
import NovelDescription from "./novel-description";

type Props = {
  image: string;
  novel: Novel;
};

const NovelDetails = ({ image, novel }: Props) => {
  return (
    <div className="mb-16">
      <div className="relative min-h-10 overflow-hidden pt-16 pb-5">
        <div className="object-cover aspect-[3/4] absolute top-0 w-full h-full z-[-2]">
          <Image
            src={image}
            className="w-full h-full blur-sm"
            width={50}
            height={50}
            alt={novel?.novel_name}
          />
        </div>
        <div className="bg-black/80 absolute top-0 w-full aspect-[3/4] z-[-1] h-full"></div>
        <div className="grid grid-rows-1 gap-10 w-11/12 mx-auto">
          <div className="items-center flex justify-center">
            <div className="aspect-[3/4] w-2/3 relative ">
              <Image
                src={image}
                alt={novel?.novel_name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-1 text-white pb-5">
            <h1 className="font-semibold text-2xl text-center">
              {novel.novel_name}
            </h1>
            <h1 className="italic text-center">
              {novel.author} - {novel.origin}
            </h1>
            <NovelRating rating={novel.star} className="py-5" />
            <NovelGenreList
              genres={novel.genres}
              genres_slugs={novel.genres_slugs}
              className="justify-center px-10"
            />
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <NovelDescription description={novel.description} />
        <NovelAction novel={novel} />
        <NovelChapterList />
        <NovelCommentList />
      </div>
    </div>
  );
};

export default NovelDetails;
