import { sectors, sectorsDetail, services, projects } from "../content";
import { Link } from "../router";
import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import Button from "../components/Button";
import { PageHero, PageCta } from "../components/PageBits";

/**
 * SECTOR DETAIL — one template, three sector data sets.
 *
 * Structure: challenge and response, sector overview, capability sections,
 * services offered, operational challenges, related projects, capabilities
 * and engagement.
 */
export default function SectorDetail({ slug }) {
  const base = sectors.items.find((s) => s.slug === slug);
  const d = sectorsDetail[slug];
  if (!base || !d) return <h1 className="wrap h1 section" style={{ color: "#fff" }}>Sector not found.</h1>;

  const offered = d.services.map((s) => services.items.find((x) => x.slug === s)).filter(Boolean);
  const key = base.name.split(" ")[0].toLowerCase();
  const related = projects.items.filter((p) => p.sector.toLowerCase().includes(key));

  return (
    <>
      <PageHero
        index="Sectors"
        title={`${d.name}: engineered delivery.`}
        intro={d.tagline}
        image={d.image}
        breadcrumb={[{ label: "Sectors", to: "/sectors/oil-gas" }, { label: d.name }]}
      />

      {/* Challenge / response */}
      <section className="section" style={{ background: "#fff", color: "#000" }}>
        <div className="wrap sec-split" style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64 }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-signal)" }}>The challenge</p>
            <h2 className="h2 mt-4" style={{ color: "#000" }}>What operators face</h2>
            <p className="body-l mt-6" style={{ color: "var(--color-body-light)" }}>{d.challenge}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow" style={{ color: "var(--color-signal)" }}>Our response</p>
            <h2 className="h2 mt-4" style={{ color: "#000" }}>How Corvex delivers</h2>
            <p className="body-l mt-6" style={{ color: "var(--color-body-light)" }}>{d.response}</p>
          </Reveal>
        </div>
        <style>{`@media (max-width: 900px){ .sec-split{ grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* Sector overview */}
      {d.overview?.length > 0 && (
        <section className="section" style={{ background: "#000" }}>
          <div className="wrap" style={{ maxWidth: 900 }}>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Sector overview</p>
              <h2 className="h2 mt-4" style={{ color: "#fff" }}>How we work in {d.name.toLowerCase()}</h2>
            </Reveal>
            {d.overview.map((p, i) => (
              <Reveal key={p.slice(0, 32)} delay={Math.min(i * 0.05, 0.15)}>
                <p className="prose" style={{ color: "var(--color-body-dark)", marginTop: 24 }}>{p}</p>
              </Reveal>
            ))}
            {d.detail && (
              <Reveal delay={0.1}>
                <p className="prose" style={{ color: "var(--color-body-dark)", marginTop: 24 }}>{d.detail}</p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Capability sections */}
      {d.sections?.length > 0 && (
        <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
          <div className="wrap">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>In practice</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>Capability in this sector</h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 56 }} className="sec-grid">
              {d.sections.map((sec, i) => (
                <Reveal key={sec.heading} delay={Math.min(i * 0.05, 0.2)}>
                  <div style={{ borderTop: "2px solid var(--color-safety)", paddingTop: 20 }}>
                    <h3 className="h3" style={{ color: "#fff", fontSize: 22 }}>{sec.heading}</h3>
                    {sec.paragraphs.map((p) => (
                      <p key={p.slice(0, 40)} className="body" style={{ color: "var(--color-body-dark)", marginTop: 14 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 900px){ .sec-grid{ grid-template-columns: 1fr !important; } }`}</style>
        </section>
      )}

      {/* Services in this sector */}
      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Services in this sector</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }} className="sec-grid">
            {offered.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.2)}>
                <Link to={`/services/${s.slug}`} className="cx-card chamfer-tr-sm" style={{ display: "block", padding: 28, textDecoration: "none" }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{s.n}</p>
                  <p className="h3" style={{ color: "#fff", fontSize: 20, marginTop: 10 }}>{s.name}</p>
                  <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .sec-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Operational challenges */}
      {d.challenges?.length > 0 && (
        <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
          <div className="wrap">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Operational challenges</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>What typically goes wrong</h2>
            </Reveal>
            <div style={{ display: "grid", gap: 20, marginTop: 48 }}>
              {d.challenges.map((c, i) => (
                <Reveal key={c.issue} delay={Math.min(i * 0.05, 0.2)}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, border: "1px solid rgba(255,255,255,.14)", padding: 28, background: "#0a0a0b" }} className="ch-grid">
                    <div>
                      <p className="caption" style={{ color: "var(--color-signal)", letterSpacing: ".1em", textTransform: "uppercase" }}>Challenge</p>
                      <p className="body-l" style={{ color: "#fff", marginTop: 10 }}>{c.issue}</p>
                    </div>
                    <div>
                      <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".1em", textTransform: "uppercase" }}>Our approach</p>
                      <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 10 }}>{c.response}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <style>{`@media (max-width: 900px){ .ch-grid{ grid-template-columns: 1fr !important; gap: 20px !important; } }`}</style>
        </section>
      )}

      {/* Featured projects */}
      <section className="section" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Featured projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }} className="sec-grid">
            {(related.length ? related : projects.items).slice(0, 2).map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="cx-card chamfer-tr" style={{ textDecoration: "none", display: "block" }}>
                <ImageSlot slot={p.image.slot} src={p.image.src} ratio="16:10" brief={p.image.brief} label={false} />
                <div style={{ padding: 24 }}>
                  <p className="h3" style={{ color: "#fff", fontSize: 19 }}>{p.name}</p>
                  <p className="caption" style={{ color: "var(--color-safety)", marginTop: 6, letterSpacing: ".08em", textTransform: "uppercase" }}>{p.location}</p>
                  <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{p.scope}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/projects" className="text-link" style={{ color: "#fff" }}>All projects →</Link>
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .sec-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* Capabilities + engagement */}
      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="sec-grid">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Capabilities</p>
            <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>Applied in this sector</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
              {d.capabilities.map((c) => (
                <span key={c} style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,.25)", padding: "10px 16px", color: "#fff" }}>
                  {c}
                </span>
              ))}
            </div>
          </Reveal>

          {d.engagement && (
            <Reveal delay={0.05}>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Working with us</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>How to start</h2>
              <p className="prose" style={{ color: "var(--color-body-dark)", marginTop: 20 }}>{d.engagement}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 28 }}>
                <Button href="#/contact">Contact Us</Button>
                <Button href="#/contact/proposal" variant="outline">Request a Proposal</Button>
              </div>
            </Reveal>
          )}
        </div>
        <style>{`@media (max-width: 900px){ .sec-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <PageCta />
    </>
  );
}
