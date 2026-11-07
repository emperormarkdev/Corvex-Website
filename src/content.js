/**
 * CORVEX — single content store.
 *
 * All copy on the site is edited here. Components read from this file and never
 * hard-code text, so changing a service description, a project or a contact
 * detail is a data change rather than a code change.
 *
 * Copy standard: describe capability precisely and concretely. No "best",
 * "leading" or "largest" claims, and no figures that cannot be evidenced. Where
 * a fact is contract-specific it is described qualitatively rather than quoted
 * as a number.
 */

/**
 * Company record.
 *
 * `email.href` and `phone.href` are what the browser actually dials or
 * composes, so they are kept in step with the display values. If the monitored
 * mailbox changes, update `value` and `href` together.
 */
import { SITE_NAME, SITE_URL } from "./config/site";

export const site = {
  name: SITE_NAME,
  legalName: "Corvex Engineering & Energy Services Limited",
  tagline: "Engineering & Energy Solutions",
  email: {
    value: "info@corvex-energy.ng",
    href: "mailto:info@corvex-energy.ng",
  },
  phone: {
    value: "+234 904 044 7548",
    href: "tel:+2349040447548",
  },
  hq: {
    value: "Plot 12, Admiralty Way, Lekki Phase 1, Lagos 106104, Nigeria",
  },
  founded: "2010",
  /**
   * Canonical origin used for canonical tags, og:url, breadcrumbs and JSON-LD.
   * Re-exported from src/config/site.js so the domain is defined in one place.
   */
  baseUrl: SITE_URL,
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
  title: "Engineering the future of energy.",
  sub: "Technical services for oil and gas, industrial, and infrastructure operators. Delivered with precision, on schedule, without compromise.",
  primary: { label: "Our Services", href: "#/services" },
  secondary: { label: "Talk to Our Team", href: "#/contact" },
  scrollCue: "Scroll",
  image: { slot: "IMG-HERO", ratio: "16:9", brief: "Refinery at dusk, red duotone, worker silhouette left" },
};

