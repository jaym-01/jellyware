import styles from "@/styles/components/separator.module.scss";

export default function Separator({ height }: { height: number }) {
  return (
    <div
      className={styles.separator}
      style={{
        height: height,
      }}
    />
  );
}
