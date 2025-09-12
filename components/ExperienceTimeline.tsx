"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ExperienceCard } from "@/components/experience-card"

export default function ExperienceTimeline({ items }: { items: any[] }) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.2"],
  })
  const grow = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={ref} className="relative mx-auto max-w-5xl">
      {/* desktop center line */}
      <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-emerald-400/20 md:block" />
      {/* animated overlay */}
      <motion.div
        className="absolute left-1/2 hidden w-1 -translate-x-1/2 rounded-b bg-emerald-400/60 md:block"
        style={{ height: grow }}
      />
      {/* mobile line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-400/20 md:hidden" />

      <ul className="space-y-12">
        {items.map((exp, i) => {
          const key = `${exp.company}-${exp.startDate}`

          return (
            <li key={key} className="relative">
              {/* dot */}
              <div
                className={`absolute top-7 z-[1] h-3.5 w-3.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20
                  ${"left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"}`}
              />
              {/* layout */}
              <div className="md:grid md:grid-cols-2 md:gap-10">
                {/* left side */}
                {i % 2 === 0 && (
                  <div className="md:pr-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ExperienceCard experience={exp} index={i} />
                    </motion.div>
                  </div>
                )}
                {/* right side */}
                {i % 2 !== 0 && (
                  <div className="md:col-start-2 md:pl-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ExperienceCard experience={exp} index={i} />
                    </motion.div>
                  </div>
                )}
                {/* mobile fallback */}
                <div className="md:hidden">
                  <ExperienceCard experience={exp} index={i} />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
