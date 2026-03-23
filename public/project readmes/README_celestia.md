<h1><b>CELESTIA</b></h1>
<h3>An AI-Powered Interactive 3D Globe for Exploring Our World</h3>

<p>
Exploring the world has never been this immersive.<br>
CELESTIA combines cutting-edge <b>WebGL 3D visualization</b> with <b>AI-powered storytelling</b> to transform how we discover locations. Drop markers, fly across continents, and unlock fascinating insights about any place on Earth — all in your browser.
</p>

<p>
  <img src="https://img.shields.io/badge/Status-Production-brightgreen?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge"/>
</p>

---

## Overview

CELESTIA answers a fundamental question about exploration:

> **"How can we make discovering the world more engaging, informative, and visually stunning?"**

Using modern web technologies and AI integration, this project:

- Renders an **interactive 3D Earth** with realistic textures and lighting
- Enables **intelligent location search** powered by OpenStreetMap geocoding
- Generates **AI-curated facts** using Groq's LLaMA 3.3 70B model
- Fetches **contextual videos** from Pexels for visual immersion
- Calculates **real-world flight paths** with animated arcs and planes
- Tracks **exploration statistics** (distance traveled, countries visited, places explored)

This project is **fully deployed**, **production-ready**, and designed with a **futuristic holographic aesthetic**.

---

## Key Features

| Category                    | Description                                                                 |
| --------------------------- | --------------------------------------------------------------------------- |
| **3D Visualization**        | WebGL-powered globe with Earth topology, night textures, auto-rotation     |
| **Smart Location Search**   | Nominatim geocoding with dropdown suggestions and coordinate support       |
| **AI Fact Generation**      | 6 AI-generated facts per location across curated categories                |
| **Video Integration**       | Auto-playing Pexels videos with multi-query search strategy                |
| **Flight Animation System** | Great-circle interpolated paths with animated planes and glowing arcs      |
| **Marker Management**       | Create, view, and clear location markers with persistent state             |
| **Explorer Stats**          | Distance tracking (Haversine formula), country counting, place tallying    |
| **Holographic UI**          | Glassmorphism cards with scanline effects and cyan/blue theme              |

---

## Live Demo

<p>
<a href="https://celestia-gl.vercel.app">
  <img src="https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel" />
</a>
</p>

**Try it yourself** — Search "Tokyo", "Grand Canyon", or "Santorini" and start exploring!

---

## Application Architecture

<table>
<tr>
<td width="50%" valign="top">

### **Frontend Stack**
- Next.js 14 (App Router)
- React 18 + TypeScript 5
- react-globe.gl (Three.js wrapper)
- Tailwind CSS v4
- shadcn/ui components

</td>
<td width="50%" valign="top">

### **Backend & APIs**
- Next.js API Routes (Node.js)
- Groq AI (LLaMA 3.3 70B)
- Pexels Video API
- Nominatim Geocoding
- Vercel Analytics

</td>
</tr>

<tr>
<td width="50%" valign="top">

### **3D Graphics Engine**
- Three.js for WebGL rendering
- Custom Earth textures (day/night)
- Dynamic marker sprites
- Animated flight arcs (PathMaterial)
- Auto-rotation with manual override

</td>
<td width="50%" valign="top">

### **AI & Content System**
- **Fact Categories**:
  Famous For, Nearby Spots, Cultural Heritage,
  Hidden Secrets, Record Breakers, Local Vibes
- **Video Search**: Multi-query strategy with fallbacks
- **Geocoding**: Forward search + reverse lookup
- **Narration**: Text-to-speech ready

</td>
</tr>
</table>

---

## Feature Breakdown

### 🌍 **Interactive 3D Globe**

- **Realistic Earth Rendering**: Day/night textures with topology map overlay
- **Auto-Rotation**: Continuous gentle spin with pause-on-interaction
- **Manual Control**: Click-and-drag orbital controls
- **Responsive Design**: Adapts to all screen sizes

### 🔍 **Smart Location Search**

