import { getServerSupabase } from "@/lib/serverSupabase";
import { getNovels } from "@/lib/clientSupabase";
import InteractiveSearch from "@/components/search/interactive-search";

const SearchPage = async () => {
  const data = await getNovels(getServerSupabase());

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
