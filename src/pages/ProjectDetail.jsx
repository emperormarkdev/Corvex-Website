import { projects, projectDetail } from "../content";
import { Link } from "../router";
import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import { PageHero, PageCta } from "../components/PageBits";
import Button from "../components/Button";

/**
 * PROJECT DETAIL — reusable case-study template.
 * Every field is optional except name/slug/scope, so adding a project is a
 * data-only change.
 */
export default function ProjectDetail({ slug }) {
  const p = projects.items.find((x) => x.slug === slug);
  if (!p) return <NotFoundInline />;
  const others = projects.items.filter((x) => x.slug !== slug).slice(0, 3);

  const facts = p.facts?.length
    ? p.facts
    : [
        { k: "Client", v: projectDetail.client },
        { k: "Location", v: p.location },
        { k: "Sector", v: p.sector },
        { k: "Result", v: p.result },
      ];

  return (
    <>
      <PageHero
        index={p.sector}
        title={p.name}
        intro={p.summary || p.scope}
        image={p.image}
        breadcrumb={[{ label: "Projects", to: "/projects" }, { label: p.name }]}
      />

      {/* Demonstration notice — required by the content policy for unflagged readers */}
      {p.demonstration && (
        <div style={{ background: "var(--color-signal)", color: "#fff" }}>
          <div className="wrap" style={{ paddingTop: 14, paddingBottom: 14 }}>
            <p className="caption" style={{ letterSpacing: ".08em", textTransform: "uppercase", margin: 0 }}>
              Demonstration case study — written to show project detail and is not a verified contract record.
            </p>
          </div>
        </div>
      )}

      {/* Fact strip */}
      <section className="section" style={{ background: "#fff", color: "#000", paddingBlock: 48 }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="fact-grid">
            {facts.slice(0, 8).map((f) => (
              <div key={f.k} style={{ borderTop: "1px solid rgba(0,0,0,.15)", paddingTop: 16 }}>
                <p className="caption" style={{ color: "var(--color-ash)", textTransform: "uppercase", letterSpacing: ".1em" }}>{f.k}</p>
                <p style={{ fontSize: 17, fontWeight: 600, marginTop: 6, lineHeight: 1.35 }}>{f.v}</p>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 900px){ .fact-grid{ grid-template-columns: 1fr 1fr !important; } }`}</style>
        </div>
      </section>

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap pd-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>The brief</p>
            <h2 className="h2 mt-4" style={{ color: "#fff", fontSize: 30 }}>Objectives</h2>
            <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "grid", gap: 12 }}>
              {(p.objectives || [p.scope]).map((o) => (
                <li key={o} className="body" style={{ color: "var(--color-body-dark)", paddingLeft: 18, position: "relative" }}>
                  <span style={{ position: "absolute", left: 0, top: 11, width: 6, height: 6, background: "var(--color-safety)" }} aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Scope</p>
            <h2 className="h2 mt-4" style={{ color: "#fff", fontSize: 30 }}>Services delivered</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
              {(p.delivered || []).map((d) => (
                <span key={d} className="body" style={{ color: "#fff", border: "1px solid rgba(255,255,255,.25)", padding: "8px 14px" }}>
                  {d}
                </span>
              ))}
            </div>
            {p.engineering?.length > 0 && (
              <>
                <h3 className="h3" style={{ color: "#fff", fontSize: 20, marginTop: 32 }}>Engineering & technical requirements</h3>
                <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "grid", gap: 10 }}>
                  {p.engineering.map((e) => (
                    <li key={e} className="body" style={{ color: "var(--color-body-dark)", paddingLeft: 18, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, top: 11, width: 6, height: 6, background: "rgba(255,255,255,.35)" }} aria-hidden="true" />
                      {e}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>
        </div>
        <style>{`@media (max-width: 900px){ .pd-split{ grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* Execution approach */}
      {p.approach?.length > 0 && (
        <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
          <div className="wrap">
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Method</p>
            <h2 className="h2 mt-4" style={{ color: "#fff" }}>How it was executed</h2>
            <ol style={{ listStyle: "none", margin: "40px 0 0", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="rel-grid">
              {p.approach.map((a, i) => (
                <li key={a} style={{ borderTop: "1px solid rgba(255,255,255,.16)", paddingTop: 20 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-safety)", letterSpacing: ".1em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="body-l" style={{ color: "#fff", marginTop: 10 }}>{a}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Challenges */}
      {p.challenges?.length > 0 && (
        <section className="section" style={{ background: "#000" }}>
          <div className="wrap">
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Challenges</p>
            <h2 className="h2 mt-4" style={{ color: "#fff" }}>What went wrong, and what we did</h2>
            <div style={{ display: "grid", gap: 20, marginTop: 40 }}>
              {p.challenges.map((c, i) => (
                <Reveal key={c.challenge} delay={i * 0.05}>
                  <div className="cx-card chal-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, padding: 28 }}>
                    <div>
                      <p className="caption" style={{ color: "var(--color-signal-copy, #ff8b6a)", letterSpacing: ".1em", textTransform: "uppercase" }}>Challenge</p>
                      <p className="body-l" style={{ color: "#fff", marginTop: 10 }}>{c.challenge}</p>
                    </div>
                    <div>
                      <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".1em", textTransform: "uppercase" }}>Solution</p>
                      <p className="body-l" style={{ color: "var(--color-body-dark)", marginTop: 10 }}>{c.solution}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <style>{`@media (max-width: 900px){ .chal-grid{ grid-template-columns: 1fr !important; gap: 20px !important; } }`}</style>
          </div>
        </section>
      )}

      {/* Equipment + HSE */}
      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap pd-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          {p.equipment?.length > 0 && (
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Plant & tooling</p>
              <h2 className="h2 mt-4" style={{ color: "#fff", fontSize: 30 }}>Equipment & technologies</h2>
              <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "grid", gap: 10 }}>
                {p.equipment.map((e) => (
                  <li key={e} className="body" style={{ color: "var(--color-body-dark)", paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 11, width: 6, height: 6, background: "rgba(255,255,255,.35)" }} aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
          {p.hse?.length > 0 && (
            <Reveal delay={0.06}>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Safety & environment</p>
              <h2 className="h2 mt-4" style={{ color: "#fff", fontSize: 30 }}>HSE controls applied</h2>
              <ul style={{ listStyle: "none", margin: "20px 0 0", padding: 0, display: "grid", gap: 10 }}>
                {p.hse.map((e) => (
                  <li key={e} className="body" style={{ color: "var(--color-body-dark)", paddingLeft: 18, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 11, width: 6, height: 6, background: "rgba(255,255,255,.35)" }} aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
              <Link to="/safety" className="text-link body" style={{ color: "var(--color-safety)", marginTop: 24, display: "inline-flex" }}>
                Read our HSE approach →
              </Link>
            </Reveal>
          )}
        </div>
        <style>{`@media (max-width: 900px){ .pd-split{ grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* Outcomes */}
      {p.outcomes?.length > 0 && (
        <section className="section" style={{ background: "#fff", color: "#000" }}>
          <div className="wrap">
            <p className="eyebrow" style={{ color: "var(--color-signal)" }}>Results</p>
            <h2 className="h2 mt-4">Outcomes & deliverables</h2>
            <ul style={{ listStyle: "none", margin: "40px 0 0", padding: 0 }}>
              {p.outcomes.map((o) => (
                <li key={o} className="body-l" style={{ borderTop: "1px solid rgba(0,0,0,.15)", padding: "18px 0", display: "flex", gap: 16 }}>
                  <span style={{ color: "var(--color-signal)", flexShrink: 0 }} aria-hidden="true">—</span>
                  {o}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 40 }}>
              <Button href="#/contact/proposal">Request a proposal</Button>
            </div>
          </div>
        </section>
      )}

      {p.testimonial && (
        <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
          <div className="wrap">
            <blockquote style={{ borderLeft: "3px solid var(--color-safety)", paddingLeft: 24, maxWidth: 820, margin: 0 }}>
              <p className="h3" style={{ color: "#fff", fontSize: 24, textTransform: "none", lineHeight: 1.4 }}>
                “{p.testimonial.quote}”
              </p>
              <cite className="caption" style={{ display: "block", color: "var(--color-grey)", marginTop: 16, fontStyle: "normal" }}>
                — {p.testimonial.author} (demonstration)
              </cite>
            </blockquote>
          </div>
        </section>
      )}

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Related projects</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }} className="rel3">
            {others.map((o) => (
              <Link key={o.slug} to={`/projects/${o.slug}`} className="cx-card chamfer-tr-sm" style={{ display: "block", textDecoration: "none" }}>
                <ImageSlot slot={o.image.slot} src={o.image.src} ratio="16:10" brief={o.image.brief} label={false} />
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

function NotFoundInline() {
  return (
    <section className="section" style={{ background: "#000" }}>
      <div className="wrap">
        <h1 className="h1" style={{ color: "#fff" }}>Project not found.</h1>
        <p className="body-l" style={{ color: "var(--color-body-dark)", marginTop: 16 }}>
          That project is not in this portfolio. Browse the project index instead.
        </p>
        <Button href="#/projects">All projects</Button>
      </div>
    </section>
  );
}
