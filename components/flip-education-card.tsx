"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import type { Education } from "@/lib/content"
import "./flip-card-styles.css"

interface FlipEducationCardProps {
  education: Education
  index: number
}

export function FlipEducationCard({ education, index }: FlipEducationCardProps) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setScale(0.65)
      } else if (width <= 640) {
        setScale(0.75)
      } else if (width <= 768) {
        setScale(0.85)
      } else {
        setScale(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  const duration = education.current
    ? `${formatDate(education.startDate)} – Present`
    : `${formatDate(education.startDate)} – ${formatDate(education.endDate!)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flip-card"
      style={{ transform: `scale(${scale})` }}
    >
      <div className="flip-content">
        {/* Front of Card */}
        <div
          className="flip-front"
          style={{
            backgroundImage: `url(${education.image || '/images/education/default.jpg'})`
          }}
        >
          <div className="flip-inner">
            <h2>{education.school}</h2>
            <div className="rating">
              {education.current ? (
                <span className="badge-current">Currently Pursuing</span>
              ) : (
                <span className="badge-completed">Completed</span>
              )}
            </div>
            <label className="flip-button">
              Hover for details
            </label>
          </div>
        </div>

        {/* Back of Card */}
        <div className="flip-back">
          <div className="flip-inner">
            {/* Header Row with Location and Duration */}
            <div className="flip-header-row">
              <div className="flip-location">{education.location}</div>
              <div className="flip-duration">{duration}</div>
            </div>

            {/* Stats Info */}
            {education.stats && education.stats.length >= 4 && (
              <div className="flip-stats-row">
                {education.stats.slice(0, 4).map((stat, idx) => (
                  <div key={idx} className="flip-info">
                    <span>{stat.value}</span>
                    <div className="flip-icon">
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Degree Description */}
            <div className="flip-description">
              <h3 className="degree-title">{education.degree}</h3>

              {education.coursework && education.coursework.length > 0 && (
                <div className="coursework-section">
                  <h4>Key Coursework:</h4>
                  <ul>
                    {education.coursework.map((course, idx) => (
                      <li key={idx}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* No back button; details are revealed on hover */}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
