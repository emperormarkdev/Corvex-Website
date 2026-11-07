import { useState } from "react";
import { careers, careersPage } from "../content";
import Button from "../components/Button";
import ImageSlot from "../components/ImageSlot";
import { PageHero, PageCta } from "../components/PageBits";

export default function CareersPage() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <PageHero
        index="Careers"
        title={careers.title}
        intro={careers.intro}
        breadcrumb={[{ label: "Careers" }]}
        image={careers.image}
      />

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Why Corvex</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }} className="val-grid">
            {careers.benefits.map((b) => (
              <div key={b.n} style={{ border: "1px solid rgba(255,255,255,.14)", padding: 24 }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{b.n}</p>
                <p className="h3" style={{ color: "#fff", fontSize: 19, marginTop: 10 }}>{b.name}</p>
                <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .val-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Life at Corvex</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 32 }} className="val-grid">
            <ImageSlot slot="IMG-LIFE-01" src="/images/Night%20shift%20operations,%20control%20room%20glow.webp" ratio="1:1" brief="Crew at shift handover" chamfer />
            <ImageSlot slot="IMG-LIFE-02" src="/images/Workshop%20floor,%20fabrication%20in%20progress.webp" ratio="1:1" brief="Workshop training session" chamfer />
            <ImageSlot slot="IMG-LIFE-03" src="/images/Structural%20steel%20erection,%20daylight.webp" ratio="1:1" brief="Site walk, daylight" chamfer />
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .val-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 16 }}>
            <h2 className="h2" style={{ color: "#fff" }}>Open roles</h2>
            <p className="caption" style={{ color: "var(--color-grey)" }}>
              Roles are added as vacancies are confirmed. Speculative applications are always read.
            </p>
          </div>
          <div style={{ marginTop: 32, borderTop: "1px solid rgba(255,255,255,.14)" }}>
            {careersPage.openings.map((j, i) => {
              const isOpen = open === i;
              return (
                <div key={j.title} style={{ borderBottom: "1px solid rgba(255,255,255,.14)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    style={{
                      width: "100%",
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr 1fr 1fr auto",
                      gap: 16,
                      alignItems: "center",
                      minHeight: 64,
                      padding: "12px 4px",
                      background: "transparent",
                      border: "none",
                      color: "#fff",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                    className="job-row"
                  >
                    <span style={{ fontWeight: 600 }}>{j.title}</span>
                    <span className="caption" style={{ color: "var(--color-grey)" }}>{j.dept}</span>
                    <span className="caption" style={{ color: "var(--color-grey)" }}>{j.location}</span>
                    <span className="caption" style={{ color: "var(--color-grey)" }}>{j.type}</span>
                    <span aria-hidden="true" style={{ color: "var(--color-safety)" }}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div style={{ paddingBottom: 24 }}>
                      <p className="body" style={{ color: "var(--color-body-dark)", maxWidth: 720 }}>
                        Reporting to the {j.dept.toLowerCase()} lead, you will deliver {j.title.toLowerCase()} work to spec,
                        with current certification and full permit compliance.
                      </p>
                      <div style={{ marginTop: 16 }}>
                        <Button href={`#/careers/apply?role=${encodeURIComponent(j.title)}`}>Apply for this role</Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <style>{`@media (max-width: 760px){ .job-row{ grid-template-columns: 1fr auto !important; } .job-row > span:nth-child(2), .job-row > span:nth-child(3), .job-row > span:nth-child(4){ display: none; } }`}</style>
        </div>
      </section>

      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap val-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Graduate & trainee</p>
            <h2 className="h2 mt-4" style={{ color: "#fff" }}>Start on the tools.</h2>
            <p className="body-l mt-4" style={{ color: "var(--color-body-dark)" }}>
              An 18-month rotation across engineering, operations, and HSE — with a named mentor and certification support.
            </p>
            <div style={{ marginTop: 24 }}>
              <Button href="#/careers/apply?role=Graduate%20Programme">Apply to the programme</Button>
            </div>
          </div>
          <ImageSlot slot="IMG-GRAD-01" src="/images/Overhead%20Industrial%20Blueprint%20Workshop.webp" ratio="4:3" brief="Graduate engineer on site with mentor" chamfer />
        </div>
        <style>{`@media (max-width: 900px){ .val-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <PageCta tone="dark" />
    </>
  );
}
