import { useEffect, useState } from "react";

/**
 * Tiny hash router core — works on any static host, no server rewrites.
 * Routes look like `#/services/hse-compliance`.
 * Bare anchors (`#services`) still scroll within the home page.
 */

export function currentPath() {
  const h = window.location.hash || "#/";
  if (!h.startsWith("#/")) return "/";
  const rest = h.slice(2).split("?")[0];
  return "/" + rest.replace(/\/+$/, "") || "/";
}

export function useRoute() {
  const [route, setRoute] = useState(currentPath);
  useEffect(() => {
    const onChange = () => {
      const h = window.location.hash || "";
      setRoute(currentPath());
      if (h.startsWith("#/") || h === "" || h === "#/") {
        window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      } else {
        const id = h.slice(1);
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
      }
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

/** Programmatic navigation; re-tapping the current route scrolls to top. */
export function go(to) {
  if (`#${to}` === window.location.hash) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.location.hash = `#${to}`;
  }
}

/** Split "/services/hse-compliance" → ["services", "hse-compliance"] */
export function segments(path) {
  return path.split("/").filter(Boolean);
}
