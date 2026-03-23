import React from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";

function formatMonthYear(dateString) {
  const [year, month, day = "1"] = dateString.split("-").map(Number);
  return format(new Date(year, month - 1, day), "MMM yyyy");
}

const experiences = [
  {
    title: "Project Manager",
    company: "The AI Society at ASU",
    location: "Tempe, AZ",
    startDate: "2026-01-01",
    current: true,
    achievements: [
      "Directing eight teams through a 12-week build cycle focused on computer vision, recommendation engines, and autonomous agent applications.",
      "Reviewing GitHub activity and Notion updates each week to keep engineering progress, documentation quality, and milestone delivery on track.",
      "Working with mentors and industry collaborators to keep project scope aligned with practical product expectations and technical feasibility.",
    ],
  },
  {
    title: "Data Science Project Contributor",
    company: "The Unit of Data Science & Analytics Lab ASU",
    location: "Tempe, AZ",
    startDate: "2026-01-01",
    endDate: "2026-03-01",
    current: false,
    achievements: [
      "Built a transcript ingestion workflow that pulled raw YouTube speech data into a cleaned dataset for immigration narrative analysis.",
      "Used LDA topic modeling to trace how themes in political messaging shifted across the speech corpus.",
      "Fine-tuned a DistilBERT-based sentiment pipeline to classify audience response patterns across multiple media contexts.",
      "Connected FRED economic indicators with sentiment outputs and surfaced a 143% rise in the Migration Fear Index versus its long-run baseline.",
    ],
  },
  {
    title: "Data Engineer",
    company: "Devlabs",
    location: "Tempe, AZ",
    startDate: "2025-10-01",
    endDate: "2026-02-01",
    current: false,
    achievements: [
      "Built a RAG ingestion pipeline that parsed 670+ resumes and converted unstructured candidate data into dense vector representations.",
      "Designed a MongoDB Atlas vector store to persist embedded profiles and support scalable retrieval.",
      "Implemented cosine similarity ranking to return the ten strongest candidate matches in under five seconds.",
      "Reduced embedding overhead by processing only newly added resumes, which cut repeated compute and API spend.",
      "Adjusted ranking behavior from founder feedback to make search results more relevant for recruiter decision-making.",
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
      "Replaced a manual monthly reporting workflow with Python automation, cutting turnaround time from five hours to roughly forty-five minutes.",
      "Mapped outlet performance with GeoPandas across 32 retail locations and highlighted seven regions that needed distribution attention.",
      "Tracked SKU movement trends to expose stock imbalances and support faster coordination with sales and operations teams.",
      "Presented regional performance patterns to sales leadership to guide territory-level distribution decisions.",
      "Cleaned and validated raw sales records so downstream reporting stayed consistent and reliable for management review.",
    ],
  },
  {
    title: "Research & Development Intern",
    company: "Vellore Institute of Technology",
    location: "Chennai, India",
    startDate: "2022-12-01",
    endDate: "2023-06-01",
    current: false,
    achievements: [
      "Partnered on a healthcare innovation initiative with Global Health Research and Innovations in Canada, exploring edge computing and AR/VR for equitable care delivery.",
      "Assessed whether bandwidth-intensive immersive systems could realistically operate within constrained medical environments.",
      "Contributed to a published paper in the Dovepress Journal of Multidisciplinary Healthcare on deployment strategies for edge-enabled medical platforms.",
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
                    {formatMonthYear(exp.startDate)}
                    {" to "}
                    {exp.current ? (
                      <span className="text-primary">Present</span>
                    ) : (
                      formatMonthYear(exp.endDate)
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
