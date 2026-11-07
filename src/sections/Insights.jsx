import { insights } from "../content";
import { Link } from "../router";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";

/**
 * White band. 1 featured wide card + 2 compact cards.
 */
export default function Insights() {
  const [feature, ...rest] = insights.items;
  return (
    <section id="insights" aria-label="News and insights" style={{ background: "#fff", color: "#000" }}>
      <div className="wrap section">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <SectionHeader tone="light" index={insights.index} title={insights.title} link={{ ...insights.link }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 24, marginTop: 56 }} className="ins-grid">
          <Reveal>
            <FeatureCard item={feature} />
          </Reveal>
          <div style={{ display: "grid", gap: 24 }}>
            {rest.map((item, i) => (
              <Reveal key={item.title} delay={0.08 + i * 0.06}>
                <Link to={`/insights/${item.slug}`} className="cx-card-light chamfer-tr-sm" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden", textDecoration: "none", color: "inherit" }}>
                  <div className="img-slot" data-slot={item.image.slot} style={{ aspectRatio: "4 / 3", border: "none" }} role="img" aria-label={`${item.image.slot} — ${item.image.brief}`}>
                    {item.image.src && <img src={item.image.src} alt={item.title} width="640" height="480" loading="lazy" decoding="async" />}
                    {!item.image.src && (
                      <span className="img-slot-label">
                        <strong>{item.image.slot}</strong>
                        <span>{item.image.ratio}</span>
                      </span>
                    )}
                  </div>
                  <div style={{ padding: "24px" }}>
                    <p className="caption" style={{ color: "var(--color-signal)", letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600 }}>
                      {item.category}
                    </p>
                    <h3 style={{ fontSize: 19, fontWeight: 700, lineHeight: 1.35, marginTop: 10 }}>{item.title}</h3>
                    <p className="caption" style={{ color: "var(--color-ash)", marginTop: 12 }}>
                      {item.date} · {item.readTime}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .ins-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}

function FeatureCard({ item }) {
  return (
    <Link to={`/insights/${item.slug}`} className="cx-card-light chamfer-tr" style={{ overflow: "hidden", height: "100%", display: "block", textDecoration: "none", color: "inherit" }}>
      <div className="img-slot" data-slot={item.image.slot} style={{ aspectRatio: "16 / 9", border: "none", borderBottom: "1px solid rgba(0,0,0,.12)" }} role="img" aria-label={`${item.image.slot} — ${item.image.brief}`}>
        {item.image.src && <img src={item.image.src} alt={item.title} width="960" height="540" loading="lazy" decoding="async" />}
        {!item.image.src && (
          <span className="img-slot-label">
            <strong>{item.image.slot}</strong>
            <span>{item.image.ratio} · {item.image.brief}</span>
          </span>
        )}
        <span style={{ position: "absolute", top: 12, right: 12, background: "var(--color-signal)", color: "#fff", fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", padding: "4px 10px", zIndex: 1 }}>
          Featured
        </span>
      </div>
      <div style={{ padding: "32px 32px 36px" }}>
        <p className="caption" style={{ color: "var(--color-signal)", letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600 }}>
          {item.category}
        </p>
        <h3 className="h3" style={{ marginTop: 12 }}>{item.title}</h3>
        <p className="caption" style={{ color: "var(--color-ash)", marginTop: 12 }}>
          {item.date} · {item.readTime}
        </p>
      </div>
    </Link>
  );
}
