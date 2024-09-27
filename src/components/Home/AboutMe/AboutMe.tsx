import styles from "@/styles/components/home/aboutme.module.scss";
import TextGrid from "@/components/TextGrid/TextGrid";

const text = `I'm currently in my 3rd year studying Computer Engineering (Electronic and Information Engineering) at Imperial College London.

So far, I've achieved a First and Dean's list in my 1st and 2nd year.

I previously worked at OncoFlow as a Full Stack Engineer, developing their initial product and company site.

Languages/Frameworks I've used:
(proficient)
- Typescript
- React.js
- Next.js
- Python
- Tailwind CSS

(intermediate)
- Electron
- C++
- C
- Express.js

I also love developing with Linux, I'm familiar with Linux terminal commands and basic bash scripting.

I have also briefly worked with Docker, after helping build an app that automatically containerizes a python FastAPI backend.

I'm familiar with Git and Github, from using it in almost all of my projects.

I've also deployed full-stack apps and backends to AWS using App runner and EC2.
`;

export default function AboutMe() {
  return (
    <div className={styles.tgContainer}>
      <h2 className={styles.textTitle}>about_me</h2>
      <TextGrid text={text} />
    </div>
  );
}
