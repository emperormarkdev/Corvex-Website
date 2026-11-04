import { footer, site } from "../content";
import { Link } from "../router";
import Logo from "./Logo";
import { socials } from "./socials";

const serviceRoutes = [
  "/services/engineering-solutions",
  "/services/industrial-support",
  "/services/critical-operations",
  "/services/infrastructure",
  "/services/oil-gas-support",
  "/services/hse-compliance",
];
const companyRoutes = ["/about", "/sectors/oil-gas", "/projects", "/innovation", "/careers", "/insights"];
const YEAR = new Date().getFullYear();

/**
 * Black 4-column footer + bottom bar + oversized CORVEX wordmark
 * cropped at the bottom as a graphic element.
 */
export default function Footer() {
  return (
    <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,.12)", overflow: "hidden" }}>
      <div className="wrap" style={{ paddingTop: 72, paddingBottom: 48 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: 48,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <Link to="/" aria-label="CORVEX home" style={{ color: "#E3601C", display: "block", width: 84 }}>
              <Logo className="block w-full h-auto" />
            </Link>
            <p className="body mt-6" style={{ color: "var(--color-body-dark)", maxWidth: 300 }}>
              {footer.positioning}
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`CORVEX on ${name}`}
                  style={{
                    width: 44,
                    height: 44,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,.2)",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "border-color 200ms, color 200ms",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-safety)";
                    e.currentTarget.style.color = "var(--color-safety)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.2)";
                    e.currentTarget.style.color = "#fff";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col, ci) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="eyebrow" style={{ color: "var(--color-safety)", marginBottom: 20 }}>
                {col.title}
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 4 }}>
                {col.links.map((l, li) => (
                  <li key={l}>
                    <Link
                      to={(ci === 0 ? serviceRoutes : companyRoutes)[li] ?? "/"}
                      style={{
                        display: "inline-block",
                        padding: "6px 0",
                        color: "rgba(255,255,255,.78)",
                        textDecoration: "none",
                        fontSize: 15,
                      }}
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact */}
          <div>
            <p className="eyebrow" style={{ color: "var(--color-safety)", marginBottom: 20 }}>
              {footer.contact.title}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 16 }}>
              {footer.contact.lines.map((l) => (
                <li
                  key={l.label}
                  {...(l.placeholder ? { "data-placeholder": `contact-${l.label.toLowerCase()}` } : {})}
                >
                  <p className="caption" style={{ color: "var(--color-grey)", textTransform: "uppercase", letterSpacing: ".1em" }}>
                    {l.label}
                  </p>
                  <p style={{ color: "#fff", fontSize: 15, marginTop: 4 }}>{l.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="hairline-t"
          style={{
            marginTop: 56,
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            gap: "16px 32px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p className="caption" style={{ color: "var(--color-grey)" }}>
            © {YEAR} {site.name}. All rights reserved.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px", alignItems: "center" }}>
            {footer.legal.map((l) => (
              <Link
                key={l}
                to={`/legal/${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="caption"
                style={{ color: "rgba(255,255,255,.7)", textDecoration: "none" }}
              >
                {l}
              </Link>
            ))}
            <Link to="/legal/cookie-policy" className="caption" style={{ color: "rgba(255,255,255,.7)", textDecoration: "none" }}>
              Cookies
            </Link>
            {footer.certs.map((c) => (
              <span
                key={c.value}
                className="caption"
                data-placeholder="certification"
                style={{
                  color: "rgba(255,255,255,.55)",
                  border: "1px solid rgba(255,255,255,.18)",
                  padding: "4px 10px",
                  letterSpacing: ".06em",
                }}
              >
                {c.value}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Oversized cropped wordmark */}
      <div aria-hidden="true" style={{ overflow: "hidden", lineHeight: 0, marginBottom: -8 }}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(120px, 22vw, 340px)",
            letterSpacing: "0.02em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,.14)",
            whiteSpace: "nowrap",
            textAlign: "center",
            transform: "translateY(18%)",
            userSelect: "none",
          }}
        >
          {site.name}
        </p>
      </div>
      <style>{`@media (max-width: 900px){ .footer-grid{ grid-template-columns: 1fr 1fr !important; } } @media (max-width: 600px){ .footer-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </footer>
  );
}
