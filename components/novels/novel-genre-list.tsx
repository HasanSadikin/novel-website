import NovelGenreItem from "./nove-genre-item";

const NovelGenreList = ({
  genres,
  className,
  genres_slugs,
}: {
  genres: string | null;
  className?: string;
  genres_slugs: string;
}) => {
  const names = genres?.split(",");
  const slugs = genres_slugs?.split(",");

  if (!names || !slugs) {
    return <p>No Novel</p>;
  }

  return (
    <ul
      className={`flex flex-wrap gap-1 ${className} overflow-hidden overflow-y-auto`}
    >
      {Array.from(Array(names?.length), (e, i) => (
        <NovelGenreItem genre={names[i]} slug={slugs[i]} key={i} />
      ))}
    </ul>
  );
};

export default NovelGenreList;
