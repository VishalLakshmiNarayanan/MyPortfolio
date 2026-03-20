import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Phone } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com/VishalLakshmiNarayanan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vishallaksh/", label: "LinkedIn" },
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
          className="relative flex flex-col md:flex-row items-center md:items-end justify-between mb-8 md:mb-12 mt-8 text-center md:text-left"
        >
          {/* Text Content */}
          <div className="flex-1 w-full z-20">
            <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-3 font-bold">Contact</h2>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              Let's connect<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed mt-4 md:mt-8 mb-8">
              Open to roles in data analytics, data science, data engineering, and AI engineering. Let's talk about what data can do for your business!
            </p>

            {/* Static Contact Info */}
            <div className="flex flex-col gap-4 mb-10 items-center md:items-start text-foreground/90 font-bold text-xl md:text-2xl mt-4">
              <div className="flex items-center gap-3">
                <Mail className="text-primary w-6 h-6 md:w-7 md:h-7" />
                <span>lvishal1607@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary w-6 h-6 md:w-7 md:h-7" />
                <span>+1 (480) 304 1340</span>
              </div>
            </div>

            {/* Clay Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 md:gap-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-card shadow-[inset_1px_1px_4px_rgba(255,255,255,0.1),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_4px_4px_10px_rgba(0,0,0,0.3)] text-sm text-muted-foreground hover:text-primary hover:shadow-[inset_1px_1px_6px_rgba(255,255,255,0.2),_inset_-2px_-2px_6px_rgba(0,0,0,0.5),_2px_2px_6px_rgba(0,0,0,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300"
                >
                  <l.icon size={15} />
                  <span>{l.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Character Image Beside Title */}
          <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0 mt-16 md:mt-0 z-10">
            <motion.img 
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/images/hero/hero_contact.png" 
              alt="Vishal Contact Illustration"
              className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] pointer-events-none"
            />
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Vishal</p>
          
        </div>
      </div>
    </section>
  );
  
}