import { useEffect } from "react";
import {
  site,
  services,
  serviceDetail,
  sectorsDetail,
  projects,
  insights,
  articleBodies,
} from "./content";
import { segments } from "./routerCore";
import { SITE_URL } from "./config/site";

/**
 * Per-route document metadata.
 *
 * A single-page app serves one index.html, so titles, descriptions, canonicals
 * and structured data have to be applied client-side as the route changes.
 * Crawlers that execute JavaScript (Googlebot, Bingbot) see these; the static
 * defaults in index.html cover everything else, and the real fix for full
 * indexability is prerendering at build time.
 *
 * Copy rule: describe capability honestly. No "best", "leading" or "largest"
 * claims — those are unsupportable and damage credibility with technical buyers.
 */

const TITLE_SUFFIX = "CORVEX — Engineering & Energy Solutions";

/**
 * Canonical origin for the current deployment.
 *
 * Driven by src/config/site.js (SITE_URL, overridable via VITE_SITE_URL).
 * Applied unconditionally — never window.location — so canonicals, og:url and
 * JSON-LD always name the intended deployment (corvex-three.vercel.app) even
 * when the same build is served from a Vercel preview URL.
 */
function baseUrlFor() {
  return SITE_URL || site.baseUrl;
}

const SERVICE_KEYWORDS = {
  "engineering-solutions": "engineering design, FEED, brownfield modification, inspection engineering",
  "industrial-support": "industrial maintenance, fabrication, scaffolding, site logistics",
  "critical-operations": "shutdowns, turnarounds, commissioning, asset integrity",
  infrastructure: "civil works, foundations, structural steel, site development",
  "oil-gas-support": "oil and gas engineering services, pipeline integrity, terminal support",
  "hse-compliance": "HSE management systems, QA/QC audits, workforce training",
};

function page(title, description, path, extra = {}) {
  return { title, description, path, ...extra };
}

