export interface Project {
  title: string;
  img: string;
  description: string[];
  src?: string;
  extra_link?: string;
  extra_link_text?: string;
}

export const projects: Project[] = [
  {
    title: "VisuMath",
    img: "visumath.png",
    description: [
      "This project won the research category of IC HACK 2025, Europe's largest student run hackathon!",
      "This tool takes a math topic as input and generates a video (based on 3blue1brown videos) and interactive page.",
      "Videos are stored on AWS S3 buckets, metadata is stored in dynamodb and video title are stored in a vector database for querying.",
      "The backend consists of three layers: the API server (built with FastAPI, interfacing the video and meta data storage), a Redis message queue, and a Celery worker (runs the AI Agent workflow).",
      "This architecture allows the API server to remain responsive while long-running tasks are offloaded to a separate process - generating a video takes around 2-5mins.",
    ],
    src: "https://devpost.com/software/intellilearn-kjxv19?ref_content=user-portfolio&ref_feature=in_progress",
    extra_link: "https://www.youtube.com/watch?v=y3tJCa_o4J0",
    extra_link_text: "Watch the demo",
  },
  {
    title: "snipr",
    img: "snipr.png",
    description: [
      "Production-ready desktop app that removes silences and provides transcripts for audio files.",
      "Currently has 1 user 😱",
      "Implemented decoding and encoding audio files to and from PCM samples with FFMPEG, an algorithm to remove silences in O(n) time and provided a responsive UI by spawning new threads to process the audio file, all in Rust.",
      "Implemented a CI-CD pipeline using GitHub Actions to build the app and provide automatic updates for users. ",
      "Developed a Rust-Python integration using PyO3 to call OpenAI’s Whisper model to provide audio transcriptions.",
    ],
    src: "https://github.com/jaym-01/snipr",
  },
  {
    title: "Rx2Label",
    img: "rx2label.png",
    description: [
      "Checks a picture of a doctors prescription against medical literature (it can read a doctors handwriting :))",
      "Takes a valid prescription and generates a label for the medication",
      "Built at Hack UK hosted by a16z with Mistals Pixtral model",
      "I Built the entire frontend and backend using React.js, Typescript, Tailwind and Python FastAPI",
      "Supabase is used for image storage",
    ],
    src: "https://github.com/MalikHarrisAhm/Rx2Label",
    extra_link: "https://www.youtube.com/watch?v=yM-t-zbx8kA",
    extra_link_text: "Watch the demo",
  },
  {
    title: "This site",
    img: "site.png",
    description: [
      "Built using Next.js, React.js, Typescript & SCSS",
      "Deployed to Vercel and domain is protected by Cloudflare",
      "CV is an API endpoint that serves my CV",
      "Terminal animation at the top is built from scratch with React and SCSS",
    ],
    src: "https://github.com/jaym-01/jellyware",
  },
  {
    title: "Jellis",
    img: "jellis.png",
    description: [
      "Implementation of C++ in Redis",
      "Supports multiple clients simultaneously - implemented using the boost ASIO library with a event loop and TCP sockets",
      "Developed a parser and encoder for the Redis serialization protocol (RESP)",
      "Currently only supports the in memory database but I’m working on data persistence with RDB.",
    ],
    src: "https://github.com/jaym-01/Jellis",
  },
  {
    title: "Neural Network from scratch - using Python and NumPy",
    img: "nn.png",
    description: [
      "Implemented backpropagation to find the gradient of the loss with respect to each neuron",
      "Implemented gradient descent to update the weight and reduce the loss",
    ],
    src: "https://github.com/jaym-01/ml_learning/tree/master/micrograd",
  },
  {
    title: "C90 to RISC V assembly - C++",
    img: "gcc.png",
    description: [
      "Achieved 89% - passing 179 out of 201 tests",
      "Added support for: chars, ints, floats (IEEE 754), arrays, pointers, for, while & do while loops, if statements, switch statements, functions, strings, typedef keyword, arithmetic (pre-increment operator, post-increment, etc.), constants, local & global variables (including correct scoping), enums, sizeof",
    ],
    src: "https://github.com/jaym-01/C90ToRISCV",
  },
  {
    title: "RISC V 32I Pipelined CPU - System Verilog & C++",
    img: "riscv.png",
    description: [
      "Designed and implemented the hardware for pipelining the CPU",
      "Designed and implemented a hazard unit that could stall, flush instructions, and pass data to previous stages to prevent stalls",
      "Wrote test benches in C++ to run programs on the CPU",
    ],
    src: "https://github.com/jaym-01/RISCVCPU",
  },
  {
    title: "mini grid project",
    img: "solar.png",
    description: [
      "Create a full-stack app with Next.js, Typescript, Tailwind CSS and Python",
      "Displayed real-time data from Raspberry Pi Picos using MQTT",
      "Programmed the Raspberry Pi Picos to communicate via MQTT",
      "Used MongoDB to store previous data and plot it using Recharts.js",
      "Deployed the MQTT broker to an AWS EC2 instance and shared the web app using ngrok",
      "Built a neural network using PyTorch to predict the buy price of electricity",
    ],
  },
];
