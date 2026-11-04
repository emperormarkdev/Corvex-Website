import { go } from "../routerCore";

const Arrow = () => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
    <path d="M1 6 H16 M12 1.5 L16.5 6 L12 10.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/**
 * Primary (red→orange) / Secondary (outline) / White variants.
 * One consistent chamfer: top-right cut (matches --chamfer-sm).
 */
export default function Button({ variant = "primary", href = "#", children, className = "", onClick, ...rest }) {
  const styles = {
    primary: "btn-primary",
    outline: "btn-outline",
    "outline-dark": "btn-outline-dark",
    white: "btn-white",
    "outline-white": "btn-outline-white",
  };

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (href.startsWith("#/")) {
      e.preventDefault();
      go(href.slice(1));
      return;
    }
    if (href.startsWith("/") && !href.startsWith("//")) {
      e.preventDefault();
      go(href);
    }
  };

  const resolvedHref = href.startsWith("#/") ? href.slice(1) : href;

  return (
    <a href={resolvedHref} onClick={handleClick} className={`btn chamfer-tr-sm ${styles[variant] ?? styles.primary} ${className}`} {...rest}>
      <span>{children}</span>
      <Arrow />
    </a>
  );
}

export function TextLink({ href = "#", children, className = "", dark = false, onClick, ...rest }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (href.startsWith("#/")) {
      e.preventDefault();
      go(href.slice(1));
      return;
    }
    if (href.startsWith("/") && !href.startsWith("//")) {
      e.preventDefault();
      go(href);
    }
  };

  const resolvedHref = href.startsWith("#/") ? href.slice(1) : href;

  return (
    <a
      href={resolvedHref}
      onClick={handleClick}
      className={`text-link ${dark ? "text-black" : "text-white"} ${className}`}
      {...rest}
    >
      <span>{children}</span>
      <Arrow />
    </a>
  );
}
