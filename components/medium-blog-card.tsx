"use client"

import { motion } from "framer-motion"
import type { MediumArticle } from "@/lib/content"
import { formatDate } from "@/lib/medium"
import "./brutalist-blog-card.css"

interface MediumBlogCardProps {
  article: MediumArticle
  index: number
}

export function MediumBlogCard({ article, index }: MediumBlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="brutalist-blog-card"
      >
        {/* Title Header */}
        <div className="brutalist-card-head">
          {article.title}
        </div>

        {/* Description/Summary */}
        <div className="brutalist-card-content">
          {article.description}
        </div>

        {/* Read Full Article Button */}
        <div className="brutalist-card-button">
          Read Full Article →
        </div>

        {/* Footer with Categories and Date */}
        <div className="brutalist-card-footer">
          {/* Categories */}
          {article.categories && article.categories.length > 0 && (
            <div className="brutalist-card-categories">
              {article.categories.slice(0, 2).map((category, idx) => (
                <span key={idx} className="brutalist-card-tag">
                  {category}
                </span>
              ))}
            </div>
          )}

          {/* Date */}
          <div className="brutalist-card-date">
            {formatDate(article.pubDate)}
          </div>
        </div>
      </a>
    </motion.div>
  )
}
