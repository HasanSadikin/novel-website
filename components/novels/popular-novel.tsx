import { useServerSupabase } from "@/lib/useSupabase";
import PopularNovelItem from "./popular-novel-item";

const PopularNovel = async () => {
  const supabase = useServerSupabase();
  const { data: novels } = await supabase.from("Novels").select().limit(3);
  return (
    <ul className="grid grid-rows-3 w-screen h-3/4 overflow-hidden">
      {novels?.map((novel) => (
        <PopularNovelItem novel={novel} key={novel.id} />
      ))}
    </ul>
  );
};

export default PopularNovel;
