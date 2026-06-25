import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import deepResearchImg from "@/public/DeepResearch.svg";
import ticketClassifierImg from "@/public/TicketClassifier.svg";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Certs", hash: "#certifications" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Senior Full Stack Developer | Applied AI — Scotiabank",
    location: "Toronto, Canada",
    description:
      "Contributing to enterprise-scale Applied AI initiatives — designing agentic systems, retrieval pipelines, and evaluation frameworks for production use in a regulated fintech environment. Focused on responsible AI patterns including guardrails, observability, and human-in-the-loop review.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2021 - Present",
  },
  {
    title: "Master of Engineering — University of Windsor",
    location: "Windsor, Canada",
    description:
      "Pursued a Master of Engineering, building a strong systems-thinking foundation that complements my applied AI work today.",
    icon: React.createElement(LuGraduationCap),
    date: "Apr 2019 - Aug 2020",
  },
  {
    title: "Programmer — Ionixx Technologies",
    location: "Chennai, India",
    description:
      "Drove the migration of a legacy locator system to Next.js, achieving a 30% improvement in page load times. Optimized Node.js backend performance with Redis caching, reducing query times by ~40%. Built Express.js middleware services and a real-time Project Locator UI with interactive maps.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2017 - Apr 2019",
  },
  {
    title: "Bachelor of Engineering — Anna University",
    location: "Chennai, India",
    description:
      "Earned a Bachelor of Engineering, building a strong analytical foundation that shaped my path into software and, later, applied AI.",
    icon: React.createElement(LuGraduationCap),
    date: "Jun 2013 - May 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Deep Research AI Agent",
    description:
      "4-stage autonomous research pipeline (Planner → Parallel Researchers → Critic → Writer) that synthesizes structured, cited briefs in ~90s. Critic-driven rework loop with LangGraph state graphs, async parallel execution via asyncio.gather, and an LLM-as-a-judge evaluation framework scoring relevance and citation quality.",
    link: "https://huggingface.co/spaces/vikraamm95/deepresearcher",
    tags: ["Python", "LangGraph", "Gemini 2.0", "Gradio", "Tavily", "LLM-as-Judge"],
    imageUrl: deepResearchImg,
  },
  {
    title: "AI Ticket Classifier",
    description:
      "Governed LangGraph pipeline that classifies support tickets by category, priority, and routing team with sentiment + confidence scoring. Safety layer performs PII redaction and prompt-injection detection; structured outputs validated via Pydantic. FastAPI + SQLAlchemy backend with a React 19 / TypeScript / Vite frontend and LLM-as-a-judge evaluation.",
    link: "https://github.com/vikraammravi/AI-ticket-classifier",
    tags: ["Python", "FastAPI", "LangGraph", "Claude API", "React 19", "Pydantic"],
    imageUrl: ticketClassifierImg,
  },
] as const;

export const skillsData = [
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "Claude API",
  "Gemini API",
  "LangChain",
  "LangGraph",
  "LangSmith",
  "RAG",
  "Agentic AI",
  "Multi-Agent Systems",
  "MCP",
  "RAGAS",
  "LLM-as-a-Judge",
  "Hybrid Retrieval (BM25 + Vector)",
  "MMR Re-Ranking",
  "Vector Embeddings",
  "Prompt Engineering",
  "SSE Streaming",
  "PII Redaction",
  "Pydantic",
  "FastAPI",
  "Node.js",
  "Express.js",
  "SQLAlchemy",
  "GraphQL",
  "REST APIs",
  "React",
  "Next.js",
  "Redux",
  "Vite",
  "Apollo Client",
  "Tailwind CSS",
  "PostgreSQL",
  "Redis",
  "Apache Solr",
  "Docker",
  "Kubernetes",
  "AWS",
  "GitHub Actions",
  "Jenkins",
  "Pytest",
  "Jest",
  "React Testing Library",
  "Playwright",
] as const;

export const certificationsData = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "",
  },
  {
    title: "Building with the Claude API",
    issuer: "Anthropic Academy",
    year: "2026",
  },
  {
    title: "Model Context Protocol (MCP)",
    issuer: "Anthropic Academy",
    year: "",
  },
] as const;
