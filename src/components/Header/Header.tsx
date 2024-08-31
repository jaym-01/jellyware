"use client";

import Link from "next/link";
import styles from "@/styles/components/header.module.scss";
import { navData } from "@/utils/nav_data";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [smallScreen, setSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) {
        setSmallScreen(false);
        setOpen(false);
      } else setSmallScreen(true);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.headerComp}>
        <Link href={navData[0].link} className={styles.titleWrapper}>
          <h1 className={styles.headerTitle}>{navData[0].title}</h1>
          <div className={styles.cursorWrapper}>
            <div className={styles.cursor}></div>
          </div>
        </Link>

        {(!smallScreen || open) && (
          <nav className={styles.nav}>
            {navData.slice(1).map((navLink, i) =>
              navLink.link[0] === "/" ? (
                <div key={i}>
                  <Link href={navLink.link} className={styles.navLink}>
                    {navLink.title}
                  </Link>
                </div>
              ) : (
                <a
                  className={styles.navLink}
                  href={navLink.link}
                  key={i}
                  target="_blank"
                >
                  {navLink.title}
                </a>
              )
            )}
          </nav>
        )}

        <div className={styles.ddbWrapper}>
          <span
            className={styles.dropdownButton}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "clear" : "ls"}
          </span>
        </div>
      </header>
    </div>
  );
}
