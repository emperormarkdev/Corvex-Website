import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "../content";
import { Link } from "../router";
import SectionHeader from "../components/SectionHeader";
import Reveal from "../components/Reveal";
import { IconArrowNE } from "../components/icons";
import { serviceIcons } from "../components/serviceIcons";

/**
 * Key section. Asymmetric: two large feature cards + four compact cards.
 * Desktop: hovering a row reveals its image in the sticky preview pane.
 * Mobile: image renders inline per card.
 */
export default function Services() {
  const [active, setActive] = useState(services.items[0]);

  return (
    <section id="services" aria-label="Services" style={{ background: "#000" }}>
      <div className="wrap section">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24 }}>
          <SectionHeader index={services.index} title={services.title} intro={services.intro} />
          <Reveal delay={0.15}>
            <p className="caption hidden md:block" style={{ color: "var(--color-grey)", letterSpacing: ".1em", textAlign: "right" }}>
              HOVER A LINE — PREVIEW SCOPE
              <br />
              <span style={{ color: "var(--color-safety)" }}>06 SERVICE LINES / 01 ACCOUNTABLE PARTNER</span>
            </p>
          </Reveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 24, marginTop: 56 }} className="svc-layout">
          {/* Service rows */}
          <div>
            {services.items.map((s, i) => (
              <Reveal key={s.slug} delay={Math.min(i * 0.05, 0.2)}>
                <Link
                  to={`/services/${s.slug}`}
                  onMouseEnter={() => setActive(s)}
                  onFocus={() => setActive(s)}
                  className="cx-card chamfer-tr-sm svc-row"
                  data-service={s.slug}
                  style={{
                    display: "flex",
                    gap: 24,
                    alignItems: "flex-start",
                    padding: "28px 28px 24px",
                    textDecoration: "none",
                    marginBottom: i === 1 ? 24 : 12,
                    borderColor: active.slug === s.slug ? "rgba(227,96,28,.65)" : undefined,
                    background: i < 2 ? "#101012" : "#0a0a0b",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-safety)", letterSpacing: ".1em", paddingTop: 6, minWidth: 28 }}>
                    {s.n}
                  </span>
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 16, justifyContent: "space-between" }}>
                      <ServiceIcon slug={s.slug} />
                      <span
                        className="h3 svc-name"
                        style={{ color: "#fff", flex: 1, fontSize: i < 2 ? undefined : 20 }}
                      >
                        {s.name}
                      </span>
                      <span style={{ color: "var(--color-safety)", flexShrink: 0 }} aria-hidden="true">
                        <IconArrowNE />
                      </span>
                    </span>
                    <span className="body" style={{ display: "block", color: "var(--color-body-dark)", marginTop: 10, maxWidth: 520 }}>
                      {s.desc}
                    </span>
                    <span style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 14 }} className="svc-tags">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 12,
                            letterSpacing: ".08em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,.6)",
                            border: "1px solid rgba(255,255,255,.16)",
                            padding: "4px 10px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                    {/* Inline image for mobile */}
                    <span className="svc-inline-img" style={{ display: "none", marginTop: 16 }}>
                      <InlineSlot s={s} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Sticky preview pane (desktop) */}
          <div className="svc-preview" style={{ position: "relative" }}>
            <div style={{ position: "sticky", top: 104 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slot ? active.image.slot : active.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PreviewSlot s={active} />
                  <div className="hairline-t" style={{ marginTop: 20, paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p className="eyebrow" style={{ color: "#fff" }}>{active.n} / {active.name}</p>
                    <p className="caption" style={{ color: "var(--color-safety)" }}>EXPLORE →</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              <p className="caption" style={{ color: "var(--color-grey)", marginTop: 16 }}>
                Previews are representative. Final scope imagery is issued per contract data pack.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 1023px){ .svc-layout{ grid-template-columns: 1fr !important; } .svc-preview{ display: none; } .svc-inline-img{ display: block !important; } .svc-name{ font-size: 20px !important; } } @media (max-width: 640px){ .svc-row{ padding: 20px 16px !important; gap: 16px !important; } .svc-row > span > span > span{ min-width: 0; } }`}</style>
    </section>
  );
}

function ServiceIcon({ slug }) {
  const I = serviceIcons[slug];
  if (!I) return null;
  return (
    <span style={{ color: "var(--color-safety)", flexShrink: 0, paddingTop: 2 }} aria-hidden="true">
      <I size={30} />
    </span>
  );
}

function PreviewSlot({ s }) {
  return (
    <div className="img-slot chamfer-tr" data-slot={s.image.slot} style={{ aspectRatio: "4 / 5", minHeight: 420 }} role="img" aria-label={`${s.image.slot} — ${s.image.brief}`}>
      {s.image.src && <img src={s.image.src} alt={s.name} loading="lazy" />}
      {!s.image.src && (
        <span className="img-slot-label">
          <strong>{s.image.slot}</strong>
          <span>4:5 · {s.image.brief}</span>
        </span>
      )}
    </div>
  );
}

function InlineSlot({ s }) {
  return (
    <span className="img-slot" data-slot={s.image.slot} style={{ display: "block", aspectRatio: "16 / 9" }} role="img" aria-label={`${s.image.slot} — ${s.image.brief}`}>
      {s.image.src && <img src={s.image.src} alt={s.name} loading="lazy" />}
      {!s.image.src && (
        <span className="img-slot-label">
          <strong>{s.image.slot}</strong>
          <span>16:9 · {s.image.brief}</span>
        </span>
      )}
    </span>
  );
}
