"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { profile, whatsappLink } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "@/components/ui/SectionHeading";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Simulate submit, then open the user's mail client with the message.
    // Swap this for a real endpoint (Formspree / Resend / API route) later.
    setTimeout(() => {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  const details = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
    {
      Icon: FaWhatsapp,
      label: "WhatsApp — tap to chat",
      value: profile.whatsapp.display,
      href: whatsappLink,
      external: true,
      accent: true,
    },
    { Icon: Phone, label: "Phone", value: profile.phones[1], href: `tel:${profile.phones[1].replace(/\s/g, "")}`, external: false },
    { Icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <section id="contact" className="section-pad">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something with your data"
        description="Have a role, project or dataset in mind? I'd love to hear about it."
      />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
        {/* ---- info column ---- */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-4"
        >
          {details.map(({ Icon, label, value, href, external, accent }) => {
            const inner = (
              <>
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 ring-inset ring-white/10 ${
                    accent
                      ? "bg-[#25D366]/20 text-[#25D366]"
                      : "bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 text-accent-violet"
                  }`}
                >
                  <Icon size={20} />
                </span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
                  <div className="truncate text-sm font-medium text-gray-100">{value}</div>
                </div>
              </>
            );
            return (
              <motion.div key={label} variants={fadeUp}>
                {href ? (
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 rounded-2xl glass-strong p-4 transition-colors hover:bg-white/10 ${
                      accent ? "ring-1 ring-[#25D366]/30" : ""
                    }`}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl glass-strong p-4">{inner}</div>
                )}
              </motion.div>
            );
          })}

          <motion.div variants={fadeUp} className="mt-2 flex gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-12 flex-1 place-items-center rounded-2xl glass-strong text-gray-300 transition-all hover:-translate-y-1 hover:text-white"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-12 flex-1 place-items-center rounded-2xl glass-strong text-gray-300 transition-all hover:-translate-y-1 hover:text-white"
            >
              <FaLinkedinIn size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* ---- form column ---- */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grad-border rounded-3xl glass-strong p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              label="Your Name"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              placeholder="Jane Recruiter"
              required
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              placeholder="you@company.com"
              required
            />
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-medium text-gray-300">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              placeholder="Tell me about the role or project…"
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-accent-violet/60 focus:ring-2 focus:ring-accent-violet/20"
            />
          </div>

          <button
            type="submit"
            disabled={status !== "idle"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
          >
            {status === "idle" && (<><Send size={16} /> Send Message</>)}
            {status === "sending" && (<><Loader2 size={16} className="animate-spin" /> Sending…</>)}
            {status === "sent" && (<><CheckCircle2 size={16} /> Opening your mail app…</>)}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-gray-300">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none transition-colors focus:border-accent-violet/60 focus:ring-2 focus:ring-accent-violet/20"
      />
    </div>
  );
}
