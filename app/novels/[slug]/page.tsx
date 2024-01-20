import NovelDetails from "@/components/novels/novel-details";
import {
  getClientSupabase,
  getImagePublicURL,
  getNovelsBySlug,
} from "@/lib/clientSupabase";
import { getServerSupabase } from "@/lib/serverSupabase";

export async function generateStaticParams() {
  const supabase = getClientSupabase();
  const { data: slugs } = await supabase.from("Novels").select("slug");

  if (!slugs) return [];

  return slugs?.map(({ slug }) => ({
    slug,
  }));
}

const NovelDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const supabase = getServerSupabase();
  const novel = await getNovelsBySlug(supabase, params.slug);

  if (!novel) {
    return <p>No Novel Found</p>;
  }

  const image = await getImagePublicURL(supabase, novel.image);

  return <NovelDetails novel={novel} image={image} />;
};

export default NovelDetailsPage;
