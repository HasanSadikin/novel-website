import { NextResponse } from "next/server";
import { useRouteSupabase } from "@/lib/useSupabase";

export async function POST(request: Request) {
  const requestURL = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const supabase = useRouteSupabase();
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
