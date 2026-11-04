import { motion, useReducedMotion } from "framer-motion";
import { hero } from "../content";
import Button from "../components/Button";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Full-viewport hero. IMG-HERO with red duotone at ~60% + gradient to
 * black. Stepped diagonal graphic cuts across the lower edge.
 */
export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" aria-label="Introduction" style={{ position: "relative", minHeight: "100svh", display: "flex", overflow: "hidden", background: "#000" }}>
      {/* Background (flipped horizontally so refinery mass sits left) */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }} aria-hidden="true">
        <div style={{ position: "absolute", inset: 0, transform: "scaleX(-1)" }}>
          <img
            src="/images/hero-refinery.png"
            alt=""
            className={reduce ? undefined : "hero-drift"}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", maxWidth: "100%" }}
          />
        </div>
        {/* Red duotone ~60% */}
        <div style={{ position: "absolute", inset: 0, background: "rgba(201,26,26,.6)", mixBlendMode: "multiply" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(120,10,10,.35)" }} />
        {/* Gradient to black at bottom */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,.1) 40%, rgba(0,0,0,.92) 100%)" }} />
      </div>

      {/* Registration crosses */}
      <span className="reg-cross hidden md:block" style={{ top: 104, left: 32, color: "rgba(255,255,255,.4)" }} />
      <span className="reg-cross hidden md:block" style={{ top: 104, right: 32, color: "rgba(255,255,255,.4)" }} />

      {/* Content */}
      <div className="wrap" style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 120, paddingTop: 160, flex: 1 }}>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ maxWidth: 900 }}
        >
          <p className="eyebrow" style={{ color: "var(--color-safety)", display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "inline-block", width: 40, height: 1, background: "var(--color-safety)" }} />
            {hero.eyebrow}
          </p>
          <h1 className="display mt-6" style={{ color: "#fff" }}>
            {hero.title}
          </h1>
          <p className="body-l mt-6" style={{ color: "rgba(255,255,255,.78)", maxWidth: 620 }}>
            {hero.sub}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
            <Button href={hero.primary.href}>{hero.primary.label}</Button>
            <Button href={hero.secondary.href} variant="outline">{hero.secondary.label}</Button>
          </div>
        </motion.div>

        {/* Bottom row: scroll cue + technical caption */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 72 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ position: "relative", width: 1, height: 56, background: "rgba(255,255,255,.18)", overflow: "hidden" }}>
              <span className="scroll-cue-line" style={{ position: "absolute", inset: 0, background: "var(--color-safety)" }} />
            </span>
            <span className="eyebrow" style={{ color: "rgba(255,255,255,.6)" }}>{hero.scrollCue}</span>
          </div>
          <p className="caption hidden sm:block" style={{ color: "rgba(255,255,255,.55)", letterSpacing: ".1em", textTransform: "uppercase", textAlign: "right" }}>
            {hero.caption}
            <br />
            <span style={{ color: "var(--color-safety)" }}>24.8607° N / 67.0011° E — GRID REF CX-01</span>
          </p>
        </div>
      </div>

      {/* Stepped diagonal device, lower edge */}
      <div aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, bottom: -1, height: 72, display: "flex", justifyContent: "flex-end" }}>
        <div style={{ width: "min(560px, 60%)", height: "100%", background: "var(--color-safety)", clipPath: "polygon(0 100%, 0 62%, 28% 62%, 28% 30%, 62% 30%, 62% 0, 100% 0, 100% 100%)", opacity: 0.9 }} />
        <div style={{ position: "absolute", right: 0, bottom: 0, width: "min(560px, 60%)", height: 10, background: "var(--color-signal)" }} />
      </div>
    </section>
  );
}
