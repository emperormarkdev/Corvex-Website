import { safety, hsePage } from "../content";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import ImageSlot from "../components/ImageSlot";
import { PageCta } from "../components/PageBits";

export default function SafetyPage() {
  return (
    <>
      {/* Orange hero, billboard treatment */}
      <header style={{ background: "var(--color-safety)", color: "#fff", paddingTop: 80 }}>
        <div className="wrap" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "#fff", opacity: 0.85 }}>Safety / HSE</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="h1 mt-6" style={{ color: "#fff", maxWidth: 800 }}>{safety.statement}</h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-l mt-6" style={{ color: "rgba(255,255,255,.9)", maxWidth: 620 }}>
              Safety is not a department at Corvex. It is the condition every task is planned around.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 32 }}>
              <Button href="#/downloads/hse-policy" variant="white">HSE policy (PDF)</Button>
              <Button href="#/contact" variant="outline-white">Report a safety concern</Button>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap hse-grid" style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64 }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Policy summary</p>
            <h2 className="h2 mt-4" style={{ color: "#fff" }}>Four commitments</h2>
          </Reveal>
          <div>
            {hsePage.policy.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <p style={{ display: "flex", gap: 16, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,.12)", color: "#fff" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="body-l">{p}</span>
                </p>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }} />
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .hse-grid{ grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Safety performance</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }} className="perf-grid">
            {safety.stats.map((s) => (
              <div key={s.label} style={{ borderTop: "2px solid var(--color-safety)", paddingTop: 16 }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 34, color: "#fff" }}>{s.value}</p>
                <p className="caption" style={{ color: "var(--color-grey)", textTransform: "uppercase", letterSpacing: ".08em", marginTop: 6 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .perf-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap hse-grid" style={{ display: "grid", gridTemplateColumns: "6fr 6fr", gap: 64, alignItems: "center" }}>
          <Reveal>
            <ImageSlot slot="IMG-HSE-01" src="/images/Worker%20in%20hard%20hat%20and%20red%20coveralls,%20thumbs-up.png" ratio="4:3" brief="PPE detail, hard hat and gloves" chamfer />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Safety culture</p>
              <h2 className="h2 mt-4" style={{ color: "#fff" }}>Four pillars</h2>
            </Reveal>
            <div style={{ marginTop: 24 }}>
              {hsePage.pillars.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.05}>
                  <div style={{ display: "flex", gap: 16, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,.12)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{p.n}</span>
                    <span>
                      <span style={{ display: "block", color: "#fff", fontWeight: 600 }}>{p.name}</span>
                      <span className="body" style={{ display: "block", color: "var(--color-body-dark)", marginTop: 2 }}>{p.desc}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .hse-grid{ grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Training & certification</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 40 }} className="val-grid">
            {hsePage.training.map((t) => (
              <div key={t.name} style={{ border: "1px solid rgba(255,255,255,.14)", padding: 20 }}>
                <p className="body" style={{ color: "#fff", fontWeight: 600 }}>{t.name}</p>
                <p className="caption" style={{ color: "var(--color-grey)", marginTop: 8 }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 1023px){ .val-grid{ grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      <PageCta tone="dark" />
    </>
  );
}
