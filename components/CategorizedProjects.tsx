"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Calendar, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/content"

const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "ai-ml", label: "AI & ML" },
  { key: "data-engineering", label: "Data Engineering" },
  { key: "web-dev", label: "Web & Product" },
  { key: "security", label: "Security" },
  { key: "automation", label: "Automation" },
  { key: "healthcare", label: "Healthcare" },
] as const

function formatDate(dateStr: string) {
  const d = new Date(dateStr)
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" })
}

function TextProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = React.useState(false)

  const categoryColors: Record<string, string> = {
    "ai-ml": "border-l-purple-500",
    "data-engineering": "border-l-blue-500",
    "web-dev": "border-l-emerald-500",
    "security": "border-l-red-400",
    "automation": "border-l-amber-500",
    "healthcare": "border-l-pink-500",
  }

  const accentColor = categoryColors[project.category] || "border-l-purple-500"

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className={`group relative rounded-xl border border-black/[0.08] bg-white/50 backdrop-blur-sm
                   border-l-4 ${accentColor} hover:border-black/[0.14] hover:bg-white/70
                   transition-all duration-300 cursor-pointer`}
      onClick={() => setExpanded((p) => !p)}
      role="button"
      aria-expanded={expanded}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setExpanded((p) => !p)
        }
      }}
    >
      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-black leading-snug text-balance">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-1.5">
              <Calendar className="h-3.5 w-3.5 text-black/40 shrink-0" />
              <span className="text-xs text-black/50">{formatDate(project.date)}</span>
            </div>
          </div>
          <ChevronRight
            className={`h-4 w-4 text-black/30 shrink-0 transition-transform duration-300
                       ${expanded ? "rotate-90" : "group-hover:translate-x-0.5"}`}
          />
        </div>

        {/* Tech badges - always visible */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tech.slice(0, expanded ? undefined : 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[11px] px-2 py-0.5 bg-black/[0.04] text-black/70 border-0 font-medium"
            >
              {tech}
            </Badge>
          ))}
          {!expanded && project.tech.length > 4 && (
            <Badge
              variant="secondary"
              className="text-[11px] px-2 py-0.5 bg-black/[0.04] text-black/50 border-0"
            >
              +{project.tech.length - 4}
            </Badge>
          )}
        </div>

        {/* Expandable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-3">
                <p className="text-sm text-black/70 leading-relaxed">
                  {project.description}
                </p>

                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="text-[11px] px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-200/40 hover:bg-purple-100"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
                  {project.github && (
                    <Button
                      asChild
                      size="sm"
                      className="h-8 text-xs bg-black/90 hover:bg-black text-white"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1.5 h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="h-8 text-xs border-black/15 text-black hover:bg-black/[0.04]"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  )
}

interface CategorizedProjectsProps {
  projects: Project[]
}

export default function CategorizedProjects({ projects }: CategorizedProjectsProps) {
  const [activeCategory, setActiveCategory] = React.useState<string>("all")

  const filtered = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  // Sort by date descending
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // Count projects per category
  const counts = React.useMemo(() => {
    const map: Record<string, number> = { all: projects.length }
    for (const p of projects) {
      map[p.category] = (map[p.category] || 0) + 1
    }
    return map
  }, [projects])

  return (
    <div className="max-w-5xl mx-auto px-2">
      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.filter((c) => c.key === "all" || (counts[c.key] ?? 0) > 0).map((cat) => {
          const isActive = cat.key === activeCategory
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${isActive
                  ? "bg-black text-white shadow-sm"
                  : "bg-black/[0.04] text-black/60 hover:bg-black/[0.08] hover:text-black/80"
                }`}
            >
              {cat.label}
              <span className={`ml-1.5 text-xs ${isActive ? "text-white/70" : "text-black/40"}`}>
                {counts[cat.key] ?? 0}
              </span>
            </button>
          )
        })}
      </div>

      {/* Project grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        <AnimatePresence mode="popLayout">
          {sorted.map((project, i) => (
            <TextProjectCard key={project.slug} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {sorted.length === 0 && (
        <p className="text-center text-black/40 py-12 text-sm">
          No projects in this category yet.
        </p>
      )}
    </div>
  )
}
