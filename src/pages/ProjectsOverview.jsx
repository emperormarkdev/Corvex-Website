import { useState, useMemo } from "react";
import { projects } from "../content";
import { Link } from "../router";
import Reveal from "../components/Reveal";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { PageHero, PageCta } from "../components/PageBits";

const SECTORS = ["All sectors", "Oil & Gas", "Industrial", "Infrastructure"];
const REGIONS = ["All regions", "Coastal", "Inland", "Metro"];
const SERVICES_F = ["All services", "Turnaround", "Installation", "Inspection", "Civil"];

export default function ProjectsOverview() {
  const [sector, setSector] = useState(SECTORS[0]);
  const [region, setRegion] = useState(REGIONS[0]);
  const [service, setService] = useState(SERVICES_F[0]);

  const list = useMemo(
    () =>
      projects.items.filter((p) => {
        const sectorOk = sector === SECTORS[0] || p.sector === sector;
        const regionOk = region === REGIONS[0] || p.location.toLowerCase().includes(region.toLowerCase());
        const serviceOk =
          service === SERVICES_F[0] ||
          p.scope.toLowerCase().includes(service.toLowerCase()) ||
          p.name.toLowerCase().includes(service.toLowerCase());
        return sectorOk && regionOk && serviceOk;
      }),
    [sector, region, service],
  );

  return (
    <>
      <PageHero
        index={projects.index}
        title="Selected work."
        intro="Representative engagements across three sectors. Client names, locations, and figures are placeholders pending approval."
        breadcrumb={[{ label: "Projects" }]}
      />

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Select label="Sector" value={sector} onChange={setSector} options={SECTORS} />
            <Select label="Service" value={service} onChange={setService} options={SERVICES_F} />
            <Select label="Region" value={region} onChange={setRegion} options={REGIONS} />
            <span className="caption" style={{ color: "var(--color-grey)", alignSelf: "center", marginLeft: "auto" }}>
              {list.length} of {projects.items.length} shown
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }} className="proj-list">
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 0.05, 0.2)}>
                <Link to={`/projects/${p.slug}`} className="cx-card chamfer-tr" style={{ display: "block", textDecoration: "none", height: "100%" }} data-placeholder="project">
                  <ImagePlaceholder slot={p.image.slot} src={p.image.src} ratio="16:10" brief={p.image.brief} label={false} />
                  <div style={{ padding: 24 }}>
                    <span style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", background: "var(--color-signal)", color: "#fff", padding: "4px 10px" }}>{p.sector}</span>
                    <h2 className="h3" style={{ color: "#fff", fontSize: 21, marginTop: 14 }}>{p.name}</h2>
                    <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".08em", textTransform: "uppercase", marginTop: 6 }}>{p.location}</p>
                    <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{p.scope}</p>
                    <p className="body" style={{ color: "#fff", fontWeight: 600, marginTop: 6 }}>→ {p.result}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {list.length === 0 && (
            <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 32 }}>
              No projects match that combination. Try widening the filters.
            </p>
          )}
        </div>
        <style>{`@media (max-width: 900px){ .proj-list{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <PageCta />
    </>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span className="caption" style={{ color: "var(--color-grey)", textTransform: "uppercase", letterSpacing: ".1em" }}>{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          minHeight: 44,
          background: "#0a0a0b",
          color: "#fff",
          border: "1px solid rgba(255,255,255,.25)",
          padding: "0 12px",
          fontFamily: "var(--font-body)",
          fontSize: 14,
        }}
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
