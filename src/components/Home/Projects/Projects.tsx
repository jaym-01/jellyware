import styles from "@/styles/components/home/projects.module.scss";
import { Project, projects } from "./project_data";

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>projects.txt</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, i) => (
            <ProjectBox key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectBox({ project }: { project: Project }) {
  return (
    <div className={styles.projectBox}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      {project.link && (
        <a href={project.link} target="_blank">
          View Code
        </a>
      )}
    </div>
  );
}
