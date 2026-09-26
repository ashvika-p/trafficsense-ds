import type { CityData, TrendPoint, PeakHourData, WeatherImpact, AreaCongestion } from '../types';

// Base hourly shape (0-1 multiplier) representing a typical Indian metro weekday.
const baseHourlyShape = [
  { time: '6 AM', v: 0.32 },
  { time: '7 AM', v: 0.52 },
  { time: '8 AM', v: 0.82 },
  { time: '9 AM', v: 0.95 },
  { time: '10 AM', v: 0.76 },
  { time: '11 AM', v: 0.6 },
  { time: '12 PM', v: 0.64 },
  { time: '1 PM', v: 0.68 },
  { time: '2 PM', v: 0.6 },
  { time: '3 PM', v: 0.65 },
  { time: '4 PM', v: 0.72 },
  { time: '5 PM', v: 0.86 },
  { time: '6 PM', v: 1.0 },
  { time: '7 PM', v: 0.93 },
  { time: '8 PM', v: 0.77 },
  { time: '9 PM', v: 0.56 },
  { time: '10 PM', v: 0.4 },
];

const basePeakShape = [
  { hour: '6-7 AM', v: 0.34 },
  { hour: '7-8 AM', v: 0.56 },
  { hour: '8-9 AM', v: 0.9 },
  { hour: '9-10 AM', v: 0.84 },
  { hour: '10-11 AM', v: 0.64 },
  { hour: '11-12 PM', v: 0.54 },
  { hour: '5-6 PM', v: 0.94 },
  { hour: '6-7 PM', v: 1.0 },
  { hour: '7-8 PM', v: 0.87 },
  { hour: '8-9 PM', v: 0.7 },
];

const baseWeatherShape = [
  { weather: 'Clear', delayMod: 0.9, congMod: 0 },
  { weather: 'Cloudy', delayMod: 1.15, congMod: 6 },
  { weather: 'Light Rain', delayMod: 1.9, congMod: 22 },
  { weather: 'Heavy Rain', delayMod: 3.2, congMod: 48 },
  { weather: 'Humid', delayMod: 1.25, congMod: 9 },
];

const baseForecastShape = [
  { time: 'Mon', v: 0.68 },
  { time: 'Tue', v: 0.71 },
  { time: 'Wed', v: 0.76 },
  { time: 'Thu', v: 0.74 },
  { time: 'Fri', v: 0.88 },
  { time: 'Sat', v: 0.62 },
  { time: 'Sun', v: 0.44 },
];

function clamp(n: number, min = 4, max = 98) {
  return Math.max(min, Math.min(max, Math.round(n)));
}

export function generateTrend(city: CityData): TrendPoint[] {
  return baseHourlyShape.map((p, idx) => {
    const jitter = ((idx * 7 + city.trafficIndex * 100) % 5) - 2;
    const congestion = clamp(p.v * city.trafficIndex * 100 + jitter);
    const predicted = clamp(congestion + (((idx * 3) % 5) - 2));
    return { time: p.time, congestion, predicted };
  });
}

export function generatePeakHours(city: CityData): PeakHourData[] {
  return basePeakShape.map((p, idx) => ({
    hour: p.hour,
    congestion: clamp(p.v * city.trafficIndex * 100 + (((idx * 5) % 4) - 1)),
  }));
}

export function generateWeatherImpact(city: CityData): WeatherImpact[] {
  const baseDelay = 6 + city.trafficIndex * 8;
  return baseWeatherShape.map((w) => ({
    weather: w.weather,
    avgDelay: Math.round(baseDelay * w.delayMod),
    congestionIncrease: w.congMod,
  }));
}

export function generateForecast(city: CityData): TrendPoint[] {
  return baseForecastShape.map((p, idx) => {
    const congestion = clamp(p.v * city.trafficIndex * 100 + (((idx * 4) % 5) - 2));
    const predicted = clamp(congestion + (((idx * 2) % 3) - 1));
    return { time: p.time, congestion, predicted };
  });
}

export function generateAreaCongestion(city: CityData): AreaCongestion[] {
  return city.zones
    .map((z) => ({
      area: z.name,
      congestion: z.score,
      incidents: Math.max(1, Math.round(z.score / 8)),
    }))
    .sort((a, b) => b.congestion - a.congestion);
}

export function generateDistribution(city: CityData) {
  const low = city.zones.filter((z) => z.congestion === 'Low').length;
  const medium = city.zones.filter((z) => z.congestion === 'Medium').length;
  const high = city.zones.filter((z) => z.congestion === 'High').length;
  const total = city.zones.length || 1;
  return [
    { name: 'Low', value: Math.round((low / total) * 100), color: '#10B981' },
    { name: 'Medium', value: Math.round((medium / total) * 100), color: '#F59E0B' },
    { name: 'High', value: Math.round((high / total) * 100), color: '#EF4444' },
  ];
}

export function averageCongestion(city: CityData): number {
  const total = city.zones.reduce((sum, z) => sum + z.score, 0);
  return Math.round(total / (city.zones.length || 1));
}

export function averageDelay(city: CityData): number {
  return Math.round(averageCongestion(city) * 0.24);
}
