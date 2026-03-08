import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/VishalLakshmiNarayanan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vishallaksh/", label: "LinkedIn" },
  {
    icon: Mail,
    href: "mailto:lvishal1607@gmail.com",
    label: "Gmail",
    value: "lvishal1607@gmail.com",
    isEmail: true
  },
  { icon: FileText, href: "https://drive.google.com/file/d/1yNYIyJncSy28G_jh4X9gHFQVi8y-rc-d/view?usp=sharing", label: "Resume" },
];

const PROFILE_IMG = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ac88793cd4299b26591c9e/da1bd79a5_WhatsAppImage2026-01-17at114435AM.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-7"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xs tracking-[0.35em] uppercase text-primary"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]"
            >
              Vishal
              <br />
              <span className="text-primary">Lakshmi Narayanan</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm md:text-base text-muted-foreground leading-relaxed"
            >
              Product Data Analyst · Quantifying Uncertainty to Build Resilient Business Strategies
            </motion.p>

            

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-5 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300"
              >
                View My Work
                <ArrowDown size={13} />
              </a>
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={s.label}
                  >
                    <s.icon size={17} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-2xl scale-105" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-primary/20">
                <img
                  src={PROFILE_IMG}
                  alt="Vishal Lakshmi Narayanan"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}