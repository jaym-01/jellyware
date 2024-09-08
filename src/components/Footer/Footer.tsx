import styles from "@/styles/components/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.f1}>
          <a
            className={styles.ytLink}
            href="https://www.youtube.com/@jellyware-1"
            target="_blank"
          >
            My YouTube Channel ;)
          </a>
        </div>
        <div className={styles.f2}>
          <p>© jellyware 2024</p>
        </div>
      </footer>
    </div>
  );
}
