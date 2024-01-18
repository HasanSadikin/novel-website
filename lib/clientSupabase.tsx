import { Novel } from "@/types/novel";
import { Database } from "@/types/supabase";
import {
  createClientComponentClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { SupabaseClient } from "@supabase/supabase-js";

export function getClientSupabase() {
  const supabase = createClientComponentClient<Database>();
  return supabase;
}

export function getImagePublicURL(supabase: SupabaseClient, path: string) {
  const { data } = supabase.storage
    .from("bagong_translation")
    .getPublicUrl(path);
  return data.publicUrl;
}

type SC = ReturnType<typeof createServerComponentClient<Database>>;
type CC = ReturnType<typeof createClientComponentClient<Database>>;

export async function getNovelsBySlug(supabase: SC | CC, slug: string) {
  const { data } = await supabase
    .rpc("get_novel_by_slug", { novelslug: slug })
    .single();
  return data;
}

export async function getNovelsByAuthor(supabase: SC | CC, author: number) {
  const data = await supabase
    .rpc("get_novels_by_author", { authorid: author })
    .returns<Novel[]>();
  return data.data;
}

export async function getNovelsByOrigin(supabase: SC | CC, origin: string) {
  const data = await supabase
    .rpc("get_novels_by_origin", { originname: origin })
    .returns<Novel[]>();
  return data.data;
}

export async function getNovelsByGenre(supabase: SC | CC, genre: string) {
  const data = await supabase
    .rpc("get_all_novels_based_on_genre", { genrename: genre })
    .returns<Novel[]>();
  return data.data;
}

export async function getNovels(supabase: SC | CC) {
  const data = await supabase.rpc("get_all_novels").returns<Novel[]>();
  return data.data;
}
