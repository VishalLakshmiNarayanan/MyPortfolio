"use client"

import { skillGroups } from "@/lib/content"
import "./skill-reference.css"

export default function SkillReference() {
  return (
    <div className="skill-reference-container">
      <div className="skill-reference-grid">
        {skillGroups.map((group, index) => (
          <div key={group.category} className="skill-category-card">
            <div className="category-header">
              <h3 className="category-title">{group.category}</h3>
            </div>
            <div className="skills-list">
              {group.skills.map((skill) => (
                <div key={skill} className="skill-item-ref">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
