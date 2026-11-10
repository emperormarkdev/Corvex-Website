export const serviceDetail = {
  "engineering-solutions": {
    overview:
      "Front-end design, verification, and technical consulting for brownfield and greenfield assets. We take scope from survey to issued-for-construction documentation, with every calculation checked and traceable.",
    intro:
      "Engineering is where the cost of a project is really decided. Our engineering line exists to get the technical basis right before mobilisation: the survey is real, the drawings are buildable, and the assumptions are written down. We work to both greenfield standards and the messier reality of brownfield modification, where the existing asset is the constraint.",
    scope: [
      "Feasibility studies, concept selection, and front-end engineering design (FEED)",
      "Detailed design across mechanical, piping, structural, and electrical disciplines",
      "Brownfield modification engineering and as-built verification",
      "Inspection planning, NDT specification, and integrity assessment",
      "Technical consulting, peer review, and design verification",
      "Project engineering and multi-package interface management",
    ],
    capabilities: ["Design", "Inspection", "Consulting", "Project engineering", "FEED", "ASME B31.3", "API 579"],
    steps: [
      "Assess — survey the asset, capture as-built condition, and freeze the scope.",
      "Engineer — model, calculate, and document against the applicable code.",
      "Verify — independent check and approval before anything is issued.",
      "Execute — supervise installation to drawing, with field changes controlled.",
      "Sustain — hand over the dossier and support the operating phase.",
    ],
    subservices: [
      {
        name: "Front-End Engineering Design (FEED)",
        desc: "Concept evaluation, option screening and feasibility work that produces a costed, buildable basis for detailed design.",
      },
      {
        name: "Detailed Design & Drafting",
        desc: "Multidiscipline design packages, isometrics, general arrangements and material take-offs issued for construction.",
      },
      {
        name: "Brownfield Modification",
        desc: "Modification engineering on live assets, including clash detection against verified as-built data and phased tie-in design.",
      },
      {
        name: "Inspection & Integrity Engineering",
        desc: "Inspection planning, NDT programming, fitness-for-service assessment and remaining-life calculation.",
      },
      {
        name: "Technical Consulting & Peer Review",
        desc: "Independent review of third-party design, specification development, and troubleshooting of operating problems.",
      },
    ],
    standards: ["ASME B31.3", "ASME VIII Div 1", "API 579-1 / ASME FFS-1", "API 570", "ASME IX", "ISO 9001"],
    equipment: ["3D modelling and clash-detection software", "CAESAR II pipe stress analysis", "STAAD.Pro structural analysis", "Field 3D laser scanning for as-built capture"],
    sectors: ["Oil & gas", "Refining and petrochemical", "Industrial manufacturing", "Power and utilities"],
    qa: "Every calculation is independently checked and approved before issue. Drawings carry a revision register, and all field changes are returned to the design authority rather than absorbed on site. Inspection and test plans are written per package, so what will be verified is agreed before work starts.",
    outcomes: [
      "Scope frozen before mobilisation, reducing variations during construction",
      "Buildable drawings that reduce field rework",
      "Traceable calculation and inspection records",
    ],
    why:
      "Most costly errors on an engineering contract are settled before anyone lifts a tool. A survey that was never taken, a load case that was assumed rather than measured, or a drawing set issued without an independent check all surface later — on site, where the fix costs a multiple of the original. Engineering is where that risk is cheapest to remove. Our engineering line exists to produce a technical basis that a construction supervisor, a client auditor and a regulator can all rely on, and to keep that basis intact as the design develops.",
    applications: [
      {
        heading: "Brownfield modification on operating plant",
        body:
          "Brownfield work is constrained by what already exists, and the record of it is frequently incomplete. We begin by capturing verified as-built geometry — laser scan where access allows, otherwise surveyed dimensions and manual verification — so the design is built against the asset rather than against a drawing set of uncertain vintage. Tie-in points are engineered as discrete packages with their own isolation, dimensional tolerance and outage requirements, so a single late clash does not propagate through the wider modification. Clash detection runs continuously against the verified model, and any deviation is raised as a query rather than resolved informally in the field.",
      },
      {
        heading: "Debottlenecking and capacity uplift",
        body:
          "Incremental capacity is usually won from existing equipment rather than new builds: relieving a hydraulic constraint, altering a heat exchange duty, or revising a control narrative. That work requires a disciplined re-rating of the affected equipment against its actual service conditions, not its design intent. We evaluate remaining life and margin under the proposed duty, document where the equipment's original certification no longer covers the new conditions, and identify what requires recertification before the change is approved. The output is a defined uplift with a clear statement of what the equipment can and cannot be asked to do.",
      },
      {
        heading: "Integrity-driven design change",
        body:
          "Inspection findings frequently require engineering intervention rather than a like-for-like repair — a corroded line re-routed or re-supported, a support detail redesigned after a foundation survey, or a vessel affected by a fitness-for-service assessment. We take the inspection data as the design input, which means the NDT results, the coded assessment and the resulting drawing all reference the same finding and are traceable to each other. Where a repair returns an item to service under API 579 rather than to its original code, that distinction is documented explicitly rather than left implicit.",
      },
      {
        heading: "Regulatory and code-driven upgrade",
        body:
          "Regulatory change, client standard updates and periodic re-certification all generate design scope that must be delivered without disturbing production. We translate the requirement into a defined change list, prioritise by risk and by the outage each item needs, and stage the work so that safety-critical changes proceed first. Where a requirement conflicts with an operating constraint, the conflict is raised with the client as a documented technical position rather than absorbed into a compromised design.",
      },
    ],
    challenges: [
      {
        issue:
          "Existing drawings do not match the asset, so early design is invalidated once construction begins.",
        response:
          "We verify critical dimensions and interfaces on site before design progresses past concept. Laser scanning or surveyed measurement replaces assumed geometry on anything that carries an interface, and discrepancies are raised as formal queries while there is still time to absorb them in the design rather than in the field.",
      },
      {
        issue:
          "Late design changes issued during construction, when the cost of change is at its highest.",
        response:
          "Design freezes are agreed by area rather than for the whole project, and each freeze carries a written change-control route. Changes raised after a freeze are assessed for construction impact before acceptance, so the decision to proceed is made consciously rather than by default.",
      },
      {
        issue:
          "Owner standards, project specifications and code requirements pull the design in different directions.",
        response:
          "A project-specific standards register is produced at kick-off, recording the precedence where requirements conflict. Every discipline works to a single agreed reference, and conflicts are resolved once rather than rediscovered by each designer.",
      },
    ],
    engagement:
      "If you have a modification, an inspection finding, an integrity concern or a design package that needs independent verification, send the drawing set, survey data or inspection report. A technical lead reviews the material and comes back with a scope, the constraints we can see, and a named engineer who would carry it. For larger packages we will hold a short scoping call with your operations and integrity teams before quoting, because the technical basis is usually clearer after thirty minutes with the people who run the asset.",
    image: { slot: "IMG-SVC-D-01", ratio: "16:10", brief: "Senior technical engineer inspecting industrial facility piping", src: "/images/expert.webp" },
  },
  "industrial-support": {
    overview:
      "Planned maintenance, fabrication support, and dependable site services with full logistics. Crews arrive certified, tooled, and briefed — and leave the site cleaner than they found it.",
    intro:
      "Industrial plants do not stop for contractors. This line exists to fit high-quality maintenance and fabrication into the windows a running plant can actually give: short, tightly sequenced, and unforgiving of missing tooling. We arrive with the spares, the equipment and the permits already organised.",
    scope: [
      "Preventive, predictive, and corrective maintenance programmes",
      "Fabrication and weld management to ASME IX",
      "Machining, fitting, and mechanical refurbishment",
      "Scaffolding, rigging, and access provision",
      "Equipment supply, spares management, and site logistics",
      "Camp, facility, and site support services",
    ],
    capabilities: ["Maintenance", "Fabrication", "Logistics", "Site services", "ASME IX welding", "NDT", "Scaffolding"],
    steps: [
      "Assess — audit equipment condition, criticality and spare holdings.",
      "Engineer — plan windows, permits and access before mobilisation.",
      "Execute — deliver with QA gates and daily progress reporting.",
      "Sustain — trend failures and feed improvements back into the plan.",
    ],
    subservices: [
      { name: "Planned Maintenance", desc: "Scheduled preventive and predictive maintenance across static and rotating equipment." },
      { name: "Shutdown Support", desc: "Mechanical labour, tooling and supervision supplied into client-managed outages." },
      { name: "Fabrication & Welding", desc: "Structural and pipe fabrication with qualified procedures, welder certification and full traceability." },
      { name: "Machining & Refurbishment", desc: "On-site and workshop machining, shaft and seal refurbishment, and component reclamation." },
      { name: "Scaffolding & Access", desc: "Designed scaffolding, rigging and access solutions for maintenance at height." },
      { name: "Site Logistics", desc: "Material control, warehousing, transport and camp support so crews stay productive." },
    ],
    standards: ["ASME IX", "ASME B31.3", "AWS D1.1", "ISO 9001", "API 570"],
    equipment: ["Certified welding sets and welding positioners", "On-site machining and line-boring equipment", "Designed scaffolding systems", "Vibration analysis and thermography instruments"],
    sectors: ["Oil & gas", "Manufacturing", "Food and beverage", "Cement and heavy industry"],
    qa: "Welding is controlled at procedure level: every joint is traceable to a qualified WPS, a certified welder and a recorded inspection result. Dimensional checks are signed at each stage rather than at completion. Spares are verified against specification before installation, not after.",
    outcomes: [
      "Shorter maintenance windows through pre-staging",
      "Welding traceability that survives audit",
      "Fewer repeat failures through trend analysis",
    ],
    why:
      "In a running plant, maintenance is not a technical problem first — it is a scheduling one. The window is short, the permit board is full, and an hour lost to a missing tool or an undocumented spares decision is an hour that cannot be recovered. The plants that consistently come out of an outage on time are the ones that treated preparation as part of the work rather than a prelude to it. We plan maintenance around the windows a live plant can genuinely give, arrive with the spares, tooling and permits already organised, and leave behind evidence that the work was done to specification.",
    applications: [
      {
        heading: "Continuous process plants",
        body:
          "Refineries, gas processing and petrochemical plants generate maintenance demand against a base load that cannot stop. We support these operations with scheduled preventive campaigns on static and rotating equipment, corrective intervention between runs, and mechanical labour supplied into client-managed outages. Equipment is assessed for criticality first so that spares, tooling and supervision are concentrated on the failure modes that would actually interrupt production, rather than spread evenly across the plant.",
      },
      {
        heading: "Discrete and batch manufacturing",
        body:
          "Manufacturing sites run on predictable throughput rather than a continuous stream, which makes planned maintenance cheaper to schedule but less forgiving when it slips. We plan campaigns around production blocks, pre-stage replacement components against the bill of materials, and sequence work so each line returns to production as soon as its own scope is complete rather than waiting for the whole block to finish. Fabrication and machining support is available on site, which avoids the turnaround delay that comes from sending a failed component out for repair.",
      },
      {
        heading: "Utilities and support systems",
        body:
          "Utility systems — compressed air, cooling water, effluent treatment, boilers, power distribution — fail in ways that propagate across a plant rather than remaining local. We maintain them on condition-based intervals, with vibration analysis, thermography and oil analysis establishing the actual state of each item instead of relying on a calendar. Findings are written back into the plan, so an adverse trend moves an inspection forward rather than waiting for the next scheduled overhaul.",
      },
      {
        heading: "Fabrication supply for construction and maintenance",
        body:
          "Workshop and on-site fabrication supports both maintenance and small construction packages: pipe spools, structural frames, skids, trays and support steel. Fabrication runs under qualified procedures with welder certification matched to the process, and every joint is traceable through to its inspection record. Prefabrication off the critical path is what allows a short site window to be used for installation rather than for cutting and fitting.",
      },
    ],
    challenges: [
      {
        issue:
          "The outage window contracts during planning, but the workscope does not.",
        response:
          "Work is sequenced by duration and by dependency rather than listed by area, so the effect of a shortened window is visible in advance. Scope that genuinely cannot be completed is identified early and staged into the next campaign, instead of being compressed into work that ends up incomplete and undocumented.",
      },
      {
        issue:
          "Critical spares identified late, or substituted with components that do not match the original specification.",
        response:
          "Spares are verified against the equipment data sheet and material certificate before mobilisation, not after delivery to site. Where an equivalent is proposed, the substitution is documented with the basis for acceptance so that it can be reviewed by the responsible engineer rather than accepted at the store door.",
      },
      {
        issue:
          "Multiple contractors competing for the same access, crane, permit area or supervisor.",
        response:
          "A single integrated schedule is agreed with the client covering all contractors on the workfront, with shared access and lifting conflicts resolved before mobilisation. Simultaneous operations are planned rather than managed reactively at the permit board.",
      },
    ],
    engagement:
      "Send us the plant, the equipment list, or the outage plan and the window you are working to. We will come back with a proposed work breakdown, the resource profile we think the window needs, and the tooling and spares we would expect to stage in advance. For an ongoing maintenance requirement we can start with a short condition and criticality survey, which gives both sides a factual basis for scoping the campaign properly.",
    image: { slot: "IMG-SVC-D-02", ratio: "16:10", brief: "Specialized pipeline welding and fabrication", src: "/images/welding.webp" },
  },
  "critical-operations": {
    overview:
      "Operations support for live plants: shutdowns and turnarounds, commissioning, and asset integrity programmes that keep production safe and predictable.",
    intro:
      "Critical operations is the line that runs when the cost of getting it wrong is measured in production days. Turnarounds, commissioning and integrity work all share one property: the window is fixed and the consequence of overrun is immediate. Our method is built around that reality.",
    scope: [
      "Turnaround and shutdown planning, management and execution",
      "Pre-commissioning, commissioning and start-up support",
      "Shift operations and production support personnel",
      "Risk-based inspection and asset integrity programmes",
      "Simultaneous-operations planning and permit governance",
      "Readiness reviews and operational readiness assurance",
    ],
    capabilities: ["Turnarounds", "Commissioning", "Asset integrity", "Operations", "RBI", "Permit governance"],
    steps: [
      "Assess — readiness review, risk register, and critical-path definition.",
      "Engineer — sequence workfronts, permits and resources against the window.",
      "Execute — run the permit board and control the critical path shift by shift.",
      "Sustain — close punch lists, trend KPIs, and capture lessons for the next window.",
    ],
    subservices: [
      { name: "Turnaround Management", desc: "End-to-end shutdown planning and execution, from readiness review to mechanical completion." },
      { name: "Pre-Commissioning & Commissioning", desc: "System-level flushing, testing, loop checks and start-up support with documentation moving alongside the work." },
      { name: "Asset Integrity Programmes", desc: "Risk-based inspection planning, anomaly management and remaining-life assessment." },
      { name: "Operations Support", desc: "Experienced shift personnel embedded into client operating teams during peak periods." },
      { name: "Readiness Assurance", desc: "Independent assessment of spares, procedures, competence and permits before the clock starts." },
    ],
    standards: ["API 570", "API 579-1 / ASME FFS-1", "API 580 / 581 (RBI)", "ISO 45001 practice", "ASME B31.3"],
    equipment: ["Turnaround planning and scheduling software", "Loop calibration and test sets", "Hydrostatic and pneumatic test equipment", "Condition monitoring and vibration analysis kits"],
    sectors: ["Refining", "Petrochemical", "Gas processing", "Power generation"],
    qa: "Turnaround quality is managed through inspection and test plans agreed before mobilisation and closed by milestone, not by area. Every system is signed over through a formal handover chain, and punch items are tracked to zero rather than waived. Commissioning documentation is produced with the work so start-up has no documentation backlog.",
    outcomes: [
      "Predictable shutdown windows with a controlled critical path",
      "Start-up without documentation backlog",
      "Integrity programmes that extend safe operating intervals",
    ],
    why:
      "Turnarounds, commissioning and integrity work share a single property: the window is fixed, and the cost of overrunning it is immediate and measurable in production. These are not tasks that can be allowed to run late while the client absorbs the delay. The work has to be planned to the point where execution is the only remaining variable, and it has to be controlled during execution by people who can see the critical path and act on it in the same shift. That is the discipline this line is built around.",
    applications: [
      {
        heading: "Planned shutdowns and major turnarounds",
        body:
          "Turnarounds are the largest single commitment a plant makes in most years. We manage them from readiness review through mechanical completion: defining the critical path, sequencing workfronts so they genuinely run in parallel, and controlling permits, lifting and resource allocation across every contractor on site. The readiness review is deliberately unsentimental — spares are physically confirmed, isolation plans are walked down, vendor packages are chased to a delivery date with a named contact, and permit volumes are checked against the real workfront count before the clock is allowed to start.",
      },
      {
        heading: "Commissioning and start-up",
        body:
          "Commissioning is most reliable when it is treated as a continuation of construction rather than a separate phase that begins at handover. Systems are flushed, dried, pressure tested, loop checked and functionally tested as their workfronts complete, with documentation produced alongside the work. Loop checks are signed off by system rather than by area, because area-based sign-off produces a record that is orderly in the middle and unresolved at every boundary — which is precisely where start-up problems originate.",
      },
      {
        heading: "Asset integrity programmes",
        body:
          "Integrity programmes turn inspection data into a defensible operating decision. We develop risk-based inspection plans that concentrate examination on the failure modes that matter for the specific service, grade anomalies against coded criteria, and maintain the register that carries each finding to closure. Findings are closed with a verifier signature rather than a verbal agreement, and each one is tracked against the asset record so it can be found again at the next campaign instead of being rediscovered from scratch.",
      },
      {
        heading: "Operations and readiness support",
        body:
          "Where a client's own operating team is stretched — during a peak campaign, a ramp-up or a handover — we supply experienced shift personnel, pre-startup safety review facilitation and readiness assurance. Readiness assurance examines the things that are easy to assume: procedures issued and understood, competence records current, spares on the shelf, emergency response rehearsed and permits able to be produced at the rate the work requires. It is a check performed before the plant is committed rather than after.",
      },
    ],
    challenges: [
      {
        issue:
          "The shutdown window overruns and the plant stays down.",
        response:
          "The critical path is defined and resourced separately from the general workfront plan, and progress against it is reviewed shift by shift rather than weekly. Where a critical-path activity slips, scope elsewhere is adjusted inside the same shift to protect the finish date, rather than discovered at the end as an overrun.",
      },
      {
        issue:
          "Documentation assembled after the plant restarts, leaving the asset operating on assumption.",
        response:
          "Inspection and test plans are closed at each milestone and photographic evidence is uploaded the same shift. Handover then becomes an assembly step rather than an investigation, so the dossier exists when the plant is already running.",
      },
      {
        issue:
          "Simultaneous operations create conflict between live production and shutdown work.",
        response:
          "A SIMOPS register identifies every interface between ongoing operations and turnaround scope, with agreed controls for each. Interfaces are reviewed at shift handover, so a change in operating condition on the live side is reflected in the shutdown permit before the crew works, not after.",
      },
    ],
    engagement:
      "For a turnaround or commissioning package, the useful first conversation is about the window and the constraint, not the scope — we would rather know early that the schedule has a fixed plant-run commitment behind it. Send the outline worklist, the target dates and the operating constraints. We will respond with a readiness assessment, an initial critical-path view and the mobilisation profile the window implies. Integrity programmes can start with an inspection data review before any field work is committed.",
    image: { slot: "IMG-SVC-D-03", ratio: "16:10", brief: "Night shift operations, control room glow", src: "/images/Night%20shift%20operations,%20control%20room%20glow.webp" },
  },
  infrastructure: {
    overview:
      "Civil, mechanical, and structural works with full site development — foundations to finishing, delivered under one accountable contract.",
    intro:
      "Civil and structural work is judged slowly: defects show up years later and in public. That shapes how we build. Materials are tested rather than assumed, compaction is verified, and the as-built record is produced as we go so it reflects what was actually built.",
    scope: [
      "Earthworks, grading, and site preparation",
      "Reinforced concrete foundations and structures",
      "Structural steel supply, fabrication, and erection",
      "Mechanical installation and equipment setting",
      "Roads, drainage, and external works",
      "Site development including utilities and services",
    ],
    capabilities: ["Civil", "Structural", "Mechanical", "Site development", "Foundations", "Steel erection"],
    steps: [
      "Assess — geotechnical review and site survey.",
      "Engineer — stage the build sequence around ground and season.",
      "Execute — pour, erect, install, with testing at each stage.",
      "Sustain — snag, certify, and hand over as-built records.",
    ],
    subservices: [
      { name: "Earthworks & Site Preparation", desc: "Clearing, cut and fill, grading and compaction to engineered platform levels." },
      { name: "Foundations & Concrete", desc: "Reinforced concrete works with tested materials and verified compaction beneath every foundation." },
      { name: "Structural Steel", desc: "Supply, fabrication and erection of steel frames with full weld and material traceability." },
      { name: "Mechanical Installation", desc: "Equipment setting, alignment, grouting and mechanical completion." },
      { name: "Roads & Drainage", desc: "Access roads, hardstanding, surface water drainage and external works." },
      { name: "Site Services", desc: "Water, power, communications and utility infrastructure distribution across the site." },
    ],
    standards: ["BS 8110 / Eurocode 2", "BS 5950 / Eurocode 3", "AWS D1.1", "Project-specific civil specification"],
    equipment: ["Earthmoving and compaction plant", "Concrete batching and placement equipment", "Mobile cranes for steel erection", "Survey total stations and as-built capture"],
    sectors: ["Industrial parks", "Utilities", "Oil & gas facilities", "Commercial development"],
    qa: "Concrete is verified by cylinder and cube testing before a stage is released. Compaction beneath foundations is proven by plate load or density testing rather than assumed from method. Steel carries mill certificates and weld maps. The as-built drawing set is maintained during construction so handover records describe the asset as built.",
    outcomes: [
      "Materials verified before they are buried",
      "As-built records that match the constructed asset",
      "Programmes staged around ground conditions and season",
    ],
    why:
      "Civil and structural work is judged on a longer horizon than almost any other discipline. A defect buried under a foundation or concealed behind a finished surface will not appear for years, and when it does it belongs to whoever built it. That asymmetry shapes how the work should be executed: materials proven rather than assumed, compaction verified rather than inferred from method, and the as-built record produced as the work proceeds so that it describes the asset that was actually built rather than the asset that was drawn.",
    applications: [
      {
        heading: "Industrial parks and plant site development",
        body:
          "Site development packages combine earthworks, drainage, hardstanding, foundations, structural frames and the buried services that tie the site together. The sequencing problem dominates: ground must be proven before foundations are poured, and services must be installed before the surfaces that will cover them. We stage the build so that buried work completes ahead of the elements that would otherwise have to be opened again, and maintain a services coordination drawing that is updated as each line is installed.",
      },
      {
        heading: "Oil and gas facility civil works",
        body:
          "Facility civil works carry the additional constraint of live plant alongside construction — roads that must remain open, drainage that cannot be interrupted, and excavation that must be planned around buried hydrocarbon or utility lines. We require buried service records and permit-to-excavate discipline before any ground is opened, and where records are absent we locate services physically rather than proceeding on assumption. Structures adjacent to operating plant are designed and erected with construction methods that respect the separation distances required.",
      },
      {
        heading: "Roads, drainage and external works",
        body:
          "Roads, hardstanding and surface water drainage determine how a site performs in the wet season, which in this region is the real test of a civil package. Design and construction are staged around the seasonal water table, with drainage capacity checked against the actual catchment rather than a nominal intensity. Sub-base and compaction verification is carried out by test at each layer, because a road that fails at its sub-base will not be rescued by the wearing course above it.",
      },
      {
        heading: "Structural steel and mechanical installation",
        body:
          "Structural steel supply and erection, equipment setting, alignment and grouting complete the build from the ground up. Steel is delivered against mill certificates and erected to an agreed tolerance, with weld maps maintained through fabrication. Equipment is set and aligned to vendor tolerance, grouted and recorded, so that the mechanical completion of a foundation is demonstrated by measurement rather than asserted at handover.",
      },
    ],
    challenges: [
      {
        issue:
          "Ground conditions are worse than the geotechnical report suggested.",
        response:
          "The programme is staged so that foundations can be revised without invalidating work already completed, and a ground-condition review is held once excavation exposes the actual strata. Where treatment is required, it is designed and documented as a change before construction proceeds over it.",
      },
      {
        issue:
          "The wet season interrupts earthworks and concreting.",
        response:
          "Seasonal risk is treated as a planning input rather than a weather event. Earthworks are front-loaded where the programme allows, and concrete placement is scheduled with curing protection planned in advance so a week of rain does not become a month of delay.",
      },
      {
        issue:
          "Long-lead structural steel and specialist materials slip, threatening the erection sequence.",
        response:
          "Procurement status is tracked against the erection sequence rather than against the purchase order date, so a slipping delivery is visible while it can still be re-sequenced. Where necessary, erection order is changed to use steel that has arrived rather than waiting for the member the sequence originally assumed.",
      },
    ],
    engagement:
      "Send us the site plan, the geotechnical information available and the operating constraints on the ground. We will come back with a build sequence, the testing regime we would apply at each stage, and the seasonal and access assumptions the programme depends on. For work inside an operating facility we will also ask for buried service records early, because that is the single most common cause of a civil programme losing its first month.",
    image: { slot: "IMG-SVC-D-04", ratio: "16:10", brief: "Heavy site excavation and earthworks in oilfield", src: "/images/excavator.webp" },
  },
  "oil-gas-support": {
    overview:
      "Upstream, midstream, and downstream technical services for operators: wells, pipelines, terminals, and refineries — supported by HSE discipline on every task.",
    intro:
      "Hydrocarbon work carries two constants: the product is hazardous, and the asset usually cannot be shut down for you. Our oil and gas line is built to work inside those constraints — live-line where possible, tightly planned outages where not, and evidence at every step.",
    scope: [
      "Upstream well-site, flow-station, and gathering support",
      "Pipeline construction, inspection, repair, and maintenance",
      "Terminal and refinery mechanical support",
      "Metering, proving, and flow assurance assistance",
      "Tank inspection, repair, and integrity services",
      "Commissioning and decommissioning support",
    ],
    capabilities: ["Upstream", "Midstream", "Downstream", "Terminals", "Pipeline integrity", "Metering"],
    steps: [
      "Assess — baseline the asset and confirm operating constraints.",
      "Engineer — specify the intervention against the applicable code.",
      "Execute — deliver under permit, with hydrocarbon-freeing proven.",
      "Sustain — monitor, report, and recommend the next interval.",
    ],
    subservices: [
      { name: "Upstream Field Support", desc: "Well-site and flow-station support, gathering system maintenance and production facility works." },
      { name: "Pipeline Construction & Repair", desc: "New-build pipeline, hot work and live-line repairs, coating rehabilitation and right-of-way works." },
      { name: "Pipeline Integrity", desc: "In-line inspection, direct assessment, anomaly grading and fitness-for-service assessment." },
      { name: "Terminal & Refinery Support", desc: "Mechanical maintenance, tank work and static equipment services on operating facilities." },
      { name: "Metering & Proving", desc: "Fiscal metering installation, replacement, proving and flow computer verification." },
    ],
    standards: ["ASME B31.4 / B31.8", "API 1104", "API 570", "API 653", "API 579-1 / ASME FFS-1", "API 6A / 6D"],
    equipment: ["In-line inspection tooling (MFL, caliper)", "Live-line repair sleeve systems", "Orbital welding and pipeline welding sets", "Certified meter proving equipment"],
    sectors: ["Upstream operators", "Midstream pipeline operators", "Refiners", "Terminal operators"],
    qa: "All hydrocarbon work is governed by proven gas-free certification before hot work, with independent verification. Weld quality is confirmed by NDT to API 1104 or ASME IX as applicable, with repair rates tracked. Integrity findings are graded against coded criteria and closed with a verifier signature, not a verbal agreement.",
    outcomes: [
      "Interventions completed without unplanned production loss",
      "Integrity findings closed and traceable",
      "Metering accuracy verified against certified reference",
    ],
    why:
      "Hydrocarbon work carries two constants that shape every decision: the product is hazardous, and the asset is usually either hazardous or live — and frequently both. A refinery distillation unit, a gathering line and a loading terminal each present that constraint differently, but the underlying requirement is the same. Every intervention must be planned around proven isolation and gas-freeing, executed by crews whose competence is matched to the specific task, and documented at a standard that satisfies a regulator as well as the client. Working to those standards is what determines whether an intervention returns an asset to reliable service or simply postpones the next failure.",
    applications: [
      {
        heading: "Upstream — well-site, flow-station and gathering systems",
        body:
          "Upstream operations generate a continuous demand for maintenance on equipment that cannot easily be taken out of service: wellheads and Christmas trees, flowlines and manifolds, separators, test separators, pumps, prime movers and the instrumented control systems that tie them together. We provide mechanical and instrumentation support to these facilities, including flowline repair and clamp or sleeve intervention, separator internals work, pump and valve overhaul, and the commissioning support required when a well or a flow-station is brought online. Because these assets are typically remote and unmanned for much of their cycle, we favour repairs that restore mechanical integrity definitively over temporary measures that require repeated attendance — and where a temporary repair is the right answer, we state its design life explicitly.",
      },
      {
        heading: "Midstream — pipelines, pump stations and compression",
        body:
          "Midstream infrastructure is judged by throughput and by integrity, and the two are connected: a pipeline operating below its design pressure because of a known anomaly is losing revenue every day. Our pipeline work covers construction and tie-in, hot work and live-line repair, coating rehabilitation, right-of-way maintenance and above-ground installation at pump and compressor stations. Integrity work follows a defined progression — in-line inspection where the line is piggable, direct assessment where it is not, anomaly grading against coded criteria, and a fitness-for-service assessment where a defect must be evaluated rather than simply repaired. Each finding is held on the asset register and closed with a verified disposition, which is what allows the next inspection interval to be argued from evidence rather than from precedent.",
      },
      {
        heading: "Downstream — terminals, refineries and product facilities",
        body:
          "Downstream assets combine high consequence with high mechanical complexity. We support refinery process units and utility systems, tank farms and loading facilities with mechanical maintenance, static and rotating equipment overhaul, tank inspection and repair to API 653, and piping modification work. Terminal operations bring their own discipline: product quality and custody transfer depend on metering accuracy, so fiscal and allocation metering installation, proving and flow computer verification are carried out against certified references rather than against in-service comparison. Loading arms, marine systems and vapour recovery equipment are maintained on condition-based intervals because failure at a loading point stops revenue with no warning.",
      },
      {
        heading: "Integrity, inspection and asset life extension",
        body:
          "As fields and facilities mature, the commercial question moves from maintaining the asset to extending its life safely. We support that through inspection engineering, NDT programming, risk-based inspection plans and remaining-life assessment, combined with the physical repair capability to act on the results. The value of combining assessment and repair is that the finding, the engineering disposition and the repair record sit in one traceable chain — which is exactly what a regulator will ask to see when the question is why an ageing asset is still permitted to operate.",
      },
    ],
    challenges: [
      {
        issue:
          "Hydrocarbon-bearing equipment cannot simply be opened for inspection or repair.",
        response:
          "Every intervention begins from a proven isolation: positive isolation by physical disconnection or spade rather than valve closure alone, followed by gas-free certification by an independent verifier before any hot work or entry is permitted. Where production cannot stop, we plan the work as a staged or live-line operation with the specific technique stated in the method statement rather than implied.",
      },
      {
        issue:
          "Corrosion and cracking appear in locations the inspection plan did not anticipate.",
        response:
          "Inspection intervals and locations are set from risk-based assessment of the actual service — product, temperature, flow regime and history — and findings are used to update the plan rather than only to schedule a repair. A repeated anomaly type in one service is treated as a signal that the assessment of that circuit was wrong, not as a series of isolated defects.",
      },
      {
        issue:
          "Regulatory and client documentation requirements are extensive and reviewed retrospectively.",
        response:
          "The evidence chain — permits, gas-free certification, NDT reports, material and weld traceability, calibration records and as-builts — is assembled as the work proceeds and issued as a single completion dossier. Producing it during the work removes the reconstruction exercise that otherwise follows a compliance review.",
      },
    ],
    engagement:
      "Send us the facility type, the system or line in question, and the operating constraint you are working within — product, pressure, whether the asset can be isolated, and how long an interruption can be tolerated. A technical lead will respond with the intervention approach, the isolation and certification requirements we would expect to apply, and the documentation that will be issued at close. For pipeline integrity work, the useful starting point is the most recent inspection data and the current operating envelope.",
    image: { slot: "IMG-SVC-D-05", ratio: "16:10", brief: "Hydrocarbon pipeline corridor leading to refinery", src: "/images/pipeline-display.webp" },
  },
  "hse-compliance": {
    overview:
      "Safety management systems, audits, workforce training, and certification support — built to the slogan on our billboard: Safety First. Safety for Me. Safety for All.",
    intro:
      "Safety systems fail quietly: a permit completed after the fact, a toolbox talk with no hazard raised, an audit that finds nothing because it was designed to. Our HSE and compliance line is built to make the system produce evidence rather than paperwork — and to hold up when a regulator or a client auditor examines it.",
    scope: [
      "HSE management systems development, aligned to ISO 45001 and ISO 14001",
      "Quality management systems aligned to ISO 9001",
      "Independent audits, gap assessments and close-out support",
      "Competence-based workforce training and certification",
      "Incident investigation, root cause analysis and lessons learned",
      "Certification readiness and third-party audit support",
    ],
    capabilities: ["Audits", "Training", "Systems", "QA/QC", "ISO 9001", "ISO 14001", "ISO 45001"],
    steps: [
      "Assess — baseline the existing system and safety culture.",
      "Engineer — write the procedures, plans and competence framework.",
      "Execute — train, drill and audit against what was written.",
      "Sustain — trend leading indicators and re-audit on a fixed cycle.",
    ],
    subservices: [
      { name: "HSE Management Systems", desc: "Policy, procedures and controls developed against ISO 45001 and ISO 14001 requirements." },
      { name: "Quality Management (QA/QC)", desc: "Quality systems, inspection and test plans, and non-conformance management to ISO 9001." },
      { name: "Independent Audits", desc: "Scheduled and unannounced audits with findings graded by risk and closed against evidence." },
      { name: "Workforce Training", desc: "Induction, permit-to-work, working at height, confined space, and role-specific competence training." },
      { name: "Incident Investigation", desc: "Structured investigation with root cause analysis and corrective actions tracked to closure." },
      { name: "Certification Readiness", desc: "Gap closure, documentation preparation and support through third-party certification audits." },
    ],
    standards: ["ISO 45001", "ISO 14001", "ISO 9001", "API Q1 / Q2 (reference)", "NOSH / local regulatory practice"],
    equipment: ["Audit and inspection management systems", "Training management and competence records", "Incident reporting and investigation tools", "Environmental and occupational monitoring instruments"],
    sectors: ["Oil & gas", "Industrial", "Construction", "Infrastructure"],
    qa: "Our position on certification is deliberately precise: we build and audit systems to ISO 9001, ISO 14001 and ISO 45001 requirements, and we support clients through third-party certification. Any certificate we hold is issued to a specific scope — we publish the scope, the issuing body and the expiry date, and we do not imply certification that has not been granted.",
    outcomes: [
      "Systems that produce evidence, not paperwork",
      "Findings closed against verified evidence",
      "Audit-ready documentation",
    ],
    why:
      "Safety systems fail quietly. A permit signed after the task began, a toolbox talk that raised no hazard, an audit that found nothing because it was scoped to find nothing — none of these announce themselves as failures. They accumulate as an absence of evidence until the point where evidence is required, and that point is usually an incident investigation or a regulator's visit rather than a convenient one. Our HSE and compliance line is built on a single principle: the system has to produce evidence from the work, not a paper trail reconstructed around it. That is also what makes a management system survive an external audit — the records either describe what happened or they do not.",
    applications: [
      {
        heading: "Management systems for operating contractors and facilities",
        body:
          "We develop health, safety, environmental and quality management systems against the requirements of ISO 45001, ISO 14001 and ISO 9001, written to the way the organisation actually works rather than to a generic template. That means procedure content matched to the plant and the task mix, risk assessment methods that a supervisor can apply at the workfront, and a documented interface between permits, isolations and inspection so the system holds together at the points where processes meet. A system that cannot be followed under time pressure will not be followed at all.",
      },
      {
        heading: "Independent audit and gap assessment",
        body:
          "Audits are only useful when they are independent of the operation being audited and scoped against a defined standard. We audit on a scheduled and unannounced basis, grade findings by risk rather than by convenience, and require closure to be demonstrated with evidence rather than with assurance. Gap assessments are used ahead of certification, mobilisation or a client qualification review, and produce an ordered remediation plan instead of an undifferentiated list of deficiencies.",
      },
      {
        heading: "Competence and workforce training",
        body:
          "Competence is the part of a safety system that cannot be documented after the fact. We deliver induction and site orientation, permit-to-work and lock-out/tag-out, working at height, confined-space entry, lifting and manual handling, first aid and emergency response, and role-specific technical training. Each record is held against the individual with its validity and the scheme under which it was granted, so that a crew roster can be checked against a task risk assessment before mobilisation rather than during it.",
      },
      {
        heading: "Incident investigation and organisational learning",
        body:
          "Investigations are structured in proportion to severity, with root cause analysis that reaches past the immediate cause to the conditions that allowed it. Corrective actions carry a named owner and a date, and are tracked to verified closure. The final step — issuing the lesson as a safety alert across active sites — is the one most often skipped, which is why the same failure recurs across different locations. We treat circulation of the lesson as part of the investigation rather than as optional follow-up.",
      },
    ],
    challenges: [
      {
        issue:
          "The management system exists but the site does not follow it.",
        response:
          "We audit against evidence from the workfront rather than against the procedure library. Where a procedure is consistently not followed, the first question is whether it is followable in the way the plant actually operates; the second is why non-conformance went unrecorded. Both answers improve the system, whereas enforcement alone tends to improve the paperwork.",
      },
      {
        issue:
          "Audits find nothing because they were scoped to find nothing.",
        response:
          "Audit scope and criteria are agreed before the audit and reported against afterwards, and auditors are independent of the area under review. Findings are graded by risk, and an audit with no findings on a high-consequence activity is treated as a scope question rather than as evidence of excellence.",
      },
      {
        issue:
          "Certification is claimed more broadly than the certificate supports.",
        response:
          "Certification is reported precisely — issuing body, scope and expiry — and never implied beyond the scope granted. Where a client requires certification we do not hold, that is stated plainly at the commercial stage rather than discovered at the audit.",
      },
    ],
    engagement:
      "Send us the standard you are being assessed against, the current procedures if they exist, and the timeline you are working to — a client qualification review, a certification audit or a mobilisation date. We will respond with a gap assessment scope and the audit or remediation sequence it implies. For training requirements, the useful input is the task list and the current competence records, so the gap is identified against actual work rather than against a generic course catalogue.",
    image: { slot: "IMG-SVC-D-06", ratio: "16:10", brief: "Certified CORVEX operations and HSE engineers", src: "/images/two-engineers.webp" },
  },
};

