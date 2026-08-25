import React from 'react';
import {
  ShieldAlert,
  Activity,
  Archive,
  Map as MapIcon,
  FileSearch,
  Cpu,
  RotateCcw,
  Sparkles,
  Layers,
  HelpCircle,
  BarChart3,
  Flame,
} from 'lucide-react';

export type ActiveTab =
  | 'landing'
  | 'dashboard'
  | 'history'
  | 'memory-map'
  | 'report-analyzer'
  | 'pattern-analysis'
  | 'replay'
  | 'what-if'
  | 'ai-insights';

interface HeaderProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'dashboard' as ActiveTab, label: 'Dashboard', icon: BarChart3 },
    { id: 'history' as ActiveTab, label: 'Disaster History', icon: Archive },
    { id: 'memory-map' as ActiveTab, label: 'Memory Map', icon: MapIcon },
    { id: 'report-analyzer' as ActiveTab, label: 'AI Report Analyzer', icon: FileSearch, highlight: true },
    { id: 'pattern-analysis' as ActiveTab, label: 'Pattern Analysis', icon: Cpu },
    { id: 'replay' as ActiveTab, label: 'Disaster Replay', icon: RotateCcw },
    { id: 'what-if' as ActiveTab, label: 'What-If Scenarios', icon: Layers },
    { id: 'ai-insights' as ActiveTab, label: 'AI Insights', icon: Sparkles },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0f18]/90 backdrop-blur-md border-b border-white/10 text-slate-200">
      {/* Top Banner Notice */}
      <div className="bg-[#07090d] px-4 py-1.5 border-b border-white/5 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-orange-400">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span>ACTIVE ANALYSIS: KERALA_MONSOON_REF:2024</span>
          </div>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-slate-400 text-[10px] tracking-wider uppercase">
            Data Node: South-East Asia Portal
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            System Status: Operational
          </span>
          <button
            onClick={() => onTabChange('landing')}
            className={`flex items-center gap-1 hover:text-white transition-colors text-[10px] uppercase tracking-wider ${
              activeTab === 'landing' ? 'text-orange-400 font-semibold' : 'text-slate-400'
            }`}
          >
            <HelpCircle className="w-3 h-3" />
            <span>Platform Overview</span>
          </button>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Platform Name */}
          <div
            onClick={() => onTabChange('landing')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center font-bold text-white shadow-lg shadow-red-950/60 group-hover:scale-105 transition-transform">
              R
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-white uppercase font-sans">
                  RE:MEMBER
                </span>
                <span className="px-1.5 py-0.5 rounded bg-white/5 text-[9px] text-slate-400 font-mono border border-white/10 uppercase tracking-wider">
                  v2.4
                </span>
              </div>
              <p className="text-[10px] text-red-500 font-bold tracking-widest uppercase -mt-0.5">
                Institutional Memory AI
              </p>
            </div>
          </div>

          {/* Navigation Items (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onTabChange(item.id)}
                  className={`relative flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white/10 text-white shadow-sm border border-white/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 ${
                      isActive ? 'text-red-400' : item.highlight ? 'text-orange-400' : 'text-slate-400'
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.highlight && !isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-500 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onTabChange(activeTab === 'landing' ? 'dashboard' : 'pattern-analysis')}
              className="px-3.5 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs transition-all shadow-lg shadow-red-900/30 flex items-center gap-1.5 active:scale-95"
            >
              <Activity className="w-3.5 h-3.5" />
              <span>{activeTab === 'landing' ? 'Launch Console' : 'Pattern Match'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Navigation Scroll */}
        <div className="flex lg:hidden overflow-x-auto py-2 gap-1.5 border-t border-white/10 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`whitespace-nowrap flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-white/10 text-white border border-white/10 font-semibold'
                    : 'text-slate-400 bg-white/5 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-red-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
