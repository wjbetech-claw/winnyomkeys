import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import {
  getPreferredLocale,
  isLocale,
  localeCookieName,
  localeHeaderName,
  localizePath,
} from "@/i18n/config";

const cookieMaxAge = 60 * 60 * 24 * 365;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const maybeLocale = pathname.split("/")[1];

  if (!isLocale(maybeLocale)) {
    const locale = getPreferredLocale(
      request.cookies.get(localeCookieName)?.value
    );
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = localizePath(pathname, locale);

    const response = NextResponse.redirect(redirectUrl);

    response.cookies.set(localeCookieName, locale, {
      path: "/",
      maxAge: cookieMaxAge,
      sameSite: "lax",
    });

    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeHeaderName, maybeLocale);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.cookies.set(localeCookieName, maybeLocale, {
    path: "/",
    maxAge: cookieMaxAge,
    sameSite: "lax",
  });

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
