export interface Project {
  title: string;
  description: string;
  link?: string;
}

export const projects: Project[] = [
  {
    title: "This site",
    description:
      "This site was made with Next.js and Typescript! It's hosted on Vercel and the domain is protected by Cloudflare.",
    link: "https://github.com/jaym-01/jellyware",
  },
  {
    title: "Custom Redis Sever in C++",
    description: "An implementation of a Redis server in C++.",
    link: "https://github.com/jaym-01/RedisCpp.git",
  },
];
