"use client"

import * as React from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { heroStats } from "@/lib/content"

// inline LinkedIn logo (no external icons required)
function LinkedInMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.9v15H.5v-15zM8.5 8.5h4.7v2.1h.1c.7-1.3 2.5-2.7 5.1-2.7 5.5 0 6.5 3.6 6.5 8.3v7.3h-4.9v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.6-2.4 3.4v6.5H8.5v-15z"/>
    </svg>
  )
}

export default function HeroStats() {
  const reduce = useReducedMotion()
  const [flip, setFlip] = React.useState(0)

  // flip Projects every ~2.2s like your GlassFlipper
  React.useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setFlip((v) => (v ? 0 : 1)), 2200)
    return () => clearInterval(id)
  }, [reduce])

  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {heroStats.map((s) => {
        const isProjects = s.id === "projects"
        const value = isProjects && Array.isArray(s.rolling) ? s.rolling[flip] : s.value

        // same glass recipe as your GlassFlipper
        const glassCard = cn(
          "glass w-full h-24 rounded-xl ring-1 ring-white/10 px-6",
          "bg-white/[0.04] backdrop-blur-xl",
          "shadow-[0_18px_80px_-20px_rgba(16,185,129,.35)]",
          "flex items-center justify-center text-center"
        )

        const gold = isProjects && value === "9"

        return (
          <div key={s.id} className="flex flex-col items-center">
            {/* label ABOVE the box */}
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white/70">
              {s.id === "linkedin" && <LinkedInMark className="h-4 w-4" />}
              <span>{s.label}</span>
            </div>

            {/* number INSIDE the glass box, flipping like GlassFlipper */}
            <div className={glassCard} aria-live="polite">
              <div className="relative h-8 sm:h-9 overflow-hidden min-w-[7ch]">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.div
                    key={String(value) + String(s.id)}
                    className={cn(
                      "absolute inset-0 flex items-center justify-center font-semibold",
                      "text-2xl sm:text-3xl tracking-tight",
                      gold
                        ? "text-yellow-400 drop-shadow-[0_0_14px_rgba(250,204,21,0.45)]"
                        : "text-white"
                    )}
                    initial={reduce ? false : { y: "100%", opacity: 0 }}
                    animate={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <span>{value}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* tiny hint ONLY for projects so the toggle makes sense */}
            {isProjects && (
              <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/50">
                {flip === 0 ? "Total" : "Featured"}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
