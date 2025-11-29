"use client"
import { HeroSection } from "@/components/hero-section"
import { FlipEducationCard } from "@/components/flip-education-card"
import { PublicationCard } from "@/components/publication-card"
import { ContactCard } from "@/components/contact-card"
import { AwardCard } from "@/components/award-card"
import InstagramMomentsCarousel from "@/components/InstagramMomentsCarousel"
import { CertificationBadges } from "@/components/CertificationBadges"
import SkillTree from "@/components/SkillTree"
import StackedProjectCards from "@/components/StackedProjectCards"
import ExperienceTimeline from "@/components/ExperienceTimeline"
import { MediumBlogSection } from "@/components/medium-blog-section"

import {
  experiences,
  education,
  publications,
  allProjects,
  awards,
  certifications,
} from "@/lib/content"

export default function HomePage() {
  const featuredProjects = allProjects.filter((project) => project.featured)

  return (
    <div className="min-h-screen relative" id="top">
      {/* Hero */}
      <section id="home" className="py-12 md:py-20">
        <HeroSection />
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        <div className="container relative z-10 max-w-[1600px]">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Skills</h2>
            <p className="text-sm md:text-base text-black/70 max-w-2xl mx-auto px-4">Explore my technical skills as bubbles</p>
          </div>
          {/* Skill Tree - Decision Tree Layout */}
          <SkillTree />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Experience</h2>
          </div>
          <ExperienceTimeline items={experiences} />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Featured Projects</h2>
            <p className="text-sm md:text-base text-black/70 max-w-2xl mx-auto px-4">Click the arrow or press space to explore each project</p>
          </div>
          <StackedProjectCards projects={featuredProjects} />
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Education</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-6xl mx-auto px-2">
            {education.map((edu, index) => (
              <FlipEducationCard key={`${edu.school}-${edu.startDate}`} education={edu} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto px-2">
            {awards.map((award, index) => (
              <AwardCard key={`${award.title}-${award.date}`} award={award} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Moments Gallery */}
      <section id="moments" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Moments Gallery</h2>
            <p className="text-sm md:text-base text-black/70 max-w-2xl mx-auto px-4">A glimpse into the hackathons, conferences, and milestones that shaped my path</p>
          </div>
          <InstagramMomentsCarousel />
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Publications</h2>
          </div>
          <div className="max-w-4xl mx-auto px-2">
            {publications.map((publication, index) => (
              <PublicationCard key={publication.title} publication={publication} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-12 md:py-20 bg-gradient-to-b from-transparent via-black/[0.02] to-transparent">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Blog</h2>
            <p className="text-sm md:text-base text-black/70 max-w-2xl mx-auto px-4">
              Insights and stories from my journey in tech, AI, and data science
            </p>
          </div>
          <MediumBlogSection username="lvishal1607" limit={6} />
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Certifications</h2>
          </div>
          <div className="flex justify-center px-2">
            <CertificationBadges certifications={certifications} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 md:py-20">
        <div className="container">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-underline-animation text-black">Contact</h2>
          </div>
          <ContactCard />
        </div>
      </section>
    </div>
  )
}
