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
        I'm an{" "}
        <span className="font-medium">Applied AI Engineer</span> with{" "}
        <span className="font-medium">7+ years</span> of production engineering
        experience, focused on{" "}
        <span className="underline">
          Agentic RAG, LangGraph multi-agent orchestration, and LLM application
          development
        </span>{" "}
        in regulated enterprise environments.
      </p>
      <p>
        At <span className="italic">Scotiabank</span>, I contributed to a
        production Agentic RAG platform serving{" "}
        <span className="font-medium">500+ internal branches</span>. I designed
        agent orchestration across a LangGraph pipeline (planner, retrieval
        agents, tool-calling, iterative refinement), implemented{" "}
        <span className="underline">
          hybrid retrieval (Apache Solr BM25 + vector) with MMR re-ranking
        </span>
        , a two-level Redis caching layer, SSE streaming, and an asynchronous
        guardrails layer with PII scrubbing and prompt-injection interception.
        Retrieval quality is evaluated offline with{" "}
        <span className="font-medium">RAGAS</span> and{" "}
        <span className="font-medium">LLM-as-a-judge</span> scoring, with{" "}
        <span className="font-medium">LangSmith</span> tracing for end-to-end
        observability.
      </p>
      <p className="mb-3">
        I build and evaluate end-to-end AI systems using{" "}
        <span className="font-medium">Claude and Gemini APIs</span> on a
        foundation of <span className="font-medium">Python, FastAPI, React,
        and TypeScript</span>. I hold the{" "}
        <span className="font-medium">AWS Certified Developer – Associate</span>{" "}
        and Anthropic Academy certifications in the Claude API and Model
        Context Protocol (MCP). Delivering AI in a regulated fintech context
        has shaped how I think about{" "}
        <span className="font-medium">
          responsible AI — auditability, human escalation, and guardrails
        </span>{" "}
        as first-class concerns.
      </p>
      <p className="italic font-bold">
        Let's build something useful together.
      </p>
    </motion.section>
  );
}
