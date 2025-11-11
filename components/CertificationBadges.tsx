"use client"

import Image from "next/image"
import type { Certification } from "@/lib/content"

const badgePath =
  "M207,0C171.827,0.001,43.875,0.004,9.003,0c-5.619-0.001-9,3.514-9,9c0,28.23-0.006,151.375,0,169c0.005,13.875,94.499,54,107.999,54S216,191.57,216,178V9C216,3.298,212.732,0,207,0z"

const brandConfigs: Record<
  string,
  {
    ribbon: string
    accent: string
    logo: string
    textColor?: string
  }
> = {
  Databricks: {
    ribbon: "#FF3621",
    accent: "#FF3621",
    logo: "/logos/databricks.svg",
    textColor: "#ffffff",
  },
  Simplilearn: {
    ribbon: "#00AEEF",
    accent: "#00AEEF",
    logo: "/logos/simplilearn.svg",
    textColor: "#ffffff",
  },
  Google: {
    ribbon: "#4285F4",
    accent: "#4285F4",
    logo: "/logos/google.svg",
    textColor: "#ffffff",
  },
}

const defaultBrand = {
  ribbon: "#111827",
  accent: "#111827",
  logo: "/logos/default.svg",
  textColor: "#ffffff",
}

const categoryLabels: Record<Certification["category"], string> = {
  ai: "AI & Agents",
  cloud: "Cloud",
  programming: "Programming",
  data: "Data",
  other: "General",
}

const stars = ["\u2605", "\u2605", "\u2605"]

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  })

interface CertificationBadgesProps {
  certifications: Certification[]
}

export function CertificationBadges({ certifications }: CertificationBadgesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {certifications.map((certification, index) => {
        const brand = brandConfigs[certification.organization] ?? defaultBrand
        const title = certification.title.toUpperCase()

        return (
          <a
            key={`${certification.title}-${certification.date}`}
            href={certification.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${certification.title} certificate`}
            className="group"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div
              className="relative h-[240px] w-[220px] overflow-hidden rounded-[34px] border border-white/30 bg-white/5 shadow-[0_25px_60px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_85px_rgba(15,23,42,0.45)]"
              role="presentation"
            >
              <div className="absolute inset-2 rounded-[30px] border border-white/10 bg-gradient-to-b from-slate-900/40 via-slate-900/30 to-slate-900/20 shadow-[inset_0_0_35px_rgba(15,23,42,0.5)]" />

              <svg
                viewBox="0 0 216 232"
                className="absolute inset-6 h-[220px] w-[210px]"
                preserveAspectRatio="none"
              >
                <path fill={brand.ribbon} d={badgePath} />
              </svg>

              <div className="absolute inset-4 flex h-[calc(100%-16px)] flex-col items-center justify-between rounded-[28px] px-5 py-6 text-center text-white">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[9px] uppercase tracking-[0.5em] text-white/70">
                    {categoryLabels[certification.category]}
                  </span>
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded-full border border-white/60 bg-white/90 shadow-[0_12px_28px_rgba(15,23,42,0.4)]"
                    style={{ boxShadow: `0 14px 40px ${brand.ribbon}60` }}
                  >
                    <Image
                      src={brand.logo}
                      alt={`${certification.organization} logo`}
                      width={56}
                      height={56}
                      className="h-14 w-14 object-contain"
                      priority={false}
                    />
                  </div>
                </div>

                <p className="text-[1.8rem] font-semibold uppercase leading-tight tracking-[0.25em]">
                  <span className="whitespace-pre-line break-words">{title}</span>
                </p>

                <div className="flex flex-col items-center gap-1">
                  <span className="text-[0.85rem] font-semibold uppercase tracking-[0.4em] text-white/75">
                    {certification.organization}
                  </span>
                  <span className="text-[0.7rem] tracking-[0.65em] transition-[letter-spacing] duration-300 group-hover:tracking-[1em]">
                    {stars.join(" ")}
                  </span>
                </div>

                <span className="text-[0.7rem] uppercase tracking-[0.35em] text-white/65">
                  {formatDate(certification.date)}
                </span>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
