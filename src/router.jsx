import { go } from "./routerCore";

/**
 * Internal link — always use for in-site navigation (never a bare "#").
 *
 * Renders a real path in `href` so the link is crawlable and middle-click /
 * open-in-new-tab works, then intercepts a plain left click for instant
 * client-side navigation.
 */
export function Link({ to, children, onClick, ...rest }) {
  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    // Let the browser handle modified clicks (new tab, new window, download).
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    go(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
