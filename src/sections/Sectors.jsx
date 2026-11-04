import { useState } from "react";
import { sectors } from "../content";
import { Link } from "../router";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

/**
 * Three tall chamfered panels. Desktop hover expands the panel and
 * reveals "Explore sector". Stacked on mobile.
 */
export default function Sectors() {
  const [active, setActive] = useState(0);
  return (
    <section id="sectors" aria-label="Sectors" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
      <div className="wrap section">
        <SectionHeader index={sectors.index} title={sectors.title} />
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 56 }}
          className="sector-grid"
        >
          {sectors.items.map((s, i) => {
            const isActive = active === i;
            return (
              <Reveal key={s.slug} delay={i * 0.08}>
                <Link
                  to={`/sectors/${s.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-label={`Explore ${s.name} sector`}
                  className="chamfer-tr"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    minHeight: isActive ? 560 : 480,
                    padding: 32,
                    textDecoration: "none",
                    background: "#141414",
                    border: `1px solid ${isActive ? "var(--color-safety)" : "rgba(255,255,255,.12)"}`,
                    position: "relative",
                    overflow: "hidden",
                    transition: "min-height 400ms cubic-bezier(.22,1,.36,1), border-color 400ms",
                  }}
                >
                  <span
                    data-slot={s.image.slot}
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: s.image.src ? `url("${s.image.src}") center/cover no-repeat` : "repeating-linear-gradient(-45deg, rgba(255,255,255,.04) 0 1px, transparent 1px 9px)",
                    }}
                  />
                  <span style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.82) 100%)" }} aria-hidden="true" />
                  {!s.image.src && (
                    <span className="img-slot-label" style={{ zIndex: 1 }}>
                      <strong>{s.image.slot}</strong>
                      <span>{s.image.ratio} · {s.image.brief}</span>
                    </span>
                  )}
                  <span style={{ position: "relative" }}>
                    <span className="eyebrow" style={{ color: "var(--color-safety)" }}>
                      Sector — 0{i + 1}
                    </span>
                    <span className="h3" style={{ display: "block", color: "#fff", marginTop: 12 }}>{s.name}</span>
                    <span className="body" style={{ display: "block", color: "rgba(255,255,255,.72)", marginTop: 10 }}>{s.desc}</span>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        marginTop: isActive ? 20 : 0,
                        maxHeight: isActive ? 60 : 0,
                        opacity: isActive ? 1 : 0,
                        overflow: "hidden",
                        transition: "all 400ms cubic-bezier(.22,1,.36,1)",
                        fontFamily: "var(--font-display)",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: "#fff",
                      }}
                    >
                      <span style={{ background: "var(--color-signal)", padding: "12px 20px" }}>Explore sector →</span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .sector-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
