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
      <div className="absolute top-28 md:top-40 left-0 w-full flex flex-col items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="relative inline-block">
          <span className="text-[11vw] sm:text-[9vw] md:text-[6.5vw] font-bold text-foreground/10 dark:text-foreground/5 whitespace-nowrap select-none tracking-tight drop-shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
            Vishal Lakshmi Narayanan
          </span>
          {/* Decorative squiggly underline moved here */}
          <svg className="absolute -bottom-3 md:-bottom-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[75%] h-auto text-primary/30 dark:text-primary/15 drop-shadow-md" viewBox="0 0 600 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 25 Q 150 5 300 20 T 590 15" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Center Person Image */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[85vh] z-10 pointer-events-none flex items-end justify-center">
        <motion.img 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={PROFILE_IMG}
          alt="Vishal Lakshmi Narayanan" 
          className="h-[90%] w-auto object-contain object-bottom drop-shadow-[0_0_10px_hsl(var(--primary)/0.15)] dark:drop-shadow-[0_0_15px_hsl(var(--primary)/0.25)]"
        />
      </div>

      {/* Floating Content Layer */}
      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full min-h-[85vh] flex flex-col md:flex-row justify-between items-center md:items-center pb-12 pt-8">
        
        {/* Left Side Content - Floating Achievement Boxes */}
        <div className="flex flex-col gap-4 md:gap-5 self-start md:self-center w-full md:w-auto mt-24 md:mt-48 z-20 max-w-[20rem]">
          <motion.div
             initial={{ opacity: 0, x: -40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3, duration: 0.8 }}
             className="bg-background/80 md:bg-background/50 backdrop-blur-xl border border-border/50 p-4 rounded-[1.5rem] shadow-xl flex items-center gap-4 hover:border-primary/40 transition-colors group"
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
             className="bg-background/80 md:bg-background/50 backdrop-blur-xl border border-border/50 p-4 rounded-[1.5rem] shadow-xl flex items-center gap-4 md:ml-8 hover:border-primary/40 transition-colors group"
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
            className="flex items-center justify-center gap-2 w-fit px-8 py-3.5 mt-2 md:ml-4 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
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
           className="bg-background/80 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border border-border/50 md:border-none p-8 md:p-0 rounded-[2rem] md:rounded-none max-w-sm md:max-w-[24rem] text-left self-end md:self-center mt-6 md:mt-32 w-full md:w-auto relative"
        >
           <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.2]">
             Operations <span className="text-primary">Data Analyst</span>
           </h3>
           <p className="text-muted-foreground text-base leading-relaxed mb-8">
             Quantifying Uncertainty to Build <br className="hidden md:block" />
             <span className="font-semibold text-foreground">Resilient Business Strategies.</span>
           </p>
           
           <div className="relative inline-block mt-2">
             <div className="flex items-center gap-4 relative z-10">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow"
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