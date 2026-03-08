import React from "react";
import { motion } from "framer-motion";
import { FlaskConical } from "lucide-react";

const research = [
  {
    title: "NLP Research Contributor",
    lab: "Unit of Data Science & Analytics Lab, ASU",
    period: "Jan 2026",
    current: true,
    points: [
      "Analyzing thematic and sentiment shifts in U.S. Immigration narratives during the State of the Union speech using NLP.",
      "Applying LDA for topic modeling and BERT-based models for sentiment analysis to examine changes in public opinion.",
    ],
  },
  {
    title: "Research & Development Intern",
    lab: "Remote",
    period: "Dec 2022 to Jun 2023",
    current: false,
    points: [
      "Co-authored a peer-reviewed publication on edge-based healthcare systems to evaluate feasibility in low-resource settings.",
    ],
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Research</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Academic contributions</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {research.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2 md:left-3 top-1 w-3.5 h-3.5 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                  <FlaskConical size={7} className="text-primary" />
                </div>

                <p className="text-xs text-muted-foreground mb-1">
                  {r.period}
                  {r.current && <span className="ml-2 text-primary">· Present</span>}
                </p>
                <h3 className="text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="text-sm text-primary/80 mb-4">{r.lab}</p>

                <ul className="space-y-2">
                  {r.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                      {p}
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