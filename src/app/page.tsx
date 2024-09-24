"use client";

import Hero from "@/components/Home/Hero/Hero";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import { motion } from "framer-motion";
import Projects from "@/components/Home/Projects/Projects";

const CONTENTS = [
  { id: "hero", component: <Hero key={0} /> },
  { id: "aboutme", component: <AboutMe key={1} /> },
  { id: "projects", component: <Projects key={2} /> },
];

export default function Home() {
  return (
    <main>
      {CONTENTS.map((c, i) => {
        return (
          <section
            key={i}
            id={c.id}
            style={{
              padding: 30,
              display: "flex",
              justifyContent: "center",
              minHeight: "70vh",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 1200,
              }}
            >
              {c.component}
            </div>
          </section>
        );
      })}
    </main>
  );
}
