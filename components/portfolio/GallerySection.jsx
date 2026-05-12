import React from "react";
import { motion } from "framer-motion";

const moments = [
  {
    titlePart1: "Masters",
    titlePart2: "Graduation",
    date: "May 2026",
    year: 2026,
    month: 5,
    description: "Walked across the stage at ASU to receive my Master's degree in Data Science, the culmination of two years of research, hackathons, and building.",
    img: "/images/Moments/grad.png",
  },
  {
    titlePart1: "Cognite",
    titlePart2: "Presentation",
    date: "May 2026",
    year: 2026,
    month: 5,
    description: "Presented our NPA Digital Twin solution at the Cognite office during the Arizona Nerd Network (AZNN) May meet.",
    img: "/images/Moments/cognitepre.png",
  },
  {
    titlePart1: "Kiro Spark",
    titlePart2: "Impact Track Winner",
    date: "April 2026",
    year: 2026,
    month: 4,
    description: "My 8th Hackathon Victory. Won the Impact Track at the Kiro Spark Challenge by building Inference Network, a project focused on making AI more accessible and sustainable.",
    img: "/images/Moments/spark.png",
  },
  {
    titlePart1: "SpaceHack",
    titlePart2: "Global Winner",
    date: "April 2026",
    year: 2026,
    month: 4,
    description: "Global Winner and Overall Champion of SpaceHack for Sustainability 2026, competing alongside universities and participants from Paris, the Netherlands, Ecuador, Puerto Rico, and Bulgaria.",
    img: "/images/Moments/Spacehack.png",
  },
  {
    titlePart1: "HackAZona",
    titlePart2: "Cognite Track Winner",
    date: "April 2026",
    year: 2026,
    month: 4,
    description: "My 7th Hackathon Victory. Team Tokyo won the HackAZona Cognite Track by building the NPA Digital Twin platform, transforming industrial time-series sensor data into an interactive 3D monitoring environment.",
    img: "/images/Moments/cognite.png",
  },
  {
    titlePart1: "Arizona Space",
    titlePart2: "Congress",
    date: "April 2026",
    year: 2026,
    month: 4,
    description: "Attended the Space Rising conference at Arizona Space Congress to explore Arizona's growing role in the global space economy and ecosystem.",
    img: "/images/Moments/ASC.png",
  },
  {
    titlePart1: "Capstone",
    titlePart2: "Presentation",
    date: "April 2026",
    year: 2026,
    month: 4,
    description: "Presented my final capstone project on Predicting Equity-Based Disaster Response and Resource Optimization.",
    img: "/images/Moments/capstone.png",
  },
  {
    titlePart1: "DevHacks",
    titlePart2: "Change the World",
    date: "March 2026",
    year: 2026,
    month: 3,
    description: "My 4th Hackathon Victory! Built AI Personas that provides reasoning and justification, that purely judges you in a high stake meeting based environment. Gamified experience to stress test human reasoning.",
    img: "/images/Moments/devhacks3.png",
  },
  {
    titlePart1: "HackASU",
    titlePart2: "x Claude Builders Club",
    date: "March 2026",
    year: 2026,
    month: 3,
    description: "Participated in the HackASU hackathon with the Claude Builders Club and won the Go Viral, Win Big track sponsored by TamaGrow.",
    img: "/images/Moments/claude.png",
  },
  {
    titlePart1: "Unit of Data Science",
    titlePart2: "& Analytics Lab",
    date: "March 2026",
    year: 2026,
    month: 3,
    description: "The closing presentation from my 8-week work with the Unit of Data Science and Analytics Lab, presenting findings from an NLP analysis on topic shifts and public sentiment around the 2026 State of the Union.",
    img: "/images/Moments/eve3n.png",
  },
  {
    titlePart1: "AI Summit",
    titlePart2: "2026",
    date: "February 2026",
    year: 2026,
    month: 2,
    description: "The largest-scale AI event organized by the ASU AI Society, where I successfully led the information desk management.",
    img: "/images/Moments/AG-24.png",
  },
  {
    titlePart1: "Tech",
    titlePart2: "Mentorship",
    date: "November 2025",
    year: 2025,
    month: 11,
    description: "Helped 5 teams architect their hackathon ideas, assisting closely with the technical implementations of LLM-based frameworks.",
    img: "/images/Moments/mentorship.png",
  },
  {
    titlePart1: "Hacks for",
    titlePart2: "Humanity",
    date: "October 2025",
    year: 2025,
    month: 10,
    description: "A hacker event focused entirely on social good—building tools for the community using AI and ensuring its use remains humane.",
    img: "/images/Moments/HHH.png",
  },
  {
    titlePart1: "Workshop",
    titlePart2: "Lead",
    date: "October 2025",
    year: 2025,
    month: 10,
    description: "Led an intensive technical workshop teaching engineering students how to build and deploy their own personal portfolio websites.",
    img: "/images/Moments/Workshop.png",
  },
  {
    titlePart1: "DevHacks",
    titlePart2: "S2",
    date: "September 2025",
    year: 2025,
    month: 9,
    description: "My 3rd Hackathon Victory! Built an AI video-based educating platform and won 1st place out of 175 participating teams as a solo developer.",
    img: "/images/Moments/devhackss2.png",
  },
  {
    titlePart1: "Hackazona",
    titlePart2: "v0.1",
    date: "March 2025",
    year: 2025,
    month: 3,
    description: "Built an agentic framework-based trip planner and won the People's Choice Award. The event was partnered with Microsoft Azure.",
    img: "/images/Moments/Hackazona.png",
  },
];

