import React from "react";
import NovelChapterItem from "./novel-chapter-item";

const NovelChapterList = () => {
  return (
    <>
      <h1 className="text-center text-2xl font-bold py-5">Chapters</h1>
      <ul>
        <NovelChapterItem />
        <NovelChapterItem />
        <NovelChapterItem />
        <NovelChapterItem />
      </ul>
      <div className="w-full h-10 border-b-2 border-gray-300"></div>
    </>
  );
};

export default NovelChapterList;
