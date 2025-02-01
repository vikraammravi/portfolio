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
        My expertise lies in building high-performance, scalable web
        applications using a diverse tech stack. I am proficient in{" "}
        <span className="underline">
          {" "}
          React.js, Next.js, Angular 17, Node.js, and PostgreSQL with Sequelize,
        </span>{" "}
        ensuring seamless frontend and backend integration. My passion for
        development extends beyond writing code—I focus on crafting{" "}
        <span className="underline">
          efficient, intuitive, and user-centric applications.
        </span>
      </p>
      <p>
        In my recent role at{" "}
        <span className="italic">Scotia Bank, Toronto,</span> as a Senior Full
        Stack Developer, I led Next.js migrations, optimized application
        performance by 30%, and enhanced CI/CD pipelines, improving deployment
        speed by 40%. Prior to this, at{" "}
        <span className="italic">Ionixx Technologies, Chennai,</span> I played a
        key role in developing RESTful APIs with Node.js and Sequelize,
        optimizing database queries, and integrating scalable AWS deployments.
      </p>
      <p className="mb-3">
        I believe that great development is a balance between{" "}
        <span className="font-medium">
          technical excellence and user experience
        </span>
        . Staying updated with{" "}
        <span className="font-medium">
          odern JavaScript best practices, microservices architecture, and cloud
          technologies
        </span>{" "}
        enables me to build robust solutions. Outside of work, I enjoy exploring
        emerging web trends, optimizing system performance, and mentoring
        developers. I thrive in collaborative environments, leveraging
        problem-solving skills to drive innovation.
      </p>
      <p className="italic font-bold">
        Let's connect and create something amazing together!
      </p>
    </motion.section>
  );
}
