import BookmarkError from "@/components/bookmark/bookmark-error";
import BookmarkGuestView from "@/components/bookmark/bookmark-guest-view";
import NovelList from "@/components/novels/novel-list";

import { getBookmarksByID } from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";

type Props = {};

export default async function page({}: Props) {
  const supabase = getServerSupabase();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return <BookmarkGuestView />;

  const novels = await getBookmarksByID(supabase, user.id);

  if (!novels) return <BookmarkError />;

  return (
    <>
      <h1 className="text-center font-bold text-3xl py-8">Bookmark Novels</h1>
      {novels.length > 0 ? (
        <NovelList novels={novels} />
      ) : (
        <h1>No Bookmarked Novels</h1>
      )}
    </>
  );
}
