"use client"

import type { Certification } from "@/lib/content"

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
    logo: "simple-icons:databricks",
    textColor: "#ffffff",
  },
  Simplilearn: {
    ribbon: "#00AEEF",
    accent: "#00AEEF",
    logo: "simple-icons:simplilearn",
    textColor: "#ffffff",
  },
  Google: {
    ribbon: "#4285F4",
    accent: "#4285F4",
    logo: "simple-icons:google",
    textColor: "#ffffff",
  },
}

const defaultBrand = {
  ribbon: "#111827",
  accent: "#111827",
  logo: "logos:badge",
  textColor: "#ffffff",
}

const categoryLabels: Record<Certification["category"], string> = {
  ai: "AI & Agents",
  cloud: "Cloud",
  programming: "Programming",
  data: "Data",
  other: "General",
}

const stars = ["*", "*", "*"]

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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {certifications.map((certification, index) => {
        const brand = brandConfigs[certification.organization] ?? defaultBrand

        return (
          <a
            key={`${certification.title}-${certification.date}`}
            href={certification.credentialUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${certification.title} certificate`}
            className="group block"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="relative flex h-[300px] w-[216px] cursor-pointer flex-col items-center overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-b from-white/70 via-slate-100/70 to-slate-200/80 p-6 text-center text-slate-900 shadow-[0_20px_45px_rgba(59,130,246,0.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_55px_rgba(59,130,246,0.25)]">
              <div
                className="absolute -top-5 left-4 right-4 rounded-[14px] px-3 py-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ background: brand.ribbon, color: brand.textColor ?? "#fff" }}
              >
                {certification.organization}
              </div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-4 pt-6">
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-[0_15px_35px_rgba(17,24,39,0.15)]"
                  style={{ boxShadow: `0 16px 35px ${brand.ribbon}30` }}
                >
                  <img
                    src={`https://api.iconify.design/${encodeURIComponent(
                      brand.logo,
                    )}.svg${brand.logo.startsWith("logos:") ? "" : "?color=%23000000"}`}
                    alt={`${certification.organization} logo`}
                    className="h-10 w-10"
                    loading="lazy"
                  />
                </div>

                <p className="text-lg font-semibold leading-tight text-slate-900">{certification.title}</p>
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">
                  {categoryLabels[certification.category]}
                </p>
              </div>

              <div className="relative z-10 mt-auto flex w-full flex-col items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-slate-500">
                  {formatDate(certification.date)}
                </span>
                <div
                  className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[12px] font-semibold tracking-[0.4em] transition-all duration-300 group-hover:gap-6"
                  style={{ color: brand.accent }}
                >
                  {stars.map((star, index) => (
                    <span key={index} className="leading-none">
                      {star}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}
