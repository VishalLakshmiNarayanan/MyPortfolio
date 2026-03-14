import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Vishal Lakshmi Narayanan - Portfolio",
    template: "%s | Vishal Lakshmi Narayanan",
  },
  description:
    "Operations Data Analyst, specializing in data-driven decision making and process optimization. Grad Student at ASU.",
  keywords: ["Data Analysis", "Operations", "Optimization", "Decision Making", "Process Improvement"],
  authors: [{ name: "Vishal Lakshmi Narayanan" }],
  creator: "Vishal Lakshmi Narayanan",
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Devicon icon font for skill/tool logos */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
