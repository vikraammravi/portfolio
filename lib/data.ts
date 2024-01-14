import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Bachelors of Engineering",
    location: "Chennai, India",
    description:
      "Completed my undergraduate degree with a focus on engineering principles, quickly securing a programming role at Ionixx Technolgies,where my professional journey in IT began.",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2017",
  },
  {
    title: "Programmer",
    location: "Chennai, India",
    description:
      "Post-graduation, I applied my engineering skills to practical challenges as a Programmer, contributing to diverse Software development projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2017-2019",
  },
  {
    title: "Masters of Engineering",
    location: "Windsor, Canada",
    description:
      "Advanced my technical expertise with a Master's degree, leading to an opportunity at Scotia Bank as Senior Full-Stack Developer upon graduation.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "Senior Full-Stack Developer",
    location: "Toronto, Canada",
    description:
      "As a Senior Full-Stack Developer,I've been implementing complex solution using a modern tech stack and am currently exploring new opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
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