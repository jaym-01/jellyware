"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/components/home/terminal.module.scss";

const TYPING_SPEED = 130;

export default function Typer({
  text,
  handleTextComplete,
}: {
  text: string;
  handleTextComplete: () => void;
}) {
  const [ti, setTi] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTi((prevTi) => {
        if (prevTi < text.length) return prevTi + 1;
        else {
          clearInterval(intervalId);
          handleTextComplete();
        }
        return prevTi;
      });
    }, TYPING_SPEED);

    return () => {
      if (ti < text.length) clearInterval(intervalId);
    };
  }, []);

  return (
    <span>
      {text.replaceAll(" ", "\u00A0").slice(0, ti)}
      <span
        className={styles.cursor}
        style={{
          opacity: ti >= text.length ? 0 : 1,
          transitionDelay: "0.3s",
        }}
      >
        &nbsp;
      </span>
    </span>
  );
}
