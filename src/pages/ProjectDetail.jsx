import { projects, projectDetail } from "../content";
import { Link } from "../router";
import Reveal from "../components/Reveal";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { PageHero, PageCta } from "../components/PageBits";

/**
 * PROJECT DETAIL — reusable template.
 */
export default function ProjectDetail({ slug }) {
  const p = projects.items.find((x) => x.slug === slug);
  if (!p) return <h1 className="wrap h1 section" style={{ color: "#fff" }}>Project not found.</h1>;
  const others = projects.items.filter((x) => x.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        index={p.sector}
        title={p.name}
        intro={p.scope}
        image={p.image}
        breadcrumb={[{ label: "Projects", to: "/projects" }, { label: p.name }]}
      />

      <section className="section" style={{ background: "#fff", color: "#000" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="fact-grid">
            {[
              { k: "Client", v: projectDetail.client },
              { k: "Location", v: p.location },
              { k: "Sector", v: p.sector },
              { k: "Result", v: p.result },
            ].map((f) => (
              <div key={f.k} data-placeholder="project-fact" style={{ borderTop: "1px solid rgba(0,0,0,.15)", paddingTop: 16 }}>
                <p className="caption" style={{ color: "var(--color-ash)", textTransform: "uppercase", letterSpacing: ".1em" }}>{f.k}</p>
                <p style={{ fontSize: 17, fontWeight: 600, marginTop: 6 }}>{f.v}</p>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 900px){ .fact-grid{ grid-template-columns: 1fr 1fr !important; } }`}</style>
        </div>
      </section>

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap pd-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Challenge</p>
            <h2 className="h2 mt-4" style={{ color: "#fff", fontSize: 30 }}>Operating under constraint</h2>
            <p className="body-l mt-4" style={{ color: "var(--color-body-dark)" }}>
              {p.scope} The window was fixed before mobilisation, with no room to extend.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Solution</p>
            <h2 className="h2 mt-4" style={{ color: "#fff", fontSize: 30 }}>Sequenced delivery</h2>
            <p className="body-l mt-4" style={{ color: "var(--color-body-dark)" }}>
              Parallel workfronts under one permit board, spares pre-staged, QA gates after every milestone.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Results</p>
            <h2 className="h2 mt-4" style={{ color: "#fff", fontSize: 30 }}>Measured outcome</h2>
            <p className="body-l mt-4" style={{ color: "#fff" }}>{p.result}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Gallery</p>
            <div style={{ display: "grid", gap: 16, marginTop: 16 }}>
              <ImagePlaceholder slot={`${p.image.slot}-G1`} src={p.image.src || ""} ratio="16:9" brief={projectDetail.galleryNote} />
              <ImagePlaceholder slot={`${p.image.slot}-G2`} ratio="16:9" brief="Detail photography, issued per contract data pack" />
            </div>
          </Reveal>
        </div>
        <style>{`@media (max-width: 900px){ .pd-split{ grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <blockquote data-placeholder="testimonial" style={{ borderLeft: "3px solid var(--color-safety)", paddingLeft: 24, maxWidth: 820 }}>
            <p className="h3" style={{ color: "#fff", fontSize: 24, textTransform: "none", lineHeight: 1.4 }}>
              “Handed back early, documented cleanly, no incidents. That is the standard we keep asking for.”
            </p>
            <cite className="caption" style={{ display: "block", color: "var(--color-grey)", marginTop: 16, fontStyle: "normal" }}>
              — [Client representative, PLACEHOLDER]
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Related projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }} className="rel3">
            {others.map((o) => (
              <Link key={o.slug} to={`/projects/${o.slug}`} className="cx-card chamfer-tr-sm" style={{ display: "block", textDecoration: "none" }} data-placeholder="project">
                <ImagePlaceholder slot={o.image.slot} src={o.image.src} ratio="16:10" brief={o.image.brief} label={false} />
                <div style={{ padding: 20 }}>
                  <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".08em", textTransform: "uppercase" }}>{o.sector}</p>
                  <p className="h3" style={{ color: "#fff", fontSize: 18, marginTop: 6 }}>{o.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .rel3{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <PageCta />
    </>
  );
}
