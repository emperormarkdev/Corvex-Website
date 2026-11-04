/**
 * CORVEX — single content store.
 * Edit copy here. Do not edit components to change text.
 *
 * Any invented figure, project, client or location is flagged with
 * "placeholder": true and rendered with a visible `data-placeholder`
 * attribute so it can be found and replaced with approved copy.
 */

export const site = {
  name: "CORVEX",
  tagline: "Engineering & Energy Solutions",
  email: { value: "info@corvex.example", placeholder: true },
  phone: { value: "+000 000 0000", placeholder: true },
  hq: { value: "Plot 00, Energy District [PLACEHOLDER]", placeholder: true },
};

export const nav = {
  links: [
    { label: "Services", href: "#services", mega: true, page: "/services" },
    { label: "Sectors", href: "#sectors", page: "/sectors/oil-gas" },
    { label: "Safety", href: "#safety", page: "/safety" },
    { label: "Projects", href: "#projects", page: "/projects" },
    { label: "Innovation", href: "#approach", page: "/innovation" },
    { label: "About", href: "#about", page: "/about" },
    { label: "Careers", href: "#careers", page: "/careers" },
    { label: "Insights", href: "#insights", page: "/insights" },
  ],
  cta: { label: "Contact Us", href: "#/contact" },
};

export const hero = {
  eyebrow: "Engineering & Energy Solutions",
  title: "Engineering the future of energy.",
  sub: "Technical services for oil & gas, industrial, and infrastructure operators — delivered with precision, on schedule, without compromise.",
  primary: { label: "Our Services", href: "#/services" },
  secondary: { label: "Talk to Our Team", href: "#/contact" },
  caption: "Operations / Offshore & Onshore",
  scrollCue: "Scroll",
  image: { slot: "IMG-HERO", ratio: "16:9", brief: "Refinery at dusk, red duotone, worker silhouette left" },
};

export const stats = [
  { value: 15, suffix: "+", label: "Years of experience", placeholder: true },
  { value: 240, suffix: "+", label: "Projects delivered", placeholder: true },
  { value: 12, suffix: "", label: "Countries served", placeholder: true },
  { value: 8, suffix: "M+", label: "Safe man-hours", placeholder: true },
];

export const clients = [
  "NORTHFIELD ENERGY",
  "PETRODELTA",
  "GULF INDUSTRIAL",
  "TRANSGRID",
  "ORBITAL REFINING",
  "MERIDIAN INFRA",
];

export const about = {
  index: "About",
  title: "Precision. Reliability. Performance.",
  paragraph:
    "CORVEX is a forward-thinking engineering and energy solutions company committed to delivering innovation, precision, and reliability across the oil & gas, industrial, and infrastructure sectors. We specialize in providing highly technical services with a focus on safety, efficiency, and long-term value creation for our clients.",
  link: { label: "Learn more about us", href: "#/about" },
  image: { slot: "IMG-ABOUT", ratio: "4:5", brief: "Field engineer with tablet, daylight, red coveralls", src: "/images/about-image.png" },
  caption: "Field verification, asset integrity survey.",
  principles: [
    { n: "01", name: "Professionalism", desc: "Qualified teams. Documented process. Accountable delivery." },
    { n: "02", name: "Integrity", desc: "Transparent reporting. Honest scope. No shortcuts." },
    { n: "03", name: "Performance", desc: "Measured output. On-spec results. Every contract." },
  ],
};

