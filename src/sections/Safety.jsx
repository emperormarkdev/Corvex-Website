import { safety } from "../content";
import Button from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Reveal from "../components/Reveal";

/**
 * Full-bleed Safety Orange band mirroring the billboard:
 * statement left, portrait slot right, commitments + stats beneath.
 */
export default function Safety() {
  return (
    <section id="safety" aria-label="Safety" style={{ background: "var(--color-safety)", color: "#fff" }}>
      <div className="wrap section">
        <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 64, alignItems: "center" }} className="safety-grid">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: "#fff", opacity: 0.85 }}>{safety.index}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h1 mt-6" style={{ color: "#fff", maxWidth: 640 }}>
                {safety.statement}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <div style={{ marginTop: 48 }}>
                {safety.commitments.map((c, i) => (
                  <div
                    key={c.n}
                    style={{
                      display: "flex",
                      gap: 20,
                      padding: "20px 0",
                      borderTop: "1px solid rgba(255,255,255,.35)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 13, letterSpacing: ".1em", paddingTop: 4 }}>{c.n}</span>
                    <span>
                      <span className="h3" style={{ color: "#fff", fontSize: 20 }}>{c.name}</span>
                      <span className="body" style={{ display: "block", color: "rgba(255,255,255,.85)", marginTop: 4 }}>{c.desc}</span>
                    </span>
                    {i === safety.commitments.length - 1 && <span style={{ borderBottom: "1px solid rgba(255,255,255,.35)", display: "block" }} />}
                  </div>
                ))}
                <div style={{ borderTop: "1px solid rgba(255,255,255,.35)" }} />
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 48px", marginTop: 32, alignItems: "center" }}>
                {safety.stats.map((s) => (
                  <div key={s.label} data-placeholder={s.placeholder ? "stat" : undefined}>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 32, color: "#fff" }}>{s.value}</p>
                    <p className="caption" style={{ color: "rgba(255,255,255,.85)", textTransform: "uppercase", letterSpacing: ".08em" }}>{s.label}</p>
                  </div>
                ))}
                <span style={{ flex: 1 }} />
                <Button href={safety.cta.href} variant="outline-white">{safety.cta.label}</Button>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ImagePlaceholder
              slot={safety.image.slot}
              src={safety.image.src}
              ratio={safety.image.ratio}
              brief={safety.image.brief}
              alt="Corvex team member in hard hat and red coveralls giving a thumbs-up"
              chamfer
              style={{ border: "1px solid rgba(255,255,255,.4)" }}
            />
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .safety-grid{ grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  );
}
