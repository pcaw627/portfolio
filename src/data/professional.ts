import { ProfessionalEntry } from "./types";

/*
 * ─── HOW TO ADD A NEW PROJECT ──────────────────────────────────
 *  1. Add a new object to the array below.
 *  2. Put any images in  public/assets/  and reference them as
 *     "/assets/your-image.jpg".
 *  3. For YouTube videos, use  { type: "youtube", videoId: "XXXXXXXXXXX" }.
 *  4. The slug must be unique — it becomes the URL path.
 * ───────────────────────────────────────────────────────────────
 */

export const professionalEntries: ProfessionalEntry[] = [
  {
    slug: "pest-detection",
    title: "Pest Detection System",
    subtitle: "AI-powered agricultural pest identification",
    previewImage: "/assets/pest_detect1.jpg",
    sections: {
      technologies: {
        heading: "Technologies Used",
        body: "Python, TensorFlow, OpenCV, Flask, AWS EC2. The model pipeline ingests field imagery and runs inference at the edge using a lightweight MobileNet architecture.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Pest detection tech stack" },
      },
      goal: {
        heading: "Project Goal",
        body: "Reduce crop loss by enabling farmers to identify and classify common pests in real time using a smartphone camera, minimising reliance on manual scouting.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Pest detection goal" },
      },
      architecture: {
        heading: "Architecture & Design",
        body: "A two-stage pipeline: a lightweight classifier runs on-device for quick triage, while ambiguous detections are forwarded to a cloud-hosted ensemble model for higher accuracy. Results are surfaced via a simple REST API consumed by the mobile app.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Architecture diagram" },
      },
      learnings: {
        heading: "Key Takeaways",
        body: "Learned the importance of data augmentation when working with limited labeled datasets. Also gained experience with model quantisation techniques for edge deployment and the trade-offs between latency and accuracy.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Learnings" },
      },
    },
  },
  {
    slug: "guitar-equalizer",
    title: "Guitar Equalizer",
    subtitle: "Real-time audio signal processing for guitar",
    previewImage: "/assets/pest_detect1.jpg", // replace with actual image
    sections: {
      technologies: {
        heading: "Technologies Used",
        body: "C++, JUCE Framework, DSP algorithms, VST3 plugin standard. Built a parametric EQ with real-time spectrum analysis and low-latency audio processing.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "EQ tech" },
      },
      goal: {
        heading: "Project Goal",
        body: "Create an intuitive, low-latency parametric equalizer plugin that guitarists can use in their DAW or live rig to shape tone with surgical precision.",
        media: { type: "youtube", videoId: "dQw4w9WgXcQ" }, // replace with actual video ID
      },
      architecture: {
        heading: "Architecture & Design",
        body: "Audio is processed through a chain of biquad IIR filters. The UI renders a draggable frequency-response curve that maps directly to filter coefficients, updated in real time without audio glitches.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "EQ architecture" },
      },
      learnings: {
        heading: "Key Takeaways",
        body: "Deepened understanding of digital signal processing fundamentals — z-transforms, filter stability, and the challenges of real-time audio on consumer hardware. Also learned the JUCE framework inside and out.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "EQ learnings" },
      },
    },
  },
  {
    slug: "pcb-design",
    title: "PCB Design",
    subtitle: "Custom PCB for embedded sensor platform",
    previewImage: "/assets/pest_detect1.jpg", // replace with actual image
    sections: {
      technologies: {
        heading: "Technologies Used",
        body: "KiCad, STM32 microcontroller, SPI/I2C protocols, LDO power regulation. Designed a four-layer PCB with mixed-signal considerations.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "PCB tech" },
      },
      goal: {
        heading: "Project Goal",
        body: "Design a compact, reliable PCB to interface multiple environmental sensors with an STM32 MCU for a low-power IoT node.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "PCB goal" },
      },
      architecture: {
        heading: "Architecture & Design",
        body: "A four-layer stack-up separating signal, ground, power, and high-speed traces. Careful impedance matching on the SPI bus and proper decoupling on each IC power pin.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "PCB architecture" },
      },
      learnings: {
        heading: "Key Takeaways",
        body: "Gained hands-on experience with DFM constraints, thermal relief patterns, and the iterative nature of hardware bring-up. Learned that a solid schematic review saves weeks of debugging on the bench.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "PCB learnings" },
      },
    },
  },
];
