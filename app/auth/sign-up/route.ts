import { Database } from "@/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestURL = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookies(),
  });

  await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestURL.origin}/auth/callback`,
    },
  });

  return NextResponse.redirect(requestURL.origin, {
    status: 301,
  });
}
