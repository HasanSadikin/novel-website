import NovelGenreItem from "./nove-genre-item";

const NovelGenreList = ({
  genres,
  className,
}: {
  genres: string | null;
  className?: string;
}) => {
  return (
    <ul className={`flex flex-wrap gap-2 mt-2 ${className}`}>
      {genres?.split(",").map((genre, i) => (
        <NovelGenreItem genre={genre} key={i} />
      ))}
    </ul>
  );
};

export default NovelGenreList;
