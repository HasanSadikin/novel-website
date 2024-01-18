import NovelGenreItem from "./nove-genre-item";

const NovelGenreList = ({
  genres,
  className,
}: {
  genres: string | null;
  className?: string;
}) => {
  return (
    <ul
      className={`flex flex-wrap gap-1 ${className} overflow-hidden overflow-y-auto`}
    >
      {genres?.split(",").map((genre, i) => (
        <NovelGenreItem genre={genre} key={i} />
      ))}
    </ul>
  );
};

export default NovelGenreList;
