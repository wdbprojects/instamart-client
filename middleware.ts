import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/home", "/dashboard", "/"];
const publicRoutes = [
  "/login",
  "/register",
  "/password/forgot",
  "/password/reset",
  "/email/verify",
  "/about",
];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const accessToken = req.cookies.get("accessToken")?.value;
  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (isPublicRoute && accessToken) {
    return NextResponse.redirect(new URL("/home", req.nextUrl));
  }
  return NextResponse.next();
}
