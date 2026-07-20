"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: Props) {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`mb-14 max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <motion.span
        variants={fadeUp}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-accent-violet"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-violet shadow-glow" />
        {eyebrow}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base leading-relaxed text-gray-400 sm:text-lg text-balance"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
