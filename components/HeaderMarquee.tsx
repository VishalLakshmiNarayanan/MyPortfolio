"use client"

import React, { useEffect, useState } from "react"

const iconIds: string[] = [
  "logos:python",
  "logos:r-lang",
  "simple-icons:scikitlearn",
  "logos:tensorflow",
  "logos:pytorch-icon",
  "simple-icons:apachespark",
  "simple-icons:databricks",
  "simple-icons:apacheairflow",
  "logos:docker-icon",
  "logos:mysql-icon",
  "logos:postgresql",
  "simple-icons:sqlite",
  "simple-icons:supabase",
  "simple-icons:mongodb",
  "simple-icons:powerbi",
  "simple-icons:tableau",
  "simple-icons:streamlit",
  "simple-icons:d3dotjs",
  "simple-icons:githubactions",
  "simple-icons:n8n",
  "logos:git-icon",
  "tabler:api",
  "mdi:chart-timeline-variant",
  "lucide:brain-circuit",
]

function Row({ reverse, duration }: { reverse?: boolean; duration?: number }) {
  const items = [...iconIds, ...iconIds] // duplicate for seamless loop
  return (
    <div
      className={`marquee-row ${reverse ? "reverse" : ""}`}
      style={{ animationDuration: `${duration ?? 30}s` }}
      aria-hidden
    >
      {items.map((id, i) => (
        <img
          key={`${id}-${i}`}
          src={`https://api.iconify.design/${encodeURIComponent(id)}.svg${id.startsWith("logos:") ? "" : "?color=%23000000"}`}
          alt=""
          className="marquee-icon"
          loading="lazy"
        />
      ))}
    </div>
  )
}

export default function HeaderMarquee() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Faster speeds for mobile
  const speeds = isMobile
    ? { speed1: 24, speed2: 32, speed3: 40 }
    : { speed1: 36, speed2: 48, speed3: 60 }

  return (
    <div className="marquee" aria-hidden>
      <Row duration={speeds.speed1} />
      <Row reverse duration={speeds.speed2} />
      <Row duration={speeds.speed3} />
    </div>
  )
}
