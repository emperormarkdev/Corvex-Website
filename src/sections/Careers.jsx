import { careers } from "../content";
import Button from "../components/Button";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Reveal from "../components/Reveal";

/**
 * Split band: image left, copy + benefits + CTAs right.
 */
export default function Careers() {
  return (
    <section id="careers" aria-label="Careers" style={{ background: "#0a0a0b", borderTop: "1px solid rgba(255,255,255,.12)" }}>
      <div className="wrap section">
        <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64, alignItems: "center" }} className="car-grid">
          <Reveal>
            <ImagePlaceholder
              slot={careers.image.slot}
              src={careers.image.src}
              ratio={careers.image.ratio}
              brief={careers.image.brief}
              alt="Corvex field team during a morning briefing"
              chamfer
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow" style={{ color: "var(--color-safety)" }}>{careers.index}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h2 mt-4" style={{ color: "#fff" }}>{careers.title}</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="body-l mt-6" style={{ color: "var(--color-body-dark)", maxWidth: 560 }}>{careers.intro}</p>
            </Reveal>
            <div style={{ marginTop: 32 }}>
              {careers.benefits.map((b, i) => (
                <Reveal key={b.n} delay={i * 0.06}>
                  <div style={{ display: "flex", gap: 20, padding: "16px 0", borderTop: "1px solid rgba(255,255,255,.12)" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-safety)", letterSpacing: ".1em", paddingTop: 3 }}>{b.n}</span>
                    <span>
                      <span style={{ display: "block", color: "#fff", fontWeight: 600, fontSize: 17 }}>{b.name}</span>
                      <span className="body" style={{ display: "block", color: "var(--color-body-dark)", marginTop: 2 }}>{b.desc}</span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 32 }}>
                <Button href={careers.primary.href}>{careers.primary.label}</Button>
                <Button href={careers.secondary.href} variant="outline">{careers.secondary.label}</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 900px){ .car-grid{ grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  );
}
