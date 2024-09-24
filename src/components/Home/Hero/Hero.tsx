"use client";

import styles from "@/styles/components/home/hero.module.scss";
import { IntroText } from "./TextComponents";

const displayTime = 4000;

export default function Hero() {
  return (
    <div className={styles.introCont}>
      <IntroText />
    </div>
  );
}
