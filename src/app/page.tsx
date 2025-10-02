"use client";

import { Hero } from "@/components/Home/Hero/Hero";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import Projects from "@/components/Home/Projects/Projects";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main ref={containerRef}>
      {/* Hero section with zed.dev inspired design */}
      <Hero id="hero" />

      {/* Content sections with updated spacing */}
      <div
        style={{
          display: "flex",
          gap: "20vh",
          flexDirection: "column",
          paddingBottom: "15vh",
        }}
      >
        <AboutMe id="aboutme" />

        <Projects parentRef={containerRef} id="projects" />
      </div>
    </main>
  );
}
