"use client";

import { Terminal } from "@/components/Home/Hero/Terminal";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import { motion } from "motion/react";
import Projects from "@/components/Home/Projects/Projects";
import { ReactNode, RefObject, useRef } from "react";
import styles from "@/styles/components/home/page.module.scss";
import { SectionProps } from "@/utils/types";
import Link from "next/link";

const CONTENTS = [
  { id: "terminal", component: Terminal },
  { id: "aboutme", component: AboutMe },
  { id: "projects", component: Projects },
];

export default function Home() {
  const containerRef = useRef(null);

  return (
    <main
      ref={containerRef}
      style={{
        display: "flex",
        paddingTop: "15vh",
        gap: "40vh",
        flexDirection: "column",
        paddingBottom: "15vh",
      }}
    >
      <Terminal id="terminal" />

      <AboutMe id="aboutme" />

      <Projects parentRef={containerRef} id="projects" />

      <div style={{ paddingLeft: 40, paddingRight: 40, textAlign: "center" }}>
        <Link
          href="/json-check"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          Validate JSON text
        </Link>
      </div>
    </main>
  );
}

function PageSection({
  id,
  parentRef,
  Component,
  ...props
}: {
  id: string;
  parentRef: RefObject<HTMLElement | null>;
  Component: ({ parentRef, ...props }: SectionProps) => JSX.Element;
}) {
  const curRef = useRef(null);

  return (
    <motion.section
      {...props}
      id={id}
      ref={curRef}
      className={styles.section}
      style={{
        paddingTop: 170,
        display: "flex",
        justifyContent: "center",
      }}
      initial={{
        opacity: 0,
        //  x: -50,
        //  y: -50
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        root: parentRef,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1500,
        }}
      >
        {<Component parentRef={curRef}></Component>}
      </div>
    </motion.section>
  );
}
