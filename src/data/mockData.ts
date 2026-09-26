import type {
  TrafficZone,
  TrendPoint,
  PredictionRecord,
  PeakHourData,
  WeatherImpact,
  AreaCongestion,
  RouteOption,
} from '../types';

export const chennaiZones: TrafficZone[] = [
  {
    id: 'zone-1',
    name: 'T Nagar',
    area: 'T Nagar',
    congestion: 'High',
    congestionScore: 88,
    avgSpeed: 14,
    vehicleCount: 5200,
    lat: 13.0418,
    lng: 80.2341,
    x: 42,
    y: 55,
  },
  {
    id: 'zone-2',
    name: 'Anna Nagar',
    area: 'Anna Nagar',
    congestion: 'Medium',
    congestionScore: 58,
    avgSpeed: 26,
    vehicleCount: 3400,
    lat: 13.0850,
    lng: 80.2101,
    x: 30,
    y: 30,
  },
  {
    id: 'zone-3',
    name: 'Velachery',
    area: 'Velachery',
    congestion: 'High',
    congestionScore: 79,
    avgSpeed: 17,
    vehicleCount: 4700,
    lat: 12.9750,
    lng: 80.2200,
    x: 48,
    y: 72,
  },
  {
    id: 'zone-4',
    name: 'Guindy',
    area: 'Guindy',
    congestion: 'Medium',
    congestionScore: 61,
    avgSpeed: 24,
    vehicleCount: 3900,
    lat: 13.0067,
    lng: 80.2206,
    x: 40,
    y: 62,
  },
  {
    id: 'zone-5',
    name: 'Adyar',
    area: 'Adyar',
    congestion: 'Low',
    congestionScore: 34,
    avgSpeed: 36,
    vehicleCount: 2300,
    lat: 13.0012,
    lng: 80.2565,
    x: 58,
    y: 65,
  },
  {
    id: 'zone-6',
    name: 'Tambaram',
    area: 'Tambaram',
    congestion: 'Medium',
    congestionScore: 55,
    avgSpeed: 28,
    vehicleCount: 3100,
    lat: 12.9249,
    lng: 80.1000,
    x: 22,
    y: 90,
  },
  {
    id: 'zone-7',
    name: 'OMR',
    area: 'Old Mahabalipuram Road',
    congestion: 'High',
    congestionScore: 82,
    avgSpeed: 19,
    vehicleCount: 6100,
    lat: 12.8996,
    lng: 80.2274,
    x: 66,
    y: 82,
  },
];

export const trendData: TrendPoint[] = [
  { time: '6 AM', congestion: 28, predicted: 30 },
  { time: '7 AM', congestion: 45, predicted: 48 },
  { time: '8 AM', congestion: 72, predicted: 75 },
  { time: '9 AM', congestion: 86, predicted: 84 },
  { time: '10 AM', congestion: 68, predicted: 70 },
  { time: '11 AM', congestion: 54, predicted: 56 },
  { time: '12 PM', congestion: 58, predicted: 60 },
  { time: '1 PM', congestion: 62, predicted: 61 },
  { time: '2 PM', congestion: 55, predicted: 57 },
  { time: '3 PM', congestion: 60, predicted: 62 },
  { time: '4 PM', congestion: 66, predicted: 68 },
  { time: '5 PM', congestion: 79, predicted: 81 },
  { time: '6 PM', congestion: 91, predicted: 89 },
  { time: '7 PM', congestion: 85, predicted: 87 },
  { time: '8 PM', congestion: 70, predicted: 72 },
  { time: '9 PM', congestion: 52, predicted: 54 },
  { time: '10 PM', congestion: 38, predicted: 40 },
];

export const congestionDistribution = [
  { name: 'Low', value: 22, color: '#10B981' },
  { name: 'Medium', value: 41, color: '#F59E0B' },
  { name: 'High', value: 37, color: '#EF4444' },
];

export const recentPredictions: PredictionRecord[] = [
  { id: 'PR-1042', location: 'OMR', time: '08:45 AM', congestion: 'High', delay: 22, confidence: 94 },
  { id: 'PR-1041', location: 'T Nagar', time: '08:30 AM', congestion: 'High', delay: 19, confidence: 91 },
  { id: 'PR-1040', location: 'Velachery', time: '08:15 AM', congestion: 'High', delay: 17, confidence: 89 },
  { id: 'PR-1039', location: 'Anna Nagar', time: '08:00 AM', congestion: 'Medium', delay: 11, confidence: 93 },
  { id: 'PR-1038', location: 'Guindy', time: '07:45 AM', congestion: 'Medium', delay: 9, confidence: 90 },
  { id: 'PR-1037', location: 'Adyar', time: '07:30 AM', congestion: 'Low', delay: 4, confidence: 96 },
  { id: 'PR-1036', location: 'Tambaram', time: '07:15 AM', congestion: 'Medium', delay: 8, confidence: 88 },
];

