import { presence } from "../content";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import Globe from "../components/Globe";

/**
 * Global presence — interactive 3D canvas globe with glowing orange arcs
 * connecting each office to HQ Lagos, plus a location list on the right.
 * Drag / touch-drag to rotate. Click a pin to highlight it.
 */
export default function Presence() {
  return (
    <section
      aria-label="Global presence"
      style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,.12)" }}
    >
      <div className="wrap section">
        <SectionHeader
          index={presence.index}
          title={presence.title}
          intro={presence.intro}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: 48,
            marginTop: 56,
            alignItems: "center",
          }}
          className="pres-grid"
        >
          {/* Globe */}
          <Reveal>
            <div
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                maxWidth: 580,
                margin: "0 auto",
                width: "100%",
              }}
            >
              <Globe locations={presence.locations} />

              {/* drag hint */}
              <p
                style={{
                  position: "absolute",
                  bottom: -28,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.3)",
                  pointerEvents: "none",
                }}
              >
                Drag to rotate · tap a pin
              </p>
            </div>
          </Reveal>

          {/* Location list */}
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {presence.locations.map((l, i) => (
              <Reveal key={l.city} delay={i * 0.05}>
                <li
                  style={{
                    display: "flex",
                    gap: 16,
                    alignItems: "baseline",
                    padding: "16px 0",
                    borderTop: "1px solid rgba(255,255,255,.12)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 11,
                      color: l.hq ? "var(--color-safety)" : "rgba(255,255,255,.35)",
                      letterSpacing: ".1em",
                      flexShrink: 0,
                      minWidth: 28,
                    }}
                  >
                    {l.hq ? "HQ" : `0${i}`}
                  </span>
                  <span>
                    <span
                      style={{
                        display: "block",
                        color: "#fff",
                        fontWeight: 600,
                        fontSize: 15,
                      }}
                    >
                      {l.city}
                    </span>
                    <span
                      className="caption"
                      style={{
                        display: "block",
                        color: "var(--color-grey)",
                        marginTop: 2,
                      }}
                    >
                      {l.country}
                    </span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pres-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
