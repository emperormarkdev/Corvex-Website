/**
 * ImageSlot — the single reusable image container.
 *
 * Renders the mapped photograph for a slot at a fixed aspect ratio, with the
 * signature top-right chamfer available via `chamfer`. If a slot has no image
 * mapped in `imageSrc.js`, it falls back to a hatched technical panel that
 * names the slot and its art-direction brief, which keeps layout stable while
 * artwork is being supplied.
 */
import { getImageSrc } from "../imageSrc";

export default function ImageSlot({
  src,
  alt = "",
  slot = "IMG",
  ratio = "16:9",
  brief = "",
  chamfer = false,
  video = false,
  className = "",
  label = true,
  style,
}) {
  const [w, h] = ratio.split(":").map(Number);
  const resolvedSrc = src || getImageSrc(slot);
  return (
    <div
      className={`img-slot ${chamfer ? "chamfer-tr" : ""} ${className}`}
      data-slot={slot}
      style={{ aspectRatio: `${w || 16} / ${h || 9}`, ...style }}
      role="img"
      aria-label={alt || `${slot} — ${brief}`}
    >
      {resolvedSrc && <img src={resolvedSrc} alt={alt} loading="lazy" />}
      {video && (
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: 64,
              height: 64,
              border: "1px solid rgba(255,255,255,.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)",
              background: "rgba(0,0,0,.5)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M5 3 L14 9 L5 15 Z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </span>
        </span>
      )}
      {label && !resolvedSrc && (
        <span className="img-slot-label">
          <strong>{slot}</strong>
          <span>
            {ratio} · {brief}
          </span>
        </span>
      )}
    </div>
  );
}
