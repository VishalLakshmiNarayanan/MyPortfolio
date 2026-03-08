import type { MediumArticle } from "./content"

/**
 * Fetches Medium articles from a user's RSS feed
 * @param username - Medium username (e.g., "lvishal1607")
 * @param limit - Maximum number of articles to fetch (default: 6)
 * @returns Array of Medium articles
 */
export async function fetchMediumArticles(
  username: string,
  limit: number = 6
): Promise<MediumArticle[]> {
  try {
    // Medium RSS feed URL
    const rssUrl = `https://medium.com/feed/@${username}`

    // Use RSS2JSON API to convert RSS to JSON (free public service)
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`

    const response = await fetch(apiUrl, {
      next: { revalidate: 3600 } // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch Medium articles: ${response.statusText}`)
    }

    const data = await response.json()

    if (data.status !== "ok") {
      throw new Error("RSS feed parsing failed")
    }

    // Parse and transform the articles
    const articles: MediumArticle[] = data.items.slice(0, limit).map((item: any) => {
      // Extract thumbnail from content or description
      let thumbnail = item.thumbnail || ""
      if (!thumbnail && item.description) {
        const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/)
        if (imgMatch) {
          thumbnail = imgMatch[1]
        }
      }

      // Clean up description (remove HTML tags)
      const description = item.description
        ? item.description.replace(/<[^>]+>/g, "").substring(0, 200) + "..."
        : ""

      return {
        title: item.title,
        link: item.link || item.guid,
        pubDate: item.pubDate,
        thumbnail,
        description,
        categories: item.categories || [],
        author: item.author || username,
      }
    })

    return articles
  } catch (error) {
    console.error("Error fetching Medium articles:", error)
    return []
  }
}

/**
 * Format a date string for display
 * @param dateString - ISO date string
 * @returns Formatted date (e.g., "Jan 15, 2024")
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
