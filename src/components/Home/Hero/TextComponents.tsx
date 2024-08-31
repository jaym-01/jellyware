"use client";

import styles from "@/styles/components/home/hero.module.scss";
import { useEffect, useState } from "react";

export const typingSpeed: number = 100;

export function Typing({
  text,
  showDelay,
  hideDelay,
}: {
  text: string;
  showDelay: number;
  hideDelay: number;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => {
        setIndex((prev) => (prev === text.length ? 0 : prev + 1));
      },
      index === 0 ? hideDelay : index === text.length ? showDelay : typingSpeed
    );
    return () => clearInterval(interval);
  }, [index, setIndex, text, showDelay, hideDelay]);

  return (
    <>
      <span
        style={{
          marginLeft: "15px",
          display: "inline-block",
        }}
      >
        {text.slice(0, index)}
      </span>
      {index === 0 && (
        <div
          className={styles.cursor}
          style={{
            display: "inline-block",
          }}
        ></div>
      )}
    </>
  );
}

export function BashPrompt({ ...props }) {
  return (
    <span
      style={{
        fontWeight: "bold",
      }}
      {...props}
    >
      <span
        style={{
          color: "#16C60C",
        }}
      >
        home@jellyware
      </span>
      :
      <span
        style={{
          color: "#3B78FF",
        }}
      >
        ~
      </span>
      $
    </span>
  );
}

export function TextOutput({
  text,
  hideDelay,
  showDelay,
}: {
  text: string;
  hideDelay: number;
  showDelay: number;
}) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setShow((prev) => !prev);
      },
      !show ? hideDelay : showDelay
    );
    return () => clearTimeout(timeout);
  }, [show]);

  return (
    <>
      <p
        style={{
          opacity: show ? 1 : 0,
        }}
      >
        {text}
      </p>
      <BashPrompt
        style={{
          opacity: show ? 1 : 0,
          display: "inline-block",
        }}
      />
    </>
  );
}
