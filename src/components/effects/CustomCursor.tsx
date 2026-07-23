"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom animated cursor that glides with the mouse:
 *  - a bright dot that tracks the pointer precisely
 *  - a larger ring that springs/lags behind for a smooth "trail" feel
 *  - a soft glow behind everything
 *  - grows and fills when hovering links / buttons
 * Automatically disabled on touch / coarse-pointer devices and for
 * users who prefer reduced motion.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [down, setDown] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // ring lags a little behind the dot → visible movement/trail
  const ringX = useSpring(x, { stiffness: 300, damping: 26, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 26, mass: 0.5 });
  // glow lags even more for a soft comet feel
  const glowX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.8 });
  const glowY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.8 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.body.classList.add("custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [role='button'], input, textarea, .cursor-grow")
      );
    };
    const leave = () => setHidden(true);
    const downFn = () => setDown(true);
    const upFn = () => setDown(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mousedown", downFn);
    window.addEventListener("mouseup", upFn);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", downFn);
      window.removeEventListener("mouseup", upFn);
      document.removeEventListener("mouseleave", leave);
      document.body.classList.remove("custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const base = "pointer-events-none fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full";

  return (
    <>
      {/* soft glow (slowest) */}
      <motion.div
        className={`${base} z-[9997] h-16 w-16 bg-accent-violet/25 blur-2xl`}
        style={{ x: glowX, y: glowY }}
        animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 1.6 : 1 }}
        transition={{ duration: 0.25 }}
      />

      {/* trailing ring */}
      <motion.div
        className={`${base} z-[9998] h-9 w-9 border-2 border-accent-violet`}
        style={{ x: ringX, y: ringY, boxShadow: "0 0 14px rgba(139,92,246,0.7)" }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: down ? 0.8 : hovering ? 1.9 : 1,
          backgroundColor: hovering ? "rgba(139,92,246,0.18)" : "rgba(139,92,246,0)",
        }}
        transition={{ duration: 0.2 }}
      />

      {/* precise bright dot */}
      <motion.div
        className={`${base} z-[9999] h-2.5 w-2.5 bg-white`}
        style={{ x, y, boxShadow: "0 0 10px rgba(255,255,255,0.9)" }}
        animate={{ opacity: hidden ? 0 : 1, scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
