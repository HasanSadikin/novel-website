import { Database } from "@/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const requestURL = new URL(req.url);
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookies(),
  });
  await supabase.auth.signOut();
  return NextResponse.redirect(requestURL.origin);
}
