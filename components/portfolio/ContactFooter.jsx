import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ArrowUpRight } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com/VishalLakshmiNarayanan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vishallaksh/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lvishal1607@gmail.com", label: "lvishal1607@gmail.com" },
  { icon: FileText, href: "https://drive.google.com/file/d/1yNYIyJncSy28G_jh4X9gHFQVi8y-rc-d/view?usp=sharing", label: "Resume" },
];

export default function ContactFooter() {
  return (
    <section id="contact" className="py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's connect</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10 text-sm">
            Open to roles in product analytics, data analytics, data consultant and data strategist. Let's talk about what data can do for your business.
          </p>

          <a
            href="mailto:lvishal1607@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300"
          >
            Get In Touch
            <ArrowUpRight size={14} />
          </a>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <l.icon size={15} />
                <span>{l.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Vishal</p>
          
        </div>
      </div>
    </section>
  );
  
}