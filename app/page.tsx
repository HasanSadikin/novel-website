import React, { Suspense } from "react";
import Link from "next/link";

import LoadingNovel from "@/components/novels/loading";
import NovelList from "@/components/novels/novel-list";

import { getNovels, wrapPromise } from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";

const PopularList = async () => {
  const novels = await getNovels(getServerSupabase());
  return (
    <>
      <NovelList novels={novels} />
    </>
  );
};

const UpdatedList = async () => {
  const novels = await getNovels(getServerSupabase());
  return (
    <>
      <NovelList novels={novels} />
      <NovelList novels={novels} />
    </>
  );
};

const Home = async () => {
  return (
    <div className="bg-white min-h-screen mb-16">
      <h1 className="text-center font-bold text-3xl py-8">Popular Novels</h1>
      <Suspense fallback={<LoadingNovel />}>
        <PopularList />
      </Suspense>
      <h1 className="text-center font-bold text-3xl py-8">Updated Novels</h1>
      <Suspense fallback={<LoadingNovel />}>
        <UpdatedList />
      </Suspense>
      <Link href="/search/popular">
        <p className="text-center pt-5 w-full text-lg text-secondary ">
          Browse Popular Novels
        </p>
      </Link>
    </div>
  );
};

export default Home;
