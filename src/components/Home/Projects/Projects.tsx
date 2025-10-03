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
      <div className={styles.projectPageHeader}>
        <h2 className={styles.projectSectionTitle}>Projects</h2>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            viewport={{
              root: parentRef,
              once: true,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectHeader}>
        <Image
          src={`/projects/${project.img}`}
          alt={project.title}
          width={300}
          height={250}
          className={styles.projectImage}
        />
      </div>

      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>

        <ul className={styles.projectDetails}>
          {project.description.map((desc, i) => (
            <li key={i}>{desc}</li>
          ))}
        </ul>
      </div>

      {(project.src || project.extra_link) && (
        <div className={styles.projectFooter}>
          {project.src && (
            <a
              href={project.src}
              target="_blank"
              className={styles.projectLink}
            >
              View Code
            </a>
          )}
          {project.extra_link && (
            <a
              href={project.extra_link}
              target="_blank"
              className={styles.projectLink}
            >
              {project.extra_link_text || "Demo"}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
