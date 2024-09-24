import styles from "@/styles/components/home/projects.module.scss";
import { Project, projects } from "./project_data";
import Image from "next/image";

export default function Projects() {
  return (
    <div className={styles.container}>
      <h2>projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, i) => (
          <ProjectBox key={i} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectBox({ project }: { project: Project }) {
  return (
    <div className={styles.projectBox}>
      <div className={styles.imgWrapper}>
        <Image
          src={`/projects/${project.img}`}
          alt=""
          height={1000}
          width={1000}
          style={{
            width: "auto",
            height: "280px",
            borderRadius: "10px",
          }}
        />
      </div>

      <h3>{project.title}</h3>
      <ul>
        {project.description.map((txt, i) => (
          <li key={i}>{txt}</li>
        ))}
      </ul>

      <div className={styles.linkWrapper}>
        {project.src && (
          <a href={project.src} target="_blank">
            View Code
          </a>
        )}
        {project.live_link && (
          <a
            href={project.src}
            target="_blank"
            style={{ flexGrow: "1", textAlign: "end" }}
          >
            View Project Live
          </a>
        )}
      </div>
    </div>
  );
}