export const sectorsDetail = {
  "oil-gas": {
    name: "Oil & Gas",
    tagline: "Upstream, midstream and downstream — supported across the whole chain.",
    challenge:
      "Live hydrocarbons leave no room for error. Operators need contractors who plan every lift, permit every task, and hand back cleaner than they found it — while production continues around them.",
    response:
      "CORVEX embeds HSE into every workfront — from well-site support to refinery turnarounds — with certified crews, documented QA gates, and a permit discipline that survives independent audit.",
    detail:
      "Our oil and gas work spans field support and gathering systems through pipeline integrity to terminal and refinery mechanical services. The common thread is operating conditions: the asset is live, the window is short, and the documentation has to satisfy a regulator as well as the client. We plan interventions to be executed without unplanned production loss wherever the technique allows, and where a shutdown is unavoidable we compress it through off-site preparation and rehearsed sequences.",
    services: ["engineering-solutions", "critical-operations", "oil-gas-support", "hse-compliance"],
    capabilities: ["Pipeline integrity", "Turnarounds", "Fiscal metering", "Live-line repair", "Tank services", "HSE management"],
    overview: [
      "Oil and gas operators work inside a constraint that most industries do not face: the product is hazardous, and the asset is almost always running. A shutdown is not a convenience to be scheduled when the contractor is ready — it is a committed production loss that has to be justified, planned to the day and delivered inside a window that cannot slide. Everything we do in this sector is organised around that fact.",
      "Our work follows the hydrocarbon chain from the wellhead to the loading arm. At the upstream end, that means keeping remote, unmanned and ageing facilities mechanically sound with interventions that restore integrity definitively rather than deferring the problem. Through the midstream, it means pipeline construction, repair and integrity assessment with a defensible view of what the line can safely carry. Downstream, it means mechanical and static equipment support on refinery and terminal assets where the consequence of failure is measured both in safety and in revenue.",
    ],
    sections: [
      {
        heading: "Working on live and hazardous assets",
        paragraphs: [
          "The defining discipline in this sector is isolation. Every intervention begins from a proven state — positive isolation by physical disconnection or spade rather than valve closure alone — followed by gas-free certification issued by an independent verifier before any hot work, confined-space entry or intrusive maintenance is permitted. That sequence is not treated as paperwork to be completed around the work; it is what makes the work permissible at all.",
          "Where production genuinely cannot stop, the intervention is planned as a live-line or staged operation, and the technique is named in the method statement rather than implied. This distinction matters commercially as well as technically: a repair that can be executed without a shutdown is a different proposition from one that requires a committed outage, and the client should be able to see which is which before the scope is agreed.",
        ],
      },
      {
        heading: "Integrity as an operating decision",
        paragraphs: [
          "A pipeline, tank or pressure vessel does not have a single condition — it has an assessed condition against a defined set of loads, a documented history and a remaining life that can be calculated. Our integrity work is built to produce that assessment rather than an inspection report. In-line inspection where the line can be pigged, direct assessment where it cannot, anomaly grading against coded criteria, and a fitness-for-service evaluation where a defect has to be judged rather than simply cut out.",
          "The output that matters is a defensible operating envelope: what the asset may be asked to do, on what inspection interval, and which findings must be closed before the next campaign. That is what allows an operator to plan production with a known integrity position instead of discovering it during an unplanned outage.",
        ],
      },
      {
        heading: "Turnarounds and outage delivery",
        paragraphs: [
          "A major turnaround concentrates an entire year of accumulated maintenance risk into a fixed window. We manage them through the same readiness discipline that governs everything else in this sector: spares physically confirmed rather than listed, isolation plans walked down and proven, vendor packages chased to a delivery date with a named contact, and permit volumes checked against the real workfront count before mobilisation.",
          "During execution the critical path is resourced and reviewed separately from the general workfront plan, shift by shift. When a critical-path activity slips, scope elsewhere is adjusted inside the same shift to protect the finish date. That is what separates a turnaround that hands back early from one that discovers an overrun in its final week.",
        ],
      },
      {
        heading: "Metering, custody transfer and product quality",
        paragraphs: [
          "In downstream and terminal operations, metering is a commercial instrument as much as a technical one. Custody transfer points, allocation metering and fiscal measurement determine both revenue and disputes, and their accuracy has to be demonstrated rather than assumed. Installation, replacement and proving are carried out against certified reference equipment, with flow computers verified and the results documented against the meter's own record.",
          "Where metering accuracy has drifted, the consequence is usually commercial rather than visible. Periodic proving against a traceable reference, with tolerance limits stated and results retained, is what keeps measurement defensible when the figures are challenged.",
        ],
      },
    ],
    challenges: [
      {
        issue:
          "Ageing facilities where design documentation no longer matches installed condition.",
        response:
          "We verify as-built condition physically before engineering against it, and maintain the asset register as the single source of truth. Where the record and the asset disagree, the asset wins and the record is corrected — designing to a drawing of uncertain vintage is how brownfield projects fail.",
      },
      {
        issue:
          "Production commitments that leave almost no available outage.",
        response:
          "Interventions are assessed for live-line or staged execution before a shutdown is proposed, and off-site prefabrication is used to move as much work as possible off the critical path. Where an outage is unavoidable, its duration is reduced by rehearsing the sequence rather than by compressing it on the day.",
      },
      {
        issue:
          "Regulatory and client assurance requirements arriving at the point of handover.",
        response:
          "The evidence chain is assembled as the work proceeds — permits, gas-free certification, NDT records, traceability, calibration and as-builts — and issued as one completion dossier. Reconstruction after the plant restarts is the failure mode we design the process to avoid.",
      },
    ],
    engagement:
      "Tell us the asset, its condition and the operating constraint you are working inside — product, pressure, isolation availability and tolerable interruption. Send whatever exists: inspection data, drawings of uncertain vintage, an outage plan or a maintenance backlog. We will come back with an intervention approach, the integrity position we can establish from what is available, and the documentation that will close out the work.",
    image: { slot: "IMG-SECTOR-P-OG", ratio: "16:10", brief: "Offshore platform at dusk", src: "/images/Offshore%20platform%20at%20dusk.webp" },
  },
  industrial: {
    name: "Industrial",
    tagline: "Maintenance and engineering for plants that run around the clock.",
    challenge:
      "Plants that run around the clock cannot stop for contractors. Maintenance windows are short, spares decisions are made in advance, and every hour of downtime has a number attached to it.",
    response:
      "CORVEX plans shutdown windows to the hour, pre-stages spares and tooling, and executes with parallel workfronts under one permit board — so the window is used rather than discovered.",
    detail:
      "Industrial work is a scheduling problem as much as a technical one. We audit equipment criticality and spare holdings first, then plan maintenance around the windows the plant can genuinely give. Because our crews arrive with the right tooling and permits already organised, less of the window is spent preparing and more of it is spent executing. Post-outage, failure trends feed back into the next plan rather than being forgotten.",
    services: ["industrial-support", "engineering-solutions", "critical-operations", "hse-compliance"],
    capabilities: ["Planned maintenance", "Fabrication", "Machining", "Scaffolding", "Site logistics", "Commissioning"],
    overview: [
      "Industrial plants run on throughput, and every hour of downtime carries a number attached to it. The plants that perform well over a decade are not the ones that spend the most on maintenance — they are the ones that treat preparation as part of the work, decide maintenance scope from equipment condition and criticality rather than from the calendar, and close the loop afterwards so failure data informs the next campaign.",
      "Our industrial work spans process manufacturing, cement and heavy industry, utilities and support systems, and the general manufacturing base. In each case the operating problem is similar: short windows, competing demands on the same access and lifting resources, spares decisions that have to be made weeks before anyone is on site, and a plant that resumes production whether or not the documentation is complete.",
    ],
    sections: [
      {
        heading: "Maintenance planned from equipment condition",
        paragraphs: [
          "A calendar tells you when a task was last done, not what state it is in. We begin industrial engagements by establishing equipment criticality and current condition — through vibration analysis, thermography, oil analysis, performance trending and a review of failure history — and then set intervals from that evidence. The outcome is a maintenance plan weighted towards the items whose failure would actually stop the plant, rather than an even distribution of effort across everything on site.",
          "Condition data also changes what happens during an outage. Work is scoped from the current state of each item, so a campaign is neither over-specified for equipment that did not need attention nor under-scoped for a component whose trend was already adverse going into the window.",
        ],
      },
      {
        heading: "Executing inside a compressed window",
        paragraphs: [
          "Most industrial outages do not fail because the work is difficult. They fail because the window was spent preparing: waiting on a spares verification, a permit area, a scaffolding handover or a lifting slot. We pre-stage tooling, consumables, certified spares and permits before mobilisation so the crew arrives ready to execute, and we sequence the plan by duration and dependency rather than listing it by area.",
          "Parallel workfronts are set up with their own supervision and QA gate, integrated into a single schedule that accounts for shared access, crane allocation and simultaneous operations. Five workfronts that contend for one bottleneck are slower than two that do not, and the integrated schedule is what makes that visible before the crews arrive.",
        ],
      },
      {
        heading: "Fabrication, machining and on-site capability",
        paragraphs: [
          "Industrial maintenance generates a constant requirement for replacement components: pipe spools, brackets, structural members, machined parts and fabricated assemblies. Carrying fabrication and machining capability on site removes the delay of sending a failed component for external repair, which is frequently the single largest contributor to an extended outage.",
          "Fabrication runs under qualified procedures with welder qualification matched to the process, and each joint remains traceable through to its inspection record. Prefabrication off the critical path is what allows a short site window to be used for installation rather than for cutting and fitting.",
        ],
      },
      {
        heading: "Continuous improvement across campaigns",
        paragraphs: [
          "The most valuable output of an outage is not the completed worklist — it is the evidence about how the plant is actually failing. We trend failure modes, repeat findings and workfront performance back into the next plan, so the campaign that follows is scoped against demonstrated need rather than against the previous scope.",
          "The same principle applies to execution: workfront productivity, permit turnaround time and punch item categories are reviewed after each campaign. Facilities that do this consistently find their outage duration reducing over successive events without any reduction in scope.",
        ],
      },
    ],
    challenges: [
      {
        issue:
          "The window contracts during planning while the workscope stays unchanged.",
        response:
          "Work is sequenced by duration and dependency so the effect of a shortened window is visible in advance. Scope that cannot be completed in the time available is identified early and staged into the next campaign, rather than compressed into work that ends up incomplete.",
      },
      {
        issue:
          "Critical spares identified late or substituted without engineering acceptance.",
        response:
          "Spares are verified against the equipment data sheet and material certificate before mobilisation. Where an equivalent is proposed, the substitution carries a documented technical basis for acceptance rather than being accepted at the point of issue.",
      },
      {
        issue:
          "Repeat failures that are repaired each campaign but never resolved.",
        response:
          "Failure history is trended by equipment and by failure mode, and recurring causes are escalated for engineering review rather than scheduled again. The distinction between a repair that returned an item to service and a resolution that removed the failure mode is tracked explicitly.",
      },
    ],
    engagement:
      "Send us the plant type, the equipment list or the most recent outage report, and the window you are working to. We will come back with a condition and criticality view, a proposed work breakdown, and the resource and tooling profile the window implies. For a first campaign, an equipment criticality survey is a useful and low-commitment starting point — it establishes the factual basis for scoping the maintenance programme properly.",
    image: { slot: "IMG-SECTOR-P-IND", ratio: "16:10", brief: "Process plant interior, pipework", src: "/images/Process%20plant%20interior,%20pipework.webp" },
  },
  infrastructure: {
    name: "Infrastructure",
    tagline: "Civil and structural delivery for the systems economies run on.",
    challenge:
      "Civil works carry public accountability: budgets are scrutinised, programmes are visible, and defects live in the open for decades after the contractor has left.",
    response:
      "CORVEX delivers foundations, structures, and utilities with staged QA, certified materials, and handover dossiers that survive audit — because the record is built with the asset.",
    detail:
      "Infrastructure work is judged on a longer horizon than most construction. We treat testing and record-keeping as part of the build: compaction verified before foundations, concrete proven before release, steel traced to mill certificates, and as-builts maintained as the work proceeds. Programmes are staged around ground conditions and season rather than assuming ideal ones, which is what keeps a civil package on schedule through a wet season.",
    services: ["infrastructure", "engineering-solutions", "industrial-support", "hse-compliance"],
    capabilities: ["Earthworks", "Foundations", "Structural steel", "Mechanical installation", "Roads and drainage", "Site services"],
    overview: [
      "Infrastructure carries an accountability that most construction does not. Foundations, roads, drainage and structures are used by people who did not commission them, and a defect is not a contractual matter between two companies — it is visible, public and durable. The works also operate on the longest maintenance horizon of any discipline: a civil package is expected to perform for decades on the strength of what was buried during construction.",
      "That horizon determines method. Materials are proven by test rather than accepted on delivery, compaction beneath foundations is measured rather than inferred from the plant used, steel is traced to mill certificates and weld maps, and the as-built record is maintained during construction so that it describes the asset as built. Programmes are staged around ground conditions and season rather than assuming an ideal sequence.",
    ],
    sections: [
      {
        heading: "Earthworks, ground treatment and foundations",
        paragraphs: [
          "Everything above ground is only as trustworthy as what is beneath it. Earthworks are executed to engineered platform levels with cut and fill verified by density and plate load testing at each layer, so compaction is a measured result rather than a construction assumption. Where the exposed strata differ from the geotechnical investigation, the ground-condition review is held before further work proceeds over it, and any treatment is designed and documented as a change.",
          "Reinforced concrete is verified by cube and cylinder testing before a stage is released for loading, with concrete placement planned alongside curing protection so that a wet week does not become a structural question. Reinforcement is inspected before pour, and pours are recorded against the element they belong to.",
        ],
      },
      {
        heading: "Structural steel and mechanical completion",
        paragraphs: [
          "Structural steel is supplied against mill certificates, fabricated to an agreed weld map and erected to a defined tolerance, with dimensional checks signed at each stage rather than at completion. Where modification is required on site, the change is returned to the fabricator's engineering rather than improvised by the erection crew.",
          "Mechanical completion follows the same principle: equipment is set, aligned and grouted to vendor tolerance, with alignment records retained. A foundation that supports rotating equipment is only complete when the machine it carries has been measured into place, not when the concrete has cured.",
        ],
      },
      {
        heading: "Roads, drainage and site services",
        paragraphs: [
          "The performance of a civil package in this region is decided by how it handles water. Drainage capacity is checked against the actual catchment rather than a nominal intensity, and surfaces are constructed with sub-base verification at each layer, because a road that fails at its sub-base cannot be rescued by the wearing course above it.",
          "Buried services carry the highest risk of costly rework, since every one of them has to be opened again if it is installed out of sequence. A services coordination drawing is maintained and updated as each line goes in, and installation is sequenced ahead of the surfaces and structures that would otherwise cover it.",
        ],
      },
      {
        heading: "Working inside operating facilities",
        paragraphs: [
          "Civil work inside a live facility adds constraints that do not exist on a greenfield site: roads that must remain open, drainage that cannot be interrupted, and excavation in ground that may contain hydrocarbon or utility lines whose records are incomplete. Permit-to-excavate discipline is enforced before any ground is opened, and where records are absent or unreliable, services are located physically rather than assumed.",
          "Structures adjacent to operating plant are designed and erected with construction methods that respect the required separation distances, and lifting operations are planned against live plant rather than around it. The programme accounts for the fact that the facility keeps operating while the work proceeds.",
        ],
      },
    ],
    challenges: [
      {
        issue:
          "Ground conditions differ materially from the geotechnical report.",
        response:
          "Foundations are staged so that a revision does not invalidate completed work, and a ground-condition review is held as soon as excavation exposes the actual strata. Treatment is designed and documented as a change before construction proceeds over it.",
      },
      {
        issue:
          "Wet-season interruption to earthworks and concrete placement.",
        response:
          "Seasonal risk is treated as a planning input. Earthworks are front-loaded where the programme permits, and concrete placement is scheduled with curing protection designed in advance, so a week of rain does not become a month of programme loss.",
      },
      {
        issue:
          "Buried services discovered late or not recorded at all.",
        response:
          "Services coordination is maintained as a live drawing through construction, and where records are unreliable, lines are located physically before excavation. The cost of a survey is consistently lower than the cost of an interrupted facility.",
      },
    ],
    engagement:
      "Send us the site layout, any geotechnical information available, and the operating constraints that apply to the ground — access, buried services, live plant and the seasonal window you need to work within. We will respond with a build sequence, the testing regime we would apply at each stage, and the programme assumptions it depends on. For work inside an operating facility, we will ask for buried service records at the earliest point, because that is the most common cause of a civil package losing its first month.",
    image: { slot: "IMG-SECTOR-P-INF", ratio: "16:10", brief: "Bridge and highway works, daylight", src: "/images/Bridge%20and%20highway%20works,%20daylight.webp" },
  },
};

