// components/blocks/HeroStats.tsx
"use client";

import { useEffect, useState } from "react";
import { heroStats } from "@/lib/content";

export default function HeroStats() {
  const [rollIndex, setRollIndex] = useState(0);

  // Smoothly alternate the Projects stat (17 Total <-> 9 Featured)
  useEffect(() => {
    const id = setInterval(() => {
      setRollIndex((i) => (i === 0 ? 1 : 0));
    }, 2200); // adjust speed as you like
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
      {heroStats.map((s) => {
        const value =
          s.id === "projects" && Array.isArray(s.rolling)
            ? s.rolling[rollIndex]
            : s.value;

        return (
          <div
            key={s.id}
            className="rounded-2xl border border-border/60 bg-card/60 backdrop-blur px-4 py-3 shadow-sm"
          >
            <div className="text-xl font-semibold leading-tight">
              {value}
              {s?.suffix ? (
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  {s.suffix}
                </span>
              ) : null}
            </div>
            <div className="mt-0.5 text-xs uppercase tracking-wide text-muted-foreground">
              {s.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
