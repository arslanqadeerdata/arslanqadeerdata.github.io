"use client";

import { motion } from "framer-motion";
import { CheckCircle2, GraduationCap, Database, LineChart } from "lucide-react";
import { about, education } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        eyebrow="About Me"
        title="Turning business questions into data answers"
        description="A data-driven problem solver focused on clarity, accuracy and impact."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* narrative */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grad-border rounded-3xl glass-strong p-7 sm:p-9"
        >
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className={`leading-relaxed text-gray-300 ${i === 0 ? "text-lg text-gray-200" : "mt-4"}`}
            >
              {p}
            </motion.p>
          ))}

          <motion.div variants={fadeUp} className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {about.highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-gray-200"
              >
                <CheckCircle2 size={18} className="shrink-0 text-accent-violet" />
                {h}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* side cards */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-5"
        >
          {/* education */}
          {education.map((e) => (
            <motion.div
              key={e.school}
              variants={fadeUp}
              className="rounded-3xl glass-strong p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                  <GraduationCap size={20} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-accent-violet">
                  Education
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-white">{e.degree}</h3>
              <p className="mt-1 text-sm text-gray-400">{e.school}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="rounded-full bg-white/5 px-3 py-1 text-gray-300">{e.period}</span>
                <span className="text-accent-cyan">{e.note}</span>
              </div>
            </motion.div>
          ))}

          {/* focus cards */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-5">
            <div className="rounded-3xl glass-strong p-5">
              <Database className="mb-3 text-accent-blue" size={22} />
              <div className="text-sm font-semibold text-white">Data Engineering-lite</div>
              <p className="mt-1 text-xs text-gray-400">SQL extraction, cleaning &amp; Power Query ETL.</p>
            </div>
            <div className="rounded-3xl glass-strong p-5">
              <LineChart className="mb-3 text-accent-violet" size={22} />
              <div className="text-sm font-semibold text-white">Insight &amp; BI</div>
              <p className="mt-1 text-xs text-gray-400">Power BI dashboards &amp; KPI storytelling.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