export const services = {
  index: "Services",
  title: "Technical services, delivered end to end.",
  intro:
    "Six service lines. One accountable partner. Each engagement is scoped, engineered, and executed to global standards.",
  link: { label: "All services", href: "#/services" },
  items: [
    {
      n: "01",
      slug: "engineering-solutions",
      name: "Engineering Solutions",
      desc: "Design, inspection, and technical consulting backed by disciplined project engineering.",
      tags: ["Design", "Inspection", "Consulting"],
      image: { slot: "IMG-SVC-01", ratio: "16:10", brief: "Engineering review, drawings and site data", src: "/images/Overhead%20Industrial%20Blueprint%20Workshop.png" },
      feature: true,
    },
    {
      n: "02",
      slug: "industrial-support",
      name: "Industrial Support Services",
      desc: "Maintenance, fabrication support, and dependable site services with full logistics.",
      tags: ["Maintenance", "Fabrication", "Logistics"],
      image: { slot: "IMG-SVC-02", ratio: "16:10", brief: "Workshop floor, fabrication in progress", src: "/images/Workshop%20floor,%20fabrication%20in%20progress.png" },
      feature: true,
    },
    {
      n: "03",
      slug: "critical-operations",
      name: "Critical Operations",
      desc: "Operations support, shutdowns and turnarounds, commissioning, and asset integrity.",
      tags: ["Turnarounds", "Commissioning"],
      image: { slot: "IMG-SVC-03", ratio: "16:10", brief: "Night shift operations, control room glow", src: "/images/Night%20shift%20operations,%20control%20room%20glow.jpg" },
    },
    {
      n: "04",
      slug: "infrastructure",
      name: "Infrastructure & Construction",
      desc: "Civil, mechanical, and structural works, including full site development.",
      tags: ["Civil", "Structural"],
      image: { slot: "IMG-SVC-04", ratio: "16:10", brief: "Structural steel erection, daylight", src: "/images/Structural%20steel%20erection,%20daylight.jpg" },
    },
    {
      n: "05",
      slug: "oil-gas-support",
      name: "Oil & Gas Support",
      desc: "Upstream, midstream, and downstream technical services for operators.",
      tags: ["Upstream", "Downstream"],
      image: { slot: "IMG-SVC-05", ratio: "16:10", brief: "Pipeline corridor, inspection crew", src: "/images/Pipeline%20corridor,%20inspection%20crew.png" },
    },
    {
      n: "06",
      slug: "hse-compliance",
      name: "HSE & Compliance Services",
      desc: "Safety management, audits, workforce training, and certification support.",
      tags: ["Audits", "Training"],
      image: { slot: "IMG-SVC-06", ratio: "16:10", brief: "Safety briefing, crew in PPE", src: "/images/Worker%20in%20hard%20hat%20and%20red%20coveralls,%20thumbs-up.png" },
    },
  ],
};

export const sectors = {
  index: "Sectors",
  title: "Three sectors. One standard.",
  items: [
    {
      slug: "oil-gas",
      name: "Oil & Gas",
      desc: "Upstream to downstream support for operators who cannot afford downtime.",
      image: { slot: "IMG-SECTOR-OG", ratio: "3:4", brief: "Offshore platform at dusk", src: "/images/Offshore%20platform%20at%20dusk.jpg" },
    },
    {
      slug: "industrial",
      name: "Industrial",
      desc: "Maintenance and engineering for plants that run around the clock.",
      image: { slot: "IMG-SECTOR-IND", ratio: "3:4", brief: "Process plant interior, pipework", src: "/images/Process%20plant%20interior,%20pipework.jpg" },
    },
    {
      slug: "infrastructure",
      name: "Infrastructure",
      desc: "Civil and structural delivery for the systems economies run on.",
      image: { slot: "IMG-SECTOR-INF", ratio: "3:4", brief: "Bridge and highway works, daylight", src: "/images/Bridge%20and%20highway%20works,%20daylight.png" },
    },
  ],
};

export const safety = {
  index: "Safety",
  statement: "Safety First. Safety for Me. Safety for All.",
  image: { slot: "IMG-SAFETY", ratio: "4:3", brief: "Worker in hard hat and red coveralls, thumbs-up", src: "/images/Worker%20in%20hard%20hat%20and%20red%20coveralls,%20thumbs-up.png" },
  commitments: [
    { n: "01", name: "Zero harm", desc: "Every task planned so everyone goes home safe." },
    { n: "02", name: "Training & competence", desc: "Certified crews, refreshed skills, verified records." },
    { n: "03", name: "Continuous audit", desc: "Independent checks on every site, every week." },
  ],
  stats: [
    { value: "8M+", label: "LTI-free hours", placeholder: true },
    { value: "ISO 45001", label: "Aligned HSE system", placeholder: true },
  ],
  cta: { label: "Our HSE approach", href: "#/safety" },
};

