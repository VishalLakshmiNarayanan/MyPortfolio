import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setGlow({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative p-6 rounded-[2rem] overflow-hidden cursor-default bg-card shadow-[inset_2px_2px_8px_rgba(255,255,255,0.1),_inset_-3px_-3px_10px_rgba(0,0,0,0.5),_6px_10px_20px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute rounded-full transition-opacity duration-300"
        style={{
          width: 280,
          height: 280,
          left: glow.x - 140,
          top: glow.y - 140,
          opacity: glow.opacity,
          background: "radial-gradient(circle, rgba(245,170,60,0.12) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      {/* Border glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: "linear-gradient(135deg, rgba(245,170,60,0.06), transparent 60%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10">
        {/* Category + Featured */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
            {project.category?.replace("-", " · ")}
          </p>
          {project.featured && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed mb-5 line-clamp-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-4 flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={13} />
              Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <ExternalLink size={13} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}