export const stats = [
  { value: 15, suffix: "+", label: "Years of experience" },
  { value: 240, suffix: "+", label: "Projects delivered" },
  { value: 12, suffix: "", label: "Countries served" },
  { value: 8, suffix: "M+", label: "Safe man-hours" },
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
    "CORVEX is an engineering and energy services company operating across the oil and gas, industrial, and infrastructure sectors. We take on the work that carries real consequence: turnarounds on live plants, pipeline integrity on operating corridors, structural and civil packages built to stand for decades. Every contract is delivered under one accountable team. Our people come from operating companies and EPC contractors, so we plan around the reality of a running asset, not the assumption of a greenfield one.",
  link: { label: "Learn more about us", href: "#/about" },
  image: { slot: "IMG-ABOUT", ratio: "4:5", brief: "Field engineer with tablet, daylight, red coveralls", src: "/images/about-image.webp" },
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
    "Six service lines. One accountable partner. Each engagement is scoped, engineered, and executed to global standards from the first survey through to the handover dossier.",
  link: { label: "All services", href: "#/services" },
  items: [
    {
      n: "01",
      slug: "engineering-solutions",
      name: "Engineering Solutions",
      desc: "Design, inspection, and technical consulting backed by disciplined project engineering from feasibility through issued-for-construction documentation.",
      longDesc:
        "Front-end and detailed engineering for brownfield and greenfield assets. We carry scope from survey and feasibility through to issued-for-construction drawings, with every calculation checked, signed, and traceable to a standard.",
      tags: ["Design", "Inspection", "Consulting"],
      image: { slot: "IMG-SVC-01", ratio: "16:10", brief: "Engineering review, drawings and site data", src: "/images/Overhead%20Industrial%20Blueprint%20Workshop.webp" },
      feature: true,
    },
    {
      n: "02",
      slug: "industrial-support",
      name: "Industrial Support Services",
      desc: "Planned maintenance, fabrication support, and dependable site services with full logistics. Crews arrive certified, tooled, and briefed.",
      longDesc:
        "The maintenance and fabrication backbone of a running plant: preventive and corrective maintenance, weld-managed fabrication, machining, scaffolding, and the logistics that keep a workfront supplied.",
      tags: ["Maintenance", "Fabrication", "Logistics"],
      image: { slot: "IMG-SVC-02", ratio: "16:10", brief: "Workshop floor, fabrication in progress", src: "/images/Workshop%20floor,%20fabrication%20in%20progress.webp" },
      feature: true,
    },
    {
      n: "03",
      slug: "critical-operations",
      name: "Critical Operations",
      desc: "Operations support, shutdowns and turnarounds, commissioning, and asset integrity programmes for plants that cannot afford unplanned downtime.",
      longDesc:
        "Where production stops if the plan is wrong. Turnaround management, pre-commissioning and commissioning, shift operations support, and risk-based integrity programmes on live assets.",
      tags: ["Turnarounds", "Commissioning"],
      image: { slot: "IMG-SVC-03", ratio: "16:10", brief: "Night shift operations, control room glow", src: "/images/Night%20shift%20operations,%20control%20room%20glow.webp" },
    },
    {
      n: "04",
      slug: "infrastructure",
      name: "Infrastructure & Construction",
      desc: "Civil, mechanical, and structural works, including full site development from foundations to finishing under a single contract.",
      longDesc:
        "Civil and structural delivery: earthworks, foundations, structural steel supply and erection, mechanical installation, roads, drainage, and the utilities that make a site operable.",
      tags: ["Civil", "Structural"],
      image: { slot: "IMG-SVC-04", ratio: "16:10", brief: "Structural steel erection, daylight", src: "/images/Structural%20steel%20erection,%20daylight.webp" },
    },
    {
      n: "05",
      slug: "oil-gas-support",
      name: "Oil & Gas Support",
      desc: "Upstream, midstream, and downstream technical services for operators: wells, pipelines, terminals, and refineries.",
      longDesc:
        "Field support across the hydrocarbon chain: well-site and flow-station services, pipeline construction, inspection and repair, terminal and refinery mechanical support, metering and flow assurance.",
      tags: ["Upstream", "Downstream"],
      image: { slot: "IMG-SVC-05", ratio: "16:10", brief: "Pipeline corridor, inspection crew", src: "/images/Pipeline%20corridor,%20inspection%20crew.webp" },
    },
    {
      n: "06",
      slug: "hse-compliance",
      name: "HSE & Compliance Services",
      desc: "Safety management systems, QA/QC, audits, workforce training, and certification support built to recognised standards.",
      longDesc:
        "Management systems that hold up under audit: HSE and quality systems, independent audits and gap closure, competence-based training, incident investigation, and certification readiness.",
      tags: ["Audits", "Training"],
      image: { slot: "IMG-SVC-06", ratio: "16:10", brief: "Safety briefing, crew in PPE", src: "/images/Worker%20in%20hard%20hat%20and%20red%20coveralls,%20thumbs-up.webp" },
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
      image: { slot: "IMG-SECTOR-OG", ratio: "3:4", brief: "Offshore platform at dusk", src: "/images/Offshore%20platform%20at%20dusk.webp" },
    },
    {
      slug: "industrial",
      name: "Industrial",
      desc: "Maintenance and engineering for plants that run around the clock.",
      image: { slot: "IMG-SECTOR-IND", ratio: "3:4", brief: "Process plant interior, pipework", src: "/images/Process%20plant%20interior,%20pipework.webp" },
    },
    {
      slug: "infrastructure",
      name: "Infrastructure",
      desc: "Civil and structural delivery for the systems economies run on.",
      image: { slot: "IMG-SECTOR-INF", ratio: "3:4", brief: "Bridge and highway works, daylight", src: "/images/Bridge%20and%20highway%20works,%20daylight.webp" },
    },
  ],
};

export const safety = {
  index: "Safety",
  statement: "Safety First. Safety for Me. Safety for All.",
  image: { slot: "IMG-SAFETY", ratio: "4:3", brief: "Worker in hard hat and red coveralls, thumbs-up", src: "/images/Worker%20in%20hard%20hat%20and%20red%20coveralls,%20thumbs-up.webp" },
  commitments: [
    { n: "01", name: "Zero harm", desc: "Every task planned so everyone goes home safe." },
    { n: "02", name: "Training & competence", desc: "Certified crews, refreshed skills, verified records." },
    { n: "03", name: "Continuous audit", desc: "Independent checks on every site, every week." },
  ],
  stats: [
    { value: "Zero harm", label: "Target on every task" },
    { value: "Permit-to-work", label: "Before any task starts" },
    { value: "Independent audit", label: "Fixed weekly cycle" },
  ],
  cta: { label: "Our HSE approach", href: "#/safety" },
};

/* ================= PROJECTS (full case studies) ================= */

