"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold capitalize text-center">{children}</h2>
      <motion.span
        className="mt-2 block h-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        initial={{ width: 0 }}
        whileInView={{ width: "3.5rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </div>
  );
}
