"use client";

import styles from "@/styles/components/home/hero.module.scss";
import { useEffect, useState } from "react";
import { ReadTextProps } from "./text";
import motion from "framer-motion";

export const typingSpeed: number = 150;
const transitionDelay = "0.8s";

export function Typing({ text }: { text: ReadTextProps }) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndex((prev) => (prev + 1) % (text.command.length + 1));
      },
      index === text.command.length ? 3000 : typingSpeed
    );
    return () => clearInterval(interval);
  }, [index]);

  const outputStyle = {
    opacity: index === text.command.length ? 1 : 0,
    transitionDelay: transitionDelay,
  };

  return (
    <div>
      <div className={styles.lineContainer}>
        <BashPrompt />
        <span>{text.command.slice(0, index)}</span>
        <div
          className={index === 0 ? styles.cursorAnimation : styles.cursor}
          style={{
            opacity: index === text.command.length ? 0 : 1,
            transitionDelay: "0.3s",
          }}
        ></div>
      </div>
      <p style={outputStyle}>{text.output}</p>
      <div style={outputStyle} className={styles.lineContainer}>
        <BashPrompt />
        <div className={styles.cursorAnimation}></div>
      </div>
    </div>
  );
}

export function BashPrompt({ ...props }) {
  return (
    <span
      style={{
        fontWeight: "bold",
        paddingRight: "15px",
      }}
      {...props}
    >
      <span
        style={{
          color: "#16C60C",
        }}
      >
        home@jellyware
      </span>
      :
      <span
        style={{
          color: "#3B78FF",
        }}
      >
        ~
      </span>
      $
    </span>
  );
}