export const aboutPage = {
  intro:
    "CORVEX was built by engineers and technicians who spent their careers on the operating side of the fence — inside refineries, on pipelines, and on construction sites where the schedule was already committed. That background shapes how we work: we plan for the asset as it actually is, we write down our assumptions, and we do not treat a variation as somebody else's problem.",
  story: [
    {
      year: "2010",
      title: "Founded in the field",
      text: "CORVEX begins as a specialist maintenance support crew on industrial contracts, working inside client-managed shutdowns and learning how operating assets really behave.",
    },
    {
      year: "2014",
      title: "Engineering capability added",
      text: "Design and inspection services bring front-end scope in-house, so a survey can become a buildable drawing set without handing the problem to a third party.",
    },
    {
      year: "2019",
      title: "Multi-sector delivery",
      text: "Oil and gas, industrial, and infrastructure work are brought under a single HSE and quality system, with one standard applied across every sector.",
    },
    {
      year: "Today",
      title: "Regional delivery",
      text: "A head office plus regional hubs positioned close to client operations, with mobile crews that can mobilise across the region on short notice.",
    },
  ],
  mission:
    "To deliver technical services that keep critical operations running safely, precisely, and to the specification that was agreed.",
  vision:
    "A region where every energy and industrial asset is engineered, maintained, and operated to internationally recognised standards.",
  values: [
    "Professionalism",
    "Integrity",
    "Performance",
    "Safety",
    "Innovation",
  ],
  valueDetail: [
    { name: "Professionalism", desc: "Qualified people, documented process, and delivery we are willing to sign our name to." },
    { name: "Integrity", desc: "Honest scope, transparent reporting, and a willingness to say when something cannot be done in the window offered." },
    { name: "Performance", desc: "Output measured against the committed baseline, not against a revised one." },
    { name: "Safety", desc: "Stop-work authority held by everyone, exercised without consequence." },
    { name: "Innovation", desc: "New tools adopted where they make delivery safer, faster, or more traceable. Not for their own sake." },
  ],
  /**
   * Differentiators replace a placeholder leadership panel.
   * When approved headshots and names are available, a leadership
   * section can be restored separately.
   */
  differentiators: [
    {
      n: "01",
      name: "One contract. Full accountability.",
      desc: "We do not subcontract consequence. Engineering, execution, HSE, and quality sit under one team and one accountable manager. When something changes on site, the person who can respond is the same person who designed the plan.",
    },
    {
      n: "02",
      name: "Built for brownfield reality.",
      desc: "Our people come from operating companies and EPC contractors. We plan around the asset as it actually is: incomplete records, live services, tight windows, and clients who cannot afford unplanned downtime.",
    },
    {
      n: "03",
      name: "Evidence, not assurance.",
      desc: "We produce inspection records, QA dossiers, and as-built documentation as the work proceeds. At handover, the evidence exists. It is not assembled afterwards from memory.",
    },
    {
      n: "04",
      name: "Safety that survives independent audit.",
      desc: "Every site is audited on a fixed weekly cycle by personnel independent of that site. Findings are graded by risk, not by convenience, and closed against verified evidence.",
    },
  ],
  facts: [
    { k: "Founded", v: "2010" },
    { k: "Head office", v: "Lagos, Nigeria" },
    { k: "Service lines", v: "Six" },
    { k: "Sectors served", v: "Three" },
  ],
};

