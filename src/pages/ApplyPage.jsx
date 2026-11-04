import { useState } from "react";
import { careersPage } from "../content";
import { PageHero } from "../components/PageBits";

/** Application form — name, email, role, CV upload, message. */
export default function ApplyPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({ name: "", email: "", role: "", fileName: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) err.email = "Enter a valid email.";
    if (!form.role) err.role = "Select a role.";
    if (!form.fileName) err.file = "Attach your CV.";
    setErrors(err);
    if (Object.keys(err).length) return;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="wrap section">
        <div role="status" style={{ border: "1px solid var(--color-safety)", padding: 32, maxWidth: 640 }}>
          <h1 className="h2" style={{ color: "#fff" }}>Application received.</h1>
          <p className="body-l mt-4" style={{ color: "var(--color-body-dark)" }}>
            Thank you, {form.name.split(" ")[0]}. Recruitment reviews applications within five business days.
          </p>
          <p className="caption mt-4" style={{ color: "var(--color-grey)" }}>Demo form — connect to your ATS before launch.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero
        index="Careers"
        title="Apply to join Corvex."
        intro="Certification details help — list them in your message."
        breadcrumb={[{ label: "Careers", to: "/careers" }, { label: "Apply" }]}
      />
      <section className="section" style={{ background: "#000" }}>
        <div className="wrap" style={{ maxWidth: 720, marginInline: "auto" }}>
          <form onSubmit={submit} noValidate>
            <Field id="a-name" label="Full name" error={errors.name}>
              <input id="a-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} style={inp(!!errors.name)} autoComplete="name" />
            </Field>
            <div style={{ height: 20 }} />
            <Field id="a-email" label="Email" error={errors.email}>
              <input id="a-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={!!errors.email} style={inp(!!errors.email)} autoComplete="email" />
            </Field>
            <div style={{ height: 20 }} />
            <Field id="a-role" label="Role" error={errors.role}>
              <select id="a-role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} aria-invalid={!!errors.role} style={inp(!!errors.role)}>
                <option value="">Select a role…</option>
                {careersPage.openings.map((o) => (
                  <option key={o.title} value={o.title}>{o.title}</option>
                ))}
                <option value="Graduate Programme">Graduate Programme</option>
              </select>
            </Field>
            <div style={{ height: 20 }} />
            <Field id="a-file" label="CV (PDF, max 5MB)" error={errors.file}>
              <input
                id="a-file"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setForm({ ...form, fileName: e.target.files?.[0]?.name ?? "" })}
                aria-invalid={!!errors.file}
                style={{ ...inp(!!errors.file), paddingTop: 12 }}
              />
              {form.fileName && <p className="caption" style={{ color: "var(--color-safety)", marginTop: 6 }}>{form.fileName}</p>}
            </Field>
            <div style={{ height: 20 }} />
            <Field id="a-msg" label="Message">
              <textarea id="a-msg" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inp(false), padding: 12, resize: "vertical" }} />
            </Field>
            <button type="submit" className="btn btn-primary chamfer-tr-sm" style={{ marginTop: 28, border: "none", cursor: "pointer" }}>
              Submit application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="caption" style={{ display: "block", color: "var(--color-grey)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 8 }}>
        {label}
      </label>
      {children}
      {error && <p className="caption" style={{ color: "#ff8b8b", marginTop: 6 }}>{error}</p>}
    </div>
  );
}

function inp(invalid) {
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
