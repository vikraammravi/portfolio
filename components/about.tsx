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
        My expertise lies in creating dynamic and user-friendly web applications
        using a broad spectrum of technologies. I am proficient in{" "}
        <span className="underline">HTML5, CSS3, JavaScript</span>, and various
        modern frameworks and libraries like{" "}
        <span className="underline">
          React.js, Next.js, Angular 14, & Node.js
        </span>
        . My passion for web development is not just about writing code, but
        also about creating intuitive, efficient user experiences.
      </p>
      <p>
        In my recent role at{" "}
        <span className="italic">Scotia Bank, Toronto</span>, as a{" "}
        <span className="font-medium">Senior Full Stack Developer</span>, I
        honed my skills in developing single-page applications, handling project
        management with Agile methodologies, and leading initiatives that
        improved application performance by 30%. Prior to this, at{" "}
        <span className="italic">Ionixx Technologies in Chennai</span>, I played
        a key role in agile development teams, focusing on optimizing web
        interfaces for various platforms and ensuring seamless integration with
        backend services.
      </p>
      <p>
        <span className="italic"> My approach to development</span> is not only
        about meeting technical requirements but also about understanding and
        fulfilling user needs. I believe in continuous learning and staying
        updated with the latest industry trends, which helps me to deliver{" "}
        <span className="font-medium">cutting-edge solutions</span> .
      </p>
      <p className="mb-3">
        When I'm not coding, you can find me{" "}
        <span className="italic">exploring new technologies</span>, or{" "}
        <span className="italic">contributing to tech communities</span>. I am a
        team player with strong{" "}
        <span className="font-medium">analytical skills</span> and a knack for{" "}
        <span className="font-medium">problem-solving</span>, making me an asset
        in any collaborative project.
      </p>
      <p className="italic font-bold">
        Let's connect and create something amazing together!
      </p>
    </motion.section>
  );
}
