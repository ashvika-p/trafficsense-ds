import { useState, useRef, useEffect } from 'react';
import { HiOutlineChevronDown, HiOutlineMapPin, HiOutlineCheck } from 'react-icons/hi2';
import { useCity } from '../context/CityContext';

export default function CitySelector() {
  const { city, cityId, setCityId, allCities } = useCity();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-secondary transition-colors hover:border-slate-300"
      >
        <HiOutlineMapPin className="h-4 w-4 text-primary" />
        {city.name}
        <HiOutlineChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 max-h-96 w-72 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-card-hover animate-fade-in">
          <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Select a city ({allCities.length} covered)
          </p>
          {allCities.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setCityId(c.id);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                c.id === cityId ? 'bg-primary/5 text-primary' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>
                <span className="font-medium">{c.name}</span>
                <span className="ml-1.5 text-xs text-slate-400">{c.state}</span>
              </span>
              {c.id === cityId && <HiOutlineCheck className="h-4 w-4 text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
