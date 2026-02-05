"use client"

import { skillGroups } from "@/lib/content"
import "./skill-tree.css"

const categoryMeta: Record<string, { accent: string; tint: string }> = {
  "AI & Machine Learning": { accent: "#7c3aed", tint: "rgba(124, 58, 237, 0.08)" },
  "Data Engineering & MLOps": { accent: "#f97316", tint: "rgba(249, 115, 22, 0.08)" },
  "Analytics & BI": { accent: "#0ea5e9", tint: "rgba(14, 165, 233, 0.08)" },
  "Frontend & Product": { accent: "#22c55e", tint: "rgba(34, 197, 94, 0.08)" },
  "Backend & Cloud": { accent: "#10b981", tint: "rgba(16, 185, 129, 0.08)" },
  "Automation & Dev Tools": { accent: "#6366f1", tint: "rgba(99, 102, 241, 0.08)" },
}

export default function SkillTree() {
  return (
    <section className="skill-grid-shell">
      <div className="skill-grid">
        {skillGroups.map((group) => {
          const meta = categoryMeta[group.category] ?? { accent: "#0f172a", tint: "rgba(15, 23, 42, 0.05)" }
          return (
            <article key={group.category} className="skill-card" style={{ borderColor: meta.tint }}>
              <header className="skill-card__header" style={{ background: meta.tint }}>
                <span className="skill-card__pill" style={{ color: meta.accent, background: meta.tint }}>
                  {group.skills.length} skills
                </span>
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
