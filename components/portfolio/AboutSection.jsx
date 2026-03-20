import React from "react";
import { motion } from "framer-motion";

const focuses = [
  { 
    title: "Business Impact", 
    desc: "Focusing on the 'why' behind the data to drive revenue, lower risk, and help teams make faster, smarter decisions." 
  },
  { 
    title: "Data Reliability", 
    desc: "Applying rigorous validation so that every insight and executive report is built on a foundation of total trust." 
  },
  { 
    title: "Practical Usability", 
    desc: "Designing intuitive dashboards and search tools that make it easy for non-technical teams to find exactly what they need." 
  },
  { 
    title: "Strategic Communication", 
    desc: "Turning complex datasets into clear, persuasive stories that help stakeholders shape product and growth strategies." 
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
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-3 font-bold">About</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-10 leading-tight tracking-tight">
            My Background and Focus Areas<span className="text-primary">.</span>
          </h2>

          <div className="flex flex-col gap-16 lg:gap-24 mt-8 md:mt-16">
            {/* Top Row: Bio & Character */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-3/5 space-y-5 lg:pr-8 text-base md:text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  I see data as a way to <strong>take the guesswork out of how a product actually performs</strong>. I focus on finding the <strong>why behind the numbers</strong>, whether that is identifying exactly where customers are dropping off in a funnel or spotting underperforming regions before they impact the bottom line.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  My background is built on making <strong>operations faster and more transparent</strong>. I have spent time <strong>automating complex reporting cycles</strong> to cut down hours of manual work into minutes and partnering with sales teams to turn raw SKU-level data into <strong>clear distribution plans</strong>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  I do not believe in just handing over a report. I believe in providing a <strong>clear map</strong> that shows where to allocate a budget, how to fix a conversion leak, and exactly <span className="text-foreground font-medium underline underline-offset-4 decoration-primary/30">what to do next.</span>
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

            {/* Bottom Row: Focus areas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[90%] mx-auto">
              {focuses.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="p-8 rounded-[2rem] border-none bg-card shadow-[inset_2px_2px_8px_rgba(255,255,255,0.1),_inset_-3px_-3px_10px_rgba(0,0,0,0.5),_6px_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:brightness-110 transition-all duration-300"
                >
                  <div className="w-1.5 h-6 bg-primary rounded-full mb-4" />
                  <p className="text-lg font-semibold text-foreground mb-2">{f.title}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}