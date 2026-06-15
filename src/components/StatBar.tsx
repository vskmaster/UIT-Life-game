interface StatBarProps {
  label: string;
  value: number;
  max?: number;
  colorClass?: string;
  showValue?: boolean;
  danger?: boolean;
}

function getColor(value: number, danger?: boolean): string {
  if (danger && value < 30) return 'bg-destructive';
  if (value < 25) return 'bg-destructive';
  if (value < 50) return 'bg-yellow-500';
  return 'bg-primary';
}

export default function StatBar({ label, value, max = 100, colorClass, showValue = true, danger }: StatBarProps) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const color = colorClass || getColor(value, danger);
  const isCritical = value < 25;

  return (
    <div className="space-y-0.5">
      <div className="flex justify-between items-center">
        <span className={`text-xs font-mono text-muted-foreground ${isCritical && danger ? 'pulse-red text-destructive' : ''}`}>
          {label}
        </span>
        {showValue && (
          <span className={`text-xs font-mono font-semibold ${isCritical && danger ? 'text-destructive pulse-red' : 'text-foreground'}`}>
            {typeof value === 'number' && !Number.isInteger(value) ? value.toFixed(2) : value}
          </span>
        )}
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full stat-bar-inner ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
