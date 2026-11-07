import { services, serviceDetail, projects, faqSite } from "../content";
import ImageSlot from "../components/ImageSlot";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { serviceIcons } from "../components/serviceIcons";
import { PageHero, PageCta, Faq } from "../components/PageBits";
import { Link } from "../router";

/**
 * SERVICE DETAIL — one template, six data sets.
 *
 * Long-form corporate page: overview and rationale, scope, narrative sections,
 * applications, delivery method, operational challenges, technical reference,
 * quality assurance and engagement. All copy lives in `content.js`.
 */
export default function ServiceDetail({ slug }) {
  const base = services.items.find((s) => s.slug === slug);
  const detail = serviceDetail[slug];
  if (!base || !detail) return <NotFoundInline label="service" />;

  const Icon = serviceIcons[slug];
  const related = services.items.filter((s) => s.slug !== slug).slice(0, 3);
  const relatedProjects =
    projects.items.filter((p) => p.delivered?.some((d) => d.toLowerCase().includes(base.name.split(" ")[0].toLowerCase()))) ||
    [];

  return (
    <>
      <PageHero
        index="Services"
        title={base.name}
        intro={detail.overview}
        image={detail.image}
        breadcrumb={[{ label: "Services", to: "/services" }, { label: base.name }]}
      />

      {/* ---- Overview + rationale ---- */}
      <section className="section" style={{ background: "#000" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "7fr 4fr", gap: 64, alignItems: "start" }} id="svc-body">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Overview</p>
              <p className="prose" style={{ color: "var(--color-body-dark)", marginTop: 16 }}>
                {detail.intro || detail.overview}
              </p>
            </Reveal>

            {detail.why && (
              <Reveal delay={0.05}>
                <h2 className="h3" style={{ color: "#fff", marginTop: 56 }}>Why it matters</h2>
                <p className="prose" style={{ color: "var(--color-body-dark)", marginTop: 16 }}>
                  {detail.why}
                </p>
              </Reveal>
            )}

            <Reveal delay={0.05}>
              <h2 className="h3" style={{ color: "#fff", marginTop: 56 }}>Scope of work</h2>
              <ul style={{ listStyle: "none", margin: "28px 0 0", padding: 0 }}>
                {detail.scope.map((s, i) => (
                  <Reveal
                    as="li"
                    key={s}
                    delay={Math.min(i * 0.04, 0.2)}
                    style={{ display: "flex", gap: 16, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,.12)", color: "#fff" }}
                  >
                    <Check />
                    <span className="body-l">{s}</span>
                  </Reveal>
                ))}
                <li style={{ borderTop: "1px solid rgba(255,255,255,.12)" }} aria-hidden="true" />
              </ul>
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
                Service line {base.n} · A response from a technical lead within two business days
              </p>
            </div>
          </aside>
        </div>
        <style>{`@media (max-width: 1023px){ #svc-body{ grid-template-columns: 1fr !important; } .svc-aside{ position: static !important; } }`}</style>
      </section>

      {/* ---- Narrative sections ---- */}
      {detail.sections?.length > 0 && (
        <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
          <div className="wrap">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Capability in depth</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>How this service works</h2>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 56 }} className="rel-grid">
              {detail.sections.map((sec, i) => (
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
        </section>
      )}

      {/* ---- Applications ---- */}
      {detail.applications?.length > 0 && (
        <section className="section" style={{ background: "#000" }}>
          <div className="wrap">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Applications</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>Where we apply it</h2>
            </Reveal>
            <div style={{ display: "grid", gap: 0, marginTop: 48 }}>
              {detail.applications.map((a, i) => (
                <Reveal key={a.heading} delay={Math.min(i * 0.04, 0.2)}>
                  <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 24, padding: "28px 0", borderTop: "1px solid rgba(255,255,255,.12)" }} className="app-row">
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-safety)", paddingTop: 4 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="h3" style={{ color: "#fff", fontSize: 20 }}>{a.heading}</h3>
                      <p className="prose" style={{ color: "var(--color-body-dark)", marginTop: 10 }}>{a.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }} />
            </div>
          </div>
        </section>
      )}

      {/* ---- Subservices + delivery method ---- */}
      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap rel-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Subservices</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>What we deliver</h2>
            </Reveal>
            <div style={{ display: "grid", gap: 16, marginTop: 32 }}>
              {detail.subservices.map((s, i) => (
                <Reveal key={s.name} delay={Math.min(i * 0.04, 0.2)}>
                  <div style={{ border: "1px solid rgba(255,255,255,.14)", background: "#0a0a0b", padding: 20 }}>
                    <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".1em" }}>
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="h3" style={{ color: "#fff", fontSize: 17, marginTop: 8, lineHeight: 1.3 }}>{s.name}</p>
                    <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Delivery method</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>How we deliver</h2>
            </Reveal>
            <ol style={{ listStyle: "none", margin: "32px 0 0", padding: 0, display: "grid", gap: 0 }}>
              {detail.steps.map((s, i) => (
                <Reveal
                  as="li"
                  key={s}
                  delay={Math.min(i * 0.05, 0.2)}
                  style={{ display: "flex", gap: 18, alignItems: "baseline", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,.12)" }}
                >
                  <span style={{ fontFamily: "var(--font-display)", color: "var(--color-safety)", fontSize: 13, minWidth: 22 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="body" style={{ color: "#fff" }}>{s}</span>
                </Reveal>
              ))}
              <li style={{ borderTop: "1px solid rgba(255,255,255,.12)" }} aria-hidden="true" />
            </ol>

            <Reveal delay={0.1}>
              <h3 className="h3" style={{ color: "#fff", marginTop: 48 }}>Key capabilities</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
                {detail.capabilities.map((c) => (
                  <span key={c} style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,.25)", padding: "10px 16px", color: "#fff" }}>
                    {c}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Operational challenges ---- */}
      {detail.challenges?.length > 0 && (
        <section className="section" style={{ background: "#000" }}>
          <div className="wrap">
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Operational challenges</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>What usually goes wrong — and how we handle it</h2>
            </Reveal>
            <div style={{ display: "grid", gap: 20, marginTop: 48 }} className="rel-grid">
              {detail.challenges.map((c, i) => (
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
        </section>
      )}

      {/* ---- Technical reference ---- */}
      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap rel-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <Reveal>
              <h2 className="h3" style={{ color: "#fff" }}>Standards applied</h2>
              <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 12 }}>
                Work is executed and documented against the codes applicable to the asset and the client specification. The list below is indicative of the standards this service draws on.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
                {detail.standards.map((s) => (
                  <span key={s} style={{ fontSize: 14, color: "#fff", borderBottom: "1px solid var(--color-safety)", paddingBottom: 4 }}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="h3" style={{ color: "#fff", marginTop: 48 }}>Industries &amp; sectors served</h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
                {detail.sectors.map((s) => (
                  <span key={s} className="body" style={{ color: "#fff", border: "1px solid rgba(255,255,255,.25)", padding: "8px 14px" }}>
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <h2 className="h3" style={{ color: "#fff" }}>Equipment &amp; technology</h2>
            <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 12 }}>
              Tooling held in-house or deployed on contract, matched to the scope of each campaign.
            </p>
            <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "grid", gap: 10 }}>
              {detail.equipment.map((e) => (
                <li key={e} className="body" style={{ color: "var(--color-body-dark)", paddingLeft: 18, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: 11, width: 6, height: 6, background: "var(--color-safety)" }} aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---- Quality + outcomes ---- */}
      <section className="section" style={{ background: "#000" }}>
        <div className="wrap rel-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          {detail.qa && (
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Quality assurance</p>
              <h2 className="h3" style={{ color: "#fff", marginTop: 16 }}>How quality is controlled</h2>
              <p className="prose" style={{ color: "var(--color-body-dark)", marginTop: 16 }}>{detail.qa}</p>
            </Reveal>
          )}
          {detail.outcomes?.length > 0 && (
            <Reveal delay={0.05}>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Outcomes</p>
              <h2 className="h3" style={{ color: "#fff", marginTop: 16 }}>What you can expect</h2>
              <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "grid", gap: 14 }}>
                {detail.outcomes.map((o) => (
                  <li key={o} style={{ display: "flex", gap: 16, alignItems: "baseline", color: "#fff" }}>
                    <Check />
                    <span className="body">{o}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---- Engagement ---- */}
      {detail.engagement && (
        <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
          <div className="wrap" style={{ maxWidth: 860 }}>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Working with us</p>
              <h2 className="h2" style={{ color: "#fff", marginTop: 16 }}>How to start</h2>
              <p className="prose" style={{ color: "var(--color-body-dark)", marginTop: 20 }}>{detail.engagement}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 32 }}>
                <Button href={`#/contact?service=${slug}`}>Request this service</Button>
                <Button href="#/contact/proposal" variant="outline">Request a proposal</Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---- Related projects ---- */}
      <section className="section" style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Related projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 40 }} className="rel-grid">
            {(relatedProjects.length ? relatedProjects : projects.items).slice(0, 2).map((p) => (
              <Link key={p.slug} to={`/projects/${p.slug}`} className="cx-card chamfer-tr-sm" style={{ textDecoration: "none", display: "block" }}>
                <ImageSlot slot={p.image.slot} src={p.image.src} ratio="16:10" brief={p.image.brief} label={false} />
                <div style={{ padding: 20 }}>
                  <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".08em", textTransform: "uppercase" }}>{p.sector}</p>
                  <p className="h3" style={{ color: "#fff", fontSize: 18, marginTop: 6 }}>{p.name}</p>
                  <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{p.scope}</p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="h2" style={{ color: "#fff", marginTop: 72 }}>Related services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }} className="rel-grid">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="cx-card chamfer-tr-sm" style={{ padding: 24, textDecoration: "none", display: "block" }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{r.n}</p>
                <p className="h3" style={{ color: "#fff", fontSize: 18, marginTop: 10 }}>{r.name}</p>
                <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{r.desc}</p>
              </Link>
            ))}
          </div>

          <h2 className="h2" style={{ color: "#fff", marginTop: 72 }}>Questions</h2>
          <div style={{ marginTop: 24 }}>
            <Faq items={faqSite.slice(0, 4)} />
          </div>
        </div>
        <style>{`@media (max-width: 1023px){ .rel-grid{ grid-template-columns: 1fr !important; } .ch-grid{ grid-template-columns: 1fr !important; gap: 20px !important; } } @media (max-width: 640px){ .app-row{ grid-template-columns: 1fr !important; gap: 8px !important; } }`}</style>
      </section>

      <PageCta />
    </>
  );
}

function Check() {
  return (
    <span style={{ color: "var(--color-safety)", flexShrink: 0, marginTop: 3 }} aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7.5 L5.5 11 L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
      </svg>
    </span>
  );
}

function NotFoundInline({ label }) {
  return (
    <section className="section">
      <div className="wrap">
        <h1 className="h1" style={{ color: "#fff" }}>Service not found.</h1>
        <p className="body-l" style={{ color: "var(--color-body-dark)", marginTop: 16 }}>
          That {label} does not exist. Browse all services from the services overview.
        </p>
        <Button href="#/services">All services</Button>
      </div>
    </section>
  );
}
