"use client";

import styles from "@/styles/components/home/hero.module.scss";
import { useEffect, useState } from "react";

export const typingSpeed = 100;

export function Typing({ text, delay }: { text: string; delay: number }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndex((prev) => (prev === text.length ? 0 : prev + 1));
      },
      index === text.length ? delay : typingSpeed
    );
    return () => clearInterval(interval);
  }, [index, setIndex, text, delay]);

  return (
    <>
      <span
        style={{
          marginLeft: "15px",
        }}
      >
        {" "}
        {text.slice(0, index)}
      </span>
      {index === 0 && <div className={styles.cursor}></div>}
    </>
  );
}
