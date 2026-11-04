/**
 * Internal link — always use for in-site navigation (never a bare "#").
 * Navigation helpers and the `useRoute` hook live in `routerCore.js`.
 */
export function Link({ to, children, ...rest }) {
  return (
    <a href={`#${to}`} {...rest}>
      {children}
    </a>
  );
}
