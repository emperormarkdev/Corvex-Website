import { presence } from "../content";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

/**
 * Dark map band. Dotted minimal world map (CSS radial dots, masked to a
 * simplified landmass) with orange pins + side location list.
 */
export default function Presence() {
  return (
    <section aria-label="Global presence" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,.12)" }}>
      <div className="wrap section">
        <SectionHeader index={presence.index} title={presence.title} intro={presence.intro} />
        <div style={{ display: "grid", gridTemplateColumns: "8fr 4fr", gap: 48, marginTop: 56, alignItems: "stretch" }} className="pres-grid">
          <Reveal>
            <div
              role="img"
              aria-label="Stylised world map with Corvex office locations marked"
              style={{
                position: "relative",
                border: "1px solid rgba(255,255,255,.12)",
                background: "#0a0a0b",
                minHeight: 380,
                overflow: "hidden",
                padding: 24,
              }}
            >
              <span className="reg-cross" style={{ top: 12, left: 12, color: "rgba(255,255,255,.35)" }} />
              <span className="reg-cross" style={{ top: 12, right: 12, color: "rgba(255,255,255,.35)" }} />
              <span className="reg-cross" style={{ bottom: 12, left: 12, color: "rgba(255,255,255,.35)" }} />
              <span className="reg-cross" style={{ bottom: 12, right: 12, color: "rgba(255,255,255,.35)" }} />
              {/* Dotted landmass */}
              <svg viewBox="0 0 800 380" style={{ width: "100%", height: "100%", display: "block" }} aria-hidden="true">
                <defs>
                  <pattern id="cxdots" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.6" fill="rgba(255,255,255,.30)" />
                  </pattern>
                  <mask id="cxland">
                    {/* Highly simplified continents */}
                    <rect width="800" height="380" fill="black" />
                    <g fill="white">
                      <path d="M120 90 l90-25 40 30 15 70-25 60-60 25-50-20-30-70Z" />
                      <path d="M200 260 l55-10 30 35-10 55-50 10-35-35Z" />
                      <path d="M370 80 l120-20 60 35 10 70-70 45-110-10-40-60Z" />
                      <path d="M500 230 l90-15 45 40-15 60-80 15-50-40Z" />
                    </g>
                  </mask>
                </defs>
                <rect width="800" height="380" fill="url(#cxdots)" mask="url(#cxland)" />
                {/* Graticule */}
                <g stroke="rgba(255,255,255,.08)" strokeWidth="1">
                  <line x1="0" y1="190" x2="800" y2="190" />
                  <line x1="400" y1="0" x2="400" y2="380" />
                </g>
                {/* Pins */}
                {presence.locations.map((l) => (
                  <g key={l.city} transform={`translate(${(l.x / 100) * 800},${(l.y / 100) * 380})`}>
                    <circle r={l.hq ? 9 : 6} fill="none" stroke="#E3601C" strokeWidth="1.5" opacity=".5">
                      <animate attributeName="r" values={l.hq ? "6;11" : "4;8"} dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values=".6;.1" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                    <circle r={l.hq ? 4.5 : 3.5} fill="#E3601C" />
                  </g>
                ))}
              </svg>
              <p className="caption" style={{ position: "absolute", bottom: 16, right: 20, color: "rgba(255,255,255,.45)", letterSpacing: ".1em" }}>
                CX-GRID / WORLD — SCHEMATIC, NOT TO SCALE
              </p>
            </div>
          </Reveal>

          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {presence.locations.map((l, i) => (
              <Reveal key={l.city} delay={i * 0.06}>
                <li
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "baseline",
                    padding: "20px 0",
                    borderTop: "1px solid rgba(255,255,255,.12)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)", letterSpacing: ".1em" }}>
                    {l.hq ? "HQ" : `0${i}`}
                  </span>
                  <span>
                    <span style={{ display: "block", color: "#fff", fontWeight: 600, fontSize: 17 }}>{l.city}</span>
                    <span className="caption" style={{ display: "block", color: "var(--color-grey)", marginTop: 2 }}>{l.country}</span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .pres-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
