import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Tools",
    skills: [
      "Python",
      "SQL",
      "JavaScript",
      "TypeScript",
      "Git",
      "GitHub",
      "Jupyter",
      "Excel",
      "Postman",
      "REST APIs",
    ],
  },
  {
    title: "AI & ML",
    skills: [
      "Machine Learning",
      "Predictive Modeling",
      "Feature Engineering",
      "Model Evaluation",
      "XGBoost",
      "scikit-learn",
      "Embeddings",
      "Vector Search Concepts",
      "LLM Prompt Engineering",
      "RAG Concepts",
      "LLM Evaluation",
      "AI Agents",
    ],
  },
  {
    title: "Frameworks",
    skills: [
      "Pandas",
      "NumPy",
      "Streamlit",
      "Next.js",
      "React",
      "Framer Motion",
      "LangChain",
      "GeoPandas",
      "Plotly",
      "Tableau",
      "Power BI",
      "React Three Fiber",
    ],
  },
  {
    title: "Data",
    skills: [
      "BigQuery",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Supabase",
      "Data Modeling",
      "ETL Pipelines",
      "Data Warehousing",
      "Dashboarding",
      "KPI Design",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "Google Cloud Platform",
      "Vercel",
      "Docker",
      "GitHub Actions",
      "CI/CD Concepts",
      "Environment Management",
      "API Integration",
      "OAuth",
      "n8n",
      "Workflow Automation",
    ],
  },
  {
    title: "Analytics & Decisioning",
    skills: [
      "Exploratory Data Analysis",
      "Funnel Analysis",
      "A/B Testing",
      "Hypothesis Testing",
      "Risk Analysis",
      "Forecasting Concepts",
      "Business Intelligence",
      "Stakeholder Communication",
      "Experiment Design",
      "Insight Storytelling",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-24 mt-8"
        >
          <div className="flex-1 w-full text-center md:text-left z-20">
            <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-3 font-bold">
              Skills
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              Data, AI, and Product Engineering<span className="text-primary">.</span>
            </h2>
            
          </div>

          <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0 mt-12 md:mt-0 z-10">
            <motion.img
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/images/hero/hero_skills.png"
              alt="Vishal Skills Illustration"
              className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] pointer-events-none"
            />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="p-6 rounded-[2rem] border-none bg-card shadow-[inset_2px_2px_8px_rgba(255,255,255,0.1),_inset_-3px_-3px_10px_rgba(0,0,0,0.5),_6px_10px_20px_rgba(0,0,0,0.4)]"
            >
              <h3 className="text-sm font-semibold text-foreground mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-4 py-2 rounded-full border-none bg-card shadow-[inset_1px_1px_4px_rgba(255,255,255,0.1),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_4px_4px_10px_rgba(0,0,0,0.3)] text-muted-foreground hover:text-primary hover:shadow-[inset_1px_1px_6px_rgba(255,255,255,0.2),_inset_-2px_-2px_6px_rgba(0,0,0,0.5),_2px_2px_6px_rgba(0,0,0,0.4)] hover:brightness-110 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