export const hsePage = {
  intro:
    "Safety is not a value statement on a wall; it is the accumulated result of how work is planned, permitted, and checked. Our HSE system is designed to produce evidence — permits raised before work, hazards recorded during it, and findings closed after it.",
  statement:
    "It is CORVEX policy to conduct all operations in a manner that protects the health and safety of our people, our clients' people, and the public; that minimises environmental impact; and that complies with applicable law and client requirements. No task is so urgent that it cannot be done safely, and every member of our workforce holds the authority to stop work without consequence.",
  policy: [
    "Every task is risk-assessed and permitted before it starts.",
    "Every worker holds stop-work authority, and exercises it without consequence.",
    "Every incident and near miss is reported, investigated, and learned from.",
    "Every worksite is independently audited on a fixed cycle.",
    "Every environmental impact is identified, controlled, and monitored.",
  ],
  pillars: [
    { n: "01", name: "Leadership visible", desc: "Supervisors on the tools, not behind desks. Site leadership observed daily, not assumed." },
    { n: "02", name: "Competence assured", desc: "Certified crews with verified, current records matched to the task risk assessment." },
    { n: "03", name: "Systems live", desc: "Permits, toolbox talks, and audits every shift — completed before work, not after." },
    { n: "04", name: "Learning loop", desc: "Near-miss reporting rewarded and lessons shared across sites, not filed." },
  ],
  training: [
    {
      name: "HSE induction and site orientation",
      detail: "Facility-specific induction covering site hazards, emergency arrangements, muster points and reporting routes.",
    },
    {
      name: "Permit-to-work and lock-out / tag-out",
      detail: "Raised on the issuing and receiving side, including isolation verification and permit closure discipline.",
    },
    {
      name: "Working at height and confined-space entry",
      detail: "Fall protection, access equipment, atmospheric testing, standby arrangements and rescue planning.",
    },
    {
      name: "First aid and emergency response",
      detail: "Role-based first aid, spill response, fire response and evacuation drills rehearsed on site.",
    },
    {
      name: "Hazard identification and risk assessment",
      detail: "Task-level assessment methods that a supervisor can apply at the workfront before work starts.",
    },
    {
      name: "Incident investigation and root cause analysis",
      detail: "Structured investigation, evidence handling and corrective action tracking to verified closure.",
    },
    {
      name: "Manual handling and lifting operations",
      detail: "Lift planning, rigging, load control and the roles required for a planned lift.",
    },
    {
      name: "Environmental awareness and spill response",
      detail: "Waste segregation, containment, bund management and first response to a release.",
    },
  ],
  riskManagement: [
    "Job hazard analysis completed and signed before every task.",
    "A task-based risk register maintained per workfront and reviewed at each shift handover.",
    "Simultaneous-operations planning where work affects live plant or occupied areas.",
    "Hierarchy of control applied in order: eliminate, substitute, engineer, administrate, then PPE.",
  ],
  incidentProcess: [
    "Immediate reporting — no-blame reporting culture with a target of same-shift notification.",
    "Preservation of the scene and immediate containment of any hazard.",
    "Structured investigation proportionate to severity, with root cause analysis.",
    "Corrective actions assigned an owner and a date, tracked to verified closure.",
    "Lessons distilled into a safety alert issued across all active sites.",
  ],
  environment: [
    "Waste segregation, tracking and disposal only through licensed handlers.",
    "Spill prevention and response plans maintained on every site with equipment on hand.",
    "Emissions and noise controls applied on all plant and temporary power.",
    "Environmental aspects and impacts identified per project, with mitigation agreed before mobilisation.",
  ],
  quality: {
    intro:
      "Quality and safety share a failure mode: both degrade when documentation is produced after the fact. Our QA/QC approach keeps inspection and test plans attached to the work, so evidence is generated as the work proceeds.",
    commitments: [
      "Inspection and test plans (ITPs) written per package and agreed before work starts.",
      "Hold points and witness points enforced — work does not proceed past an unclosed hold point.",
      "Non-conformance reporting with root cause analysis and verified disposition.",
      "Material certification and traceability retained for every delivered component.",
    ],
    standards: ["ISO 9001", "ISO 14001", "ISO 45001"],
  },
  compliance: [
    "Applicable local statutory and regulatory requirements are identified per project before mobilisation.",
    "Client-specific standards and specifications are incorporated into the project execution plan.",
    "Competence records, permits, and inspection evidence are retained and available for audit.",
    "Third-party certification is reported precisely: issuing body, scope, and expiry date — never implied beyond the scope granted.",
  ],
  downloads: [
    {
      title: "HSE Policy",
      desc: "Corporate health, safety and environment policy statement with commitments, hazard management, incident reporting and environmental protection.",
      href: "/downloads/corvex-hse-policy.pdf",
      meta: "PDF · 4 pages",
    },
    {
      title: "Capability Statement",
      desc: "Company overview, service lines, sectors served, delivery method, and quality and HSE framework.",
      href: "/downloads/corvex-capability-statement.pdf",
      meta: "PDF · 4 pages",
    },
    {
      title: "Quality Policy",
      desc: "QA/QC framework, inspection and test plan governance, and non-conformance management.",
      href: "/downloads/corvex-quality-policy.pdf",
      meta: "PDF · 2 pages",
    },
  ],
};

