import { TextLink } from "./Button";
import Reveal from "./Reveal";

/**
 * Section header pattern: eyebrow (index + label) / H2 / optional intro / optional link.
 * Dark-on-light flips via `tone="light"`.
 */
export default function SectionHeader({ index, title, intro, link, tone = "dark", align = "left" }) {
  const light = tone === "light";
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}>
      <Reveal>
        <p className="eyebrow" style={{ color: light ? "var(--color-signal)" : "var(--color-safety)" }}>
          {index}
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="h2 mt-4" style={{ color: light ? "#000" : "#fff" }}>
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className="body-l mt-6" style={{ color: light ? "var(--color-body-light)" : "var(--color-body-dark)" }}>
            {intro}
          </p>
        </Reveal>
      )}
      {link && (
        <Reveal delay={0.18}>
          <div className="mt-6">
            <TextLink href={link.href} dark={light}>
              {link.label}
            </TextLink>
          </div>
        </Reveal>
      )}
    </div>
  );
}
