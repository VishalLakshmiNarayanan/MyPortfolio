"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Github, ExternalLink } from "lucide-react"
import type { Project } from "@/lib/content"

interface StackedProjectCardsProps {
  projects: Project[]
}

export default function StackedProjectCards({ projects }: StackedProjectCardsProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)

  // Cycle through projects
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  // Keyboard navigation
  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        handleNext()
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  if (projects.length === 0) return null

  // Color variants cycle through Aurora Dream colors
  const colorVariants = ["purple", "pink", "yellow", "blue"]

  return (
    <section className="project-stack" aria-label="Featured Projects">
      {/* Hidden radio inputs for state management */}
      {projects.map((_, i) => (
        <input
          key={i}
          type="radio"
          name="project-stack"
          id={`project-${i}`}
          checked={activeIndex === i}
          onChange={() => setActiveIndex(i)}
          className="sr-only"
          aria-label={`Select project ${i + 1}`}
        />
      ))}

      {/* Project cards */}
      {projects.map((project, index) => {
        const isActive = index === activeIndex
        const variant = colorVariants[index % colorVariants.length]

        return (
          <article
            key={project.slug}
            className="stacked-project-card"
            data-variant={variant}
            data-active={isActive}
            style={{
              // Dynamic ordering based on active card
              // Active card is always on top (highest order)
              // Cards cycle through positions
              "--_order": isActive ? 3 : index < activeIndex ? 1 : 2,
              "--_scale": isActive ? 1 : index < activeIndex ? 0.75 : 0.85,
              "--_opacity": isActive ? 1 : index < activeIndex ? 0.7 : 0.85,
              "--_offset": isActive ? "0" : index < activeIndex ? "-12rem" : "-6rem",
            } as React.CSSProperties}
          >
            {/* Card header with title and navigation */}
            <header className="card-header">
              <h3 className="text-xl font-semibold text-black m-0">{project.title}</h3>
              {isActive && (
                <button
                  onClick={handleNext}
                  className="stack-nav-control"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6 text-black" />
                </button>
              )}
            </header>

            {/* Card content - only shown on active card */}
            <div className="card-content">
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 48rem"
                    priority={isActive}
                  />
                </div>
              )}

              <p className="text-black/80 leading-relaxed">{project.description}</p>

              {/* Tech stack */}
              {project.tech && project.tech.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-black">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-white/60 text-black border border-purple-200/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {project.tags && project.tags.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-black">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        className="text-xs bg-purple-100/50 text-black hover:bg-purple-100/80 border border-purple-200/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                {project.github && (
                  <Button
                    asChild
                    size="sm"
                    className="w-full sm:flex-1 bg-purple-500 hover:bg-purple-600 text-white"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                )}

                {project.demo && (
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="w-full sm:flex-1 bg-white/80 text-black hover:bg-white border border-purple-200/30"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </article>
        )
      })}

      {/* Progress indicator */}
      <div className="mt-8 flex justify-center gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === activeIndex
                ? "w-6 bg-gradient-to-r from-purple-500 to-pink-500"
                : "w-2.5 bg-black/20 hover:bg-black/40"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
