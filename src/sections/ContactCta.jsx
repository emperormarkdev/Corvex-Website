import { contactCta, site } from "../content";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

/**
 * Red full-width band with the chamfered diagonal motif.
 * White primary button, outlined secondary, placeholder contact lines.
 */
export default function ContactCta() {
  return (
    <section id="contact" aria-label="Contact" style={{ background: "var(--color-signal)", color: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Diagonal motif */}
      <div aria-hidden="true" style={{ position: "absolute", top: 0, right: 0, width: "min(480px, 45%)", height: 120, background: "#000", clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)", opacity: 0.9 }} />
      <div aria-hidden="true" style={{ position: "absolute", bottom: 0, left: 0, width: "min(480px, 45%)", height: 120, background: "var(--color-safety)", clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)", opacity: 0.95 }} />

      <div className="wrap section" style={{ position: "relative" }}>
        <div style={{ maxWidth: 760 }}>
          <Reveal>
            <p className="eyebrow" style={{ color: "#fff", opacity: 0.85 }}>Contact / Next step</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h1 mt-6" style={{ color: "#fff" }}>{contactCta.title}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-l mt-6" style={{ color: "rgba(255,255,255,.9)", maxWidth: 600 }}>{contactCta.intro}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 40 }}>
              <Button href={contactCta.primary.href} variant="white">{contactCta.primary.label}</Button>
              <Button href={contactCta.secondary.href} variant="outline-white">{contactCta.secondary.label}</Button>
            </div>
          </Reveal>
          <Reveal delay={0.22}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 40px", marginTop: 40 }} className="hairline-t" >
              <p className="body" style={{ paddingTop: 20, color: "#fff" }} data-placeholder="contact-email">
                <span style={{ opacity: 0.7 }}>Email — </span>{site.email.value}
              </p>
              <p className="body" style={{ paddingTop: 20, color: "#fff" }} data-placeholder="contact-phone">
                <span style={{ opacity: 0.7 }}>Phone — </span>{site.phone.value}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
