/**
 * Single 1.5px thin-line icon set, all drawn on a 28×28 box so every
 * glyph has the same optical weight. Stroke = currentColor, no fill.
 *
 * Mapping is deliberate — each icon depicts the actual service:
 *  01 Engineering Solutions  → drafting compass
 *  02 Industrial Support     → wrench
 *  03 Critical Operations    → pressure gauge / needle
 *  04 Infrastructure         → structural frame (truss)
 *  05 Oil & Gas Support      → drilling derrick
 *  06 HSE & Compliance       → shield with check
 */
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconCompass({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" {...base} aria-hidden="true">
      <circle cx="14" cy="6" r="2.2" />
      <path d="M12.4 8.2 L6.4 23.6" />
      <path d="M15.6 8.2 L21.6 23.6" />
      <path d="M9 16.4 H19" />
      <path d="M5 23.8 H7.8 M20.2 23.8 H23" />
    </svg>
  );
}

export function IconWrench({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" {...base} aria-hidden="true">
      <path d="M20.6 7.4a4.8 4.8 0 0 0-6.2 6.1l-9 9a2.4 2.4 0 0 0 3.4 3.4l9-9a4.8 4.8 0 0 0 6.1-6.2l-2.8 2.8-3.3-3.3z" />
    </svg>
  );
}

export function IconGauge({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" {...base} aria-hidden="true">
      <path d="M4.6 20.4a9.4 9.4 0 0 1 18.8 0" />
      <path d="M6.6 17.6l1.7 1.7 M21.4 17.6l-1.7 1.7" />
      <path d="M14 20.4 L20 11.2" />
      <circle cx="14" cy="20.4" r="1.7" />
      <path d="M3.6 20.4 H24.4" />
    </svg>
  );
}

export function IconTruss({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" {...base} aria-hidden="true">
      <path d="M4.5 23.5 V8 H23.5 V23.5" />
      <path d="M4.5 15.5 H23.5" />
      <path d="M10.2 8 V23.5 M17.8 8 V23.5" />
      <path d="M10.2 15.5 L17.8 8" />
      <path d="M10.2 15.5 L17.8 23.5" />
    </svg>
  );
}

export function IconDerrick({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" {...base} aria-hidden="true">
      <path d="M14 4 L7 24.5" />
      <path d="M14 4 L21 24.5" />
      <path d="M5.5 24.5 H22.5" />
      <path d="M11.2 10.6 H16.8" />
      <path d="M9.5 17 H18.5" />
      <path d="M9.5 17 L16.8 10.6 M11.2 10.6 L18.5 17" />
    </svg>
  );
}

export function IconShield({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" {...base} aria-hidden="true">
      <path d="M14 3.5 L23 7.4 V13.4 C23 19 18.6 22.9 14 24.5 C9.4 22.9 5 19 5 13.4 V7.4 Z" />
      <path d="M10.2 13.6 L13 16.4 L18 11.2" />
    </svg>
  );
}

export function IconArrowNE({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" {...base} aria-hidden="true">
      <path d="M3 15 L15 3 M6 3 H15 V12" />
    </svg>
  );
}
