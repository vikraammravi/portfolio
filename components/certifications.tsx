"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { TbCertificate } from "react-icons/tb";

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i },
  }),
};

export default function Certifications() {
  const { ref } = useSectionInView("Certs", 0.5);

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 w-full"
    >
      <SectionHeading>Certifications</SectionHeading>
      <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
        {certificationsData.map((cert, index) => (
          <motion.li
            key={cert.title}
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ y: -3 }}
            className="bg-white borderBlack rounded-xl px-6 py-4 dark:bg-white/10 dark:text-white/80 flex items-center gap-3 transition hover:shadow-lg max-w-xs"
          >
            <TbCertificate className="text-2xl text-indigo-500 shrink-0" />
            <div className="text-left">
              <p className="font-semibold leading-tight">{cert.title}</p>
              <p className="text-xs text-gray-500 dark:text-white/60">
                {cert.issuer}
                {cert.year ? ` · ${cert.year}` : ""}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
