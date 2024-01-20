import BookmarkButton from "@/components/bookmark/bookmark-button";
import { Novel } from "@/types/novel";
import { getServerSupabase } from "@/lib/serverSupabase";

const NovelAction = async ({ novel }: { novel: Novel }) => {
  const supabase = getServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let bookmarked = false;

  if (user) {
    const { data: isBookmarked } = await supabase.rpc("is_bookmarked", {
      novelid: novel.id,
      userid: user.id,
    });

    bookmarked = isBookmarked as boolean;
  }

  return (
    <>
      <h1 className="text-center text-2xl font-bold py-5">Action</h1>
      <div className="grid grid-cols-3 gap-4 w-10/12 mx-auto">
        <BookmarkButton novel={novel} toggle={bookmarked} />
        {/* <BookmarkButton novel={novel} toggle={bookmarked} />
        <BookmarkButton novel={novel} toggle={bookmarked} /> */}
      </div>
      <div className="w-full h-10 border-b-2 border-gray-300"></div>
    </>
  );
};

export default NovelAction;
