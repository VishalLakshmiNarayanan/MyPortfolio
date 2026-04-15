export const projectCategories = [
  {
    id: "data-analytics",
    label: "Data Analytics",
    description: "SQL-heavy audits, dashboarding, ETL, and operational decision support.",
  },
  {
    id: "data-science",
    label: "Data Science",
    description: "Predictive modeling, semantic ranking, and risk-aware machine learning.",
  },
  {
    id: "ai-applications",
    label: "AI Applications",
    description: "LLM-driven products focused on planning, education, healthcare, and simulation.",
  },
  {
    id: "automation-agents",
    label: "Automation & Agents",
    description: "Workflow automation and AI agents connected to external tools and services.",
  },
];

export const projects = [
  {
    title: "Strategic Price-Point Analysis and Margin Optimization",
    tagline: "Margin recovery and waste mitigation within the Dairy category",
    description:
      "An automated ETL pipeline to balance revenue recovery with community accessibility, identifying instances of margin erosion and waste accumulation.",
    tech: ["Google BigQuery", "Python", "SQL", "Tableau", "ETL"],
    github: "https://github.com/VishalLakshmiNarayanan/kroger_dairy_analysis",
    notion:
      "https://www.notion.so/Kroger-Strategic-Price-Point-Analysis-31cca9f49901804e8a89faea970dee4e?source=copy_link",
    group: "data-analytics",
    category: "Margin Optimization",
    writeup: [
      {
        heading: "Project Background",
        content:
          "This project addresses pricing and inventory inefficiencies in Kroger's dairy category at a high-volume Tempe location. The workflow ingests product, price, and stock data through the Kroger API, then transforms it into an analysis-ready warehouse model for pricing audits.",
      },
      {
        heading: "Executive Summary",
        content:
          "The audit surfaced strong opportunities for both revenue recovery and spoilage mitigation. It also confirmed that wellness-focused staples remained affordable for SNAP-sensitive shoppers, supporting both commercial and accessibility goals.",
      },
      {
        heading: "Stakeholders",
        content: [
          "Primary stakeholder: Dairy Category Manager focused on margin and inventory velocity.",
          "Secondary stakeholders: Pricing Strategy and Inventory Planning teams responsible for discount guardrails and sell-through alignment.",
        ],
      },
      {
        heading: "Data Architecture and Schema",
        content:
          "A star schema was designed to flatten nested Kroger API responses into fact and dimension tables that support analysis across product tiers, pricing states, and inventory risk codes.",
        image: "/schema_dashboard/star_schema.png",
      },
      {
        heading: "Technical Implementation Summary",
        content: [
          "Built a Python ETL flow for OAuth-authenticated extraction and loading into Google BigQuery.",
          "Used SQL audits to detect margin erosion, spoilage exposure, and brand-tier price gaps.",
          "Delivered decision-ready views in Tableau for ongoing monitoring by store stakeholders.",
        ],
      },
      {
        heading: "Key Insights and Recommendations",
        content: [
          "National premium brands carried a large price premium over private-label alternatives, creating room for a mid-tier value strategy.",
          "Low-stock items maintained strong promotion discipline, which protected margins effectively.",
          "High-stock SKUs without markdown triggers created spoilage risk and should move into automated flash-sale workflows.",
          "Wellness staples remained below affordability thresholds, enabling the category to support accessibility goals while preserving margin discipline.",
        ],
        image: "/schema_dashboard/analysis_dashboard.png",
      },
    ],
  },
  {
    title: "GCP E-Commerce Funnel Optimization",
    tagline: "Pinpointing where customers drop off and why",
    description:
      "A 5-stage conversion funnel built on BigQuery analyzing 2,300+ user events to surface stage-by-stage drop-offs and inform channel budget allocation.",
    tech: ["Google Cloud Platform", "BigQuery", "SQL", "Data Analysis"],
    github: "https://github.com/VishalLakshmiNarayanan/gcp-ecommerce-funnel-optimization",
    group: "data-analytics",
    category: "Funnel Optimization",
    writeup: [
      {
        heading: "Project Background",
        content:
          "The project reframed marketing analysis around conversion quality instead of traffic volume. The objective was to identify where users disengage, quantify revenue efficiency, and build a repeatable decision model for channel allocation.",
      },
      {
        heading: "Executive Summary",
        content:
          "The funnel model tracked 2,300+ events across a 5-stage journey and revealed that Email converted far more efficiently than Social Media. The resulting revenue-per-visitor baseline created a defensible ceiling for acquisition costs.",
      },
      {
        heading: "Data Structure and Overview",
        content: [
          "Raw event logs were structured in BigQuery into a five-stage funnel: Awareness, Interest, Consideration, Intent, and Purchase.",
          "Primary metrics included stage conversion, drop-off rate, average order value, and revenue per visitor.",
          "The model was designed to support cross-channel comparison and future launch benchmarking.",
        ],
      },
      {
        heading: "Key Insights",
        content: [
          "Email emerged as the strongest-performing acquisition source, with materially higher conversion than Social Media.",
          "The largest user loss occurred between Interest and Consideration, pointing to product discovery friction.",
          "The unit economics view established a practical CAC benchmark grounded in actual behavior, not assumptions.",
        ],
      },
      {
        heading: "Strategic Recommendations",
        content: [
          "Reallocate part of the underperforming Social budget into higher-intent nurture and retargeting channels.",
          "Run UX experiments on search, filtering, and discovery flows to improve the Interest-to-Consideration transition.",
          "Adopt the funnel as a standardized analytics framework for future campaigns and launches.",
        ],
      },
    ],
  },
  {
    title: "Tempe Urban Forest Analytics",
    tagline: "Microburst impact assessment and tree risk management",
    description:
      "An interactive geospatial dashboard mapping 40,000+ Tempe trees to surface storm-vulnerable corridors, environmental impact, and canopy risk trends.",
    tech: ["Python", "Streamlit", "GeoPandas", "Plotly", "Pandas"],
    github: "https://github.com/VishalLakshmiNarayanan/TempeMicroburst",
    group: "data-analytics",
    category: "Geospatial Dashboarding",
    writeup: [
      {
        heading: "Project Background",
        content:
          "This dashboard uses the City of Tempe's 2021 tree inventory to identify microburst-vulnerable zones and support municipal tree risk management. The goal was to connect raw geospatial inventory data with actionable planning insights.",
      },
      {
        heading: "Dataset and Scope",
        content: [
          "Mapped 40,000+ tree records with species, DBH, replacement value, carbon storage, runoff mitigation, and coordinates.",
          "Focused analysis on the Southern Ave and Kyrene Rd corridor associated with the 2021 microburst event.",
          "Used shapefile and CSV sources suitable for urban planning and emergency management workflows.",
        ],
      },
      {
        heading: "Dashboard Features",
        content: [
          "Interactive risk map with DBH-based low, medium, and high-risk markers.",
          "North-south trend analysis showing canopy size changes by latitude band.",
          "Summary metrics for total value, average diameter, and carbon impact.",
          "Focused microburst zone views for emergency preparedness planning.",
        ],
      },
      {
        heading: "Key Insights",
        content: [
          "Large mature trees represented the highest structural risk during severe wind events.",
          "The microburst corridor showed signs of canopy loss and concentration of vulnerable inventory.",
          "Replacement value and ecosystem benefits provided a financial and environmental case for targeted protection.",
        ],
      },
      {
        heading: "Practical Use Cases",
        content: [
          "Urban forestry departments can prioritize maintenance and replanting.",
          "Emergency teams can pre-position response planning around vulnerable zones.",
          "City planners can quantify the resilience and value of green infrastructure investments.",
        ],
      },
    ],
  },
  {
    title: "Automobile Insurance Tail Risk Modeling",
    tagline: "Predicting catastrophic losses before they happen",
    description:
      "Predictive models trained on 69,000+ insurance claims using CVaR and LaR loss functions to quantify extreme-tail risk, improving over baseline by 10.25%.",
    tech: ["Python", "scikit-learn", "XGBoost", "NumPy", "Pandas", "Jupyter"],
    github: "https://github.com/VishalLakshmiNarayanan/Tail-Risk-Analysis",
    group: "data-science",
    category: "Risk Modeling",
    writeup: [
      {
        heading: "Project Background",
        content:
          "Standard insurance models often optimize for average accuracy and miss the catastrophic losses that matter most for solvency. This project shifted model evaluation toward tail-aware metrics like CVaR and Tail Coverage Ratio.",
      },
      {
        heading: "Executive Summary",
        content:
          "A hybrid framework combining quantile regression and risk-aware meta-learning improved CVaR residuals by 10.25% and materially increased detection of extreme claim events compared with baseline models.",
      },
      {
        heading: "Data and Modeling Scope",
        content: [
          "Worked with 69,000+ automobile insurance policy-year records focused on claim severity.",
          "Used demographic, vehicle, and prior policy features to model high-cost outcomes.",
          "Measured performance through CVaR, Tail Coverage Ratio, and extreme-tail error metrics.",
        ],
      },
      {
        heading: "Key Insights",
        content: [
          "High global accuracy did not translate into reliable detection of catastrophic losses.",
          "Tail-focused training significantly improved coverage at the 95th percentile.",
          "The framework better supported reserve planning and high-risk premium calibration.",
        ],
      },
      {
        heading: "Strategic Recommendations",
        content: [
          "Adopt blended loss functions so catastrophic claims are not diluted during training.",
          "Use improved tail residuals to recalibrate reserve allocation and stress testing.",
          "Extend the approach with frequency modeling for a fuller actuarial view of risk.",
        ],
      },
    ],
  },
  {
    title: "Career Pulse",
    tagline: "Semantic resume-job matching with transparency scoring",
    description:
      "An AI-powered recruiting platform that combines LLM normalization, SBERT embeddings, and weighted scoring to rank candidates beyond keyword overlap.",
    tech: ["Python", "Streamlit", "Groq", "SBERT", "scikit-learn", "Plotly"],
    github: "https://github.com/VishalLakshmiNarayanan/Career-Pulse",
    group: "data-science",
    category: "Semantic Matching",
    writeup: [
      {
        heading: "Project Background",
        content:
          "Career Pulse was built to move recruiting beyond ATS keyword matching. It evaluates semantic alignment, transferable skills, and role fit through a transparent multi-factor scoring model.",
      },
      {
        heading: "Core Pipeline",
        content: [
          "Parses resumes across PDF, DOCX, and TXT formats with section-aware extraction.",
          "Uses Groq to normalize skills, seniority, and domain information into structured JSON.",
          "Builds SBERT embeddings for semantic comparison between resumes and job descriptions.",
          "Calculates a weighted transparency score across skills, experience, seniority, and domain fit.",
        ],
      },
      {
        heading: "Product Capabilities",
        content: [
          "Job seekers get match transparency, gap analysis, and optimized resume generation.",
          "Recruiters get ranked candidates, detailed score breakdowns, and CSV export.",
          "The dual-portal setup supports both application and hiring workflows within one system.",
        ],
      },
      {
        heading: "Why It Matters",
        content: [
          "Semantic similarity captures qualified candidates who do not mirror job-description wording exactly.",
          "Transparent weighting helps both sides understand why a match scored high or low.",
          "The resume generation layer turns the platform from analytics-only into a practical application workflow.",
        ],
      },
      {
        heading: "Scoring Logic",
        content: [
          "Skills contribute 50% of the score, experience 30%, seniority 10%, and domain/certifications 10%.",
          "The framework emphasizes technical capability first while still accounting for level and context alignment.",
        ],
      },
    ],
  },
  {
    title: "AGNOS AI",
    tagline: "Advanced 3D anatomical symptom mapping and AI guidance",
    description:
      "An interactive diagnostic visualization platform where users map symptoms onto a 3D body model to improve clarity, anatomical precision, and AI-assisted medical guidance.",
    tech: ["React", "Three.js", "React Three Fiber", "Claude", "Web Speech API"],
    github: "https://github.com/VishalLakshmiNarayanan/cbh",
    demo: "https://agnosai.vercel.app/",
    group: "ai-applications",
    category: "Health AI",
    writeup: [
      {
        heading: "Project Background",
        content:
          "AGNOS AI addresses the gap between what patients feel and how accurately they can describe it. The product makes spatial symptom mapping the primary interaction so the system starts from precise anatomical context instead of vague text descriptions.",
      },
      {
        heading: "Core Features",
        content: [
          "A 3D human model allows users to mark symptomatic regions directly on the body.",
          "The system identifies detailed anatomical zones and passes that context into an AI diagnostic layer.",
          "Users can toggle muscle and internal-structure layers for more detailed exploration.",
          "Text and speech responses make the experience accessible and more conversational.",
        ],
      },
      {
        heading: "Technical Architecture",
        content: [
          "Built with React, Three.js, React Three Fiber, and Drei for interactive 3D rendering.",
          "Uses Anthropic Claude for medically framed reasoning and response generation.",
          "Includes browser-native text-to-speech and PDF export for session summaries.",
        ],
      },
      {
        heading: "Ethical Guardrails",
        content: [
          "The project includes emergency-care escalation for potentially severe symptom patterns.",
          "It explicitly frames itself as an educational and visualization aid rather than a medical substitute.",
          "The architecture is designed to minimize storage of sensitive health data where possible.",
        ],
      },
    ],
  },
  {
    title: "The Shadow Committee",
    tagline: "Adversarial AI boardroom simulation for decision resilience",
    description:
      "A high-pressure simulation platform that generates skeptical AI personas from uploaded material and stress-tests business logic, composure, and stakeholder readiness.",
    tech: ["Next.js", "TypeScript", "Groq", "ElevenLabs", "Framer Motion"],
    github: "https://github.com/VishalLakshmiNarayanan/v0-founder-rpg",
    demo: "https://v0-founder-rpg.vercel.app/",
    group: "ai-applications",
    category: "Decision Simulation",
    writeup: [
      {
        heading: "Project Background",
        content:
          "The Shadow Committee was designed as a counterpoint to agreeable AI tools. Instead of validating ideas by default, it constructs the most dangerous stakeholder objections and forces users to defend their plans under pressure.",
      },
      {
        heading: "Core Innovation",
        content: [
          "Uploaded decks or briefs are adversarially ingested to identify the three most threatening stakeholder perspectives.",
          "Each generated persona receives domain-specific concerns, prompts, and confidence levels.",
          "The simulation measures decision resilience rather than generic chat quality.",
        ],
      },
      {
        heading: "Application Flow",
        content: [
          "Users upload a PDF and specify a meeting context such as a board review or investor pitch.",
          "The system assembles a context-aware committee and runs a turn-based cross-examination.",
          "Confidence levels, mood shifts, and verdict logic create visible pressure throughout the session.",
          "A final debrief summarizes strengths, unresolved concerns, and outcome classification.",
        ],
      },
      {
        heading: "Technical Architecture",
        content: [
          "Built on Next.js with API routes for briefing, questioning, evaluation, text-to-speech, and conclusion generation.",
          "Uses Groq for persona generation, scoring, and feedback synthesis.",
          "Supports voice synthesis with ElevenLabs and report generation with jsPDF.",
        ],
      },
    ],
  },
  {
    title: "SlideSage",
    tagline: "Instant teaching packs and animated explainer videos from raw notes",
    description:
      "An AI content transformation platform that converts lecture text into analogies, diagrams, one-liners, and browser-rendered explainer videos.",
    tech: ["Next.js", "TypeScript", "Groq", "Canvas API", "Web Speech API"],
    github: "https://github.com/VishalLakshmiNarayanan/SlideSage-v3",
    demo: "https://slidesageai.vercel.app",
    group: "ai-applications",
    category: "EdTech AI",
    writeup: [
      {
        heading: "Project Background",
        content:
          "SlideSage helps educators turn dense source material into engaging teaching content without spending hours building slides or videos. One input produces multiple learning formats designed for fast comprehension.",
      },
      {
        heading: "Generation Pipeline",
        content: [
          "Accepts TXT, PDF, DOC, and DOCX inputs through a drag-and-drop or text interface.",
          "Uses Groq LLaMA 3.3 70B to generate an analogy, step-by-step diagram, one-liner, and explainer script.",
          "Validates structured outputs and applies retry logic when needed.",
          "Synthesizes 30 to 60 second videos directly in the browser using Canvas and browser TTS.",
        ],
      },
      {
        heading: "Product Features",
        content: [
          "Client-side video rendering avoids heavy server-side media generation.",
          "Pexels backgrounds and character-based dialogue make the output feel polished rather than static.",
          "The workflow supports both text-based and media-based exports for classroom use.",
        ],
      },
      {
        heading: "Engineering Notes",
        content: [
          "Implements rate limiting to manage API cost and abuse risk.",
          "Uses TypeScript and schema validation to keep AI responses safe and structured.",
          "Balances AI generation speed with browser-native rendering for an end-to-end education tool.",
        ],
      },
    ],
  },
  {
    title: "AI Travel Itinerary Planner",
    tagline: "LLM-powered trip planning with live weather and route optimization",
    description:
      "A Streamlit travel planning system that generates personalized itineraries, estimates costs, and builds route-ready travel plans from a single conversation.",
    tech: ["Python", "Streamlit", "Groq", "Google Maps", "Weather APIs"],
    github: "https://github.com/VishalLakshmiNarayanan/AI-Travel-Itenary-Planner",
    group: "ai-applications",
    category: "Travel Planning",
    writeup: [
      {
        heading: "Project Background",
        content:
          "This project turns trip planning into a single AI-guided workflow. Instead of piecing together research across multiple tools, users provide preferences once and receive a structured multi-day itinerary.",
      },
      {
        heading: "Core Features",
        content: [
          "Generates day-by-day travel plans with a destination, duration, and trip focus.",
          "Pulls live weather forecasts and integrates them into daily planning.",
          "Estimates per-location and total activity costs.",
          "Creates Google Maps routing links and pre-filled flight search paths.",
          "Supports natural-language refinement such as changing pace, themes, or stops.",
        ],
      },
      {
        heading: "Technical Architecture",
        content: [
          "Uses Groq-hosted Meta LLaMA 4 Scout for itinerary generation and refinement.",
          "Adds geolocation, weather lookup, and route-building logic around the LLM layer.",
          "Delivers the full planning flow through a Streamlit interface designed for direct user interaction.",
        ],
      },
      {
        heading: "Practical Value",
        content: [
          "Compresses hours of travel research into one guided workflow.",
          "Keeps plans realistic by combining AI output with weather and routing context.",
          "Makes itinerary revision conversational rather than forcing manual rebuilds.",
        ],
      },
    ],
  },
  {
    title: "CELESTIA",
    tagline: "An AI-powered interactive 3D globe for exploring the world",
    description:
      "A WebGL-based exploration platform combining a 3D Earth, AI-generated facts, contextual media, and flight-path animations into a futuristic discovery experience.",
    tech: ["Next.js", "TypeScript", "Three.js", "Groq", "Pexels"],
    github: "https://github.com/VishalLakshmiNarayanan/Celestia-gl",
    demo: "https://aicelestia.vercel.app/",
    group: "ai-applications",
    category: "Immersive Discovery",
    writeup: [
      {
        heading: "Project Background",
        content:
          "CELESTIA was built to make geographic exploration more immersive, informative, and visually memorable. The core experience combines search, motion, AI facts, and media into a single browser-based product.",
      },
      {
        heading: "Core Features",
        content: [
          "Renders a realistic interactive 3D globe with markers, night textures, and flight arcs.",
          "Uses OpenStreetMap geocoding for global location search and marker placement.",
          "Generates six AI-curated facts per location using Groq.",
          "Fetches contextual videos from Pexels to deepen the discovery experience.",
          "Tracks exploration metrics such as distance traveled and countries visited.",
        ],
      },
      {
        heading: "Architecture",
        content: [
          "Built with Next.js, React, TypeScript, and react-globe.gl on top of Three.js.",
          "Uses API routes for facts, videos, geocoding, and narration support.",
          "Combines a holographic UI treatment with spatial exploration mechanics.",
        ],
      },
      {
        heading: "Product Outcome",
        content: [
          "The project turns a static map interaction into an exploratory storytelling tool.",
          "It demonstrates how AI-generated content can complement, rather than replace, strong visual interfaces.",
        ],
      },
    ],
  },
  {
    title: "NPA Digital Twin",
    tagline: "High-fidelity remote monitoring dashboard for industrial operations",
    description:
      "An industrial digital twin platform combining real-time telemetry, 3D spatial context, and collaborative AI to turn complex plant data into actionable maintenance intelligence.",
    tech: ["Next.js 16", "Three.js", "React Three Fiber", "Supabase", "Groq", "Vapi"],
    github: "https://github.com/VishalLakshmiNarayanan/cognite-aznn",
    demo: "https://cognite-aznn.vercel.app/",
    group: "ai-applications",
    category: "Industrial Digital Twin",
    writeup: [
      {
        heading: "Project Overview",
        content:
          "The NPA (North Plant Area) Digital Twin is a remote monitoring and diagnostic platform built for oil and gas operations where telemetry alone is not enough. It combines live sensor context, 3D asset visualization, and AI-guided collaboration to help operators diagnose faults faster and coordinate maintenance with more confidence.",
      },
      {
        heading: "Operational Focus",
        content: [
          "Physical domain transparency through real-time 3D visualization and unified P&ID cross-referencing.",
          "Collaborative intelligence through autonomous Voice-AI intervention and multimodal assistant workflows.",
          "Stateful insight through persistent memory of historical failures, maintenance logs, and operational context.",
        ],
      },
      {
        heading: "Core Technical Features",
        content: [
          "Built a physics-informed 3D environment with Three.js and React Three Fiber for asset-level inspection, valve-state visualization, and pressure-aware monitoring.",
          "Integrated Vapi for outbound fault-response calls that brief field personnel, summarize current plant state, and propose a plan of action.",
          "Used Groq-hosted Llama 3.3 70B with Supermemory to deliver low-latency assistant workflows with persistent operational context.",
          "Implemented citation-aware AI behavior that cross-references SOPs, manuals, and P&IDs before surfacing recommendations.",
        ],
      },
      {
        heading: "Data Engineering and Infrastructure",
        content: [
          "Supabase and PostgreSQL store sensor metadata, maintenance history, and application state.",
          "The platform is designed for efficient historical telemetry replay and timeseries inspection.",
          "Next.js 16 powers the frontend architecture with a production-oriented app structure for fast interactive workflows.",
        ],
      },
      {
        heading: "Safety and Auditability",
        content: [
          "Enforces MAWP guardrails at 75 barg across UI logic and AI-assisted decision flows.",
          "Maps recovery guidance directly to SOP-MAINT-001 and SOP-SAFE-001 for traceable operator workflows.",
          "Requires transparent autonomous alerts with documented grounding and source-aware behavior.",
        ],
      },
      {
        heading: "Hackathon Outcome",
        content:
          "Built as Team Tokyo's winning entry for the HackAZona Cognite Track, the project focused on making large-scale industrial sensor data more usable by transforming it into an interactive 3D operational dashboard.",
      },
    ],
  },
  {
    title: "Culture Bites",
    tagline: "A culture-first social dining marketplace connecting guests, hosts, and cooks",
    description:
      "A three-sided full-stack platform for cultural dining experiences with AI recommendations, event collaboration, and real-time seat management.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Groq"],
    github: "https://github.com/VishalLakshmiNarayanan/CultureBites",
    group: "ai-applications",
    category: "Marketplace Platform",
    writeup: [
      {
        heading: "Project Background",
        content:
          "Culture Bites is a marketplace designed around cultural exchange through food. It connects guests, hosts, and cooks in a single platform where events, spaces, and culinary stories become part of the same product flow.",
      },
      {
        heading: "Marketplace Design",
        content: [
          "Guests discover and request seats at cultural dining events.",
          "Hosts create venue profiles and manage space availability.",
          "Cooks share specialties, stories, and request collaboration opportunities.",
          "The platform supports two-way host-cook partnership workflows before an event is even published.",
        ],
      },
      {
        heading: "Product Features",
        content: [
          "Role-based dashboards tailor the experience for each user type.",
          "AI recommendations personalize event discovery using location and preferences.",
          "Real-time seat tracking and approval flows help hosts manage attendance cleanly.",
          "Profile creation uses guided multi-step wizards to reduce onboarding friction.",
        ],
      },
      {
        heading: "Technical Architecture",
        content: [
          "Built with Next.js App Router, TypeScript, Tailwind, Supabase, and Groq.",
          "Uses a structured database model for events, hosts, cooks, requests, and bookings.",
          "Combines production-grade auth, validation, media handling, and dashboard flows into one cohesive system.",
        ],
      },
    ],
  },
  {
    title: "MAILY",
    tagline: "AI-powered email and calendar management agent in n8n",
    description:
      "A workflow-based assistant that uses natural language to send emails, schedule events, and look up contacts across Gmail, Google Calendar, and Google Sheets.",
    tech: ["n8n", "LangChain", "Groq", "Gmail API", "Google Calendar API"],
    github: "https://github.com/VishalLakshmiNarayanan/n8n",
    group: "automation-agents",
    category: "Workflow Agent",
    writeup: [
      {
        heading: "Project Background",
        content:
          "MAILY was built as a natural-language productivity agent for daily communication tasks. Instead of switching between mail, calendar, and contacts, the user interacts with one orchestrated workflow.",
      },
      {
        heading: "Workflow Capabilities",
        content: [
          "Sends emails through Gmail with AI-generated or user-directed content.",
          "Creates Google Calendar events with attendees and timing extracted from conversation.",
          "Looks up contacts from a Google Sheets contact database before taking action.",
          "Maintains short-term memory during a conversation to support multi-step requests.",
        ],
      },
      {
        heading: "Architecture",
        content: [
          "The workflow is built in n8n with a chat trigger, LangChain agent node, Groq model, and Google tool integrations.",
          "A validation rule forces contact lookup before outbound email or scheduling actions.",
          "The setup keeps orchestration visual and easy to extend with additional tools.",
        ],
      },
      {
        heading: "Why It Matters",
        content: [
          "This project demonstrates practical AI agent design around constrained tool use and explicit guardrails.",
          "It is useful as both an end-user automation system and a reference architecture for LLM-powered workflow tools.",
        ],
      },
    ],
  },
];
