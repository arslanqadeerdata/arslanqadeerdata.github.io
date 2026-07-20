"use client";

import { motion } from "framer-motion";
import { Quote, Target } from "lucide-react";
import { careerGoal } from "@/data/portfolio";
import { viewportOnce } from "@/lib/motion";

export default function CareerGoal() {
  return (
    <section className="section-pad !py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grad-border relative overflow-hidden rounded-[2rem] glass-strong p-8 text-center sm:p-14"
      >
        {/* aura */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-violet/20 blur-3xl" />

        <span className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-violet">
          <Target size={14} /> Career Goal
        </span>

        <Quote className="mx-auto mb-4 text-accent-violet/50" size={40} />

        <p className="mx-auto max-w-3xl font-display text-xl font-medium leading-relaxed text-gray-100 sm:text-2xl md:text-3xl text-balance">
          {careerGoal.quote}
        </p>

        <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-accent-violet to-transparent" />
      </motion.div>
    </section>
  );
}
