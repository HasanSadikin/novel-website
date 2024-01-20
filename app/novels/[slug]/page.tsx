import LoadingNovelDetails from "@/components/novels/loading-novel-details";
import NovelDetails from "@/components/novels/novel-details";
import {
  getClientSupabase,
  getImagePublicURL,
  getNovelsBySlug,
  wrapPromise,
} from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";
import { dashToWhiteSpace } from "@/utils/utils";
import { Suspense } from "react";

export async function generateStaticParams() {
  const supabase = getClientSupabase();
  const { data: slugs } = await supabase.from("Novels").select("slug");

  if (!slugs) return [];

  return slugs?.map(({ slug }) => ({
    slug,
  }));
}

const Details = async ({ slug }: { slug: string }) => {
  const supabase = getServerSupabase();
  const novel = await getNovelsBySlug(supabase, slug);

  if (!novel) {
    return (
      <h1 className="text-center font-bold text-lg py-8">Novel Not Found</h1>
    );
  }

  const image = await getImagePublicURL(supabase, novel.image);

  return <NovelDetails novel={novel} image={image} />;
};

const NovelDetailsPage = async ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <Suspense fallback={<LoadingNovelDetails />}>
        <Details slug={params.slug} />
      </Suspense>
    </>
  );
};

export default NovelDetailsPage;
