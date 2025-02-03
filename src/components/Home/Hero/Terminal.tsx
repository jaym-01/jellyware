"use client";

import styles from "@/styles/components/home/terminal.module.scss";
import { useState } from "react";
import { ReadTextProps, displayText } from "./text";
import Typer from "./Typer";

const OUTPUT_DURATION = 5000;

export function Terminal() {
  const [textNum, setTextNum] = useState<number>(0);

  return (
    <TerminalAnimation
      key={textNum}
      text={displayText[textNum]}
      handleComplete={() => {
        setTextNum((prev) => (prev + 1) % displayText.length);
      }}
    />
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
    setShowOutput(true);
    setTimeout(() => setShowClear(true), OUTPUT_DURATION);
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
