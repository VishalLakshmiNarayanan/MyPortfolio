"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion } from "framer-motion"
import { skillGroups, allProjects } from "@/lib/content"

type CategoryKey = "dsml" | "de" | "viz" | "misc"

const categoryKeyMap: Record<string, CategoryKey> = {
  "Data Science & Machine Learning": "dsml",
  "Data Engineering & Infrastructure": "de",
  "Data Analytics & Visualization": "viz",
  "Additional Proficiencies": "misc",
}

const categoryColors: Record<CategoryKey, string> = {
  dsml: "#af6dff",
  de: "#ff64b4",
  viz: "#ffebaa",
  misc: "#78beff",
}

// Iconify IDs provided by user mapping
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

interface Node {
  id: string
  skill: string
  category: CategoryKey
  x: number
  y: number
  r: number
  icon?: string
}

interface Edge { from: string; to: string; category: CategoryKey }

export function FloatingSkillsBubble() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [hovered, setHovered] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    const onResize = () => {
      const el = containerRef.current
      if (!el) return
      setSize({ w: el.clientWidth, h: el.clientHeight })
    }
    onResize()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const { nodes, edges } = useMemo(() => {
    const w = Math.max(size.w || 900, 900)
    const h = Math.max(size.h || 500, 500)
    const centers: Record<CategoryKey, { x: number; y: number }> = {
      dsml: { x: w * 0.25, y: h * 0.35 },
      de: { x: w * 0.75, y: h * 0.35 },
      viz: { x: w * 0.25, y: h * 0.75 },
      misc: { x: w * 0.75, y: h * 0.75 },
    }

    const nodes: Node[] = []
    const edges: Edge[] = []

    for (const group of skillGroups) {
      const key = categoryKeyMap[group.category]
      if (!key) continue
      const cx = centers[key].x
      const cy = centers[key].y
      const n = group.skills.length
      const baseR = 90
      group.skills.forEach((skill, i) => {
        const angle = (i / n) * Math.PI * 2
        const radius = baseR + 40 * Math.sin(i)
        const x = cx + Math.cos(angle) * radius
        const y = cy + Math.sin(angle) * radius
        const id = `${key}-${i}-${skill}`
        nodes.push({ id, skill, category: key, x, y, r: 24, icon: iconifyIdMap[skill] })
      })
    }

    // Intra-category ring connections
    const byCat: Record<CategoryKey, Node[]> = { dsml: [], de: [], viz: [], misc: [] }
    nodes.forEach((n) => byCat[n.category].push(n))
    (Object.keys(byCat) as CategoryKey[]).forEach((k) => {
      const arr = byCat[k]
      arr.forEach((n, i) => {
        const to = arr[(i + 1) % arr.length]
        edges.push({ from: n.id, to: to.id, category: k })
      })
    })

    // Light cross-category bridges
    const minLen = Math.min(byCat.dsml.length, byCat.de.length, byCat.viz.length, byCat.misc.length)
    for (let i = 0; i < Math.min(minLen, 6); i++) {
      edges.push({ from: byCat.dsml[i].id, to: byCat.de[i].id, category: "dsml" })
      edges.push({ from: byCat.viz[i].id, to: byCat.misc[i].id, category: "viz" })
    }

    return { nodes, edges }
  }, [size])

  const findProject = (skill: string) => {
    const s = skill.toLowerCase()
    return (
      allProjects.find((p) => p.tech.some((t) => t.toLowerCase().includes(s))) ||
      allProjects.find((p) => p.description.toLowerCase().includes(s)) ||
      allProjects.find((p) => p.tags.some((t) => t.toLowerCase().includes(s))) ||
      null
    )
  }

  const selectedProject = selected ? findProject(selected) : null

  return (
    <div
      ref={containerRef}
      className="w-full h-[520px] rounded-lg bg-gradient-to-br from-background to-muted/30 border border-black overflow-hidden relative"
    >
      <svg width="100%" height="100%" viewBox={`0 0 ${Math.max(size.w, 900)} ${Math.max(size.h, 500)}`}>
        {/* Edges */}
        {edges.map((e, idx) => {
          const a = nodes.find((n) => n.id === e.from)!
          const b = nodes.find((n) => n.id === e.to)!
          const active = hovered && (hovered === a.id || hovered === b.id)
          return (
            <motion.line
              key={idx}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={categoryColors[e.category] + (active ? "" : "55")}
              strokeWidth={active ? 3 : 1.5}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.01 }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((n, idx) => {
          const highlight = hovered === n.id
          const iconHref = n.icon ? `https://api.iconify.design/${encodeURIComponent(n.icon)}.svg` : null
          return (
            <g
              key={n.id}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setSelected(n.skill)}
              style={{ cursor: "pointer" }}
            >
              <motion.circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill="#ffffff"
                stroke={categoryColors[n.category]}
                strokeWidth={highlight ? 4 : 2}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.01 }}
              />
              {iconHref ? (
                <image
                  href={iconHref}
                  x={n.x - 16}
                  y={n.y - 16}
                  width={32}
                  height={32}
                  preserveAspectRatio="xMidYMid meet"
                />
              ) : (
                <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="10" fill="#111" fontWeight={600}>
                  {n.skill}
                </text>
              )}
              <title>{n.skill}</title>
            </g>
          )
        })}
      </svg>

      {/* Details panel */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: selected ? 1 : 0, y: selected ? 0 : 10 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute bottom-3 left-3 right-3"
      >
        {selected && (
          <div className="pointer-events-auto mx-auto max-w-3xl rounded-xl border bg-white/90 backdrop-blur p-4 shadow-lg">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-black/70">Skill</p>
                <h4 className="text-lg font-semibold text-black">{selected}</h4>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-xs px-2 py-1 rounded border border-black/20 hover:bg-black hover:text-white"
              >
                Close
              </button>
            </div>
            {selectedProject ? (
              <div className="mt-3">
                <p className="text-xs text-black/60 mb-1">Related project</p>
                <div className="rounded-lg border p-3 bg-white">
                  <div className="flex items-center justify-between">
                    <h5 className="font-semibold text-black">{selectedProject.title}</h5>
                    {selectedProject.image ? (
                      <img src={selectedProject.image} alt="project" className="w-16 h-10 object-cover rounded" />
                    ) : null}
                  </div>
                  <p className="text-sm text-black/80 mt-1 line-clamp-3">{selectedProject.description}</p>
                </div>
              </div>
            ) : (
              <p className="mt-3 text-sm text-black/70">No direct match found. Explore featured projects above.</p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  )
}

