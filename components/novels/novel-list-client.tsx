"use client";

import { Novel } from "@/types/novel";
import NovelItemClient from "./novel-item-client";

const NovelListClient = ({ novels }: { novels: Novel[] | null }) => {
  return (
    <ul className="grid grid-cols-1 w-11/12 mx-auto">
      {novels?.map((novel) => (
        <NovelItemClient novel={novel} key={novel.id} />
      ))}
    </ul>
  );
};

export default NovelListClient;
