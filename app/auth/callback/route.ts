// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// import { useRouteSupabase } from "@/lib/useSupabase";

import { useRouteSupabase } from "@/lib/useSupabase";
import { NextResponse } from "next/server";

// export async function GET(request: NextRequest) {
//   const requestURL = new URL(request.url);
//   const code = requestURL.searchParams.get("code");

//   if (code) {
//     const supabase = useRouteSupabase();
//     await supabase.auth.exchangeCodeForSession(code);
//   }

//   return NextResponse.redirect(requestURL.origin);
// }

export async function GET(req: Request) {
  const requestURL = new URL(req.url);
  const code = requestURL.searchParams.get("code");

  if (code) {
    const supabase = useRouteSupabase();
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(requestURL.origin);
}
