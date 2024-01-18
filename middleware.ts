import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import { NextRequest } from "next/server";
import type { Database } from "./types/supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (req.nextUrl.pathname === "/novels") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (req.nextUrl.pathname === "/genre") {
    return NextResponse.redirect(new URL("/search", req.url));
  }

  if (!user && req.nextUrl.pathname.startsWith("/todos")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  await supabase.auth.getSession();

  if (user && req.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/todos", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/",
    "/todos",
    "/genre",
    "/novels",
  ],
};
