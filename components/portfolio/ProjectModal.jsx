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
          className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[2rem] bg-card border-none shadow-[inset_2px_2px_8px_rgba(255,255,255,0.1),_inset_-3px_-3px_10px_rgba(0,0,0,0.5),_6px_10px_20px_rgba(0,0,0,0.4)]"
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
                  {section.content && (
                    Array.isArray(section.content) ? (
                      <ul className="space-y-4 pl-5 mb-4">
                        {section.content.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                            <div>{item}</div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-muted-foreground leading-relaxed pl-5 mb-4">{section.content}</div>
                    )
                  )}
                  {section.image && (
                    <div className="pl-5 mt-4">
                      <img src={section.image} alt={section.heading} className="w-full rounded-xl border border-white/10" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-5 mt-10 pt-8 border-t border-white/8">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-none bg-card shadow-[inset_1px_1px_4px_rgba(255,255,255,0.1),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_4px_4px_10px_rgba(0,0,0,0.3)] text-sm text-muted-foreground hover:text-primary hover:shadow-[inset_1px_1px_6px_rgba(255,255,255,0.2),_inset_-2px_-2px_6px_rgba(0,0,0,0.5),_2px_2px_6px_rgba(0,0,0,0.4)] hover:brightness-110 transition-all duration-300 active:scale-95">
                  <Github size={15} />
                  View on GitHub
                </a>
              )}
              {project.notion && (
                <a href={project.notion} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary shadow-[inset_2px_2px_6px_rgba(255,255,255,0.3),_inset_-3px_-3px_8px_rgba(0,0,0,0.3),_4px_8px_16px_rgba(var(--primary),0.4)] hover:shadow-[inset_4px_4px_8px_rgba(255,255,255,0.4),_inset_-4px_-4px_10px_rgba(0,0,0,0.4),_2px_4px_8px_rgba(var(--primary),0.6)] text-primary-foreground text-sm transition-all duration-300 active:scale-95">
                  <ExternalLink size={15} />
                  Notion
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary shadow-[inset_2px_2px_6px_rgba(255,255,255,0.3),_inset_-3px_-3px_8px_rgba(0,0,0,0.3),_4px_8px_16px_rgba(var(--primary),0.4)] hover:shadow-[inset_4px_4px_8px_rgba(255,255,255,0.4),_inset_-4px_-4px_10px_rgba(0,0,0,0.4),_2px_4px_8px_rgba(var(--primary),0.6)] text-primary-foreground text-sm transition-all duration-300 active:scale-95">
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