export function metaFor(route) {
  const [s1, s2] = segments(route);

  if (!s1) {
    return page(
      "CORVEX — Oil & Gas, Engineering & Construction Services in Nigeria",
      "CORVEX delivers engineering, procurement and construction support, oilfield services, industrial maintenance and pipeline integrity across Nigeria's oil & gas, industrial and infrastructure sectors.",
      "/",
      { type: "home" }
    );
  }

  if (s1 === "services") {
    if (!s2) {
      return page(
        "Engineering, Construction & Oilfield Services — CORVEX Nigeria",
        "Six service lines for oil & gas, industrial and infrastructure operators: engineering design, industrial support, turnarounds and commissioning, civil and structural construction, oilfield services, and HSE compliance.",
        "/services"
      );
    }
    const base = services.items.find((s) => s.slug === s2);
    const detail = serviceDetail[s2];
    if (!base) return null;
    return page(
      `${base.name} — ${SERVICE_KEYWORDS[s2] || "Engineering Services"} | CORVEX`,
      `${base.name} from CORVEX: ${detail?.overview?.slice(0, 150) || base.desc}`,
      `/services/${s2}`,
      { service: base }
    );
  }

  if (s1 === "sectors") {
    const slug = s2 || "oil-gas";
    const d = sectorsDetail[slug];
    if (!d) return null;
    return page(
      `${d.name} Engineering & Construction Services | CORVEX Nigeria`,
      `${d.challenge?.slice(0, 90)}… CORVEX provides ${d.name.toLowerCase()} engineering, maintenance and construction services in Nigeria.`,
      `/sectors/${slug}`
    );
  }

  if (s1 === "projects") {
    if (!s2) {
      return page(
        "Projects — Engineering & Construction Case Studies | CORVEX",
        "Detailed case studies from CORVEX engagements across oil & gas, industrial and infrastructure: scope, engineering requirements, execution approach, challenges and outcomes.",
        "/projects"
      );
    }
    const p = projects.items.find((x) => x.slug === s2);
    if (!p) return null;
    return page(
      `${p.name} — ${p.sector} Case Study | CORVEX`,
      `${p.summary?.slice(0, 160) || p.scope}`,
      `/projects/${s2}`,
      { project: p }
    );
  }

  if (s1 === "about") {
    return page(
      "About CORVEX — Engineering & Energy Services Company in Nigeria",
      "CORVEX is an engineering and energy services company working across oil & gas, industrial and infrastructure sectors, built by engineers from the operating side of the industry.",
      "/about"
    );
  }

  if (s1 === "safety") {
    return page(
      "HSE Policy, ISO 9001 & ISO 45001 Aligned Systems | CORVEX",
      "CORVEX health, safety and environment policy: permit-to-work, stop-work authority, independent audits, incident reporting, environmental protection and downloadable HSE policy.",
      "/safety"
    );
  }

  if (s1 === "innovation") {
    return page(
      "Our Approach — Digital Inspection & Project Controls | CORVEX",
      "How CORVEX delivers: assess, engineer, execute, sustain — supported by digital inspections, asset registers, earned-value project controls and traceable QA dossiers.",
      "/innovation"
    );
  }

  if (s1 === "careers") {
    if (s2 === "apply") {
      return page(
        "Apply — Engineering & Technician Roles | CORVEX Careers",
        "Apply to join CORVEX. Roles across mechanical, HSE, project engineering, welding inspection and logistics in Nigeria.",
        "/careers/apply"
      );
    }
    return page(
      "Careers — Engineering, HSE & Technical Jobs in Nigeria | CORVEX",
      "Open roles at CORVEX across operations, engineering, quality, HSE and support. Certification pathways, sector rotation and stop-work authority from day one.",
      "/careers"
    );
  }

  if (s1 === "insights") {
    if (!s2) {
      return page(
        "Insights — Engineering, HSE & Operations Notes | CORVEX",
        "Field notes from CORVEX on turnaround planning, asset integrity re-audits and commissioning practice.",
        "/insights"
      );
    }
    const a = insights.items.find((x) => x.slug === s2);
    if (!a) return null;
    const body = articleBodies[s2];
    return page(
      `${a.title} | CORVEX Insights`,
      `${(body?.[0] || a.excerpt || "").slice(0, 158)}`,
      `/insights/${s2}`,
      { article: a }
    );
  }

  if (s1 === "contact") {
    if (s2 === "proposal") {
      return page(
        "Request a Proposal — EPC & Engineering Services | CORVEX",
        "Send your scope, drawings or a one-line brief. A CORVEX technical lead responds within two business days with scope, constraints and a named contact.",
        "/contact/proposal"
      );
    }
    if (s2 === "safety-concern") {
      return page(
        "Report a Safety Concern | CORVEX",
        "Report a safety concern relating to a CORVEX worksite or operation. Reports are reviewed by the HSE function.",
        "/contact/safety-concern"
      );
    }
    return page(
      "Contact CORVEX — Engineering & Construction Services Nigeria",
      "Contact CORVEX in Lagos: phone, email, offices and enquiry form. Engineering, oil and gas, industrial and infrastructure services across Nigeria.",
      "/contact"
    );
  }

  if (s1 === "legal") {
    const slug = s2 || "privacy-policy";
    const label = slug === "terms" ? "Terms of Service" : "Privacy Policy";
    return page(`${label} | CORVEX`, `${label} for the CORVEX website.`, `/legal/${slug}`);
  }

  if (s1 === "downloads") {
    const slug = s2 || "capability-statement";
    const labels = {
      "capability-statement": "Capability Statement (PDF)",
      "hse-policy": "HSE Policy (PDF)",
      "quality-policy": "Quality Policy (PDF)",
    };
    return page(
      `${labels[slug] || "Downloads"} | CORVEX`,
      `Download the CORVEX ${(labels[slug] || "document").replace(" (PDF)", "")}.`,
      `/downloads/${slug}`
    );
  }

  return page(
    "Page not found | CORVEX",
    "The page you requested could not be found. Browse CORVEX services, projects and company information.",
    route
  );
}

