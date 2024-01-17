// import { NextResponse } from "next/server";
// import { useRouteSupabase } from "@/lib/useSupabase";

import { useRouteSupabase } from "@/lib/useSupabase";
import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const requestURL = new URL(request.url);
//   const formData = await request.formData();
//   const email = String(formData.get("email"));
//   const password = String(formData.get("password"));

//   const supabase = useRouteSupabase();

//   await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   return NextResponse.redirect(requestURL.origin, {
//     status: 301,
//   });
// }

export async function POST(req: Request) {
  const requestURL = new URL(req.url);
  const formData = await req.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));

  const supabase = useRouteSupabase();
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return NextResponse.redirect(`${requestURL.origin}`);
  }

  return NextResponse.redirect(new URL("/todos", req.url));
}
