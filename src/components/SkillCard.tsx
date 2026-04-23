"use client";

import { motion } from "framer-motion";

type SkillCardProps = {
  title: string;
  items: string[];
};

export default function SkillCard({ title, items }: SkillCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.35 }}
      className="neo-card p-6"
    >
      <h3 className="mb-4 text-xl font-semibold text-slate-800">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="neo-inset rounded-full px-3 py-1 text-sm text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
