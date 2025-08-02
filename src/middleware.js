import { betterFetch } from "@better-fetch/fetch";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const { data: session } = await betterFetch("/api/auth/get-session", {
    baseURL: request.nextUrl.origin,
    headers: {
      cookie: request.headers.get("cookie") || "", // İstekten gelen çerezleri ilet
    },
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"], // Middleware yalnızca bu rotaya uygulanır
};
