"use client"

import { useMemo, useState } from "react"
import { skillGroups } from "@/lib/content"
import "./skill-loop.css"

type Cat = "dsml" | "analytics" | "dei" | "web" | "tools"

const catKey: Record<string, Cat> = {
  "Data Science & Machine Learning": "dsml",
  "Data Analytics & Visualization": "analytics",
  "Data Engineering & Infrastructure": "dei",
  "Web Development": "web",
  "Development Tools & Automation": "tools",
}

const categoryMeta: Record<Cat, { label: string; accent: string; theme: string; border: string }> = {
  dsml: { label: "Data Science & ML", accent: "#0ea5e9", theme: "rgba(14, 165, 233, 0.2)", border: "rgba(14, 165, 233, 0.6)" },
  analytics: { label: "Analytics & Viz", accent: "#22c55e", theme: "rgba(34, 197, 94, 0.2)", border: "rgba(34, 197, 94, 0.65)" },
  dei: { label: "Data Engineering", accent: "#fb7185", theme: "rgba(251, 113, 133, 0.15)", border: "rgba(251, 113, 133, 0.65)" },
  web: { label: "Web Development", accent: "#c084fc", theme: "rgba(192, 132, 252, 0.15)", border: "rgba(192, 132, 252, 0.65)" },
  tools: { label: "Tools & Automation", accent: "#fbbf24", theme: "rgba(251, 191, 36, 0.2)", border: "rgba(251, 191, 36, 0.65)" },
}

const skillDescriptions: Record<string, string> = {
  Python: "Automation, alerting, and multi-agent experimentation.",
  R: "Statistical modeling, attribution, and academic research builds.",
  TensorFlow: "Neural network prototyping with visual explainability.",
  PyTorch: "Vision + LLM mashups and research-ready tooling.",
  "Scikit-learn": "Reliable classical modeling pipelines for quick iterations.",
  "Hugging Face": "Model zoo, datasets, inference, and enterprise APIs.",
  Julia: "High-performance numeric computing and experimentation.",
  "Natural Language Processing": "Dialogue, text understanding, and prompt flows.",
  "Recommendation Systems": "Personalized ranking logic that drives engagement.",
  "Statistical Modeling": "Confidence intervals, shrinkage, and significance.",
  "Time Series Analysis": "Forecasting, anomaly detection, and instrumentation.",
  "Causal Inference": "Treatment experiments and actionable insights.",
  "A/B Testing": "Hypotheses, rollout control, and KPI validation.",
  Tableau: "Executive dashboards, storytelling, and insight delivery.",
  "Power BI": "Accessible analytics refreshes and alert automation.",
  Streamlit: "Internal data apps for rapid experimentation and prototypes.",
  Matplotlib: "Plot customization, animation, and publication-ready figures.",
  Seaborn: "Statistically-backed visualizations with aesthetic defaults.",
  Excel: "Business modeling, financial pivots, and instrumentation.",
  "Linear Optimization (CPLEX)": "Integer programming for scheduling & planning.",
  "D3.js": "Interactive, branded visual prototypes for data stories.",
  MySQL: "Transactional persistence and performant joins.",
  SQLite: "Local tooling, instrumentation, and prototypes.",
  Redis: "Fast, in-memory stores for caching and queues.",
  Docker: "Reproducible environments across experiments and prod.",
  "Apache Spark": "Distributed compute for ETL, modeling, and streaming.",
  Databricks: "Managed clusters, experiments, and governance hooks.",
  "Apache Airflow": "DAG orchestration, retries, and observability.",
  MLflow: "Experiment tracking, packaging, and registry automations.",
  Supabase: "Realtime data APIs with auth and edge functions.",
  "REST APIs": "Service wiring, schema contracts, and automation.",
  HTML: "Semantic markup and accessible structures.",
  CSS: "Design systems, layout choreography, and responsive theming.",
  JavaScript: "Client-side logic, events, and progressive enhancement.",
  "TypeScript": "Typed JavaScript that scales across teams.",
  React: "Component-driven interfaces with hooks and suspense.",
  "Next.js": "Full-stack React with routing, middleware, and ISR.",
  "Tailwind CSS": "Utility-first styles that stay composable.",
  "Node.js": "Event-driven backends, API responses, and tooling.",
  Express: "Minimal server scaffolding for REST and GraphQL.",
  MongoDB: "Document storage with rich querying and aggregation.",
  Firebase: "Realtime apps, hosting, and auth integrations.",
  Vercel: "Instant deployments with edge functions.",
  "Google Cloud Platform": "Scalable compute, storage, and data services.",
  Git: "Repo hygiene, branch guardrails, and CI triggers.",
  GitHub: "Release automation, workflows, and code reviews.",
  Linux: "Command-line fluency, tooling, and service ops.",
  "n8n Workflows": "Low-code event-driven automations.",
  "CI/CD pipelines": "Linting, tests, and rollout automation.",
}