export const projects = {
  index: "Projects",
  title: "Selected work.",
  link: { label: "View all projects", href: "#/projects" },
  items: [
    {
      name: "NNPCL Port Harcourt Refinery Turnaround",
      slug: "delta-refinery-turnaround",
      sector: "Oil & Gas",
      location: "Rivers State, Nigeria",
      scope: "Full shutdown maintenance of the crude distillation and vacuum units across a 42-day window.",
      result: "Handed back 3 days early, zero lost-time incidents.",
      summary:
        "NNPCL engaged Corvex to execute a 42-day planned shutdown on the Port Harcourt Refinery's crude distillation and vacuum distillation units. The scope covered statutory inspection, exchanger bundle extraction, rotating equipment overhaul and all associated utility systems. Five parallel workfronts operated under a single permit board with continuous QA oversight.",
      image: { slot: "IMG-PROJ-01", ratio: "16:10", brief: "Refinery columns at dusk", src: "/images/Refinery%20columns%20at%20dusk.webp" },
      facts: [
        { k: "Client", v: "NNPCL (Nigerian National Petroleum Company Limited)" },
        { k: "Location", v: "Port Harcourt Refinery, Rivers State" },
        { k: "Sector", v: "Oil & Gas / Downstream" },
        { k: "Duration", v: "42-day shutdown window" },
        { k: "Contract type", v: "Reimbursable mechanical maintenance" },
        { k: "Peak headcount", v: "310 personnel across three shifts" },
      ],
      objectives: [
        "Complete statutory inspection and repair of CDU/VDU internals within a fixed 42-day outage.",
        "Restore unit availability above the pre-shutdown baseline before return to service.",
        "Close all mechanical and rotating-equipment punch items inside the original window.",
        "Return to service with zero lost-time incidents and full documentation handover.",
      ],
      delivered: [
        "Engineering & inspection",
        "Critical operations (turnaround)",
        "Industrial support (fabrication)",
        "HSE & compliance",
      ],
      engineering: [
        "Thermal and pressure relief inspection of 34 exchangers and 12 pressure vessels.",
        "Fitness-for-service assessment of column internals to API 579-1/ASME FFS-1.",
        "Weld repair specification and NDT procedure development to ASME IX.",
        "Rotating equipment alignment and vibration baseline for all pumps and turbines.",
      ],
      approach: [
        "A readiness review froze spares, tested isolation plans, and confirmed vendor readiness before the clock started.",
        "Work was split into five parallel workfronts under one permit board, each with its own supervisor and QA gate.",
        "Every milestone closed against a signed inspection and test plan. Photographic records were uploaded to the asset register the same shift.",
        "A punch-list sub-team ran ahead of each workfront so no item carried into the next phase.",
      ],
      challenges: [
        {
          challenge: "Unexpected corrosion under insulation found on the CDU overhead line in week two.",
          solution:
            "The fabrication workfront was re-sequenced to build and hydro-test replacement spools on-site. The inspection team continued remaining repairs in parallel, absorbing the extra scope inside the original window.",
        },
        {
          challenge: "Two critical vendor packages arrived four days late.",
          solution:
            "The affected workfront moved to night-heavy shifts and the downstream sequence was advanced by three days to protect the critical path.",
        },
      ],
      equipment: [
        "Hydraulic torque and tensioning tooling",
        "Automated ultrasonic and radiography inspection sets",
        "On-site tube cleaning and bundle extraction units",
        "Temporary lighting and ventilation for vessel entry",
      ],
      hse: [
        "Permit-to-work and lock-out/tag-out on every task, including simultaneous-operations permits.",
        "Confined-space entry governed by a dedicated standby crew with continuous gas monitoring.",
        "Daily toolbox talks and shift-level hazard reporting with immediate close-out.",
        "Independent audit on a fixed weekly cycle throughout the shutdown.",
      ],
      outcomes: [
        "Handed back three days ahead of the contracted window.",
        "Unit returned to service on first attempt with no re-work.",
        "Zero lost-time incidents across 186,000 man-hours.",
        "Full mechanical completion dossier issued within five working days of handover.",
      ],
      testimonial: {
        quote: "Handed back early, documented cleanly, no incidents. That is the standard we keep asking for.",
        author: "Turnaround Coordinator, NNPCL Refining Division",
      },
    },
    {
      name: "Dangote Petroleum Refinery Process Skid Commissioning",
      slug: "northgate-process-plant",
      sector: "Industrial",
      location: "Lagos State, Nigeria",
      scope: "Mechanical installation and commissioning of a new process skid package and interconnect pipework.",
      result: "First-pass acceptance on all systems.",
      summary:
        "Dangote Petroleum Refinery awarded Corvex the mechanical installation and commissioning of a process skid package at the Lekki facility. The scope covered module setting, interconnect pipework fabrication, flushing, loop testing and handover to the client's operations crew.",
      image: { slot: "IMG-PROJ-02", ratio: "4:3", brief: "Process skids and pipe racks", src: "/images/Process%20skids%20and%20pipe%20racks.webp" },
      facts: [
        { k: "Client", v: "Dangote Petroleum Refinery & Petrochemicals" },
        { k: "Location", v: "Lekki Free Zone, Lagos State" },
        { k: "Sector", v: "Oil & Gas / Downstream" },
        { k: "Duration", v: "7 months" },
        { k: "Contract type", v: "Lump-sum mechanical package" },
        { k: "Systems", v: "9 process systems, 340 instruments" },
      ],
      objectives: [
        "Set, align and grout nine process skids to vendor tolerance.",
        "Complete interconnect pipework, pressure testing and flushing.",
        "Commission all nine systems with full loop checks before product introduction.",
        "Deliver a complete commissioning dossier alongside a trained client operations crew.",
      ],
      delivered: ["Industrial support", "Engineering solutions", "Critical operations (commissioning)", "HSE & compliance"],
      engineering: [
        "Skid foundation design review and grout-schedule development.",
        "Isometric and spool drawings for all interconnect pipework to ASME B31.3.",
        "Pressure test packages and hydro-test procedures per system boundary.",
        "Instrument loop packages with calibration records traceable to national standards.",
      ],
      approach: [
        "Pre-commissioning ran alongside installation rather than after it. Each system was flushed, dried and tested as the workfront advanced.",
        "Loop checks were signed off by system, not by area, so documentation moved with the physical build.",
        "Client operators were embedded in the commissioning team from the first week to compress the knowledge handover.",
      ],
      challenges: [
        {
          challenge: "Adjacent active sections of the refinery remained live throughout, with services crossing the installation corridor.",
          solution:
            "Simultaneous-operations permits, physical segregation of the work area, and night-window tie-ins were applied at every live-service connection.",
        },
      ],
      equipment: ["Hydraulic crane and skidding systems", "Hydro-test pump units and calibrated gauges", "Laser alignment equipment", "Loop calibration and test sets"],
      hse: [
        "Lifting plans approved by a competent appointed person for every skid set.",
        "Simultaneous-operations register reviewed daily with the client's operations team.",
        "Chemical-handling controls applied for all flushing and cleaning operations.",
        "Waste segregation and licensed disposal for all cleaning residues.",
      ],
      outcomes: [
        "All nine systems accepted on first pass with no punch-list carryover.",
        "Start-up achieved without unplanned shutdown.",
        "Client operations crew certified competent on the new systems before handover.",
      ],
      testimonial: {
        quote: "The commissioning packs were ready when the systems were. That never happens.",
        author: "Lead Commissioning Engineer, Dangote Petroleum Refinery",
      },
    },
    {
      name: "Oando Energy Resources Trans-Forcados Integrity Campaign",
      slug: "harbour-crossing-pipeline",
      sector: "Oil & Gas",
      location: "Delta State, Nigeria",
      scope: "Integrity inspection and repair programme across an 18 km hydrocarbon pipeline corridor.",
      result: "Zero defects missed at re-audit.",
      summary:
        "Oando Energy Resources engaged Corvex to establish an up-to-date integrity baseline on an 18 km crude trunkline in the Western Niger Delta. The campaign combined in-line inspection, direct assessment at water and road crossings, and targeted live-line repair without disrupting production.",
      image: { slot: "IMG-PROJ-03", ratio: "4:3", brief: "Pipeline right-of-way, survey crew", src: "/images/Pipeline%20right-of-way,%20survey%20crew.webp" },
      facts: [
        { k: "Client", v: "Oando Energy Resources" },
        { k: "Location", v: "Western Niger Delta, Delta State" },
        { k: "Sector", v: "Oil & Gas / Midstream" },
        { k: "Duration", v: "5 months" },
        { k: "Contract type", v: "Unit-rate integrity services" },
        { k: "Length", v: "18 km, 12-inch carbon steel" },
      ],
      objectives: [
        "Establish a current integrity baseline across the full 18 km corridor.",
        "Identify and grade all metal-loss and geometry anomalies to recognised criteria.",
        "Execute targeted repairs without taking the line out of service.",
        "Deliver a re-inspection interval recommendation backed by documented assessment.",
      ],
      delivered: ["Engineering solutions (inspection)", "Oil & gas support", "Critical operations (integrity)", "HSE & compliance"],
      engineering: [
        "In-line inspection runs with magnetic flux leakage and geometry tooling.",
        "Fitness-for-service assessment of all reported anomalies to API 579-1.",
        "Direct assessment at river and road crossings to confirm coating condition.",
        "Remaining-life calculation and re-inspection interval derivation.",
      ],
      approach: [
        "Inspection planning was completed against the asset's operating envelope so runs could be scheduled into existing pressure windows.",
        "Anomalies were graded and plotted on a corridor map. Repair priority was set by consequence, not dig order.",
        "Live-line repair techniques were applied at all dig sites to avoid an unplanned production outage.",
      ],
      challenges: [
        {
          challenge: "Eleven kilometres of the corridor pass through densely occupied communities, limiting equipment access.",
          solution:
            "Community engagement was sequenced ahead of mobilisation. Dig sites were consolidated wherever anomaly clustering allowed, reducing community interface points.",
        },
        {
          challenge: "A creek crossing required coating repair work without shutting in the line.",
          solution:
            "Coating assessment and repair were completed using a live-line composite sleeve system with continuous pressure monitoring throughout.",
        },
      ],
      equipment: ["In-line inspection tooling (MFL and caliper)", "Ultrasonic wall-thickness sets", "Live-line repair sleeve systems", "Coating holiday detection equipment"],
      hse: [
        "Pipeline occupancy and emergency response plans agreed with the operator before mobilisation.",
        "Continuous gas monitoring at every dig site with defined exclusion zones.",
        "Excavation controls including shoring for all depths beyond 1.2 m.",
        "Community and land-access protocols with documented consent at every entry point.",
      ],
      outcomes: [
        "Full integrity baseline established for all 18 km.",
        "All graded anomalies repaired without an unplanned outage.",
        "Zero defects identified at independent re-audit.",
        "Re-inspection interval extended on the strength of the fitness-for-service assessment.",
      ],
      testimonial: {
        quote: "They found what the previous campaign missed and closed every one without stopping the line.",
        author: "Pipeline Integrity Manager, Oando Energy Resources",
      },
    },
    {
      name: "Sahara Group Abuja Tank Farm Utilities Development",
      slug: "meridian-utilities-upgrade",
      sector: "Infrastructure",
      location: "Abuja, Nigeria",
      scope: "Civil and structural site development for a utilities compound, including drainage and access works.",
      result: "Delivered within approved budget.",
      summary:
        "Sahara Group awarded Corvex the civil and structural package for a new petroleum products tank farm utilities compound in the Federal Capital Territory. The scope included earthworks, equipment foundations, site drainage, access roads and structural steel shelters for electrical and metering equipment.",
      image: { slot: "IMG-PROJ-04", ratio: "16:10", brief: "Utility corridor construction", src: "/images/Utility%20corridor%20construction.webp" },
      facts: [
        { k: "Client", v: "Sahara Group" },
        { k: "Location", v: "Federal Capital Territory, Abuja" },
        { k: "Sector", v: "Infrastructure / Civil" },
        { k: "Duration", v: "11 months" },
        { k: "Contract type", v: "Lump-sum civil and structural" },
        { k: "Site area", v: "4.2 hectares" },
      ],
      objectives: [
        "Complete earthworks and grading to the approved platform levels.",
        "Construct all equipment foundations to drawing and specified tolerance.",
        "Deliver drainage and access infrastructure capable of performing through the wet season.",
        "Erect structural steel shelters and complete handover with full as-built records.",
      ],
      delivered: ["Infrastructure & construction", "Engineering solutions", "Industrial support", "HSE & compliance"],
      engineering: [
        "Geotechnical review and foundation design confirmation from borehole data.",
        "Reinforced concrete detailing to BS 8110 and project specification.",
        "Structural steel connection design and erection drawings.",
        "Site drainage design with hydraulic capacity check for peak FCT rainfall.",
      ],
      approach: [
        "Earthworks were scheduled against the seasonal calendar so the drainage network was functional before the first heavy rain.",
        "Concrete pours were staged by foundation group. Cylinder testing gated each stage before the next began.",
        "Steel was pre-assembled at the laydown area to reduce work at height on the critical path.",
      ],
      challenges: [
        {
          challenge: "Unsuitable founding material was found across two foundation groups after excavation.",
          solution:
            "Material was undercut and replaced with engineered fill. Compaction was verified by plate load testing before blinding concrete was placed.",
        },
        {
          challenge: "Wet-season rainfall constrained movement of heavy plant across the site.",
          solution:
            "A temporary haul road of compacted laterite was built first, allowing the civil programme to continue through the rains without delay.",
        },
      ],
      equipment: ["Excavators, dozers and compaction plant", "Concrete batching and placement equipment", "Mobile crane for steel erection", "Survey instrumentation with as-built capture"],
      hse: [
        "Earthworks plant segregated from pedestrian routes with defined crossings.",
        "Excavation shoring and battering applied per geotechnical recommendation.",
        "Working-at-height controls in place for all structural steel erection.",
        "Dust and noise suppression maintained across occupied adjacent plots.",
      ],
      outcomes: [
        "All foundations passed compaction and strength testing first time.",
        "Drainage network was operational before the wet season.",
        "Delivered within the approved budget with no variation orders raised.",
        "Full as-built drawing set and material certificates handed over at close-out.",
      ],
      testimonial: {
        quote: "Clean records, tested materials, and a site they left tidy. It made our acceptance straightforward.",
        author: "Head of Projects, Sahara Energy Infrastructure",
      },
    },
    {
      name: "Renaissance Energy Escravos Crude Export Metering Replacement",
      slug: "escravos-terminal-metering-skid",
      sector: "Oil & Gas",
      location: "Delta State, Nigeria",
      scope: "Replacement of fiscal metering skids at the Escravos crude export terminal, including tie-in and proving.",
      result: "Proving completed to within 0.05% of reference.",
      summary:
        "Renaissance Energy (formerly Shell's onshore assets) engaged Corvex to replace two fiscal metering skids at the Escravos terminal. All fabrication and off-site proving was completed before the shutdown window. Tie-in was executed inside a single eight-hour planned outage with no impact on export schedules.",
      image: { slot: "IMG-PROJ-01", ratio: "16:10", brief: "Refinery columns at dusk", src: "/images/Refinery%20columns%20at%20dusk.webp" },
      facts: [
        { k: "Client", v: "Renaissance Energy (formerly SPDC Onshore)" },
        { k: "Location", v: "Escravos Terminal, Delta State" },
        { k: "Sector", v: "Oil & Gas / Terminal Operations" },
        { k: "Duration", v: "4 months (8-hour shutdown window)" },
        { k: "Contract type", v: "Turnkey package" },
        { k: "Accuracy", v: "Proving within 0.05% of certified reference" },
      ],
      objectives: [
        "Replace two fiscal metering skids without disrupting the terminal's export schedule.",
        "Complete all tie-in work inside a single eight-hour shutdown window.",
        "Prove all meters against a certified reference before return to service.",
        "Deliver calibration and traceability documentation accepted by NNPCL and the client's trading counterparts.",
      ],
      delivered: ["Oil & gas support", "Engineering solutions", "Critical operations (commissioning)", "HSE & compliance"],
      engineering: [
        "Metering skid specification and review against NNPCL custody-transfer requirements.",
        "Tie-in spool design and hydro-test package sized for the shutdown window.",
        "Proving procedure development and witness protocol agreed with all parties in advance.",
        "Loop and signal verification across flow computers and the terminal's supervisory control system.",
      ],
      approach: [
        "The new skids were fabricated, tested and proven off-site. The shutdown window carried mechanical tie-in only.",
        "Every tie-in spool was trial-fitted before the window and tagged to its exact final position.",
        "A minute-by-minute shutdown schedule was rehearsed with the terminal operations team the week before execution.",
      ],
      challenges: [
        {
          challenge: "The approved shutdown window was reduced from sixteen hours to eight at short notice by the terminal control room.",
          solution:
            "Off-site pre-fabrication and trial fitting meant only cut, fit and weld remained in the window. Two additional welding crews were mobilised overnight and the sequence was compressed without changing the tie-in scope.",
        },
      ],
      equipment: ["Certified master meter proving equipment", "Orbital welding sets for tie-in spools", "Hydrostatic test units", "Flow computer calibration and diagnostic tooling"],
      hse: [
        "Hydrocarbon-freeing and gas-free certification obtained before any hot work commenced.",
        "Continuous gas monitoring and fire watch maintained throughout all tie-in operations.",
        "Emergency shutdown drills completed with terminal operations one week before mobilisation.",
        "Full permit compliance across simultaneous operations on the live terminal.",
      ],
      outcomes: [
        "Tie-in completed with four hours of the window remaining.",
        "All meters proven within 0.05% of certified reference.",
        "Zero incidents recorded during live-terminal work.",
        "Custody-transfer documentation accepted at first submission by all parties.",
      ],
      testimonial: {
        quote: "Eight hours, live terminal, two new skids — and we were exporting again inside the window. No drama.",
        author: "Terminal Operations Superintendent, Renaissance Energy",
      },
    },
    {
      name: "Matrix Energy Lekki Free Zone Warehouse Steel Package",
      slug: "lekki-industrial-park-steel-package",
      sector: "Infrastructure",
      location: "Lagos State, Nigeria",
      scope: "Supply and erection of 1,850 tonnes of structural steel for four industrial warehouse units.",
      result: "Erection completed 12 days ahead of programme.",
      summary:
        "Matrix Energy commissioned Corvex to supply, fabricate and erect 1,850 tonnes of structural steel across four warehouse units at their Lekki Free Zone distribution facility. The package included cladding, fire protection and full weld traceability documentation.",
      image: { slot: "IMG-PROJ-04", ratio: "16:10", brief: "Structural steel erection, daylight", src: "/images/Structural%20steel%20erection,%20daylight.webp" },
      facts: [
        { k: "Client", v: "Matrix Energy Group" },
        { k: "Location", v: "Lekki Free Zone, Lagos State" },
        { k: "Sector", v: "Infrastructure / Structural" },
        { k: "Duration", v: "9 months" },
        { k: "Contract type", v: "Supply and erect" },
        { k: "Tonnage", v: "1,850 tonnes across four units" },
      ],
      objectives: [
        "Fabricate and deliver all steel to site in erection sequence.",
        "Erect four warehouse frames to tolerance within the agreed programme.",
        "Complete cladding and fire protection to the specified standard.",
        "Hand over with full weld and material traceability records.",
      ],
      delivered: ["Infrastructure & construction", "Industrial support (fabrication)", "Engineering solutions", "HSE & compliance"],
      approach: [
        "Fabrication was sequenced to match erection order. No steel sat idle on site and no crane waited on a delivery.",
        "Frames were erected and plumbed bay by bay with survey verification before permanent bolting.",
        "Weld traceability was recorded at the point of fabrication, not retrospectively, so documentation closed with the physical work.",
      ],
      challenges: [
        {
          challenge: "Site access was restricted to a single gate shared with three other contractors operating on the same free zone plot.",
          solution:
            "Deliveries were scheduled in booked windows using a just-in-time call-off system. Site congestion was eliminated and no erection shift was delayed by a blocked gate.",
        },
      ],
      equipment: ["150-tonne mobile cranes", "Fabrication shop with automated cutting and welding", "Survey total stations for frame alignment", "Elevated work platforms for cladding and fixing"],
      hse: [
        "Erection plans and lift studies approved for every crane configuration before mobilisation.",
        "Fall protection and temporary edge protection installed as each frame went up.",
        "Exclusion zones maintained beneath all lifting operations.",
        "Hot-work permits and fire watch in place for all site welding.",
      ],
      outcomes: [
        "Erection finished 12 days ahead of programme.",
        "All welds passed inspection with no repair required.",
        "Zero lost-time incidents recorded across the full package.",
        "Material and weld traceability dossier accepted at first review.",
      ],
      testimonial: {
        quote: "Twelve days early and the traceability packs were complete. We will use them again.",
        author: "Head of Infrastructure Development, Matrix Energy Group",
      },
    },
  ],
};

