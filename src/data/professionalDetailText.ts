export interface ProfessionalDetailText {
  summary: string;
  designDecisions: string;
  keyLearnings: string;
}

export const professionalDetailText: Record<string, ProfessionalDetailText> = {
  "translation-transcription-service": {
    summary:
      "A real-time transcription and translation service, tailored towards intermediate language learners consuming foreign media.",
    designDecisions: `I take a human first approach: Before writing code, I sat down with my Chinese teacher and some classmates who were serious about learning, to understand and build for their needs instead of just mine.

For building something fit to these constraints, I first broke the problem down. From a software design perspective, I made a separate transcription service and translation service, each decoupled from the underlying models. I also listened to my classmate's advice, and found that a desktop app would be better than the web extension I initially had in mind.

In order to make the app agnostic (and able to translate across TikTok, Instagram reels, different web browsers), I made it pull from the system audio using WASAPI, Windows' operating system API for audio.

For selection of models, I knew that the highest priorities would have to be speed, followed by accuracy. Therefore I knew I would likely need to use a smaller model. Testing across several models, I found that SenseVoice-small won out on latency; it's non auto-regressive which means it's lightning fast when processing live audio. For translation, I used Gemma 4B through an Ollama endpoint, which similarly struck a balance between speed and accuracy. Critically, both these models are also multilingual.

Integrating these models together required some more thoughtful design.

+ I used signal preprocessing techniques (sliding window of RMS) to detect sentence boundaries so models receive clean, complete inputs rather than sentence fragments, which meaningfully improves translation accuracy.
+ Given the models are multilingual, I also implemented a “jitter window” to prevent the model from switching languages unnecessarily.
+ I am also currently designing a “meaning matching” feature to explicitly link the meaning of words in the first sentence to its corresponding words in the translation. To accomplish this I’m experimenting with several approaches, including semantic similarity and GPTs.

After returning to consult with my Chinese teacher again, she was greatly impressed by this MVP. With her feedback, she advised me to build in a way that’s aware of the user’s fluency level (adhering to HSK standards), and to tag words above their level for review. She also recommended a flashcard system for these new words.

My teacher has since expressed interest in bringing the tool into Duke's Language Program curriculum, and that possibility- that something built by one person could shape how a university teaches a language- is exactly the kind of impact I want to keep building toward. With her permission, I also secured a pool of 60 beta users, of ~40 intermediate learners and ~20 beginner learners. While the project is still in its nascent stages, I am encouraged by the great feedback I’ve been getting so far. To this day, I even “dogfood” it myself as I work on it, using it regularly for watching films.`,
    keyLearnings: `In building this project, I found it very fulfilling to not just develop with the latest AI tools and agentic workflows, but to use AI to rapidly iterate on problems with real people, real constraints, and real feedback, in order to craft a practical learning tool that’s tailored to users’ experiences and joyful to use. I also learned about keeping guardrails on projects; I watched edits carefully for security concerns or over-complicated implementations, promptly making corrections.

Working on these kinds of human-centered projects is always a fulfilling experience.`,
  },
  "spotter-ai-fitness-platform": {
    summary:
      "Architected and deployed a full-stack platform to analyze exercise form in real-time from video, integrating machine learning models for pose estimation and movement classification with a responsive infrastructure (AWS, Flask, nginx) to deliver immediate technique feedback to users.",
    designDecisions: `For a graduate-level Fullstack IoT course with Prof Tingjun Chen, we were tasked with building something unique. Going into my junior year with a desire to work out more, I decided that building a tool to act as a coach while I exercised would be a cool project.

To begin, I ended up breaking the problem into three main parts: first was setting up the infrastructure so communication was tight and responsive; second, was classifying the specific exercise; third was giving feedback tailored to that specific exercise.

So in designing this, we knew that we needed a way to glean the "landmark" joints from the body in the video frame. after investigating frameworks like Openpose, YOLO, and Mediapipe, we settled on Mediapipe as its speed was slightly better while not making sacrifice on accuracy, and the documentation was more thoughtful.

We also wanted to avoid scope creep; so we focused on building just for pushups and squats. We also set a inference time constraint of 3 seconds, as that's roughly the amount of time you need for one rep.

For infrastructure, we initially had a simple setup where the RaspberryPi SPOTTER device would communicate directly to a GPU node- an nginx server on my home PC with an RTX3080- over Duke WiFi. We actually ran into a lot of issues with that setup where our connection would be terminated randomly (it was bad- usually only 2-3 minutes per connection). We learned this when I tested at a Starbucks and found that the reliability was remarkably better on their WiFi. Logically, it was something with Duke's WiFi that was interfering; we deduced that it was Duke's cybersecurity flagging our constant polling as suspicious activity.

Seeing that our peers were using AWS with decent reliability (and seeing our deadline coming up soon), we decided to switch. We ended up using AWS as a "proxy" node, which essentially passed the same info. However we did need to forward that info to the original GPU node, since cloud GPU instances are frightfully expensive (and we felt that provisioning with spot pricing wasn't fast enough for a demo). So essentially we just had a publisher-subscriber architecture going on, where AWS was just passing the baton.

For classification, we were initially considering building an ML model to take in the set of "joint points" in the image, however we found that it was simpler, more efficient, and honestly easier to build a simple heuristic that just analyzed the relative heights of the key joints. (Your shoulders would be more likely to be in line with your hips and ankles vs a squat).

Implementing the feedback was a little tricky. The base method was simple: we analyzed the joint angles to determine if there was any under-extension or over-extension, and this worked perfectly well for still images.

However, considering the still image in the context of the entire rep, things fall apart. Since we were polling every 1-2 seconds, we had no idea if the still was taken at the "peak" of the rep, at the "rest" of the rep, or somewhere in between. So we changed our approach; I had the idea to use a simple correlation between frames to determine how much "action/movement" there is in the shot. After tuning to be resistant to background noise, I got it to be pretty reliable. We then changed the polling to only trigger once the "action" settled (indicating that the athlete is either at the "peak" or "rest"). We then modified our classification heuristic to also account for these new states; pushup_UP, pushup_DOWN, squat_UP, and squat_DOWN. It is noteworthy that, even with this reduced polling, the original infrastructure was still getting flagged and terminated.`,
    keyLearnings:
      "For the final presentation, we did a successful technical defense, and a successful live demo. (Never before has 50% of my grade rested on my ability to do a pushup...) One of the key things I took away from this project was strengthening my understanding of systems and infrastructure design. I found it incredibly satisfying to build a system that could improve the hot mess that I call my pushup form, and have it perform responsively and reliably while bypassing cybersecurity restrictions.",
  },
  "pipelined-cpu-on-fpga": {
    summary:
      "Architected and implemented RTL design for a pipelined CPU in Verilog with Wallace Tree Multiplier, pipelining, bypass, and hazard logic.\n\nDeployed on an Artix-7 FPGA, developing testbenches for system-level and module-level verification, and executed logic synthesis and timing analysis in Vivado.",
    designDecisions: `For this project, my task was to implement a custom ISA (instruction set architecture) for a CPU built from scratch. I divided this task into a few parts: first I tackled basic operations such as addition, subtraction, comparison, and counters; then I used those as building blocks for more complex operations like multiplication, division, and registers.

In fact, while our professor only required us to implement a modified booth's algorithm, I decided that I wanted to build a Wallace Tree Multiplier, which is much faster than Booth's (and would help later for the second half of the project, which would involve a lot of multiplications.) While I knew that the tradeoff to this speed would likely be a far larger area footprint and more DUT usage, I deemed it worthwhile- even considering the lack of class notes on it, and the greater effort that I would have to put in.

With those out of the way, I then implemented the basic CPU pipeline (instruction fetch, instruction decode, execute, memory, writeback). I also had pipeline latches so that instructions in one stage could process while previous stages work on the next instructions.

Once the basic pipeline was done, I then implemented logic for bypassing (to help with speed) and hazard logic (to avoid read-after-write / write-after-read / write-after-write errors). This involved implementing lots of stalls for multi-cycle operations, and flushing the pipeline when necessary.`,
    keyLearnings: `Taking on this project taught me so much about the fundamentals of digital design. Dr. John Board was an excellent teacher in this class.

Short aside- one of the reasons I got into engineering was because I used to play Minecraft as a child. One of the niche systems in this game is a feature called redstone which emulates digital/discrete electronics- almost like a "visual Verilog". I used this to build a calculator when I was 9- it wasn't a traditional binary calculator you'd see in a textbook; looking back I suppose it was closer to a finite-state machine.

Fast forward to today, building this CPU in Verilog, I learned there are many parallels with the tools I experimented with as a kid, and it was a great joy to rediscover and build again from the fundamentals like this.`,
  },
  "real-time-digital-equalizer": {
    summary: `Designed a real-time audio equalizer on top of a pipelined CPU by implementing a DSP pipeline using Fast Fourier Transform (FFT) and Inverse FFT in Verilog, also leveraging the CPU’s ISA in Assembly.
Deployed on an Artix-7 FPGA, and built to interface with an electric guitar and amp via ADC/DAC.
Developed testbenches for system-level and module-level verification, and executed logic synthesis and timing analysis in Vivado.`,
    designDecisions: `Have you ever seen a DJ "boost the bass"?

As a musician, I wanted this project to be a few things. I wanted it to be something that felt tangible, something that could teach me a bit more about signal processing, something memorable, and something to serve as a challenge. Being an avid guitar player, I decided that it would be insanely cool to have a real time equalizer, which could boost or dampen the high, mid, and low frequencies as I play my electric guitar.

This project served as an extension to the Pipelined CPU, which I also wrote about here [].

Given the short deadline and the enormous task, we first set about clarifying scope. First, we ran some figures to decide some constraints; to make this real-time, we would have to sample fast. And so we decided 44kHz, being a common sampling rate on CDs, would be a good standard (especially as it covers twice the full 20Hz-20kHz hearing range for humans, by Nyquist's). We also knew that the system clock on the FPGA was 100MHz. This means that for every sample, we would have roughly 100,000/44 [adjust, i forget but we ended up changing sysclock] --- system clock cycles between each sample, during which we can operate on all the samples stored up to this point.

Now knowing how many cycles we had to work, we then set about building the pipeline for the modulation itself. We knew that we had to take analog audio from the guitar, amplify it, convert it into a digital signal fed into the FPGA, run FFT on the digital signal to extract the frequency spectrum of the signal, modulate that (with each frequency bin having its own multiplier), then taking the IFFT of the modulated signal, and outputting that through a DAC into a speaker. Each one of these stages, along with the transitions between them, were designed, written, and individually tested.

After reading into the literature, we settled on a SDF-2^2 architecture, which is a way of organizing the branches of a "traditional" butterfly discrete Fourier Transform in a way that's smaller than a SDF-4 architecture but faster than an SDF-2 architecture. After consulting a research paper on this from MIT, however in building it we realized that a number of components and connections in their diagrams were omitted and even mislabeled. This led to a lot of confusion, but after some late nights we understood the general idea well enough that we were able to make the proper changes to get things working. It was quite involved, as the task entailed complex timings, complex (in the mathematical sense) operations, and also reordering of the samples (which get scrambled out of order as it passes through the FFT pipeline.)

With the FFT and IFFT components done, we moved on to the audio interfaces. Due to limitation of parts, we were only able to secure a 12bit ADC, which sacrificed some audio quality; we zero-padded this to fit into our 16bit FFT module.

We also had to implement custom FFT and IFFT registers to store the intermediate results of the FFT/IFFT modules.

Thankfully, a few days before our demo we were able to get everything working nicely. However, the morning of, we had an unpleasant surprise- somehow our FPGA was stolen and the hardware wiring was completely dismantled. (Our ECE lab has plenty of spare FPGAs, wires, and resistors). We decided not to dwell on the "who", as we had saved the bitstream we tested with to GitHub- we just needed to rewire the simple voltage divider circuit to my amp and our new FPGA.

That afternoon we had our final technical defense, and a live demo- watch here! [] (Do mind that I had no sleep and the scare of the stolen FPGA earlier, so I am a bit frazzled in the video here). You can hear the audio play through the speakers as I play- we implemented a low pass filter which amps up the low frequencies and mutes the highs.

While Dr. Board pushed us hard in the final stretch, it was ultimately worth it. He said it was well done, and one of ~5 projects that incorporated FFTs in the 60 years that he's been teaching at Duke.`,
    keyLearnings:
      "This project not only taught us the fundamentals of digital design, but it also taught us how to navigate the challenges that come along with signal processing. It also taught us the value of being independent, resourceful, and persistent, even in the face of an overwhelming task. (I took a graduate level design class concurrently with this one, which had its own final project- see here! [])",
  },
  "automated-crop-protection-system": {
    summary:
      "Engineered a distributed IoT system on ESP32 and Raspberry Pi, utilizing a YOLO-based computer vision pipeline for autonomous pest identification.",
    designDecisions: `For my senior design engineering project, I worked in a team of 8 to build a pest detection and deterrence system for Duke Campus Farm.

Essentially, farms lose tens of thousands of dollars in crops every year due to pests like groundhogs, squirrels, and raccoons. But certain farms that are organic certified have restrictions that prevent them from using pesticides as deterrents. And for ethical reasons, farmers don't always want to shoot/trap the animals. Additionally, as the engineers solving this problem, we had restrictions of our own; we had to design the system with the following constraints:
+ power constrained (relying only on solar and batteries);
+ windproof and waterproof
+ subsystems had to communicate over a local mesh network (isolated from the internet)
+ material design had to avoid chemicals that could leech into the soil

These numerous constraints made this a thorny problem, so our team brainstormed a variety of solutions. After two rounds of Pugh Matrices and 18 solutions, we settled on one. For detection, we would use a scaffolded approach- we would start off with a low-power, low-certainty detection method, which would then trigger a second stage that is higher-power and more certain. If the second stage was still uncertain, then we would escalate to a final third stage which would use a camera feed to act as the "final judge" on whether an animal was present or not.

For deterrence, we decided to use a combination of lights, sound, and motion; we settled on using a floodlight, a loudspeaker, and a motorized scarecrow.

With the scope narrowed down, we divided into a detection subteam of 4, and a deterrence subteam of 4. My part in the project was owning the camera pipeline and setup of the OrangePi (essentially a RaspberryPi with an onboard NPU that can be used for ML inference.)

My plan was to build and train a custom CNN pipeline to take in an image, and use multi-class classification to determine if the frame included a specific species (just a binary classification was sufficient for the purposes of the project; however our teacher said she'd grant extra credit for species ID). To this end, I gathered thousands of images on Hudson quad and some other locations, by taking videos at varied heights, rotations, and distances from a stuffed animal as a proxy. I wanted to get the training data as messy as possible, including shadows, lighting artifacts, and people/bikes in the background.

I used standard practices of using a train-val-test split, and the initial training was quite good. Suspiciously good actually, and I determined that there was data leakage occurring. I realized that since I took most of these videos, if I treated frames from one video as "distinct", then the model could "cheat" on the val set since it could see adjacent, similar frames in train set.

After fixing that so the videos don't appear in both train and val sets, the training was quite bad (like 30% val accuracy if I remember right), but I used a few approaches to improve this. First I used data augmentation to vary the training set: color jitter (tint/brightness), rotations, and also addition of some noise to mimic blurs and rain.

After a few hours, I ended up getting about a very nice confusion matrix, with a high val of 96% [double check figure, find the plot] (and a more sensible loss curve). Now the last step was to integrate this model for processing on the OrangePi's NPU.

However, around this time, our other subteam unfortunately ran into some trouble. Two of their teammates withdrew, which left them quite short-handed- as it currently was, none of the lights, sound, and motion were working. It was in a bad place, so in order to make the final deadline, me and two of my friends from the detect team made the decision to redirect our efforts to help assist with the completion of the deterrence subsystem.

Doing a deep dive into the wiring, I diagnosed and corrected several issues- incorrect voltage sources, lack of insulation causing shorts, a wire that somehow had the ends soldered red-to-black and black-to-red (a cruel joke! it killed our buck converter), and also some software bugs.

My teammates also took over the inter-subsystem communication side of things, and we defined a protocol over UDP that broadcasted and searched for the deter subsystem (and had a heartbeat for reconnection, in case snow or rain disrupted the signal).

Back on the image classification side, we decided to implement a much simpler, YOLO-based, binary classification pipeline instead (which had a lower 80% val accuracy but overall satisfied our teacher's requirements).

Moving to deployment, we drove together to Duke Campus Farm to install our final system. The nights were long and cold by that time in November, below freezing, but ultimately we stuck it through and got a working demo in time for our final. We had to take it back to lab and reinstall it again (reinforcing the solder connections across both systems and neatening up the wiring onto some protoboards).`,
    keyLearnings: `Despite our setbacks, I feel it was such a great thing to work in this big of a project- I even made a few new friends through this group, and I introduced a few of them to my favorite sandwich shop.

As one of the last classes I took at Duke, this was an excellent project to unite the various concepts I learned in my academic career. This project nicely tied together IoT, embedded systems, signal processing, machine learning, and electronics. Seeing our project succeed in the real world, for real people, was such an impactful moment for me.`,
  },
  "mini-amazon-marketplace": {
    summary:
      "Developed a CRUD-compliant e-commerce application using Python, Flask, and PostgreSQL, simulating complex user-product-order lifecycles, and implementing SQL queries for transactions and inventory tracking.",
    designDecisions: `This project was one of my first times working on a full-stack application. The idea was to build a marketplace where users could list, buy, and sell items.

To this end, we first set about creating a robust, normalized data schema. We created profiles, mapped out accessible routes and configured API endpoints using flask.

Then to make sure that things were ready for our final demo, we did continuous testing, debugging, and cleaned up the frontend. On the SQL side of things, we also made sure to implement best practices (including pagination).`,
    keyLearnings:
      "In this project, I learned the fundamentals of full-stack development, and I also learned how to apply the theory that we learned in our Databases class to a real project. It was a very SQL heavy project, and it was a useful exercise to think through what was happening for each query.",
  },
  "network-router-client-server": {
    summary:
      "Designed to accommodate HTTP requests, pinging, trace route algorithms, & network protocols: Ethernet, IP, UDP, TCP, ICMP, RIP, ARP. Written in C.",
    designDecisions:
      'For this project, the goal was to build and emulate the various networking protocols we learned in our Networks class with Professor Maria Gorlatova.\n\nWe started with lower level protocols (closer to the bottom of the ISO stack): Ethernet. After learning how to construct a packet at the Ethernet level, we then learned how to encapsulate these into larger packets at higher levels of the OSI stack.\n\nTo be honest, design-wise, things were fairly "by the book". The majority of our troubles actually came from pointer management in C, and also being mindful of implementing offsets (and offsets of offsets of offsets!)correctly.',
    keyLearnings:
      "I think it was really enlightening to see how each of these protocols build together to form the foundation of the Internet. It was also great to see how trace route algorithms come together to help nodes on opposite sides of the world to connect with each other and enable all of the wonderful modern applications we have today.",
  },
};
