import NovelList from "@/components/novels/novel-list";
import { getNovelsByAuthor } from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";

const SearchByAuthorPage = async ({ params }: { params: { id: number } }) => {
  const novels = await getNovelsByAuthor(getServerSupabase(), params.id);

  return (
    <div className="mb-16">
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
    </div>
  );
};

export default SearchByAuthorPage;
