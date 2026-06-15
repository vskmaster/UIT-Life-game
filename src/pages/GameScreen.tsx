import { useState, useEffect, useRef } from 'react';
import type { GameState, Choice, StatDelta } from '../types/game';
import { applyDelta, checkGameOver, getEventForWeek, generateEndingSummary } from '../lib/gameEngine';
import StatsPanel from '../components/StatsPanel';
import DeltaToast from '../components/DeltaToast';

interface Props {
  gameState: GameState;
  onStateChange: (state: GameState) => void;
  onRestart: () => void;
}

type Phase = 'event' | 'chosen' | 'ending';

export default function GameScreen({ gameState, onStateChange, onRestart }: Props) {
  const [phase, setPhase] = useState<Phase>('event');
  const [lastDelta, setLastDelta] = useState<StatDelta>({});
  const [lastConsequence, setLastConsequence] = useState('');
  const [showLog, setShowLog] = useState(false);
  const narrativeRef = useRef<HTMLDivElement>(null);

  const currentEvent = getEventForWeek(gameState.semester, gameState.week);

  useEffect(() => {
    setPhase('event');
    setLastDelta({});
    setLastConsequence('');
    if (narrativeRef.current) {
      narrativeRef.current.scrollTop = 0;
    }
  }, [gameState.week, gameState.semester]);

  const handleChoice = (choice: Choice) => {
    const newStats = applyDelta(gameState.stats, choice.delta);
    setLastDelta(choice.delta);
    setLastConsequence(choice.consequence);

    const gameOver = checkGameOver(newStats);

    const newLog = [...gameState.log, {
      week: gameState.week,
      semester: gameState.semester,
      narrative: currentEvent?.narrative || '',
      choiceText: choice.text,
      consequence: choice.consequence,
      deltaSnapshot: choice.delta
    }];

    if (gameOver.over) {
      const newState: GameState = {
        ...gameState,
        stats: newStats,
        log: newLog,
        gameOver: true,
        gameOverReason: gameOver.reason,
        endingSummary: generateEndingSummary({ ...gameState, stats: newStats })
      };
      onStateChange(newState);
      setPhase('ending');
      return;
    }

    // Check if this is the very last event
    const isLastEvent = gameState.semester === 4 && gameState.week === 8;

    if (isLastEvent) {
      const newState: GameState = {
        ...gameState,
        stats: newStats,
        log: newLog,
        gameOver: false,
        endingSummary: generateEndingSummary({ ...gameState, stats: newStats })
      };
      onStateChange(newState);
      setPhase('ending');
      return;
    }

    const newState: GameState = {
      ...gameState,
      stats: newStats,
      log: newLog
    };
    onStateChange(newState);
    setPhase('chosen');
  };

  const handleNext = () => {
    let nextWeek = gameState.week + 1;
    let nextSem = gameState.semester;

    if (nextWeek > 8) {
      nextWeek = 1;
      nextSem = nextSem + 1;
    }

    onStateChange({
      ...gameState,
      week: nextWeek,
      semester: nextSem
    });
  };

  if (!currentEvent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <p className="font-mono text-sm">Event not found. Sem {gameState.semester} Week {gameState.week}</p>
          <button onClick={onRestart} className="mt-4 text-primary text-sm underline">Restart</button>
        </div>
      </div>
    );
  }

  if (phase === 'ending' || (gameState.gameOver || gameState.endingSummary)) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-card border border-card-border rounded-lg overflow-hidden shadow-lg">
            <div className="bg-primary text-primary-foreground px-6 py-4">
              <div className="font-mono text-xs uppercase tracking-widest mb-1 opacity-80">
                {gameState.gameOver ? 'Chapter Closed' : 'UIT Journey Complete'}
              </div>
              <h2 className="text-2xl font-bold" style={{ fontFamily: "'Caveat', cursive" }}>
                {gameState.gameOver ? 'Game Over, Machi' : 'Vanakkam, Alumnus!'}
              </h2>
            </div>

            {gameState.gameOver && gameState.gameOverReason && (
              <div className="px-6 py-4 bg-destructive/10 border-b border-destructive/20">
                <p className="text-sm text-destructive font-mono">{gameState.gameOverReason}</p>
              </div>
            )}

            <div className="px-6 py-5">
              <pre className="text-sm text-foreground font-mono whitespace-pre-wrap leading-relaxed">
                {gameState.endingSummary || generateEndingSummary(gameState)}
              </pre>
            </div>

            <div className="px-6 pb-5 flex gap-3">
              <button
                data-testid="button-restart"
                onClick={onRestart}
                className="flex-1 bg-primary text-primary-foreground rounded py-3 text-sm font-bold hover:opacity-90 transition-opacity"
              >
                Play Again — New Character
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-3 md:p-5">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-mono uppercase tracking-widest rounded-sm">
              UIT Life
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              Sem {gameState.semester} • Week {gameState.week}/8
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              data-testid="button-toggle-log"
              onClick={() => setShowLog(!showLog)}
              className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors border border-border rounded px-2 py-1"
            >
              {showLog ? 'Hide Log' : 'Show Log'}
            </button>
            <button
              data-testid="button-restart-game"
              onClick={onRestart}
              className="text-xs font-mono text-muted-foreground hover:text-destructive transition-colors"
            >
              Restart
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4">
          {/* Stats Panel */}
          <div className="lg:block">
            <StatsPanel
              stats={gameState.stats}
              week={gameState.week}
              semester={gameState.semester}
              profileName={gameState.profile.name}
              branch={gameState.profile.branch}
            />
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            {/* Log View */}
            {showLog && gameState.log.length > 0 && (
              <div className="bg-card border border-card-border rounded-lg p-4 max-h-64 overflow-y-auto flash-in">
                <div className="text-xs font-mono uppercase text-muted-foreground tracking-widest mb-3">Story Log</div>
                {[...gameState.log].reverse().map((entry, i) => (
                  <div key={i} className="mb-3 pb-3 border-b border-border last:border-0">
                    <div className="text-xs font-mono text-muted-foreground mb-0.5">Sem {entry.semester}, Week {entry.week}</div>
                    <div className="text-xs text-foreground">→ {entry.choiceText}</div>
                    <div className="text-xs text-muted-foreground italic mt-0.5">{entry.consequence}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Event Card */}
            <div className="bg-card border border-card-border rounded-lg overflow-hidden shadow-sm flash-in">
              {/* Event Header */}
              <div className="border-b border-border px-5 py-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                    Week {currentEvent.week}, Semester {currentEvent.semester}
                  </div>
                  <h2 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Caveat', cursive", fontSize: '1.3rem' }}>
                    {currentEvent.title}
                  </h2>
                </div>
                {currentEvent.randomEvent && (
                  <span className="text-xs bg-accent/20 text-accent border border-accent/30 rounded px-2 py-0.5 font-mono hidden sm:block">
                    Random Event
                  </span>
                )}
              </div>

              {/* Random Event Banner */}
              {currentEvent.randomEvent && (
                <div className="bg-accent/10 border-b border-accent/20 px-5 py-2">
                  <p className="text-xs font-mono text-accent">🎲 {currentEvent.randomEvent}</p>
                </div>
              )}

              {/* Narrative */}
              <div ref={narrativeRef} className="px-5 py-5 notebook-lines">
                <div className="narrative-text text-foreground whitespace-pre-wrap">
                  {currentEvent.narrative}
                </div>
              </div>

              {/* Consequence (shown after choice) */}
              {phase === 'chosen' && (
                <div className="border-t border-border px-5 py-4 bg-muted/30 flash-in">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Result</div>
                  <p className="text-sm text-foreground italic">{lastConsequence}</p>
                  <DeltaToast delta={lastDelta} />
                  <button
                    data-testid="button-next-week"
                    onClick={handleNext}
                    className="mt-4 w-full bg-primary text-primary-foreground rounded py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Next Week →
                  </button>
                </div>
              )}

              {/* Choices */}
              {phase === 'event' && (
                <div className="border-t border-border px-5 py-4 space-y-2">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
                    What do you do?
                  </div>
                  {currentEvent.choices.map((choice) => (
                    <button
                      key={choice.id}
                      data-testid={`button-choice-${choice.id}`}
                      onClick={() => handleChoice(choice)}
                      className="w-full text-left bg-background border border-border rounded px-4 py-3 text-sm text-foreground hover:border-primary hover:bg-primary/5 transition-all choice-btn group"
                    >
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {choice.text}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Progress */}
            <div className="bg-card border border-card-border rounded-lg px-4 py-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-muted-foreground">Progress</span>
                <span className="text-xs font-mono text-muted-foreground">
                  {(gameState.semester - 1) * 8 + gameState.week} / 32 weeks
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full stat-bar-inner"
                  style={{ width: `${(((gameState.semester - 1) * 8 + gameState.week) / 32) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-1.5">
                {[1, 2, 3, 4].map(sem => (
                  <span
                    key={sem}
                    className={`text-xs font-mono ${sem === gameState.semester ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                  >
                    Sem {sem}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
