import Link from "next/link";

const BookmarkGuestView = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl py-8">Bookmark Novels</h1>
      <Link href="/account">
        <h1 className="text-center underline text-secondary">
          Please login To see your bookmarked novels
        </h1>
      </Link>
    </>
  );
};

export default BookmarkGuestView;
