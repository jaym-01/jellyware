import styles from "@/styles/components/home/hero.module.scss";
import { Typing } from "./TextComponents";

const text: string[] = [" cat intro.txt"];
export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.introCont}>
        <div className={styles.lineContainer}>
          <div className={styles.textWrapper}>
            <BashPrompt />
            <Typing text={text[0]} delay={10000} />
          </div>
        </div>
        <p>
          Hi, I{"'"}m Jay!
          <br />
          <br />
        </p>

        <p>
          <BashPrompt /> cat whoami.txt
        </p>
        <p>
          I{"'"}m a software engineer and student at Imperial College London,
          interested in full stack development, low level programming and ML!
          <br />
          <br />
          You can find out more about my skills below vvv
          <br />
          <br />
        </p>
        <p>
          <BashPrompt /> clear
        </p>
      </div>
    </div>
  );
}

export function BashPrompt() {
  return (
    <span
      style={{
        fontWeight: "bold",
      }}
    >
      <span
        style={{
          color: "#16C60C",
        }}
      >
        home@jellyware
      </span>
      :
      <span
        style={{
          color: "#3B78FF",
        }}
      >
        ~
      </span>
      $
    </span>
  );
}
