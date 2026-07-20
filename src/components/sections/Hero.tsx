"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import {
  SiPostgresql,
  SiPython,
} from "react-icons/si";
import { TbChartBarPopular, TbChartHistogram } from "react-icons/tb";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { profile } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "@/lib/motion";
import MagneticButton from "@/components/ui/MagneticButton";

const floatIcons = [
  { Icon: TbChartBarPopular, cls: "top-2 -left-6 text-yellow-400", d: 0 },
  { Icon: SiPostgresql, cls: "top-14 -right-8 text-sky-400", d: 0.6 },
  { Icon: PiMicrosoftExcelLogoFill, cls: "bottom-16 -left-10 text-green-400", d: 1.2 },
  { Icon: SiPython, cls: "-bottom-4 right-6 text-indigo-300", d: 0.9 },
  { Icon: TbChartHistogram, cls: "top-1/2 -right-12 text-accent-cyan", d: 0.3 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ---------- Left: copy ---------- */}
        <motion.div
          variants={staggerContainer(0.13)}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for Data Analyst roles &amp; internships
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text animate-gradient-x">Arslan Qadeer</span>
            <br />
            <span className="text-gray-300">Data Analyst</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400"
          >
            <span className="text-gray-200 font-medium">
              {profile.headline}.
            </span>{" "}
            {profile.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-accent-violet" />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles size={15} className="text-accent-violet" />
              SQL · Power BI · PostgreSQL
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow"
            >
              View My Work
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </MagneticButton>

            <MagneticButton
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Download size={16} />
              Download Resume
            </MagneticButton>
          </motion.div>

          {/* socials */}
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
            {[
              { href: profile.socials.github, Icon: FaGithub, label: "GitHub" },
              { href: profile.socials.linkedin, Icon: FaLinkedinIn, label: "LinkedIn" },
              { href: profile.socials.email, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all hover:-translate-y-1 hover:border-accent-violet/50 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ---------- Right: portrait ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          {/* glow ring */}
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-gradient-primary opacity-30 blur-3xl" />

          <div className="grad-border relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] glass-strong">
            {/* Profile image — replace /public/avatar.jpg. Falls back to monogram. */}
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 grid place-items-center bg-gradient-to-br from-base-800 to-base-900 text-7xl font-display font-bold text-white/90 [z-index:-1]">
              AQ
            </div>

            {/* bottom name plate */}
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl glass px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-white">{profile.name}</div>
                <div className="text-xs text-accent-violet">{profile.title}</div>
              </div>
              <TbChartBarPopular className="text-yellow-400" size={26} />
            </div>
          </div>

          {/* floating tech icons */}
          {floatIcons.map(({ Icon, cls, d }, i) => (
            <motion.div
              key={i}
              className={`absolute ${cls} grid h-12 w-12 place-items-center rounded-2xl glass-strong shadow-card`}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: d }}
            >
              <Icon size={24} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <div className="h-2 w-1 rounded-full bg-accent-violet" />
        </div>
      </motion.a>
    </section>
  );
}
