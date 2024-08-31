"use client";

import styles from "@/styles/components/home/hero.module.scss";
import { Typing, IntroText } from "./TextComponents";
import { displayText } from "./text";

const displayTime = 4000;

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.introCont}>
        <IntroText />
      </div>
    </div>
  );
}