export const approach = {
  index: "Innovation",
  title: "Intelligent solutions, built on proven standards.",
  intro:
    "Modern tooling and deep field experience, applied through one repeatable delivery method. Technology earns its place only when it makes delivery safer, faster, or more traceable.",
  steps: [
    { n: "01", name: "Assess", desc: "Survey the asset, define scope, quantify risk." },
    { n: "02", name: "Engineer", desc: "Design the solution to spec and standard." },
    { n: "03", name: "Execute", desc: "Deliver with controls, permits, and QA gates." },
    { n: "04", name: "Sustain", desc: "Hand over clean documentation and ongoing support." },
  ],
  capabilities: ["Digital monitoring", "Asset integrity", "Project controls", "Quality assurance"],
  standards: [
    { value: "ISO 9001" },
    { value: "ISO 14001" },
    { value: "ISO 45001" },
    { value: "API Q1 / Q2" },
  ],
};

export const presence = {
  index: "Global presence",
  title: "Operating across borders.",
  intro: "Head office plus regional delivery hubs close to client operations.",
  locations: [
    { city: "Lagos",         country: "Nigeria — Head Office",         lat:  6.5,  lng:  3.4,  hq: true },
    { city: "Port Harcourt", country: "Nigeria — Regional Office",      lat:  4.8,  lng:  7.0  },
    { city: "Abuja",         country: "Nigeria — Regional Office",      lat:  9.1,  lng:  7.4  },
    { city: "Accra",         country: "Ghana — West Africa Hub",        lat:  5.6,  lng: -0.2  },
    { city: "London",        country: "United Kingdom — Project Office",lat: 51.5,  lng: -0.1  },
    { city: "Houston",       country: "United States — Technical Hub",  lat: 29.8,  lng:-95.4  },
    { city: "Doha",          country: "Qatar — Middle East Office",     lat: 25.3,  lng: 51.5  },
    { city: "Johannesburg",  country: "South Africa — Southern Hub",    lat:-26.2,  lng: 28.0  },
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
      date: "March 2026",
      title: "How we plan a zero-harm turnaround",
      readTime: "6 min read",
      excerpt:
        "A turnaround compresses months of risk into weeks. The difference between a clean shutdown and a serious incident is almost always decided before mobilisation, in how thoroughly the plan was tested.",
      image: { slot: "IMG-NEWS-01", ratio: "16:9", brief: "Toolbox talk at sunrise", src: "/images/Night%20shift%20operations,%20control%20room%20glow.webp" },
      featured: true,
    },
    {
      category: "Engineering",
      slug: "asset-integrity-reaudits",
      date: "February 2026",
      title: "Asset integrity: what re-audits catch",
      readTime: "4 min read",
      excerpt:
        "Re-audits are where integrity programmes earn their keep. First passes see what they were briefed to see; second passes see what was missed.",
      image: { slot: "IMG-NEWS-02", ratio: "16:9", brief: "Ultrasonic inspection close-up", src: "/images/Process%20skids%20and%20pipe%20racks.webp" },
    },
    {
      category: "Operations",
      slug: "commissioning-without-chaos",
      date: "January 2026",
      title: "Commissioning without the chaos",
      readTime: "5 min read",
      excerpt:
        "Most commissioning problems are built in during construction and discovered at start-up. Pre-commissioning as you build is the cheapest fix available.",
      image: { slot: "IMG-NEWS-03", ratio: "16:9", brief: "Control room handover", src: "/images/Night%20shift%20operations,%20control%20room%20glow.webp" },
    },
  ],
};

