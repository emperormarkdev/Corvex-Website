import { useEffect, useState } from "react";

/**
 * History API router with hash compatibility.
 *
 * URLs are real paths (`/services/hse-compliance`) so crawlers can index them
 * and canonical tags point at something that actually resolves. The site was
 * originally hash-routed, so a compatibility layer keeps every `#/services`
 * link working:
 *
 *   - a URL that still carries `#/...` is read as a route, then rewritten in
 *     place to the real path on load
 *   - clicking any `href="#/x"` button changes the hash as before; the router
 *     picks it up and normalises the address bar
 *
 * DEEP LINKING: a static host must rewrite unknown paths to `/index.html`.
 * `public/_redirects` (Netlify) and `public/404.html` (GitHub Pages) are
 * included; add an equivalent rule for any other host.
 */

const EVENT = "cx:route";

function fromHash(hash) {
  if (!hash || !hash.startsWith("#/")) return null;
  const rest = hash.slice(2).split("?")[0];
  return "/" + rest.replace(/\/+$/, "");
}

function fromPathname() {
  const p = window.location.pathname.replace(/\/+$/, "");
  return p || "/";
}

/** Current route path, preferring a legacy hash when one is present. */
export function currentPath() {
  return fromHash(window.location.hash) || fromPathname();
}

/** Collapse any `#/...` left in the address bar into a real path. */
function normaliseAddress() {
  const legacy = fromHash(window.location.hash);
  if (!legacy) return;
  const search = window.location.hash.split("?")[1] ?? "";
  history.replaceState(null, "", legacy + (search ? "?" + search : ""));
}

export function useRoute() {
  const [route, setRoute] = useState(currentPath);

  useEffect(() => {
    // First paint of a legacy deep link: rewrite to the clean URL.
    normaliseAddress();

    const sync = () => {
      const next = currentPath();
      normaliseAddress();
      setRoute((prev) => (prev === next ? prev : next));
    };

    const onChange = () => {
      const h = window.location.hash || "";
      if (h.startsWith("#/") || h === "#/") {
        sync();
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      if (h) {
        // Bare anchor — scroll within the page, don't change route.
        const id = h.slice(1);
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }));
        return;
      }
      // Back/forward with no hash.
      const next = fromPathname();
      setRoute((prev) => (prev === next ? prev : next));
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    const onPop = () => {
      setRoute((prev) => {
        const next = currentPath();
        return prev === next ? prev : next;
      });
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onPop);
    window.addEventListener(EVENT, onPop);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener(EVENT, onPop);
    };
  }, []);

  return route;
}

/** Programmatic navigation to a real path. Re-tapping the current route scrolls to top. */
export function go(to) {
  const target = to.startsWith("/") ? to : "/" + to;
  const current = fromPathname();
  if (target === current && window.location.hash === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  history.pushState(null, "", target);
  window.dispatchEvent(new Event(EVENT));
}

/** Split "/services/hse-compliance" → ["services", "hse-compliance"] */
export function segments(path) {
  return path.split("/").filter(Boolean);
}

/** True when the href points at a route rather than an external URL or anchor. */
export function isInternalRoute(href) {
  if (!href) return false;
  if (href.startsWith("#/")) return true;
  return href.startsWith("/") && !href.startsWith("//");
}

/** Turn a route-ish href (`/x`, `#/x`) into a clean path. */
export function normalisePath(href) {
  if (href.startsWith("#/")) return href.slice(1);
  return href;
}
