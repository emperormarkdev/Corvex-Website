import { industryClients, stats } from "../content";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";

/**
 * Black band: 4 count-up stats with hairline dividers,
 * then client names displayed in Orbitron (the site display font)
 * for a consistent, crisp look at any screen size.
 */
export default function TrustStrip() {
  return (
    <section aria-label="Track record" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,.12)" }}>
      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px 24px",
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div
                style={{
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,.12)" : "none",
                  paddingLeft: i > 0 ? 24 : 0,
                }}
                className="stat-cell"
              >
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Client name strip — Orbitron wordmarks */}
        <Reveal delay={0.1}>
          <div className="hairline-t" style={{ marginTop: 56, paddingTop: 32 }}>
            <p
              className="caption"
              style={{
                color: "var(--color-grey)",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              Trusted across the supply chain
            </p>
            <ul
              className="logo-strip"
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexWrap: "wrap",
                gap: "18px 40px",
                alignItems: "center",
              }}
            >
              {industryClients.map((c) => (
                <li key={c.name} style={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#fff",
                      opacity: 0.6,
                      transition: "opacity 200ms cubic-bezier(.22,1,.36,1)",
                      cursor: "default",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.6)}
                  >
                    {c.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-cell { border-left: none !important; padding-left: 0 !important; }
          .logo-strip { gap: 14px 24px !important; }
        }
        @media (max-width: 480px) {
          .logo-strip { gap: 12px 18px !important; }
        }
      `}</style>
    </section>
  );
}
