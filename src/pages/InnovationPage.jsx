import { approach, innovationPage } from "../content";
import Reveal from "../components/Reveal";
import { PageHero, PageCta } from "../components/PageBits";

export default function InnovationPage() {
  return (
    <>
      <PageHero
        index={approach.index}
        title={approach.title}
        intro={approach.intro}
        breadcrumb={[{ label: "Innovation" }]}
        image={{ slot: "IMG-INNO-01", ratio: "4:3", brief: "Technical engineering documentation and as-built drawings", src: "/images/corvex-portfolio-binder.webp" }}
      />

      <section className="section blueprint" style={{ background: "#060607" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Digital capability</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 40 }} className="val-grid">
            {innovationPage.tools.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div style={{ border: "1px solid rgba(255,255,255,.16)", background: "rgba(0,0,0,.6)", padding: 24, minHeight: 170 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <p className="h3" style={{ color: "#fff", fontSize: 18, marginTop: 12 }}>{t.name}</p>
                  <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 1023px){ .val-grid{ grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>The delivery method</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 40 }} className="val-grid">
            {approach.steps.map((s) => (
              <div key={s.n} style={{ borderTop: "2px solid var(--color-safety)", paddingTop: 16 }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{s.n}</p>
                <p className="h3" style={{ color: "#fff", fontSize: 20, marginTop: 8 }}>{s.name}</p>
                <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 1023px){ .val-grid{ grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Quality systems</h2>
          <p className="body-l mt-4" style={{ color: "var(--color-body-dark)", maxWidth: 720 }}>
            Every deliverable is traceable: weld maps, inspection records, and test packs indexed to the asset register.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            {approach.standards.map((s) => (
              <span key={s.value} style={{ border: "1px solid rgba(255,255,255,.22)", padding: "10px 16px", color: "var(--color-safety)", fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: ".1em" }}>
                {s.value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
