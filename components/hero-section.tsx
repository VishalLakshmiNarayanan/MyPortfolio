"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Clock } from "lucide-react"
import GlassFlipper from "@/components/GlassFlipper"
import HeroStats from "@/components/blocks/HeroStats";


import HeroCarousel from "@/components/hero-carousel";

export function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return (
      date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      " | " +
      date.toLocaleTimeString()
    )
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Date and Time Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-2 text-sm text-black bg-white/50 border border-purple-300 rounded-full px-4 py-2 backdrop-blur-md w-max mb-2"
          >
            <Clock className="w-4 h-4 text-black" />
            <span className="font-medium">{formatTime(currentTime)}</span>
          </motion.div>

          {/* Left copy */}
          <div className="space-y-4 order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-black">
              I’m Vishal Lakshmi Narayanan
            </h1>
            <div className="mt-1">
              <GlassFlipper className="mx-0" />
            </div>

            <p className="text-base md:text-lg text-black/80 max-w-2xl leading-relaxed font-medium">
              I’m a builder and researcher who transforms ideas into intelligent systems. My work spans AI-driven platforms, backend engineering, and data science — from designing Builder Intelligence, an end-to-end talent matching pipeline at DevLabs, to developing TailShield, a risk-aware ensemble model for forecasting catastrophic losses.
            </p>
            <p className="text-base md:text-lg text-black/80 max-w-2xl leading-relaxed font-medium">
              I thrive at the intersection of AI and human insight, creating solutions that learn, adapt, and scale — whether it’s embedding pipelines, conversational interfaces, or research models that make data truly useful.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <a href="#projects" className="hero-social-btn github px-5 py-2">View Projects</a>
              <a href="#contact" className="hero-social-btn linkedin px-5 py-2">Let’s Talk</a>
            </div>

            <div className="pt-4">
              <HeroStats />
            </div>
          </div>

          {/* Right visual */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-80 md:h-96 rounded-2xl overflow-hidden border-2 border-purple-300 shadow-xl">
              <HeroCarousel
                images={["/images/hero/portrait.jpg", "/images/hero/hero1.jpg"]}
                intervalMs={4000}
                aspect="h-full"
                variant="rounded"
                glow={false}
              />
              <div className="hidden md:block absolute -right-6 top-8 bg-white/90 border rounded-full px-3 py-1 text-sm shadow">AI Platforms</div>
              <div className="hidden md:block absolute -right-10 top-32 bg-white/90 border rounded-full px-3 py-1 text-sm shadow">Data Science</div>
              <div className="hidden md:block absolute -right-4 bottom-8 bg-white/90 border rounded-full px-3 py-1 text-sm shadow">Backend</div>
            </div>
          </div>

          {/* Socials */}
          <div className="md:col-span-2 flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="https://github.com/VishalLakshmiNarayanan"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn github"
            >
              <Github className="icon w-5 h-5" />
              <span className="text font-medium">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/vishal-lakshmi-narayanan-687619324"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn linkedin"
            >
              <Linkedin className="icon w-5 h-5" />
              <span className="text font-medium">LinkedIn</span>
            </a>
            <a
              href="https://medium.com/@lvishal1607"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn medium"
            >
              <span className="icon text-lg font-bold">M</span>
              <span className="text font-medium">Medium</span>
            </a>
            <a
              href="https://leetcode.com/u/lvleetcode/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-btn leetcode"
            >
              <span className="icon text-sm font-bold">LC</span>
              <span className="text font-medium">LeetCode</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
