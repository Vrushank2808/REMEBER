import React from 'react';
import {
  ShieldAlert,
  ArrowRight,
  Database,
  Cpu,
  RotateCcw,
  Sparkles,
  MapPin,
  Building2,
  Navigation,
  FileCheck,
  Award,
  Layers,
  ChevronRight,
  Flame,
  Activity,
  Archive,
} from 'lucide-react';
import { ActiveTab } from './Header';

interface LandingPageProps {
  onNavigate: (tab: ActiveTab) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-4">
      {/* 1. Hero Section */}
      <section className="relative rounded-2xl bg-white/5 border border-white/10 p-8 sm:p-12 overflow-hidden backdrop-blur-md">
        {/* Background Dot Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Ambient Subtle Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono tracking-wider uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            AI Disaster Institutional Memory Platform
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
              RE:MEMBER
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-orange-400 tracking-tight">
              &ldquo;We don&apos;t just respond to disasters. We learn from them.&rdquo;
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            Every disaster generates after-action reports that get filed away in PDFs and forgotten.
            When the next crisis strikes, the same roads flood, the same hospital generators fail, and the same mistakes repeat.
            <strong> RE:MEMBER</strong> transforms institutional reports into a structured, queryable AI knowledge graph for real-time tactical decision support.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-red-900/40 flex items-center gap-2 uppercase tracking-wider group active:scale-95"
            >
              <span>Explore Disaster Memory</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('report-analyzer')}
              className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-slate-200 font-bold rounded-xl text-sm transition-all border border-white/10 flex items-center gap-2 uppercase tracking-wider"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>Ingest Incident Report</span>
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div>
              <div className="text-2xl font-black text-white font-mono">14.2k</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                Historical Events Parsed
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-orange-400 font-mono">87.4%</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                Pattern Match Accuracy
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-400 font-mono">35%</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                Average Damage Reduction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Problem vs The Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* The Problem */}
        <div className="p-6 rounded-xl bg-white/5 border border-red-500/20 space-y-4">
          <div className="flex items-center gap-2 text-red-400">
            <span className="text-xs font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-red-500/20 border border-red-500/30">
              The Critical Problem
            </span>
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-tight">
            Institutional Amnesia Costs Lives & Billions
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Basement Generators:</strong> Hospital emergency generators placed in sub-grade basements flood repeatedly across multi-year events.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Delayed Road Closures:</strong> Low-lying causeways are closed 30 minutes too late, stranding commuters and blocking ambulances.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>Lost Lessons:</strong> Hard-won after-action insights vanish when municipal leadership transitions.</span>
            </li>
          </ul>
        </div>

        {/* The Solution */}
        <div className="p-6 rounded-xl bg-white/5 border border-emerald-500/20 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <span className="text-xs font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/30">
              The RE:MEMBER Solution
            </span>
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-tight">
            Active Institutional Memory at the Speed of Crisis
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Automated Ingestion:</strong> Ingests post-disaster reviews, SITREPs, and debriefs into structured geospatial knowledge.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Live Correlation:</strong> Real-time hydrological conditions are matched against historical precedents with similarity scores.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Counterfactual Simulation:</strong> Simulates &ldquo;What-If&rdquo; interventions to optimize pre-emptive evacuation timing.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Core System Modules Feature Grid */}
      <section className="space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
            Complete Operational Suite
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
            6 Specialized Intelligence Engines
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Designed for disaster management authorities, municipal emergency teams, hospitals, and civil defense agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Tactical Dashboard */}
          <div
            onClick={() => onNavigate('dashboard')}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <Activity className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
              Tactical Command Dashboard
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Real-time monitoring with historical similarity scoring, interactive tactical maps, and AI action checklists.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-orange-400 font-semibold group-hover:underline">
              <span>Launch Dashboard</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 2: Disaster History Archive */}
          <div
            onClick={() => onNavigate('history')}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Archive className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
              Disaster History & Lessons Archive
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deep case studies across flash floods, coastal storms, and typhoons with categorized root-cause failure points.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-orange-400 font-semibold group-hover:underline">
              <span>Browse Knowledge Base</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 3: Memory Map */}
          <div
            onClick={() => onNavigate('memory-map')}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
              Tactical Memory Map
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Color-coded GIS markers correlating past hospital outages, severed roads, and dynamic flood stage inundation.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-orange-400 font-semibold group-hover:underline">
              <span>Inspect GIS Matrix</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 4: AI Report Analyzer */}
          <div
            onClick={() => onNavigate('report-analyzer')}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
              AI Incident Report Analyzer
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Upload raw SITREPs or after-action reports to extract structured infrastructure damage, timelines, and SOPs with Gemini AI.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-orange-400 font-semibold group-hover:underline">
              <span>Ingest Incident Reports</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 5: Pattern Analysis */}
          <div
            onClick={() => onNavigate('pattern-analysis')}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
              Pattern Correlation Engine
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Input active precipitation and river levels to receive similarity ratings, anticipated risk windows, and 3-phase action plans.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-orange-400 font-semibold group-hover:underline">
              <span>Match Active Patterns</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Card 6: Disaster Replay & What-If */}
          <div
            onClick={() => onNavigate('replay')}
            className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <RotateCcw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white uppercase group-hover:text-orange-400 transition-colors">
              Replay & What-If Simulation
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Scrub hour-by-hour through historical crises and simulate counterfactual decisions to measure lives saved.
            </p>
            <div className="pt-2 flex items-center gap-1 text-xs text-orange-400 font-semibold group-hover:underline">
              <span>Run Counterfactual Sim</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. How It Works (4 Steps) */}
      <section className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest">
            End-to-End Workflow
          </span>
          <h2 className="text-2xl font-black text-white tracking-tight uppercase">
            How RE:MEMBER Operates
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-[#0a0f18] border border-white/10 space-y-2">
            <span className="text-xl font-black text-red-500 font-mono">01</span>
            <h4 className="text-xs font-bold text-white uppercase">Ingest & Structure</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Gemini parses unstructured PDF/TXT disaster debriefs, extracting infrastructure damage, failure causes, and timelines.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0f18] border border-white/10 space-y-2">
            <span className="text-xl font-black text-orange-400 font-mono">02</span>
            <h4 className="text-xs font-bold text-white uppercase">Build Memory Graph</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Disaster nodes are indexed geospatially with flood stage thresholds, hospital vulnerability profiles, and route choke points.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0f18] border border-white/10 space-y-2">
            <span className="text-xl font-black text-yellow-400 font-mono">03</span>
            <h4 className="text-xs font-bold text-white uppercase">Real-Time Correlation</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Live weather telemetry is matched against historical analogs to predict failure windows 4 to 8 hours before they happen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0a0f18] border border-white/10 space-y-2">
            <span className="text-xl font-black text-emerald-400 font-mono">04</span>
            <h4 className="text-xs font-bold text-white uppercase">Tactical Support & SOPs</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Provides incident commanders with pre-emptive checklists, barrier closure timings, and fuel staging directives.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Bottom Call to Action */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-white/5 to-orange-950/40 border border-white/10 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
          Ready to Institutionalize Disaster Knowledge?
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          Explore our demonstration database with historical flood and cyclone scenarios, or run counterfactual simulation models now.
        </p>
        <button
          onClick={() => onNavigate('dashboard')}
          className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-xl shadow-red-900/40 transition-all active:scale-95"
        >
          Launch Institutional Memory Console
        </button>
      </section>
    </div>
  );
};