export const projects = {
  index: "Projects",
  title: "Selected work.",
  link: { label: "View all projects", href: "#/projects" },
  items: [
    {
      name: "Delta Refinery Turnaround",
      slug: "delta-refinery-turnaround",
      sector: "Oil & Gas",
      location: "[PLACEHOLDER] — Coastal Refinery",
      scope: "Full shutdown maintenance, 42-day window.",
      result: "Handed back 3 days early, zero LTIs.",
      image: { slot: "IMG-PROJ-01", ratio: "16:10", brief: "Refinery columns at dusk", src: "/images/Refinery%20columns%20at%20dusk.jpg" },
      placeholder: true,
    },
    {
      name: "Northgate Process Plant",
      slug: "northgate-process-plant",
      sector: "Industrial",
      location: "[PLACEHOLDER] — Inland Industrial Zone",
      scope: "Mechanical installation and commissioning.",
      result: "First-pass acceptance on all systems.",
      image: { slot: "IMG-PROJ-02", ratio: "4:3", brief: "Process skids and pipe racks", src: "/images/Process%20skids%20and%20pipe%20racks.jpg" },
      placeholder: true,
    },
    {
      name: "Harbour Crossing Pipeline",
      slug: "harbour-crossing-pipeline",
      sector: "Oil & Gas",
      location: "[PLACEHOLDER] — River Delta Corridor",
      scope: "18 km inspection and integrity survey.",
      result: "Zero defects missed at re-audit.",
      image: { slot: "IMG-PROJ-03", ratio: "4:3", brief: "Pipeline right-of-way, survey crew", src: "/images/Pipeline%20right-of-way,%20survey%20crew.png" },
      placeholder: true,
    },
    {
      name: "Meridian Utilities Upgrade",
      slug: "meridian-utilities-upgrade",
      sector: "Infrastructure",
      location: "[PLACEHOLDER] — Metro District",
      scope: "Civil and structural site development.",
      result: "Delivered within approved budget.",
      image: { slot: "IMG-PROJ-04", ratio: "16:10", brief: "Utility corridor construction", src: "/images/Utility%20corridor%20construction.png" },
      placeholder: true,
    },
  ],
};

export const approach = {
  index: "Innovation",
  title: "Intelligent solutions, built on proven standards.",
  intro:
    "Modern tooling and deep field experience, applied through one repeatable delivery method.",
  steps: [
    { n: "01", name: "Assess", desc: "Survey the asset, define scope, quantify risk." },
    { n: "02", name: "Engineer", desc: "Design the solution to spec and standard." },
    { n: "03", name: "Execute", desc: "Deliver with controls, permits, and QA gates." },
    { n: "04", name: "Sustain", desc: "Hand over clean documentation and support." },
  ],
  capabilities: ["Digital monitoring", "Asset integrity", "Project controls", "Quality assurance"],
  standards: [
    { value: "ISO 9001", placeholder: true },
    { value: "ISO 14001", placeholder: true },
    { value: "ISO 45001", placeholder: true },
    { value: "API Q1", placeholder: true },
  ],
};

export const presence = {
  index: "Global presence",
  title: "Operating across borders.",
  intro: "Head office plus regional delivery hubs close to client operations.",
  locations: [
    { city: "[PLACEHOLDER] HQ", country: "Head Office", x: 52, y: 46, hq: true, placeholder: true },
    { city: "[PLACEHOLDER] West", country: "Regional Office", x: 30, y: 52, placeholder: true },
    { city: "[PLACEHOLDER] Gulf", country: "Regional Office", x: 60, y: 50, placeholder: true },
    { city: "[PLACEHOLDER] East", country: "Regional Office", x: 76, y: 58, placeholder: true },
  ],
};

