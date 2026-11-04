import { about } from "../content";
import { TextLink } from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Reveal from "../components/Reveal";

/**
 * White band. Asymmetric 5/7 split + three numbered principles.
 */
export default function AboutTeaser() {
  return (
    <section id="about" aria-label="About Corvex" style={{ background: "#fff", color: "#000" }}>
      <div className="wrap section">
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64 }} className="about-grid">
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-signal)" }}>{about.index}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h2 mt-4" style={{ color: "#000" }}>{about.title}</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="body-l mt-6" style={{ color: "var(--color-body-light)" }}>
                {about.paragraph}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-6">
                <TextLink href={about.link.href} dark>{about.link.label}</TextLink>
              </div>
            </Reveal>

            <div style={{ marginTop: 48 }}>
              {about.principles.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <div
                    className="hairline-t-light"
                    style={{ padding: "20px 0", display: "flex", gap: 20 }}
                  >
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-signal)", letterSpacing: ".1em", paddingTop: 3 }}>
                      {p.n}
                    </span>
                    <span>
                      <span style={{ display: "block", fontWeight: 600, fontSize: 17 }}>{p.name}</span>
                      <span style={{ display: "block", color: "var(--color-body-light)", fontSize: 15, marginTop: 2 }}>{p.desc}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="about-media">
            <div style={{ position: "relative" }}>
              <ImagePlaceholder
                slot={about.image.slot}
                src={about.image.src}
                ratio={about.image.ratio}
                brief={about.image.brief}
                alt="Corvex field engineer reviewing asset data on site"
                chamfer
                label={false}
                style={{ minHeight: 480 }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 24,
                  bottom: -28,
                  background: "#000",
                  color: "#fff",
                  padding: "20px 24px",
                  borderLeft: "3px solid var(--color-signal)",
                  maxWidth: 320,
                }}
              >
                <p className="eyebrow" style={{ color: "var(--color-safety)" }}>Field note</p>
                <p className="body mt-2">{about.caption}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .about-grid{ grid-template-columns: 1fr !important; gap: 48px !important; } .about-media{ order: -1; } }`}</style>
    </section>
  );
}
