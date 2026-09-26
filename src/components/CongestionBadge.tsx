import type { CongestionLevel } from '../types';

const styles: Record<CongestionLevel, string> = {
  Low: 'bg-success/10 text-success',
  Medium: 'bg-warning/10 text-warning',
  High: 'bg-danger/10 text-danger',
};

const dotStyles: Record<CongestionLevel, string> = {
  Low: 'bg-success',
  Medium: 'bg-warning',
  High: 'bg-danger',
};

export default function CongestionBadge({ level }: { level: CongestionLevel }) {
  return (
    <span className={`badge ${styles[level]}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[level]}`} />
      {level}
    </span>
  );
}
