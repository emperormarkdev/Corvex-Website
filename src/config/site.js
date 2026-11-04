/**
 * Single source of truth for the deployment origin.
 *
 * Every canonical URL, og:url, JSON-LD @id/url/logo, sitemap entry and
 * absolute link must derive from SITE_URL. Moving to a real domain later is a
 * one-line change here (or a VITE_SITE_URL env var in the host's dashboard).
 *
 * Rules: https, no "www", no trailing slash.
 */
const RAW_SITE_URL = import.meta.env?.VITE_SITE_URL || "https://corvex-three.vercel.app";

/** Canonical origin, normalised: https, no www, no trailing slash. */
export const SITE_URL = RAW_SITE_URL.replace(/\/+$/, "");

/** Public brand name used in titles, og:site_name and structured data. */
export const SITE_NAME = "Corvex";

/** Build an absolute URL for a site path ("/services" → "https://…/services"). */
export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_URL + "/";
  return SITE_URL + (path.startsWith("/") ? path : "/" + path);
}
