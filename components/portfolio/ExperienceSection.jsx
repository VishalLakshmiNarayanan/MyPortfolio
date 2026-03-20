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
      "Leading 12 student project teams, coordinating scope definition, milestone tracking, and technical reviews.",
      "Serving as the primary liaison between students and mentors to ensure resource support.",
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
      "Analyzed SKU-level sales and inventory data across 32 retail outlets to identify 7 key underperforming regions.",
      "Collaborated with sales and operations teams to track SKU-level movement and build a system for flagging stock imbalances.",
      "Presented regional performance insights to sales managers to facilitate data-driven distribution planning.",
      "Implemented data cleaning and validation protocols to improve reporting accuracy and cross-team consistency.",

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
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
            Where I've worked<span className="text-primary">.</span>
          </h2>

        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-stretch mt-8 md:mt-16">

          {/* Left side Image - Sticky on Desktop */}
          <div className="w-full md:w-2/5 flex justify-center md:justify-center items-start relative z-10 mb-12 md:mb-0">
            <div className="sticky top-24 md:top-36 md:pb-24 pt-4 w-full flex justify-center">
              <motion.img
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                src="/images/hero/hero_exp.png"
                alt="Vishal Experience Illustration"
                className="w-[280px] sm:w-[340px] md:w-[full] max-w-[450px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] pointer-events-none"
              />
            </div>
          </div>

          {/* Right side Timeline */}
          <div className="w-full md:w-3/5 relative pb-12">
            {/* Timeline line */}
            <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-14 md:space-y-20">
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
      </div>
    </section>
  );
}