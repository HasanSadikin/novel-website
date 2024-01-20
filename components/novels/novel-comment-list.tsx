import NovelCommentItem from "./novel-comment-item";

const NovelCommentList = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold py-5">Comments</h1>
      <ul>
        <NovelCommentItem />
        <NovelCommentItem />
        <NovelCommentItem />
        <NovelCommentItem />
      </ul>
      <div className="w-full h-10 border-b-2 border-gray-300"></div>
    </>
  );
};

export default NovelCommentList;
