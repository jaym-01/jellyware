"use client";

import Hero from "@/components/Home/Hero/Hero";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import {
  motion,
  useSpring,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Projects from "@/components/Home/Projects/Projects";
import { useRef, useState } from "react";

const CONTENTS = [
  { id: "hero", component: <Hero key={0} /> },
  { id: "aboutme", component: <AboutMe key={1} /> },
  { id: "projects", component: <Projects key={2} /> },
];

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main
      ref={containerRef}
      style={{
        display: "flex",
        gap: "25vh",
        flexDirection: "column",
      }}
    >
      {CONTENTS.map((c, i) => {
        return (
          <motion.section
            key={i}
            id={c.id}
            style={{
              padding: 30,
              display: "flex",
              justifyContent: "center",
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: Math.min(0.3 * (i + 1), 0.7),
                ease: "easeInOut",
              },
            }}
            viewport={{
              root: containerRef,
              amount: 0.1,
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 1500,
              }}
            >
              {c.component}
            </div>
          </motion.section>
        );
      })}
    </main>
  );
}