export const innovationPage = {
  intro:
    "Technology is only worth adopting if it makes delivery safer, faster, or more traceable. These are the tools that have earned their place in our method.",
  tools: [
    { name: "Digital inspections", desc: "Photo-tagged checklists synced from the field, so evidence exists at the moment of inspection rather than in a report days later." },
    { name: "Asset registers", desc: "A single source of truth for equipment data, so integrity findings attach to a specific asset rather than a general area." },
    { name: "Project controls", desc: "Earned-value tracking on every contract, giving an honest view of progress against the committed baseline." },
    { name: "QA dossiers", desc: "Traceable records from weld to handover, assembled as the work proceeds and issued at completion." },
    { name: "3D scan to model", desc: "Laser scanning of brownfield areas to verify as-built condition before modification design begins." },
    { name: "Condition monitoring", desc: "Vibration and thermography surveys feeding a predictive maintenance plan rather than a reactive one." },
    { name: "Digital permits", desc: "Electronic permit-to-work with built-in hold points and audit trail, reducing the gap between intent and record." },
    { name: "Remote support", desc: "Field technicians connected to engineering support, so a technical query is resolved on site instead of stopping the workfront." },
  ],
  approach: [
    "Adopt only what changes an outcome — a faster inspection is not an improvement if its evidence is weaker.",
    "Standardise across sites, so a lesson learned in one location transfers without re-invention.",
    "Keep the paper trail and the digital trail reconciled, because regulators and clients still ask for the former.",
  ],
};