const sortedMoments = [...moments].sort((a, b) =>
  b.year !== a.year ? b.year - a.year : b.month - a.month
);

function groupByYear(items) {
  const groups = [];
  let current = null;
  for (const m of items) {
    if (!current || current.year !== m.year) {
      current = { year: m.year, items: [] };
      groups.push(current);
    }
    current.items.push(m);
  }
  return groups;
}

const yearGroups = groupByYear(sortedMoments);

function GalleryCard({ m, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.07, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl bg-[hsl(220_20%_3%)] border border-white/[0.06] hover:border-primary/30 transition-all duration-300 cursor-default shadow-[0_2px_16px_rgba(0,0,0,0.45)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
    >
      {/* Image area */}
      <div className="relative" style={{ aspectRatio: "4/3" }}>
        {/* Blurred backdrop for letterboxing fill */}
        <img
          src={m.img}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-20 pointer-events-none"
          style={{ filter: "blur(22px)" }}
        />
        {/* Main image — scaled down, not cropped */}
        <img
          src={m.img}
          alt={`${m.titlePart1} ${m.titlePart2}`}
          className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.05]"
        />
        {/* Bottom gradient label */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pt-10 pb-2.5 px-3"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.5) 60%, transparent 100%)" }}
        >
          <p className="text-[8px] font-bold tracking-[0.28em] uppercase text-primary/80 leading-none mb-0.5">
            {m.date}
          </p>
          <h3 className="text-[11px] font-bold text-white leading-tight">
            {m.titlePart1} <span className="text-primary">{m.titlePart2}</span>
          </h3>
        </div>
        {/* Hover description overlay */}
        <div className="absolute inset-0 z-30 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 50%, transparent 100%)" }}
        >
          <p className="text-[10px] text-white/80 leading-relaxed line-clamp-4">
            {m.description}
          </p>
        </div>
        {/* Inset vignette */}
        <div
          className="absolute inset-0 z-20 pointer-events-none rounded-xl"
          style={{ boxShadow: "inset 0 0 24px rgba(0,0,0,0.35)" }}
        />
      </div>
    </motion.article>
  );
}

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 bg-background z-10 w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center md:items-end justify-between mb-20 mt-8"
        >
          <div className="flex-1 w-full text-center md:text-left z-20">
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-3 font-bold">Gallery</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              Notable Moments<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed mt-4 md:mt-6">
              A visual walkthrough of hackathon victories, community workshops, and leadership moments that shaped my technical journey.
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0 mt-10 md:mt-0 z-10">
            <motion.img
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/images/hero/hero_moments.png"
              alt="Vishal Moments Illustration"
              className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] pointer-events-none"
            />
          </div>
        </motion.div>

        {/* ── Timeline Grid ── */}
        <div className="flex flex-col gap-14">
          {yearGroups.map((group) => (
            <div key={group.year}>

              {/* Year divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0.8 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="relative flex items-center gap-5 mb-8"
              >
                <div
                  className="flex-1 h-px"
                  style={{ background: "linear-gradient(to right, transparent, hsl(38 92% 55% / 0.35) 50%)" }}
                />
                <div
                  className="px-7 py-2 rounded-full border text-sm font-black tracking-[0.22em] text-primary shrink-0"
                  style={{
                    background: "hsl(220 15% 5%)",
                    borderColor: "hsl(38 92% 55% / 0.25)",
                    boxShadow: "0 0 16px hsl(38 92% 55% / 0.18), 0 0 40px hsl(38 92% 55% / 0.07)",
                  }}
                >
                  {group.year}
                </div>
                <div
                  className="flex-1 h-px"
                  style={{ background: "linear-gradient(to left, transparent, hsl(38 92% 55% / 0.35) 50%)" }}
                />
              </motion.div>

              {/* 4-column image grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {group.items.map((m, i) => (
                  <GalleryCard key={`${group.year}-${i}`} m={m} index={i} />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