export const insights = {
  index: "Insights",
  title: "Notes from the field.",
  link: { label: "All insights", href: "#/insights" },
  items: [
    {
      category: "HSE",
      slug: "zero-harm-turnaround",
      date: "[PLACEHOLDER] — Mar 2026",
      title: "How we plan a zero-harm turnaround",
      readTime: "6 min read",
      image: { slot: "IMG-NEWS-01", ratio: "16:9", brief: "Toolbox talk at sunrise", src: "/images/Night%20shift%20operations,%20control%20room%20glow.jpg" },
      featured: true,
      placeholder: true,
    },
    {
      category: "Engineering",
      slug: "asset-integrity-reaudits",
      date: "[PLACEHOLDER] — Feb 2026",
      title: "Asset integrity: what re-audits catch",
      readTime: "4 min read",
      image: { slot: "IMG-NEWS-02", ratio: "16:9", brief: "Ultrasonic inspection close-up", src: "/images/Process%20skids%20and%20pipe%20racks.jpg" },
      placeholder: true,
    },
    {
      category: "Operations",
      slug: "commissioning-without-chaos",
      date: "[PLACEHOLDER] — Jan 2026",
      title: "Commissioning without the chaos",
      readTime: "5 min read",
      image: { slot: "IMG-NEWS-03", ratio: "16:9", brief: "Control room handover", src: "/images/Night%20shift%20operations,%20control%20room%20glow.jpg" },
      placeholder: true,
    },
  ],
};

export const careers = {
  index: "Careers",
  title: "Build your career with Corvex.",
  intro:
    "We hire disciplined engineers, technicians, and operators — and we invest in them for the long term.",
  benefits: [
    { n: "01", name: "Structured training", desc: "Certification paths mapped to your role." },
    { n: "02", name: "Global exposure", desc: "Rotations across sectors and regions." },
    { n: "03", name: "Safety culture", desc: "Stop-work authority from day one." },
  ],
  primary: { label: "View openings", href: "#/careers" },
  secondary: { label: "Join our talent network", href: "#/contact?interest=talent" },
  image: { slot: "IMG-CAREERS", ratio: "4:3", brief: "Field team briefing, daylight", src: "/images/Structural%20steel%20erection,%20daylight.jpg" },
};

export const contactCta = {
  title: "Let's discuss your project.",
  intro: "Send scope, drawings, or a one-line brief. A technical lead replies within two business days.",
  primary: { label: "Contact Us", href: "#/contact" },
  secondary: { label: "Request a Proposal", href: "#/contact?interest=proposal" },
};

export const footer = {
  positioning: "Engineering & energy solutions for oil & gas, industrial, and infrastructure.",
  columns: [
    {
      title: "Services",
      links: [
        "Engineering Solutions",
        "Industrial Support",
        "Critical Operations",
        "Infrastructure",
        "Oil & Gas Support",
        "HSE & Compliance",
      ],
    },
    {
      title: "Company",
      links: ["About", "Sectors", "Projects", "Innovation", "Careers", "Insights"],
    },
  ],
  contact: {
    title: "Contact",
    lines: [
      { label: "Address", value: "Plot 00, Energy District [PLACEHOLDER]", placeholder: true },
      { label: "Email", value: "info@corvex.example", placeholder: true },
      { label: "Phone", value: "+000 000 0000", placeholder: true },
    ],
  },
  legal: ["Privacy", "Terms"],
  certs: [
    { value: "ISO 9001 [PLACEHOLDER]", placeholder: true },
    { value: "ISO 45001 [PLACEHOLDER]", placeholder: true },
  ],
};

export const cookieBar = {
  text: "We use essential cookies to keep this site working. No tracking without consent.",
  accept: "Accept",
  decline: "Decline",
};

/* ================= INNER PAGES ================= */

/**
 * Client wordmarks — black & white assets from /public/logos.
 * `h` normalises optical size (marks with big internal padding get a
 * larger value). Tune these numbers to rebalance the row.
 * NOTE: displaying operator logos needs written permission before launch.
 */
export const industryClients = [
  { name: "Shell", file: "/logos/shell.png", h: 46, invert: false },
  { name: "SLB", file: "/logos/slb.png", h: 38, invert: false },
  { name: "Halliburton", file: "/logos/halliburton.jpg", h: 30, invert: false },
  { name: "Weatherford", file: "/logos/weatherford.jpg", h: 44, invert: false },
  { name: "Baker Hughes", file: "/logos/baker-hughes.png", h: 38, invert: true },
  { name: "TotalEnergies", file: "/logos/totalenergies.png", h: 44, invert: false },
  { name: "Renaissance", file: "/logos/renaissance.png", h: 44, invert: true },
];

