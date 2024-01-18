import LoadingNovel from "@/components/novels/loading";
import NovelList from "@/components/novels/novel-list";
import { useServerSupabase } from "@/lib/useSupabase";
import { Novel } from "@/types/novel";
import Link from "next/link";
import { Suspense } from "react";

const Home = async () => {
  const supabase = useServerSupabase();

  const { data: novel } = await supabase
    .rpc("get_all_novels")
    .returns<Novel[]>();

  return (
    <div className="bg-white min-h-screen mb-16">
      <h1 className="text-center font-bold text-3xl py-8">Popular Novels</h1>
      <Suspense fallback={<LoadingNovel />}>
        <NovelList novels={novel} />
      </Suspense>
      <Link href="/search/popular">
        <p className="text-center pt-5 w-full text-lg text-secondary ">
          Browse Popular Novels
        </p>
      </Link>
      <h1 className="text-center font-bold text-3xl py-8">Updated Novels</h1>
      <Suspense fallback={<LoadingNovel />}>
        <NovelList novels={novel} />
        <NovelList novels={novel} />
      </Suspense>
    </div>
  );
};

export default Home;
