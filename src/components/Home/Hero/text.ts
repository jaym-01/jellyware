export interface ReadTextProps {
  command: string;
  output: string;
  duration: number;
}

export const displayText: ReadTextProps[] = [
  {
    command: "cat intro.txt",
    output: "Hi, I'm Jay!",
    duration: 3000,
  },
  {
    command: "cat whoami.txt",
    output:
      "I'm a software engineer and student at Imperial College London, interested in full stack development, low level programming and ML!\n\nYou can find out more about my skills below vvv",
    duration: 6000,
  },
];
