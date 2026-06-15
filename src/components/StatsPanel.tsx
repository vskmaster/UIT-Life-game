import type { Stats } from '../types/game';
import StatBar from './StatBar';

interface Props {
  stats: Stats;
  week: number;
  semester: number;
  profileName: string;
  branch: string;
}

export default function StatsPanel({ stats, week, semester, profileName, branch }: Props) {
  return (
    <div className="bg-card border border-card-border rounded-lg p-4 h-full overflow-y-auto">
      {/* Header */}
      <div className="mb-4 pb-3 border-b border-border">
        <div className="font-semibold text-foreground text-sm">{profileName}</div>
        <div className="text-xs text-muted-foreground font-mono">{branch} • Sem {semester} • Week {week}</div>
      </div>

      {/* Academic */}
      <div className="mb-4">
        <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-2">Academic</div>
        <div className="space-y-2">
          <StatBar label="CGPA" value={stats.cgpa} max={10} showValue />
          <StatBar label="Attendance %" value={stats.attendance} max={100} danger showValue />
          <div className="flex justify-between text-xs font-mono">
            <span className="text-muted-foreground">Arrears</span>
            <span className={`font-semibold ${stats.arrears > 5 ? 'text-destructive' : stats.arrears > 0 ? 'text-yellow-600' : 'text-foreground'}`}>
              {stats.arrears}
            </span>
          </div>
        </div>
      </div>

      {/* Wellbeing */}
      <div className="mb-4">
        <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-2">Wellbeing</div>
        <div className="space-y-2">
          <StatBar label="Mental Health" value={stats.mentalHealth} danger />
          <StatBar label="Social Battery" value={stats.socialBattery} />
          <StatBar label="Physical Energy" value={stats.physicalEnergy} danger />
        </div>
      </div>

      {/* Career */}
      <div className="mb-4">
        <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-2">Career</div>
        <div className="space-y-2">
          <StatBar label="Placement Ready" value={stats.placementReadiness} />
          <StatBar label="HOD Relation" value={stats.hodRelation} />
        </div>
      </div>

      {/* Social */}
      <div className="mb-4">
        <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-2">Social</div>
        <div className="space-y-2">
          <StatBar label="Reputation" value={stats.reputation} />
          <StatBar label="Romance" value={stats.romance} colorClass="bg-pink-500" />
          <StatBar label="Rivalry" value={stats.rivalry} colorClass="bg-orange-500" />
        </div>
      </div>

      {/* Life */}
      <div className="mb-2">
        <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-2">Life</div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-muted-foreground">Money</span>
            <span className="font-semibold text-foreground">₹{stats.money.toLocaleString()}</span>
          </div>
          <StatBar label="Family Pressure" value={stats.familyPressure} colorClass={stats.familyPressure > 70 ? 'bg-destructive' : 'bg-orange-400'} danger />
        </div>
      </div>

      {/* Warnings */}
      {stats.attendance < 75 && (
        <div className="mt-3 bg-destructive/10 border border-destructive/30 rounded p-2">
          <p className="text-xs text-destructive font-mono pulse-red">⚠ Attendance below 75%! Detention risk!</p>
        </div>
      )}
      {stats.mentalHealth < 30 && (
        <div className="mt-2 bg-destructive/10 border border-destructive/30 rounded p-2">
          <p className="text-xs text-destructive font-mono pulse-red">⚠ Mental health critical! Burnout risk!</p>
        </div>
      )}
      {stats.arrears > 5 && (
        <div className="mt-2 bg-yellow-500/10 border border-yellow-500/30 rounded p-2">
          <p className="text-xs text-yellow-700 dark:text-yellow-400 font-mono">⚠ Arrears high — year drop risk!</p>
        </div>
      )}
    </div>
  );
}
