"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import type { Education } from "@/lib/content"
import "./education-card-styles.css"

interface AnimatedEducationCardProps {
  education: Education
  index: number
}

export function AnimatedEducationCard({ education, index }: AnimatedEducationCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  const duration = education.current
    ? `${formatDate(education.startDate)} – Present`
    : `${formatDate(education.startDate)} – ${formatDate(education.endDate!)}`

  // Split degree name into words for mask effect
  const degreeWords = education.degree.split(' ').slice(0, 3) // Take first 3 words

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="edu-card-container"
    >
      <figure className="edu-figure">
        {/* Background Image with zoom effect */}
        <div
          className="edu-media"
          style={{ backgroundImage: `url(${education.image || '/images/education/default.jpg'})` }}
        />

        {/* SVG Mask Caption */}
        <figcaption className="edu-caption">
          <svg
            viewBox="0 0 200 200"
            version="1.1"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="edu-svg"
          >
            <defs>
              <mask id={`mask-${index}`} x="0" y="0" width="100%" height="100%">
                {/* White rectangle for mask base */}
                <rect id="alpha" x="0" y="0" width="100%" height="100%" fill="white" />

                {/* Text that will reveal through */}
                {degreeWords.map((word, idx) => (
                  <text
                    key={idx}
                    className="edu-title"
                    x="50%"
                    y={`${2.5 + idx * 1}em`}
                    textAnchor="middle"
                  >
                    {word.toUpperCase()}
                  </text>
                ))}
              </mask>
            </defs>

            {/* The white rectangle that gets masked */}
            <rect
              id="base"
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="white"
              mask={`url(#mask-${index})`}
            />
          </svg>

          {/* Body content at bottom */}
          <div className="edu-body">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900">{education.school}</h3>
              <p className="text-sm text-gray-700">{education.location} • {duration}</p>

              {/* Stats Grid */}
              {education.stats && education.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {education.stats.slice(0, 2).map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-xs font-medium text-gray-600">{stat.label}</p>
                      <p className="text-sm font-bold text-purple-600">{stat.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </figcaption>
      </figure>
    </motion.div>
  )
}
