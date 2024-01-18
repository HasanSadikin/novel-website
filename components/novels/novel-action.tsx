const NovelAction = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold py-5">Action</h1>
      <div className="grid grid-cols-4 gap-4 w-10/12 mx-auto">
        <button
          type="button"
          className="bg-secondary w-full h-full text-white aspect-square rounded-md"
        >
          Like
        </button>
        <button
          type="button"
          className="bg-secondary w-full h-full text-white aspect-square rounded-md"
        >
          Dislike
        </button>
        <button
          type="button"
          className="bg-secondary w-full h-full text-white aspect-square rounded-md"
        >
          Bookmark
        </button>
        <button
          type="button"
          className="bg-secondary w-full h-full text-white aspect-square rounded-md"
        >
          Share
        </button>
      </div>
    </>
  );
};

export default NovelAction;
