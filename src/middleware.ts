import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, defaultLocale } from "./navigation";

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale,
  localePrefix,
});

export const config = {
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)", "/([\\w-]+)?//(.+)"],
};
