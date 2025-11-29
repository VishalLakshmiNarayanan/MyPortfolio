"use client"

import { type CSSProperties } from "react"
import { skillGroups } from "@/lib/content"
import "./skill-tree.css"

const categoryMeta: Record<string, { accent: string }> = {
  "Data Science & Machine Learning": { accent: "#c084fc" },
  "Data Analytics & Visualization": { accent: "#fcd34d" },
  "Data Engineering & Infrastructure": { accent: "#fb7185" },
  "Web Development": { accent: "#38bdf8" },
  "Development Tools & Automation": { accent: "#34d399" },
}

export default function SkillTree() {
  const categories = skillGroups

  return (
    <section className="skill-tree-container">
      {/* Header */}
      <div className="tree-header">
        <h2 className="tree-title">MY SKILLS</h2>
      </div>

      {/* Tree Structure */}
      <div className="tree-structure">
        {/* Main vertical line from header */}
        <div className="tree-trunk" />

        {/* Horizontal line connecting all branches */}
        <div className="tree-connector" />

        {/* Category Branches */}
        <div className="tree-branches">
          {categories.map((category) => {
            const meta = categoryMeta[category.category] ?? { accent: "#c084fc" }
            const branchStyle = {
              "--branch-color": meta.accent,
            } as CSSProperties

            return (
              <div key={category.category} className="branch" style={branchStyle}>
                {/* Vertical line down from connector */}
                <div className="branch-line" />

                {/* Category Label Box */}
                <div className="branch-label">
                  {category.category}
                </div>

                {/* Skills Container */}
                <div className="branch-skills">
                  {category.skills.map((skill) => (
                    <div key={skill} className="skill-badge">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
