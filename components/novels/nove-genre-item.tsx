import Link from "next/link";

interface Props {
  genre: string;
  slug: string;
}

const NovelGenreItem = ({ genre, slug }: Props) => {
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
