import { Suspense } from "react";

import LoadingNovel from "@/components/novels/loading";
import InteractiveSearch from "@/components/novels/Interactive-search";

import { toPascalCase, dashToWhiteSpace } from "@/utils/utils";
import { getNovelsByGenre } from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";

const FilteredSearchByIDGenrePage = async ({
  params,
}: {
  params: { genreName: string };
}) => {
  const novels = await getNovelsByGenre(
    getServerSupabase(),
    dashToWhiteSpace(params.genreName)
  );

  if (novels == null || novels.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-center font-bold text-3xl">Genre Not Found</h1>
      </div>
    );
  }

  return (
    <div className="mb-28">
      <h1 className="text-center font-bold text-3xl py-8">
        <span className="text-secondary">{toPascalCase(params.genreName)}</span>{" "}
        Novels
      </h1>
      <Suspense fallback={<LoadingNovel />}>
        <InteractiveSearch novels={novels} />
      </Suspense>
    </div>
  );
};

export default FilteredSearchByIDGenrePage;
