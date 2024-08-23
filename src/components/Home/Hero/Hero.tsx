import Image from "next/image";
import styles from "@/styles/components/home/hero.module.scss";
import { linkData } from "./hero_data";

export default function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.introCont}>
        <p>
          <BashPrompt /> cat intro.txt
        </p>
        <p>
          Hi, I{"'"}m Jay!
          <br />
          <br />
        </p>

        <p>
          <BashPrompt /> cat whoami.txt
        </p>
        <p>
          I{"'"}m a Software engineer with experience in full stack development.
          <br />I{"'"}m also interested in low level development, hardware and
          ML!!
          <br />
          <br />
        </p>
      </div>
      <div className={styles.linkContainer}>
        {linkData.map(({ text, link, image }, i) => (
          // <div className={styles.linkBox} key={i}>
          <a
            key={i}
            className={styles.linkBox}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={image}
              alt={text}
              width={30}
              height={30}
              layout="fixed"
            />
            <p className={styles.linkText}>{text}</p>
          </a>
          // </div>
        ))}
      </div>
    </div>
  );
}

function BashPrompt() {
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
