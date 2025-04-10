"use client";

import styles from "@/styles/components/home/terminal.module.scss";
import { useState } from "react";
import { ReadTextProps, displayText } from "./text";
import Typer from "./Typer";

export function Terminal({ ...props }) {
  const [textNum, setTextNum] = useState<number>(0);

  return (
    <div className={styles.terminalWrapper} {...props}>
      <TerminalAnimation
        key={textNum}
        text={displayText[textNum]}
        handleComplete={() => {
          setTimeout(
            () => setTextNum((prev) => (prev + 1) % displayText.length),
            300
          );
        }}
      />
    </div>
  );
}

export function TerminalAnimation({
  text,
  handleComplete,
  ...props
}: {
  text: ReadTextProps;
  handleComplete: () => void;
}) {
  const [showOutput, setShowOutput] = useState<boolean>(false);
  const [showClear, setShowClear] = useState<boolean>(false);

  const handleCommandComplete = function () {
    setTimeout(() => {
      setShowOutput(true);
      setTimeout(() => setShowClear(true), text.duration);
    }, 300);
  };

  return (
    <div className={styles.terminal} {...props}>
      <p className={styles.line}>
        <BashPrompt />
        <Typer text={text.command} handleTextComplete={handleCommandComplete} />
      </p>
      {showOutput && (
        <>
          <p className={styles.line}>
            <text.output />
          </p>
          <p className={styles.line}>
            <BashPrompt />
            {!showClear ? (
              <span className={styles.cursorAnimation}>&nbsp;</span>
            ) : (
              <Typer text="clear" handleTextComplete={() => handleComplete()} />
            )}
          </p>
        </>
      )}
    </div>
  );
}

export function BashPrompt({ ...props }) {
  return (
    <span
      style={{
        fontWeight: "bold",
        paddingRight: "15px",
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
