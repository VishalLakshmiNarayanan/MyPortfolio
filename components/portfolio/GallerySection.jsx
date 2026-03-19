import React from "react";
import { motion } from "framer-motion";

const moments = [
  {
    titlePart1: "DevHacks",
    titlePart2: "Change the World",
    date: "March 2026",
    description: "My 4th Hackathon Victory! Built AI Personas that provides reasoning and justification, that purely judges you in a high stake meeting based environment. Gamified experience to stress test the human reasoning and build a pressure environment that can be integrated with VR to have a mock meeting setup.",
    img: "/images/Moments/devhacks3.png",
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
          className="mb-14 text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3 font-semibold">Gallery</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-foreground">Notable Moments</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A visual walkthrough of hackathon victories, community workshops, and leadership moments that shaped my technical journey.
          </p>
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
                className="group relative overflow-hidden rounded-2xl cursor-pointer bg-muted border border-border/50 shadow-sm break-inside-avoid mb-4 md:mb-6"
              >
                {/* Background Image */}
                <img 
                  src={m.img} 
                  alt={m.titlePart1} 
                  className="w-full h-auto block transition-transform duration-700 ease-out" 
                />
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 opacity-0 group-hover:opacity-100" />

                {/* Content Overlay (Bottom aligned) */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
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