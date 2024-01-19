"use client";

import { handleBookmark } from "@/lib/actions";
import { Novel } from "@/types/novel";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const BookmarkButton = ({
  novel,
  toggle = false,
}: {
  toggle?: boolean;
  novel: Novel;
}) => {
  return (
    <button
      onClick={async () => handleBookmark(novel, toggle)}
      type="button"
      className={`duration-200 ease-in-out w-full h-full  aspect-square rounded-md flex justify-center items-center ${
        toggle ? "bg-secondary text-white" : "bg-gray-300 text-white"
      }`}
    >
      <BookOpenIcon className="w-10 h-10" />
    </button>
  );
};

export default BookmarkButton;
