"use client"

import { useEffect, useState } from "react"
import { MediumBlogCard } from "./medium-blog-card"
import type { MediumArticle } from "@/lib/content"
import { fetchMediumArticles } from "@/lib/medium"
import { Loader2 } from "lucide-react"
import "./brutalist-blog-card.css"

interface MediumBlogSectionProps {
  username?: string
  limit?: number
}

export function MediumBlogSection({
  username = "lvishal1607",
  limit = 6
}: MediumBlogSectionProps) {
  const [articles, setArticles] = useState<MediumArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadArticles() {
      try {
        setLoading(true)
        setError(null)
        const fetchedArticles = await fetchMediumArticles(username, limit)
        setArticles(fetchedArticles)
      } catch (err) {
        setError("Failed to load articles. Please try again later.")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadArticles()
  }, [username, limit])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
          <p className="text-sm text-black/60">Loading articles...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-black/60">No articles found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-2">
      {/* Brutalist grid layout */}
      <div className="brutalist-blog-grid">
        {articles.map((article, index) => (
          <MediumBlogCard key={article.link} article={article} index={index} />
        ))}
      </div>
    </div>
  )
}
