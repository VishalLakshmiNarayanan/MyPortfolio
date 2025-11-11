"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { skillGroups } from "@/lib/content"

type CategoryKey = "dsml" | "de" | "viz" | "misc"

const categoryKeyMap: Record<string, CategoryKey> = {
  "Data Science & Machine Learning": "dsml",
  "Data Engineering & Infrastructure": "de",
  "Data Analytics & Visualization": "viz",
  "Additional Proficiencies": "misc",
}

const planetGradients: Record<CategoryKey, string> = {
  dsml: "bg-gradient-to-br from-purple-500 to-pink-500",
  de: "bg-gradient-to-br from-cyan-500 to-blue-500",
  viz: "bg-gradient-to-br from-amber-400 to-orange-500",
  misc: "bg-gradient-to-br from-indigo-500 to-fuchsia-500",
}

const planetLabels: Record<CategoryKey, string> = {
  dsml: "Data Science",
  de: "Data Engineering",
  viz: "Visualization",
  misc: "Proficiencies",
}

// Iconify IDs (user-provided mapping)
const iconifyIdMap: Record<string, string> = {
  Python: "logos:python",
  R: "logos:r-lang",
  "Scikit-learn": "simple-icons:scikitlearn",
  TensorFlow: "logos:tensorflow",
  PyTorch: "logos:pytorch-icon",
  NLP: "ph:brain-duotone",
  "Recommendation Systems": "ph:star-duotone",
  "LLM Integration": "lucide:brain-circuit",
  "Time Series Analysis": "mdi:chart-timeline-variant",
  "Causal Inference": "mdi:graph-outline",
  "A/B Testing": "mdi:flask-outline",
  SQL: "vscode-icons:file-type-sql",
  PySpark: "simple-icons:apachespark",
  Databricks: "simple-icons:databricks",
  "Apache Airflow": "simple-icons:apacheairflow",
  MLflow: "simple-icons:mlflow",
  Docker: "logos:docker-icon",
  "REST APIs": "tabler:api",
  MySQL: "logos:mysql-icon",
  PostgreSQL: "logos:postgresql",
  "SQL Server": "simple-icons:microsoftsqlserver",
  SQLite: "simple-icons:sqlite",
  Supabase: "simple-icons:supabase",
  Tableau: "simple-icons:tableau",
  "Power BI": "simple-icons:powerbi",
  Streamlit: "simple-icons:streamlit",
  Matplotlib: "simple-icons:matplotlib",
  Seaborn: "simple-icons:seaborn",
  Excel: "vscode-icons:file-type-excel",
  "Statistical Modeling": "mdi:chart-box-outline",
  "Linear Optimization (CPLEX)": "mdi:chart-line-variant",
  "D3.js": "simple-icons:d3dotjs",
  Git: "logos:git-icon",
  "API Integration": "tabler:api",
  "n8n Workflows": "simple-icons:n8n",
  Julia: "simple-icons:julia",
  "CI/CD pipelines": "simple-icons:githubactions",
}

// Devicon CSS class mapping as fallback for some skills
function getDeviconClass(name: string): string | null {
  const n = name.toLowerCase()
  const map: Array<[RegExp, string | null]> = [
    [/^python$/, "devicon-python-plain colored"],
    [/^r$/, "devicon-r-plain colored"],
    [/scikit|sklearn/, "devicon-scikitlearn-plain colored"],
    [/tensorflow/, "devicon-tensorflow-original colored"],
    [/pytorch|torch/, "devicon-pytorch-original colored"],
    [/^sql$/, null],
    [/spark|pyspark/, "devicon-apachespark-original colored"],
    [/airflow/, "devicon-apacheairflow-plain colored"],
    [/docker/, "devicon-docker-plain colored"],
    [/mysql/, "devicon-mysql-original colored"],
    [/postgres/, "devicon-postgresql-plain colored"],
    [/sql server|mssql|microsoft sql/, "devicon-microsoftsqlserver-plain colored"],
    [/sqlite/, "devicon-sqlite-plain colored"],
    [/supabase/, "devicon-supabase-plain colored"],
    [/mongodb/, "devicon-mongodb-plain colored"],
    [/tableau/, "devicon-tableau-plain colored"],
    [/power\s*bi/, "devicon-powerbi-plain colored"],
    [/streamlit/, "devicon-streamlit-plain colored"],
    [/d3\.js|d3js|d3/, "devicon-d3js-plain colored"],
    [/git/, "devicon-git-plain colored"],
    [/julia/, "devicon-julia-plain colored"],
    [/astro/, "devicon-astro-plain colored"],
    // Approximations
    [/matplotlib/, "devicon-anaconda-original colored"],
    [/seaborn/, "devicon-anaconda-original colored"],
    [/excel/, "devicon-microsoft-plain colored"],
    [/api integration|rest api|rest apis|rest\b/i, "devicon-postman-plain colored"],
    [/postman/, "devicon-postman-plain colored"],
    [/ci\/?cd|pipeline/, "devicon-githubactions-plain colored"],
    [/mlflow/, "devicon-python-plain colored"],
    [/databricks/, "devicon-apachespark-original colored"],
  ]
  for (const [re, cls] of map) {
    if (re.test(n)) return cls
  }
  return null
}

