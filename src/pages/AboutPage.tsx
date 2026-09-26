import {
  HiOutlineExclamationCircle,
  HiOutlineLightBulb,
  HiOutlineCog,
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';
import { SiReact, SiTypescript, SiTailwindcss, SiVite } from 'react-icons/si';
import { HiOutlineChartBar } from 'react-icons/hi';

const techStack = [
  { icon: SiReact, name: 'React', desc: 'Component-driven UI library' },
  { icon: SiTypescript, name: 'TypeScript', desc: 'Type-safe application logic' },
  { icon: SiVite, name: 'Vite', desc: 'Lightning-fast build tooling' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', desc: 'Utility-first styling system' },
  { icon: HiOutlineChartBar, name: 'Recharts', desc: 'Data visualization charts' },
  { icon: HiOutlineSparkles, name: 'React Icons', desc: 'Consistent iconography' },
];

const featureList = [
  'City switcher covering 20+ major Indian cities across the whole platform',
  'Real-time traffic dashboard with KPI monitoring, per city',
  'AI-powered congestion & delay prediction engine',
  'Interactive traffic map with live zone indicators for each city',
  'Smart route optimizer with alternative route comparison',
  'Deep analytics: peak hours, weather impact, area-wise trends',
  'Fully responsive, premium SaaS-grade interface',
];

const futureScope = [
  'Integration with live GPS and IoT sensor feeds from city traffic signal networks',
  'Real machine learning model deployment (LSTM / XGBoost) replacing mock logic, trained per-city',
  'Public transit integration (metro, BMTC/MTC/BEST buses) for multi-modal routing in each city',
  'Citizen reporting layer for accidents, roadblocks, and construction zones',
  'Integration with each city\u2019s Smart City command and control centers',
  'Mobile app with push notifications for commute-time congestion alerts',
  'Expansion beyond the initial 20 cities to full pan-India district-level coverage',
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
          About the Project
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
          TrafficSense AI
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          A Smart Traffic Intelligence Platform designed for Chennai Smart City &mdash; combining
          AI-driven forecasting with clean, modern data visualization.
        </p>
      </div>

      {/* Problem Statement */}
      <section className="mt-14">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-danger/10 text-danger">
            <HiOutlineExclamationCircle className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-bold text-secondary">Problem Statement</h2>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          Rapid urbanization across India has led to severe traffic congestion in nearly every
          major city &mdash; from T Nagar in Chennai and Silk Board in Bengaluru, to Andheri in
          Mumbai and Connaught Place in Delhi. Commuters face unpredictable delays, and city
          planners lack real-time, data-driven visibility into congestion patterns. Existing
          traffic systems are largely reactive &mdash; reporting congestion only after it occurs
          &mdash; rather than predicting it ahead of time to enable proactive, city-specific
          traffic management.
        </p>
      </section>

      {/* Proposed Solution */}
      <section className="mt-12">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <HiOutlineLightBulb className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-bold text-secondary">Proposed Solution</h2>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          TrafficSense AI proposes a unified intelligence platform that uses AI-driven models to
          forecast congestion levels, predicted delays, and optimal routes across 20+ major Indian
          cities &mdash; spanning north, south, east, west, central, and northeast India. By
          combining historical traffic trends, weather conditions, and vehicle density for each
          city, the platform generates actionable predictions and recommendations &mdash;
          empowering both commuters and city planners to make smarter, faster decisions, with a
          single switchable interface rather than a separate tool per city.
        </p>
      </section>

      {/* Technology Stack */}
      <section className="mt-12">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <HiOutlineCog className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-bold text-secondary">Technology Stack</h2>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {techStack.map((t) => (
            <div key={t.name} className="card p-4">
              <t.icon className="h-6 w-6 text-secondary" />
              <p className="mt-2.5 text-sm font-semibold text-secondary">{t.name}</p>
              <p className="mt-0.5 text-xs text-slate-400">{t.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Note: this is a fully frontend-only implementation. All traffic data, predictions, and
          analytics shown are simulated using deterministic mock data models &mdash; no backend,
          database, or authentication service is used.
        </p>
      </section>

      {/* Features */}
      <section className="mt-12">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success">
            <HiOutlineSparkles className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-bold text-secondary">Features</h2>
        </div>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {featureList.map((f) => (
            <li key={f} className="card flex items-start gap-2.5 p-4 text-sm text-slate-600">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* Future Scope */}
      <section className="mt-12 mb-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-warning/10 text-warning">
            <HiOutlineRocketLaunch className="h-5 w-5" />
          </span>
          <h2 className="text-xl font-bold text-secondary">Future Scope</h2>
        </div>
        <ul className="mt-5 space-y-3">
          {futureScope.map((f, idx) => (
            <li key={f} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 text-sm text-slate-600 shadow-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
                {idx + 1}
              </span>
              {f}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
