"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  LayoutDashboard,
  PieChart,
  Sparkles,
  Workflow,
  Brain,
} from "lucide-react";
import { services } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = [
  BarChart3,
  Database,
  FileSpreadsheet,
  LayoutDashboard,
  PieChart,
  Sparkles,
  Workflow,
  Brain,
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <SectionHeading
        eyebrow="Services"
        title="How I can help your business"
        description="Practical, insight-driven data services — built to support smarter decisions."
      />

      <motion.div
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((s, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-6"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-violet/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <span className="mb-4 inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 text-accent-violet ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
                <Icon size={22} />
              </span>
              <h3 className="font-display text-base font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{s.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