export const peakHourData: PeakHourData[] = [
  { hour: '6-7 AM', congestion: 30 },
  { hour: '7-8 AM', congestion: 52 },
  { hour: '8-9 AM', congestion: 84 },
  { hour: '9-10 AM', congestion: 78 },
  { hour: '10-11 AM', congestion: 60 },
  { hour: '11-12 PM', congestion: 50 },
  { hour: '5-6 PM', congestion: 88 },
  { hour: '6-7 PM', congestion: 93 },
  { hour: '7-8 PM', congestion: 81 },
  { hour: '8-9 PM', congestion: 65 },
];

export const weatherImpactData: WeatherImpact[] = [
  { weather: 'Clear', avgDelay: 8, congestionIncrease: 0 },
  { weather: 'Cloudy', avgDelay: 11, congestionIncrease: 6 },
  { weather: 'Light Rain', avgDelay: 19, congestionIncrease: 22 },
  { weather: 'Heavy Rain', avgDelay: 34, congestionIncrease: 48 },
  { weather: 'Humid', avgDelay: 12, congestionIncrease: 9 },
];

export const areaCongestionData: AreaCongestion[] = [
  { area: 'T Nagar', congestion: 88, incidents: 12 },
  { area: 'OMR', congestion: 82, incidents: 15 },
  { area: 'Velachery', congestion: 79, incidents: 10 },
  { area: 'Guindy', congestion: 61, incidents: 7 },
  { area: 'Anna Nagar', congestion: 58, incidents: 6 },
  { area: 'Tambaram', congestion: 55, incidents: 5 },
  { area: 'Adyar', congestion: 34, incidents: 3 },
];

export const forecastData: TrendPoint[] = [
  { time: 'Mon', congestion: 62, predicted: 64 },
  { time: 'Tue', congestion: 65, predicted: 66 },
  { time: 'Wed', congestion: 70, predicted: 71 },
  { time: 'Thu', congestion: 68, predicted: 69 },
  { time: 'Fri', congestion: 78, predicted: 80 },
  { time: 'Sat', congestion: 58, predicted: 60 },
  { time: 'Sun', congestion: 40, predicted: 42 },
];

export const locations = [
  'T Nagar',
  'Anna Nagar',
  'Velachery',
  'Guindy',
  'Adyar',
  'Tambaram',
  'OMR',
  'Marina Beach',
  'Porur',
  'Chennai Airport',
];

export const weatherOptions = ['Clear', 'Cloudy', 'Light Rain', 'Heavy Rain', 'Humid'];

interface RoutePair {
  from: string;
  to: string;
  best: RouteOption;
  alternative: RouteOption;
}

export const routeExamples: RoutePair[] = [
  {
    from: 'Anna Nagar',
    to: 'OMR',
    best: {
      name: 'Inner Ring Road via Koyambedu',
      distance: 24.6,
      time: 52,
      trafficScore: 68,
      congestion: 'Medium',
      via: ['Koyambedu', 'Guindy', 'Velachery'],
    },
    alternative: {
      name: 'Anna Salai via T Nagar',
      distance: 22.1,
      time: 64,
      trafficScore: 84,
      congestion: 'High',
      via: ['T Nagar', 'Saidapet', 'Guindy'],
    },
  },
  {
    from: 'Tambaram',
    to: 'Guindy',
    best: {
      name: 'GST Road Express',
      distance: 16.4,
      time: 31,
      trafficScore: 52,
      congestion: 'Medium',
      via: ['Chromepet', 'Pallavaram', 'St. Thomas Mount'],
    },
    alternative: {
      name: 'Velachery Bypass',
      distance: 19.2,
      time: 41,
      trafficScore: 66,
      congestion: 'Medium',
      via: ['Chromepet', 'Velachery', 'Guindy'],
    },
  },
  {
    from: 'Adyar',
    to: 'Marina Beach',
    best: {
      name: 'Beach Road Coastal Route',
      distance: 8.2,
      time: 18,
      trafficScore: 38,
      congestion: 'Low',
      via: ['Besant Nagar', 'Foreshore Estate'],
    },
    alternative: {
      name: 'RK Salai via Mylapore',
      distance: 9.6,
      time: 26,
      trafficScore: 57,
      congestion: 'Medium',
      via: ['Mylapore', 'Triplicane'],
    },
  },
];
