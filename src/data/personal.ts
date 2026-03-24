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
    body: "I've been playing guitar for over a decade. From blues to jazz fusion, music is my creative outlet outside of engineering. I also enjoy building and modifying effects pedals.",
    image: { src: "/assets/pest_detect1.jpg", alt: "Guitar photo" }, // replace with actual image
  },
  {
    id: "travel",
    title: "Travel",
    body: "I enjoy traveling and exploring new cities and experiences. Some recent favorites include trips to DC, NYC, and San Diego, where I got to spend time surfing.",
    image: { src: "/assets/pest_detect1.jpg", alt: "Travel photo" }, // replace with actual image
  },
  {
    id: "nature",
    title: "Nature",
    body: "I love exploring trails and national parks. There's nothing quite like disconnecting from screens and reconnecting with the natural world. Time outdoors keeps me grounded and recharged.",
    image: { src: "/assets/pest_detect1.jpg", alt: "Hiking photo" }, // replace with actual image
  },
];
