import Link from "next/link";
import styles from "@/styles/components/header.module.scss";
import { navData } from "@/utils/nav_data";

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.headerComp}>
        <Link href={navData[0].link} className={styles.titleWrapper}>
          <h1 className={styles.headerTitle}>{navData[0].title}</h1>
          <div className={styles.cursorWrapper}>
            <div className={styles.cursor}></div>
          </div>
        </Link>
        <nav className={styles.nav}>
          {navData.slice(1).map((navLink, i) => (
            <Link key={i} href={navLink.link} className={styles.navLink}>
              {navLink.title}
            </Link>
          ))}
        </nav>
      </header>
    </div>
  );
}
