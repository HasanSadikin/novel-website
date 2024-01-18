import { useServerSupabase } from "@/lib/useSupabase";
import InteractiveSearch from "@/components/novels/Interactive-search";
import { Novel } from "@/types/novel";

const SearchPage = async () => {
  const supabase = useServerSupabase();
  const { data } = await supabase.rpc("get_all_novels").returns<Novel[]>();

  if (data == null || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center font-bold text-3xl">Genre Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mb-32">
      <h1 className="text-center font-bold text-3xl py-8">Search Novels</h1>
      <InteractiveSearch novels={data} />
    </div>
  );
};

export default SearchPage;
