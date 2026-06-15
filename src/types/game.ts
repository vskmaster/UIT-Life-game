export interface Stats {
  cgpa: number;
  mentalHealth: number;
  socialBattery: number;
  physicalEnergy: number;
  attendance: number;
  arrears: number;
  money: number;
  placementReadiness: number;
  hodRelation: number;
  romance: number;
  rivalry: number;
  reputation: number;
  familyPressure: number;
}

export interface StatDelta {
  cgpa?: number;
  mentalHealth?: number;
  socialBattery?: number;
  physicalEnergy?: number;
  attendance?: number;
  arrears?: number;
  money?: number;
  placementReadiness?: number;
  hodRelation?: number;
  romance?: number;
  rivalry?: number;
  reputation?: number;
  familyPressure?: number;
}

export interface Choice {
  id: string;
  text: string;
  consequence: string;
  delta: StatDelta;
}

export interface WeekEvent {
  id: string;
  week: number;
  semester: number;
  title: string;
  narrative: string;
  choices: Choice[];
  randomEvent?: string;
}

export interface GameLogEntry {
  week: number;
  semester: number;
  narrative: string;
  choiceText: string;
  consequence: string;
  deltaSnapshot: StatDelta;
}

export type Branch = 'CSE' | 'ECE' | 'MECH' | 'CIVIL' | 'EEE' | 'IT';
export type Trait = 'Gym rat' | 'Coder' | 'Romantic' | 'Rebel' | "Teacher's pet";

export interface PlayerProfile {
  name: string;
  branch: Branch;
  homeDistrict: string;
  trait: Trait;
}

export interface GameState {
  profile: PlayerProfile;
  stats: Stats;
  week: number;
  semester: number;
  log: GameLogEntry[];
  gameOver: boolean;
  gameOverReason?: string;
  endingSummary?: string;
  track: 'placement' | 'govt' | null;
  clubs: string[];
  romanceTarget: string | null;
  rivalTarget: string | null;
}
