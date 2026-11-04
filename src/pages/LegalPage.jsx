import { PageHero } from "../components/PageBits";
import { site } from "../content";

const COPY = {
  "privacy-policy": {
    title: "Privacy Policy",
    intro: "How Corvex collects, uses, and protects personal data submitted through this website.",
    sections: [
      ["Data we collect", "Name, company, email, phone, and message content submitted via contact and application forms. Essential cookie identifiers."],
      ["How we use it", "To respond to enquiries, assess applications, and meet contractual and legal obligations. We do not sell personal data."],
      ["Retention", "Enquiry records are kept only for as long as needed to respond and to meet contractual or legal obligations, then deleted."],
      ["Sharing", "Personal data is shared only with the parties required to deliver a contracted service, and never sold."],
      ["Your rights", "You may request access, correction, or deletion of your data by contacting " + site.email.value + "."],
      ["Contact", "For privacy questions, write to " + site.email.value + "."],
    ],
  },
  terms: {
    title: "Terms of Use",
    intro: "The terms governing use of this website and its content.",
    sections: [
      ["Use of this site", "You may view and reference this site for legitimate business evaluation. Content may not be reproduced commercially without written permission."],
      ["No warranty", "Content is provided for information only. Engineering services are governed solely by executed contracts."],
      ["Governing law", "These terms are governed by the laws of the Federal Republic of Nigeria."],
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    intro: "This site uses the minimum cookies required to function.",
    sections: [
      ["Essential cookies", "Used to remember your consent choice and site preferences. These cannot be disabled without breaking the site."],
      ["Analytics", "Not enabled by default. If enabled in future, it will require explicit consent via the cookie bar."],
      ["Managing cookies", "You can clear cookies in your browser settings at any time. Reopening the site will show the consent bar again."],
    ],
  },
};

export default function LegalPage({ slug }) {
  const c = COPY[slug] ?? COPY["privacy-policy"];
  return (
    <>
      <PageHero index="Legal" title={c.title} intro={c.intro} breadcrumb={[{ label: "Legal" }, { label: c.title }]} />
      <section className="section" style={{ background: "#fff", color: "#000" }}>
        <div className="wrap" style={{ maxWidth: 820, marginInline: "auto" }}>
          {c.sections.map(([h, p]) => (
            <div key={h} style={{ borderTop: "1px solid rgba(0,0,0,.12)", padding: "24px 0" }}>
              <h2 style={{ fontSize: 18, fontWeight: 700 }}>{h}</h2>
              <p className="body-l mt-3" style={{ color: "var(--color-body-light)" }}>{p}</p>
            </div>
          ))}
          <p className="caption" style={{ color: "var(--color-ash)", marginTop: 24 }}>
            Last updated 4 November 2026 · {site.legalName}
          </p>
        </div>
      </section>
    </>
  );
}
