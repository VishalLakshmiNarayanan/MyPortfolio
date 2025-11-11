"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import "./moving-moments.css"

interface Moment {
  title: string
  date: string
  image: string
  description: string
}

const moments: Moment[] = [
  {
    title: "DevHacks S1",
    date: "March",
    image: "/images/Moments/devhackss1.png",
    description: "First hackathon experience",
  },
  {
    title: "HackAZona v0.1 [People's choice award]",
    date: "March",
    image: "/images/Moments/Hackazona.png",
    description: "Innovative solutions at HackAZona",
  },
  {
    title: "Techipalooza Conference 2025",
    date: "August",
    image: "/images/Moments/techipaloozaconf.png",
    description: "Tech conference and networking",
  },
  {
    title: "DevHacks S2 [WON 1st Place]",
    date: "August",
    image: "/images/Moments/devhackss2.png",
    description: "1st Place victory at DevHacks S2",
  },
  {
    title: "Hacks for Humanity",
    date: "October",
    image: "/images/Moments/HHH.png",
    description: "Building tech for social impact",
  },
  {
    title: "9th Annual ASU Data Conference",
    date: "November",
    image: "/images/Moments/Dataconf.png",
    description: "Data science and AI at ASU",
  },
  {
    title: "Conducted Portfolio building workshop",
    date: "November",
    image: "/images/Moments/Workshop.png",
    description: "Leading educational workshop",
  },
  {
    title: "Mentored Teams and conducted workshop on Polymarket Track (Claude Builder Hackathon) ",
    date: "November",
    image: "/images/Moments/mentorship.png",
    description: "Mentoring the next generation",
  },
]

export default function MovingMomentsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const n = moments.length

  const handleClick = (inc: number) => {
    setCurrentIndex((prev) => (prev + inc + n) % n)
  }

  const handleImageError = (title: string, src: string) => {
    console.log("[v0] Image failed to load:", { title, src })
  }

  const handleImageLoad = (title: string) => {
    console.log("[v0] Image loaded successfully:", title)
  }

  return (
    <section
      className="moments-section"
      style={
        {
          "--n": n,
          "--k": currentIndex,
        } as React.CSSProperties
      }
    >
      {moments.map((moment, i) => {
        const randomRotation = (i * 13 - 20) % 30

        return (
          <article
            key={i}
            className="moment-card"
            style={
              {
                "--i": i,
                "--a": `${randomRotation}deg`,
              } as React.CSSProperties
            }
          >
            <h2>{moment.title}</h2>
            <em>{moment.date}</em>
            <div className="stack">
              <div className="card">
                <Image
                  src={moment.image || "/placeholder.svg"}
                  alt={moment.description}
                  fill
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="image"
                  onError={() => handleImageError(moment.title, moment.image)}
                  onLoad={() => handleImageLoad(moment.title)}
                  unoptimized
                />
              </div>
            </div>
          </article>
        )
      })}

      <div className="nav-controls">
        <button data-inc="-1" onClick={() => handleClick(-1)} aria-label="previous">
          <span className="sr-only">Previous</span>
        </button>
        <button data-inc="1" onClick={() => handleClick(1)} aria-label="next">
          <span className="sr-only">Next</span>
        </button>
      </div>
    </section>
  )
}
