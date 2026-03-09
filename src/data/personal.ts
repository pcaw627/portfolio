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
    id: "hiking",
    title: "Hiking & Nature",
    body: "I love exploring trails and national parks. There's nothing quite like disconnecting from screens and reconnecting with the natural world. Some of my favourite hikes include trails in the Appalachians and desert canyons of the Southwest.",
    image: { src: "/assets/pest_detect1.jpg", alt: "Hiking photo" }, // replace with actual image
  },
  {
    id: "music",
    title: "Music & Guitar",
    body: "I've been playing guitar for over a decade. From blues to jazz fusion, music is my creative outlet outside of engineering. I also enjoy building and modifying effects pedals.",
    image: { src: "/assets/pest_detect1.jpg", alt: "Guitar photo" }, // replace with actual image
  },
  {
    id: "reading",
    title: "Reading",
    body: "I'm an avid reader — particularly drawn to non-fiction on technology history, systems thinking, and biographies of inventors. A few favourites: The Soul of a New Machine, Thinking in Systems, and Shoe Dog.",
    image: { src: "/assets/pest_detect1.jpg", alt: "Books photo" }, // replace with actual image
  },
];