/* ---------------- DOM application ---------------- */

function setMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(attrs.tag || "meta");
    document.head.appendChild(el);
  }
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "tag") continue;
    el.setAttribute(k, v);
  }
  return el;
}

function setLink(rel, href) {
  // Reuse the static tag from index.html first (matched without data-seo) so a
  // canonical declared in the head is updated in place rather than duplicated.
  let el =
    document.head.querySelector(`link[rel="${rel}"][data-seo]`) ||
    document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute("data-seo", "1");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function organizationSchema(base) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    legalName: site.legalName,
    url: base,
    logo: `${base}/favicon.svg`,
    description:
      "Engineering and energy services company providing engineering solutions, industrial support, critical operations, infrastructure construction, oil and gas support and HSE compliance services.",
    email: site.email.value,
    telephone: site.phone.value,
    foundingDate: site.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 12, Admiralty Way",
      addressLocality: "Lekki Phase 1, Lagos",
      postalCode: "106104",
      addressCountry: "NG",
    },
    areaServed: [
      { "@type": "Country", name: "Nigeria" },
      { "@type": "Place", name: "West Africa" },
    ],
    knowsAbout: [
      "Oil and gas engineering services",
      "Engineering, procurement and construction",
      "Pipeline integrity and maintenance",
      "Industrial construction",
      "Turnarounds and commissioning",
      "HSE management systems",
    ],
  };
}

function breadcrumbSchema(meta, base) {
  const parts = meta.path.split("/").filter(Boolean);
  const items = [{ name: "Home", item: base + "/" }];
  let acc = "";
  for (const p of parts) {
    acc += "/" + p;
    items.push({ name: p.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), item: base + acc });
  }
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.item,
    })),
  };
}

function serviceSchema(service, detail, origin) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: detail?.overview || service.desc,
    provider: { "@type": "Organization", name: site.name, url: origin },
    areaServed: { "@type": "Country", name: "Nigeria" },
    url: `${origin}/services/${service.slug}`,
  };
}

function articleSchema(a, origin) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    articleSection: a.category,
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${origin}/insights/${a.slug}`,
  };
}

/**
 * Applies metadata for the current route. Renders nothing.
 */
export default function Seo({ route }) {
  useEffect(() => {
    const meta = metaFor(route);
    if (!meta) return;

    const base = baseUrlFor();
    const url = base + (meta.path === "/" ? "/" : meta.path);
    const ogImage = `${base}/og-cover.jpg`;

    document.title = meta.title;

    setMeta('meta[name="description"]', { name: "description", content: meta.description });
    setLink("canonical", url);

    setMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    setMeta('meta[property="og:title"]', { property: "og:title", content: meta.title });
    setMeta('meta[property="og:description"]', { property: "og:description", content: meta.description });
    setMeta('meta[property="og:url"]', { property: "og:url", content: url });
    setMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: site.name });
    setMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_NG" });

    setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: meta.title });
    setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: meta.description });
    setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });

    // Structured data — organisation + breadcrumbs on every route, plus the
    // most specific type available for this page.
    let script = document.getElementById("cx-schema");
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "cx-schema";
      document.head.appendChild(script);
    }
    const graph = [organizationSchema(base), breadcrumbSchema(meta, base)];
    if (meta.service) graph.push(serviceSchema(meta.service, serviceDetail[meta.service.slug], base));
    if (meta.article) graph.push(articleSchema(meta.article, base));
    if (meta.project) {
      graph.push({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: meta.project.name,
        about: meta.project.sector,
        description: meta.project.summary,
        locationCreated: meta.project.location,
      });
    }
    script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  }, [route]);

  return null;
}
