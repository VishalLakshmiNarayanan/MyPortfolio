import React from "react";
import { motion } from "framer-motion";

const focusCards = [
  {
    title: "Data Science Thinking",
    desc: "I work from problem framing to model evaluation, using statistics, ML, and experimentation to answer questions that matter to the business rather than optimizing for technical novelty alone.",
  },
  {
    title: "Analytics with Actionability",
    desc: "My analytics work is built around decisions: margin recovery, funnel optimization, risk detection, forecasting direction, and operational clarity for teams that need an answer now.",
  },
  {
    title: "LLM Product Building",
    desc: "I design and ship LLM-powered systems for planning, simulation, semantic matching, education, and workflow automation, with a focus on useful interfaces and grounded outputs.",
  },
  {
    title: "End-to-End Execution",
    desc: "I am comfortable moving across SQL, ETL, dashboards, APIs, full-stack apps, and deployment workflows, which lets me take an idea from raw data all the way to a usable product.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-3 font-bold">
            About
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-10 leading-tight tracking-tight">
            My Background and Focus Areas<span className="text-primary">.</span>
          </h2>

          <div className="flex flex-col gap-16 lg:gap-24 mt-8 md:mt-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-3/5 space-y-5 lg:pr-8 text-base md:text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  I am building my career at the intersection of <strong>data science, analytics, and AI product engineering</strong>.
                  My work spans business-facing analysis, predictive modeling, semantic search and matching, LLM applications,
                  and the full-stack systems needed to make those ideas usable in practice.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Across my projects, I have worked on <strong>funnel analysis, pricing and margin audits, geospatial analytics, tail-risk modeling, resume-job semantic matching, AI agents, and interactive LLM-powered platforms</strong>. That range is intentional. I like solving problems where data, product thinking, and engineering all need to come together.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  I do not want to be limited to a narrow analyst label. I want to build systems that are technically strong and useful in the real world, whether that means designing a warehouse model, evaluating an ML pipeline, shipping an AI interface, or translating a messy dataset into <span className="text-foreground font-medium underline underline-offset-4 decoration-primary/30">a decision someone can act on immediately.</span>
                </p>
              </div>

              <div className="w-full lg:w-2/5 flex justify-center lg:justify-end shrink-0 pointer-events-none">
                <motion.img
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src="/images/hero/hero_about.png"
                  alt="Vishal About Illustration"
                  className="w-[280px] sm:w-[320px] lg:w-[400px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[90%] mx-auto">
              {focusCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="p-8 rounded-[2rem] border-none bg-card shadow-[inset_2px_2px_8px_rgba(255,255,255,0.1),_inset_-3px_-3px_10px_rgba(0,0,0,0.5),_6px_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:brightness-110 transition-all duration-300"
                >
                  <div className="w-1.5 h-6 bg-primary rounded-full mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-2">{card.title}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
