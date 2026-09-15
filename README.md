# RE:MEMBER — AI Disaster Institutional Memory Platform

> *"We don't just respond to disasters. We learn from them."*

![RE:MEMBER Banner](https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=1400&q=80)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Google Gen AI](https://img.shields.io/badge/Gemini_3.7_Flash-Google_Gen_AI-4285F4?logo=google)](https://ai.google.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-4.21-000000?logo=express)](https://expressjs.com/)

---

## Overviewcces exhaustive after-action reviews, technical post-mortems, and commission inquiries. Yet across jurisdictions, these lessons remain trapped inside static PDF archives. When the next crisis strikes, the same roads submerge, the same basement hospital generators fail, and emergency responders are forced to reinvent emergency logistics under extreme duress.

**RE:MEMBER** solves this institutional amnesia. It is an **AI-powered institutional memory platform** built for disaster managers, emergency operations centers (EOCs), urban planners, and humanitarian coordinators. By converting unstructured historical incident reports into an active, queryable knowledge graph, RE:MEMBER provides real-time tactical pattern matching, counterfactual scenario simulations, and actionable preparedness intelligence.

---

## Core Modules & Capabilities

### 1. Executive Readiness Dashboard
- Real-time operational overview tracking active weather situations and regional risks.
- At-a-glance critical indicators: **Infrastructure Vulnerability Index**, **Applied Institutional Lessons**, and **Active Disaster Memory Nodes**.
- Rapid incident launchpads and high-priority tactical alerts.

### 2. Historical Disaster Archives
- Deep repository of landmark Indian hydrological and cyclonic disasters:
  - **2018 Kerala Great Monsoon Floods** (*Periyar & Pamba river dam cascade surge*)
  - **2015 Chennai Mega Inundation** (*Chembarambakkam release & MIOT hospital tragedy*)
  - **2019 Cyclone Fani** (*Odisha 1.4-million mass evacuation benchmark*)
  - **2005 Mumbai Cloudburst** (*Mithi river overflow & urban paralysis*)
  - **2021 Chamoli Flash Flood** (*Glacial lake outburst & tapovan hydro tunnel surge*)
- Detailed breakdowns covering root-cause failures, lifeline damages, evacuation metrics, successful interventions, and institutional policy changes.

### 3. Interactive Tactical Memory Map
- Geospatial canvas visualizing disaster strike zones, flood perimeters, and critical lifelines.
- Interactive layers highlighting:
  - Compromised bridges, highways, and causeways
  - Critical hospitals with backup power vulnerabilities
  - Operational multi-purpose emergency shelters (MPCS)
  - Emergency staging grounds and rescue flotilla access corridors

### 4. AI Report Ingestion & Analyzer
- Ingests raw incident logs, situational reports (SITREPs), and after-action reviews.
- Utilizes **Gemini 3.7 Flash** (with instant heuristic fallback when offline) to automatically extract:
  - Structured disaster taxonomy, severity, and casualty impact
  - Granular chronological timeline of cascading events
  - Infrastructure damage costs and downtime estimates
  - Root-cause institutional failures vs. successful civilian/military interventions
  - Concrete policy directives for emergency standard operating procedures (SOPs)

### 5. Historical Pattern Matching Engine
- Ingests live or hypothetical field variables (rainfall intensity in mm/h, river stage surge, terrain classification, and vulnerable assets).
- Correlates telemetry against decades of institutional disaster data to calculate similarity indices.
- Projects **critical risk windows** (e.g., *T+2h: Arterial bridge overtopping; T+4h: Hospital basement generator flood risk*).
- Delivers phased tactical action plans across **Immediate**, **Short-Term**, and **Sustained** horizons.

### 6. Chronological Disaster Replay
- Scrubbable, hour-by-hour visual timeline of historical crises.
- Flags **pivotal failure nodes** (e.g., midnight dam sluice openings, power substation submergence) alongside **breakthrough interventions** (e.g., civilian fishermen flotilla mobilizations, early siren warnings).

### 7. What-If Counterfactual Simulator
- Allows disaster planners and policymakers to run counterfactual hypotheses against past events:
  - *"What if dynamic reservoir rule curves were enacted 48 hours earlier?"*
  - *"What if critical care hospital generators were elevated to rooftops?"*
- Computes projected outcomes: **quantified lives saved**, **economic damage averted**, and **systemic cascading failures prevented**.

### 8. AI Cross-Disaster Insights & Synthesis
- Synthesizes recurring systemic lessons across multiple crises:
  - **Healthcare Resilience**: Enforcing statutory rooftop electrical power standards.
  - **Hydrological Operations**: Replacing fixed water retention with forecast-linked dynamic rule curves.
  - **Community Logistics**: Institutionalizing civilian boat flotillas ("Coastal Army") for swift-water rooftop extractions.
  - **Communications**: Deploying decentralized satellite and amateur radio repeaters resistant to grid collapse.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, TypeScript, Tailwind CSS v4, Motion, Lucide React |
| **Build & Tooling** | Vite 6.2, ESBuild, TSX |
| **Backend & APIs** | Node.js, Express 4.21 |
| **AI / LLM Engine** | `@google/genai` (Gemini 3.7 Flash) + Built-in Heuristic Fallback Engine |
| **Hosting & Deployment** | Vercel Serverless Ready (`api/[...path].ts`, `vercel.json`) / Docker / Node server |

---

## Project Structure

```
REMEBER/
├── api/
│   └── [...path].ts           # Vercel serverless function entrypoint
├── public/
│   └── favicon.svg            # Custom RE:MEMBER tactical shield favicon
├── src/
│   ├── components/
│   │   ├── AiInsightsView.tsx         # Cross-disaster synthesis & institutional takeaways
│   │   ├── DashboardView.tsx          # Main situational dashboard
│   │   ├── DisasterHistoryView.tsx    # Archive viewer for historical disasters
│   │   ├── DisasterReplayView.tsx     # Chronological hour-by-hour disaster scrubber
│   │   ├── Header.tsx                 # Navigation bar, system status & active feeds
│   │   ├── LandingPage.tsx            # Hero presentation & platform overview
│   │   ├── MemoryMapView.tsx          # Geospatial intelligence & infrastructure layer
│   │   ├── PatternAnalysisView.tsx    # Real-time hydrological pattern matching
│   │   ├── ReportAnalyzerView.tsx     # AI report ingestion & structured parser
│   │   ├── TacticalMapCanvas.tsx      # Canvas renderer for tactical hazard mapping
│   │   └── WhatIfSimulationView.tsx   # Counterfactual simulation engine
│   ├── data/
│   │   └── disasterMemoryData.ts      # Comprehensive historical disaster dataset
│   ├── App.tsx                        # Main application container & tab router
│   ├── index.css                      # Global design system & Tailwind imports
│   ├── main.tsx                       # React application mount
│   └── types.ts                       # TypeScript interfaces & domain models
├── index.html                         # Application HTML entrypoint
├── metadata.json                      # AI Studio platform configuration
├── package.json                       # Dependencies & scripts
├── server.ts                          # Express API server & Gemini integration
├── tsconfig.json                      # TypeScript compiler options
├── vercel.json                        # Vercel routing & build config
└── vite.config.ts                     # Vite build configuration
```

---

## Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or later recommended)
- **npm** (or yarn / pnpm)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vrushank2808/REMEBER.git
   cd REMEBER
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

   Edit `.env` (or `.env.local`) to configure your Gemini API key:
   ```env
   # Required for live Gemini 3.7 Flash generation
   # (If omitted or invalid, RE:MEMBER seamlessly switches to its built-in heuristic intelligence engine)
   GEMINI_API_KEY="your_gemini_api_key_here"

   # Optional port (default: 3000)
   PORT=3000
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Available Scripts

- `npm run dev` — Starts the combined Express backend and Vite development server via `tsx server.ts`.
- `npm run build` — Builds the Vite client application into `dist/` and bundles `server.ts` into `dist/server.cjs` via esbuild.
- `npm run start` — Runs the compiled production server (`node dist/server.cjs`).
- `npm run preview` — Previews the production Vite build locally.
- `npm run lint` — Runs TypeScript type-checking (`tsc --noEmit`).

---

## API Endpoints

The backend server (`server.ts`) exposes the following endpoints:

### 1. Ingest & Analyze Report
- **Route:** `POST /api/analyze-report`
- **Body:** `{ "reportText": "string" }`
- **Description:** Parses unstructured incident text or post-disaster SITREPs, returning structured JSON containing affected populations, timelines, infrastructure impacts, root causes, and lessons learned.

### 2. Historical Pattern Matching
- **Route:** `POST /api/pattern-match`
- **Body:** `{ "disasterType": "string", "location": "string", "rainfallRate": number, "riverWaterLevel": number, "terrainType": "string", "vulnerableInfrastructure": "string" }`
- **Description:** Matches current conditions against institutional records, predicting risk windows and recommending phased interventions.

### 3. What-If Counterfactual Simulation
- **Route:** `POST /api/what-if`
- **Body:** `{ "disasterId": "string", "hypothesisText": "string", "hoursAdvanceNotice": number }`
- **Description:** Simulates outcomes of alternate disaster management decisions and quantifies lives saved and damage reduction.

> **Note on Resiliency:** All API endpoints feature intelligent fallback engines. If no `GEMINI_API_KEY` is provided, the platform automatically serves verified disaster management heuristic evaluations without breaking user flows.

---

## Deployment

### Vercel
The project includes pre-configured [vercel.json](vercel.json) and [api/[...path].ts](api/[...path].ts) serverless adapters:
1. Connect your repository to Vercel.
2. In the Vercel project settings, set `GEMINI_API_KEY` as an environment variable.
3. Deploy directly — Vercel will automatically run `npm run build` and route both the frontend SPA and `/api/*` serverless routes.

### Node.js Production Server
```bash
npm run build
npm run start
```

---

## Contributing & Institutional Collaboration

Contributions to disaster datasets, new regional historical case studies, and enhanced tactical simulation algorithms are welcome. Please open an issue or submit a pull request.

---

## License

This project is open-source and available under the [MIT License](LICENSE).
