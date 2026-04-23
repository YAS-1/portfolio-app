"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  title,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-20 ${className}`}
    >
      <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-800 md:text-4xl">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
