import {
  createClientComponentClient,
  createRouteHandlerClient,
  createServerComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import type { Database } from "@/types/supabase";

export function useClientSupabase() {
  const supabase = createClientComponentClient<Database>();
  return supabase;
}

export function useServerSupabase() {
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookies(),
  });
  return supabase;
}

export function useRouteSupabase() {
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookies(),
  });
  return supabase;
}

export async function getServerPublicUrl(imagePath: string) {
  const supabase = useServerSupabase();
  const {
    data: { publicUrl: novelImage },
  } = await supabase.storage.from("bagong_translation").getPublicUrl(imagePath);

  return novelImage;
}
