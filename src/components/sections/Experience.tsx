"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, Building2 } from "lucide-react";
import { experience } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've applied my analytics skills"
        description="Hands-on work on real business data — from live databases to executive reporting."
      />

      <div className="relative mx-auto max-w-4xl">
        {/* animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-4 top-2 h-full w-px origin-top bg-gradient-to-b from-accent-blue via-accent-violet to-transparent md:left-1/2"
        />

        <div className="space-y-10">
          {experience.map((exp, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  left ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* node */}
                <span
                  className={`absolute left-4 top-3 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary text-white shadow-glow md:left-auto ${
                    left ? "md:-right-4 md:translate-x-1/2" : "md:-left-4 md:-translate-x-1/2"
                  }`}
                >
                  <Briefcase size={15} />
                </span>

                <motion.div variants={fadeUp} className="rounded-3xl glass-strong p-6 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-white">{exp.role}</h3>
                    {exp.current && (
                      <span className="rounded-full bg-emerald-400/15 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-accent-violet">{exp.company}</span>
                    <span className="rounded-full bg-white/5 px-3 py-0.5 text-xs text-gray-400">
                      {exp.period}
                    </span>
                  </div>

                  <span className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-accent-violet/30 bg-accent-violet/10 px-3 py-1 text-xs font-medium text-accent-violet">
                    <Building2 size={13} />
                    Domain: {exp.domain}
                  </span>

                  <p className="mt-3 text-sm text-gray-400">{exp.summary}</p>

                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {exp.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-gray-300">
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent-cyan" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
