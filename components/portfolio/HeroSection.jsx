import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText, Trophy, GitCommit } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/VishalLakshmiNarayanan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vishallaksh/", label: "LinkedIn" },
  { icon: FileText, href: "https://drive.google.com/file/d/1yNYIyJncSy28G_jh4X9gHFQVi8y-rc-d/view?usp=sharing", label: "Resume" },
];

const PROFILE_IMG = "/images/hero/hero_nobg.png";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[100svh] flex items-center justify-center relative overflow-hidden bg-background pt-20">
      {/* Background gradients */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      {/* Giant Faded Background Text */}
      <div className="absolute top-24 md:top-40 left-0 w-full flex flex-col items-center justify-center pointer-events-none z-0 overflow-hidden px-4 md:px-0">
        <div className="relative inline-block text-center mb-10 md:mb-0">
          <span 
            className="text-[16vw] sm:text-[13vw] md:text-[6vw] font-black text-primary leading-[0.85] md:leading-none select-none tracking-tight flex flex-col md:block z-0"
            style={{
              textShadow: "-2px -2px 4px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.6), 8px 12px 20px rgba(0,0,0,0.5)"
            }}
          >
            <span className="whitespace-nowrap">Vishal Lakshmi</span> <span className="whitespace-nowrap">Narayanan</span>
          </span>
        </div>
      </div>

      {/* Floating Content Layer */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full min-h-[100svh] md:min-h-[85vh] flex flex-col md:flex-row justify-between items-center md:items-center pb-12 pt-4 md:pt-8 gap-4 md:gap-0">
        
        {/* Mobile ONLY static image in flow to prevent overlap */}
        <div className="flex md:hidden w-full h-[45vh] sm:h-[50vh] z-10 pointer-events-none items-end justify-center order-2 mt-2 mb-2">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={PROFILE_IMG}
              alt="Vishal Lakshmi Narayanan" 
              className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_10px_hsl(var(--primary)/0.15)] dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.25)]"
            />
        </div>

        {/* Desktop ONLY absolute image */}
        <div className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[85vh] z-10 pointer-events-none items-end justify-center">
           <motion.img 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={PROFILE_IMG}
              alt="Vishal Lakshmi Narayanan" 
              className="h-[90%] w-auto object-contain object-bottom drop-shadow-[0_0_10px_hsl(var(--primary)/0.15)] dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.25)]"
            />
        </div>

        {/* Left Side Content - Floating Achievement Boxes */}
        <div className="order-3 md:order-1 flex flex-col gap-4 md:gap-5 self-center w-full md:w-auto mt-2 md:mt-48 z-20 max-w-md md:max-w-[20rem]">
          <motion.div
             initial={{ opacity: 0, x: -40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="bg-card border-none p-4 rounded-[2rem] shadow-[inset_2px_2px_8px_rgba(255,255,255,0.1),_inset_-3px_-3px_10px_rgba(0,0,0,0.5),_6px_10px_20px_rgba(0,0,0,0.4)] flex items-center gap-4 hover:brightness-110 transition-all duration-300 group"
          >
            <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <Trophy size={20} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-foreground leading-none mb-1">4</h4>
              <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-wider">Hackathon Wins</p>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: -40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="bg-card border-none p-4 rounded-[2rem] shadow-[inset_2px_2px_8px_rgba(255,255,255,0.1),_inset_-3px_-3px_10px_rgba(0,0,0,0.5),_6px_10px_20px_rgba(0,0,0,0.4)] flex items-center gap-4 md:ml-8 hover:brightness-110 transition-all duration-300 group"
          >
             <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <GitCommit size={20} />
            </div>
            <div>
               <h4 className="text-2xl font-bold text-foreground leading-none mb-1">900+</h4>
               <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-wider">GitHub Contributions</p>
            </div>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            href="#projects"
            className="flex items-center justify-center gap-2 w-full md:w-fit px-8 py-3.5 mt-2 md:ml-4 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-[inset_2px_2px_6px_rgba(255,255,255,0.3),_inset_-3px_-3px_8px_rgba(0,0,0,0.3),_4px_8px_16px_rgba(var(--primary),0.4)] hover:shadow-[inset_4px_4px_8px_rgba(255,255,255,0.4),_inset_-4px_-4px_10px_rgba(0,0,0,0.4),_2px_4px_8px_rgba(var(--primary),0.6)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
            <ArrowDown size={16} />
          </motion.a>
        </div>

        {/* Right Side Content - Typography and Socials */}
        <motion.div
           initial={{ opacity: 0, x: 40 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="order-1 md:order-2 bg-background/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-border/50 md:border-none p-6 md:p-0 rounded-[2rem] md:rounded-none max-w-md md:max-w-[24rem] text-center md:text-left self-center mt-4 md:mt-32 w-full md:w-auto relative"
        >
           <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.2]">
             Operations <span className="text-primary">Data Analyst</span>
           </h3>
           <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 md:mb-8">
             Quantifying Uncertainty to Build <br className="hidden md:block" />
             <span className="font-semibold text-foreground">Resilient Business Strategies.</span>
           </p>
           
           <div className="relative inline-block mt-2">
             <div className="flex items-center justify-center md:justify-start gap-4 relative z-10">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card border-none shadow-[inset_1px_1px_4px_rgba(255,255,255,0.1),_inset_-2px_-2px_6px_rgba(0,0,0,0.4),_4px_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-[inset_1px_1px_6px_rgba(255,255,255,0.2),_inset_-2px_-2px_6px_rgba(0,0,0,0.5),_2px_2px_6px_rgba(0,0,0,0.4)] hover:brightness-110 transition-all duration-300 active:scale-95"
                    aria-label={s.label}
                  >
                    <s.icon size={20} />
                  </a>
                ))}
             </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
}