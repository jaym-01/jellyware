import React from "react";
import styles from "@/styles/components/home/terminal.module.scss";

export interface ReadTextProps {
  command: string;
  output: () => React.JSX.Element;
  duration: number;
}

export const displayText: ReadTextProps[] = [
  {
    command: "whoami",
    output: () => (
      <span className={styles.terminalOutput}>
        👋 Hey, I’m Jay, a software engineer.
        <br />
        <br />
        <br />
        I’m into building scalable backend systems, systems programming, and
        machine learning.
        <br />
        <br />
        <br />
        I’m in my final year at <b>Imperial College London</b>, studying
        Electronic and Information Engineering
      </span>
    ),
    duration: 4000,
  },
];
