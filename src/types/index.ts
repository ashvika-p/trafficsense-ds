export type CongestionLevel = 'Low' | 'Medium' | 'High';

export interface ZoneSeed {
  name: string;
  congestion: CongestionLevel;
  score: number;
  speed: number;
  vehicles: number;
  lat: number;
  lng: number;
}

export interface RouteSeed {
  name: string;
  distance: number;
  time: number;
  trafficScore: number;
  congestion: CongestionLevel;
  via: string[];
}

export interface RoutePairSeed {
  from: string;
  to: string;
  best: RouteSeed;
  alternative: RouteSeed;
}

export interface CityData {
  id: string;
  name: string;
  state: string;
  tagline: string;
  trafficIndex: number; // 0-1 baseline congestion multiplier used to derive charts
  aiAccuracy: number; // percentage
  zones: ZoneSeed[];
  routes: RoutePairSeed[];
}

export interface TrafficZone {
  id: string;
  name: string;
  area: string;
  congestion: CongestionLevel;
  congestionScore: number; // 0-100
  avgSpeed: number; // km/h
  vehicleCount: number;
  lat: number;
  lng: number;
  x: number; // position on the SVG map (percentage)
  y: number;
}

export interface TrendPoint {
  time: string;
  congestion: number;
  predicted: number;
}

export interface PredictionRecord {
  id: string;
  location: string;
  time: string;
  congestion: CongestionLevel;
  delay: number; // minutes
  confidence: number; // percentage
}

export interface PeakHourData {
  hour: string;
  congestion: number;
}

export interface WeatherImpact {
  weather: string;
  avgDelay: number;
  congestionIncrease: number;
}

export interface AreaCongestion {
  area: string;
  congestion: number;
  incidents: number;
}

export interface RouteOption {
  name: string;
  distance: number; // km
  time: number; // minutes
  trafficScore: number; // 0-100 (lower is better)
  congestion: CongestionLevel;
  via: string[];
}

export interface PredictionInput {
  location: string;
  time: string;
  weather: string;
  vehicleCount: number;
}

export interface PredictionOutput {
  congestionLevel: CongestionLevel;
  congestionScore: number;
  predictedDelay: number;
  avgSpeed: number;
  recommendation: string;
}
