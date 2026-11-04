import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CookieBar from "./components/CookieBar";
import Logo from "./components/Logo";
import Hero from "./sections/Hero";
import TrustStrip from "./sections/TrustStrip";
import AboutTeaser from "./sections/AboutTeaser";
import Services from "./sections/Services";
import Sectors from "./sections/Sectors";
import Safety from "./sections/Safety";
import Projects from "./sections/Projects";
import Approach from "./sections/Approach";
import Presence from "./sections/Presence";
import Insights from "./sections/Insights";
import Careers from "./sections/Careers";
import ContactCta from "./sections/ContactCta";

import ServicesOverview from "./pages/ServicesOverview";
import ServiceDetail from "./pages/ServiceDetail";
import SectorDetail from "./pages/SectorDetail";
import ProjectsOverview from "./pages/ProjectsOverview";
import ProjectDetail from "./pages/ProjectDetail";
import AboutPage from "./pages/AboutPage";
import SafetyPage from "./pages/SafetyPage";
import InnovationPage from "./pages/InnovationPage";
import CareersPage from "./pages/CareersPage";
import InsightsOverview from "./pages/InsightsOverview";
import ArticlePage from "./pages/ArticlePage";
import ContactPage from "./pages/ContactPage";
import ProposalPage, { SafetyConcernPage } from "./pages/ProposalPage";
import LegalPage from "./pages/LegalPage";
import ApplyPage from "./pages/ApplyPage";
import DownloadPage from "./pages/DownloadPage";
import NotFoundPage from "./pages/NotFoundPage";

import { useRoute, segments } from "./routerCore";

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutTeaser />
      <Services />
      <Sectors />
      <Safety />
      <Projects />
      <Approach />
      <Presence />
      <Insights />
      <Careers />
      <ContactCta />
    </>
  );
}

/** Route table: [section, slug] → page component. */
function resolve(route) {
  const [s1, s2] = segments(route);

  if (!s1) return <Home />;

  switch (s1) {
    case "services":
      return s2 ? <ServiceDetail slug={s2} /> : <ServicesOverview />;
    case "sectors":
      return s2 ? <SectorDetail slug={s2} /> : <SectorDetail slug="oil-gas" />;
    case "projects":
      return s2 ? <ProjectDetail slug={s2} /> : <ProjectsOverview />;
    case "about":
      return <AboutPage />;
    case "safety":
      return <SafetyPage />;
    case "innovation":
      return <InnovationPage />;
    case "careers":
      return s2 === "apply" ? <ApplyPage /> : <CareersPage />;
    case "insights":
      return s2 ? <ArticlePage slug={s2} /> : <InsightsOverview />;
    case "contact":
      if (s2 === "proposal") return <ProposalPage />;
      if (s2 === "safety-concern") return <SafetyConcernPage />;
      return <ContactPage />;
    case "legal":
      return <LegalPage slug={s2 ?? "privacy-policy"} />;
    case "downloads":
      return <DownloadPage slug={s2 ?? "capability-statement"} />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  const route = useRoute();
  const [loading, setLoading] = useState(() => {
    try {
      return !sessionStorage.getItem("corvex-seen");
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!loading) return;
    const t = setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem("corvex-seen", "1");
      } catch {
        /* ignore */
      }
    }, 1000);
    return () => clearTimeout(t);
  }, [loading]);

  if (loading) {
    return (
      <div
        role="status"
        aria-label="Loading Corvex"
        style={{ position: "fixed", inset: 0, zIndex: 100, background: "#000", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 24 }}
      >
        <span style={{ color: "#E3601C", width: 84, display: "block" }}>
          <Logo className="w-full h-auto" />
        </span>
        <span style={{ display: "block", width: 120, height: 2, background: "rgba(255,255,255,.15)", overflow: "hidden" }}>
          <span style={{ display: "block", height: "100%", width: "100%", background: "var(--color-signal)", transformOrigin: "left", animation: "cxload 1s cubic-bezier(.22,1,.36,1) forwards" }} />
        </span>
        <style>{`@keyframes cxload{ from{ transform: scaleX(0);} to{ transform: scaleX(1);} }`}</style>
      </div>
    );
  }

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">{resolve(route)}</main>
      <Footer />
      <CookieBar />
    </>
  );
}
