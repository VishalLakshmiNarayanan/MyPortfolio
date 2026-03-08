import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

const moments = [
  {
    label: "DevHacks S2",
    sublabel: "1st Place (Solo Participant) out of 175 teams",
    img: "/images/Moments/devhackss2.png",
    accent: "Hackathon Win",
  },
  {
    label: "AI Summit 2026",
    sublabel: "Led management on information desk, communicating with industry partners",
    img: "/images/Moments/AG-24.jpg",
    accent: "Leadership",
  },
  {
    label: "HackAZona v0.1",
    sublabel: "People's Choice Award at ASU",
    img: "/images/Moments/Hackazona.png",
    accent: "Hackathon Win",
  },
  {
    label: "Hacks for Humanity",
    sublabel: "Annual hacker event focused on social good",
    img: "/images/Moments/HHH.png",
    accent: "Community",
  },
  {
    label: "Technical Mentorship",
    sublabel: "Mentored at Claude Builder Club Hackathon",
    img: "/images/Moments/mentorship.png",
    accent: "Mentorship",
  },
  {
    label: "ASU Workshop Lead",
    sublabel: "Taught students to build personal portfolio websites",
    img: "/images/Moments/Workshop.png",
    accent: "Workshops",
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="py-32 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Notable moments</h2>
          <p className="text-sm text-muted-foreground mb-12 max-w-lg">
            Snapshots from hackathons, mentoring students, and the teams I have been a part of.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {moments.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setLightbox(m)}
            >
              <img
                src={m.img}
                alt={m.label}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ height: i % 3 === 0 ? "240px" : i % 3 === 1 ? "180px" : "200px" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />

              {/* Zoom icon */}
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn size={13} className="text-primary" />
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-[10px] text-primary tracking-wider uppercase">{m.accent}</span>
                <p className="text-sm font-semibold text-foreground leading-tight">{m.label}</p>
                <p className="text-xs text-muted-foreground">{m.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <div className="absolute inset-0 bg-background/90 backdrop-blur-2xl" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.img} alt={lightbox.label} className="w-full object-cover max-h-[70vh]" />
              <div className="p-5" style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(12px)" }}>
                <span className="text-[10px] text-primary tracking-wider uppercase">{lightbox.accent}</span>
                <p className="text-base font-semibold text-foreground">{lightbox.label}</p>
                <p className="text-sm text-muted-foreground">{lightbox.sublabel}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-background/70 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}