export const careersPage = {
  intro:
    "We look for people who are comfortable being accountable: technicians who bring the right tooling, engineers who can defend a calculation, and supervisors who will stop a job when it is not safe.",
  openings: [
    { title: "Mechanical Technician", dept: "Operations", location: "Port Harcourt", type: "Full-time" },
    { title: "HSE Officer", dept: "HSE", location: "Lagos HQ", type: "Full-time" },
    { title: "Project Engineer", dept: "Engineering", location: "Lagos HQ", type: "Contract" },
    { title: "Welding Inspector (CSWIP/PCN)", dept: "Quality", location: "Rivers State", type: "Contract" },
    { title: "Pipeline Integrity Engineer", dept: "Engineering", location: "Lagos HQ", type: "Full-time" },
    { title: "Logistics Coordinator", dept: "Support", location: "Lagos HQ", type: "Full-time" },
  ],
  offer: [
    "Certification pathways mapped to your role, funded and tracked.",
    "Rotation across sectors and regional sites for engineers and supervisors.",
    "Stop-work authority from day one, with leadership backing that is visible.",
    "Structured progression with documented competence assessment.",
  ],
};

export const projectDetail = {
  client: "Confidential — disclosed on request",
  galleryNote: "Progress photography is issued per contract data pack. Additional imagery available on request.",
};

