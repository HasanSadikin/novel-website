import { Suspense } from "react";

import LoadingNovel from "@/components/novels/loading";
import InteractiveSearch from "@/components/search/interactive-search";

import { toPascalCase, dashToWhiteSpace } from "@/utils/utils";
import { getClientSupabase, getNovelsByGenre } from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";

export async function generateStaticParams() {
  const supabase = getClientSupabase();
  const { data: slugs } = await supabase
    .from("Genres")
    .select("slug")
    .returns<string[]>();

  if (!slugs) return [];

  return slugs.map((slug) => slug);
}

const FilteredSearchByIDGenrePage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const novels = await getNovelsByGenre(
    getServerSupabase(),
    dashToWhiteSpace(params.slug)
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
        <span className="text-secondary">{toPascalCase(params.slug)}</span>{" "}
        Novels
      </h1>
      <Suspense fallback={<LoadingNovel />}>
        <InteractiveSearch novels={novels} />
      </Suspense>
    </div>
  );
};

export default FilteredSearchByIDGenrePage;
