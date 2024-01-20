import { Suspense } from "react";

import LoadingNovel from "@/components/novels/loading";
import InteractiveSearch from "@/components/search/interactive-search";

import { getClientSupabase, getNovelsByOrigin } from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";

const Search = async ({ origin }: { origin: string }) => {
  const novels = await getNovelsByOrigin(getServerSupabase(), origin);

  if (novels == null || novels.length === 0) {
    return (
      <div className="flex justify-center items-center">
        <h1 className="text-center font-bold text-lg">Origin Not Found</h1>
      </div>
    );
  }

  return <InteractiveSearch novels={novels} />;
};

export async function generateStaticParams() {
  const supabase = getClientSupabase();
  const { data: names } = await supabase
    .from("Origins")
    .select("name")
    .returns<string[]>();

  if (!names) return [];

  return names.map((name) => name);
}

const FilteredSearchByIDGenrePage = async ({
  params,
}: {
  params: { name: string };
}) => {
  return (
    <div className="mb-28">
      <h1 className="text-center font-bold text-3xl py-8">
        <span className="text-secondary">{params.name}</span> Novels
      </h1>
      <Suspense fallback={<LoadingNovel />}>
        <Search origin={params.name} />
      </Suspense>
    </div>
  );
};

export default FilteredSearchByIDGenrePage;
