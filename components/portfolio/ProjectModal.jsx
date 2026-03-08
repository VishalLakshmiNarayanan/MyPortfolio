import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, ChevronRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />

        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-10 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
          >
            <X size={18} />
          </button>

          <div className="p-8 md:p-10">
            {/* Category */}
            <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-3">
              {project.category?.replace("-", " / ")}
            </p>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{project.title}</h2>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>

            {/* Writeup sections */}
            <div className="space-y-8">
              {project.writeup.map((section, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <ChevronRight size={14} className="text-primary" />
                    {section.heading}
                  </h3>
                  {Array.isArray(section.content) ? (
                    <ul className="space-y-2 pl-5">
                      {section.content.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground leading-relaxed pl-5">{section.content}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-5 mt-10 pt-8 border-t border-white/8">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300">
                  <Github size={15} />
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-all duration-300">
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}