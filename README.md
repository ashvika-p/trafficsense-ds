# TrafficSense AI

An AI-powered **Smart Traffic Intelligence Platform** covering **20+ major Indian cities** — built as a **100% frontend-only** application with mock data. No backend, no database, no authentication API.

## Multi-City Coverage

A global **city switcher** (top-right of the navbar, and on the landing page) drives every page in
the app. Switch cities and the Dashboard, Traffic Map, Prediction engine, Route Optimizer, and
Analytics all update instantly. Covered cities:

Chennai, Mumbai, Delhi NCR, Bengaluru, Hyderabad, Kolkata, Pune, Ahmedabad, Jaipur, Lucknow,
Chandigarh, Kochi, Surat, Indore, Nagpur, Coimbatore, Bhopal, Visakhapatnam, Patna, Guwahati.

Each city ships with real, well-known localities, simulated live congestion metrics, and sample
optimized routes. More cities can be added by appending an entry to `src/data/citiesData.ts` — no
other code changes are required.

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Recharts
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Pages

| Route              | Page                                                        |
|---------------------|--------------------------------------------------------------|
| `/`                 | Landing page — hero, live preview, features, city strip, CTA |
| `/dashboard`        | KPI cards, trend/distribution charts, predictions table, peak hours — for the selected city |
| `/prediction`       | AI Traffic Prediction tool (location, time, weather, vehicle count → congestion, delay, speed, recommendation) |
| `/map`              | Interactive traffic map for the selected city, generated from its real localities |
| `/route-optimizer`  | Best vs alternative route comparisons for sample routes in the selected city |
| `/analytics`        | Peak hour analysis, weather impact, area-wise congestion, weekly forecast — for the selected city |
| `/about`            | Problem statement, solution, tech stack, features, future scope |

## Notes

- All traffic data, predictions, and analytics are **simulated** using a deterministic mock
  prediction engine (`src/data/predictionEngine.ts`), a per-city dataset
  (`src/data/citiesData.ts`), and chart generators that scale realistic patterns by each city's
  traffic index (`src/data/chartGenerators.ts`). There is no real backend, live sensor feed, or ML
  model running.
- The selected city is held in a shared React context (`src/context/CityContext.tsx`) so every
  page reacts to the city switcher in the navbar.
- Color palette, typography, and component styling follow a premium SaaS aesthetic inspired by
  Stripe, Linear, Vercel, and Apple.
