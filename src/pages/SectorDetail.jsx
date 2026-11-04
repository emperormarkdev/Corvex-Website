import { sectors, sectorsDetail, services, projects } from "../content";
import { Link } from "../router";
import Reveal from "../components/Reveal";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { PageHero, PageCta } from "../components/PageBits";

/**
 * SECTOR DETAIL — one template, three sector data sets.
 */
export default function SectorDetail({ slug }) {
  const base = sectors.items.find((s) => s.slug === slug);
  const d = sectorsDetail[slug];
  if (!base || !d) return <h1 className="wrap h1 section" style={{ color: "#fff" }}>Sector not found.</h1>;

  const offered = d.services.map((s) => services.items.find((x) => x.slug === s)).filter(Boolean);
  const related = projects.items.filter((p) => p.sector.toLowerCase().includes(base.name.split(" ")[0].toLowerCase()));

  return (
    <>
      <PageHero
        index="Sectors"
        title={`${d.name}: engineered delivery.`}
        intro={d.challenge}
        image={d.image}
        breadcrumb={[{ label: "Sectors", to: "/sectors/oil-gas" }, { label: d.name }]}
      />

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

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Services in this sector</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }} className="sec-grid">
            {offered.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
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

      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Featured projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }} className="sec-grid">
            {(related.length ? related : projects.items.slice(0, 2)).map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="cx-card chamfer-tr" style={{ textDecoration: "none", display: "block" }} data-placeholder="project">
                <ImagePlaceholder slot={p.image.slot} src={p.image.src} ratio="16:10" brief={p.image.brief} label={false} />
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
      </section>

      <section className="section" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="sec-grid">
            {[
              { v: "[PLACEHOLDER]", l: "Projects in sector" },
              { v: "[PLACEHOLDER]", l: "Safe man-hours" },
              { v: "[PLACEHOLDER]", l: "Years on site" },
            ].map((s) => (
              <div key={s.l} data-placeholder="stat" style={{ borderLeft: "1px solid rgba(255,255,255,.12)", paddingLeft: 24 }}>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36, color: "#fff" }}>{s.v}</p>
                <p className="caption" style={{ color: "var(--color-grey)", textTransform: "uppercase", letterSpacing: ".08em", marginTop: 8 }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .sec-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <PageCta />
    </>
  );
}
