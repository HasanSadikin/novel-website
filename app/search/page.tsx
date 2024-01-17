import { useServerSupabase } from "@/lib/useSupabase";
import InteractiveSearch from "@/components/novels/Interactive-search";

const SearchPage = async ({ params }: { params: { id: string } }) => {
  const genreID = params.id;
  const supabase = useServerSupabase();
  const { data } = await supabase.from("Novels").select(
    `
        id, name, image, description, star, author: author_id(name), origin: origin_id(name)
    `
  );

  if (data == null || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center font-bold text-3xl">Genre Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <h1 className="text-center font-bold text-3xl py-8">Search Novels</h1>
      <InteractiveSearch novels={data} />
    </div>
  );
};

export default SearchPage;