export const serviceDetail = {
  "engineering-solutions": {
    overview:
      "Front-end design, verification, and technical consulting for brownfield and greenfield assets. We take scope from survey to issued-for-construction documentation, with every calculation checked and traceable.",
    scope: ["Design and detailed engineering", "Inspection planning and execution", "Technical consulting and peer review", "Project engineering and interface management"],
    capabilities: ["Design", "Inspection", "Consulting", "Project engineering"],
    steps: ["Assess — survey the asset and freeze scope.", "Engineer — model, calculate, and document.", "Execute — supervise installation to spec.", "Sustain — hand over dossiers and support."],
    image: { slot: "IMG-SVC-D-01", ratio: "16:10", brief: "Engineering review, drawings and site data", src: "/images/Overhead%20Industrial%20Blueprint%20Workshop.png" },
  },
  "industrial-support": {
    overview:
      "Planned maintenance, fabrication support, and dependable site services with full logistics. Crews arrive certified, tooled, and briefed — and leave the site cleaner than they found it.",
    scope: ["Preventive and corrective maintenance", "Fabrication support and weld management", "Equipment supply and site logistics", "Camp and facility support services"],
    capabilities: ["Maintenance", "Fabrication", "Logistics", "Site services"],
    steps: ["Assess — audit equipment and spares.", "Engineer — plan windows and permits.", "Execute — deliver with QA gates.", "Sustain — trend failures and improve."],
    image: { slot: "IMG-SVC-D-02", ratio: "16:10", brief: "Workshop floor, fabrication in progress", src: "/images/Workshop%20floor,%20fabrication%20in%20progress.png" },
  },
  "critical-operations": {
    overview:
      "Operations support for live plants: shutdowns and turnarounds, commissioning, and asset integrity programmes that keep production safe and predictable.",
    scope: ["Operations and shift support", "Shutdowns, turnarounds, and outages", "Pre-commissioning and commissioning", "Asset integrity and RBI programmes"],
    capabilities: ["Turnarounds", "Commissioning", "Asset integrity", "Operations"],
    steps: ["Assess — readiness review and risk register.", "Engineer — sequence the workfront.", "Execute — control the permit board.", "Sustain — close punch lists, trend KPIs."],
    image: { slot: "IMG-SVC-D-03", ratio: "16:10", brief: "Night shift operations, control room glow", src: "/images/Night%20shift%20operations,%20control%20room%20glow.jpg" },
  },
  infrastructure: {
    overview:
      "Civil, mechanical, and structural works with full site development — foundations to finishing, delivered under one accountable contract.",
    scope: ["Civil works and foundations", "Structural steel supply and erection", "Mechanical installation", "Site development and utilities"],
    capabilities: ["Civil", "Structural", "Mechanical", "Site development"],
    steps: ["Assess — geotech and site survey.", "Engineer — stage the build sequence.", "Execute — pour, erect, install.", "Sustain — snag, certify, hand over."],
    image: { slot: "IMG-SVC-D-04", ratio: "16:10", brief: "Structural steel erection, daylight", src: "/images/Structural%20steel%20erection,%20daylight.jpg" },
  },
  "oil-gas-support": {
    overview:
      "Upstream, midstream, and downstream technical services for operators: wells, pipelines, terminals, and refineries — supported by HSE discipline on every task.",
    scope: ["Upstream well-site support", "Midstream pipeline services", "Downstream terminal and refinery support", "Metering and flow assurance assistance"],
    capabilities: ["Upstream", "Midstream", "Downstream", "Terminals"],
    steps: ["Assess — baseline the asset.", "Engineer — specify the intervention.", "Execute — deliver under permit.", "Sustain — monitor and report."],
    image: { slot: "IMG-SVC-D-05", ratio: "16:10", brief: "Pipeline corridor, inspection crew", src: "/images/Pipeline%20corridor,%20inspection%20crew.png" },
  },
  "hse-compliance": {
    overview:
      "Safety management systems, audits, workforce training, and certification support — built to the slogan on our billboard: Safety First. Safety for Me. Safety for All.",
    scope: ["HSE management systems (ISO 45001 aligned)", "Independent audits and gap closure", "Workforce training and certification", "Incident investigation and lessons learned"],
    capabilities: ["Audits", "Training", "Systems", "Certification support"],
    steps: ["Assess — baseline culture and systems.", "Engineer — write the plan and procedures.", "Execute — train, drill, and audit.", "Sustain — trend leading indicators."],
    image: { slot: "IMG-SVC-D-06", ratio: "16:10", brief: "Safety briefing, crew in PPE", src: "/images/Worker%20in%20hard%20hat%20and%20red%20coveralls,%20thumbs-up.png" },
  },
};