- **Geocoding Engine**: Powered by OpenStreetMap Nominatim
- **Dropdown Results**: Real-time search suggestions with coordinates
- **Global Coverage**: Search cities, landmarks, addresses, or regions
- **Debounced Input**: Optimized API calls with 300ms delay

### 🤖 **AI-Powered Facts**

Each location receives **6 AI-generated facts** across categories:

| Category            | Example Fact                                              |
| ------------------- | --------------------------------------------------------- |
| **Famous For**      | "Home to the world's tallest building, Burj Khalifa"     |
| **Famous Spots**    | "Visit the Dubai Mall, Palm Jumeirah, and Gold Souk"     |
| **Cultural Heritage** | "Traditional Emirati coffee ceremonies and falconry"    |
| **Hidden Secrets**  | "The sunken village of Al Madam buried in desert sands"  |
| **Record Breakers** | "Hosts the world's largest choreographed fountain"       |
| **Local Vibes**     | "Friday brunches are a cultural phenomenon"              |

### 🎥 **Contextual Video Gallery**

- **Multi-Query Search**: Combines location name, country, and "travel" keywords
- **Quality Filtering**: HD/4K videos preferred
- **Auto-Play**: Seamless video playback in holographic card
- **Fallback Strategy**: Ensures videos even for remote locations

### ✈️ **Flight Animation System**

- **Great-Circle Routes**: Calculates shortest path over spherical Earth using `d3-geo`
- **Animated Planes**: SVG aircraft sprites follow arc paths
- **Glowing Trails**: Cyan arc lines with fade-out effects
- **Distance Calculation**: Haversine formula (accurate to ~0.1 km)
- **Multi-Marker Support**: Links consecutive markers in exploration order

### 📊 **Explorer Statistics**

Track your journey in real-time:

- **Places Explored**: Total markers dropped
- **Countries Visited**: Unique country count
- **Distance Traveled**: Cumulative flight distance in kilometers

---

## Project Structure

```
Celestia-gl/
├── app/
│   ├── api/
│   │   ├── facts/route.ts       # Groq AI fact generation
│   │   ├── videos/route.ts      # Pexels video fetching
│   │   ├── geocode/route.ts     # Nominatim search
│   │   └── narrate/route.ts     # TTS integration
│   ├── layout.tsx               # Root layout + metadata
│   ├── page.tsx                 # Main application page
│   └── globals.css              # Global styles + animations
├── components/
│   ├── globe.tsx                # 3D globe + flight logic
│   ├── hologram-card.tsx        # Discovery card UI
│   ├── search-bar.tsx           # Location search
│   ├── mascot-narrator.tsx      # AI narrator character
│   └── ui/                      # shadcn/ui components
├── hooks/
│   └── use-markers.ts           # Marker state management
├── lib/
│   ├── types.ts                 # TypeScript definitions
│   ├── api.ts                   # API client functions
│   └── utils.ts                 # Utility helpers
├── public/
│   ├── textures/                # Earth textures (8K resolution)
│   └── mascot/                  # Character assets
└── package.json
```

---

## Setup & Installation

### Prerequisites

