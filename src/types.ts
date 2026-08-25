export type DisasterSeverity = 'Critical' | 'High' | 'Medium' | 'Low' | 'Successful Intervention';

export type DisasterType =
  | 'Urban Flood'
  | 'Riverine Inundation'
  | 'Flash Flood'
  | 'Cyclone / Typhoon'
  | 'Earthquake'
  | 'Landslide'
  | 'Wildfire'
  | 'Industrial Chemical Spill';

export interface TimelineMilestone {
  hourOffset: number; // e.g. 0, 2, 4, 6, 8, 12, 24, 48
  timestampLabel: string;
  title: string;
  category: 'Weather' | 'Hydrology' | 'Infrastructure' | 'Medical' | 'Evacuation' | 'Command' | 'Rescue';
  description: string;
  severity: DisasterSeverity;
  affectedEntity?: string;
  impactMetric?: string;
  coordinates?: [number, number]; // lat, lng on vector tactical map
  isCriticalFailurePoint?: boolean;
  isSuccessfulIntervention?: boolean;
  lessonLearned?: string;
}

export interface MapEntity {
  id: string;
  name: string;
  type: 'Hospital' | 'Road / Causeway' | 'Emergency Shelter' | 'Dam / Floodgate' | 'Power Substation' | 'Incident Hotspot';
  status: 'Operational' | 'Compromised' | 'Flooded / Blocked' | 'Evacuated' | 'Reinforced';
  coordinates: [number, number]; // [lat, lng]
  elevationMeters?: number;
  criticalDetails: string;
  disasterRef?: string;
  capacity?: string;
  vulnerabilityFactor?: string;
}

export interface HistoricalDisaster {
  id: string;
  name: string;
  type: DisasterType;
  date: string;
  location: string;
  coordinates: [number, number];
  severity: DisasterSeverity;
  description: string;
  peakRainfallRate: string; // e.g. "88 mm/h"
  peakWaterLevel: string; // e.g. "+4.8 m above flood stage"
  casualties: number;
  evacuatedCount: number;
  economicDamage: string;
  majorEvents: TimelineMilestone[];
  affectedHospitals: string[];
  affectedRoads: string[];
  emergencyShelters: string[];
  rootCauseFailures: string[];
  successfulInterventions: string[];
  lessonsLearned: {
    domain: 'Infrastructure' | 'Communication' | 'Healthcare' | 'Logistics' | 'Public Warning';
    lesson: string;
    actionTaken: string;
  }[];
  recommendations: string[];
  tags: string[];
}

export interface MapMarkerEvent {
  id: string;
  disasterId: string;
  disasterName: string;
  title: string;
  location: string;
  coordinates: [number, number]; // lat, lng
  date: string;
  severity: DisasterSeverity;
  category: string;
  impact: string;
  lesson: string;
  recommendation: string;
  entityType?: 'Hospital' | 'Road' | 'Shelter' | 'Dam' | 'Basin';
}

export interface AnalyzedReportResult {
  title: string;
  disasterType: string;
  location: string;
  date: string;
  casualties: number;
  evacuatedCount?: number;
  timelineSummary: string[];
  infrastructureDamage: {
    entity: string;
    type: string;
    damageDescription: string;
    severity: string;
  }[];
  emergencyShelters: string[];
  problemsEncountered: string[];
  lessonsLearned: string[];
  recommendedActions: string[];
}

export interface ExtractedReportData {
  disasterType: string;
  location: string;
  estimatedDate: string;
  severity: DisasterSeverity;
  summary: string;
  peopleAffected: {
    casualtiesCount: string;
    displacedCount: string;
    evacuatedCount: string;
    vulnerablePopulationsNotes: string;
  };
  importantEvents: {
    timeOffset: string;
    event: string;
    severity: string;
    impact: string;
  }[];
  infrastructureDamage: {
    asset: string;
    type: string;
    status: string;
    criticality: 'Urgent' | 'High' | 'Moderate';
    estimatedCostOrDowntime: string;
  }[];
  emergencyShelters: {
    name: string;
    capacity: string;
    status: string;
    issuesEncountered: string;
  }[];
  problemsEncountered: string[];
  lessonsLearned: {
    category: string;
    insight: string;
    previousAssumptionVsReality: string;
  }[];
  recommendedFutureActions: {
    priority: 'Urgent' | 'High' | 'Medium';
    action: string;
    targetEntity: string;
    rationale: string;
  }[];
  rawConfidenceScore?: number;
}

export interface PatternMatchQuery {
  disasterType: string;
  location: string;
  rainfallMmPerHour: number;
  waterLevelMeters: number;
  terrainType: 'Urban Basin' | 'River Valley' | 'Coastal Lowland' | 'Hilly Watershed';
  activeObservations: string;
  infrastructureConcern: string;
}

export interface PatternMatchResult {
  matchedDisasterId: string;
  matchedDisasterName: string;
  similarityScore: number;
  similarityReasons: string[];
  likelyRiskWindows: string[];
  criticalDivergenceRisks: string[];
  recommendedPhasedActions: {
    immediate: string[];
    shortTerm: string[];
    sustained: string[];
  };
}

export interface WhatIfSimulationResult {
  scenarioName: string;
  originalDisasterBaseline: {
    casualties: number;
    economicDamage: string;
    hospitalFailures: string;
    roadClosures: string;
  };
  simulatedCounterfactualOutcome: {
    projectedCasualties: number;
    projectedEconomicDamage: string;
    preventedCascadingFailures: string[];
    deltaLivesSaved: string;
    deltaDamageReduction: string;
    confidenceScore: number;
    policyTakeaway: string;
  };
}

export interface CrossDisasterInsight {
  id: string;
  category: 'Recurring Vulnerability' | 'Repeated Failure Mode' | 'Proven Intervention' | 'Institutional Lesson';
  title: string;
  frequencyAcrossDisasters: string;
  description: string;
  affectedSectors: string[];
  historicalCaseStudies: string[];
  standardOperatingProcedureUpdate: string;
  priorityLevel: 'High Priority' | 'Critical Directive' | 'Operational Guideline';
}
