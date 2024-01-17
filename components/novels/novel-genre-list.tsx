import NovelGenreItem from "./nove-genre-item";

const NovelGenreList = ({ genres }: { genres: any[] | null }) => {
  return (
    <ul className="flex flex-wrap gap-2 mt-2">
      {genres?.map((genre) => (
        <NovelGenreItem genre={genre} key={genre.genre.id} />
      ))}
    </ul>
  );
};

export default NovelGenreList;
