import styles from "@/styles/components/textgrid.module.scss";

export default function TextGrid() {
  let vals: number[] = [];
  for (let i = 0; i < 30; i++) {
    vals.push(i);
  }

  return (
    <div className={styles.container}>
      {vals.map((val, i) => {
        return (
          <div key={i} className={styles["line-num"]}>
            {val}
          </div>
        );
      })}
      {vals.map((val, i) => (
        <div key={i} className={styles["highlight"]}>
          t
        </div>
      ))}
    </div>
  );
}
