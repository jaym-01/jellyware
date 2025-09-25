"use client";

import styles from "@/styles/components/home/hero.module.scss";
import { Terminal } from "./Terminal";
import { useRef } from "react";

export function Hero({ ...props }) {
  const containerRef = useRef(null);

  return (
    <section className={styles.heroContainer} {...props}>
      {/* Middle decorative lines section */}
      <div className={styles.linesSection}>
        <div className={styles.linesPattern}></div>
      </div>

      {/* Terminal section with floating window */}
      <div className={styles.terminalSection}>
        <div className={styles.terminalContainer}>
          {/* Empty window bar */}
          <div className={styles.windowBar}></div>

          {/* Terminal component */}
          <div className={styles.terminalWrapper}>
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
