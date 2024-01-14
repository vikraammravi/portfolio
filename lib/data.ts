import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import escapeAtlasImg from "@/public/EscapeAtlas.jpg";
 

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
    title: "Anna University, B.E",
    location: "Chennai, India",
    description:
      "Completed my undergraduate degree with a focus on engineering principles, quickly securing a programming role at Ionixx Technolgies,where my professional journey in IT began.",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2017",
  },
  {
    title: "Ionixx Technologies",
    location: "Chennai, India",
    description:
      "Post-graduation, I applied my engineering skills to practical challenges as a Programmer, contributing to diverse Software development projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2017-2019",
  },
  {
    title: "University of Windsor, M.S",
    location: "Windsor, Canada",
    description:
      "Advanced my technical expertise with a Master's degree, leading to an opportunity at Scotia Bank as Senior Full-Stack Developer upon graduation.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "Scotia Bank",
    location: "Toronto, Canada",
    description:
      "As a Senior Full-Stack Developer,I've been implementing complex solution using a modern tech stack and am currently exploring new opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "EscapeAtlas React app",
    description:
      "https://escapeatlas-reactapp.vercel.app",
    tags: ["HTML","CSS","Javascript","React"],
    imageUrl: escapeAtlasImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MySQL",
  "Redux",
  "GraphQL",
  "Jest",
] as const;
