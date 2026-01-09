"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I'm a Senior Full Stack Developer with <span className="font-medium">6+ years of experience</span> designing and delivering high-performance, scalable web applications. My expertise spans the entire development lifecycle, from crafting <span className="underline">elegant frontend architectures with React, Next.js, and TypeScript</span> to building <span className="underline">robust backend systems with Node.js, Express.js, and PostgreSQL</span>. I'm passionate about creating <span className="underline">efficient, intuitive, and user-centric applications</span> that solve real-world problems.
      </p>
      <p>
        At <span className="italic font-semibold">Scotiabank,</span> as a Senior Full Stack Developer, I've led major initiatives including architecting a frontend application from scratch with scalable folder structures and coding standards, implementing lazy loading and code-splitting to reduce load times, and designing custom React hooks for improved reusability and testability. I spearheaded the migration from Storybook 6 to Storybook 9, built and maintained a centralized component library, and established CI-based pull request validation strengthening code quality. Additionally, I've optimized the performance of 10+ pages leveraging tools like Lighthouse and Web Vitals, collaborated with backend teams on API optimization, and deployed high-availability applications on AWS. I also mentor teams of 5+ developers, conducting code reviews and knowledge-sharing sessions.
      </p>
      <p>
        Previously, at <span className="italic font-semibold">Ionixx Technologies,</span> I contributed to diverse projects including building real-time location-based applications with React and maps integration, driving a legacy system migration to Next.js achieving 30% performance improvement, optimizing Node.js backend with Redis caching strategies (40% query reduction), and developing RESTful APIs with Express.js and Node.js. I collaborated with DevOps teams to establish automated deployment pipelines and worked closely with backend engineers to optimize API calls and database interactions.
      </p>
      <p className="mb-3">
        I believe exceptional development is a balance between <span className="font-medium">technical excellence, clean architecture, and user experience</span>. Staying current with <span className="font-medium">modern JavaScript, TypeScript, microservices patterns, cloud technologies (AWS), and DevOps practices (CI/CD, Docker)</span> enables me to architect robust, maintainable solutions. I'm proficient in testing frameworks (Jest, React Testing Library, Playwright), performance optimization, and agile methodologies. Outside of work, I enjoy exploring emerging web trends, optimizing system performance, contributing to open-source projects, and mentoring fellow developers. I thrive in collaborative environments where I can leverage problem-solving skills to drive innovation and build impactful products.
      </p>
      <p className="italic font-bold">
        Let's connect and create something extraordinary together!
      </p>
    </motion.section>
  );
}
