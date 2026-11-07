import { useRef } from "react";
import { projects } from "../content";
import { Link } from "../router";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

/**
 * Editorial 1-large + 2-medium + 1-wide layout with drag/scroll strip
  * fallback. Each card links through to its full case study.
 */
export default function Projects() {
  const trackRef = useRef(null);
  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section id="projects" aria-label="Projects" style={{ background: "#000" }}>
      <div className="wrap section">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <SectionHeader index={projects.index} title={projects.title} link={projects.link} />
          <Reveal delay={0.15}>
            <div style={{ display: "flex", gap: 8 }} className="hidden sm:flex">
              <StripBtn label="←" onClick={() => scrollBy(-1)} />
              <StripBtn label="→" onClick={() => scrollBy(1)} />
            </div>
          </Reveal>
        </div>

        <div
          ref={trackRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 24,
            marginTop: 56,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
          }}
          className="proj-grid"
        >
          {projects.items.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i * 0.06, 0.18)} className={i === 0 ? "proj-span" : ""}>
              <Link
                to={`/projects/${p.slug}`}
                className="cx-card chamfer-tr-sm"
               
                style={{
                  scrollSnapAlign: "start",
                  minWidth: 300,
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  textDecoration: "none",
                }}
              >
                <div className="img-slot" data-slot={p.image.slot} style={{ aspectRatio: i === 0 ? "16 / 8" : "16 / 10" }} role="img" aria-label={`${p.image.slot} — ${p.image.brief}`}>
                  {p.image.src && <img src={p.image.src} alt={p.name} width={i === 0 ? 960 : 800} height={i === 0 ? 480 : 500} loading="lazy" decoding="async" />}
                  {!p.image.src && (
                    <span className="img-slot-label">
                      <strong>{p.image.slot}</strong>
                      <span>{p.image.ratio} · {p.image.brief}</span>
                    </span>
                  )}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      fontSize: 12,
                      letterSpacing: ".08em",
                      textTransform: "uppercase",
                      background: "var(--color-signal)",
                      color: "#fff",
                      padding: "4px 10px",
                      zIndex: 1,
                    }}
                  >
                    {p.sector}
                  </span>
                </div>
                <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: i === 0 ? 24 : 19, fontWeight: 700, textTransform: "uppercase", color: "#fff", lineHeight: 1.25 }}>
                    {p.name}
                  </h3>
                  <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".08em", textTransform: "uppercase" }}>
                    {p.location}
                  </p>
                  <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 4 }}>{p.scope}</p>
                  <p className="body" style={{ color: "#fff", fontWeight: 600 }}>→ {p.result}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media (min-width: 1024px){ .proj-span{ grid-column: span 2; } .proj-grid{ grid-template-rows: none; } } @media (max-width: 1023px){ .proj-grid{ display: flex !important; padding-bottom: 8px; } .proj-grid > *{ flex: 0 0 78%; } }`}</style>
    </section>
  );
}

function StripBtn({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={label === "←" ? "Scroll projects left" : "Scroll projects right"}
      style={{
        width: 52,
        height: 52,
        border: "1px solid rgba(255,255,255,.3)",
        background: "transparent",
        color: "#fff",
        fontSize: 20,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
