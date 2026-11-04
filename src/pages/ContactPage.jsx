import { useState } from "react";
import { services, sectors, site } from "../content";
import { PageHero } from "../components/PageBits";
import { Link } from "../router";

const EMPTY = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  sector: "",
  message: "",
  consent: false,
};

export default function ContactPage({ hideHero = false }) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.company.trim()) e.company = "Please enter your company.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.service) e.service = "Select a service.";
    if (form.message.trim().length < 20) e.message = "Please give at least 20 characters of detail.";
    if (!form.consent) e.consent = "Please accept the privacy terms.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      document.querySelector("[aria-invalid='true']")?.focus();
      return;
    }
    setSent(true);
    // No backend on a static deploy: hand the enquiry to the visitor's mail
    // client with everything pre-filled so the enquiry still reaches us.
    window.location.href = composeMailto(form);
  };

  return (
    <>
      {!hideHero && (
        <PageHero
          index="Contact"
          title="Let's discuss your project."
          intro="Send scope, drawings, or a one-line brief. A technical lead replies within two business days."
          breadcrumb={[{ label: "Contact" }]}
        />
      )}
      <section className="section" style={{ background: "#000" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "7fr 5fr", gap: 64, alignItems: "start" }} id="contact-grid">
          <div>
            {sent ? (
              <div role="status" style={{ border: "1px solid var(--color-safety)", padding: 32 }}>
                <h2 className="h2" style={{ color: "#fff" }}>Message received.</h2>
                <p className="body-l mt-4" style={{ color: "var(--color-body-dark)" }}>
                  Thank you, {form.name.split(" ")[0]}. A technical lead will reply within two business days.
                </p>
                <p className="caption mt-4" style={{ color: "var(--color-grey)" }}>
                  This opens in your email client with everything filled in, addressed to {site.email.value}.
                </p>
                <button
                  onClick={() => {
                    setForm(EMPTY);
                    setSent(false);
                  }}
                  style={{ marginTop: 24, minHeight: 44, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.4)", padding: "0 18px", cursor: "pointer" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="form-grid">
                  <Field id="name" label="Name" required error={errors.name}>
                    <input id="name" value={form.name} onChange={set("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} style={inputStyle(!!errors.name)} autoComplete="name" />
                  </Field>
                  <Field id="company" label="Company" required error={errors.company}>
                    <input id="company" value={form.company} onChange={set("company")} aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-err" : undefined} style={inputStyle(!!errors.company)} autoComplete="organization" />
                  </Field>
                  <Field id="email" label="Email" required error={errors.email}>
                    <input id="email" type="email" value={form.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} style={inputStyle(!!errors.email)} autoComplete="email" />
                  </Field>
                  <Field id="phone" label="Phone" error={errors.phone}>
                    <input id="phone" type="tel" value={form.phone} onChange={set("phone")} style={inputStyle(false)} autoComplete="tel" />
                  </Field>
                  <Field id="service" label="Service of interest" required error={errors.service}>
                    <select id="service" value={form.service} onChange={set("service")} aria-invalid={!!errors.service} aria-describedby={errors.service ? "service-err" : undefined} style={inputStyle(!!errors.service)}>
                      <option value="">Select…</option>
                      {services.items.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.name}</option>
                      ))}
                    </select>
                  </Field>
                  <Field id="sector" label="Sector" error={errors.sector}>
                    <select id="sector" value={form.sector} onChange={set("sector")} style={inputStyle(false)}>
                      <option value="">Select…</option>
                      {sectors.items.map((s) => (
                        <option key={s.slug} value={s.slug}>{s.name}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <div style={{ marginTop: 20 }}>
                  <Field id="message" label="Message" required error={errors.message}>
                    <textarea id="message" rows={5} value={form.message} onChange={set("message")} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined} style={{ ...inputStyle(!!errors.message), padding: 12, resize: "vertical" }} />
                  </Field>
                </div>

                <label style={{ display: "flex", gap: 12, alignItems: "flex-start", marginTop: 20, cursor: "pointer" }}>
                  <input type="checkbox" checked={form.consent} onChange={set("consent")} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined} style={{ marginTop: 4, width: 18, height: 18, accentColor: "#C91A1A" }} />
                  <span className="body" style={{ color: "var(--color-body-dark)" }}>
                    I agree to the <Link to="/legal/privacy-policy" style={{ color: "#fff" }}>Privacy Policy</Link> and consent to being contacted about this enquiry.
                  </span>
                </label>
                {errors.consent && <p id="consent-err" className="caption" style={{ color: "#ff8b8b", marginTop: 6 }}>{errors.consent}</p>}

                <button type="submit" className="btn btn-primary chamfer-tr-sm" style={{ marginTop: 28, border: "none", cursor: "pointer" }}>
                  Send enquiry
                </button>
              </form>
            )}
          </div>

          <aside>
            <h2 className="h3" style={{ color: "#fff" }}>Offices</h2>
            <div style={{ display: "grid", gap: 16, marginTop: 20 }}>
              {[
                { city: "Lagos — Head Office", type: "Head Office", addr: site.hq.value, tz: "Mon–Fri, 08:00–17:00" },
                { city: "Port Harcourt — Regional Office", type: "Regional Office", addr: "Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria", tz: "Mon–Fri, 08:00–17:00" },
              ].map((o) => (
                <div key={o.city} style={{ border: "1px solid rgba(255,255,255,.16)", padding: 20 }}>
                  <p className="caption" style={{ color: "var(--color-safety)", letterSpacing: ".1em", textTransform: "uppercase" }}>{o.type}</p>
                  <p style={{ color: "#fff", fontWeight: 600, marginTop: 6 }}>{o.city}</p>
                  <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 6 }}>{o.addr}</p>
                  <p className="body" style={{ color: "var(--color-body-dark)", marginTop: 4 }}><a href={site.phone.href} style={{ color: "inherit", textDecoration: "none" }}>{site.phone.value}</a></p>
                  <p className="body" style={{ color: "var(--color-body-dark)" }}><a href={site.email.href} style={{ color: "inherit", textDecoration: "none" }}>{site.email.value}</a></p>
                  <p className="caption" style={{ color: "var(--color-grey)", marginTop: 8 }}>{o.tz}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, border: "1px solid rgba(255,255,255,.16)", background: "#0a0a0b", overflow: "hidden" }}>
              <iframe
                title="Map showing the Corvex head office in Lekki Phase 1, Lagos"
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.4330%2C6.4250%2C3.5150%2C6.4590&layer=mapnik&marker=6.4419%2C3.4739"
                loading="lazy"
                style={{ display: "block", width: "100%", height: 240, border: 0 }}
              />
              <p className="caption" style={{ color: "var(--color-grey)", padding: "10px 12px" }}>
                <a
                  href="https://www.openstreetmap.org/?mlat=6.4419&mlon=3.4739#map=15/6.4419/3.4739"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--color-safety)", textDecoration: "none" }}
                >
                  View larger map
                </a>
              </p>
            </div>

            <div style={{ display: "grid", gap: 8, marginTop: 24 }}>
              <Link to="/contact/proposal" className="btn chamfer-tr-sm btn-outline" style={{ justifyContent: "center" }}>Request a Proposal</Link>
              <Link to="/contact/safety-concern" className="btn chamfer-tr-sm btn-outline" style={{ justifyContent: "center" }}>Report a Safety Concern</Link>
            </div>
          </aside>
        </div>
        <style>{`@media (max-width: 1023px){ #contact-grid{ grid-template-columns: 1fr !important; } .form-grid{ grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  );
}

function composeMailto(form) {
  const subject = encodeURIComponent(
    `Project enquiry — ${form.company || "CORVEX"} — ${form.service || "General"}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "—"}`,
      `Service of interest: ${form.service || "—"}`,
      `Sector: ${form.sector || "—"}`,
      "",
      "Message:",
      form.message,
      "",
      "---",
      "Sent via corvex-site contact form (demonstration deployment)",
    ].join("\n")
  );
  return `mailto:${site.email.href.replace("mailto:", "")}?subject=${subject}&body=${body}`;
}

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="caption" style={{ display: "block", color: "var(--color-grey)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 8 }}>
        {label} {required && <span style={{ color: "var(--color-safety)" }}>*</span>}
      </label>
      {children}
      {error && <p id={`${id}-err`} className="caption" style={{ color: "#ff8b8b", marginTop: 6 }}>{error}</p>}
    </div>
  );
}

function inputStyle(invalid) {
  return {
    width: "100%",
    minHeight: 48,
    background: "#0a0a0b",
    border: `1px solid ${invalid ? "var(--color-signal)" : "rgba(255,255,255,.25)"}`,
    color: "#fff",
    padding: "0 14px",
    fontFamily: "var(--font-body)",
    fontSize: 15,
  };
}
