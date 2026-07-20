"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/portfolio";

/** Premium intro overlay: brand mark + counting loader, then curtain-lifts away. */
export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const total = 1400; // ms
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min(100, ((now - start) / total) * 100);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-base-950"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8 grid h-24 w-24 place-items-center rounded-2xl glass-strong"
          >
            <span className="font-display text-3xl font-bold gradient-text">
              {initials}
            </span>
            <span className="absolute inset-0 rounded-2xl border border-accent-violet/40 animate-pulse" />
          </motion.div>

          <div className="h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 font-mono text-xs tracking-widest text-gray-500">
            {Math.round(progress)}% — LOADING PORTFOLIO
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
