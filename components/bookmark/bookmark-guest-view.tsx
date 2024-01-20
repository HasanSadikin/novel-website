import Link from "next/link";

const BookmarkGuestView = () => {
  return (
    <>
      <Link href="/account">
        <h1 className="text-center underline text-secondary">
          Please login To see your bookmarked novels
        </h1>
      </Link>
    </>
  );
};

export default BookmarkGuestView;
