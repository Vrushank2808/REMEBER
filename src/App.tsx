import React, { useState } from 'react';
import { Header, ActiveTab } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { DashboardView } from './components/DashboardView';
import { DisasterHistoryView } from './components/DisasterHistoryView';
import { MemoryMapView } from './components/MemoryMapView';
import { ReportAnalyzerView } from './components/ReportAnalyzerView';
import { PatternAnalysisView } from './components/PatternAnalysisView';
import { DisasterReplayView } from './components/DisasterReplayView';
import { WhatIfSimulationView } from './components/WhatIfSimulationView';
import { AiInsightsView } from './components/AiInsightsView';
import { ShieldAlert, Activity } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('landing');
  const [navParams, setNavParams] = useState<any>({});

  const handleNavigate = (tab: ActiveTab, params?: any) => {
    if (params) {
      setNavParams(params);
    }
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090d] text-slate-200 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Universal Institutional Header */}
      <Header activeTab={activeTab} onTabChange={(t) => handleNavigate(t)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'landing' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <LandingPage onNavigate={handleNavigate} />
          </div>
        )}

        {activeTab !== 'landing' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {activeTab === 'dashboard' && <DashboardView onNavigate={handleNavigate} />}
            {activeTab === 'history' && (
              <DisasterHistoryView
                onNavigate={handleNavigate}
                initialDisasterId={navParams.disasterId}
              />
            )}
            {activeTab === 'memory-map' && <MemoryMapView onNavigate={handleNavigate} />}
            {activeTab === 'report-analyzer' && <ReportAnalyzerView onNavigate={handleNavigate} />}
            {activeTab === 'pattern-analysis' && (
              <PatternAnalysisView
                onNavigate={handleNavigate}
                initialParams={navParams}
              />
            )}
            {activeTab === 'replay' && (
              <DisasterReplayView
                onNavigate={handleNavigate}
                initialDisasterId={navParams.disasterId}
              />
            )}
            {activeTab === 'what-if' && (
              <WhatIfSimulationView
                onNavigate={handleNavigate}
                initialDisasterId={navParams.disasterId}
              />
            )}
            {activeTab === 'ai-insights' && <AiInsightsView onNavigate={handleNavigate} />}
          </div>
        )}
      </main>

      {/* Sophisticated Dark Bottom Status Strip & Footer */}
      <footer className="w-full bg-[#0a0f18] border-t border-white/10 text-slate-400 py-6 px-4 sm:px-6 lg:px-8 mt-12 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-red-600 rounded flex items-center justify-center font-bold text-white text-xs">
              R
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white font-mono tracking-tight uppercase">RE:MEMBER</span>
                <span className="text-[10px] text-slate-500 font-mono">Institutional Memory Platform</span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">
                Knowledge Nodes: 1,842 Connected &bull; Latency: 24ms &bull; Operational
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 text-xs">
            <button onClick={() => handleNavigate('landing')} className="hover:text-white transition-colors">Overview</button>
            <button onClick={() => handleNavigate('dashboard')} className="hover:text-white transition-colors">Dashboard</button>
            <button onClick={() => handleNavigate('history')} className="hover:text-white transition-colors">Disaster Archives</button>
            <button onClick={() => handleNavigate('memory-map')} className="hover:text-white transition-colors">Tactical Map</button>
            <button onClick={() => handleNavigate('report-analyzer')} className="hover:text-white transition-colors">Report Ingestion</button>
            <button onClick={() => handleNavigate('pattern-analysis')} className="hover:text-white transition-colors">Pattern Engine</button>
            <button onClick={() => handleNavigate('replay')} className="hover:text-white transition-colors">Replay</button>
            <button onClick={() => handleNavigate('what-if')} className="hover:text-white transition-colors">What-If</button>
            <button onClick={() => handleNavigate('ai-insights')} className="hover:text-white transition-colors">AI Synthesis</button>
          </div>

          <div className="text-slate-500 text-[10px] text-center md:text-right font-mono uppercase tracking-wider">
            &ldquo;We don&apos;t just respond to disasters. We learn from them.&rdquo;
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
