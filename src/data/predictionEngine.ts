import type { PredictionInput, PredictionOutput, CongestionLevel, CityData } from '../types';

const weatherModifier: Record<string, number> = {
  Clear: 0,
  Cloudy: 5,
  'Light Rain': 18,
  'Heavy Rain': 35,
  Humid: 8,
};

function hourFromTimeString(time: string): number {
  const [h] = time.split(':');
  const hour = parseInt(h, 10);
  return isNaN(hour) ? 9 : hour;
}

function timeModifier(time: string): number {
  const hour = hourFromTimeString(time);
  if (hour >= 8 && hour <= 10) return 22;
  if (hour >= 17 && hour <= 20) return 26;
  if (hour >= 11 && hour <= 16) return 8;
  if (hour >= 21 || hour <= 5) return -20;
  return 0;
}

function levelFromScore(score: number): CongestionLevel {
  if (score >= 70) return 'High';
  if (score >= 40) return 'Medium';
  return 'Low';
}

function recommendationFor(level: CongestionLevel, location: string, weather: string, cityName: string): string {
  if (level === 'High') {
    if (weather === 'Heavy Rain' || weather === 'Light Rain') {
      return `Heavy congestion expected near ${location}, ${cityName}, compounded by rain. Consider delaying travel by 30-45 minutes or using an alternate arterial route.`;
    }
    return `${location} is projected to be heavily congested. Consider an alternate route via nearby ring roads or shift travel by 20-30 minutes to avoid peak load.`;
  }
  if (level === 'Medium') {
    return `Moderate traffic expected around ${location}. Current route remains viable, but leaving 10-15 minutes earlier is recommended for a smoother commute.`;
  }
  return `Traffic near ${location} is expected to flow smoothly. This is an optimal time window for travel with minimal delay.`;
}

/**
 * Finds the base congestion load for a location. If the location matches a known
 * zone in the selected city, its live score is used; otherwise the city's average
 * zone score is used as a reasonable baseline (covers landmarks not explicitly modeled).
 */
function baseLoadFor(city: CityData, location: string): number {
  const match = city.zones.find((z) => z.name.toLowerCase() === location.toLowerCase());
  if (match) return match.score;
  const avg = city.zones.reduce((sum, z) => sum + z.score, 0) / (city.zones.length || 1);
  return avg;
}

export function generatePrediction(input: PredictionInput, city: CityData): PredictionOutput {
  const base = baseLoadFor(city, input.location);
  const wMod = weatherModifier[input.weather] ?? 0;
  const tMod = timeModifier(input.time);
  const vehicleMod = Math.min(20, Math.floor(input.vehicleCount / 500));

  let score = base + wMod * 0.6 + tMod * 0.6 + vehicleMod * 0.5;
  const seed = (input.location.length * 7 + input.time.length * 3 + input.vehicleCount) % 11;
  score += seed - 5;
  score = Math.max(5, Math.min(98, Math.round(score)));

  const level = levelFromScore(score);
  const avgSpeed = Math.max(8, Math.round(48 - score * 0.4));
  const predictedDelay = Math.max(1, Math.round(score * 0.35 + (wMod > 0 ? wMod * 0.2 : 0)));

  return {
    congestionLevel: level,
    congestionScore: score,
    predictedDelay,
    avgSpeed,
    recommendation: recommendationFor(level, input.location, input.weather, city.name),
  };
}
