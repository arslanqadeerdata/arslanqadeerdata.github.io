"use client";

import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { profile, navLinks, whatsappLink } from "@/data/portfolio";

export default function Footer() {
  const year = 2026; // static to keep SSR/CSR output identical

  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary text-sm text-white shadow-glow">
                AQ
              </span>
              {profile.name}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              {profile.headline}. Focused on SQL, PostgreSQL, Power BI and Business Intelligence.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-10 w-10 place-items-center rounded-xl glass text-gray-300 transition-colors hover:text-white">
                <FaGithub size={18} />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-xl glass text-gray-300 transition-colors hover:text-white">
                <FaLinkedinIn size={18} />
              </a>
              <a href={profile.socials.email} aria-label="Email" className="grid h-10 w-10 place-items-center rounded-xl glass text-gray-300 transition-colors hover:text-white">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* nav */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Navigate</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 transition-colors hover:text-accent-violet">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-300">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-accent-violet" />
                <a href={`mailto:${profile.email}`} className="hover:text-white">{profile.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <FaWhatsapp size={15} className="text-[#25D366]" />
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {profile.whatsapp.display} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-accent-violet" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {year} {profile.name}. Designed &amp; built with Next.js, Tailwind &amp; Framer Motion.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 transition-colors hover:text-white"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
