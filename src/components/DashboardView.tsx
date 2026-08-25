import React, { useState } from 'react';
import {
  HISTORICAL_DISASTERS,
  MAP_ENTITIES,
  MAP_MARKER_EVENTS,
} from '../data/disasterMemoryData';
import { TacticalMapCanvas } from './TacticalMapCanvas';
import { MapMarkerEvent } from '../types';
import {
  AlertTriangle,
  Compass,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Building2,
  Navigation,
  Waves,
  ChevronRight,
  Sliders,
  FileText,
  Activity,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react';

interface DashboardViewProps {
  onNavigate: (viewId: string, params?: any) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ onNavigate }) => {
  const [selectedEvent, setSelectedEvent] = useState<MapMarkerEvent | null>(
    MAP_MARKER_EVENTS[0]
  );
  const [simulatedRainfall, setSimulatedRainfall] = useState(105);
  const [simulatedWaterLevel, setSimulatedWaterLevel] = useState(4.2);

  // Dynamic similarity calculation
  const similarityScore = Math.min(98, Math.max(70, Math.round(92 + (simulatedRainfall - 100) * 0.25)));

  return (
    <div className="space-y-6">
      {/* Top Banner: Real-time Incident Status & Live Conditions */}
      <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                ACTIVE MONITORING &bull; MONSOON INUNDATION
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider">
                PERIYAR_PAMBA_CATCHMENT_STAGE:RED_ALERT
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
              Emergency Intelligence & Institutional Memory
            </h2>
            <p className="text-xs text-slate-400">
              Real-time Indian meteorological & hydrological telemetry matched against the 2018 Kerala, 2015 Chennai, and 2019 Odisha disaster archives.
            </p>
          </div>

          {/* Key Metric Gauges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-center min-w-[120px]">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">Precipitation</span>
              <span className="text-xl font-black text-white font-mono">{simulatedRainfall} mm/h</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-center min-w-[120px]">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">River Stage</span>
              <span className="text-xl font-black text-orange-400 font-mono">+{simulatedWaterLevel} m</span>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-center min-w-[130px]">
              <span className="text-[10px] text-red-400 uppercase tracking-widest font-semibold block">Similarity Score</span>
              <span className="text-xl font-black text-red-500 font-mono">{similarityScore}% Match</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Overview Statistics Cards (Sophisticated Dark Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Matched Historical Event</p>
          <p className="text-2xl font-mono text-orange-400 font-bold">2018 Kerala Floods</p>
          <p className="text-[10px] text-slate-500 mt-2">
            Catchment Similarity: <span className="text-slate-300 italic">{similarityScore}% Match</span>
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Risk Probability</p>
          <p className="text-2xl font-mono text-red-500 font-bold">HIGH</p>
          <p className="text-[10px] text-slate-500 mt-2">
            3 Critical Bottlenecks: <span className="text-slate-300">NH-544, Aluva Hospital, CIAL</span>
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Hospital Power Grid</p>
          <p className="text-2xl font-mono text-emerald-400 font-bold">RETROFITTED</p>
          <p className="text-[10px] text-slate-500 mt-2">
            Rooftop DG: <span className="text-slate-300">Aluva +3.5m Protected &bull; 72h Fuel</span>
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Shelter Capacity</p>
          <p className="text-2xl font-mono text-white font-bold">4,500</p>
          <p className="text-[10px] text-slate-500 mt-2">
            Active Hubs: <span className="text-slate-300">UC College & Chengannur</span>
          </p>
        </div>
      </div>

      {/* Main Grid: Interactive Tactical Map + AI Recommendations & Lessons */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Tactical Map Area (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-orange-400" />
                <h3 className="text-xs font-bold uppercase tracking-tight text-white">Geospatial Historical Comparison</h3>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">Current Basin</span>
                <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">Historical 2018 Data</span>
                <button
                  onClick={() => onNavigate('memory-map')}
                  className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-0.5 ml-2"
                >
                  <span>Full Map</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Tactical Map Component */}
            <div className="p-3">
              <TacticalMapCanvas
                entities={MAP_ENTITIES}
                events={MAP_MARKER_EVENTS}
                selectedEventId={selectedEvent?.id}
                onSelectEvent={(ev) => setSelectedEvent(ev)}
                activeWaterLevelMeters={simulatedWaterLevel}
                heightClass="h-[390px]"
              />
            </div>

            {/* Selected Marker Detail Card if any */}
            {selectedEvent ? (
              <div className="m-3 p-3.5 rounded-lg bg-[#0a0f18] border border-white/10 text-xs space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span>{selectedEvent.title}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">{selectedEvent.date}</span>
                </div>
                <p className="text-slate-300 text-[11px]">{selectedEvent.impact}</p>
                <div className="p-2 rounded bg-white/5 border-l-2 border-orange-500 text-[11px] text-orange-300">
                  <strong className="text-orange-400">Institutional Lesson: </strong>
                  <span>{selectedEvent.lesson}</span>
                </div>
              </div>
            ) : (
              <div className="px-4 py-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500 bg-[#0a0f18]">
                <span>Click any event marker on the map to inspect historic Indian failure modes and lessons.</span>
                <span className="text-slate-600 font-mono">Zoom 1.0x</span>
              </div>
            )}
          </div>

          {/* Quick Simulation Condition Slider */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="space-y-0.5">
              <span className="font-semibold text-white uppercase text-[10px] tracking-wider block">
                Monsoon Inflow Control (Periyar Basin):
              </span>
              <span className="text-slate-400 text-[11px]">Adjust rainfall telemetry to observe dynamic similarity and flood zone response</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-[11px] font-mono text-orange-400 min-w-[50px]">{simulatedRainfall} mm/h</span>
              <input
                type="range"
                min="40"
                max="160"
                value={simulatedRainfall}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setSimulatedRainfall(val);
                  setSimulatedWaterLevel(Number((1.8 + (val / 160) * 3.8).toFixed(1)));
                }}
                className="w-36 sm:w-44 accent-red-500 cursor-pointer"
              />
              <button
                onClick={() => onNavigate('pattern-analysis', { rainfall: simulatedRainfall, waterLevel: simulatedWaterLevel })}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium text-xs whitespace-nowrap border border-white/10"
              >
                Deep Match &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: AI Insights & Lessons with Left Accent Borders (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* AI Priority Recommendations / Insights Box */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 overflow-hidden flex flex-col">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 flex items-center gap-2">
              <span className="text-orange-500">✦</span> AI Insights & Tactical Directives
            </h3>

            <div className="space-y-3">
              <div className="p-3 rounded bg-white/5 border-l-2 border-red-500 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold text-red-400 italic">Directive 01: Pre-Emptive NH-544 Causeway Closure</p>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-500/20 text-red-400 font-mono font-bold uppercase">
                    0-2h
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-tight">
                  2018 records prove Marthanda Varma bridge overtopping occurs at +3.2m Periyar stage. Pre-emptively drop automated barrier arms to avoid stranding ambulances.
                </p>
              </div>

              <div className="p-3 rounded bg-white/5 border-l-2 border-orange-500 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold text-orange-400 italic">Directive 02: Hospital Backup Power & Oxygen Triage</p>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-orange-500/20 text-orange-400 font-mono font-bold uppercase">
                    T+2h
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-tight">
                  Drawing from the 2015 Chennai MIOT and 2018 Aluva precedents, verify rooftop DG generator transfer switch before sub-grade switchboards face water ingress.
                </p>
              </div>

              <div className="p-3 rounded bg-white/5 border-l-2 border-emerald-500 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold text-emerald-400 italic">Directive 03: Pre-Stage Marine Fishermen Flotilla</p>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-mono font-bold uppercase">
                    T+3h
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-tight">
                  Mobilize Vypeen and Kollam coastal boatmen with flatbed transport trucks. Sturdy wooden marine crafts navigate urban fences and rapids 4x more reliably than inflatables.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10">
              <button
                onClick={() => onNavigate('pattern-analysis')}
                className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs transition-all shadow-lg shadow-red-900/30 uppercase tracking-wider"
              >
                Generate Mitigation Plan
              </button>
            </div>
          </div>

          {/* High-Risk Infrastructure List */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-3">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest">
              Critical Infrastructure Watchlist
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Navigation className="w-4 h-4 text-red-400" />
                  <div>
                    <div className="font-semibold text-white">NH-544 Marthanda Varma Bridge</div>
                    <div className="text-[10px] text-slate-400">Elevation: +3.1m &bull; River Surge Choke</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-[9px] font-mono font-bold uppercase">
                  CRITICAL
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-orange-400" />
                  <div>
                    <div className="font-semibold text-white">Aluva Taluk Hospital</div>
                    <div className="text-[10px] text-slate-400">Rooftop DG Active &bull; Approach Waterlogged</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[9px] font-mono font-bold uppercase">
                  MONITORED
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Waves className="w-4 h-4 text-emerald-400" />
                  <div>
                    <div className="font-semibold text-white">Idukki Cheruthoni Sluice Regulators</div>
                    <div className="text-[10px] text-slate-400">Dynamic Rule Curve Active &bull; Gradual Spill</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-mono font-bold uppercase">
                  STABLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Historical Incidents List */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-tight">Historical Disaster Case Studies</h3>
            <p className="text-xs text-slate-400">
              Institutional memory records powering the RE:MEMBER comparison engine.
            </p>
          </div>
          <button
            onClick={() => onNavigate('history')}
            className="text-xs text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
          >
            <span>View All Indian Archives</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HISTORICAL_DISASTERS.slice(0, 3).map((disaster) => (
            <div
              key={disaster.id}
              onClick={() => onNavigate('history', { disasterId: disaster.id })}
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                  {disaster.date}
                </span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase ${
                    disaster.severity === 'Critical'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}
                >
                  {disaster.severity}
                </span>
              </div>

              <h4 className="text-xs font-bold text-white group-hover:text-orange-400 transition-colors uppercase">
                {disaster.name}
              </h4>

              <p className="text-xs text-slate-400 line-clamp-2">{disaster.description}</p>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono text-[10px]">Peak: {disaster.peakRainfallRate}</span>
                <span className="text-orange-400 group-hover:underline flex items-center gap-0.5 text-xs font-medium">
                  Inspect &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
