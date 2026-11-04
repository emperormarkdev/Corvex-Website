import { industryClients, stats } from "../content";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";

/**
 * Black band: 4 Orbitron count-up stats with hairline dividers,
 * then a quiet greyscale client row.
 */
export default function TrustStrip() {
  return (
    <section aria-label="Track record" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,.12)" }}>
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,.12)" : "none",
                  paddingLeft: i > 0 ? 32 : 0,
                }}
                className="stat-cell"
              >
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} placeholder={s.placeholder} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="hairline-t" style={{ marginTop: 56, paddingTop: 32 }}>
            <p className="caption" style={{ color: "var(--color-grey)", letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 20 }}>
              Trusted across the supply chain
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "24px 56px",
                alignItems: "center",
              }}
            >
              {industryClients.map((c) => (
                <li
                  key={c.name}
                  style={{
                    height: 56,
                    width: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <img
                    src={c.file}
                    alt={c.name}
                    loading="lazy"
                    style={{
                      height: c.h,
                      width: "auto",
                      maxWidth: "100%",
                      objectFit: "contain",
                      opacity: 0.72,
                      filter: c.invert ? "invert(1)" : "none",
                      transition: "opacity 200ms cubic-bezier(.22,1,.36,1)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.72)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <style>{`@media (max-width: 768px){ .stats-grid{ grid-template-columns: 1fr 1fr !important; } .stat-cell{ border-left: none !important; padding-left: 0 !important; } }`}</style>
    </section>
  );
}
