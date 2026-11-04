import { services, serviceDetail, projects, faqSite } from "../content";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { serviceIcons } from "../components/serviceIcons";
import { PageHero, PageCta, Faq } from "../components/PageBits";
import { Link } from "../router";

/**
 * SERVICE DETAIL — reusable template driven by `services.items` + `serviceDetail`.
 * Adding a service = adding data, not code.
 */
export default function ServiceDetail({ slug }) {
  const base = services.items.find((s) => s.slug === slug);
  const detail = serviceDetail[slug];
  if (!base || !detail) return <NotFoundInline label="service" />;

  const related = services.items.filter((s) => s.slug !== slug).slice(0, 3);
  const relatedProjects = projects.items.slice(0, 2);
  const Icon = serviceIcons[slug];

  return (
    <>
      <PageHero
        index="Services"
        title={base.name}
        intro={detail.overview}
        image={detail.image}
        breadcrumb={[{ label: "Services", to: "/services" }, { label: base.name }]}
      />

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "7fr 4fr", gap: 64, alignItems: "start" }} id="svc-body">
          <div>
            <Reveal>
              <h2 className="h2" style={{ color: "#fff" }}>Scope of work</h2>
            </Reveal>
            <ul style={{ listStyle: "none", margin: "32px 0 0", padding: 0 }}>
              {detail.scope.map((s, i) => (
                <Reveal key={s} delay={i * 0.05}>
                  <li style={{ display: "flex", gap: 16, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,.12)", color: "#fff" }}>
                    <Check />
                    <span className="body-l">{s}</span>
                  </li>
                </Reveal>
              ))}
              <li style={{ borderTop: "1px solid rgba(255,255,255,.12)" }} />
            </ul>

            <Reveal delay={0.1}>
              <h2 className="h3" style={{ color: "#fff", marginTop: 64 }}>Key capabilities</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
                {detail.capabilities.map((c) => (
                  <span key={c} style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,.25)", padding: "10px 16px", color: "#fff" }}>
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="h3" style={{ color: "#fff", marginTop: 64 }}>How we deliver</h2>
              <ol style={{ listStyle: "none", margin: "24px 0 0", padding: 0, display: "grid", gap: 12 }}>
                {detail.steps.map((s, i) => (
                  <li key={s} style={{ display: "flex", gap: 16, alignItems: "baseline", color: "var(--color-body-dark)" }}>
                    <span style={{ fontFamily: "var(--font-display)", color: "var(--color-safety)", fontSize: 13 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="body">{s}</span>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="h3" style={{ color: "#fff", marginTop: 64 }}>Related projects</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24 }} className="rel-grid">
                {relatedProjects.map((p) => (
                  <Link key={p.slug} to={`/projects/${p.slug}`} className="cx-card chamfer-tr-sm" style={{ textDecoration: "none", display: "block" }} data-placeholder="project">
                    <ImagePlaceholder slot={p.image.slot} src={p.image.src} ratio="16:10" brief={p.image.brief} label={false} />
                    <div style={{ padding: 20 }}>
                      <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".08em", textTransform: "uppercase" }}>{p.sector}</p>
                      <p className="h3" style={{ color: "#fff", fontSize: 18, marginTop: 6 }}>{p.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="h3" style={{ color: "#fff", marginTop: 64 }}>Questions</h2>
              <div style={{ marginTop: 20 }}>
                <Faq items={faqSite.slice(0, 3)} />
              </div>
            </Reveal>
          </div>

          {/* Sticky request panel */}
          <aside style={{ position: "sticky", top: 104 }} className="svc-aside">
            <div style={{ border: "1px solid rgba(255,255,255,.16)", background: "#0a0a0b", padding: 24 }}>
              <span style={{ color: "var(--color-safety)", display: "block" }}>{Icon && <Icon size={30} />}</span>
              <h3 className="h3" style={{ color: "#fff", fontSize: 20, marginTop: 16 }}>Request this service</h3>
              <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>
                Tell us the asset, the window, and the constraint. We respond with scope and a named lead.
              </p>
              <div style={{ display: "grid", gap: 12, marginTop: 20 }}>
                <Button href={`#/contact?service=${slug}`}>Request this service</Button>
                <Button href="#/downloads/capability-statement" variant="outline">Capability statement (PDF)</Button>
              </div>
              <p className="caption" style={{ color: "var(--color-grey)", marginTop: 16 }}>
                Reference: CX-SVC-{base.n} [PLACEHOLDER]
              </p>
            </div>
          </aside>
        </div>
        <style>{`@media (max-width: 1023px){ #svc-body{ grid-template-columns: 1fr !important; } .svc-aside{ position: static !important; } .rel-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Related services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }} className="rel-grid">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="cx-card chamfer-tr-sm" style={{ padding: 24, textDecoration: "none", display: "block" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{r.n}</p>
                <p className="h3" style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>{r.name}</p>
                <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{r.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 4 }}>
      <path d="M3 10.5 L7.5 15 L17 4.5" stroke="var(--color-safety)" strokeWidth="1.5" />
    </svg>
  );
}

function NotFoundInline({ label }) {
  return (
    <div className="wrap section">
      <h1 className="h1" style={{ color: "#fff" }}>Not found</h1>
      <p className="body-l mt-4" style={{ color: "var(--color-body-dark)" }}>That {label} page does not exist.</p>
      <div style={{ marginTop: 32 }}><Button href="#/services">All services</Button></div>
    </div>
  );
}
