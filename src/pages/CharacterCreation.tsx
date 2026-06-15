import { useState } from 'react';
import type { PlayerProfile, Branch, Trait } from '../types/game';

const BRANCHES: Branch[] = ['CSE', 'ECE', 'MECH', 'CIVIL', 'EEE', 'IT'];
const TRAITS: Trait[] = ['Gym rat', 'Coder', 'Romantic', 'Rebel', "Teacher's pet"];
const DISTRICTS = ['Coimbatore', 'Chennai', 'Madurai', 'Salem', 'Trichy', 'Erode', 'Tirunelveli', 'Other'];

const TRAIT_DESCRIPTIONS: Record<Trait, string> = {
  'Gym rat': '+Physical Energy, -Mental Health. Body is the temple.',
  'Coder': '+Placement Readiness, -Social Battery. Code is life.',
  'Romantic': '+Romance, +Social Battery, -CGPA. Heart over grades.',
  'Rebel': '+Reputation, -HOD Relation, +Rivalry. Question everything.',
  "Teacher's pet": '+HOD Relation, +CGPA, -Reputation. Sir\'s favourite.'
};

interface Props {
  onStart: (profile: PlayerProfile) => void;
}

export default function CharacterCreation({ onStart }: Props) {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState<Branch>('CSE');
  const [homeDistrict, setHomeDistrict] = useState('Coimbatore');
  const [trait, setTrait] = useState<Trait>('Coder');
  const [error, setError] = useState('');
  const [step, setStep] = useState(0);

  const handleStart = () => {
    if (!name.trim()) {
      setError('Enter your name da!');
      return;
    }
    onStart({ name: name.trim(), branch, homeDistrict, trait });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-primary text-primary-foreground px-3 py-1 text-xs font-mono uppercase tracking-widest mb-3 rounded-sm">
            United Institute of Technology
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-1" style={{ fontFamily: "'Caveat', cursive" }}>
            UIT Life
          </h1>
          <p className="text-muted-foreground text-sm font-mono">Coimbatore • Tamil Nadu Engineering Simulator</p>
        </div>

        {/* Card */}
        <div className="bg-card border border-card-border rounded-lg p-6 shadow-md">
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-1 text-foreground">Welcome, future engineer</h2>
                <p className="text-sm text-muted-foreground">
                  You've received your UIT admission. 4 years. 8 semesters. Countless canteen visits, exam panics, and life lessons await. Your choices shape everything — CGPA, friendships, career, sanity.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Your South Indian name:</p>
                <input
                  data-testid="input-name"
                  type="text"
                  value={name}
                  onChange={e => { setName(e.target.value); setError(''); }}
                  placeholder="e.g. Karthikeyan, Preethi, Aravind..."
                  className="w-full border border-input rounded px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                {error && <p className="text-destructive text-xs mt-1">{error}</p>}
              </div>
              <button
                data-testid="button-next-1"
                onClick={() => { if (!name.trim()) { setError('Enter your name da!'); return; } setStep(1); }}
                className="w-full bg-primary text-primary-foreground rounded py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Next →
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-1 text-foreground">Choose your branch</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Vanakkam {name}! Which department are you joining?
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {BRANCHES.map(b => (
                    <button
                      key={b}
                      data-testid={`button-branch-${b}`}
                      onClick={() => setBranch(b)}
                      className={`py-2.5 rounded text-sm font-semibold border transition-all ${
                        branch === b
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background border-border text-foreground hover:border-primary hover:text-primary'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">Home district (optional):</p>
                <select
                  data-testid="select-district"
                  value={homeDistrict}
                  onChange={e => setHomeDistrict(e.target.value)}
                  className="w-full border border-input rounded px-3 py-2 text-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {DISTRICTS.map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-2">
                <button
                  data-testid="button-back-1"
                  onClick={() => setStep(0)}
                  className="flex-1 border border-border rounded py-2.5 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  ← Back
                </button>
                <button
                  data-testid="button-next-2"
                  onClick={() => setStep(2)}
                  className="flex-[2] bg-primary text-primary-foreground rounded py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-lg font-semibold mb-1 text-foreground">Your special trait</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  What defines {name} from {homeDistrict}?
                </p>
                <div className="space-y-2">
                  {TRAITS.map(t => (
                    <button
                      key={t}
                      data-testid={`button-trait-${t.replace(/[' ]/g, '-')}`}
                      onClick={() => setTrait(t)}
                      className={`w-full text-left rounded px-4 py-3 border transition-all choice-btn ${
                        trait === t
                          ? 'bg-primary/10 border-primary border-l-4'
                          : 'bg-background border-border'
                      }`}
                    >
                      <div className="font-semibold text-sm text-foreground">{t}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{TRAIT_DESCRIPTIONS[t]}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  data-testid="button-back-2"
                  onClick={() => setStep(1)}
                  className="flex-1 border border-border rounded py-2.5 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  ← Back
                </button>
                <button
                  data-testid="button-start-game"
                  onClick={handleStart}
                  className="flex-[2] bg-primary text-primary-foreground rounded py-2.5 text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  Start at UIT →
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4 font-mono">
          Starting stats vary by trait. All decisions have consequences.
        </p>
      </div>
    </div>
  );
}
