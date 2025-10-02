import styles from "@/styles/components/home/workexperience.module.scss";
import Link from "next/link";

export default function WorkExperience({ ...props }) {
  return (
    <section className={styles.workExperienceWrapper} {...props}>
      <div className={styles.contentContainer}>
        <p className={styles.introText}>I previously worked at:</p>

        <ul className={styles.experienceList}>
          <li className={styles.experienceItem}>
            <div className={styles.companyHeader}>
              Meta - Software Engineering Intern (Facebook Messenger Web) (2025)
            </div>
            <ul className={styles.roleDetails}>
              <li>
                I worked on adding new features to Messenger & Facebook
                Messaging web to increase message sends (I can&apos;t share the
                features I worked on yet 😢)
              </li>
              <li>
                Involved in both frontend and backend development of features -
                I worked with <strong>React</strong> &{" "}
                <strong>JavaScript</strong>
              </li>
            </ul>
          </li>

          <li className={styles.experienceItem}>
            <div className={styles.companyHeader}>
              <a
                href="https://www.linkedin.com/company/oncoflow/"
                target="_blank"
                style={{ color: "inherit" }}
              >
                OncoFlow
              </a>{" "}
              - Full-stack engineer (2024)
            </div>
            <ul className={styles.roleDetails}>
              <li>
                Joined as the first <strong>Full-Stack Engineer</strong>,
                leading the development of the company&apos;s main product.
              </li>
              <li>
                Built a dashboard platform enabling NHS workers to log in,
                interface with and run AI models, connect to medical databases
                with cancer treatment information, and generate and edit
                AI-produced medical reports.
              </li>
              <li>
                I had to design the frontend, architect the backend and build
                the app to a secure and reliable standard - taking the app from
                idea to testing and deploying it on a VPS.
              </li>
              <li>
                I worked with Next.js, <strong>Typescript</strong> and{" "}
                <strong>Python</strong>
              </li>
            </ul>
          </li>
        </ul>

        <p className={styles.cvLink}>
          <Link href="/cv" target="_blank">
            Read more about what I&apos;ve done in my CV
          </Link>
        </p>
      </div>
    </section>
  );
}
