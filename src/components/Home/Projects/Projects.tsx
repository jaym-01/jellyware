import styles from "@/styles/components/home/projects.module.scss";
import { Project, projects } from "./project_data";
import Image from "next/image";
import { motion } from "motion/react";
import { RefObject } from "react";

export default function Projects({
  parentRef,
  ...props
}: {
  parentRef: RefObject<HTMLElement | null>;
  [x: string]: any;
}) {
  return (
    <section className={styles.projectWrapper} {...props}>
      <h2>projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={styles.projectContainer}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3 * ((i + 2) / 2),
              ease: "easeInOut",
            }}
            viewport={{
              root: parentRef,
            }}
          >
            <ProjectBox project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectBox({ project }: { project: Project }) {
  return (
    <div className={styles.projectBox}>
      <h3
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        {project.title}
      </h3>
      <div className={styles.imgWrapper}>
        <Image
          src={`/projects/${project.img}`}
          alt=""
          width={1000}
          height={1000}
          style={{
            height: "100%",
            width: "auto",
            maxWidth: "70vw",
          }}
        />
      </div>
      <ul>
        {project.description.map((txt, i) => (
          <li key={i} style={{ padding: 5 }}>
            {txt}
          </li>
        ))}
      </ul>

      <div className={styles.linkWrapper}>
        {project.src && (
          <a href={project.src} target="_blank">
            View Code
          </a>
        )}
        {project.extra_link && project.extra_link_text && (
          <div style={{ flexGrow: "1", textAlign: "end" }}>
            <a href={project.extra_link} target="_blank">
              {project.extra_link_text}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
