import {
  createClientComponentClient,
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
