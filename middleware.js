import { NextResponse } from "next/server";

export function middleware(request) {
  const cookie = request.cookies.get("token");
  const token = cookie ? cookie.value : undefined;

  // Jika sudah login dan akses signup/signin, redirect ke /
  if (token && (request.nextUrl.pathname === "/signup" || request.nextUrl.pathname === "/signin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/signup", "/signin"], // tambahkan halaman yang ingin dicek
};
