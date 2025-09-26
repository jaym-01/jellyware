"use client";

import styles from "@/styles/components/home/terminal.module.scss";
import { useEffect, useState } from "react";
import { ReadTextProps, displayText } from "./text";
import Typer from "./Typer";
import { cubicBezier } from "motion";

export function Terminal({ ...props }) {
  const [textNum, setTextNum] = useState<number>(0);
  const [showEmpty, setShowEmpty] = useState<boolean>(false);

  return (
    <TerminalAnimation
      text={showEmpty ? undefined : displayText[textNum]}
      handleComplete={(cb: () => void) => {
        setTimeout(() => {
          setShowEmpty(true);
          cb();
          setTimeout(() => {
            setTextNum((prev) => (prev + 1) % displayText.length);
            setShowEmpty(false);
          }, 300);
        }, 300);
      }}
      {...props}
    />
  );
}

export function TerminalAnimation({
  text,
  handleComplete,
  ...props
}: {
  text?: ReadTextProps;
  handleComplete: (cb: () => void) => void;
}) {
  const [showOutput, setShowOutput] = useState<boolean>(false);
  const [showClear, setShowClear] = useState<boolean>(false);
  const [showCommand, setShowCommand] = useState<boolean>(true);

  const handleCommandComplete = function () {
    setTimeout(() => {
      setShowOutput(true);
      if (text?.duration) {
        setTimeout(() => setShowClear(true), text?.duration);
      }
    }, 300);
  };

  useEffect(() => {
    setShowCommand(true);
    setShowOutput(false);
    setShowClear(false);
  }, [text?.command, text?.output, text?.duration]);

  return (
    <div className={styles.terminal} {...props}>
      <p className={styles.line}>
        <BashPrompt />
        {showCommand && text && (
          <Typer
            text={text.command}
            handleTextComplete={handleCommandComplete}
          />
        )}
      </p>
      {text && showOutput && (
        <>
          <p className={styles.line}>
            <text.output />
          </p>
          <p className={styles.line}>
            <BashPrompt />
            {!showClear ? (
              <span className={styles.cursorAnimation}>&nbsp;</span>
            ) : (
              <Typer
                text="clear"
                handleTextComplete={() =>
                  handleComplete(() => {
                    setShowClear(false);
                    setShowOutput(false);
                    setShowCommand(false);
                  })
                }
              />
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
        fontWeight: "600",
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
