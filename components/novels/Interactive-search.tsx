"use client";

import { useEffect, useState } from "react";
import NovelListClient from "./novel-list-client";
import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";

const InteractiveSearch = ({ novels }: { novels: any[] }) => {
  const [novelList, setNovelList] = useState([...novels]);
  const [search, setSearch] = useState("");

  function handleSearch(e: any) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    const filteredNovelName: any[] = [];

    [...novels].map((x) => {
      if (x.name.toLowerCase().includes(search.toLowerCase())) {
        filteredNovelName.push(x);
      }
    });

    setNovelList(filteredNovelName);
  }, [search]);

  return (
    <>
      {novelList.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <h1 className="text-center font-bold text-3xl">No Match</h1>
        </div>
      ) : (
        <NovelListClient novels={novelList} />
      )}
      <div className="fixed bottom-16 h-14 bg-white/50 backdrop-blur-md flex items-center w-full">
        <div className="w-11/12 mx-auto relative">
          <input
            className="border-secondary border-2 rounded-md pr-3 pl-12 py-2 w-full"
            onChange={handleSearch}
          />
          <div className="absolute h-full w-7 z-[10] top-0 left-2 flex items-center">
            <MagnifyingGlassIcon className="w-full h-full text-secondary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveSearch;
