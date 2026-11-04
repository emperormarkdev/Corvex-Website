import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, services } from "../content";
import { Link } from "../router";
import { useRoute, segments } from "../routerCore";
import Button from "./Button";
import Logo from "./Logo";

/**
 * Fixed nav: transparent over hero → solid black + hairline after 80px.
 * Desktop mega-menu for Services; full-screen overlay menu on mobile
 * with staggered Orbitron links. Orange underline = active link.
 */
export default function Nav() {
  const route = useRoute();
  const routeRoot = segments(route)[0] ?? "";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const ids = ["services", "sectors", "safety", "projects", "approach", "about", "careers", "insights", "contact"];
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 50,
          background: scrolled && !open ? "rgba(0,0,0,.94)" : "transparent",
          borderBottom: scrolled && !open ? "1px solid rgba(255,255,255,.12)" : "1px solid transparent",
          transition: "background 400ms cubic-bezier(.22,1,.36,1), border-color 400ms",
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", height: 80, gap: 24 }}>
          <Link to="/" aria-label="CORVEX home" style={{ color: "#E3601C", flexShrink: 0, lineHeight: 0, width: 56, display: "block" }}>
            <Logo className="block w-full h-auto" />
          </Link>

          {/* Desktop links */}
          <nav aria-label="Primary" className="hidden lg:flex" style={{ gap: 2, flex: 1, alignItems: "center" }}>
            {nav.links.map((l) =>
              l.mega ? (
                <div
                  key={l.label}
                  onMouseEnter={() => setMega(true)}
                  onMouseLeave={() => setMega(false)}
                  style={{ position: "relative" }}
                >
                  <Link
                    to={l.page}
                    aria-expanded={mega}
                    aria-haspopup="true"
                    onFocus={() => setMega(true)}
                    style={linkStyle(routeRoot ? routeRoot === "services" : active === "services")}
                  >
                    {l.label}
                  </Link>
                  <AnimatePresence>
                    {mega && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: -24,
                          width: 580,
                          background: "#0a0a0b",
                          border: "1px solid rgba(255,255,255,.12)",
                          padding: 12,
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 4,
                        }}
                      >
                        {services.items.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            onClick={() => setMega(false)}
                            style={{
                              display: "flex",
                              gap: 12,
                              padding: "12px 14px",
                              textDecoration: "none",
                              border: "1px solid transparent",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(227,96,28,.5)")}
                            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
                          >
                            <span
                              style={{
                                fontFamily: "var(--font-display)",
                                fontSize: 11,
                                color: "var(--color-safety)",
                                letterSpacing: ".1em",
                                paddingTop: 3,
                              }}
                            >
                              {s.n}
                            </span>
                            <span>
                              <span style={{ display: "block", color: "#fff", fontSize: 14, fontWeight: 600 }}>{s.name}</span>
                              <span style={{ display: "block", color: "rgba(255,255,255,.6)", fontSize: 12, lineHeight: 1.5, marginTop: 2 }}>
                                {s.desc.split(".")[0]}.
                              </span>
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={l.label}
                  to={l.page}
                  style={linkStyle(routeRoot !== "" ? segments(l.page)[0] === routeRoot : active === l.href.slice(1))}
                >
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:block" style={{ flexShrink: 0 }}>
            <Button href={nav.cta.href}>{nav.cta.label}</Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            style={{
              marginLeft: "auto",
              width: 48,
              height: 48,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 7,
              background: "transparent",
              border: "1px solid rgba(255,255,255,.25)",
              cursor: "pointer",
            }}
          >
            <span style={bar(open ? "rotate(45deg) translateY(4.5px)" : "none")} />
            <span style={bar(open ? "rotate(-45deg) translateY(-4.5px)" : "none")} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "#000",
              padding: "112px 24px 40px",
              overflowY: "auto",
            }}
          >
            <div style={{ color: "#E3601C", marginBottom: 24, width: 72 }}>
              <Logo variant="stack" className="block w-full h-auto" />
            </div>
            {nav.links.map((l, i) => (
              <motion.a
                key={l.label}
                href={`#${l.page}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 16,
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,.12)",
                  textDecoration: "none",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                <span style={{ fontSize: 12, color: "var(--color-safety)", letterSpacing: ".1em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {l.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{ marginTop: 32 }}
            >
              <Button href={nav.cta.href} className="w-full justify-center" onClick={() => setOpen(false)}>
                {nav.cta.label}
              </Button>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

function bar(transform) {
  return {
    display: "block",
    width: 22,
    height: 2,
    background: "#fff",
    transform,
    transition: "transform 200ms cubic-bezier(.22,1,.36,1)",
  };
}

function linkStyle(isActive) {
  return {
    position: "relative",
    display: "inline-block",
    padding: "12px 12px",
    color: "#fff",
    textDecoration: "none",
    fontFamily: "var(--font-display)",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    borderBottom: `2px solid ${isActive ? "var(--color-safety)" : "transparent"}`,
  };
}
