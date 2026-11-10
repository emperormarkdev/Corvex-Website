import { useState, useMemo } from "react";
import { insights } from "../content";
import { Link } from "../router";
import Reveal from "../components/Reveal";
import ImageSlot from "../components/ImageSlot";
import { PageHero, PageCta } from "../components/PageBits";

const CATS = ["All", "HSE", "Engineering", "Operations"];

export default function InsightsOverview() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      insights.items.filter(
        (a) =>
          (cat === "All" || a.category === cat) &&
          (q.trim() === "" || a.title.toLowerCase().includes(q.toLowerCase())),
      ),
    [cat, q],
  );

  return (
    <>
      <PageHero
        index={insights.index}
        title="Notes from the field."
        intro="Practical writing on turnarounds, asset integrity, and commissioning — written by the people doing the work."
        breadcrumb={[{ label: "Insights" }]}
      />

      <section className="section" style={{ background: "#fff", color: "#000" }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                aria-pressed={cat === c}
                style={{
                  minHeight: 44,
                  padding: "0 18px",
                  cursor: "pointer",
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  background: cat === c ? "var(--color-signal)" : "transparent",
                  color: cat === c ? "#fff" : "#000",
                  border: `1px solid ${cat === c ? "var(--color-signal)" : "rgba(0,0,0,.25)"}`,
                }}
              >
                {c}
              </button>
            ))}
            <label style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
              <span className="caption" style={{ color: "var(--color-ash)", textTransform: "uppercase", letterSpacing: ".1em" }}>Search</span>
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Keywords"
                aria-label="Search insights"
                style={{ minHeight: 44, border: "1px solid rgba(0,0,0,.25)", padding: "0 12px", fontFamily: "var(--font-body)", fontSize: 15, width: 200 }}
              />
            </label>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 40 }} className="ins-grid2">
            {list.map((a, i) => (
              <Reveal key={a.slug} delay={Math.min(i * 0.05, 0.2)}>
                <Link to={`/insights/${a.slug}`} className="cx-card-light chamfer-tr-sm" style={{ display: "block", textDecoration: "none", color: "inherit", height: "100%" }}>
                  <ImageSlot slot={a.image.slot} src={a.image.src} ratio="16:10" brief={a.image.brief} label={false} />
                  <div style={{ padding: 24 }}>
                    <p className="caption" style={{ color: "var(--color-signal)", letterSpacing: ".1em", textTransform: "uppercase", fontWeight: 600 }}>{a.category}</p>
                    <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.35, marginTop: 10 }}>{a.title}</h2>
                    <p className="caption" style={{ color: "var(--color-ash)", marginTop: 12 }}>{a.date} · {a.readTime}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {list.length === 0 && <p className="body" style={{ marginTop: 32, color: "var(--color-ash)" }}>No articles match that search.</p>}
        </div>
        <style>{`@media (max-width: 900px){ .ins-grid2{ grid-template-columns: 1fr !important; } }`}</style>
      </section>

      <section style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,.12)" }}>
        <div className="wrap" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="news-grid">
            <div>
              <h2 className="h2" style={{ color: "#fff" }}>Field notes, monthly.</h2>
              <p className="body mt-3" style={{ color: "var(--color-body-dark)" }}>One short email. No marketing filler.</p>
            </div>
            <Newsletter />
          </div>
        </div>
        <style>{`@media (max-width: 900px){ .news-grid{ grid-template-columns: 1fr !important; gap: 24px !important; } }`}</style>
      </section>

      <PageCta tone="dark" />
    </>
  );
}

function Newsletter() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  if (sent) {
    return (
      <p role="status" style={{ border: "1px solid var(--color-safety)", padding: 20, color: "#fff" }} className="body">
        Thanks — you&apos;re subscribed to CORVEX Field Notes &amp; Technical Insights.
      </p>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
          setErr("Enter a valid email address.");
          return;
        }
        setErr("");
        setSent(true);
      }}
      noValidate
    >
      <label htmlFor="news-email" className="caption" style={{ color: "var(--color-grey)", textTransform: "uppercase", letterSpacing: ".1em" }}>
        Email address
      </label>
      <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
        <input
          id="news-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!err}
          aria-describedby={err ? "news-err" : undefined}
          placeholder="name@company.com"
          style={{ flex: 1, minWidth: 220, minHeight: 52, background: "#0a0a0b", border: `1px solid ${err ? "var(--color-signal)" : "rgba(255,255,255,.3)"}`, color: "#fff", padding: "0 16px", fontFamily: "var(--font-body)" }}
        />
        <button type="submit" className="btn btn-primary chamfer-tr-sm">Subscribe</button>
      </div>
      {err && <p id="news-err" className="caption" style={{ color: "#ff8b8b", marginTop: 8 }}>{err}</p>}
    </form>
  );
}
