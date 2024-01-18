import { whiteSpaceToDash } from "@/utils/utils";
import Link from "next/link";

const NovelGenreItem = ({ genre, slug }: { genre: string; slug: string }) => {
  return (
    <Link
      href={`/search/genre/${slug}`}
      className="text-xs px-3 py-1 h-fit bg-secondary rounded-md text-white hover:bg-orange-300 duration-200 ease-in-out"
    >
      <li>{genre}</li>
    </Link>
  );
};

export default NovelGenreItem;
