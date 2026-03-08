import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages & Tools",
    skills: ["Python", "SQL", "Google BigQuery", "Tableau", "Power BI", "Excel", "Git"],
  },
  {
    title: "Analytics & ML",
    skills: [
      "Data Modeling",
      "A/B Testing",
      "Hypothesis Testing",
      "Regression",
      "Causal Inference",
      "Machine Learning",
      "XGBoost",
      "scikit-learn",
    ],
  },
  {
    title: "Data Engineering",
    skills: ["GCP", "BigQuery", "Pandas", "NumPy", "ETL Pipelines", "Vector Embeddings"],
  },
  {
    title: "Professional",
    skills: [
      "Project Tracking",
      "Stakeholder Communication",
      "Requirements Clarification",
      "Technical Presentations",
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
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical toolkit</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-card/30"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
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