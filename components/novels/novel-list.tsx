import NovelItem from "./novel-item";

const NovelList = ({ novels }: { novels: any[] | null }) => {
  return (
    <ul className="grid grid-cols-1 w-11/12 mx-auto">
      {novels?.map((novel) => (
        <NovelItem novel={novel} key={novel.id} />
      ))}
    </ul>
  );
};

export default NovelList;
