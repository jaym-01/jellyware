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
      title: "Proficient in",
      skills: [
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "TypeScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "C++",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
      ],
    },
    {
      title: "Intermediate",
      skills: [
        {
          name: "C",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        },
        {
          name: "SQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "Rust",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
        },
        {
          name: "Verilog",
          logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Verilog_logo.png",
        },
      ],
    },
    {
      title: "Cloud tech I have deployed web apps and backends on",
      skills: [
        {
          name: "AWS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        },
        {
          name: "Supabase",
          logo: "https://supabase.com/dashboard/img/supabase-logo.svg",
        },
        {
          name: "Vercel",
          logo: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png",
        },
      ],
    },
    {
      title: "I'm also familiar with",
      skills: [
        {
          name: "Bash",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        },
      ],
    },
  ];

  const getCategoryNote = (title: string) => {
    switch (title) {
      case "Cloud tech I have deployed web apps and backends on":
        return [
          "AWS (intermediate)",
          "supabase (intermediate)",
          "Vercel (hosting this 😀)",
        ];
      case "I'm also familiar with":
        return [
          "Bash scripting",
          "Unix terminal",
          "Docker - locally and deploying apps in containers",
          "I'm proficient with designing interfaces in Figma as well",
        ];
      default:
        return null;
    }
  };

  return (
    <section className={styles.skillsWrapper} {...props}>
      <div className={styles.contentContainer}>
        <h2 className={styles.sectionTitle}>Skills</h2>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>

            <div className={styles.skillsGrid}>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className={styles.skillItem}>
                  <Image
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    width={24}
                    height={24}
                    className={styles.skillLogo}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>

            {getCategoryNote(category.title) && (
              <ul className={styles.categoryNotes}>
                {getCategoryNote(category.title)!.map((note, noteIndex) => (
                  <li key={noteIndex}>{note}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
