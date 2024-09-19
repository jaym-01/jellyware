"use client";

import styles from "@/styles/components/home/hero.module.scss";
import { IntroText } from "./TextComponents";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

const displayTime = 4000;

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <div className={styles.heroWrapper}>
      <motion.div ref={targetRef} className={styles.introCont}>
        <IntroText />
      </motion.div>
    </div>
  );
}
