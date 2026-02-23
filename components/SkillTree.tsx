"use client"

import { skillGroups } from "@/lib/content"
import "./skill-tree.css"

const categoryMeta: Record<string, { accent: string; dotColor: string; tint: string }> = {
  "AI & Machine Learning": { accent: "#7c3aed", dotColor: "rgba(175, 109, 255, 0.5)", tint: "rgba(175, 109, 255, 0.35)" },
  "Data Engineering & MLOps": { accent: "#f97316", dotColor: "rgba(255, 100, 180, 0.5)", tint: "rgba(255, 100, 180, 0.35)" },
  "Analytics & BI": { accent: "#0ea5e9", dotColor: "rgba(255, 235, 170, 0.5)", tint: "rgba(255, 235, 170, 0.5)" },
  "Frontend & Product": { accent: "#22c55e", dotColor: "rgba(120, 190, 255, 0.5)", tint: "rgba(120, 190, 255, 0.35)" },
  "Backend & Cloud": { accent: "#10b981", dotColor: "rgba(175, 109, 255, 0.5)", tint: "rgba(175, 109, 255, 0.35)" },
  "Automation & Dev Tools": { accent: "#6366f1", dotColor: "rgba(255, 100, 180, 0.5)", tint: "rgba(255, 100, 180, 0.35)" },
}

export default function SkillTree() {
  return (
    <section className="skill-grid-shell">
      <div className="skill-grid">
        {skillGroups.map((group) => {
          const meta = categoryMeta[group.category] ?? {
            accent: "#0f172a",
            dotColor: "rgba(15, 23, 42, 0.3)",
            tint: "rgba(15, 23, 42, 0.15)",
          }
          return (
            <article
              key={group.category}
              className="skill-card"
              style={{ "--_dot-color": meta.dotColor } as React.CSSProperties}
            >
              <header
                className="skill-card__header"
                style={{ backgroundColor: meta.tint }}
              >
                <h3 className="skill-card__title" style={{ color: meta.accent }}>
                  {group.category}
                </h3>
              </header>
              <div className="skill-chip-grid">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
