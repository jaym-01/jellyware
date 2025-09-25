"use client";

import { useEffect, useState, useRef } from "react";
import Cursor from "./Cursor";
import styles from "@/styles/components/home/terminal.module.scss";

const TYPING_SPEED = 130;

export default function Typer({
  text,
  handleTextComplete,
}: {
  text: string;
  handleTextComplete: () => void;
}) {
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const [ti, setTi] = useState(0);
  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setTi((prevTi) => prevTi + 1);
    }, TYPING_SPEED);

    return () => {
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
    };
  }, []);

  useEffect(() => {
    if (ti >= text.length && intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      handleTextComplete();
    }
  }, [ti]);

  return (
    <span className={styles.terminalOutput}>
      {text.replaceAll(" ", "\u00A0").slice(0, ti)}
      <Cursor
        style={{
          opacity: ti >= text.length ? 0 : 1,
          transitionDelay: "0.3s",
        }}
      />
    </span>
  );
}
