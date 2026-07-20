"use client";

import { motion } from "framer-motion";
import { skillGroups, tools, learning } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Sparkles } from "lucide-react";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <motion.div variants={fadeUp} className="cursor-grow">
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-gray-200">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-violet"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="Technical Skills"
        title="The analytics toolkit I work with"
        description="From raw SQL extraction to executive-ready visuals — the stack behind every insight."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-3xl glass-strong p-7"
          >
            <motion.h3
              variants={fadeUp}
              className="mb-6 font-display text-lg font-bold text-white"
            >
              <span className="gradient-text">{group.category}</span>
            </motion.h3>
            <div className="space-y-5">
              {group.skills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* currently learning */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-8 flex flex-wrap items-center gap-3 rounded-3xl glass p-6"
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-violet">
          <Sparkles size={16} /> Currently Learning:
        </span>
        {learning.map((l) => (
          <span
            key={l}
            className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-gray-300"
          >
            {l}
          </span>
        ))}
      </motion.div>

      {/* tools marquee */}
      <div className="relative mt-8 overflow-hidden rounded-3xl glass py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-base-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-base-950 to-transparent" />
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap pr-12">
          {[...tools, ...tools, ...tools, ...tools].map((t, i) => (
            <span
              key={i}
              className="font-display text-2xl font-semibold text-white/30 transition-colors hover:text-white"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
