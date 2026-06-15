import type { Stats, StatDelta, GameState, PlayerProfile } from '../types/game';
import { INITIAL_STATS, SEMESTER_EVENTS, TRAIT_BONUSES } from '../data/events';

export function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

export function applyDelta(stats: Stats, delta: StatDelta): Stats {
  const s = { ...stats };
  if (delta.cgpa !== undefined) s.cgpa = clamp(+(s.cgpa + delta.cgpa).toFixed(2), 0, 10);
  if (delta.mentalHealth !== undefined) s.mentalHealth = clamp(Math.round(s.mentalHealth + delta.mentalHealth), 0, 100);
  if (delta.socialBattery !== undefined) s.socialBattery = clamp(Math.round(s.socialBattery + delta.socialBattery), 0, 100);
  if (delta.physicalEnergy !== undefined) s.physicalEnergy = clamp(Math.round(s.physicalEnergy + delta.physicalEnergy), 0, 100);
  if (delta.attendance !== undefined) s.attendance = clamp(+(s.attendance + delta.attendance).toFixed(1), 0, 100);
  if (delta.arrears !== undefined) s.arrears = clamp(Math.round(s.arrears + delta.arrears), 0, 20);
  if (delta.money !== undefined) s.money = Math.max(0, Math.round(s.money + delta.money));
  if (delta.placementReadiness !== undefined) s.placementReadiness = clamp(Math.round(s.placementReadiness + delta.placementReadiness), 0, 100);
  if (delta.hodRelation !== undefined) s.hodRelation = clamp(Math.round(s.hodRelation + delta.hodRelation), 0, 100);
  if (delta.romance !== undefined) s.romance = clamp(Math.round(s.romance + delta.romance), 0, 100);
  if (delta.rivalry !== undefined) s.rivalry = clamp(Math.round(s.rivalry + delta.rivalry), 0, 100);
  if (delta.reputation !== undefined) s.reputation = clamp(Math.round(s.reputation + delta.reputation), 0, 100);
  if (delta.familyPressure !== undefined) s.familyPressure = clamp(Math.round(s.familyPressure + delta.familyPressure), 0, 100);
  return s;
}

export function checkGameOver(stats: Stats): { over: boolean; reason?: string } {
  if (stats.mentalHealth < 20) {
    return { over: true, reason: 'Burnout — Mental Health critically low. You needed help, da. 2 weeks of forced rest. All stats drop.' };
  }
  if (stats.attendance < 75 && stats.arrears === 0) {
    // Just a warning, not game over yet — only at semester end
  }
  if (stats.arrears > 8) {
    return { over: true, reason: 'Discontinued — too many arrears. The college had to let you go. This isn\'t the end, but UIT chapter closes here.' };
  }
  if (stats.familyPressure >= 100) {
    return { over: true, reason: 'Family pressure peaked. Parents arrive at UIT. HOD meeting. Everything pauses.' };
  }
  return { over: false };
}

export function createInitialGameState(profile: PlayerProfile): GameState {
  let stats = { ...INITIAL_STATS };
  const traitBonus = TRAIT_BONUSES[profile.trait];
  if (traitBonus) {
    stats = applyDelta(stats, traitBonus);
  }
  return {
    profile,
    stats,
    week: 1,
    semester: 1,
    log: [],
    gameOver: false,
    track: null,
    clubs: [],
    romanceTarget: null,
    rivalTarget: 'Guna'
  };
}

export function getEventForWeek(semester: number, week: number) {
  return SEMESTER_EVENTS.find(e => e.semester === semester && e.week === week) || null;
}

export function getTotalWeeks() {
  return SEMESTER_EVENTS.length;
}

export function generateEndingSummary(state: GameState): string {
  const { stats, profile, track } = state;
  const lines: string[] = [];

  lines.push(`Name: ${profile.name} | Branch: ${profile.branch} | Trait: ${profile.trait}`);
  lines.push('');

  // CGPA outcome
  if (stats.cgpa >= 9.0) lines.push('🎓 CGPA 9.0+ — Topper level. Anna University gold medal potential.');
  else if (stats.cgpa >= 8.0) lines.push('🎓 CGPA 8.0+ — Strong academics. Amazon/Google off-campus eligible.');
  else if (stats.cgpa >= 7.5) lines.push('🎓 CGPA 7.5+ — Solid. Zoho and most companies will interview you.');
  else if (stats.cgpa >= 6.5) lines.push('🎓 CGPA 6.5+ — TCS/Wipro/Infosys eligible. Service sector safe.');
  else lines.push('🎓 CGPA below 6.5 — Tough placement journey ahead. Skills need to compensate.');

  // Placement outcome
  if (stats.placementReadiness >= 80) {
    lines.push('💼 Placement: PLACED — Your skills and prep paid off handsomely.');
    if (stats.cgpa >= 8.5 && track === 'placement') {
      lines.push('   (Strong chance at product-based company — Zoho/Amazon territory)');
    }
  } else if (stats.placementReadiness >= 50) {
    lines.push('💼 Placement: SERVICE COMPANY — Reliable offer, good start.');
  } else {
    lines.push('💼 Placement: Still searching — off-campus hustle mode activated.');
  }

  // Arrears
  if (stats.arrears === 0) {
    lines.push('📚 Arrears: Zero — Clean academic record. Amma is proud.');
  } else if (stats.arrears <= 3) {
    lines.push(`📚 Arrears: ${stats.arrears} pending — Manageable. Clear them quickly after graduation.`);
  } else {
    lines.push(`📚 Arrears: ${stats.arrears} — A significant challenge. Recovery is possible.`);
  }

  // Romance
  if (stats.romance >= 60) {
    lines.push('💕 Romance: A real connection formed at UIT. Whatever comes next, it was genuine.');
  } else if (stats.romance >= 30) {
    lines.push('💕 Romance: Something was there. Maybe life will bring you back together.');
  } else {
    lines.push('💕 Romance: Heart unattached — you focused on other things, and that\'s okay.');
  }

  // Rivalry
  if (stats.rivalry >= 50) {
    lines.push('⚔️ Rivalry with Guna: Deep and ongoing — one of you will shine brighter eventually.');
  } else {
    lines.push('⚔️ Rivalry: Manageable — competition made you better without breaking you.');
  }

  // Reputation
  if (stats.reputation >= 70) {
    lines.push('🌟 Reputation: Semma — UIT remembers your name for good reasons.');
  } else if (stats.reputation >= 40) {
    lines.push('🌟 Reputation: Decent — you leave with your head held up.');
  } else {
    lines.push('🌟 Reputation: Took some hits — but you survived and learned.');
  }

  // Mental Health
  if (stats.mentalHealth >= 70) {
    lines.push('🧠 Mental Health: Strong — you came through college without losing yourself.');
  } else if (stats.mentalHealth >= 40) {
    lines.push('🧠 Mental Health: Weathered — engineering tested you. You need recovery time.');
  } else {
    lines.push('🧠 Mental Health: Low — please seek support. Degree doesn\'t define you.');
  }

  lines.push('');
  lines.push('Vanakkam, UIT alumnus. The real world is waiting.');
  lines.push('Saravanan\'s final message: "Machi, we made it da. Jolly ah iruku!"');

  return lines.join('\n');
}
