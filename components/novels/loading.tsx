import NoImage from "../images/no-image";

const Li = () => (
  <li className="bg-white border-b-2 border-gray-200 py-2 grid grid-cols-7 max-h-56 overflow-hidden">
    <div className="col-span-2 w-full relative object-cover aspect-[3/4]">
      <NoImage />
    </div>
    <div className="gap-1 col-span-5 px-3 flex flex-col">
      <h1 className="font-bold text-lg truncate max-w-52 bg-gray-300 text-gray-300 animate-pulse">
        ...
      </h1>
      <div className="flex gap-1">
        <h1 className="text-sm italic w-10 bg-gray-300 text-gray-300 animate-pulse">
          ...
        </h1>
        <h1 className="text-sm italic w-14 bg-gray-300 text-gray-300 animate-pulse">
          ...
        </h1>
      </div>
      <h1 className="w-20 h-7 bg-gray-300 text-gray-300 animate-pulse">...</h1>
      <ul className="flex flex-wrap gap-1">
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
      {/* <NovelRating rating={novel.star} />
    <NovelGenreList
      genres={novel.genres}
      genres_slugs={novel.genres_slugs}
      className="overflow-hidden h-[53px]"
    /> */}
    </div>
  </li>
);

const LoadingNovel = () => {
  return (
    <ul className="grid grid-cols-1 w-11/12 mx-auto">
      {Array.from(Array(4), (e, i) => (
        <Li key={i} />
      ))}
    </ul>
  );
};

export default LoadingNovel;
