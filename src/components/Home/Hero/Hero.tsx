"use client";

import styles from "@/styles/components/home/hero.module.scss";
import { Typing, BashPrompt, TextOutput, typingSpeed } from "./TextComponents";
import { displayText } from "./text";

const displayTime = 4000;

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.introCont}>
        <BashPrompt />
        {displayText.map((text, i) => {
          console.log("here:", text.command.length * typingSpeed);

          const commandDisplayTime =
            displayText
              .slice(0, i + 1)
              .map((val) => val.command.length)
              .reduce((acc, val) => acc + val) *
              typingSpeed +
            500;

          return (
            <>
              <Typing
                text={text.command}
                showDelay={(displayText.length - i - 1) * displayTime}
                hideDelay={i * displayTime}
              />

              <TextOutput
                key={i}
                text={text.output}
                hideDelay={commandDisplayTime * (i + 1)}
                showDelay={
                  displayTime -
                  commandDisplayTime +
                  displayTime * (displayText.length - i - 2) +
                  displayText[displayText.length - 1].command.length *
                    typingSpeed
                }
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
