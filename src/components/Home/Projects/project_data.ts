export interface Project {
  title: string;
  img: string;
  description: string[];
  src?: string;
  live_link?: string;
}

export const projects: Project[] = [
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
  },
  {
    title: "RISC V 32I Pipelined CPU - System Verilog & C++",
    img: "riscv.png",
    description: [
      "Designed and implemented the hardware for pipelining the CPU",
      "Designed and implemented a hazard unit that could stall, flush instructions, and pass data to previous stages to prevent stalls",
      "Wrote test benches in C++ to run programs on the CPU",
    ],
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
