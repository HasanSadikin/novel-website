// import { NextResponse } from "next/server";
// import { useRouteSupabase } from "@/lib/useSupabase";

import { useRouteSupabase } from "@/lib/useSupabase";
import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   const requestUrl = new URL(request.url);
//   const supabase = useRouteSupabase();
//   await supabase.auth.signOut();

//   return NextResponse.redirect(`${requestUrl.origin}`, {
//     status: 301,
//   });
// }

export async function POST(req: Request) {
  const requestURL = new URL(req.url);
  const supabase = useRouteSupabase();
  await supabase.auth.signOut();
  return NextResponse.redirect(requestURL.origin);
}
