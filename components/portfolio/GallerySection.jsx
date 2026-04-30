import React from "react";
import { motion } from "framer-motion";

const moments = [
  {
    titlePart1: "Kiro Spark",
    titlePart2: "Impact Track Winner",
    date: "April 2026",
    description: "My 8th Hackathon Victory. Won the Impact Track at the Kiro Spark Challenge by building Inference Network, a project focused on making AI more accessible and sustainable.",
    img: "/images/Moments/spark.png",
  },
  {
    titlePart1: "HackAZona",
    titlePart2: "Cognite Track Winner",
    date: "2026",
    description: "My 7th Hackathon Victory. Team Tokyo won the HackAZona Cognite Track by building the NPA Digital Twin platform, transforming industrial time-series sensor data into an interactive 3D monitoring environment for remote operations.",
    img: "/images/Moments/cognite.png",
  },
  {
    titlePart1: "SpaceHack",
    titlePart2: "Global Winner",
    date: "2026",
    description: "Global Winner and Overall Champion of SpaceHack for Sustainability 2026, competing alongside universities and participants from Paris, the Netherlands, Ecuador, Puerto Rico, and Bulgaria.",
    img: "/images/Moments/Spacehack.png",
  },
  {
    titlePart1: "DevHacks",
    titlePart2: "Change the World",
    date: "March 2026",
    description: "My 4th Hackathon Victory! Built AI Personas that provides reasoning and justification, that purely judges you in a high stake meeting based environment. Gamified experience to stress test the human reasoning and build a pressure environment that can be integrated with VR to have a mock meeting setup.",
    img: "/images/Moments/devhacks3.png",
  },
  {
    titlePart1: "HackASU",
    titlePart2: "x Claude Builders Club",
    date: "2026",
    description: "Participated in the HackASU hackathon with the Claude Builders Club and won the Go Viral, Win Big track sponsored by TamaGrow.",
    img: "/images/Moments/claude.png",
  },
  {
    titlePart1: "DevHacks",
    titlePart2: "S2",
    date: "September 2025",
    description: "My 3rd Hackathon Victory! Built an AI video-based educating platform and won 1st place out of 175 participating teams as a solo developer.",
    img: "/images/Moments/devhackss2.png",
  },
  {
    titlePart1: "Hackazona",
    titlePart2: "v0.1",
    date: "March 2025",
    description: "Built an agentic framework-based trip planner and won the People's Choice Award. The event was partnered with Microsoft Azure.",
    img: "/images/Moments/Hackazona.png",
  },
  {
    titlePart1: "Arizona Space",
    titlePart2: "Congress",
    date: "April 2026",
    description: "Attended the Space Rising conference at Arizona Space Congress to explore Arizona's growing role in the global space economy and ecosystem.",
    img: "/images/Moments/ASC.png",
  },
  {
    titlePart1: "Capstone",
    titlePart2: "Presentation",
    date: "April 2026",
    description: "Presented my final capstone project on Predicting Equity-Based Disaster Response and Resource Optimization.",
    img: "/images/Moments/capstone.png",
  },
  {
    titlePart1: "Unit of Data Science",
    titlePart2: "& Analytics Lab",
    date: "2026",
    description: "The closing presentation from my 8-week work with the Unit of Data Science and Analytics Lab, where I presented findings from an NLP analysis on topic shifts and public sentiment around the 2026 State of the Union.",
    img: "/images/Moments/eve3n.png",
  },
  {
    titlePart1: "AI Summit",
    titlePart2: "2026",
    date: "February 2026",
    description: "The largest-scale AI event organized by the ASU AI Society, where I successfully led the information desk management.",
    img: "/images/Moments/AG-24.png",
  },
  {
    titlePart1: "Tech",
    titlePart2: "Mentorship",
    date: "November 2025",
    description: "Helped 5 teams architect their hackathon ideas, assisting closely with the technical implementations of LLM-based frameworks.",
    img: "/images/Moments/mentorship.png",
  },
  {
    titlePart1: "Hacks for",
    titlePart2: "Humanity",
    date: "October 2025",
    description: "A hacker event focused entirely on social good—building tools for the community using AI and ensuring its use remains humane.",
    img: "/images/Moments/HHH.png",
  },
  {
    titlePart1: "Workshop",
    titlePart2: "Lead",
    date: "October 2025",
    description: "Led an intensive technical workshop teaching engineering students how to build and deploy their own personal portfolio websites.",
    img: "/images/Moments/Workshop.png",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-24 bg-background z-10 w-full overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:flex-row items-center md:items-end justify-between mb-16 md:mb-24 mt-8"
        >
          {/* Text Content */}
          <div className="flex-1 w-full text-center md:text-left z-20">
            <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-3 font-bold">Gallery</h2>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              Notable Moments<span className="text-primary">.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed mt-4 md:mt-6">
              A visual walkthrough of hackathon victories, community workshops, and leadership moments that shaped my technical journey.
            </p>
          </div>

          {/* Moment Character Beside Title */}
          <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0 mt-12 md:mt-0 z-10">
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

        {/* Masonry Gallery Collage */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
          {moments.map((m, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden rounded-[2rem] cursor-pointer bg-card border-none shadow-[inset_2px_2px_8px_rgba(255,255,255,0.1),_inset_-3px_-3px_10px_rgba(0,0,0,0.5),_6px_10px_20px_rgba(0,0,0,0.4)] break-inside-avoid mb-4 md:mb-6 p-2 md:p-3 hover:-translate-y-1 hover:brightness-110 transition-all duration-300"
              >
                {/* Background Image */}
                <img 
                  src={m.img} 
                  alt={m.titlePart1} 
                  className="w-full h-auto block rounded-[1.25rem] md:rounded-[1.5rem] transition-transform duration-700 ease-out" 
                />
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-2 md:inset-3 rounded-[1.25rem] md:rounded-[1.5rem] overflow-hidden bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />

                {/* Content Overlay (Bottom aligned) */}
                <div className="absolute inset-2 md:inset-3 p-4 md:p-6 flex flex-col justify-end overflow-hidden">
                  <div className="transform transition-all duration-500 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs mb-1 md:mb-2 drop-shadow-md">
                      {m.date}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2 drop-shadow-lg leading-tight">
                      {m.titlePart1} {m.titlePart2}
                    </h3>
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-xs md:text-sm leading-relaxed transition-colors duration-300 drop-shadow-md">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
