import { Link } from "../router";
import Button from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Reveal from "../components/Reveal";

/** Breadcrumb: Home / Section / Page */
export function Crumb({ trail = [] }) {
  return (
    <nav aria-label="Breadcrumb" style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
      <Link to="/" className="caption" style={{ color: "var(--color-grey)", textDecoration: "none", letterSpacing: ".08em", textTransform: "uppercase" }}>
        Home
      </Link>
      {trail.map((t) => (
        <span key={t.label} style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span aria-hidden="true" style={{ color: "var(--color-safety)" }}>←</span>
          {t.to ? (
            <Link to={t.to} className="caption" style={{ color: "var(--color-grey)", textDecoration: "none", letterSpacing: ".08em", textTransform: "uppercase" }}>
              {t.label}
            </Link>
          ) : (
            <span className="caption" aria-current="page" style={{ color: "#fff", letterSpacing: ".08em", textTransform: "uppercase" }}>
              {t.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

/** Inner page hero: eyebrow, H1, intro, optional image slot. */
export function PageHero({ index, title, intro, image, breadcrumb, dark = true }) {
  return (
    <header style={{ background: dark ? "#000" : "#fff", borderBottom: dark ? "1px solid rgba(255,255,255,.12)" : "1px solid rgba(0,0,0,.12)", paddingTop: 80 }}>
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 64 }}>
        <Reveal>
          <Crumb trail={breadcrumb} />
        </Reveal>
        <div style={{ display: "grid", gridTemplateColumns: image ? "7fr 5fr" : "1fr", gap: 48, marginTop: 32, alignItems: "center" }} className="ph-grid">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: dark ? "var(--color-safety)" : "var(--color-signal)" }}>{index}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="h1 mt-4" style={{ color: dark ? "#fff" : "#000" }}>{title}</h1>
            </Reveal>
            {intro && (
              <Reveal delay={0.12}>
                <p className="body-l mt-6" style={{ color: dark ? "var(--color-body-dark)" : "var(--color-body-light)", maxWidth: 640 }}>{intro}</p>
              </Reveal>
            )}
          </div>
          {image && (
            <Reveal delay={0.1}>
              <ImagePlaceholder slot={image.slot} src={image.src} ratio={image.ratio} brief={image.brief} alt={image.brief} chamfer />
            </Reveal>
          )}
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .ph-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </header>
  );
}

/** Reusable CTA band used at the foot of inner pages. */
export function PageCta({ tone = "red" }) {
  const red = tone === "red";
  return (
    <section style={{ background: red ? "var(--color-signal)" : "#000", borderTop: red ? "none" : "1px solid rgba(255,255,255,.12)" }}>
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 72, display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
        <Reveal>
          <h2 className="h2" style={{ color: "#fff" }}>Let&apos;s discuss your project.</h2>
          <p className="body mt-3" style={{ color: red ? "rgba(255,255,255,.9)" : "var(--color-body-dark)" }}>
            A technical lead replies within two business days.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Button href="#/contact" variant={red ? "white" : "primary"}>Contact Us</Button>
            <Button href="#/contact/proposal" variant={red ? "outline-white" : "outline"}>Request a Proposal</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Simple FAQ accordion (keyboard accessible). */
export function Faq({ items = [] }) {
  return (
    <div>
      {items.map((f, i) => (
        <details
          key={f.q}
          style={{ borderTop: "1px solid rgba(255,255,255,.12)", padding: "4px 0" }}
        >
          <summary
            style={{
              cursor: "pointer",
              padding: "18px 0",
              listStyle: "none",
              display: "flex",
              gap: 16,
              alignItems: "baseline",
              color: "#fff",
              fontWeight: 600,
              fontSize: 17,
            }}
          >
            <span style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-safety)" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {f.q}
            <span aria-hidden="true" style={{ marginLeft: "auto", color: "var(--color-safety)" }}>+</span>
          </summary>
          <p className="body" style={{ color: "var(--color-body-dark)", paddingBottom: 20, maxWidth: 720 }}>{f.a}</p>
        </details>
      ))}
      <div style={{ borderTop: "1px solid rgba(255,255,255,.12)" }} />
    </div>
  );
}
