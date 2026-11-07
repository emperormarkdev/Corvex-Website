import { about, aboutPage, presence } from "../content";
import Reveal from "../components/Reveal";
import { PageHero, PageCta } from "../components/PageBits";
import { LogoStack } from "../components/Logo";

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="About"
        title="Precision. Reliability. Performance."
        breadcrumb={[{ label: "About" }]}
        image={{ slot: "IMG-ABOUT-HERO", ratio: "4:3", brief: "Field engineer with tablet, daylight, red coveralls", src: "/images/about-image.webp" }}
      />

      <section className="section" style={{ background: "#fff", color: "#000" }}>
        <div className="wrap ab-grid" style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 64 }}>
          <div>
            <p className="eyebrow" style={{ color: "var(--color-signal)" }}>Who we are</p>
            <p className="body-l mt-6" style={{ color: "var(--color-body-light)" }}>{about.paragraph}</p>
            <p className="body-l mt-6" style={{ color: "var(--color-body-light)" }}>
              We combine field experience with structured engineering to execute complex projects from start to finish.
              From industrial support to critical operations, our standards are set by the people who have worked inside
              the facilities we now maintain. That is why major energy operators and industrial clients keep coming back.
            </p>
            <p className="body-l mt-6" style={{ color: "var(--color-body-light)" }}>
              Our foundation is professionalism, integrity, and performance. We build lasting relationships by delivering
              what we say we will deliver, documented and traceable every step of the way.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(0,0,0,.12)", background: "var(--color-fog)", minHeight: 280 }}>
            <span style={{ color: "var(--color-signal)", width: 160 }}><LogoStack className="w-full h-auto" /></span>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .ab-grid{ grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Our story</p>
            <h2 className="h2 mt-4" style={{ color: "#fff" }}>Built one contract at a time.</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${aboutPage.story.length}, 1fr)`, gap: 24, marginTop: 56 }} className="tl-grid">
            {aboutPage.story.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div style={{ borderTop: "1px solid rgba(255,255,255,.2)", paddingTop: 20, position: "relative" }}>
                  <span aria-hidden="true" style={{ position: "absolute", top: -4, left: 0, width: 7, height: 7, background: "var(--color-safety)" }} />
                  <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".1em", textTransform: "uppercase" }}>{s.year}</p>
                  <p className="h3" style={{ color: "#fff", fontSize: 19, marginTop: 10 }}>{s.title}</p>
                  <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .tl-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Mission / vision */}
      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap ab-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Mission</p>
            <p className="h3 mt-4" style={{ color: "#fff", fontSize: 24, textTransform: "none", lineHeight: 1.4 }}>{aboutPage.mission}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Vision</p>
            <p className="h3 mt-4" style={{ color: "#fff", fontSize: 24, textTransform: "none", lineHeight: 1.4 }}>{aboutPage.vision}</p>
          </Reveal>
        </div>
        <style>{`@media (max-width: 900px){ .ab-grid{ grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Core values</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 40 }} className="val-grid">
            {aboutPage.values.map((v, i) => (
              <Reveal key={v} delay={i * 0.05}>
                <div style={{ border: "1px solid rgba(255,255,255,.14)", padding: 24, minHeight: 140 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{String(i + 1).padStart(2, "0")}</p>
                  <p className="h3" style={{ color: "#fff", fontSize: 18, marginTop: 12 }}>{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 1023px){ .val-grid{ grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      {/* Why CORVEX — differentiators replacing placeholder leadership */}
      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Why CORVEX</p>
            <h2 className="h2 mt-4" style={{ color: "#fff" }}>What sets us apart.</h2>
            <p className="body-l mt-6" style={{ color: "var(--color-body-dark)", maxWidth: 640 }}>
              We have been on the operating side of the fence. That shapes every decision we make.
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32, marginTop: 56 }} className="diff-grid">
            {aboutPage.differentiators.map((d, i) => (
              <Reveal key={d.n} delay={i * 0.07}>
                <div style={{ borderTop: "2px solid var(--color-safety)", paddingTop: 24 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)", letterSpacing: ".1em" }}>{d.n}</p>
                  <p className="h3 mt-3" style={{ color: "#fff", fontSize: 20 }}>{d.name}</p>
                  <p className="body mt-4" style={{ color: "var(--color-body-dark)", lineHeight: 1.75 }}>{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 700px){ .diff-grid{ grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
      </section>

      {/* Presence recap */}
      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>{presence.title}</h2>
          <ul style={{ listStyle: "none", margin: "32px 0 0", padding: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="lead-grid">
            {presence.locations.map((l) => (
              <li key={l.city} style={{ borderTop: "1px solid rgba(255,255,255,.14)", paddingTop: 16 }}>
                <p style={{ color: "#fff", fontWeight: 600 }}>{l.city}</p>
                <p className="caption" style={{ color: "var(--color-grey)", marginTop: 4 }}>{l.country}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PageCta />
    </>
  );
}
