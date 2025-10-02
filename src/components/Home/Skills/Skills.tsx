import styles from "@/styles/components/home/skills.module.scss";
import Image from "next/image";

interface SkillItem {
  name: string;
  logo: string;
}

interface SkillCategory {
  title: string;
  description?: string;
  skills: SkillItem[];
}

export default function Skills({ ...props }) {
  const skillCategories: SkillCategory[] = [
    {
      title: "Proficient",
      skills: [
        {
          name: "Python",
          logo: "python",
        },
        {
          name: "TypeScript",
          logo: "typescript",
        },
        {
          name: "JavaScript",
          logo: "javascript",
        },
        {
          name: "C++",
          logo: "cplusplus",
        },
        {
          name: "React",
          logo: "react",
        },
        {
          name: "Git",
          logo: "git",
        },
        {
          name: "GitHub",
          logo: "github",
        },
      ],
    },
    {
      title: "Intermediate",
      skills: [
        {
          name: "C",
          logo: "c",
        },
        {
          name: "SQL",
          logo: "SQLite",
        },
        {
          name: "Rust",
          logo: "rust",
        },
        {
          name: "Verilog",
          logo: "verilog",
        },
      ],
    },
    {
      title: "Cloud tech I have deployed apps and backends on",
      skills: [
        {
          name: "AWS",
          logo: "aws",
        },
        {
          name: "Supabase",
          logo: "supabase",
        },
        {
          name: "Vercel (Hosting this 😀)",
          logo: "vercel",
        },
      ],
    },
    {
      title: "I'm also familiar with",
      skills: [
        {
          name: "Bash & Unix terminal",
          logo: "bash",
        },
        {
          name: "Docker",
          logo: "docker",
        },
        {
          name: "Figma (Proficient)",
          logo: "figma",
        },
      ],
    },
  ];

  return (
    <section className={styles.skillsWrapper} {...props}>
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionTitle}>Skills</h2>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>

            <ul className={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className={styles.skillItem}>
                  <Image
                    src={`/skills/${skill.logo}.svg`}
                    alt={`${skill.name} logo`}
                    width={20}
                    height={20}
                    className={styles.skillLogo}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <span className={styles.skillName}>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
