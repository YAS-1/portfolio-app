"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className={`rounded-2xl p-6 ${
        project.featured
          ? "neo-card ring-1 ring-[#ff694d]/30"
          : "neo-card"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-2">
        <h3 className="text-xl font-semibold text-slate-800">{project.name}</h3>
        {project.featured && (
          <span className="rounded-full bg-[#ff694d]/15 px-3 py-1 text-xs font-semibold text-[#d4462c]">
            Featured
          </span>
        )}
      </div>
      <p className="mb-5 text-slate-600">{project.description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={`${project.name}-${tech}`}
            className="neo-inset rounded-full px-3 py-1 text-xs text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm font-medium">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-[#d4462c] transition hover:text-[#b93d27]"
        >
          GitHub
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 transition hover:text-slate-800"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.article>
  );
}
