import type { StatDelta } from '../types/game';

const STAT_LABELS: Record<string, string> = {
  cgpa: 'CGPA',
  mentalHealth: 'Mental Health',
  socialBattery: 'Social Battery',
  physicalEnergy: 'Physical Energy',
  attendance: 'Attendance',
  arrears: 'Arrears',
  money: 'Money',
  placementReadiness: 'Placement Ready',
  hodRelation: 'HOD Relation',
  romance: 'Romance',
  rivalry: 'Rivalry',
  reputation: 'Reputation',
  familyPressure: 'Family Pressure'
};

interface Props {
  delta: StatDelta;
}

export default function DeltaToast({ delta }: Props) {
  const entries = Object.entries(delta).filter(([, v]) => v !== undefined && v !== 0);
  if (entries.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {entries.map(([key, val]) => {
        const numVal = val as number;
        const isPositive = key === 'arrears' || key === 'familyPressure' || key === 'rivalry'
          ? numVal < 0
          : numVal > 0;
        const isNegative = key === 'arrears' || key === 'familyPressure' || key === 'rivalry'
          ? numVal > 0
          : numVal < 0;

        return (
          <span
            key={key}
            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono font-semibold border ${
              isPositive
                ? 'bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800'
                : isNegative
                ? 'bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800'
                : 'bg-muted text-muted-foreground border-muted-border'
            }`}
          >
            {isPositive ? '↑' : isNegative ? '↓' : '→'} {STAT_LABELS[key] || key}
            {' '}
            {key === 'money'
              ? `₹${Math.abs(numVal).toLocaleString()}`
              : key === 'cgpa'
              ? Math.abs(numVal).toFixed(2)
              : Math.abs(numVal)}
          </span>
        );
      })}
    </div>
  );
}
