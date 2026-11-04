import { useState } from "react";
import { cookieBar } from "../content";

/**
 * Minimal consent bar: bottom-left, essential-only copy.
 * Persists choice to localStorage; renders nothing once answered.
 */
export default function CookieBar() {
  const [done, setDone] = useState(() => {
    try {
      return !!localStorage.getItem("corvex-consent");
    } catch {
      return false;
    }
  });
  if (done) return null;

  const choose = (v) => {
    try {
      localStorage.setItem("corvex-consent", v);
    } catch {
      /* storage unavailable — dismiss anyway */
    }
    setDone(true);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        left: 24,
        bottom: 24,
        zIndex: 60,
        maxWidth: 360,
        background: "#0a0a0b",
        border: "1px solid rgba(255,255,255,.16)",
        padding: "20px 20px 16px",
      }}
    >
      <p className="eyebrow" style={{ color: "var(--color-safety)", marginBottom: 8 }}>
        Cookies
      </p>
      <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,.78)" }}>{cookieBar.text}</p>
      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <button
          onClick={() => choose("accepted")}
          style={btnStyle(true)}
        >
          {cookieBar.accept}
        </button>
        <button
          onClick={() => choose("declined")}
          style={btnStyle(false)}
        >
          {cookieBar.decline}
        </button>
      </div>
    </div>
  );
}

function btnStyle(solid) {
  return {
    flex: 1,
    minHeight: 44,
    fontFamily: "var(--font-display)",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: ".12em",
    textTransform: "uppercase",
    cursor: "pointer",
    background: solid ? "var(--color-signal)" : "transparent",
    color: "#fff",
    border: solid ? "1px solid var(--color-signal)" : "1px solid rgba(255,255,255,.4)",
  };
}
