"use client";

import { Hero } from "@/components/Home/Hero/Hero";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import Projects from "@/components/Home/Projects/Projects";
import WorkExperience from "@/components/Home/WorkExperience/WorkExperience";
import { useRef } from "react";
import Separator from "../components/Separator/Separator";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef}>
      <Hero id="aboutme" />

      <WorkExperience id="experience" />

      <Separator height={120} />

      {/* Content sections with updated spacing */}
      <div
        style={{
          display: "flex",
          gap: "20vh",
          flexDirection: "column",
          paddingBottom: "15vh",
        }}
      >
        <Projects parentRef={containerRef} id="projects" />
      </div>
    </main>
  );
}
