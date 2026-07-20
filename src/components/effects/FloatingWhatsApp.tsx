"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { X } from "lucide-react";
import { whatsappLink, profile } from "@/data/portfolio";

/**
 * Fixed click-to-chat WhatsApp button (bottom-right).
 * Appears after a small scroll, pulses gently, and shows a one-time tooltip.
 */
export default function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // pop the tooltip once, shortly after it appears
    const t = setTimeout(() => setTip(true), 2600);
    const t2 = setTimeout(() => setTip(false), 8000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-[70] flex items-center gap-3"
        >
          <AnimatePresence>
            {tip && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="relative hidden items-center gap-2 rounded-2xl glass-strong px-4 py-2.5 text-sm text-white shadow-card sm:flex"
              >
                Chat with me on WhatsApp 👋
                <button
                  onClick={() => setTip(false)}
                  aria-label="Dismiss"
                  className="text-gray-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat with ${profile.name} on WhatsApp`}
            className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.7)] transition-transform hover:scale-110"
          >
            {/* pulsing ring */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-40" />
            <FaWhatsapp size={30} className="relative" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
