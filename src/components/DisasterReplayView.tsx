import React, { useState, useEffect } from 'react';
import {
  HISTORICAL_DISASTERS,
  MAP_ENTITIES,
  MAP_MARKER_EVENTS,
} from '../data/disasterMemoryData';
import { TacticalMapCanvas } from './TacticalMapCanvas';
import {
  RotateCcw,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Clock,
  AlertTriangle,
  Lightbulb,
  Building2,
  Navigation,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
} from 'lucide-react';
import { ActiveTab } from './Header';

interface DisasterReplayViewProps {
  onNavigate: (tab: ActiveTab, params?: any) => void;
  initialDisasterId?: string | null;
}

export const DisasterReplayView: React.FC<DisasterReplayViewProps> = ({
  onNavigate,
  initialDisasterId,
}) => {
  const [selectedDisasterId, setSelectedDisasterId] = useState<string>(
    initialDisasterId || 'flood-2018-riverside'
  );
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const selectedDisaster =
    HISTORICAL_DISASTERS.find((d) => d.id === selectedDisasterId) || HISTORICAL_DISASTERS[0];
  const events = selectedDisaster.majorEvents || [];

  // Auto-play ticker
  useEffect(() => {
    let timer: any = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= events.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, events.length]);

  const currentEvent = events[currentStepIndex] || events[0];

  // Calculate dynamic simulated water level based on hour offset
  const baseWaterLevel = 1.6 + (currentEvent?.hourOffset || 0) * 0.28;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <RotateCcw className="w-5 h-5 text-orange-400" />
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              Chronological Disaster Replay & Timeline Scrubber
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Step through past incidents hour-by-hour to pinpoint when critical decisions were made and where failure chains accelerated.
          </p>
        </div>

        {/* Disaster Selector */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Select Crisis:</span>
          <select
            value={selectedDisasterId}
            onChange={(e) => {
              setSelectedDisasterId(e.target.value);
              setCurrentStepIndex(0);
              setIsPlaying(false);
            }}
            className="px-3 py-1.5 rounded-lg bg-[#07090d] border border-white/10 text-slate-200 text-xs focus:outline-none"
          >
            {HISTORICAL_DISASTERS.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} ({d.date})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid: Tactical Replay Canvas vs Step-by-Step Incident Log */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Map + Scrubbing Timeline Controls (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col">
            {/* Header with Active Replay Status */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#0a0f18]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="font-mono text-xs font-bold text-white uppercase">
                  T+{currentEvent?.hourOffset || 0} Hours &bull; {currentEvent?.timestampLabel || '00:00'}
                </span>
              </div>
              <span className="text-[10px] text-orange-400 font-mono font-semibold uppercase tracking-wider">
                Replay Mode Active
              </span>
            </div>

            {/* Tactical Map */}
            <div className="p-3">
              <TacticalMapCanvas
                entities={MAP_ENTITIES}
                events={MAP_MARKER_EVENTS}
                activeWaterLevelMeters={Number(baseWaterLevel.toFixed(1))}
                heightClass="h-[380px]"
                showFilters={false}
              />
            </div>

            {/* Sophisticated Dark Timeline Scrubber Bar */}
            <div className="h-16 bg-[#0a0f18] border-t border-white/10 px-4 flex items-center gap-4">
              <div className="text-[10px] font-bold text-slate-500 uppercase w-24">Replay Timeline</div>

              <div className="flex-1 flex items-center gap-2">
                <div className="text-[9px] text-slate-400 font-mono">0h</div>
                <div className="flex-1 h-1.5 bg-white/10 rounded-full relative">
                  <div
                    className="absolute left-0 h-full bg-red-500 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentStepIndex) / Math.max(1, events.length - 1)) * 100}%`,
                    }}
                  />
                  <div
                    className="absolute w-3 h-3 -top-0.5 bg-white border-2 border-red-500 rounded-full transition-all duration-300 -translate-x-1/2 cursor-pointer shadow"
                    style={{
                      left: `${((currentStepIndex) / Math.max(1, events.length - 1)) * 100}%`,
                    }}
                  />
                </div>
                <div className="text-[9px] text-slate-400 font-mono">24h</div>
              </div>

              {/* Playback Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentStepIndex((prev) => Math.max(0, prev - 1))}
                  disabled={currentStepIndex === 0}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 border border-white/10"
                >
                  <SkipBack className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-red-900/30 transition-all"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  onClick={() => setCurrentStepIndex((prev) => Math.min(events.length - 1, prev + 1))}
                  disabled={currentStepIndex === events.length - 1}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 border border-white/10"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Scrub Pills */}
          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex flex-wrap gap-2 text-xs">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block self-center mr-2">
              Milestone Steps:
            </span>
            {events.map((evt, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentStepIndex(idx);
                  setIsPlaying(false);
                }}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                  currentStepIndex === idx
                    ? 'bg-red-600 text-white font-bold shadow-sm'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                T+{evt.hourOffset}h: {evt.category}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Step Telemetry, Impact, & Failure Roots (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          {currentEvent && (
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4 text-xs animate-fadeIn">
              {/* Event Card Header */}
              <div className="border-b border-white/10 pb-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded font-mono font-bold uppercase ${
                      currentEvent.isCriticalFailurePoint
                        ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                        : currentEvent.isSuccessfulIntervention
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}
                  >
                    {currentEvent.severity}
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">
                    Step {currentStepIndex + 1} of {events.length}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white uppercase tracking-tight">
                  {currentEvent.title}
                </h3>

                <p className="text-[11px] text-slate-400 font-mono">
                  Timestamp: <strong className="text-slate-200">{currentEvent.timestampLabel}</strong>
                </p>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                  Situational Progression:
                </span>
                <p className="text-slate-200 bg-[#0a0f18] p-3 rounded-lg border border-white/10 leading-relaxed text-[11px]">
                  {currentEvent.description}
                </p>
              </div>

              {/* Impact Metric if available */}
              {currentEvent.impactMetric && (
                <div className="bg-[#0a0f18] border border-white/10 rounded-xl p-3">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Impact Metric</p>
                  <p className="text-base font-mono text-orange-400 font-bold">{currentEvent.impactMetric}</p>
                </div>
              )}

              {/* Critical Failure Point or Successful Intervention Callout */}
              {currentEvent.isCriticalFailurePoint && (
                <div className="p-3.5 rounded-lg bg-red-500/10 border-l-2 border-red-500 text-red-300 text-[11px] space-y-1">
                  <strong className="text-red-400 uppercase text-[10px] flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Critical Systemic Failure Milestone</span>
                  </strong>
                  <p>
                    This step marked a point of irreversible cascading damage. In hindsight, early automated barrier closure or pre-staged excavators could have prevented this outcome.
                  </p>
                </div>
              )}

              {currentEvent.isSuccessfulIntervention && (
                <div className="p-3.5 rounded-lg bg-emerald-500/10 border-l-2 border-emerald-500 text-emerald-300 text-[11px] space-y-1">
                  <strong className="text-emerald-400 uppercase text-[10px] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Successful Protective Action</span>
                  </strong>
                  <p>
                    This proactive intervention effectively halted downstream asset damage and protected lives.
                  </p>
                </div>
              )}

              {/* Action Button: Run What-If on this milestone */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('what-if', { disasterId: selectedDisasterId, hour: currentEvent.hourOffset })}
                  className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-900/30 uppercase tracking-wider transition-all"
                >
                  <Layers className="w-4 h-4" />
                  <span>Simulate Earlier Intervention &rarr;</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
