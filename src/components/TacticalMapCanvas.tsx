import React, { useState } from 'react';
import { MapEntity, MapMarkerEvent } from '../types';
import {
  Layers,
  MapPin,
  Building2,
  Navigation,
  ShieldCheck,
  AlertTriangle,
  Waves,
  Eye,
  EyeOff,
  Crosshair,
  Sliders,
} from 'lucide-react';

interface TacticalMapCanvasProps {
  entities: MapEntity[];
  events: MapMarkerEvent[];
  selectedEventId?: string;
  onSelectEvent?: (event: MapMarkerEvent) => void;
  activeWaterLevelMeters?: number;
  heightClass?: string;
  showFilters?: boolean;
}

export const TacticalMapCanvas: React.FC<TacticalMapCanvasProps> = ({
  entities,
  events,
  selectedEventId,
  onSelectEvent,
  activeWaterLevelMeters = 3.8,
  heightClass = 'h-[500px]',
  showFilters = true,
}) => {
  // Layer visibility toggles
  const [showHospitals, setShowHospitals] = useState(true);
  const [showRoads, setShowRoads] = useState(true);
  const [showShelters, setShowShelters] = useState(true);
  const [showFloodZones, setShowFloodZones] = useState(true);
  const [showContours, setShowContours] = useState(true);
  const [hoveredEvent, setHoveredEvent] = useState<MapMarkerEvent | null>(null);

  // Coordinate projection dynamically fitted to Indian disaster hotspots / active entities
  const allCoords: [number, number][] = [
    ...entities.map((e) => e.coordinates),
    ...events.map((e) => e.coordinates),
  ].filter((c) => Array.isArray(c) && c.length === 2 && !isNaN(c[0]) && !isNaN(c[1]));

  const lats = allCoords.map((c) => c[0]);
  const lngs = allCoords.map((c) => c[1]);

  const rawMinLat = lats.length > 0 ? Math.min(...lats) : 9.80;
  const rawMaxLat = lats.length > 0 ? Math.max(...lats) : 10.35;
  const rawMinLng = lngs.length > 0 ? Math.min(...lngs) : 76.15;
  const rawMaxLng = lngs.length > 0 ? Math.max(...lngs) : 77.05;

  const latPad = Math.max(0.04, (rawMaxLat - rawMinLat) * 0.15);
  const lngPad = Math.max(0.04, (rawMaxLng - rawMinLng) * 0.15);

  const minLat = rawMinLat - latPad;
  const maxLat = rawMaxLat + latPad;
  const minLng = rawMinLng - lngPad;
  const maxLng = rawMaxLng + lngPad;

  const projectCoords = (coords: [number, number]): { x: number; y: number } => {
    const lat = coords[0];
    const lng = coords[1];
    const x = ((lng - minLng) / Math.max(0.001, (maxLng - minLng))) * 880 + 60;
    const y = 540 - ((lat - minLat) / Math.max(0.001, (maxLat - minLat))) * 480;
    return { x: Math.max(30, Math.min(970, x)), y: Math.max(30, Math.min(570, y)) };
  };

  const getMarkerColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
      case 'High':
        return '#ef4444'; // Red-500
      case 'Medium':
        return '#f97316'; // Orange-500
      case 'Low':
        return '#eab308'; // Yellow-500
      case 'Successful Intervention':
        return '#10b981'; // Emerald-500
      default:
        return '#f97316';
    }
  };

  // Water level visual expansion ratio (1.0m to 5.0m)
  const floodScale = Math.min(1.8, Math.max(0.4, activeWaterLevelMeters / 3.0));

  return (
    <div className={`relative w-full ${heightClass} bg-[#0d121b] rounded-xl overflow-hidden border border-white/10 select-none shadow-2xl flex flex-col`}>
      {/* Background Dot Grid Matrix Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Top Map HUD Overlay */}
      <div className="relative z-10 flex items-center justify-between p-3 bg-[#0a0f18]/80 backdrop-blur-md border-b border-white/10 text-xs text-slate-300">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-orange-400 uppercase font-bold tracking-widest">
            <Crosshair className="w-3.5 h-3.5" />
            <span>GIS TACTICAL MATRIX &bull; PERIYAR / INDIAN BASIN</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400">
            <span>River Stage:</span>
            <span className="text-orange-400 font-bold">+{activeWaterLevelMeters}m</span>
          </div>
        </div>

        {showFilters && (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFloodZones(!showFloodZones)}
              className={`px-2 py-1 rounded text-[10px] font-semibold transition-colors flex items-center gap-1 ${
                showFloodZones
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                  : 'bg-white/5 text-slate-500'
              }`}
            >
              <Waves className="w-3 h-3" />
              <span>Surge Layer</span>
            </button>

            <button
              onClick={() => setShowHospitals(!showHospitals)}
              className={`px-2 py-1 rounded text-[10px] font-semibold transition-colors flex items-center gap-1 ${
                showHospitals
                  ? 'bg-white/10 text-white border border-white/10'
                  : 'bg-white/5 text-slate-500'
              }`}
            >
              <Building2 className="w-3 h-3 text-orange-400" />
              <span>Hospitals</span>
            </button>

            <button
              onClick={() => setShowRoads(!showRoads)}
              className={`px-2 py-1 rounded text-[10px] font-semibold transition-colors flex items-center gap-1 ${
                showRoads
                  ? 'bg-white/10 text-white border border-white/10'
                  : 'bg-white/5 text-slate-500'
              }`}
            >
              <Navigation className="w-3 h-3 text-yellow-400" />
              <span>Causeways</span>
            </button>

            <button
              onClick={() => setShowShelters(!showShelters)}
              className={`px-2 py-1 rounded text-[10px] font-semibold transition-colors flex items-center gap-1 ${
                showShelters
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-white/5 text-slate-500'
              }`}
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Shelters</span>
            </button>
          </div>
        )}
      </div>

      {/* SVG Canvas Body */}
      <div className="relative flex-1 w-full h-full overflow-hidden">
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-full transition-all duration-300"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Flood Gradient */}
            <radialGradient id="floodGlow" cx="48%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#0a0f18" stopOpacity="0" />
            </radialGradient>

            {/* Water River Channel Gradient */}
            <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0369a1" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#075985" stopOpacity="0.9" />
            </linearGradient>

            {/* Marker Pulsing Filter */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Contour Lines & Topographical Elevation */}
          {showContours && (
            <g opacity="0.12" stroke="#ffffff" strokeWidth="1" fill="none">
              <ellipse cx="250" cy="180" rx="180" ry="120" strokeDasharray="3,3" />
              <ellipse cx="260" cy="190" rx="140" ry="90" />
              <ellipse cx="270" cy="200" rx="90" ry="60" />
              <ellipse cx="800" cy="450" rx="200" ry="140" strokeDasharray="4,4" />
              <ellipse cx="820" cy="460" rx="130" ry="80" />
            </g>
          )}

          {/* Dynamic Flood Inundation Polygon Overlays */}
          {showFloodZones && (
            <g className="transition-all duration-700">
              {/* Primary River Basin Flood Zone */}
              <ellipse
                cx="520"
                cy="320"
                rx={190 * floodScale}
                ry={120 * floodScale}
                fill="url(#floodGlow)"
              />
              <ellipse
                cx="640"
                cy="440"
                rx={140 * floodScale}
                ry={90 * floodScale}
                fill="url(#floodGlow)"
              />
              {/* Estuary Choke Point Zone */}
              <circle
                cx="380"
                cy="280"
                r={90 * floodScale}
                fill="#ef4444"
                fillOpacity={0.12 * floodScale}
              />
            </g>
          )}

          {/* River Basin Vectors */}
          <g>
            {/* North-to-South Main River Channel */}
            <path
              d="M 120,50 Q 280,180 420,270 T 640,430 T 920,560"
              fill="none"
              stroke="url(#riverGrad)"
              strokeWidth={18 * Math.min(1.6, Math.max(0.9, activeWaterLevelMeters / 2.5))}
              strokeLinecap="round"
            />
            {/* Tributary */}
            <path
              d="M 50,420 Q 220,380 420,270"
              fill="none"
              stroke="url(#riverGrad)"
              strokeWidth={10 * Math.min(1.5, Math.max(0.8, activeWaterLevelMeters / 2.8))}
              strokeLinecap="round"
            />
            {/* Estuary Discharge Branch */}
            <path
              d="M 640,430 Q 750,330 960,310"
              fill="none"
              stroke="url(#riverGrad)"
              strokeWidth="10"
              strokeDasharray="6,4"
              strokeOpacity="0.6"
            />
          </g>

          {/* Road Infrastructure Arteries */}
          {showRoads && (
            <g>
              {/* NH-544 Causeway */}
              <path
                d="M 320,120 L 760,490"
                stroke="#64748b"
                strokeWidth="7"
                strokeOpacity="0.7"
                fill="none"
              />
              <path
                d="M 320,120 L 760,490"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="6,4"
                fill="none"
              />
              {/* Bypass Expressway */}
              <path
                d="M 180,540 Q 420,480 880,140"
                stroke="#475569"
                strokeWidth="5"
                strokeOpacity="0.5"
                fill="none"
              />
            </g>
          )}

          {/* Render Physical Infrastructure Entities */}
          {entities.map((entity) => {
            if (entity.type === 'Hospital' && !showHospitals) return null;
            if (entity.type === 'Road / Causeway' && !showRoads) return null;
            if (entity.type === 'Emergency Shelter' && !showShelters) return null;

            const pt = projectCoords(entity.coordinates);

            return (
              <g
                key={entity.id}
                className="cursor-pointer transition-transform duration-200 hover:scale-110"
                transform={`translate(${pt.x}, ${pt.y})`}
              >
                {/* Status Indicator Halo */}
                {entity.status === 'Compromised' && (
                  <circle r="16" fill="#ef4444" fillOpacity="0.2" className="animate-pulse" />
                )}
                {entity.status === 'Flooded / Blocked' && (
                  <circle r="14" fill="#f97316" fillOpacity="0.25" />
                )}

                {/* Base Entity Icon */}
                <rect
                  x="-11"
                  y="-11"
                  width="22"
                  height="22"
                  rx="5"
                  fill="#0a0f18"
                  stroke={
                    entity.status === 'Compromised'
                      ? '#ef4444'
                      : entity.status === 'Flooded / Blocked'
                      ? '#f97316'
                      : entity.status === 'Reinforced'
                      ? '#10b981'
                      : '#64748b'
                  }
                  strokeWidth="2"
                />

                {/* Entity Type Glyphs */}
                {entity.type === 'Hospital' && (
                  <path d="M -5,0 L 5,0 M 0,-5 L 0,5" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                )}
                {entity.type === 'Road / Causeway' && (
                  <path d="M -4,-4 L 4,4 M 4,-4 L -4,4" stroke="#f97316" strokeWidth="2" />
                )}
                {entity.type === 'Emergency Shelter' && (
                  <polygon points="0,-6 6,5 -6,5" fill="#10b981" />
                )}
                {entity.type === 'Dam / Floodgate' && (
                  <circle r="4" fill="#38bdf8" />
                )}
                {entity.type === 'Power Substation' && (
                  <polygon points="0,-6 4,-1 1,0 3,6 -4,1 -1,0" fill="#eab308" />
                )}

                {/* Compact Text Tag */}
                <text
                  y="20"
                  textAnchor="middle"
                  fill="#94a3b8"
                  fontSize="9"
                  fontFamily="monospace"
                  fontWeight="bold"
                  className="pointer-events-none drop-shadow"
                >
                  {entity.name.length > 22 ? entity.name.substring(0, 20) + '..' : entity.name}
                </text>
              </g>
            );
          })}

          {/* Render Historical Incident / Memory Markers */}
          {events.map((evt) => {
            const pt = projectCoords(evt.coordinates);
            const isSelected = selectedEventId === evt.id;
            const markerColor = getMarkerColor(evt.severity);

            return (
              <g
                key={evt.id}
                transform={`translate(${pt.x}, ${pt.y})`}
                className="cursor-pointer group"
                onClick={() => onSelectEvent && onSelectEvent(evt)}
                onMouseEnter={() => setHoveredEvent(evt)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Ping Animation for High Severity or Selected */}
                {(evt.severity === 'Critical' || evt.severity === 'High' || isSelected) && (
                  <circle
                    r="20"
                    fill={markerColor}
                    fillOpacity="0.2"
                    className="animate-ping"
                  />
                )}

                {/* Main Event Pin */}
                <circle
                  r={isSelected ? '10' : '7'}
                  fill={markerColor}
                  stroke="#07090d"
                  strokeWidth="2.5"
                  filter="url(#glow)"
                />

                {/* Inner Core */}
                <circle r="3" fill="#ffffff" />

                {/* Marker Hover Pin Label */}
                <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <rect
                    x="-80"
                    y="-38"
                    width="160"
                    height="28"
                    rx="4"
                    fill="#0a0f18"
                    stroke={markerColor}
                    strokeWidth="1"
                    fillOpacity="0.95"
                  />
                  <text
                    x="0"
                    y="-20"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="9"
                    fontWeight="bold"
                    fontFamily="monospace"
                  >
                    {evt.title.length > 25 ? evt.title.substring(0, 23) + '..' : evt.title}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>

        {/* Hover / Selected Event Quick Card Floating In-Map */}
        {hoveredEvent && (
          <div className="absolute bottom-4 left-4 z-20 max-w-sm p-3.5 bg-[#0a0f18]/95 backdrop-blur-md rounded-xl border border-white/10 text-xs text-slate-200 space-y-1.5 shadow-2xl pointer-events-none animate-fadeIn">
            <div className="flex items-center justify-between gap-2">
              <span
                className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold uppercase"
                style={{
                  backgroundColor: `${getMarkerColor(hoveredEvent.severity)}25`,
                  color: getMarkerColor(hoveredEvent.severity),
                }}
              >
                {hoveredEvent.severity} &bull; {hoveredEvent.disasterName}
              </span>
              <span className="text-[10px] text-slate-400 font-mono">{hoveredEvent.date}</span>
            </div>
            <div className="font-bold text-white text-xs">{hoveredEvent.title}</div>
            <div className="text-slate-300 text-[11px] line-clamp-2">{hoveredEvent.impact}</div>
            <div className="text-orange-400 text-[10px] font-mono">
              Lesson: {hoveredEvent.lesson.substring(0, 75)}...
            </div>
          </div>
        )}
      </div>

      {/* Bottom Map Legend */}
      <div className="p-2.5 bg-[#0a0f18] border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] text-slate-400 gap-2 font-mono">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            <span>Critical / Failure Milestone</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
            <span>High Risk Warning</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>Successful Intervention</span>
          </div>
        </div>

        <div className="text-slate-500">
          Source: KSDMA / Central Water Commission (CWC) Geodatabase
        </div>
      </div>
    </div>
  );
};
