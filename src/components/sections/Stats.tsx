"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import Counter from "@/components/ui/Counter";

export default function Stats() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 sm:px-8">
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-2 gap-4 rounded-3xl glass-strong p-6 sm:p-8 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-2xl p-5 text-center transition-colors hover:bg-white/5"
          >
            <div className="font-display text-4xl font-bold text-white sm:text-5xl">
              <Counter to={s.value} suffix={s.suffix} className="gradient-text" />
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-400 sm:text-sm">
              {s.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
