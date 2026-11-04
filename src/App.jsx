import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CookieBar from "./components/CookieBar";
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
