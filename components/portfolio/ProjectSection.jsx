import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Strategic Price-Point Analysis and Margin Optimization",
    tagline: "Margin recovery and waste mitigation within the Dairy category",
    description: "An automated ETL pipeline to balance revenue recovery with community accessibility, identifying instances of Margin Erosion and Waste Accumulation.",
    tech: ["Google BigQuery", "Python", "SQL", "Tableau", "ETL"],
    github: "https://github.com/VishalLakshmiNarayanan/kroger_dairy_analysis",
    notion: "https://www.notion.so/Kroger-Strategic-Price-Point-Analysis-31cca9f49901804e8a89faea970dee4e?source=copy_link",
    category: "data analytics-margin optimization",
    writeup: [
      {
        heading: "Project Background",
        content: "The retail grocery sector operates on razor thin margins where profitability is dictated by the efficiency of inventory turnover and the precision of promotional discounting. This project addresses critical operational inefficiencies within the Dairy category at a high volume location in Tempe, Arizona. By architecting an automated ETL pipeline to ingest data from the Kroger Developer Products API, this analysis identifies instances of Margin Erosion, where high demand items are unnecessarily discounted and Waste Accumulation, where high stock items face spoilage risks due to static pricing. The project establishes a data driven framework to balance revenue recovery with community accessibility, specifically monitoring SNAP eligibility and wellness benchmarks."
      },
      {
        heading: "Executive Summary",
        content: "A comprehensive audit conducted via Google BigQuery reveals significant opportunities for margin recovery and waste mitigation. The analysis identified a stark 148.9% price premium ($7.79 vs. $3.13) between National Premium brands and Private Label alternatives in the one gallon milk segment. While the store maintains exceptional promotional integrity with 100% compliance in protecting margins for low stock items, the audit flagged several high stock SKUs at critical spoilage risk due to a lack of promotional triggers. Furthermore, the study confirms that 100% of high wellness staples remain priced under $2.20, successfully meeting the strategic goal of maintaining SNAP eligible accessibility for the local demographic."
      },
      {
        heading: "Stakeholders",
        content: [
          "Primary Stakeholder: Dairy Category Manager (Focus: Inventory Velocity and Category Margin)",
          "Secondary Stakeholders: Pricing Strategist and Inventory Planner (Focus: Discount Guardrails and Stock to Sales Alignment)"
        ]
      },
      {
        heading: "Data Architecture and Schema",
        content: "The technical foundation relies on a Star Schema designed to transform nested JSON API responses into high performance relational tables. This structure enables granular multi dimensional analysis across product attributes, pricing tiers, and inventory risk codes.",
        image: "/schema_dashboard/star_schema.png"
      },
      {
        heading: "Data Tables Overview",
        content: [
          "Fact Table (fact_pricing_inventory): Tracks base and sale prices, total shelf facings, and inventory risk codes.",
          "Dimension Tables: Includes dim_product (brand tier, SNAP status, wellness scores), dim_location (Store #124), and dim_date (temporal trends)."
        ]
      },
      {
        heading: "Technical Implementation Summary",
        content: [
          "Extraction and Loading: A Python based ETL engine (script_data_loader.py) handles OAuth2 authentication with the Kroger API, ingesting real time pricing and stock level markers.",
          "Data Warehousing: Data is staged and processed within Google BigQuery, utilizing SQL for complex transformations and roll up logic (such as aggregating shelf facings across multiple aisle locations).",
          "Audit Engine: Five SQL scripts automate the identification of margin erosion, spoilage alerts, and brand tier price gaps.",
          <span key="tableau">Visualization: Insights are surfaced via a <a href="https://public.tableau.com/views/kroger_dairy_analysis/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Tableau Dashboard</a> for real time stakeholder monitoring.</span>
        ]
      },
      {
        heading: "Key Insights and Recommendations",
        content: [
          <span key="1"><strong>1. Brand Premium and Organic Tax:</strong> Analysis reveals that premium brand name organic milk carries a 148.9% premium over Private Label alternatives. Recommendation: Implement a mid tier Value Organic promotional track.</span>,
          <span key="2"><strong>2. Margin Integrity and Recovery:</strong> The Margin_erosion.sql audit confirmed 100% compliance in protecting margins for items with Risk Code 1 (Low Stock). Recommendation: Maintain current automated guardrails.</span>,
          <span key="3"><strong>3. Spoilage Mitigation:</strong> Spoilage_alert.sql identified multiple SKUs with Risk Code 0 (High Stock) that are currently listed at full MSRP. Recommendation: Trigger immediate dynamic markdowns or Flash Sales for identified high stock SKUs.</span>,
          <span key="4"><strong>4. Wellness and Social Responsibility:</strong> 100% of core staples with wellness scores &gt;60 are priced below the $2.20 threshold. Recommendation: Use these metrics in corporate social responsibility reporting.</span>
        ],
        image: "/schema_dashboard/analysis_dashboard.png"
      },
      {
        heading: "Assumptions and Caveats",
        content: [
          "Inventory Accuracy: Inventory risk codes are derived from categorical API markers (HIGH/LOW/OUT_OF_STOCK) rather than exact unit counts.",
          "Data Snapshot: The analysis reflects a specific point in time data pull; intraday fluctuations in stock levels are not captured between refresh cycles.",
          "Attribution of Facings: Shelf facing counts assume adherence to the corporate planogram; any off shelf displays or end caps are not currently integrated into the facings audit."
        ]
      }
    ]
  },
  {
    title: "GCP E-Commerce Funnel Optimization",
    tagline: "Pinpointing where customers drop off and why",
    description: "A 5-stage conversion funnel built on BigQuery analyzing 2,300+ user events to surface stage-by-stage drop-offs and inform channel budget allocation.",
    tech: ["Google Cloud Platform", "BigQuery", "SQL", "Data Analysis"],
    github: "https://github.com/VishalLakshmiNarayanan/gcp-ecommerce-funnel-optimization",
    category: "data analytics-funnel optimization",
    writeup: [
      {
        heading: "Project Background",
        content: "Marketing efficiency is often lost when businesses focus on total traffic rather than conversion quality. This project was initiated to move beyond surface-level metrics and create a data-driven framework for understanding how different acquisition channels contribute to the bottom line. By mapping the end-to-end customer journey, the goal was to identify high-value channels and pinpoint specific friction points in the product experience where potential revenue was being lost.",
      },
      {
        heading: "Executive Summary",
        content: "This analysis engineered a full-funnel conversion model on Google Cloud Platform to track 2,300+ unique user events. The findings revealed a significant performance gap between acquisition channels, with Email converting nearly 5x more effectively than Social Media. By quantifying a Revenue per Visitor of $14.20, the project established a firm ceiling for Customer Acquisition Costs (CAC), leading to a strategic recommendation to reallocate 20% of the marketing budget toward higher-converting nurture streams.",
      },
      {
        heading: "Data Structure and Overview",
        content: [
          "Source: Raw user event logs processed and structured within Google BigQuery.",
          "Funnel Architecture: A 5-stage behavioral model comprising Awareness, Interest, Consideration, Intent, and Purchase.",
          "Volume: Analysis of 2,300+ granular events to ensure statistical significance across segments.",
          "Primary Metrics: Conversion Rate (CR) per stage, Drop-off Rate, Average Order Value (AOV), and Revenue per Visitor (RPV).",
        ],
      },
      {
        heading: "Stakeholders",
        content: [
          "Marketing Leadership: Requiring data to justify budget reallocation across channels.",
          "Product & UX Teams: Seeking evidence on where users disengage within the discovery interface.",
          "Finance & Growth: Needing a defensible Customer Acquisition Cost (CAC) framework based on RPV and AOV.",
        ],
      },
      {
        heading: "Key Insights",
        content: [
          "Channel Disparity: Email remains the primary growth driver with a 33% conversion rate, compared to 7% for Social Media, indicating that current social traffic is high-volume but low-intent.",
          "The Discovery Gap: The most significant user attrition occurs between the Interest and Consideration stages, suggesting that while users are attracted to the site, they struggle to find products that meet their specific needs.",
          "Unit Economics: With an AOV of $107.78 and an RPV of $14.20, the business now has a mathematical baseline to measure the profitability of paid acquisition campaigns.",
        ],
      },
      {
        heading: "Strategic Recommendations",
        content: [
          "Budget Reallocation: Shift 20% of underperforming Social Media spend into Email Nurture and Retargeting to capitalize on higher intent levels.",
          "UX Optimization: Conduct A/B testing on the transition from 'Interest' to 'Consideration'—specifically focusing on search filters and product discovery tools to reduce drop-off.",
          "Standardization: Adopt this funnel model as the permanent analytics template for all future product launches to ensure cross-campaign comparability.",
        ],
      },
      {
        heading: "Assumptions & Caveats",
        content: [
          "Attribution Logic: This model utilizes a last-click attribution framework; however, multi-touch attribution may reveal hidden value in Social Media as an awareness-building top-of-funnel driver.",
          "Seasonality: The data reflects a specific reporting window and does not account for seasonal fluctuations in consumer behavior or holiday-specific promotional spikes.",
          "Data Latency: RPV and CAC calculations are based on historical order values and should be refreshed quarterly to reflect changing market conditions.",
        ],
      },
    ],
  },
  {
    title: "Automobile Insurance Tail Risk Modeling",
    tagline: "Predicting catastrophic losses before they happen",
    description: "Predictive models trained on 69,000+ insurance claims using CVaR and LaR loss functions to quantify extreme-tail risk, improving over baseline by 10.25%.",
    tech: ["Python", "scikit-learn", "XGBoost", "NumPy", "Pandas", "Jupyter"],
    github: "https://github.com/VishalLakshmiNarayanan/Tail-Risk-Analysis",
    category: "data science-risk assessment",
    writeup: [
      {
        heading: "Project Background",
        content: "In the insurance industry, the primary threat to solvency is not the frequency of average claims, but the severity of catastrophic tail events. Standard machine learning models often optimize for global accuracy, which inadvertently smooths out the top 1% of losses that drive insolvency. This project focuses on shifting the modeling objective from average performance to Tail Coverage (TCR) and Conditional Value at Risk (CVaR) to ensure extreme insurance events are captured with statistical rigor.",
      },
      {
        heading: "Executive Summary",
        content: "An audit of traditional models confirmed a systemic underestimation of catastrophic losses. By developing a risk aware hybrid framework combining Quantile Regression and Loss at Risk (LaR) meta learners, this project achieved a 10.25% improvement in CVaR(95%) residuals and tripled the detection rate for extreme tail events. These results allow for more precise capital reserve allocation and significantly reduced tail risk exposure.",
      },
      {
        heading: "Data Structure and Overview",
        content: [
          "Source: Actuarial dataset containing 69,000+ policy year records from the Mendeley Automobile Insurance database.",
          "Target Variable: Total Cost of Claims (Severity), filtered for non zero claim histories.",
          "Features: High dimensional data including demographic profiles, vehicle specifications, and historical policy performance.",
          "Primary Metrics: Tail Coverage Ratio (TCR), Conditional Value at Risk (CVaR), and Extreme Tail MSE (99%+).",
        ],
      },
      {
        heading: "Stakeholders",
        content: [
          "Actuarial Teams: Requiring high precision modeling for tail events to set accurate premiums.",
          "Risk & Compliance (CROs): Needing statistically rigorous baselines for Solvency II alignment and stress testing.",
          "Underwriting: Seeking to identify and price high risk policies that traditional models treat as statistical noise.",
        ],
      },
      {
        heading: "Key Insights",
        content: [
          "Standard Model Failure: Baseline models achieved high global accuracy but consistently underestimated catastrophic claims, leading to potential under pricing of high risk premiums.",
          "Meta Learning Advantage: Prioritizing feature sets associated with high severity events improved the Tail Coverage Ratio at the 95th percentile from 0.165 to 0.306.",
          "Detection Efficiency: Detection of catastrophic claims at the 95% threshold improved from 0.83% to 2.47%, allowing for proactive risk management of the most expensive 1% of claims.",
        ],
      },
      {
        heading: "Strategic Recommendations",
        content: [
          "Hybrid Loss Functions: Transition from standard loss functions to a blended approach that prevents high impact claims from being diluted during training.",
          "Capital Reserve Calibration: Utilize the improved CVaR residuals to adjust IBNR (Incurred But Not Reported) reserves, enabling more capital efficient allocation.",
          "Catastrophe Stress Testing: Integrate Extreme Tail MSE metrics into monthly risk reporting to establish a data driven worst case loss baseline.",
        ],
      },
      {
        heading: "Assumptions & Caveats",
        content: [
          "Scope Limitation: This framework focuses exclusively on claim severity and should be paired with a frequency model for a full risk view.",
          "Market Stationarity: The model assumes that the drivers of catastrophic loss remain consistent with historical patterns captured in the dataset.",
          "Macro Factors: The analysis does not account for external shocks such as legal changes or sudden inflationary shifts that could impact future claim costs.",
        ],
      },
    ],
  },
];

function ProjectCard({ project, index, onOpen }) {
  const cardRef = useRef(null);
  const [glow, setGlow] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGlow((p) => ({ ...p, opacity: 0 }))}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute rounded-full transition-opacity duration-500"
        style={{
          width: 360,
          height: 360,
          left: glow.x - 180,
          top: glow.y - 180,
          opacity: glow.opacity,
          background: "radial-gradient(circle, rgba(245,170,60,0.14) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />

      {/* Hover border highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(135deg, rgba(245,170,60,0.07), transparent 55%)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 p-7 flex flex-col h-full">
        {/* Top: category badge */}
        <div className="flex items-center justify-between mb-5">
          <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            {project.category?.replace("-", " / ")}
          </span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
            Featured
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2 leading-snug">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs text-primary/70 italic mb-4">{project.tagline}</p>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-7">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2.5 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-5 border-t border-white/6">
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={13} />
                Source
              </a>
            )}
            {project.notion && (
              <a
                href={project.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={13} />
                Notion
              </a>
            )}
          </div>
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
          >
            Read writeup
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured work</h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}