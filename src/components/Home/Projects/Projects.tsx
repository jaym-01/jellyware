import styles from "@/styles/components/home/projects.module.scss";
import { Project, projects } from "./project_data";
import Image from "next/image";
import { motion } from "motion/react";
import { SectionProps } from "@/utils/types";

export default function Projects({ parentRef, ...props }: SectionProps) {
  return (
    <div className={styles.container} {...props}>
      <h2>projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              translateX: -30,
              translateY: -30,
            }}
            whileInView={{
              opacity: 1,
              translateX: 0,
              translateY: 0,
            }}
            transition={{
              duration: 0.3 * ((i + 2) / 2),
              ease: "easeInOut",
            }}
            style={{
              display: "flex",
            }}
            viewport={{
              root: parentRef,
            }}
          >
            <ProjectBox project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProjectBox({ project }: { project: Project }) {
  return (
    <div className={styles.projectBox}>
      <h3>{project.title}</h3>
      <div className={styles.imgWrapper}>
        <Image
          src={`/projects/${project.img}`}
          alt=""
          width={1000}
          height={1000}
          style={{
            height: "100%",
            width: "auto",
            borderRadius: "10px",
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
