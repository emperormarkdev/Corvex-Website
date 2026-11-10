/**
 * Slot → asset map.
 *
 * Single source of truth for real photography. `ImageSlot` looks a slot
 * up here when no explicit `src` prop is passed, so dropping a file in
 * `public/images/` and adding one line below is all that's needed to go live.
 *
 * Keys are the slot IDs used across `content.js` and the page components.
 * Detail-page variants (IMG-SVC-D-0x, IMG-SECTOR-P-*) share art with their
 * overview counterparts.
 */
const img = (name) => `/images/${encodeURI(name)}`;

export const imageSrc = {
  // Hero + about
  "IMG-HERO": img("hero-refinery.webp"),
  "IMG-ABOUT": img("about-image.webp"),

  // Services (overview + detail variants)
  "IMG-SVC-01": img("expert.webp"),
  "IMG-SVC-02": img("welding.webp"),
  "IMG-SVC-03": img("Night shift operations, control room glow.webp"),
  "IMG-SVC-04": img("excavator.webp"),
  "IMG-SVC-05": img("pipeline-display.webp"),
  "IMG-SVC-06": img("two-engineers.webp"),
  "IMG-SVC-D-01": img("expert.webp"),
  "IMG-SVC-D-02": img("welding.webp"),
  "IMG-SVC-D-03": img("Night shift operations, control room glow.webp"),
  "IMG-SVC-D-04": img("excavator.webp"),
  "IMG-SVC-D-05": img("pipeline-display.webp"),
  "IMG-SVC-D-06": img("two-engineers.webp"),

  // Sectors (overview + detail variants)
  "IMG-SECTOR-OG": img("Offshore platform at dusk.webp"),
  "IMG-SECTOR-IND": img("Process plant interior, pipework.webp"),
  "IMG-SECTOR-INF": img("Bridge and highway works, daylight.webp"),
  "IMG-SECTOR-P-OG": img("Offshore platform at dusk.webp"),
  "IMG-SECTOR-P-IND": img("Process plant interior, pipework.webp"),
  "IMG-SECTOR-P-INF": img("Bridge and highway works, daylight.webp"),

  // Safety
  "IMG-SAFETY": img("Worker in hard hat and red coveralls, thumbs-up.webp"),

  // Projects
  "IMG-PROJ-01": img("Refinery columns at dusk.webp"),
  "IMG-PROJ-02": img("Process skids and pipe racks.webp"),
  "IMG-PROJ-03": img("Pipeline right-of-way, survey crew.webp"),
  "IMG-PROJ-04": img("Utility corridor construction.webp"),
  "IMG-PROJ-05": img("corvex-portfolio-binder.webp"),
  "IMG-PROJ-06": img("Structural steel erection, daylight.webp"),
};

export const getImageSrc = (slot) => (slot ? imageSrc[slot] || "" : "");
