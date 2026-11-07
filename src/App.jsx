import { lazy, Suspense } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CookieBar from "./components/CookieBar";
import Hero from "./sections/Hero";
import Seo from "./seo";
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

const ServicesOverview = lazy(() => import("./pages/ServicesOverview"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const SectorDetail = lazy(() => import("./pages/SectorDetail"));
const ProjectsOverview = lazy(() => import("./pages/ProjectsOverview"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SafetyPage = lazy(() => import("./pages/SafetyPage"));
const InnovationPage = lazy(() => import("./pages/InnovationPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const InsightsOverview = lazy(() => import("./pages/InsightsOverview"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ProposalPage = lazy(() => import("./pages/ProposalPage"));
const SafetyConcernPage = lazy(() =>
  import("./pages/ProposalPage").then((m) => ({ default: m.SafetyConcernPage }))
);
const LegalPage = lazy(() => import("./pages/LegalPage"));
const ApplyPage = lazy(() => import("./pages/ApplyPage"));
const DownloadPage = lazy(() => import("./pages/DownloadPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

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
      <Seo route={route} />
      <a href="#main" className="skip-link">Skip to content</a>
      <Nav />
      <main id="main">
        <Suspense fallback={null}>{resolve(route)}</Suspense>
      </main>
      <Footer />
      <CookieBar />
    </>
  );
}
