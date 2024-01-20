import { getServerSupabase } from "@/lib/serverSupabase";
import { getNovels } from "@/lib/clientSupabase";
import InteractiveSearch from "@/components/search/interactive-search";
import { Suspense } from "react";
import LoadingNovel from "@/components/novels/loading";

async function Search() {
  const data = await getNovels(getServerSupabase());
  if (data == null || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center font-bold text-3xl">Somethings Wrong</h1>
      </div>
    );
  }
  return <InteractiveSearch novels={data} />;
}

const SearchPage = async () => {
  return (
    <div className="mb-32">
      <h1 className="text-center font-bold text-3xl py-8">Search Novels</h1>
      <Suspense fallback={<LoadingNovel />}>
        <Search />
      </Suspense>
    </div>
  );
};

export default SearchPage;
