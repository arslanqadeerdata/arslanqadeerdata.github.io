"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CustomCursor = dynamic(() => import("./CustomCursor"), { ssr: false });
const FloatingWhatsApp = dynamic(() => import("./FloatingWhatsApp"), { ssr: false });
const ScrollProgress = dynamic(() => import("./ScrollProgress"), { ssr: false });
const SmoothScroll = dynamic(() => import("./SmoothScroll"), { ssr: false });

/** Loads decorative and nonessential interactions after the initial content is usable. */
export default function DeferredEnhancements() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const schedule = window.requestIdleCallback?.(
      () => setReady(true),
      { timeout: 1800 }
    );

    if (schedule !== undefined) {
      return () => window.cancelIdleCallback(schedule);
    }

    const timeout = window.setTimeout(() => setReady(true), 800);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!ready) return null;

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <SmoothScroll />
      <FloatingWhatsApp />
    </>
  );
}
