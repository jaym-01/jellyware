import styles from "@/styles/components/home/terminal.module.scss";
import React from "react";

interface CursorProps extends React.HTMLAttributes<HTMLSpanElement> {
  blinking?: boolean;
}

export default function Cursor({ blinking = false, ...props }: CursorProps) {
  return (
    <span
      className={blinking ? styles.cursorAnimation : styles.cursor}
      {...props}
    >
      &nbsp;
    </span>
  );
}
