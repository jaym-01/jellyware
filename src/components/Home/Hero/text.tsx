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
        👋 Hey, I’m Jay. I build things.
        <br />
        <br />
        <br />
        I’m a software engineer into building scalable backend systems, systems
        programming, and machine learning.
        <br />
        <br />
        <br />
        I’m in my final year at Imperial College London, studying Electronic and
        Information Engineering
      </span>
    ),
    duration: 8000,
  },
];
