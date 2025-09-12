"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ProjectCard as ProjectCardUI } from "@/components/project-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/lib/content" // use your shared Project type

interface ProjectCarouselProps {
  projects: Project[]
  className?: string
}

export default function ProjectCarousel({ projects, className }: ProjectCarouselProps) {
  const [index, setIndex] = React.useState(0)
  const count = projects.length

  const go = React.useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  )

  // keyboard support
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [go])

  return (
    <section
      className={cn("relative w-full", className)}
      aria-label="Projects carousel"
      aria-roledescription="carousel"
    >
      {/* stage with 3D perspective for rotated stack */}
      <div className="relative mx-auto max-w-6xl px-2 sm:px-4" style={{ perspective: "1400px" }}>
        <div className="relative h-[520px] sm:h-[560px] md:h-[600px]">
          <AnimatePresence initial={false}>
            {projects.map((p, i) => {
              // signed offset relative to active index (wrap-aware)
              const raw = i - index
              const wrap = ((raw + count + Math.floor(count / 2)) % count) - Math.floor(count / 2)
              const offset = wrap

              // layout values
              const isActive = offset === 0
              const abs = Math.abs(offset)
              const tx = offset * 340 // horizontal spread
              const tz = -Math.min(300, abs * 120) // push back non-actives
              const ry = offset * -16 // fan rotation
              const rz = offset * 1.5 // slight tilt
              const sc = isActive ? 1 : 0.9 - Math.min(0.1, abs * 0.05)
              const z = 100 - abs // stacking

              return (
                <motion.div
                  key={p.title}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  style={{ zIndex: z }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${p.title} (${i + 1} of ${count})`}
                >
                  {/* Card container with 3D transform */}
                  <motion.div
                    className={cn(
                      "w-[92%] sm:w-[78%] md:w-[70%] lg:w-[64%] cursor-pointer select-none"
                    )}
                    onClick={() => {
                      if (!isActive) setIndex(i)
                    }}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(_, info) => {
                      if (!isActive) return
                      if (info.offset.x < -80) go(1)
                      if (info.offset.x > 80) go(-1)
                    }}
                    whileHover={isActive ? { scale: 1.02 } : undefined}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `translate3d(${tx}px, 0, ${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
                      transition: "transform 400ms cubic-bezier(.2,.8,.2,1)",
                    }}
                    aria-current={isActive}
                  >
                    <ProjectCardUI project={p} active={isActive} />
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Prev / Next controls */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-3">
            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto glass border-white/15 hover:border-white/30 hover:bg-white/10 backdrop-blur-md"
              onClick={() => go(-1)}
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto glass border-white/15 hover:border-white/30 hover:bg-white/10 backdrop-blur-md"
              onClick={() => go(1)}
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* dots */}
        <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Project slides">
          {projects.map((_, i) => {
            const active = i === index
            return (
              <button
                key={i}
                onClick={() => setIndex(i)}
                role="tab"
                aria-selected={active}
                aria-controls={`project-slide-${i}`}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  active ? "bg-emerald-400 w-6" : "bg-white/20 hover:bg-white/40"
                )}
                aria-label={`Go to project ${i + 1}`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
