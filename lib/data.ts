import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import escapeAtlasImg from "@/public/EscapeAtlas.jpg";
import flightFerry from "@/public/FlightFerry.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Scotiabank - Senior Full Stack Developer",
    location:"",
    description:
      "Led frontend architecture and full-stack development on large-scale applications. Architected scalable folder structures, established coding standards, and drove performance optimization. Implemented custom React hooks, led Storybook migration, and established CI-based PR validation. Mentored 5+ developers and deployed high-availability applications on AWS. Improved 10+ pages performance and contributed to 30+ successful feature releases.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - present"
  },
  {
    title: "Master of Engineering",
    location: "University of Windsor, Canada",
    description:
      "Advanced technical expertise with focus on software engineering principles, full-stack development, and modern technologies. Research and development projects prepared me for senior roles in enterprise environments.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2020",
  },
  {
    title: "Ionixx Technologies - Programmer",
    location: "",
    description:
      "Built real-time location-based applications and optimized legacy systems. Migrated locator system to Next.js (30% performance improvement). Optimized Node.js backend with Redis caching (40% query time reduction). Implemented Express.js middleware for request handling and RESTful APIs with React and Redux.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2017 - April 2019",
  },
  {
    title: "Bachelor of Engineering",
    location: "Anna University, Chennai, India",
    description:
      "Completed undergraduate degree with focus on engineering principles. Gained foundational knowledge in computer science and software development, leading to first programming role at Ionixx Technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2013 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Enterprise Storybook Component Library",
    description:
      "Led migration from Storybook 6 to Storybook 9. Built and maintained a centralized component library with 50+ reusable UI components. Implemented visual testing standards and improved collaboration between developers and designers. Reduced component development time by 40%.",
    link: "https://github.com/vikraammravi",
    tags: ["React", "Storybook 9", "TypeScript", "Testing Library", "Jest"],
    imageUrl: escapeAtlasImg,
  },
  {
    title: "Performance-Optimized React Application",
    description:
      "Architected and developed a frontend application from scratch with scalable folder structures. Implemented lazy loading, code-splitting, and SSR. Improved performance of 10+ pages using Lighthouse and Web Vitals. Reduced initial load times by 35% and achieved 90+ Lighthouse scores.",
    link: "https://github.com/vikraammravi",
    tags: ["Next.js", "React", "TypeScript", "Performance Optimization", "AWS"],
    imageUrl: flightFerry,
  },
  {
    title: "EscapeAtlas - Travel Destination Platform",
    description:
      "Adventure travel website for exploring exotic destinations. Built with modern React architecture, responsive design, and dynamic content filtering. Implements best practices for SEO and performance optimization.",
    link: "https://escapeatlas-reactapp.vercel.app",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    imageUrl: escapeAtlasImg,
  },
  {
    title: "Flight-Ferry - Luggage Transport Platform",
    description:
      "Platform connecting travelers to transport unused luggage space. Built with Next.js and MongoDB backend. Implemented real-time location features and secure transactions. Deployed on Vercel with optimized database queries.",
    link: "https://flightferry.vercel.app/",
    tags: ["Next.js", "MongoDB", "JavaScript", "CSS", "HTML"],
    imageUrl: flightFerry,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap 5",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "React Query",
  "Context API",
  "React Hooks",
  "Node.js",
  "Express.js",
  "REST API",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Jest",
  "React Testing Library",
  "Enzyme",
  "Playwright",
  "Git",
  "GitHub",
  "Bitbucket",
  "AWS (EC2, S3, RDS, API Gateway)",
  "Docker",
  "CI/CD (Jenkins, GitHub Actions)",
  "Storybook",
  "MSW (Mock Service Worker)",
  "Lighthouse",
  "Web Vitals",
  "Code Splitting",
  "Lazy Loading",
  "SSR",
  "Performance Optimization",
  "Agile/Scrum",
] as const;
