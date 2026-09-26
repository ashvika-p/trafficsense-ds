import { HiOutlineSignal } from 'react-icons/hi2';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <HiOutlineSignal className="h-5 w-5" />
              </span>
              <span className="text-[17px] font-bold text-secondary">
                TrafficSense <span className="text-primary">AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
              An AI-powered Smart Traffic Intelligence Platform built for Chennai Smart City,
              helping commuters and city planners predict, visualize, and optimize traffic flow.
            </p>
            <div className="mt-5 flex gap-3">
              {[FiGithub, FiTwitter, FiLinkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-secondary">Platform</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li><a href="/dashboard" className="hover:text-primary">Dashboard</a></li>
              <li><a href="/prediction" className="hover:text-primary">Traffic Prediction</a></li>
              <li><a href="/map" className="hover:text-primary">Traffic Map</a></li>
              <li><a href="/route-optimizer" className="hover:text-primary">Route Optimizer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-secondary">Project</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              <li><a href="/analytics" className="hover:text-primary">Analytics</a></li>
              <li><a href="/about" className="hover:text-primary">About Project</a></li>
              <li><span className="text-slate-400">Chennai Smart City Initiative</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 md:flex-row">
          <p>&copy; {new Date().getFullYear()} TrafficSense AI. Built for Chennai Smart City.</p>
          <p>Frontend demo &mdash; all data is simulated for illustrative purposes.</p>
        </div>
      </div>
    </footer>
  );
}
