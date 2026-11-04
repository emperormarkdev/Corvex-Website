import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Orbitron stat counter — counts up once when visible.
 * `stat.placeholder` flags invented figures with data-placeholder.
 */
export default function StatCounter({ value, suffix = "", label, placeholder }) {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);
  // Reduced motion: show the final figure as soon as it is visible.
  const shown = reduce && inView ? value : n;

  useEffect(() => {
    if (!inView || reduce) return;
    const dur = 1400;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, value, reduce]);

  return (
    <div ref={ref} {...(placeholder ? { "data-placeholder": "stat" } : {})}>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(32px, 4vw, 52px)",
          lineHeight: 1,
          color: "#fff",
        }}
      >
        {shown}
        <span style={{ color: "var(--color-safety)" }}>{suffix}</span>
      </p>
      <p className="caption mt-3" style={{ color: "var(--color-grey)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </p>
    </div>
  );
}
