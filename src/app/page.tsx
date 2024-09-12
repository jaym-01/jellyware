"use client";

import Hero from "@/components/Home/Hero/Hero";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import { motion } from "framer-motion";
import Projects from "@/components/Home/Projects/Projects";
export default function Home() {
  return (
    <main>
      {[
        { id: "hero", component: <Hero key={0} /> },
        { id: "aboutme", component: <AboutMe key={1} /> },
        { id: "projects", component: <Projects key={2} /> },
      ].map((comp, i) => (
        <motion.section
          id={comp.id}
          key={i}
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            delay: i * 0.5,
            transition: "easeInOut",
            duration: 0.5,
          }}
        >
          {comp.component}
        </motion.section>
      ))}
    </main>
  );
}
