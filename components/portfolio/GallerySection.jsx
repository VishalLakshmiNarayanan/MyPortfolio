import React from "react";
import { motion } from "framer-motion";

const moments = [
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

        {/* Bento Grid Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] sm:auto-rows-[350px] md:auto-rows-[400px]">
          {moments.map((m, i) => {
            // Asymmetrical grid spans for a dynamic collage look
            let colSpan = "md:col-span-12"; 
            if (i === 0) colSpan = "md:col-span-6 lg:col-span-5";
            else if (i === 1) colSpan = "md:col-span-6 lg:col-span-7";
            else if (i === 2) colSpan = "md:col-span-6 lg:col-span-7";
            else if (i === 3) colSpan = "md:col-span-6 lg:col-span-5";
            else if (i === 4) colSpan = "md:col-span-6 lg:col-span-6";
            else if (i === 5) colSpan = "md:col-span-6 lg:col-span-6";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className={`group relative overflow-hidden rounded-2xl ${colSpan} cursor-pointer bg-muted border border-border/50 shadow-sm`}
              >
                {/* Background Image */}
                <img 
                  src={m.img} 
                  alt={m.titlePart1} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
                
                {/* Dark Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-95" />

                {/* Content Overlay (Bottom aligned) */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <motion.div 
                    initial={{ y: 15, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + ((i % 3) * 0.1) }}
                    className="transform transition-transform duration-500 group-hover:translate-y-0"
                  >
                    <p className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-2 drop-shadow-md">
                      {m.date}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg leading-tight">
                      {m.titlePart1} {m.titlePart2}
                    </h3>
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-sm md:text-base line-clamp-2 md:line-clamp-3 transition-colors duration-300 drop-shadow-md">
                        {m.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}