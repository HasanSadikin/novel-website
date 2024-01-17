import LoadingNovel from "@/components/novels/loading";
import NovelList from "@/components/novels/novel-list";
import PopularNovel from "@/components/novels/popular-novel";
import { useServerSupabase } from "@/lib/useSupabase";
import Link from "next/link";
import { Suspense } from "react";

const Home = async () => {
  const supabase = useServerSupabase();
  const { data } = await supabase.from("Novels").select(`
    id,
    name,
    author: author_id (name),
    origin: origin_id (name),
    image,
    star,
    description,
    slug
  `);

  return (
    <div className="bg-white min-h-screen mb-16">
      <h1 className="text-center font-bold text-3xl py-8">Popular Novels</h1>
      <Suspense fallback={<LoadingNovel />}>
        <NovelList novels={data} />
      </Suspense>
      <Link href="/search/popular">
        <p className="text-center pt-5 w-full text-lg text-secondary ">
          Browse Popular Novels
        </p>
      </Link>
      <h1 className="text-center font-bold text-3xl py-8">Updated Novels</h1>
      <Suspense fallback={<LoadingNovel />}>
        <NovelList novels={data} />
        <NovelList novels={data} />
      </Suspense>
    </div>
  );
};

export default Home;