const iconifyIdMap: Record<string, string> = {
  Python: "logos:python",
  R: "logos:r-lang",
  TensorFlow: "logos:tensorflow",
  PyTorch: "logos:pytorch-icon",
  "Scikit-learn": "simple-icons:scikitlearn",
  "Hugging Face": "simple-icons:huggingface",
  Julia: "simple-icons:julia",
  "Natural Language Processing": "mdi:brain",
  "Recommendation Systems": "ph:star-duotone",
  "Statistical Modeling": "mdi:chart-box-outline",
  "Time Series Analysis": "mdi:chart-timeline-variant",
  "Causal Inference": "mdi:graph-outline",
  "A/B Testing": "mdi:flask-outline",
  Tableau: "simple-icons:tableau",
  "Power BI": "simple-icons:powerbi",
  Streamlit: "simple-icons:streamlit",
  Matplotlib: "simple-icons:matplotlib",
  Seaborn: "simple-icons:seaborn",
  Excel: "vscode-icons:file-type-excel",
  "Linear Optimization (CPLEX)": "mdi:chart-line-variant",
  "D3.js": "simple-icons:d3dotjs",
  MySQL: "logos:mysql-icon",
  SQLite: "simple-icons:sqlite",
  Redis: "logos:redis",
  Docker: "logos:docker-icon",
  "Apache Spark": "simple-icons:apachespark",
  Databricks: "simple-icons:databricks",
  "Apache Airflow": "simple-icons:apacheairflow",
  MLflow: "simple-icons:mlflow",
  Supabase: "simple-icons:supabase",
  "REST APIs": "tabler:api",
  HTML: "vscode-icons:file-type-html",
  CSS: "vscode-icons:file-type-css",
  JavaScript: "logos:javascript",
  "TypeScript": "logos:typescript-icon",
  React: "logos:react",
  "Next.js": "logos:nextjs",
  "Tailwind CSS": "logos:tailwindcss-icon",
  "Node.js": "logos:nodejs-icon",
  Express: "simple-icons:express",
  MongoDB: "logos:mongodb-icon",
  Firebase: "simple-icons:firebase",
  Vercel: "simple-icons:vercel",
  "Google Cloud Platform": "logos:google-cloud",
  Git: "logos:git-icon",
  GitHub: "logos:github",
  Linux: "logos:linux-tux",
  "n8n Workflows": "simple-icons:n8n",
  "CI/CD pipelines": "simple-icons:githubactions",
}

const customLogoMap: Record<string, string> = {
  "REST APIs": "/images/logos/rest-apis.svg",
  Matplotlib: "/images/logos/matplotlib.svg",
  Seaborn: "/images/logos/seaborn.svg",
}

function resolveIcon(skill: string): { type: "iconify" | "custom" | "text"; value: string } {
  const custom = customLogoMap[skill]
  if (custom) return { type: "custom", value: custom }
  const id = iconifyIdMap[skill]
  if (id) return { type: "iconify", value: id }
  return { type: "text", value: skill }
}

interface TileData {
  name: string
  cat: Cat
  category: string
  icon: ReturnType<typeof resolveIcon>
  shortDescription: string
}

