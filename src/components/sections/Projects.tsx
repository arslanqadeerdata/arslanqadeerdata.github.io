"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star, Layers } from "lucide-react";
import { featuredProject, academicProjects } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import DashboardShowcase from "./DashboardShowcase";

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Featured Work"
        title="A real-world analytics project, end to end"
        description="From raw SQL extraction to an interactive executive dashboard that drives decisions."
      />

      {/* ---------- Featured: Chacha Tax ---------- */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-violet"
          >
            <Star size={14} /> Featured Project
          </motion.div>

          <motion.h3
            variants={fadeUp}
            className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl"
          >
            {featuredProject.name}
          </motion.h3>

          <motion.div variants={fadeUp} className="mt-2 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
              {featuredProject.status}
            </span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300">
              {featuredProject.tag}
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-4 leading-relaxed text-gray-400">
            {featuredProject.description}
          </motion.p>

          {/* analysis chips */}
          <motion.div variants={fadeUp} className="mt-5">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Analysis included
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredProject.analysis?.map((a) => (
                <span
                  key={a}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-200 transition-colors hover:border-accent-violet/50 hover:text-white"
                >
                  {a}
                </span>
              ))}
            </div>
          </motion.div>

          {/* tools */}
          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
            {featuredProject.tools.map((t) => (
              <span
                key={t}
                className="rounded-full bg-gradient-to-r from-accent-blue/15 to-accent-violet/15 px-3 py-1 text-xs font-medium text-accent-cyan ring-1 ring-inset ring-white/10"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* live dashboard mock */}
        <DashboardShowcase />
      </div>

      {/* ---------- Academic projects ---------- */}
      <div className="mt-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-8 flex items-center gap-3"
        >
          <Layers className="text-accent-violet" size={20} />
          <h3 className="font-display text-xl font-bold text-white">
            Academic &amp; Supporting Projects
          </h3>
          <span className="text-sm text-gray-500">— building the technical foundation</span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {academicProjects.map((p) => (
            <motion.article
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl glass-strong p-6 transition-shadow hover:shadow-glow"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-accent-violet">
                  {p.tag}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-gray-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </div>
              <h4 className="font-display text-lg font-bold text-white">{p.name}</h4>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