export const sectorsDetail = {
  "oil-gas": {
    name: "Oil & Gas",
    challenge: "Live hydrocarbons leave no room for error. Operators need contractors who plan every lift, permit every task, and hand back cleaner than they found it.",
    response:
      "CORVEX embeds HSE into every workfront — from well-site support to refinery turnarounds — with certified crews and documented QA gates.",
    services: ["engineering-solutions", "critical-operations", "oil-gas-support", "hse-compliance"],
    image: { slot: "IMG-SECTOR-P-OG", ratio: "16:10", brief: "Offshore platform at dusk", src: "/images/Offshore%20platform%20at%20dusk.jpg" },
  },
  industrial: {
    name: "Industrial",
    challenge: "Plants that run around the clock cannot stop for contractors. Maintenance windows are short and every hour counts.",
    response:
      "CORVEX plans shutdown windows to the hour, pre-stages spares and tooling, and executes with parallel workfronts under one permit board.",
    services: ["industrial-support", "engineering-solutions", "critical-operations", "hse-compliance"],
    image: { slot: "IMG-SECTOR-P-IND", ratio: "16:10", brief: "Process plant interior, pipework", src: "/images/Process%20plant%20interior,%20pipework.jpg" },
  },
  infrastructure: {
    name: "Infrastructure",
    challenge: "Civil works carry public accountability: budgets are scrutinised and defects live in the open for decades.",
    response:
      "CORVEX delivers foundations, structures, and utilities with staged QA, certified materials, and handover dossiers that survive audit.",
    services: ["infrastructure", "engineering-solutions", "industrial-support", "hse-compliance"],
    image: { slot: "IMG-SECTOR-P-INF", ratio: "16:10", brief: "Bridge and highway works, daylight", src: "/images/Bridge%20and%20highway%20works,%20daylight.png" },
  },
};

export const aboutPage = {
  story: [
    { year: "[2010s — PLACEHOLDER]", title: "Founded in the field", text: "CORVEX begins as a specialist support crew on industrial maintenance contracts." },
    { year: "[2010s — PLACEHOLDER]", title: "Engineering capability added", text: "Design and inspection services bring front-end scope in-house." },
    { year: "[2020s — PLACEHOLDER]", title: "Multi-sector delivery", text: "Oil & gas, industrial, and infrastructure work under one HSE system." },
    { year: "[Today — PLACEHOLDER]", title: "Regional delivery", text: "Head office plus regional hubs close to client operations." },
  ],
  mission: "To deliver technical services that keep critical operations running — safely, precisely, and to spec.",
  vision: "A region where every energy and industrial asset is engineered, maintained, and operated to world standards.",
  values: ["Professionalism", "Integrity", "Performance", "Safety", "Innovation"],
  leadership: [
    { name: "[Name — PLACEHOLDER]", role: "Managing Director", bio: "Two decades across upstream operations and industrial delivery.", slot: "IMG-LEAD-01", src: "/images/Overhead%20Industrial%20Blueprint%20Workshop.png" },
    { name: "[Name — PLACEHOLDER]", role: "Technical Director", bio: "Design authority for brownfield modifications and integrity.", slot: "IMG-LEAD-02", src: "/images/Process%20plant%20interior,%20pipework.jpg" },
    { name: "[Name — PLACEHOLDER]", role: "HSE Director", bio: "Owns the zero-harm programme and audit regime.", slot: "IMG-LEAD-03", src: "/images/Worker%20in%20hard%20hat%20and%20red%20coveralls,%20thumbs-up.png" },
    { name: "[Name — PLACEHOLDER]", role: "Operations Director", bio: "Runs turnarounds, commissioning, and site logistics.", slot: "IMG-LEAD-04", src: "/images/Refinery%20columns%20at%20dusk.jpg" },
  ],
};

