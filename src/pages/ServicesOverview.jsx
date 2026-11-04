import { useState } from "react";
import { services, faqSite, approach } from "../content";
import { Link } from "../router";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { serviceIcons } from "../components/serviceIcons";
import { PageHero, PageCta, Faq } from "../components/PageBits";

const FILTERS = ["All", "Oil & Gas", "Industrial", "Infrastructure"];

const SECTOR_MAP = {
  "Oil & Gas": ["engineering-solutions", "critical-operations", "oil-gas-support", "hse-compliance", "industrial-support"],
  Industrial: ["industrial-support", "engineering-solutions", "critical-operations", "hse-compliance"],
  Infrastructure: ["infrastructure", "engineering-solutions", "industrial-support", "hse-compliance"],
};

export default function ServicesOverview() {
  const [filter, setFilter] = useState("All");
  const list =
    filter === "All"
      ? services.items
      : services.items.filter((s) => SECTOR_MAP[filter]?.includes(s.slug));

  return (
    <>
      <PageHero
        index={services.index}
        title="Technical services, delivered end to end."
        intro={services.intro}
        breadcrumb={[{ label: "Services" }]}
      />

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
            <span className="caption" style={{ color: "var(--color-grey)", letterSpacing: ".1em", textTransform: "uppercase", marginRight: 8 }}>
              Filter by sector
            </span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                style={{
                  minHeight: 44,
                  minWidth: 44,
                  padding: "0 18px",
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  background: filter === f ? "var(--color-signal)" : "transparent",
                  color: "#fff",
                  border: `1px solid ${filter === f ? "var(--color-signal)" : "rgba(255,255,255,.25)"}`,
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }} className="ov-grid">
            {list.map((s, i) => {
              const Icon = serviceIcons[s.slug];
              return (
                <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.2)}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="cx-card chamfer-tr"
                    style={{ display: "block", textDecoration: "none", height: "100%" }}
                  >
                    <ImagePlaceholder slot={s.image.slot} src={s.image.src} ratio="16:10" brief={s.image.brief} label={false} />
                    <div style={{ padding: 24 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>{s.n}</span>
                        <span style={{ color: "var(--color-safety)" }}>{Icon && <Icon size={26} />}</span>
                      </div>
                      <h2 className="h3" style={{ color: "#fff", fontSize: 19, marginTop: 14 }}>{s.name}</h2>
                      <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{s.desc}</p>
                      <p className="caption" style={{ color: "var(--color-safety)", marginTop: 16, letterSpacing: ".1em", textTransform: "uppercase" }}>
                        Explore →
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          {list.length === 0 && (
            <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 32 }}>
              No services match that filter.
            </p>
          )}
        </div>
        <style>{`@media (max-width: 1023px){ .ov-grid{ grid-template-columns: 1fr 1fr !important; } } @media (max-width: 640px){ .ov-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* How we work */}
      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Method</p>
            <h2 className="h2 mt-4" style={{ color: "#fff" }}>How we work</h2>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 48 }} className="how-grid">
            {approach.steps.map((st, i) => (
              <Reveal key={st.n} delay={i * 0.06}>
                <div style={{ borderTop: "2px solid var(--color-safety)", paddingTop: 20 }}>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)", letterSpacing: ".1em" }}>{st.n}</p>
                  <p className="h3" style={{ color: "#fff", fontSize: 20, marginTop: 10 }}>{st.name}</p>
                  <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 8 }}>{st.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .how-grid{ grid-template-columns: 1fr 1fr !important; } }`}</style>
      </section>

      <section className="section" style={{ background: "#000" }}>
        <div className="wrap faq-grid" style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64 }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "var(--color-safety)" }}>FAQ</p>
            <h2 className="h2 mt-4" style={{ color: "#fff" }}>Common questions</h2>
            <div style={{ marginTop: 24 }}>
              <Button href="#/contact" variant="outline">Ask a question</Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={faqSite} />
          </Reveal>
        </div>
        <style>{`@media (max-width: 900px){ .faq-grid{ grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
      </section>

      <PageCta />
    </>
  );
}