function resolveIcon(skill: string): { type: "iconify" | "devicon" | "text"; value: string } {
  const iconify = iconifyIdMap[skill]
  if (iconify) return { type: "iconify", value: iconify }
  const dev = getDeviconClass(skill)
  if (dev) return { type: "devicon", value: dev }
  return { type: "text", value: skill }
}

function Orbit({
  label,
  gradient,
  skills,
}: {
  label: string
  gradient: string
  skills: string[]
}) {
  const [hover, setHover] = useState(false)
  const satellites = useMemo(() => skills.map((s, i) => ({ s, i })), [skills])
  const duration = hover ? 28 : 18

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center"
    >
      {/* Central Planet */}
      <motion.div
        className={`w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-center font-semibold text-white ${gradient} shadow-lg border border-white/20`}
        animate={{ scale: hover ? 1.08 : 1, boxShadow: hover ? "0 0 30px rgba(255,255,255,0.6)" : "0 10px 25px rgba(0,0,0,0.15)" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <span className="px-3 text-sm leading-tight drop-shadow">{label}</span>
      </motion.div>

      {/* Orbit ring */}
      <div className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full border border-black/20" />

      {/* Orbiting satellites */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration }}
        className="absolute inset-0"
        style={{ transformOrigin: "50% 50%" }}
      >
        {satellites.map(({ s, i }) => {
          const angle = (i / satellites.length) * Math.PI * 2
          const radius = 110
          const x = Math.cos(angle) * radius
          const y = Math.sin(angle) * radius
          const icon = resolveIcon(s)
          return (
            <div key={s + i} className="absolute left-1/2 top-1/2" style={{ transform: `translate(${x}px, ${y}px)` }}>
              <motion.div
                className="flex flex-col items-center"
                animate={{ scale: hover ? 1.1 : 1, filter: hover ? "drop-shadow(0 0 10px rgba(0,0,0,0.25))" : "none" }}
                transition={{ duration: 0.3 }}
              >
                {icon.type === "iconify" ? (
                  <img
                    src={`https://api.iconify.design/${encodeURIComponent(icon.value)}.svg`}
                    alt={s}
                    className="w-7 h-7 md:w-8 md:h-8"
                  />
                ) : icon.type === "devicon" ? (
                  <i className={`${icon.value} text-[28px] leading-none`}></i>
                ) : (
                  <span className="text-[11px] md:text-xs font-semibold text-black bg-white/80 rounded px-1.5 py-0.5 border border-black/10">
                    {s}
                  </span>
                )}
                <span className="text-[10px] md:text-xs mt-1 opacity-70 text-black hidden md:block">{s}</span>
              </motion.div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default function SkillGalaxy() {
  const grouped = useMemo(() => {
    const out: Record<CategoryKey, string[]> = { dsml: [], de: [], viz: [], misc: [] }
    for (const g of skillGroups) {
      const key = categoryKeyMap[g.category]
      if (!key) continue
      out[key] = g.skills
    }
    return out
  }, [])

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center justify-items-center">
        <Orbit label={planetLabels.dsml} gradient={planetGradients.dsml} skills={grouped.dsml} />
        <Orbit label={planetLabels.de} gradient={planetGradients.de} skills={grouped.de} />
        <Orbit label={planetLabels.viz} gradient={planetGradients.viz} skills={grouped.viz} />
        <Orbit label={planetLabels.misc} gradient={planetGradients.misc} skills={grouped.misc} />
      </div>
    </section>
  )
}