export const hsePage = {
  policy: [
    "Every task is risk-assessed before it starts.",
    "Every worker holds stop-work authority.",
    "Every incident is reported, investigated, and learned from.",
    "Every site is independently audited on a fixed cycle.",
  ],
  pillars: [
    { n: "01", name: "Leadership visible", desc: "Supervisors on the tools, not behind desks." },
    { n: "02", name: "Competence assured", desc: "Certified crews with verified, current records." },
    { n: "03", name: "Systems live", desc: "Permits, toolbox talks, and audits every shift." },
    { n: "04", name: "Learning loop", desc: "Near-miss reporting rewarded, lessons shared." },
  ],
  training: ["HSE induction and site orientation", "Permit-to-work and LOTO", "Working at height and confined space", "First aid and emergency response"],
};

export const innovationPage = {
  tools: [
    { name: "Digital inspections", desc: "Photo-tagged checklists synced from the field." },
    { name: "Asset registers", desc: "Single source of truth for equipment data." },
    { name: "Project controls", desc: "Earned-value tracking on every contract." },
    { name: "QA dossiers", desc: "Traceable records from weld to handover." },
  ],
};

export const careersPage = {
  openings: [
    { title: "Mechanical Technician", dept: "Operations", location: "[PLACEHOLDER] — West", type: "Full-time" },
    { title: "HSE Officer", dept: "HSE", location: "[PLACEHOLDER] — HQ", type: "Full-time" },
    { title: "Project Engineer", dept: "Engineering", location: "[PLACEHOLDER] — Gulf", type: "Contract" },
    { title: "Welding Inspector", dept: "Quality", location: "[PLACEHOLDER] — East", type: "Contract" },
    { title: "Logistics Coordinator", dept: "Support", location: "[PLACEHOLDER] — HQ", type: "Full-time" },
  ],
};

export const projectDetail = {
  client: "[Client — PLACEHOLDER]",
  galleryNote: "Progress photography issued per contract data pack.",
};

export const articleBodies = {
  "zero-harm-turnaround": [
    "Turnarounds compress months of risk into weeks. The plan is the product: every lift sequenced, every permit boarded, every crew briefed before boots touch steel.",
    "Our method starts with a readiness review — spares staged, drawings verified, isolations proven. Only then does the clock start.",
  ],
  "asset-integrity-reaudits": [
    "Re-audits find what first passes miss: coating holidays, support corrosion, instrument drift. We treat them as design inputs, not paperwork.",
    "Each finding is photographed, tagged to the asset register, and closed with a verifier signature.",
  ],
  "commissioning-without-chaos": [
    "Commissioning fails when systems are handed over dirty, unflushed, or undocumented. We pre-commission as we build.",
    "Loop checks, punch lists, and dossiers move with the workfront — so start-up is a formality, not a firefight.",
  ],
};

export const faqSite = [
  { q: "Where does CORVEX operate?", a: "From our head office and regional delivery hubs — see Global Presence. Mobilisation scope is agreed per contract." },
  { q: "Which standards do you work to?", a: "ISO 9001 (quality), ISO 14001 (environment), and ISO 45001 (safety) aligned systems, plus API practice where specified. Certificates are issued per contract data pack." },
  { q: "How do engagements start?", a: "Send scope, drawings, or a one-line brief via Contact or Request a Proposal. A technical lead replies within two business days." },
  { q: "Do you supply certified personnel?", a: "Yes. Every crew member arrives with current, verifiable certification matched to the task risk assessment." },
  { q: "How is safety enforced on site?", a: "Permit-to-work on every task, toolbox talks every shift, independent audits on a fixed cycle, and stop-work authority for everyone." },
];

