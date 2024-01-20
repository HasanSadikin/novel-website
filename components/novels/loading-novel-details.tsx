import { BookOpenIcon } from "@heroicons/react/24/solid";
import NoImage from "../images/no-image";
import ActionButton from "../ui/action-button";

const LoadingNovelDetails = () => {
  return (
    <div className="mb-16">
      <div className="relative min-h-10 overflow-hidden pt-16 pb-5">
        <div className="object-cover aspect-[3/4] absolute top-0 w-full h-full z-[-2] animate-pulse">
          <NoImage />
        </div>
        <div className="bg-black/80 absolute top-0 w-full aspect-[3/4] z-[-1] h-full"></div>
        <div className="grid grid-rows-1 gap-10 w-11/12 mx-auto">
          <div className="items-center flex justify-center">
            <div className="aspect-[3/4] w-2/3 relative animate-pulse">
              <NoImage />
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-1 text-white pb-5">
            <h1 className="font-semibold text-2xl text-center text-gray-300 bg-gray-300 w-full animate-pulse">
              ...
            </h1>
            <h1 className="italic text-center text-gray-300 bg-gray-300 w-52 animate-pulse">
              ...
            </h1>
            <h1 className="italic text-center text-gray-300 h-7 bg-gray-300 w-32 animate-pulse">
              ...
            </h1>
            <ul className="flex flex-wrap gap-1 px-10 justify-center">
              <li className="text-xs w-10 px-3 py-1 h-fit text-gray-300 bg-gray-300 animate-pulse">
                ...
              </li>
              <li className="text-xs w-14 px-3 py-1 h-fit text-gray-300 bg-gray-300 animate-pulse">
                ...
              </li>
              <li className="text-xs w-12 px-3 py-1 h-fit text-gray-300 bg-gray-300 animate-pulse">
                ...
              </li>
            </ul>
            {/* <NovelRating rating={novel.star} className="py-5" />
            <NovelGenreList
              genres={novel.genres}
              genres_slugs={novel.genres_slugs}
              className="justify-center px-10"
            /> */}
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <h1 className="text-center text-2xl font-bold py-5">Description</h1>
        <p className="text-center w-full h-20 animate-pulse bg-gray-200"></p>
        <div className="w-full h-10 border-b-2 border-gray-300"></div>
        <h1 className="text-center text-2xl font-bold py-5">Action</h1>
        <div className="grid grid-cols-3 gap-4 w-10/12 mx-auto">
          <ActionButton>
            <BookOpenIcon className="w-10 h-10" />
          </ActionButton>
        </div>
        <div className="w-full h-10 border-b-2 border-gray-300"></div>
        <h1 className="text-center text-2xl font-bold py-5">Chapters</h1>
        <ul>
          <li className="py-3 border-b-2 bg-gray-200 animate-pulse w-full my-3"></li>
          <li className="py-3 border-b-2 bg-gray-200 animate-pulse w-full my-3"></li>
          <li className="py-3 border-b-2 bg-gray-200 animate-pulse w-full my-3"></li>
          <li className="py-3 border-b-2 bg-gray-200 animate-pulse w-full my-3"></li>
        </ul>
        <h1 className="text-center text-2xl font-bold py-5">Comments</h1>
        <ul>
          <li className="py-3 border-b-2 bg-gray-200 animate-pulse w-full my-3"></li>
          <li className="py-3 border-b-2 bg-gray-200 animate-pulse w-full my-3"></li>
          <li className="py-3 border-b-2 bg-gray-200 animate-pulse w-full my-3"></li>
          <li className="py-3 border-b-2 bg-gray-200 animate-pulse w-full my-3"></li>
        </ul>
        <div className="w-full h-10 border-b-2 border-gray-300"></div>

        {/* <NovelDescription description={novel.description} />
        <NovelAction novel={novel} />
        <NovelChapterList />
        <NovelCommentList /> */}
      </div>
    </div>
  );
};

export default LoadingNovelDetails;
