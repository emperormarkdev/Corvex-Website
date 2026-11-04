/**
 * CORVEX logo — single swappable component.
 *
 * Glyph outlines are taken verbatim from the brand source file
 * `behance/corvex logo.svg`: the stacked COR / VEX lockup inside a heavy
 * square frame (324 × 230). The letters are filled outlines, so the mark
 * paints with `currentColor` and follows whatever surface it sits on —
 * Safety Orange on black, Signal Red on light surfaces / favicon.
 *
 * `variant="wide"` renders the single-line CORVEX wordmark, built from the
 * same two rows translated onto one baseline (see WIDE_SHIFT).
 */

/* --- Glyph rows, verbatim from the brand file --- */
const GLYPHS_COR =
  "M68.74 115C66.58 115 64.6 114.49 62.8 113.47C61.06 112.39 59.65 110.98 58.57 109.24C57.55 107.44 57.04 105.46 57.04 103.3V61.9C57.04 59.74 57.55 57.79 58.57 56.05C59.65 54.25 61.06 52.84 62.8 51.82C64.6 50.74 66.58 50.2 68.74 50.2H121.66V59.92H70.09C69.13 59.92 68.32 60.25 67.66 60.91C67.06 61.51 66.76 62.29 66.76 63.25V101.95C66.76 102.91 67.06 103.72 67.66 104.38C68.32 104.98 69.13 105.28 70.09 105.28H121.66V115H68.74ZM138.064 115C135.904 115 133.924 114.49 132.124 113.47C130.384 112.39 128.974 110.98 127.894 109.24C126.874 107.44 126.364 105.46 126.364 103.3V61.9C126.364 59.74 126.874 57.79 127.894 56.05C128.974 54.25 130.384 52.84 132.124 51.82C133.924 50.74 135.904 50.2 138.064 50.2H179.464C181.564 50.2 183.514 50.74 185.314 51.82C187.114 52.84 188.524 54.25 189.544 56.05C190.624 57.79 191.164 59.74 191.164 61.9V103.3C191.164 105.46 190.624 107.44 189.544 109.24C188.524 110.98 187.114 112.39 185.314 113.47C183.514 114.49 181.564 115 179.464 115H138.064ZM138.334 105.28H179.194C179.794 105.28 180.304 105.07 180.724 104.65C181.144 104.17 181.354 103.63 181.354 103.03V62.17C181.354 61.57 181.144 61.06 180.724 60.64C180.304 60.16 179.794 59.92 179.194 59.92H138.334C137.734 59.92 137.194 60.16 136.714 60.64C136.294 61.06 136.084 61.57 136.084 62.17V103.03C136.084 103.63 136.294 104.17 136.714 104.65C137.194 105.07 137.734 105.28 138.334 105.28ZM249.675 115L229.425 90.79H242.115L261.015 113.2V115H249.675ZM196.575 115V50.29H249.585C251.745 50.29 253.725 50.83 255.525 51.91C257.325 52.99 258.735 54.43 259.755 56.23C260.835 57.97 261.375 59.89 261.375 61.99V80.17C261.375 82.33 260.835 84.31 259.755 86.11C258.735 87.85 257.325 89.26 255.525 90.34C253.725 91.36 251.745 91.87 249.585 91.87L206.295 91.96V115H196.575ZM208.545 82.06H249.405C250.005 82.06 250.515 81.85 250.935 81.43C251.355 81.01 251.565 80.5 251.565 79.9V62.26C251.565 61.66 251.355 61.15 250.935 60.73C250.515 60.25 250.005 60.01 249.405 60.01H208.545C207.945 60.01 207.405 60.25 206.925 60.73C206.505 61.15 206.295 61.66 206.295 62.26V79.9C206.295 80.5 206.505 81.01 206.925 81.43C207.405 81.85 207.945 82.06 208.545 82.06Z";

const GLYPHS_VEX =
  "M90.68 195L53.15 130.2H64.49L95.54 184.02L126.41 130.2H137.75L100.31 195H90.68ZM140.984 195V130.2H200.384V139.92H150.794V157.74H190.664V167.46H150.794V185.28H200.384V195H140.984ZM204.31 195V193.2L230.05 162.6L204.31 132V130.2H215.56L236.44 154.95L257.23 130.2H268.48V132L242.74 162.6L268.57 193.2V195H257.23L236.35 170.25L215.56 195H204.31Z";

/* Frame: 15-unit band, flush with the viewBox edge (7.5 + 309 + 7.5 = 324). */
const FRAME = { x: 7.5, y: 7.5, width: 309, height: 215, strokeWidth: 15 };

/* VEX row lifted onto COR's baseline (-80 on y) and butted to the right of
   the R with the same 5.41 gap the COR row uses between O and R. */
const WIDE_SHIFT = "translate(213.636 -80)";

export function LogoStack({ className = "", style }) {
  return (
    <svg viewBox="0 0 324 230" className={className} style={style} role="img" aria-label="CORVEX">
      <rect {...FRAME} fill="none" stroke="currentColor" />
      <g fill="currentColor">
        <path d={GLYPHS_COR} />
        <path d={GLYPHS_VEX} />
      </g>
    </svg>
  );
}

export function LogoMark({ className = "", style }) {
  return (
    <svg viewBox="57.04 50.2 425.17 64.8" className={className} style={style} role="img" aria-label="CORVEX">
      <g fill="currentColor">
        <path d={GLYPHS_COR} />
        <path d={GLYPHS_VEX} transform={WIDE_SHIFT} />
      </g>
    </svg>
  );
}

export default function Logo({ variant = "stack", className = "", style }) {
  if (variant === "wide") return <LogoMark className={className} style={style} />;
  return <LogoStack className={className} style={style} />;
}
