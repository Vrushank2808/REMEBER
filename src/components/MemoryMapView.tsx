import React, { useState } from 'react';
import {
  MAP_ENTITIES,
  MAP_MARKER_EVENTS,
  HISTORICAL_DISASTERS,
} from '../data/disasterMemoryData';
import { MapMarkerEvent, MapEntity } from '../types';
import { TacticalMapCanvas } from './TacticalMapCanvas';
import {
  Map as MapIcon,
  Filter,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Calendar,
  Building2,
  Navigation,
  ShieldCheck,
  Lightbulb,
  X,
  Layers,
} from 'lucide-react';
import { ActiveTab } from './Header';

interface MemoryMapViewProps {
  onNavigate: (tab: ActiveTab, params?: any) => void;
}

export const MemoryMapView: React.FC<MemoryMapViewProps> = ({ onNavigate }) => {
  const [selectedEvent, setSelectedEvent] = useState<MapMarkerEvent | null>(
    MAP_MARKER_EVENTS[0]
  );
  const [selectedDisasterFilter, setSelectedDisasterFilter] = useState<string>('all');
  const [selectedSeverityFilter, setSelectedSeverityFilter] = useState<string>('all');
  const [activeWaterLevel, setActiveWaterLevel] = useState<number>(3.5);

  const filteredEvents = MAP_MARKER_EVENTS.filter((ev) => {
    const matchesDisaster =
      selectedDisasterFilter === 'all' || ev.disasterId === selectedDisasterFilter;
    const matchesSeverity =
      selectedSeverityFilter === 'all' ||
      (selectedSeverityFilter === 'High' && (ev.severity === 'High' || (ev.severity as any) === 'Critical')) ||
      (selectedSeverityFilter === 'Medium' && ev.severity === 'Medium') ||
      (selectedSeverityFilter === 'Low' && ev.severity === 'Low') ||
      (selectedSeverityFilter === 'Successful Intervention' && ev.severity === 'Successful Intervention');
    return matchesDisaster && matchesSeverity;
  });

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <MapIcon className="w-5 h-5 text-orange-400" />
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              Tactical Disaster Memory Map
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Geospatial correlation of past disaster failure modes, hospital blackouts, infrastructure breaches, and citizen rescue successes.
          </p>
        </div>

        {/* Severity Color Quick Legend */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase bg-[#0a0f18] px-3 py-1.5 rounded-lg border border-white/10 self-start md:self-auto">
          <span className="flex items-center gap-1.5 text-red-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-red-500"></span> High Risk
          </span>
          <span className="flex items-center gap-1.5 text-orange-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-orange-500"></span> Medium
          </span>
          <span className="flex items-center gap-1.5 text-yellow-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span> Low
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Intervention
          </span>
        </div>
      </div>

      {/* Main Map + Side Details Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map Canvas (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Filter Toolbar */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">Incident:</span>
                <select
                  value={selectedDisasterFilter}
                  onChange={(e) => setSelectedDisasterFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#07090d] border border-white/10 text-slate-200 text-xs focus:outline-none"
                >
                  <option value="all">All Disasters ({MAP_MARKER_EVENTS.length} Events)</option>
                  {HISTORICAL_DISASTERS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">Severity:</span>
                <select
                  value={selectedSeverityFilter}
                  onChange={(e) => setSelectedSeverityFilter(e.target.value)}
                  className="px-2.5 py-1.5 rounded-lg bg-[#07090d] border border-white/10 text-slate-200 text-xs focus:outline-none"
                >
                  <option value="all">All Severities</option>
                  <option value="High">🔴 High Severity</option>
                  <option value="Medium">🟠 Medium</option>
                  <option value="Successful Intervention">🟢 Successful Intervention</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-semibold uppercase text-slate-400 tracking-wider">Flood Stage:</span>
              <input
                type="range"
                min="1.5"
                max="5.0"
                step="0.1"
                value={activeWaterLevel}
                onChange={(e) => setActiveWaterLevel(Number(e.target.value))}
                className="w-24 accent-red-500 cursor-pointer"
              />
              <span className="font-mono text-orange-400 text-xs font-bold">+{activeWaterLevel}m</span>
            </div>
          </div>

          {/* Interactive Tactical Map */}
          <TacticalMapCanvas
            entities={MAP_ENTITIES}
            events={filteredEvents}
            selectedEventId={selectedEvent?.id}
            onSelectEvent={(ev) => setSelectedEvent(ev)}
            activeWaterLevelMeters={activeWaterLevel}
            heightClass="h-[520px]"
            showFilters={false}
          />

          <div className="text-[11px] text-slate-500 flex items-center justify-between px-1">
            <span>Showing {filteredEvents.length} events across Sector 4. Click any marker to inspect debrief.</span>
            <span className="text-slate-600 font-mono">Projection: Sector 4 GIS</span>
          </div>
        </div>

        {/* Selected Event Details Panel (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          {selectedEvent ? (
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4 text-xs">
              {/* Event Header */}
              <div className="space-y-2 border-b border-white/10 pb-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold uppercase ${
                      selectedEvent.severity === 'Successful Intervention'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : selectedEvent.severity === 'High'
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}
                  >
                    {selectedEvent.severity}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {selectedEvent.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white uppercase tracking-tight">{selectedEvent.title}</h3>

                <div className="flex items-center gap-1.5 text-orange-400 font-mono text-[11px]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedEvent.location}</span>
                </div>

                <div className="text-[11px] text-slate-400 font-mono">
                  Parent Incident: <strong className="text-slate-300">{selectedEvent.disasterName}</strong>
                </div>
              </div>

              {/* Impact Breakdown */}
              <div className="space-y-1">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                  Observed Impact & Hazard:
                </p>
                <p className="text-slate-200 bg-[#0a0f18] p-3 rounded-lg border border-white/10 leading-relaxed text-[11px]">
                  {selectedEvent.impact}
                </p>
              </div>

              {/* Institutional Lesson (Border Accent) */}
              <div className="p-3 rounded bg-white/5 border-l-2 border-orange-500 space-y-1">
                <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Institutional Lesson:</span>
                </p>
                <p className="text-orange-200 text-[11px] leading-relaxed">
                  {selectedEvent.lesson}
                </p>
              </div>

              {/* Engineering / Operational Action (Border Accent) */}
              <div className="p-3 rounded bg-white/5 border-l-2 border-emerald-500 space-y-1">
                <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Permanent Fix / Standard Operating Procedure:</span>
                </p>
                <p className="text-emerald-200 text-[11px] leading-relaxed">
                  {selectedEvent.recommendation}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('replay', { disasterId: selectedEvent.disasterId })}
                  className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-2 border border-white/10 uppercase tracking-wider transition-colors"
                >
                  <span>Replay Incident Timeline &rarr;</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-white/5 border border-white/10 text-center text-slate-500 text-xs space-y-2">
              <MapPin className="w-8 h-8 text-slate-600 mx-auto" />
              <p className="font-bold text-white uppercase tracking-wider">No Marker Selected</p>
              <p className="text-[11px]">Click any event marker on the map to inspect specific failure roots, impacts, and lessons.</p>
            </div>
          )}

          {/* Quick List of All Filtered Events */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
              Event Index ({filteredEvents.length})
            </p>
            <div className="max-h-52 overflow-y-auto space-y-1.5 pr-1 text-xs no-scrollbar">
              {filteredEvents.map((ev) => (
                <div
                  key={ev.id}
                  onClick={() => setSelectedEvent(ev)}
                  className={`p-2.5 rounded-lg cursor-pointer transition-colors flex items-center justify-between ${
                    selectedEvent?.id === ev.id
                      ? 'bg-white/15 text-white border border-white/20'
                      : 'hover:bg-white/5 text-slate-300'
                  }`}
                >
                  <div className="truncate pr-2">
                    <span className="font-medium truncate block text-xs">{ev.title}</span>
                    <span className="text-[10px] text-slate-500 font-mono">{ev.date.split(' - ')[0]}</span>
                  </div>
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      ev.severity === 'Successful Intervention'
                        ? 'bg-emerald-500'
                        : ev.severity === 'High'
                        ? 'bg-red-500'
                        : 'bg-orange-500'
                    }`}
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