export const articleBodies = {
  "zero-harm-turnaround": [
    "A turnaround compresses months of accumulated risk into a few weeks. Hundreds of people, several contractors, live services and simultaneous operations all converge on a fixed window that cannot move. When something goes wrong in a shutdown, it is rarely because a worker made an isolated mistake. It is almost always because the plan had a gap nobody tested before mobilisation.",
    "That is why our method starts with a readiness review, not a mobilisation date. Spares are physically confirmed rather than listed. Isolation plans are walked down and proven. Vendor packages are chased to a delivery date with a named contact. Permit volumes are checked against the real workfront count. Only when those hold does the clock start.",
    "The second discipline is sequencing. Work is divided into workfronts that can genuinely run in parallel without competing for the same crane, the same permit area, or the same supervisor. Five workfronts that share one bottleneck are slower than two that do not.",
    "The third is documentation moving with the work. In many shutdowns the inspection and test plans close weeks after the plant restarts, which means the asset is operating on assumption rather than evidence. We close each milestone against a signed ITP, with photographic records uploaded to the asset register the same shift. Handover is then an assembly step, not an investigation.",
    "Finally, punch items get their own team running ahead of the workfront. A punch item carried into the next phase stops being a small omission and becomes a reason to extend the window. Chasing them in parallel is what makes an early handover possible rather than a lucky one.",
  ],
  "asset-integrity-reaudits": [
    "An integrity programme is only as good as its second pass. A first inspection sees what it was briefed to look for: the nominated welds, the flagged anomalies, the areas already suspected. A re-audit approaches the asset without that briefing, and that is where the expensive findings surface.",
    "The patterns are consistent. Coating holidays missed because the survey followed the road rather than the right-of-way. Support corrosion below the line of sight. Instrument drift that nobody recalibrated because the reading looked plausible. None of these are exotic failures, which is exactly why they are missed when the scope is optimised for speed.",
    "We treat re-audit findings as design inputs. Each one is photographed, tagged against the asset register, and closed with a verifier signature rather than a verbal agreement. The register matters more than the report: a finding that lives only in a PDF gets re-discovered next campaign.",
    "The commercial argument for re-audits is straightforward. A missed anomaly found at the next scheduled interval has had years to grow, and the repair cost scales with it. A missed anomaly found three months later is a small fabrication job.",
  ],
  "commissioning-without-chaos": [
    "Most commissioning problems are not commissioning problems. They are construction problems discovered late, when the system is finally energised and nobody can hide behind an unfinished workscope. Systems handed over unflushed, undocumented or with unknown punch items always convert into start-up delays.",
    "The fix is sequencing: pre-commission as you build. Each system gets flushed, dried, tested and loop-checked as its workfront completes, rather than as part of a final sweep. The documentation moves with it, so by the time the last spool is welded, most of the commissioning dossier already exists.",
    "Loop checks are signed off by system rather than by area. Area-based sign-off produces a spreadsheet that is clean in the middle and chaotic at every boundary, which is exactly where start-up problems sit.",
    "We also embed the client's operators in the commissioning team from the first week. A crew that has walked every line, closed every punch item, and seen every reading will start the plant faster than a crew that received a binder the week before handover.",
    "The result is that start-up becomes a formality rather than a firefight — not because nothing goes wrong, but because the things that do go wrong are found while there is still time to fix them.",
  ],
};

