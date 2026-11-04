import { PageHero } from "../components/PageBits";
import Button from "../components/Button";
import ContactPage from "./ContactPage";

export default function ProposalPage() {
  return (
    <>
      <PageHero
        index="Contact"
        title="Request a proposal."
        intro="Share scope, drawings, and the target window. We return a costed, sequenced proposal with a named technical lead."
        breadcrumb={[{ label: "Contact", to: "/contact" }, { label: "Proposal" }]}
      />
      <ContactPage hideHero />
    </>
  );
}

export function SafetyConcernPage() {
  return (
    <>
      <PageHero
        index="Contact"
        title="Report a safety concern."
        intro="Anonymously if you prefer. Every report is reviewed by the HSE Director within one business day."
        breadcrumb={[{ label: "Contact", to: "/contact" }, { label: "Safety concern" }]}
      />
      <section className="section" style={{ background: "#000" }}>
        <div className="wrap" style={{ maxWidth: 720, marginInline: "auto" }}>
          <div style={{ border: "2px solid var(--color-safety)", padding: 32 }}>
            <h2 className="h3" style={{ color: "#fff" }}>How to raise a concern</h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "grid", gap: 14 }}>
              {[
                "Call the 24-hour HSE line: [PLACEHOLDER phone].",
                "Or email hse@corvex.example [PLACEHOLDER] — monitored daily.",
                "You may report anonymously. No retaliation for any report made in good faith.",
              ].map((t) => (
                <li key={t} className="body" style={{ color: "var(--color-body-dark)", display: "flex", gap: 12 }}>
                  <span aria-hidden="true" style={{ color: "var(--color-safety)" }}>—</span>
                  {t}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 28, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Button href="mailto:hse@corvex.example">Email HSE team</Button>
              <Button href="#/contact" variant="outline">General enquiry</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
