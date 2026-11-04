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
  "IMG-HERO": img("hero-refinery.png"),
  "IMG-ABOUT": img("about-image.png"),

  // Services (overview + detail variants)
  "IMG-SVC-01": img("Overhead Industrial Blueprint Workshop.png"),
  "IMG-SVC-02": img("Workshop floor, fabrication in progress.png"),
  "IMG-SVC-03": img("Night shift operations, control room glow.jpg"),
  "IMG-SVC-04": img("Structural steel erection, daylight.jpg"),
  "IMG-SVC-05": img("Pipeline corridor, inspection crew.png"),
  "IMG-SVC-D-01": img("Overhead Industrial Blueprint Workshop.png"),
  "IMG-SVC-D-02": img("Workshop floor, fabrication in progress.png"),
  "IMG-SVC-D-03": img("Night shift operations, control room glow.jpg"),
  "IMG-SVC-D-04": img("Structural steel erection, daylight.jpg"),
  "IMG-SVC-D-05": img("Pipeline corridor, inspection crew.png"),

  // Sectors (overview + detail variants)
  "IMG-SECTOR-OG": img("Offshore platform at dusk.jpg"),
  "IMG-SECTOR-IND": img("Process plant interior, pipework.jpg"),
  "IMG-SECTOR-INF": img("Bridge and highway works, daylight.png"),
  "IMG-SECTOR-P-OG": img("Offshore platform at dusk.jpg"),
  "IMG-SECTOR-P-IND": img("Process plant interior, pipework.jpg"),
  "IMG-SECTOR-P-INF": img("Bridge and highway works, daylight.png"),

  // Safety
  "IMG-SAFETY": img("Worker in hard hat and red coveralls, thumbs-up.png"),

  // Projects
  "IMG-PROJ-01": img("Refinery columns at dusk.jpg"),
  "IMG-PROJ-02": img("Process skids and pipe racks.jpg"),
  "IMG-PROJ-03": img("Pipeline right-of-way, survey crew.png"),
  "IMG-PROJ-04": img("Utility corridor construction.png"),
};

export const getImageSrc = (slot) => (slot ? imageSrc[slot] || "" : "");