export const faqSite = [
  {
    q: "Where does CORVEX operate?",
    a: "From our head office in Lagos and regional delivery hubs, with mobile crews able to mobilise across the region. Mobilisation scope, travel and camp arrangements are agreed per contract.",
  },
  {
    q: "Which standards do you work to?",
    a: "ISO 9001 (quality), ISO 14001 (environment) and ISO 45001 (safety) aligned management systems, with API and ASME practice applied where the work calls for it — ASME B31.3 for piping, API 579-1 for fitness-for-service, API 1104 for pipeline welding. Certification status is reported per contract scope rather than implied.",
  },
  {
    q: "How do engagements start?",
    a: "Send scope, drawings, or a one-line brief through the contact form or the proposal request. A technical lead reviews it and responds within two business days with scope, constraints and a named lead.",
  },
  {
    q: "Do you supply certified personnel?",
    a: "Yes. Every crew member arrives with current, verifiable certification matched to the task risk assessment — welders to qualified procedures, inspectors to recognised schemes, and HSE personnel to the applicable regulatory requirement.",
  },
  {
    q: "How is safety enforced on site?",
    a: "Permit-to-work on every task, toolbox talks every shift, independent audits on a fixed cycle, and stop-work authority for everyone without consequence. Near-miss reporting is actively rewarded and lessons are circulated across sites.",
  },
  {
    q: "Can you work on live plant without a shutdown?",
    a: "In many cases, yes. Pipeline repair, coating rehabilitation, metering proving and mechanical maintenance can often be executed live-line or within short windows. Where a shutdown is unavoidable, we compress it through off-site prefabrication and rehearsed sequences.",
  },
  {
    q: "How do you handle variations?",
    a: "Variations are raised as soon as they are identified, with the technical basis documented before the work proceeds. We would rather agree a scope change early than absorb it on site and dispute it afterwards.",
  },
  {
    q: "What documentation is handed over?",
    a: "A mechanical completion dossier including inspection and test plans, non-destructive testing records, material and weld traceability, calibration certificates, and as-built drawings. Handover packages are assembled during the work, not after it.",
  },
];