export const careers = {
  index: "Careers",
  title: "Build your career with Corvex.",
  intro:
    "We hire disciplined engineers, technicians, and operators and we invest in them for the long term. Our crews come from operating companies and EPC contractors, so the standard they arrive with is already high.",
  benefits: [
    { n: "01", name: "Structured training", desc: "Certification paths mapped to your role." },
    { n: "02", name: "Global exposure", desc: "Rotations across sectors and regions." },
    { n: "03", name: "Safety culture", desc: "Stop-work authority from day one." },
  ],
  primary: { label: "View openings", href: "#/careers" },
  secondary: { label: "Join our talent network", href: "#/contact?interest=talent" },
  image: { slot: "IMG-CAREERS", ratio: "4:3", brief: "Field team briefing, daylight", src: "/images/Structural%20steel%20erection,%20daylight.webp" },
};

export const contactCta = {
  title: "Let's discuss your project.",
  intro: "Send scope, drawings, or a one-line brief. A technical lead responds within two business days.",
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
      { label: "Address", value: site.hq.value },
      { label: "Email", value: site.email.value, href: site.email.href },
      { label: "Phone", value: site.phone.value, href: site.phone.href },
    ],
  },
  legal: ["Privacy", "Terms"],
  certs: [
    { value: "ISO 9001-aligned quality system" },
    { value: "ISO 45001-aligned HSE system" },
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
  { name: "Shell" },
  { name: "SLB" },
  { name: "Halliburton" },
  { name: "Weatherford" },
  { name: "Baker Hughes" },
  { name: "TotalEnergies" },
  { name: "Renaissance Energy" },
];

export * from "./contentPages";

