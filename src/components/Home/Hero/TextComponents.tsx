"use client";

import styles from "@/styles/components/home/hero.module.scss";
import { useEffect, useState } from "react";
import { ReadTextProps, displayText } from "./text";

const displayTextDuration = 5000;

export function IntroText() {
  const [index, setIndex] = useState<number>(0);
  const [textNum, setTextNum] = useState<number>(0);

  useEffect(() => {
    if (index === 0)
      setTimeout(
        () => setTextNum((prev) => (prev + 1) % displayText.length),
        100
      );
  }, [index]);

  return (
    <div className={styles.lineContainer}>
      <Typing text={displayText[textNum]} index={index} setIndex={setIndex} />
    </div>
  );
}

const typingSpeed: number = 150;
const transitionDelay = "0.1s";
const clearText = "clear";

export function Typing({
  text,
  setIndex,
  index,
}: {
  text: ReadTextProps;
  setIndex: (data: number | ((prev: number) => number)) => void;
  index: number;
}) {
  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndex(
          (prev) => (prev + 1) % (text.command.length + 1 + clearText.length)
        );
      },
      index === text.command.length
        ? text.duration
        : index === text.command.length + clearText.length
        ? 500
        : index === 0
        ? typingSpeed + 100
        : typingSpeed
    );
    return () => clearInterval(interval);
  }, [index]);

  const outputStyle = {
    opacity: index >= text.command.length ? 1 : 0,
    transitionDelay: transitionDelay,
  };

  return (
    <div>
      <div className={styles.lineContainer}>
        <BashPrompt />
        <span>
          {text.command.slice(0, Math.min(index, text.command.length))}
        </span>
        <div
          className={index === 0 ? styles.cursorAnimation : styles.cursor}
          style={{
            opacity: index >= text.command.length ? 0 : 1,
            transitionDelay: "0.3s",
          }}
        ></div>
      </div>
      <p style={outputStyle}>{text.output}</p>
      <div style={outputStyle} className={styles.lineContainer}>
        <BashPrompt />
        {index > text.command.length && (
          <span>{clearText.slice(0, index - text.command.length)}</span>
        )}
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
