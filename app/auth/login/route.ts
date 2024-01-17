import { Database } from "@/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const requestURL = new URL(req.url);
  const formData = await req.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookies(),
  });
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return NextResponse.redirect(`${requestURL.origin}`);
  }

  return NextResponse.redirect(new URL("/todos", req.url));
}
