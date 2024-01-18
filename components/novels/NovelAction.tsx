import {
  BookOpenIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/24/solid";

export const NovelAction = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold py-5">Action</h1>
      <div className="grid grid-cols-4 gap-4 w-10/12 mx-auto">
        <button
          type="button"
          className="bg-secondary w-full h-full text-white aspect-square rounded-md flex justify-center items-center"
        >
          <HandThumbUpIcon className="w-10 h-10" />
        </button>
        <button
          type="button"
          className="bg-secondary w-full h-full text-white aspect-square rounded-md flex justify-center items-center"
        >
          <HandThumbDownIcon className="w-10 h-10" />
        </button>
        <button
          type="button"
          className="bg-secondary w-full h-full text-white aspect-square rounded-md flex justify-center items-center"
        >
          <BookOpenIcon className="w-10 h-10" />
        </button>
        <button
          type="button"
          className="bg-secondary w-full h-full text-white aspect-square rounded-md flex justify-center items-center"
        >
          <ShareIcon className="w-10 h-10" />
        </button>
      </div>
    </>
  );
};
