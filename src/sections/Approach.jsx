import { approach } from "../content";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

/**
 * Dark band, blueprint grid background. Left: statement.
 * Right: 4-step process diagram with thin lines + index numbers.
 * Below: capability tags + aligned standards.
 */
export default function Approach() {
  return (
    <section id="approach" aria-label="Technology and engineering approach" className="blueprint" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
      <div className="wrap section">
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64 }} className="appr-grid">
          <div>
            <SectionHeader index={approach.index} title={approach.title} intro={approach.intro} />
            <Reveal delay={0.15}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 32 }}>
                {approach.capabilities.map((c) => (
                  <span
                    key={c}
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 12,
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "#fff",
                      border: "1px solid rgba(255,255,255,.25)",
                      padding: "10px 16px",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", marginTop: 24, alignItems: "center" }}>
                <span className="caption" style={{ color: "var(--color-grey)", letterSpacing: ".1em", textTransform: "uppercase" }}>
                  Aligned to
                </span>
                {approach.standards.map((s) => (
                  <span
                    key={s.value}
                    className="caption"
                   
                    style={{ color: "var(--color-safety)", letterSpacing: ".08em", border: "1px dashed rgba(227,96,28,.5)", padding: "4px 10px" }}
                  >
                    {s.value}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Process diagram */}
          <div style={{ position: "relative" }}>
            <span aria-hidden="true" style={{ position: "absolute", left: 23, top: 24, bottom: 24, width: 1, background: "rgba(255,255,255,.18)" }} />
            <ol style={{ listStyle: "none", margin: 0, padding: 0, position: "relative" }}>
              {approach.steps.map((st, i) => (
                <Reveal
                  as="li"
                  key={st.n}
                  delay={i * 0.08}
                  style={{ display: "flex", gap: 24, padding: "20px 0", position: "relative" }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      width: 47,
                      height: 47,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#000",
                      border: "1px solid var(--color-safety)",
                      color: "var(--color-safety)",
                      fontFamily: "var(--font-display)",
                      fontSize: 14,
                      fontWeight: 700,
                    }}
                  >
                    {st.n}
                  </span>
                  <span style={{ paddingTop: 2 }}>
                    <span className="h3" style={{ color: "#fff", fontSize: 22 }}>{st.name}</span>
                    <span className="body" style={{ display: "block", color: "var(--color-body-dark)", marginTop: 6, maxWidth: 480 }}>{st.desc}</span>
                  </span>
                  <span className="caption hidden md:block" aria-hidden="true" style={{ marginLeft: "auto", color: "rgba(255,255,255,.3)", letterSpacing: ".1em", paddingTop: 8, whiteSpace: "nowrap" }}>
                    CX-PROC / {st.n}
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .appr-grid{ grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  );
}
