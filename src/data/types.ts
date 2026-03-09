/* ──────────────────────────────────────────────
   Shared types for portfolio content.
   Edit these if you want to extend the schema.
   ────────────────────────────────────────────── */

/** A media item is either an image or an embedded YouTube video. */
export type Media =
  | { type: "image"; src: string; alt: string }
  | { type: "youtube"; videoId: string };

/** One of the four detail sections on a project page. */
export interface ProjectSection {
  heading: string;
  body: string;
  media: Media;
}

/** A professional (project / job) entry shown on the Professional page. */
export interface ProfessionalEntry {
  /** URL-safe slug used for the detail route, e.g. "pest-detection" */
  slug: string;
  title: string;
  subtitle: string;
  previewImage: string;
  sections: {
    technologies: ProjectSection;
    goal: ProjectSection;
    architecture: ProjectSection;
    learnings: ProjectSection;
  };
}

/** A personal entry shown on the Personal page. */
export interface PersonalEntry {
  id: string;
  title: string;
  body: string;
  image: { src: string; alt: string };
}