- Node.js 18+ or pnpm/npm
- Pexels API Key ([Get it free](https://www.pexels.com/api/))
- Groq API Key (configured via Vercel integration)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/celestia-gl.git
   cd celestia-gl
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure Environment Variables**

   Create a `.env.local` file:
   ```env
   GROQ_API_KEY=your_groq_api_key
   PEXELS_API_KEY=your_pexels_api_key
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Open in Browser**
   ```
   http://localhost:3000
   ```

---

## Usage Guide

### Basic Workflow

1. **Search** → Enter any location in the search bar
2. **Select** → Click a result to drop a marker on the globe
3. **Explore** → Click the marker to open the holographic discovery card
4. **Discover** → Browse AI facts and watch auto-playing videos
5. **Travel** → Add more markers to see flight animations and distance tracking

### Advanced Features

- **Clear Markers**: Remove all markers to start fresh
- **Manual Rotation**: Click and drag to control globe orientation
- **Fact Navigation**: Use arrow buttons to browse through fact cards
- **Video Controls**: Videos auto-play but can be paused/skipped

---

## API Integration Details

| API           | Purpose                  | Rate Limit       | Cost       |
| ------------- | ------------------------ | ---------------- | ---------- |
| **Groq AI**   | Fact generation          | 30 req/min (free)| Free tier  |
| **Pexels**    | Video content            | 200 req/hour     | Free       |
| **Nominatim** | Geocoding                | 1 req/sec        | Free (OSM) |

### API Response Formats

**Facts API** (`/api/facts`)
```json
{
  "facts": [
    { "category": "Famous For", "text": "...", "emoji": "🏆" },
    { "category": "Famous Spots Nearby", "text": "...", "emoji": "📍" }
  ]
}
```

**Videos API** (`/api/videos`)
```json
{
  "videos": [
    {
      "id": 123456,
      "url": "https://...",
      "image": "https://...",
      "duration": 30
    }
  ]
}
```

---

## Tech Stack

<p>
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" height="50" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" height="50" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" height="50" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="50" />

<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" height="50" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg" height="50" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg" height="50" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" height="50" />
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" height="50" />
</p>

### Key Dependencies

| Package            | Purpose                             | Version   |
| ------------------ | ----------------------------------- | --------- |
| `next`             | React framework                     | 14.2.16   |
| `react-globe.gl`   | 3D globe visualization              | latest    |
| `three`            | WebGL library                       | latest    |
| `tailwindcss`      | Utility-first CSS                   | 4.1.9     |
| `@radix-ui/*`      | Accessible UI components            | latest    |
| `d3-geo`           | Geographic projections              | latest    |
| `lucide-react`     | Icon library                        | 0.454.0   |
| `zod`              | Schema validation                   | 3.25.67   |

---

## Performance Metrics

### Load Times (Production)

| Metric                  | Value     |
| ----------------------- | --------- |
| **First Contentful Paint** | ~1.2s  |
| **Time to Interactive**    | ~2.5s  |
| **Total Bundle Size**      | ~450 KB (gzipped) |
| **Globe Load Time**        | ~800ms |

### Optimization Strategies

- **Code Splitting**: Dynamic imports for 3D components
- **Image Optimization**: Next.js Image component
- **API Caching**: 15-minute cache for geocoding results
- **Lazy Loading**: Videos and textures load on-demand
- **Edge Functions**: API routes deployed to Vercel Edge

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Connect Repository**
   ```bash
   vercel --prod
   ```

2. **Configure Environment Variables** in Vercel Dashboard:
   - `GROQ_API_KEY`
   - `PEXELS_API_KEY`

3. **Deploy**
   - Auto-deploys on `git push` to main branch
   - Preview deployments for PRs

### Manual Deployment

```bash
npm run build
npm run start
```

---

## Future Enhancements

- **Advanced Features**:
  - User accounts and saved exploration history
  - Social sharing of discovered locations
  - Collaborative exploration mode
  - AR/VR mode support

- **AI Improvements**:
  - Voice-activated search
  - Real-time narration with TTS
  - Personalized fact recommendations
  - Multi-language support

- **Visualization**:
  - Weather overlay visualization
  - Historical timeline mode
  - 3D landmark models
  - Satellite imagery integration

- **Technical**:
  - Offline PWA support
  - Mobile app (React Native)
  - GraphQL API layer
  - Real-time multiplayer exploration

---

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Acknowledgements

**APIs & Services:**
- [Groq](https://groq.com/) - Ultra-fast AI inference
- [Pexels](https://www.pexels.com/) - Free stock videos
- [OpenStreetMap](https://www.openstreetmap.org/) - Geocoding data

**Libraries:**
- [react-globe.gl](https://github.com/vasturiano/react-globe.gl) - WebGL globe visualization
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Vercel](https://vercel.com/) - Deployment platform

**Inspiration:**
This project combines the wonder of exploration with the power of modern web technologies to create an educational and visually stunning experience.

---

## License

MIT License - feel free to explore, modify, and build upon this project!

