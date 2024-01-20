import LoadingNovel from "@/components/novels/loading";
import NovelList from "@/components/novels/novel-list";
import { getClientSupabase, getNovelsByAuthor } from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";
import { Suspense } from "react";

export async function generateStaticParams() {
  const supabase = getClientSupabase();
  const { data } = await supabase.from("Authors").select("id");

  if (!data) return [];

  return data?.map((data) => ({
    id: String(data.id),
  }));
}

const Search = async ({ id }: { id: string }) => {
  const novels = await getNovelsByAuthor(getServerSupabase(), Number(id));

  return (
    <>
      {novels ? (
        <div className="flex font-bold text-3xl py-8 gap-2 justify-center items-center">
          <div className="max-w-xs">
            <h1 className="text-secondary truncate">{novels[0].author}</h1>
          </div>
          <h1>Novels</h1>
        </div>
      ) : (
        <h1 className="text-center font-bold text-3xl py-8 ">
          Author Not Found
        </h1>
      )}
      <NovelList novels={novels} />
    </>
  );
};

const SearchByAuthorPage = async ({ params }: { params: { id: string } }) => {
  return (
    <div className="mb-16">
      <Suspense fallback={<LoadingNovel />}>
        <Search id={params.id} />
      </Suspense>
    </div>
  );
};

export default SearchByAuthorPage;
