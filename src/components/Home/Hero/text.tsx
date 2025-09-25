import React from "react";
import styles from "@/styles/components/home/terminal.module.scss";

export interface ReadTextProps {
  command: string;
  output: () => React.JSX.Element;
  duration: number;
}

export const displayText: ReadTextProps[] = [
  {
    command: "cat intro.txt",
    output: () => (
      <span className={styles.terminalOutput}>Hi, I{"'"}m Jay!</span>
    ),
    duration: 2000,
  },
  {
    command: "cat whoami.txt",
    output: () => (
      <span className={styles.terminalOutput}>
        I{"'"}m a software engineer and student at Imperial College London,
        interested in full stack development, low level programming and ML!
        <br />
        <br />
        I recently won IC HACK 2025
        <br />
        <br />
        You can find out more about me below vvv
      </span>
    ),
    duration: 5000,
  },
];
