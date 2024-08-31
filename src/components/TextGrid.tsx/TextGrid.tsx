import styles from "@/styles/components/textgrid.module.scss";

export default function TextGrid() {
  let vals: number[] = [];
  for (let i = 0; i < 30; i++) {
    vals.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.baseCols}>
        {vals.map((val) => (
          <p
            key={val}
            style={{
              padding: "0",
            }}
          >
            {val}
          </p>
        ))}
      </div>
      <div className={styles.baseCols}>
        {vals.map((val) => (
          <p
            key={val}
            style={{
              padding: "0",
            }}
          >
            {val}
          </p>
        ))}
      </div>
      <div className={styles.highlightWrapper}>
        {vals.map((val) => (
          <div key={val} className={styles.highlight}></div>
        ))}
      </div>
    </div>
  );
}
