import React, { useState } from 'react';
import {
  HISTORICAL_DISASTERS,
} from '../data/disasterMemoryData';
import { HistoricalDisaster, DisasterType, DisasterSeverity } from '../types';
import {
  Archive,
  Search,
  Filter,
  Calendar,
  MapPin,
  AlertTriangle,
  Building2,
  Navigation,
  ShieldCheck,
  RotateCcw,
  Layers,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';
import { ActiveTab } from './Header';

interface DisasterHistoryViewProps {
  onNavigate: (tab: ActiveTab, params?: any) => void;
  initialDisasterId?: string | null;
}

export const DisasterHistoryView: React.FC<DisasterHistoryViewProps> = ({
  onNavigate,
  initialDisasterId,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(
    initialDisasterId || HISTORICAL_DISASTERS[0].id
  );

  const filteredDisasters = HISTORICAL_DISASTERS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesSeverity = selectedSeverity === 'All' || item.severity === selectedSeverity;

    return matchesSearch && matchesType && matchesSeverity;
  });

  const disasterTypes = ['All', 'Flash Flood', 'Urban Flood', 'Riverine Inundation', 'Cyclone / Typhoon'];
  const severities = ['All', 'Critical', 'High', 'Medium'];

  return (
    <div className="space-y-6">
      {/* Header & Description */}
      <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Archive className="w-5 h-5 text-red-500" />
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              Historical Disaster Knowledge Base
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Structured institutional memory from past crises, detailing critical failure points, engineering retrofits, and lifesaving interventions.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 self-start md:self-auto">
          <span>{filteredDisasters.length} Case Studies Archived</span>
        </div>
      </div>

      {/* Search & Filtering Bar */}
      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        {/* Search input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search disasters, hospitals, roads, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#07090d] border border-white/10 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-red-500"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-1">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider">Type:</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-2 py-1.5 rounded bg-[#07090d] border border-white/10 text-slate-300 text-xs focus:outline-none"
            >
              {disasterTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-slate-400 text-[11px] uppercase tracking-wider">Severity:</span>
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-2 py-1.5 rounded bg-[#07090d] border border-white/10 text-slate-300 text-xs focus:outline-none"
            >
              {severities.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {(searchQuery || selectedType !== 'All' || selectedSeverity !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedType('All');
                setSelectedSeverity('All');
              }}
              className="px-2.5 py-1 rounded bg-white/10 text-slate-300 hover:text-white"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Disasters List */}
      <div className="space-y-4">
        {filteredDisasters.map((disaster) => {
          const isExpanded = expandedId === disaster.id;

          return (
            <div
              key={disaster.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'bg-white/5 border-white/20 shadow-2xl'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Header Accordion Card */}
              <div
                onClick={() => setExpandedId(isExpanded ? null : disaster.id)}
                className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold uppercase ${
                        disaster.severity === 'Critical'
                          ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                          : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                      }`}
                    >
                      {disaster.severity}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {disaster.date}
                    </span>
                    <span className="text-xs text-orange-400 flex items-center gap-1 font-mono">
                      <MapPin className="w-3.5 h-3.5" />
                      {disaster.location}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white uppercase tracking-tight">{disaster.name}</h3>

                  <p className="text-xs text-slate-300 max-w-3xl line-clamp-2">
                    {disaster.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <div className="text-right hidden sm:block text-xs">
                    <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Peak Inflow Rate</span>
                    <span className="font-bold text-orange-400 font-mono">{disaster.peakRainfallRate}</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </div>

              {/* Expanded Detailed Breakdown */}
              {isExpanded && (
                <div className="p-5 pt-0 border-t border-white/10 space-y-6 text-xs text-slate-300 animate-fadeIn">
                  {/* Key Stats Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                    <div className="bg-[#0a0f18] border border-white/10 rounded-xl p-4">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Casualties</p>
                      <p className="text-2xl font-mono text-red-500 font-bold">{disaster.casualties}</p>
                      <p className="text-[10px] text-slate-500 mt-1">Fatalities recorded</p>
                    </div>

                    <div className="bg-[#0a0f18] border border-white/10 rounded-xl p-4">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Displaced Citizens</p>
                      <p className="text-2xl font-mono text-orange-400 font-bold">{disaster.evacuatedCount.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-500 mt-1">Evacuated to shelters</p>
                    </div>

                    <div className="bg-[#0a0f18] border border-white/10 rounded-xl p-4">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Economic Damage</p>
                      <p className="text-2xl font-mono text-white font-bold">{disaster.economicDamage}</p>
                      <p className="text-[10px] text-slate-500 mt-1">Municipal asset loss</p>
                    </div>

                    <div className="bg-[#0a0f18] border border-white/10 rounded-xl p-4">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Peak Water Level</p>
                      <p className="text-2xl font-mono text-emerald-400 font-bold">{disaster.peakWaterLevel.split(' ')[0]}</p>
                      <p className="text-[10px] text-slate-500 mt-1">Above datum stage</p>
                    </div>
                  </div>

                  {/* 2-Column Section: Affected Infrastructure & Root Cause Failures */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Affected Infrastructure */}
                    <div className="p-4 rounded-xl bg-[#0a0f18] border border-white/10 space-y-3">
                      <h4 className="font-bold text-white uppercase tracking-wider flex items-center gap-2 text-xs">
                        <Building2 className="w-4 h-4 text-orange-400" />
                        <span>Affected Hospitals, Roads & Shelters</span>
                      </h4>
                      <ul className="space-y-2 text-slate-300">
                        {disaster.affectedHospitals.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-500 font-bold">•</span>
                            <span><strong>Hospital:</strong> {h}</span>
                          </li>
                        ))}
                        {disaster.affectedRoads.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-orange-400 font-bold">•</span>
                            <span><strong>Road:</strong> {r}</span>
                          </li>
                        ))}
                        {disaster.emergencyShelters.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 font-bold">•</span>
                            <span><strong>Shelter:</strong> {s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Root Cause Failures vs Successful Interventions */}
                    <div className="p-4 rounded-xl bg-[#0a0f18] border border-white/10 space-y-3">
                      <h4 className="font-bold text-white uppercase tracking-wider flex items-center gap-2 text-xs">
                        <AlertTriangle className="w-4 h-4 text-red-500" />
                        <span>Root Cause Failures Identified</span>
                      </h4>
                      <ul className="space-y-1.5 text-slate-300">
                        {disaster.rootCauseFailures.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="font-bold text-white uppercase tracking-wider flex items-center gap-2 text-xs pt-2 border-t border-white/10">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>Successful Interventions</span>
                      </h4>
                      <ul className="space-y-1.5 text-slate-300">
                        {disaster.successfulInterventions.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Lessons Learned & Actions Taken */}
                  <div className="p-4 rounded-xl bg-[#0a0f18] border border-white/10 space-y-3">
                    <h4 className="font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2 text-xs">
                      <Lightbulb className="w-4 h-4" />
                      <span>Institutional Lessons & Policy Actions Taken</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {disaster.lessonsLearned.map((item, i) => (
                        <div key={i} className="p-3 rounded-lg bg-white/5 border-l-2 border-orange-500 space-y-1">
                          <span className="text-[9px] font-bold text-orange-400 uppercase font-mono">{item.domain}</span>
                          <p className="text-slate-200 text-xs leading-snug">{item.lesson}</p>
                          <div className="text-[10px] text-emerald-400 pt-1 font-medium">
                            &rarr; Action: {item.actionTaken}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendations */}
                  <div className="p-4 rounded-xl bg-[#0a0f18] border border-white/10 space-y-2">
                    <h4 className="font-bold text-white uppercase tracking-wider text-xs">Standard Operating Procedure Recommendations:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                      {disaster.recommendations.map((rec, i) => (
                        <li key={i} className="p-2.5 rounded bg-white/5 border border-white/5 flex items-start gap-2">
                          <span className="text-orange-400 font-bold">#{i + 1}</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons to Replay or Simulate */}
                  <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
                    <button
                      onClick={() => onNavigate('replay', { disasterId: disaster.id })}
                      className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold flex items-center gap-2 border border-white/10 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4 text-orange-400" />
                      <span>Scrub Disaster Replay</span>
                    </button>

                    <button
                      onClick={() => onNavigate('what-if', { disasterId: disaster.id })}
                      className="px-5 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold flex items-center gap-2 shadow-lg shadow-red-900/30 uppercase tracking-wider transition-all"
                    >
                      <Layers className="w-4 h-4" />
                      <span>Run What-If Scenario &rarr;</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
