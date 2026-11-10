import { insights, articleBodies } from "../content";
import { Link } from "../router";
import ImageSlot from "../components/ImageSlot";
import { Crumb, PageCta } from "../components/PageBits";
import { socials } from "../components/socials";

export default function ArticlePage({ slug }) {
  const a = insights.items.find((x) => x.slug === slug);
  if (!a) return <h1 className="wrap h1 section" style={{ color: "#fff" }}>Article not found.</h1>;
  const body = articleBodies[slug] ?? [];
  const others = insights.items.filter((x) => x.slug !== slug);

  return (
    <>
      <header style={{ background: "#fff", color: "#000", paddingTop: 80 }}>
        <div className="wrap" style={{ paddingTop: 64, paddingBottom: 48 }}>
          <Crumb trail={[{ label: "Insights", to: "/insights" }, { label: a.category }]} />
          <p className="eyebrow mt-8" style={{ color: "var(--color-signal)" }}>{a.category}</p>
          <h1 className="h1 mt-4" style={{ maxWidth: 900 }}>{a.title}</h1>
          <p className="caption mt-6" style={{ color: "var(--color-ash)" }}>{a.date} · {a.readTime}</p>
        </div>
      </header>

      <div className="wrap">
        <ImageSlot slot={a.image.slot} src={a.image.src} ratio="21:9" brief={a.image.brief} alt={a.title} />
      </div>

      <article className="section" style={{ background: "#fff", color: "#000" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "3fr 7fr 2fr", gap: 48 }} id="art-grid">
          <aside>
            <p className="caption" style={{ color: "var(--color-ash)", textTransform: "uppercase", letterSpacing: ".1em" }}>Share</p>
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Share on ${name}`}
                  style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(0,0,0,.2)", color: "#000" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </aside>
          <div style={{ maxWidth: 680 }}>
            {body.map((p, i) => (
              <p key={i} className="body-l" style={{ color: "var(--color-body-light)", marginBottom: 24 }}>{p}</p>
            ))}
          </div>
          <div />
        </div>
        <style>{`@media (max-width: 900px){ #art-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </article>

      <section className="section" style={{ background: "#060607", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap">
          <h2 className="h2" style={{ color: "#fff" }}>Related reading</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
            {others.map((o) => (
              <Link key={o.slug} to={`/insights/${o.slug}`} className="cx-card chamfer-tr-sm" style={{ display: "block", padding: 24, textDecoration: "none" }}>
                <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".1em", textTransform: "uppercase" }}>{o.category}</p>
                <p className="h3" style={{ color: "#fff", fontSize: 19, marginTop: 10 }}>{o.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta tone="dark" />
    </>
  );
}