export default function SkillLoop() {
  const tiles = useMemo(() => {
    const all: TileData[] = []
    for (const group of skillGroups) {
      const cat = catKey[group.category]
      if (!cat) continue
      const description =
        group.skills.length > 1 ? group.skills.slice(0, 2).join(" • ") : group.skills[0]
      group.skills.forEach((skill) => {
        all.push({
          name: skill,
          cat,
          category: group.category,
          icon: resolveIcon(skill),
          shortDescription: skillDescriptions[skill] ?? description,
        })
      })
    }
    return all
  }, [])

  const defaultCategory = tiles[0]?.category ?? ""
  const defaultSkill = tiles[0] ?? null
  const [activeCategory, setActiveCategory] = useState(defaultCategory)
  const [activeSkill, setActiveSkill] = useState<TileData | null>(defaultSkill)
  const activeTiles = tiles.filter((tile) => tile.category === activeCategory)

  const updateActiveSkill = (tile: TileData) => {
    setActiveSkill(tile)
  }

  const handleCategorySelect = (category: string) => {
    setActiveCategory(category)
    const firstTile = tiles.find((tile) => tile.category === category)
    if (firstTile) {
      setActiveSkill(firstTile)
    }
  }

  return (
    <section className="skill-gallery">
      <div className="skill-gallery__intro">
        <p className="skill-gallery__intro-label">SKILLS</p>
        <h3 className="skill-gallery__intro-title">Core Expertise</h3>
      </div>

      <div className="skill-gallery__content">
        <article className="skill-gallery__card skill-gallery__card--categories">
          <div className="skill-gallery__card-heading">
            <p className="skill-gallery__card-title">Explore categories</p>
          </div>
          <div className="skill-gallery__category-buttons">
            {skillGroups.map((group) => (
              <button
                key={group.category}
                type="button"
                className={`category-button${activeCategory === group.category ? " is-active" : ""}`}
                onClick={() => handleCategorySelect(group.category)}
              >
                {group.category}
              </button>
            ))}
          </div>
          <div className="skill-gallery__tiles">
            {activeTiles.length === 0 && <p className="skill-gallery__empty">No skills available yet.</p>}
            {activeTiles.map((tile) => {
              const theme = categoryMeta[tile.cat]
              const iconHref =
                tile.icon.type === "iconify"
                  ? `https://api.iconify.design/${encodeURIComponent(tile.icon.value)}.svg`
                  : tile.icon.type === "custom"
                  ? tile.icon.value
                  : null
              const isActiveTile = activeSkill?.name === tile.name
              return (
                <button
                  key={tile.name}
                  type="button"
                  className="skill-tile"
                  style={{
                    background: isActiveTile ? theme.theme : "rgba(255,255,255,0.18)",
                    borderColor: theme.border,
                    boxShadow: isActiveTile ? `0 15px 30px ${theme.border}` : "none",
                  }}
                  onMouseEnter={() => updateActiveSkill(tile)}
                  onFocus={() => updateActiveSkill(tile)}
                >
                  <div className="skill-tile__icon" style={{ borderColor: theme.accent }}>
                    {iconHref ? (
                      <img src={iconHref} alt="" aria-hidden="true" />
                    ) : (
                      <span>{tile.name.slice(0, 2).toUpperCase()}</span>
                    )}
                  </div>
                  <span className="skill-tile__label">{tile.name}</span>
                </button>
              )
            })}
          </div>
        </article>

        <article className="skill-gallery__card skill-gallery__card--detail">
          <p className="skill-gallery__card-title">Detailed preview</p>
          {activeSkill ? (
            <>
              <div className="skill-detail__header">
                <div
                  className="skill-detail__icon"
                  style={{ background: categoryMeta[activeSkill.cat].theme, borderColor: categoryMeta[activeSkill.cat].border }}
                >
                  {(() => {
                    const iconHref =
                      activeSkill.icon.type === "iconify"
                        ? `https://api.iconify.design/${encodeURIComponent(activeSkill.icon.value)}.svg`
                        : activeSkill.icon.type === "custom"
                        ? activeSkill.icon.value
                        : null
                    if (iconHref) {
                      return <img src={iconHref} alt="" aria-hidden="true" />
                    }
                    return <span>{activeSkill.icon.value.slice(0, 2).toUpperCase()}</span>
                  })()}
                </div>
                <div>
                  <p className="skill-detail__title">{activeSkill.name}</p>
                  <p className="skill-detail__category">{categoryMeta[activeSkill.cat].label}</p>
                </div>
              </div>
              <p className="skill-detail__description">{activeSkill.shortDescription}</p>
            </>
          ) : (
            <p className="skill-detail__description">Select a skill to review its role.</p>
          )}
        </article>
      </div>
    </section>
  )
}
