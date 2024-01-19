import {
  BookOpenIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";
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
        <BookmarkButton novel={novel} toggle={bookmarked} />
        <BookmarkButton novel={novel} toggle={bookmarked} />
      </div>
    </>
  );
};

export default NovelAction;
