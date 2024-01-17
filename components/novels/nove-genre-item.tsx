import Link from "next/link";

const NovelGenreItem = ({ genre }: { genre: any }) => {
  const { genre: _genre } = genre;
  return (
    <Link href={`/search/genre/${_genre.id}`}>
      <li className="text-xs px-3 py-1 bg-secondary rounded-md text-white hover:bg-orange-300 duration-200 ease-in-out">
        {_genre.name}
      </li>
    </Link>
  );
};

export default NovelGenreItem;
