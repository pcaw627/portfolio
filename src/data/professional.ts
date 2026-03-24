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
    slug: "translation-transcription-service",
    title: "Translation + Transcription Service",
    subtitle: "Real-time language support for learners",
    previewImage: "/assets/placeholder.png",
    sections: {
      technologies: {
        heading: "Title",
        body: "Translation + Transcription Service",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Translation and transcription service" },
      },
      goal: {
        heading: "Summary",
        body: "A real-time transcription and translation desktop app for intermediate language learners consuming foreign media, optimized for speed, accuracy, and practical use across any audio source.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Translation and transcription summary" },
      },
      architecture: {
        heading: "Design Decisions",
        body: "Separated transcription and translation into decoupled services, captured app-agnostic system audio via WASAPI, selected low-latency multilingual models (SenseVoice-small + Gemma 4B via Ollama), and improved output quality with sentence-boundary detection and language-jitter control.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Translation and transcription design decisions" },
      },
      learnings: {
        heading: "Key Learnings & Takeaways",
        body: "Human-first product design produced stronger outcomes than model-first thinking; regular teacher and learner feedback directly shaped the roadmap (HSK-aware tagging, review support, flashcards), and reinforced disciplined iteration with reliability and security guardrails.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Translation and transcription learnings" },
      },
    },
  },
  {
    slug: "spotter-ai-fitness-platform",
    title: "SPOTTER AI Fitness Platform",
    subtitle: "Real-time exercise form analysis system",
    previewImage: "/assets/placeholder.png",
    sections: {
      technologies: {
        heading: "Title",
        body: "SPOTTER AI Fitness Platform",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "SPOTTER AI title" },
      },
      goal: {
        heading: "Summary",
        body: "Architected and deployed a full-stack platform that analyzes exercise form from video in near real time by combining pose estimation, movement classification, and responsive infrastructure.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "SPOTTER AI summary" },
      },
      architecture: {
        heading: "Design Decisions",
        body: "Scoped to pushups and squats, used MediaPipe for fast landmark extraction, introduced heuristic exercise classification for simplicity, and redesigned networking into a publisher-subscriber style flow using AWS as a relay after unreliable direct Wi-Fi links.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "SPOTTER AI design decisions" },
      },
      learnings: {
        heading: "Key Learnings & Takeaways",
        body: "Infrastructure reliability can dominate model quality in real-world systems, and iterative state-aware sampling logic produced more meaningful feedback than naive periodic snapshots.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "SPOTTER AI learnings" },
      },
    },
  },
  {
    slug: "pipelined-cpu-on-fpga",
    title: "Pipelined CPU on FPGA",
    subtitle: "Custom ISA and pipelined CPU in Verilog",
    previewImage: "/assets/placeholder.png",
    sections: {
      technologies: {
        heading: "Title",
        body: "Pipelined CPU on FPGA",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Pipelined CPU title" },
      },
      goal: {
        heading: "Summary",
        body: "Architected and implemented a pipelined CPU RTL design in Verilog with hazard handling, bypass logic, and a Wallace Tree multiplier, then validated it on an Artix-7 FPGA.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Pipelined CPU summary" },
      },
      architecture: {
        heading: "Design Decisions",
        body: "Implemented fundamentals first (ALU and control primitives), then layered complex operations and full 5-stage pipelining. Chose Wallace Tree multiplication over a required Booth variant to prioritize speed despite larger area and higher implementation complexity.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Pipelined CPU design decisions" },
      },
      learnings: {
        heading: "Key Learnings & Takeaways",
        body: "Built a stronger intuition for digital design fundamentals, especially how forwarding, stalls, and flushes interact to preserve correctness while keeping throughput high.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Pipelined CPU learnings" },
      },
    },
  },
  {
    slug: "real-time-digital-equalizer",
    title: "Real-Time Digital Equalizer for Electric Guitar",
    subtitle: "FFT/IFFT audio DSP pipeline on FPGA",
    previewImage: "/assets/placeholder.png",
    sections: {
      technologies: {
        heading: "Title",
        body: "Real-Time Digital Equalizer for Electric Guitar",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Digital equalizer title" },
      },
      goal: {
        heading: "Summary",
        body: "Designed a real-time audio equalizer by building an FFT/IFFT DSP chain in Verilog on top of a pipelined CPU, with end-to-end ADC/DAC integration for live guitar input and speaker output.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Digital equalizer summary" },
      },
      architecture: {
        heading: "Design Decisions",
        body: "Defined real-time sampling constraints up front, implemented a staged analog-to-digital-to-frequency-domain pipeline, and selected an SDF-2^2 FFT architecture to balance resource usage and throughput under tight timing limits.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Digital equalizer design decisions" },
      },
      learnings: {
        heading: "Key Learnings & Takeaways",
        body: "Signal-processing systems demand both mathematical rigor and deployment resilience; this project reinforced persistence, independent troubleshooting, and end-to-end system ownership under pressure.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Digital equalizer learnings" },
      },
    },
  },
  {
    slug: "automated-crop-protection-system",
    title: "Automated Crop Protection System",
    subtitle: "Distributed IoT pest detection and deterrence",
    previewImage: "/assets/placeholder.png",
    sections: {
      technologies: {
        heading: "Title",
        body: "Automated Crop Protection System",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Crop protection title" },
      },
      goal: {
        heading: "Summary",
        body: "Engineered a distributed ESP32 and Raspberry Pi class IoT system for autonomous pest detection and deterrence under strict power, weatherproofing, and local-network constraints.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Crop protection summary" },
      },
      architecture: {
        heading: "Design Decisions",
        body: "Used a multi-stage detection pipeline that escalated from low-power sensing to higher-certainty vision, paired with multimodal deterrence (light, sound, motion) and UDP-based subsystem discovery plus heartbeat reconnection.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Crop protection design decisions" },
      },
      learnings: {
        heading: "Key Learnings & Takeaways",
        body: "Large interdisciplinary projects reward adaptability; navigating model iteration, hardware debugging, and team role shifts under deadlines built practical engineering judgment and collaboration maturity.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Crop protection learnings" },
      },
    },
  },
  {
    slug: "mini-amazon-marketplace",
    title: "Mini-Amazon Marketplace Website",
    subtitle: "Flask and PostgreSQL CRUD marketplace",
    previewImage: "/assets/placeholder.png",
    sections: {
      technologies: {
        heading: "Title",
        body: "Mini-Amazon Marketplace Website",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Mini-Amazon title" },
      },
      goal: {
        heading: "Summary",
        body: "Developed a full-stack marketplace application supporting user, product, and order lifecycle operations with robust CRUD workflows and SQL-backed inventory and transaction logic.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Mini-Amazon summary" },
      },
      architecture: {
        heading: "Design Decisions",
        body: "Prioritized a normalized relational schema and clear route/API design in Flask, then stabilized behavior with continuous test-debug cycles and SQL best practices including pagination.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Mini-Amazon design decisions" },
      },
      learnings: {
        heading: "Key Learnings & Takeaways",
        body: "This project solidified core full-stack fundamentals and translated database theory into practical query design for real application behavior.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Mini-Amazon learnings" },
      },
    },
  },
  {
    slug: "network-router-client-server",
    title: "Network Router, Client and Server",
    subtitle: "Protocol stack implementation in C",
    previewImage: "/assets/placeholder.png",
    sections: {
      technologies: {
        heading: "Title",
        body: "Network Router, Client and Server",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Network project title" },
      },
      goal: {
        heading: "Summary",
        body: "Implemented an end-to-end networking project in C covering HTTP requests, ping/traceroute behavior, and protocol support across Ethernet, IP, UDP, TCP, ICMP, RIP, and ARP.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Network project summary" },
      },
      architecture: {
        heading: "Design Decisions",
        body: "Built protocol layers from lower levels upward, emphasizing correct packet construction and encapsulation between stack boundaries while handling pointer and offset complexity in C.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Network project design decisions" },
      },
      learnings: {
        heading: "Key Learnings & Takeaways",
        body: "Working through protocol composition end-to-end gave a concrete understanding of internet foundations and the mechanics that enable global node-to-node communication.",
        media: { type: "image", src: "/assets/pest_detect1.jpg", alt: "Network project learnings" },
      },
    },
  },
];
