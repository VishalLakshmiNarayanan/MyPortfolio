"use client";

import React from "react";
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import ProjectSection from "../components/portfolio/ProjectSection";
import GallerySection from "../components/portfolio/GallerySection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ContactFooter from "../components/portfolio/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
      <SkillsSection />
      <GallerySection />
      <ContactFooter />
    </div>
  );
}
