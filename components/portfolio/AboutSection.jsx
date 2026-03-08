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
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-10">My Background and Focus Areas</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Bio */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed text-sm">
  I see data as a way to <strong>take the guesswork out of how a product actually performs</strong>. I focus on finding the <strong>why behind the numbers</strong>, whether that is identifying exactly where customers are dropping off in a funnel or spotting underperforming regions before they impact the bottom line.
</p>

<p className="text-muted-foreground leading-relaxed text-sm">
  My background is built on making <strong>operations faster and more transparent</strong>. I have spent time <strong>automating complex reporting cycles</strong> to cut down hours of manual work into minutes and partnering with sales teams to turn raw SKU-level data into <strong>clear distribution plans</strong>.
</p>

<p className="text-muted-foreground leading-relaxed text-sm">
  I do not believe in just handing over a report. I believe in providing a <strong>clear map</strong> that shows where to allocate a budget, how to fix a conversion leak, and exactly <span className="text-foreground font-medium underline underline-offset-4 decoration-primary/30">what to do next.</span>
</p>
            </div>

            {/* Right: Focus areas */}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {focuses.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-4 rounded-xl border border-border bg-card/40 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-1 h-4 bg-primary rounded-full mb-3" />
                  <p className="text-sm font-semibold text-foreground mb-1">{f.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}