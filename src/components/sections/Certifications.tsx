"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Clock } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certifications() {
  return (
    <section className="section-pad !pt-0">
      <SectionHeading
        eyebrow="Certifications"
        title="Credentials & continuous learning"
      />

      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 gap-5 sm:grid-cols-3"
      >
        {certifications.map((c) => {
          const inProgress = c.status.toLowerCase().includes("progress");
          return (
            <motion.div
              key={c.name}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="flex items-start gap-4 rounded-3xl glass-strong p-6"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-white shadow-glow">
                <Award size={22} />
              </span>
              <div>
                <h3 className="font-display text-base font-bold leading-snug text-white">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-gray-400">{c.issuer}</p>
                <span
                  className={`mt-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    inProgress
                      ? "bg-amber-400/15 text-amber-300"
                      : "bg-emerald-400/15 text-emerald-300"
                  }`}
                >
                  {inProgress ? <Clock size={12} /> : <BadgeCheck size={12} />}
                  {c.status}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
