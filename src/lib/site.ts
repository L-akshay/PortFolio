/** Canonical site URL; falls back to localhost during development. */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://lakshayai.in";

export const githubUsername = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "L-akshay";
