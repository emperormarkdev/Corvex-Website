import Button from "../components/Button";
import { LogoStack } from "../components/Logo";

export default function NotFoundPage() {
  return (
    <section style={{ background: "#000", minHeight: "100svh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 80 }}>
      <div className="wrap" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
        <span style={{ color: "var(--color-safety)", width: 96, display: "block" }}>
          <LogoStack className="w-full h-auto" />
        </span>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(88px, 22vw, 200px)", fontWeight: 900, color: "#fff", lineHeight: 1, letterSpacing: "0.02em" }}>
          404
        </p>
        <p className="body-l" style={{ color: "var(--color-body-dark)", maxWidth: 480 }}>
          That page is not on this site. It may have moved, or the link may be out of date.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <Button href="#/">Back to home</Button>
          <Button href="#/services" variant="outline">Browse services</Button>
        </div>
      </div>
    </section>
  );
}
