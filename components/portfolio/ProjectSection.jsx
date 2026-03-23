import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { projects, projectCategories } from "../../lib/portfolioProjects";

function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGlow((p) => ({ ...p, opacity: 0 }))}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="group relative rounded-[2rem] overflow-hidden flex flex-col bg-card border-none shadow-[inset_2px_2px_8px_rgba(255,255,255,0.1),_inset_-3px_-3px_10px_rgba(0,0,0,0.5),_8px_12px_24px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:brightness-110"
    >
      <div
        className="pointer-events-none absolute rounded-full transition-opacity duration-500"
        style={{
          width: 360,
          height: 360,
          left: glow.x - 180,
          top: glow.y - 180,
          opacity: glow.opacity,
          background: "radial-gradient(circle, rgba(245,170,60,0.14) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(245,170,60,0.07), transparent 55%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 p-7 flex flex-col h-full">
        <div className="flex items-center justify-between mb-5 gap-3">
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            {project.category}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            {projectCategories.find((item) => item.id === project.group)?.label}
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-xs text-primary/70 italic mb-4">{project.tagline}</p>

        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-7">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-3 py-1.5 rounded-full border-none bg-card shadow-[inset_1px_1px_4px_rgba(255,255,255,0.1),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_2px_2px_6px_rgba(0,0,0,0.3)] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-5 border-t border-white/6 gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-none bg-card shadow-[inset_1px_1px_4px_rgba(255,255,255,0.1),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_2px_2px_6px_rgba(0,0,0,0.3)] text-xs text-muted-foreground hover:text-primary hover:shadow-[inset_1px_1px_6px_rgba(255,255,255,0.2),_inset_-2px_-2px_6px_rgba(0,0,0,0.5),_2px_2px_8px_rgba(0,0,0,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={13} />
                Source
              </a>
            )}
            {project.notion && (
              <a
                href={project.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-none bg-card shadow-[inset_1px_1px_4px_rgba(255,255,255,0.1),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_2px_2px_6px_rgba(0,0,0,0.3)] text-xs text-muted-foreground hover:text-primary hover:shadow-[inset_1px_1px_6px_rgba(255,255,255,0.2),_inset_-2px_-2px_6px_rgba(0,0,0,0.5),_2px_2px_8px_rgba(0,0,0,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={13} />
                Notion
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-none bg-card shadow-[inset_1px_1px_4px_rgba(255,255,255,0.1),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_2px_2px_6px_rgba(0,0,0,0.3)] text-xs text-muted-foreground hover:text-primary hover:shadow-[inset_1px_1px_6px_rgba(255,255,255,0.2),_inset_-2px_-2px_6px_rgba(0,0,0,0.5),_2px_2px_8px_rgba(0,0,0,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={13} />
                Live
              </a>
            )}
          </div>
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary shadow-[inset_2px_2px_6px_rgba(255,255,255,0.3),_inset_-3px_-3px_8px_rgba(0,0,0,0.3),_2px_4px_8px_rgba(var(--primary),0.4)] hover:shadow-[inset_2px_2px_8px_rgba(255,255,255,0.4),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_1px_2px_6px_rgba(var(--primary),0.6)] text-primary-foreground text-xs font-medium transition-all duration-300 active:scale-95"
          >
            Read writeup
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);
  const [activeCategory, setActiveCategory] = useState(projectCategories[0].id);

  const visibleProjects = projects.filter((project) => project.group === activeCategory);
  const activeCategoryMeta = projectCategories.find((item) => item.id === activeCategory);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-24 mt-8"
        >
          <div className="flex-1 w-full text-center md:text-left z-20">
            <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-3 font-bold">
              Projects
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              Explore My Featured work<span className="text-primary">.</span>
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
              Project writeups are now grouped by domain. The section opens on Data Analytics and shows one category at a time so each body of work reads as a focused collection instead of a wall of cards.
            </p>
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0 mt-12 md:mt-0 z-10">
            <motion.img
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/images/hero/hero_projects.png"
              alt="Vishal sitting with laptop mapping out projects"
              className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] pointer-events-none"
            />
          </div>
        </motion.div>

        <div className="mb-10">
          <div className="flex flex-wrap gap-3 mb-5">
            {projectCategories.map((category) => {
              const isActive = category.id === activeCategory;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-3 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[inset_2px_2px_6px_rgba(255,255,255,0.3),_inset_-3px_-3px_8px_rgba(0,0,0,0.3),_2px_4px_8px_rgba(var(--primary),0.4)]"
                      : "bg-card text-muted-foreground shadow-[inset_1px_1px_4px_rgba(255,255,255,0.1),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_2px_2px_6px_rgba(0,0,0,0.3)] hover:text-primary"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="rounded-[1.75rem] bg-card/60 px-6 py-5 shadow-[inset_1px_1px_4px_rgba(255,255,255,0.08),_inset_-2px_-2px_8px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-2">
                  Active category
                </p>
                <h3 className="text-2xl font-bold text-foreground">{activeCategoryMeta?.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl">
                {activeCategoryMeta?.description}
              </p>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-6 pb-12"
          >
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} onOpen={setSelected} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
