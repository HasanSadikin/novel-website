import NovelAction from "@/components/novels/novel-action";
import NovelChapterList from "@/components/novels/novel-chapter-list";
import NovelCommentList from "@/components/novels/novel-comment-list";
import NovelGenreList from "@/components/novels/novel-genre-list";
import NovelRating from "@/components/novels/novel-rating";
import { useServerSupabase } from "@/lib/useSupabase";
import Image from "next/image";

const NovelDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const supabase = useServerSupabase();
  const { data: novel } = await supabase
    .rpc("get_novel_based_on_slug", {
      novelslug: params.slug,
    })
    .single();

  if (!novel) {
    return <p>No Novel Found</p>;
  }

  const { data } = await supabase.storage
    .from("bagong_translation")
    .getPublicUrl(novel.image);

  return (
    <div className="mb-16">
      <div className="relative min-h-10 overflow-hidden">
        <div className="object-cover aspect-[3/4] absolute top-0 w-full z-[-2]">
          <Image
            src={data.publicUrl}
            className="w-full h-full blur-sm"
            width={50}
            height={50}
            alt={novel?.novel_name}
          />
        </div>
        <div className="bg-black/80 absolute top-0 w-full aspect-[3/4] z-[-1]"></div>
        <div className="grid grid-rows-1 gap-10 w-11/12 mx-auto">
          <div className="flex justify-center items-center bg-blue pt-16">
            <Image
              src={data.publicUrl}
              className="w-1/2 aspect-[3/4] shadow-md"
              width={300}
              height={300}
              alt={novel?.novel_name}
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-1 text-white pb-5">
            <h1 className="font-semibold text-2xl text-center">
              {novel.novel_name}
            </h1>
            <h1 className="italic text-center">
              {novel.author} - {novel.origin}
            </h1>
            <NovelRating rating={novel.star} className="py-5" />
            <NovelGenreList genres={novel.genres} className="justify-center" />
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <h1 className="text-center text-2xl font-bold py-5">Description</h1>
        <p className="text-center">{novel.description}</p>
        <div className="w-full h-10 border-b-2 border-gray-300"></div>
        <NovelAction />
        <div className="w-full h-10 border-b-2 border-gray-300"></div>
        <h1 className="text-center text-2xl font-bold py-5">Chapters</h1>
        <NovelChapterList />
        <div className="w-full h-10 border-b-2 border-gray-300"></div>
        <h1 className="text-center text-2xl font-bold py-5">Comments</h1>
        <NovelCommentList />
        <div className="w-full h-10 border-b-2 border-gray-300"></div>
      </div>
    </div>
  );
};

export default NovelDetailsPage;
