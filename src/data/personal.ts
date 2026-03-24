import { PersonalEntry } from "./types";

/*
 * ─── HOW TO ADD A NEW PERSONAL ENTRY ──────────────────────────
 *  1. Add a new object to the array below.
 *  2. Put images in  public/assets/  and reference as "/assets/your-image.jpg".
 *  3. The id must be unique (used as a React key).
 * ──────────────────────────────────────────────────────────────
 */

export const personalEntries: PersonalEntry[] = [
  {
    id: "music",
    title: "Music & Guitar",
    body: "I've been playing guitar and piano for over a decade, recently starting to play concerts. Music is my passion outside of engineering, and I've experimented with styles ranging from fingerstyle to jazz/rock fusion.",
    image: { src: "/assets/pest_detect1.jpg", alt: "Guitar photo" }, // replace with actual image
  },
  {
    id: "travel",
    title: "Travel",
    body: "I enjoy traveling, exploring new cities, new experiences, and new cultures with my friends. Some recent favorites include trips to DC, NYC, and San Diego, where I got to spend time surfing.",
    image: { src: "/assets/pest_detect1.jpg", alt: "Travel photo" }, // replace with actual image
  },
  {
    id: "nature",
    title: "Nature",
    body: "I love exploring trails and national parks- including the beautiful Sarah P Duke Gardens, pictured here. Reconnecting with the natural world and spending time outdoors keeps me grounded and recharged.",
    image: { src: "/assets/pest_detect1.jpg", alt: "Hiking photo" }, // replace with actual image
  },
];
