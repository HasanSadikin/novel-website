import { useServerSupabase } from "@/lib/useSupabase";
import InteractiveSearch from "@/components/novels/Interactive-search";

const FilteredSearchByIDGenrePage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const genreID = params.id;
  const supabase = useServerSupabase();
  const { data } = await supabase
    .from("GenreGroups")
    .select(
      `
        novel: novel_id (id, name, image, description, star, author: author_id(name), origin: origin_id(name))
    `
    )
    .eq("genre_id", genreID);

  const { data: genre } = await supabase
    .from("Genres")
    .select("name")
    .eq("id", genreID)
    .single();

  if (data == null || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center font-bold text-3xl">Genre Not Found</h1>
      </div>
    );
  }

  const novels: any[] = [];
  data.map((n) => novels.push(n.novel));

  return (
    <div className="mb-16">
      <h1 className="text-center font-bold text-3xl py-8">
        <span className="text-secondary">{genre?.name}</span> Novels
      </h1>
      <InteractiveSearch novels={novels} />
    </div>
  );
};

export default FilteredSearchByIDGenrePage;