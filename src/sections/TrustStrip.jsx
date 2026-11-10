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

        {/* Client name strip — Infinite Moving Marquee */}
        <Reveal delay={0.1}>
          <div className="hairline-t" style={{ marginTop: 56, paddingTop: 32 }}>
            <p
              className="caption"
              style={{
                color: "var(--color-grey)",
                letterSpacing: ".12em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              Trusted across major energy &amp; industrial operations
            </p>
            <div
              className="marquee-container"
              style={{
                overflow: "hidden",
                position: "relative",
                width: "100%",
                maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                padding: "8px 0",
              }}
            >
              <div className="marquee-track" style={{ display: "flex", width: "max-content", alignItems: "center" }}>
                {[...industryClients, ...industryClients].map((c, idx) => (
                  <div key={`${c.name}-${idx}`} style={{ display: "flex", alignItems: "center" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 14,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#fff",
                        opacity: 0.7,
                        transition: "opacity 200ms cubic-bezier(.22,1,.36,1), color 200ms",
                        cursor: "default",
                        whiteSpace: "nowrap",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "1";
                        e.currentTarget.style.color = "var(--color-safety)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "0.7";
                        e.currentTarget.style.color = "#fff";
                      }}
                    >
                      {c.name}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        color: "var(--color-safety)",
                        opacity: 0.5,
                        margin: "0 28px",
                        fontSize: 8,
                        userSelect: "none",
                      }}
                    >
                      ◆
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marqueeScroll 32s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .stat-cell { border-left: none !important; padding-left: 0 !important; }
          .marquee-track { animation-duration: 24s; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none !important;
            transform: none !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
