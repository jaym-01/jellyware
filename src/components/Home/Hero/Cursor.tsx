import styles from "@/styles/components/home/terminal.module.scss";
import React from "react";

export default function Cursor(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={styles.cursor} {...props}>
      &nbsp;
    </span>
  );
}
