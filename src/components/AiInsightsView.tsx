import React from 'react';
import {
  CROSS_DISASTER_INSIGHTS,
  AI_SYNTHESIS_INSIGHTS,
} from '../data/disasterMemoryData';
import {
  Sparkles,
  AlertTriangle,
  Lightbulb,
  ShieldCheck,
  Building2,
  Navigation,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  Award,
} from 'lucide-react';
import { ActiveTab } from './Header';

interface AiInsightsViewProps {
  onNavigate: (tab: ActiveTab, params?: any) => void;
}

export const AiInsightsView: React.FC<AiInsightsViewProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-400" />
            <h2 className="text-xl font-bold text-white uppercase tracking-tight">
              Cross-Disaster AI Synthesis & Policy Insights
            </h2>
          </div>
          <p className="text-xs text-slate-400">
            Synthesized systemic failure patterns, recurring vulnerabilities across multi-year disasters, and permanent resilience recommendations.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-orange-400 bg-orange-500/10 px-3 py-1.5 rounded-lg border border-orange-500/20 self-start md:self-auto">
          <FileCheck className="w-3.5 h-3.5" />
          <span>Cross-Event Meta-Analysis</span>
        </div>
      </div>

      {/* 1. Recurring Systemic Vulnerabilities */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-500" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Systemic Failure Patterns Identified Across Disasters
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {AI_SYNTHESIS_INSIGHTS.recurringVulnerabilities.map((vuln, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 font-mono font-bold uppercase">
                  {vuln.category}
                </span>
                <span className="text-[10px] text-orange-400 font-mono font-semibold">
                  Repeated in {vuln.repeatCount} Incidents
                </span>
              </div>

              <h4 className="text-sm font-bold text-white uppercase tracking-tight">
                {vuln.pattern}
              </h4>

              <div className="space-y-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                  Root Cause Anatomy:
                </span>
                <p className="text-slate-300 leading-relaxed text-[11px] bg-[#0a0f18] p-3 rounded-lg border border-white/10">
                  {vuln.underlyingRootCause}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border-l-2 border-orange-500 space-y-1">
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider block">
                  Prescribed Engineering Standard:
                </span>
                <p className="text-orange-200 text-[11px] leading-relaxed">
                  {vuln.mitigationStrategy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Core Institutional Memory Takeaways */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-4 h-4 text-orange-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Key Institutional Memory Takeaways
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AI_SYNTHESIS_INSIGHTS.crossDisasterLessons.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3 text-xs flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[9px] font-mono text-orange-400 uppercase font-bold">
                  Core Lesson 0{i + 1}
                </span>
                <h4 className="text-xs font-bold text-white uppercase">{item.title}</h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">{item.synthesis}</p>
              </div>

              <div className="p-3 rounded-lg bg-white/5 border-l-2 border-emerald-500 mt-2 space-y-1">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                  Mandated Policy Action:
                </span>
                <p className="text-emerald-200 text-[11px] leading-snug">{item.concreteAction}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Strategic Policy Recommendations Table */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Standard Operating Procedure & Resilience Directives
          </h3>
        </div>

        <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3 text-xs overflow-x-auto">
          <div className="min-w-[650px] space-y-2">
            {AI_SYNTHESIS_INSIGHTS.strategicRecommendations.map((rec, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[#0a0f18] border border-white/10 flex items-start justify-between gap-4"
              >
                <div className="space-y-1 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-xs uppercase">{rec.area}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono uppercase">
                      {rec.timeHorizon}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px]">{rec.recommendation}</p>
                  <p className="text-[10px] text-emerald-400 font-medium">
                    Expected Outcome: {rec.expectedImpact}
                  </p>
                </div>

                <div className="text-right text-[10px] text-slate-400 font-mono shrink-0">
                  <span className="text-slate-500 block uppercase">Authority</span>
                  <span className="text-slate-300 font-semibold">{rec.responsibleEntity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
