"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";
import { dashboardDemo } from "@/data/portfolio";
import { viewportOnce } from "@/lib/motion";

const { kpis, bars, provinces, donut } = dashboardDemo;

/** Small animated donut built with SVG stroke-dasharray. */
function Donut() {
  const total = donut.reduce((a, b) => a + b.value, 0);
  let offset = 0;
  const r = 42;
  const c = 2 * Math.PI * r;

  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90">
        {donut.map((seg) => {
          const frac = seg.value / total;
          const dash = frac * c;
          const el = (
            <motion.circle
              key={seg.label}
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${c - dash}`}
              strokeDashoffset={-offset}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6 }}
            />
          );
          offset += dash;
          return el;
        })}
      </svg>
      <div className="space-y-1.5">
        {donut.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2 text-xs text-gray-300">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: seg.color }} />
            {seg.label}
            <span className="ml-auto text-gray-500">{seg.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="grad-border overflow-hidden rounded-3xl glass-strong p-5 shadow-glow-lg sm:p-6"
    >
      {/* window chrome */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
        </div>
        <span className="rounded-md bg-white/5 px-3 py-1 text-xs text-gray-400">
          Chacha Tax — Executive Dashboard
        </span>
        <span className="text-xs font-medium text-emerald-300">● Live</span>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.1 * i }}
            className="rounded-xl border border-white/8 bg-white/5 p-3.5"
          >
            <div className="text-xs text-gray-400">{k.label}</div>
            <div className="mt-1 font-display text-xl font-bold text-white">{k.value}</div>
            <div
              className={`mt-1 inline-flex items-center gap-1 text-xs ${
                k.up ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {k.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {k.delta}
            </div>
          </motion.div>
        ))}
      </div>

      {/* charts */}
      <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-[1.4fr_1fr]">
        {/* bar chart */}
        <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-medium text-white">Monthly Leads &amp; Conversions</span>
            <span className="text-xs text-gray-500">Last 10 months</span>
          </div>
          <div className="flex h-40 items-end gap-2">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-accent-blue to-accent-violet"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={viewportOnce}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>
        </div>

        {/* donut */}
        <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
          <span className="mb-3 block text-sm font-medium text-white">Traffic Source</span>
          <Donut />
        </div>
      </div>

      {/* province bars */}
      <div className="mt-3 rounded-2xl border border-white/8 bg-white/5 p-4">
        <span className="mb-3 block text-sm font-medium text-white">Province-wise Leads</span>
        <div className="space-y-2.5">
          {provinces.map((p, i) => (
            <div key={p.name} className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-xs text-gray-400">{p.name}</span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${p.value * 2}%` }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.9, delay: i * 0.08 }}
                />
              </div>
              <span className="w-8 text-right text-xs text-gray-400">{p.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
