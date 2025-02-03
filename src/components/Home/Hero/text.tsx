import React from "react";

export interface ReadTextProps {
  command: string;
  output: () => React.JSX.Element;
  duration: number;
}

export const displayText: ReadTextProps[] = [
  {
    command: "cat intro.txt",
    output: () => <span>Hi, I{"'"}m Jay!</span>,
    duration: 3000,
  },
  {
    command: "cat whoami.txt",
    output: () => (
      <span>
        I{"'"}m a software engineer and student at Imperial College London,
        interested in full stack development, low level programming and ML!
        <br />
        <br />
        I recently won IC HACK 2025
        <br />
        <br />
        You can find out more about my skills below vvv
      </span>
    ),
    duration: 6000,
  },
];
