"use client";

import NovelItemClient from "./novel-item-client";

const NovelListClient = ({ novels }: { novels: any[] | null }) => {
  return (
    <ul className="grid grid-cols-1 w-11/12 mx-auto">
      {novels?.map((novel) => (
        <NovelItemClient novel={novel} key={novel.id} />
      ))}
    </ul>
  );
};

export default NovelListClient;
