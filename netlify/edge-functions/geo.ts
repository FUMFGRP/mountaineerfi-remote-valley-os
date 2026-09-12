import type { Config, Context } from "https://edge.netlify.com";

// Sets a short-lived cookie with the visitor's country so the client-side
// language suggestion banner can offer the right locale (e.g. NP -> Nepali).
// Runs on Netlify Edge only; not active in local `astro dev`.
export default async (request: Request, context: Context) => {
  const response = await context.next();
  const country = context.geo?.country?.code;
  if (country) {
    response.headers.append(
      "Set-Cookie",
      `rvo-country=${country}; Path=/; Max-Age=86400; SameSite=Lax`
    );
  }
  return response;
};

export const config: Config = {
  path: "/*",
  excludedPath: [
    "/_astro/*",
    "/assets/*",
    "/favicon.svg",
    "/favicon-16.png",
    "/favicon-32.png",
    "/favicon-48.png",
    "/apple-touch-icon.png",
    "/icon-192.png",
    "/icon-512.png",
    "/site.webmanifest",
    "/robots.txt",
  ],
};
