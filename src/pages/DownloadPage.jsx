import { PageHero } from "../components/PageBits";
import Button from "../components/Button";

/**
 * Stand-in for PDF downloads (capability statement, HSE policy).
 * Swap for real assets by adding files to /public/downloads and
 * changing these hrefs to point straight at the PDF.
 */
const DOCS = {
  "capability-statement": {
    title: "Capability Statement",
    file: "[PLACEHOLDER] Corvex-capability-statement.pdf",
    desc: "Company overview, service lines, sector experience, certifications, and contact routes.",
  },
  "hse-policy": {
    title: "HSE Policy",
    file: "[PLACEHOLDER] Corvex-hse-policy.pdf",
    desc: "Signed policy statement, zero-harm commitments, reporting route, and audit regime.",
  },
};

export default function DownloadPage({ slug }) {
  const d = DOCS[slug] ?? DOCS["capability-statement"];
  return (
    <>
      <PageHero index="Downloads" title={d.title} intro={d.desc} breadcrumb={[{ label: "Downloads" }, { label: d.title }]} />
      <section className="section" style={{ background: "#fff", color: "#000" }}>
        <div className="wrap" style={{ maxWidth: 720, marginInline: "auto" }}>
          <div data-placeholder="document" style={{ border: "1px solid rgba(0,0,0,.15)", padding: 32, display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            <span aria-hidden="true" style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: ".1em", border: "1px solid rgba(0,0,0,.3)", padding: "10px 12px" }}>PDF</span>
            <span style={{ flex: 1, minWidth: 220 }}>
              <p style={{ fontWeight: 600, fontSize: 17 }}>{d.file}</p>
              <p className="caption" style={{ color: "var(--color-ash)", marginTop: 4 }}>Placeholder document — not yet supplied.</p>
            </span>
            <Button href="#/contact" variant="outline-dark">Request by email</Button>
          </div>
          <p className="body" style={{ color: "var(--color-body-light)", marginTop: 24 }}>
            To publish the real file: drop the PDF into <code style={{ background: "#f4f4f3", padding: "2px 6px" }}>public/downloads/</code> and
            point this page&apos;s href straight at it. No other change needed.
          </p>
        </div>
      </section>
    </>
  );
}
