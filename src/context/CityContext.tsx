import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { citiesData, getCityById } from '../data/citiesData';
import type { CityData } from '../types';

interface CityContextValue {
  city: CityData;
  cityId: string;
  setCityId: (id: string) => void;
  allCities: CityData[];
}

const CityContext = createContext<CityContextValue | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [cityId, setCityId] = useState<string>('chennai');
  const city = useMemo(() => getCityById(cityId), [cityId]);

  const value: CityContextValue = {
    city,
    cityId,
    setCityId,
    allCities: citiesData,
  };

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}

export function useCity() {
  const ctx = useContext(CityContext);
  if (!ctx) throw new Error('useCity must be used within a CityProvider');
  return ctx;
}
