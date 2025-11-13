"use client"

import { useMemo, useState, type CSSProperties } from "react"
import { skillGroups } from "@/lib/content"
import "./skill-tree.css"

type SkillIconData =
  | { kind: "image"; src: string }
  | { kind: "custom"; label: string; gradient: string }

const skillIconData: Record<string, SkillIconData> = {
  Python: { kind: "image", src: "https://skillicons.dev/icons?i=python" },
  R: { kind: "image", src: "https://skillicons.dev/icons?i=r" },
  TensorFlow: { kind: "image", src: "https://skillicons.dev/icons?i=tensorflow" },
  PyTorch: { kind: "image", src: "https://skillicons.dev/icons?i=pytorch" },
  "Scikit-learn": { kind: "image", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  "Hugging Face": { kind: "image", src: "https://cdn.worldvectorlogo.com/logos/huggingface-2.svg" },
  Julia: { kind: "image", src: "https://cdn.worldvectorlogo.com/logos/julia-1.svg" },
  "Natural Language Processing": { kind: "image", src: "https://cdn-icons-png.flaticon.com/512/3613/3613249.png" },
  "Recommendation Systems": { kind: "custom", label: "RS", gradient: "linear-gradient(135deg,#fb7185,#f97316)" },
  Tableau: { kind: "image", src: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg" },
  "Power BI": { kind: "image", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  Streamlit: { kind: "image", src: "https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-darktext.svg" },
  Matplotlib: { kind: "image", src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
  Seaborn: { kind: "image", src: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
  Excel: { kind: "image", src: "https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg" },
  "Linear Optimization (CPLEX)": { kind: "image", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  "D3.js": { kind: "image", src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/d3js/d3js-original.svg" },
  MySQL: { kind: "image", src: "https://skillicons.dev/icons?i=mysql" },
  SQLite: { kind: "image", src: "https://skillicons.dev/icons?i=sqlite" },
  Redis: { kind: "image", src: "https://skillicons.dev/icons?i=redis" },
  Docker: { kind: "image", src: "https://skillicons.dev/icons?i=docker" },
  "Apache Spark": { kind: "image", src: "https://cdn.worldvectorlogo.com/logos/apache-spark-5.svg" },
  Databricks: { kind: "image", src: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
  "Apache Airflow": { kind: "image", src: "https://upload.wikimedia.org/wikipedia/commons/d/de/AirflowLogo.png" },
  MLflow: { kind: "custom", label: "ML", gradient: "linear-gradient(135deg,#f97316,#ef4444)" },
  Supabase: { kind: "image", src: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
  "REST APIs": { kind: "image", src: "https://img.icons8.com/color/96/api.png" },
  HTML: { kind: "image", src: "https://skillicons.dev/icons?i=html" },
  CSS: { kind: "image", src: "https://skillicons.dev/icons?i=css" },
  JavaScript: { kind: "image", src: "https://skillicons.dev/icons?i=javascript" },
  TypeScript: { kind: "image", src: "https://skillicons.dev/icons?i=typescript" },
  React: { kind: "image", src: "https://skillicons.dev/icons?i=react" },
  "Next.js": { kind: "image", src: "https://skillicons.dev/icons?i=nextjs" },
  "Tailwind CSS": { kind: "image", src: "https://skillicons.dev/icons?i=tailwind" },
  "Node.js": { kind: "image", src: "https://skillicons.dev/icons?i=nodejs" },
  Express: { kind: "image", src: "https://skillicons.dev/icons?i=express" },
  MongoDB: { kind: "image", src: "https://skillicons.dev/icons?i=mongodb" },
  Firebase: { kind: "image", src: "https://skillicons.dev/icons?i=firebase" },
  Vercel: { kind: "image", src: "https://skillicons.dev/icons?i=vercel" },
  "Google Cloud Platform": { kind: "image", src: "https://skillicons.dev/icons?i=gcp" },
  Git: { kind: "image", src: "https://skillicons.dev/icons?i=git" },
  GitHub: { kind: "image", src: "https://skillicons.dev/icons?i=github" },
  Linux: { kind: "image", src: "https://skillicons.dev/icons?i=linux" },
  "n8n Workflows": { kind: "custom", label: "n8n", gradient: "linear-gradient(135deg,#10b981,#14b8a6)" },
  "CI/CD pipelines": { kind: "custom", label: "CI", gradient: "linear-gradient(135deg,#6366f1,#8b5cf6)" },
}

const categoryMeta: Record<string, { accent: string; description: string }> = {
  "Data Science & Machine Learning": {
    accent: "#c084fc",
    description: "From modeling to explainability, I build ML flows that stay grounded in business impact.",
  },
  "Data Analytics & Visualization": {
    accent: "#fcd34d",
    description: "Dashboards, stories, and lightweight interfaces that translate numbers into narratives.",
  },
  "Data Engineering & Infrastructure": {
    accent: "#fb7185",
    description: "Reliable pipelines, orchestration, and observability for production-grade data systems.",
  },
  "Web Development": {
    accent: "#38bdf8",
    description: "Modern, accessible front ends powered by React, Next.js, and expressive CSS.",
  },
  "Development Tools & Automation": {
    accent: "#34d399",
    description: "Tooling, CI/CD, and automation workflows that keep iterating fast.",
  },
}

export default function SkillTree() {
  const [activeIndex, setActiveIndex] = useState(0)
  const categories = skillGroups
  const activeCategory = categories[activeIndex]
  const meta = categoryMeta[activeCategory.category] ?? {
    accent: "#c084fc",
    description: "A rotating view of my skill universe.",
  }

  const nextIndex = (activeIndex + 1) % categories.length
  const prevIndex = (activeIndex - 1 + categories.length) % categories.length

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + categories.length) % categories.length)
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % categories.length)

  const cardStyle = {
    "--accent-color": meta.accent,
  } as CSSProperties

  const renderIcon = (icon: SkillIconData, className?: string, alt?: string) => {
    if (icon.kind === "image") {
      return <img src={icon.src} alt={alt ?? ""} loading="lazy" className={className} />
    }
    return (
      <span className={className} style={{ backgroundImage: icon.gradient }}>
        {icon.label}
      </span>
    )
  }

  return (
    <section className="skill-layer">
      <div className="skill-card" style={cardStyle}>
        <div className="card-crest">
          <span className="crest-ring" />
          <span className="crest-core" />
        </div>
        <div className="card-content">
          <p className="skill-label">Skills</p>
          <h2>{activeCategory.category}</h2>
          <p className="card-description">{meta.description}</p>
          <ul className="skill-grid">
            {activeCategory.skills.map((skill) => (
              <li key={skill} className="skill-row">
                <span className="skill-row-icon">
                  {renderIcon(
                    skillIconData[skill] ?? {
                      kind: "custom",
                      label: skill.slice(0, 2).toUpperCase(),
                      gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
                    },
                    "skill-row-icon-img",
                    skill,
                  )}
                </span>
                <span className="skill-row-label">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card-footer">
          <button type="button" className="footer-btn" onClick={handlePrev} aria-label={`Previous category: ${categories[prevIndex].category}`}>
            &#x2039;
          </button>
          <div className="footer-meta">
            <strong>{activeCategory.skills.length} items</strong>
          </div>
          <button type="button" className="footer-btn" onClick={handleNext} aria-label={`Next category: ${categories[nextIndex].category}`}>
            &#x203a;
          </button>
        </div>
      </div>
    </section>
  )
}
