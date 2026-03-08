import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Project Manager",
    company: "The AI Society at ASU",
    location: "Arizona, United States",
    startDate: "2026-02-01",
    current: true,
    achievements: [
      "Led 12 student project teams, coordinating scope definition, milestone tracking, and technical reviews.",
      "Served as the primary liaison between students and mentors to ensure resource support.",
    ],
  },
  {
    title: "Data Engineer & Lead Technical Officer",
    company: "Devlabs",
    location: "Arizona, United States",
    startDate: "2025-11-01",
    endDate: "2026-02-01",
    current: false,
    achievements: [
      "Built a resume-matching system using vector embeddings to improve skill-based search across 670+ candidate profiles.",
      "Implemented cosine similarity retrieval to return top 10 matches within 5-10 seconds.",
      "Developed an incremental update process to embed only new profiles, reducing unnecessary recomputation.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "Amrutanjan HealthCare Ltd.",
    location: "Chennai, India",
    startDate: "2023-05-01",
    endDate: "2023-07-31",
    current: false,
    achievements: [
      "Automated monthly sales reporting, reducing processing time from 5 hours to 45 minutes.",
      "Identified 7 underperforming regions across 32 retail outlets by analyzing SKU-level performance.",
      "Partnered with sales teams to track inventory movement and flag stock imbalances.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Where I've worked</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-3.5 top-1 w-3 h-3 rounded-full border-2 border-primary bg-background" />

                {/* Date */}
                <p className="text-xs text-muted-foreground mb-1">
                  {format(new Date(exp.startDate), "MMM yyyy")}
                  {" to "}
                  {exp.current ? (
                    <span className="text-primary">Present</span>
                  ) : (
                    format(new Date(exp.endDate), "MMM yyyy")
                  )}
                </p>

                {/* Role & Company */}
                <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                <p className="text-sm text-primary/80 mb-1">{exp.company}</p>
                <p className="text-xs text-muted-foreground mb-4">{exp.location}</p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}