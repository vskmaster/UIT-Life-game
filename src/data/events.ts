import type { WeekEvent } from '../types/game';

export const SEMESTER_EVENTS: WeekEvent[] = [
  // ====== SEMESTER 1 ======
  {
    id: 's1w1',
    week: 1,
    semester: 1,
    title: 'Week 1 — Orientation Day at UIT',
    narrative: `Chaiii... first day at United Institute of Technology, machi! The campus smells like fresh paint, sambar, and anxious dreams. You walk through the gates wearing your new college bag — amma-stitched name tag still attached.\n\nDr. Balasubramaniam (Bala sir), your HOD, gives a 45-minute speech about attendance rules and the glory of Anna University. "75% attendance or detention, no compromise, thambi," he says, laser-eyeing the entire hall.\n\nSaravanan from Coimbatore nudges you: "Machi, canteen la Ranga akka's idli is semma. Let's skip second half and go check it out?"\n\nKeerthana from Madurai, topper-face already glowing, has filled 3 pages of notes.`,
    choices: [
      {
        id: 'attend',
        text: 'Stay for all sessions — first impression matters',
        consequence: 'Bala sir notices you. HOD relation improves. Attendance full.',
        delta: { hodRelation: 8, mentalHealth: -3, attendance: 2, reputation: 3 }
      },
      {
        id: 'skip',
        text: 'Skip second half with Saravanan — idli time!',
        consequence: 'Ranga akka\'s idli was worth it, machi. But attendance drops.',
        delta: { socialBattery: 12, attendance: -5, hodRelation: -5, money: -40 }
      },
      {
        id: 'both',
        text: 'Attend orientation but sneak out during lunch for canteen only',
        consequence: 'Smart move da. Got attendance AND the idli. Energy dips slightly.',
        delta: { attendance: 1, socialBattery: 6, money: -20, physicalEnergy: -3 }
      }
    ]
  },
  {
    id: 's1w2',
    week: 2,
    semester: 1,
    title: 'Week 2 — The Bus Chronicles',
    narrative: `College bus, 6:45 AM. Packed like a tin of sardines, machi. Seniors are yelling song lyrics, juniors are sleeping standing up. The bus driver seems to believe traffic rules are suggestions.\n\nHalfway to college — CRACK. The bus breaks down on Avinashi Road. Saravanan: "Enna da, same as last semester also same problem!" You have 20 minutes to reach class before Lakshmi ma'am marks absent.`,
    randomEvent: 'Bus breakdown — Avinashi Road chaos!',
    choices: [
      {
        id: 'auto',
        text: 'Take an auto immediately — attendance matters (₹120)',
        consequence: 'Reached just in time. Lakshmi ma\'am saw you slide in. Wallet thinner.',
        delta: { money: -120, attendance: 1, physicalEnergy: -5 }
      },
      {
        id: 'wait',
        text: 'Wait for the bus to get fixed — free is free da',
        consequence: 'Bus came 40 mins late. You were absent for first period. But made new friends waiting.',
        delta: { attendance: -5, socialBattery: 8, money: 0 }
      },
      {
        id: 'walk',
        text: 'Walk-run 2km to college — survival mode',
        consequence: 'Reached barely. Sweating like Vijay in an action scene. Attendance saved.',
        delta: { attendance: 1, physicalEnergy: -15, mentalHealth: -5 }
      }
    ]
  },
  {
    id: 's1w3',
    week: 3,
    semester: 1,
    title: 'Week 3 — Canteen Credit Crisis',
    narrative: `"THAMBI!"\n\nRanga akka's voice cuts through the canteen noise like a bell. She's looking straight at you, spatula in hand. "Your canteen credit — ₹500 — all finished da! You owe me ₹180 more. Pay pannunga, otherwise I'll tell your HOD."\n\nThe entire canteen goes quiet. Keerthana is trying very hard not to laugh. Saravanan whispers: "Machi, I told you not to order the special meals every day."`,
    randomEvent: 'Ranga akka public canteen intervention!',
    choices: [
      {
        id: 'pay',
        text: 'Pay immediately from your savings (₹180)',
        consequence: 'Crisis averted. Ranga akka smiles. "Good boy thambi." Extra sambar next time.',
        delta: { money: -180, reputation: 5, hodRelation: 2 }
      },
      {
        id: 'negotiate',
        text: 'Negotiate — "Akka, next week I\'ll pay double, I promise"',
        consequence: 'She agreed but everyone heard. Reputation takes a light hit. Running tab continues.',
        delta: { reputation: -8, socialBattery: -3, mentalHealth: -5 }
      },
      {
        id: 'borrow',
        text: 'Borrow from Saravanan and pay (he\'ll charge interest in favors)',
        consequence: 'Paid off. But now Saravanan will ask you to write his assignments "sometimes".',
        delta: { money: 0, reputation: 3, placementReadiness: -3 }
      }
    ]
  },
  {
    id: 's1w4',
    week: 4,
    semester: 1,
    title: 'Week 4 — Maths with Lakshmi Ma\'am',
    narrative: `Prof. Lakshmi Narayanan writes a theorem on the board and turns around slowly. "Can someone solve this?" \n\nSilence fills the room like exam day. Keerthana is already writing the answer in her notebook but hasn't raised her hand. Saravanan is pretending to be invisible.\n\nLakshmi ma'am's eyes scan the room — and land on you. "You there — come to the board."`,
    choices: [
      {
        id: 'solve',
        text: 'Go up and try to solve it confidently',
        consequence: 'You get 80% right. Ma\'am corrects the rest. "Not bad," she says — which is basically a standing ovation from her.',
        delta: { hodRelation: 5, mentalHealth: -5, cgpa: 0.1, reputation: 8 }
      },
      {
        id: 'admit',
        text: '"Ma\'am, I didn\'t understand this topic yet. Can you explain?"',
        consequence: 'Honest answer. She respects it — explains patiently. No CGPA boost but you actually learned.',
        delta: { hodRelation: 3, cgpa: 0.05, mentalHealth: 3 }
      },
      {
        id: 'stall',
        text: 'Stand there and stammer until Keerthana quietly whispers the answer',
        consequence: 'Got through it. But ma\'am noticed the help. Internal marks slightly affected.',
        delta: { cgpa: -0.05, reputation: -5, mentalHealth: -8 }
      }
    ]
  },
  {
    id: 's1w5',
    week: 5,
    semester: 1,
    title: 'Week 5 — Club Recruitment Week',
    narrative: `Stalls line the corridor. Coding Club (Prakash presiding, intense energy), Dance Club (bass music leaking from the hall), and the Gym Squad (guys who eat protein bars for breakfast). Each wants your attention — and your commitment.\n\nPrakash from the Coding Club says: "Machi, if you join us and contribute, I have direct contacts at Zoho. But I need consistent attendance." Dance club aunty says: "Just come once, feel the vibe da."`,
    choices: [
      {
        id: 'coding',
        text: 'Join Coding Club — focus on placements from day one',
        consequence: 'Prakash is impressed. Your Placement Readiness starts climbing. Social battery dips slightly — it\'s work, not play.',
        delta: { placementReadiness: 12, socialBattery: -8, reputation: 5 }
      },
      {
        id: 'dance',
        text: 'Join Dance/Music Club — college life is short da',
        consequence: 'Semma fun machi. Social battery through the roof. But Wednesday practice cuts into study time.',
        delta: { socialBattery: 18, attendance: -3, mentalHealth: 10, placementReadiness: -2 }
      },
      {
        id: 'gym',
        text: 'Join Gym Squad — body first, everything else later',
        consequence: 'Physical energy soars. You feel unstoppable. But overworking brings mental fatigue.',
        delta: { physicalEnergy: 15, mentalHealth: -5, socialBattery: 5 }
      },
      {
        id: 'none',
        text: 'Join nothing — keep time free for studies',
        consequence: 'Smart or boring? Hard to tell this early. You have full study time but feel left out sometimes.',
        delta: { cgpa: 0.1, mentalHealth: -3, reputation: -3 }
      }
    ]
  },
  {
    id: 's1w6',
    week: 6,
    semester: 1,
    title: 'Week 6 — The Ragging Incident',
    narrative: `After dinner, two seniors from your hostel block corner you. "Thambi, go buy us chai from the shop downstairs." It's subtle — not violent — but it's ragging. You know what this is.\n\nSaravanan whispers: "Just do it machi, they'll leave you alone after first month." But in your head you hear the Anti-Ragging poster in the corridor.`,
    choices: [
      {
        id: 'comply',
        text: 'Comply — bring their chai, smile it off',
        consequence: 'They leave you alone. For now. Reputation takes a quiet hit but safety goes up.',
        delta: { reputation: -10, mentalHealth: -10, rivalry: 0 }
      },
      {
        id: 'report',
        text: 'Report to Anti-Ragging Committee',
        consequence: 'Committee acts. Seniors get warned. They target you subtly after. But you stood for yourself.',
        delta: { reputation: 15, mentalHealth: 5, rivalry: 25, familyPressure: -5 }
      },
      {
        id: 'fightback',
        text: 'Say "No" to their face and walk away',
        consequence: 'Respect from batchmates. Seniors are angry. Rivalry burns.',
        delta: { reputation: 20, physicalEnergy: -15, rivalry: 30, mentalHealth: -5 }
      }
    ]
  },
  {
    id: 's1w7',
    week: 7,
    semester: 1,
    title: 'Week 7 — Internal Exam Prep',
    narrative: `Internal exams in 5 days. Saravanan has already obtained Senthil's pirated textbook PDF. Keerthana is doing third round revision. Ramkumar sir (AP, CSE) just announced there'll be an innovation component worth 10 marks — "no copy-paste projects, I'll Google everything myself."\n\nYou have limited time. What's the play?`,
    choices: [
      {
        id: 'study_hard',
        text: 'Study properly — Ramkumar sir\'s innovation question + core theory',
        consequence: 'Exhausting but you walk into the exam with genuine confidence. Sleep quality drops.',
        delta: { cgpa: 0.3, physicalEnergy: -12, mentalHealth: -8, placementReadiness: 5 }
      },
      {
        id: 'use_qbank',
        text: 'Use Senthil\'s question bank PDF — be strategic',
        consequence: 'Most questions matched. But Ramkumar\'s innovation part killed you.',
        delta: { cgpa: 0.1, physicalEnergy: -5, mentalHealth: 3, money: -50 }
      },
      {
        id: 'both_strat',
        text: 'Do Senthil\'s bank + spend one night on Ramkumar\'s project idea',
        consequence: 'Balanced. Not perfect but solid. Ramkumar gives you 7/10 for effort.',
        delta: { cgpa: 0.2, physicalEnergy: -10, placementReadiness: 8, mentalHealth: -5 }
      }
    ]
  },
  {
    id: 's1w8',
    week: 8,
    semester: 1,
    title: 'Week 8 — Semester 1 Results',
    narrative: `Results are out. The WhatsApp group explodes. Keerthana got 9.2 CGPA (obviously). Saravanan passed everything but with exactly 50 in two subjects.\n\nFamily calls are coming. Amma wants to know everything. Senthil is already selling next semester question banks. Guna from hostel, your rival, got 0.2 above you and is making sure everyone knows.\n\nSemester 2 starts next week. What will you focus on?`,
    choices: [
      {
        id: 'focus_academic',
        text: 'Vow to study harder next sem — CGPA is everything',
        consequence: 'Family pressure eases. Internal motivation high. A new you for sem 2.',
        delta: { familyPressure: -10, mentalHealth: 5, cgpa: 0.1, placementReadiness: 5 }
      },
      {
        id: 'focus_social',
        text: 'Results are fine — enjoy the semester break first',
        consequence: 'Rest is real. Social battery refills. Family pressure stays same.',
        delta: { socialBattery: 15, mentalHealth: 15, physicalEnergy: 10, familyPressure: 0 }
      },
      {
        id: 'focus_skills',
        text: 'Use break to learn coding / skills outside syllabus',
        consequence: 'Placement readiness spikes. But family wonders why you\'re not "resting".',
        delta: { placementReadiness: 15, mentalHealth: -3, familyPressure: 5 }
      }
    ]
  },

  // ====== SEMESTER 2 ======
  {
    id: 's2w1',
    week: 1,
    semester: 2,
    title: 'Sem 2, Week 1 — New Semester, New Enemies',
    narrative: `Back on campus. Saravanan has a new haircut. Keerthana immediately starts organizing study circles. Guna gives you a smirk: "Heard your CGPA, da. Better luck this sem."\n\nRamkumar sir announces a mini project worth 20 marks due in 6 weeks. Bala sir reminds everyone: attendance below 75% = detention. Again.\n\nFirst week and already the pressure is on, machi.`,
    choices: [
      {
        id: 'confront_guna',
        text: 'Confront Guna — "Let\'s see who performs better this sem"',
        consequence: 'Challenge accepted. Rivalry goes up but so does your motivation.',
        delta: { rivalry: 15, mentalHealth: -5, cgpa: 0.05, reputation: 5 }
      },
      {
        id: 'ignore_guna',
        text: 'Ignore Guna — let results speak',
        consequence: 'Mature move. No drama. Full focus on sem 2.',
        delta: { mentalHealth: 5, cgpa: 0.05, reputation: 3 }
      },
      {
        id: 'join_keerthana',
        text: 'Ask Keerthana if you can join her study circle',
        consequence: 'She says yes — reluctantly. But her notes are gold.',
        delta: { cgpa: 0.15, socialBattery: -3, hodRelation: 3 }
      }
    ]
  },
  {
    id: 's2w2',
    week: 2,
    semester: 2,
    title: 'Sem 2, Week 2 — The AU Inspection',
    narrative: `Anna University inspection team. Today. Unannounced.\n\nBala sir is in full panic mode, walking 40km/h through corridors. Senthil somehow already knew — "I told you da, inspection always sem 2 week 2!" Faculty are checking lab records. Students with incomplete records are being pulled out.\n\nYour lab record — 60% done.`,
    randomEvent: 'Anna University Surprise Inspection!',
    choices: [
      {
        id: 'bluff',
        text: 'Try to bluff with incomplete records — wing it',
        consequence: 'The inspector notices gaps. Bala sir gets called. HOD relation drops sharply.',
        delta: { hodRelation: -20, reputation: -10, mentalHealth: -10 }
      },
      {
        id: 'complete_fast',
        text: 'Sprint to complete the remaining entries right now',
        consequence: 'Rushed but done. Some pages look sketchy. HOD not pleased but passes you.',
        delta: { hodRelation: -5, physicalEnergy: -15, mentalHealth: -8 }
      },
      {
        id: 'ask_keerthana',
        text: 'Ask Keerthana to share her completed records format urgently',
        consequence: 'She helps — barely. "Don\'t make this a habit da," she says. Crisis averted.',
        delta: { hodRelation: 2, cgpa: -0.05, reputation: -3 }
      }
    ]
  },
  {
    id: 's2w3',
    week: 3,
    semester: 2,
    title: 'Sem 2, Week 3 — Crush Alert',
    narrative: `From across the library, someone waves. It's Divya — ECE department, known for destroying badminton opponents and making excellent filter coffee references in conversation.\n\nSaravanan whispers: "Machi, she's looking at you! En da statue maari ninru iruka?"\n\nThis is your moment. Or your disaster. Hard to tell.`,
    randomEvent: 'Crush spotted — Divya from ECE!',
    choices: [
      {
        id: 'wave_back',
        text: 'Wave back and smile — keep it natural',
        consequence: 'She smiles back. Small progress. Romance +10. Your heart rate: not small.',
        delta: { romance: 12, socialBattery: -3, mentalHealth: 5 }
      },
      {
        id: 'freeze',
        text: 'Freeze and look the other way awkwardly',
        consequence: 'Awkward silence. She laughs lightly. Saravanan is dying. Romance stays 0.',
        delta: { romance: -2, mentalHealth: -5, reputation: -3 }
      },
      {
        id: 'join_badminton',
        text: 'Find out about badminton club and join immediately',
        consequence: 'Bold move machi. You signed up. Now you need to actually play badminton.',
        delta: { romance: 20, physicalEnergy: -8, socialBattery: 10, attendance: -2 }
      }
    ]
  },
  {
    id: 's2w4',
    week: 4,
    semester: 2,
    title: 'Sem 2, Week 4 — Guna\'s Lab Record Sabotage',
    narrative: `You've been looking for your lab record for 20 minutes. Saravanan finally finds it — hidden behind the locker, pages slightly smudged. Guna is suspiciously calm at the other end of the room.\n\nInternal submission is tomorrow. You have two options and zero time.`,
    randomEvent: 'Guna hides your lab record!',
    choices: [
      {
        id: 'confront_guna2',
        text: 'Confront Guna directly — "Did you touch my record?"',
        consequence: 'He denies. Argument happens. Rivalry blazes. Faculty notices the drama.',
        delta: { rivalry: 20, mentalHealth: -8, reputation: -5 }
      },
      {
        id: 'redo',
        text: 'Stay up and redo the damaged pages tonight',
        consequence: 'Painful. Exhausting. But submitted clean. You ran on chai and anger.',
        delta: { physicalEnergy: -18, mentalHealth: -10, cgpa: 0.05 }
      },
      {
        id: 'submit_as_is',
        text: 'Submit as-is and explain to faculty honestly',
        consequence: 'Faculty gives you 3 days extension. HOD slightly impressed by honesty.',
        delta: { hodRelation: 5, cgpa: -0.05, reputation: 3 }
      }
    ]
  },
  {
    id: 's2w5',
    week: 5,
    semester: 2,
    title: 'Sem 2, Week 5 — Ramkumar Sir\'s Project',
    narrative: `Ramkumar sir reviews mini projects. He Google-searches phrases from each presentation in real time. "Copy paste means zero marks. I will Google your sentences. In front of the class." \n\nThree students have already been given zero. The fourth student is sweating. You're next.`,
    choices: [
      {
        id: 'original',
        text: 'Present your own original idea — built from scratch',
        consequence: '"This is good," Ramkumar sir says. That\'s basically a Nobel Prize from him. Full marks.',
        delta: { cgpa: 0.3, placementReadiness: 12, reputation: 10, mentalHealth: 5 }
      },
      {
        id: 'semi_original',
        text: 'Present a mix — your idea but used some reference code',
        consequence: 'He Googles 2 snippets. One matches. Partial marks. "Do better next time."',
        delta: { cgpa: 0.1, placementReadiness: 5, reputation: -3 }
      },
      {
        id: 'copied',
        text: 'Risk it — present copied project and hope for the best',
        consequence: 'He found it. Immediate zero. Full class witness. Reputation craters.',
        delta: { cgpa: -0.2, placementReadiness: -5, reputation: -20, mentalHealth: -15 }
      }
    ]
  },
  {
    id: 's2w6',
    week: 6,
    semester: 2,
    title: 'Sem 2, Week 6 — Attendance Danger Zone',
    narrative: `A notification from the department portal: your attendance is at 73.2%. Threshold: 75%. Semester end: 3 weeks away.\n\nBala sir's warning voice echoes in your head. Saravanan: "Machi, if you get detained, your amma will personally come and burn the hostel."\n\nFamily pressure starts mounting.`,
    choices: [
      {
        id: 'attend_all',
        text: 'Attend every single class the next 3 weeks — no excuses',
        consequence: 'Brutal. But attendance crosses 75% by a hair. Detained crisis averted.',
        delta: { attendance: 8, physicalEnergy: -10, socialBattery: -8, familyPressure: -10 }
      },
      {
        id: 'medical_cert',
        text: 'Get a medical certificate for past absences (₹300)',
        consequence: 'Shady but works. Some absences backdated. HOD slightly suspicious.',
        delta: { attendance: 5, money: -300, hodRelation: -5, mentalHealth: 5 }
      },
      {
        id: 'beg_hod',
        text: 'Go meet Bala sir personally and explain honestly',
        consequence: 'He lectures you for 20 minutes. But marks you present for 2 missed sessions as grace.',
        delta: { hodRelation: 8, attendance: 3, familyPressure: -5, mentalHealth: -10 }
      }
    ]
  },
  {
    id: 's2w7',
    week: 7,
    semester: 2,
    title: 'Sem 2, Week 7 — Mess Food or Death',
    narrative: `It's been 18 days of mess food. Dal that tastes like regret. Rice that sticks together like your future. Saravanan has given up and is ordering Swiggy every night (₹150 per meal).\n\nYour physical energy is falling. But your wallet is also crying.`,
    choices: [
      {
        id: 'eat_mess',
        text: 'Stick to mess food — save money, suffer body',
        consequence: 'Wallet survives. Energy tanks. Food poisoning risk goes up.',
        delta: { physicalEnergy: -12, money: 0, mentalHealth: -8 }
      },
      {
        id: 'swiggy',
        text: 'Order outside food — body is a temple da',
        consequence: 'Ate well. Energy up. Wallet takes a hit. Ranga akka gives you side-eye.',
        delta: { physicalEnergy: 10, money: -400, mentalHealth: 5, socialBattery: 3 }
      },
      {
        id: 'cook_hostel',
        text: 'Convince Saravanan to illegally cook in hostel room (electric kettle + instant noodles)',
        consequence: 'Warden almost caught you. But the noodles were semma. Bond with Saravanan strengthens.',
        delta: { physicalEnergy: 5, money: -80, socialBattery: 15, mentalHealth: 8 }
      }
    ]
  },
  {
    id: 's2w8',
    week: 8,
    semester: 2,
    title: 'Sem 2, Week 8 — Semester End & Track Choice',
    narrative: `Semester 2 is done. You've survived. Results pending.\n\nNow a bigger question arrives — everyone's choosing their path. Placement track (TCS/Zoho/Amazon dreams) or Government exam track (TNPSC, GATE — stable life, amma's dream). Prakash from Coding Club is building a team for placements. Your family sends hints about government jobs daily.\n\nSaravanan: "Ennoda plan? Both la try pannu — worst case one will work."`,
    choices: [
      {
        id: 'placement_track',
        text: 'Commit to Placement Track — private sector, big salary dreams',
        consequence: 'Prakash is pleased. Placement Readiness surges. Family pressure slightly rises.',
        delta: { placementReadiness: 20, familyPressure: 8, reputation: 5, mentalHealth: -5 }
      },
      {
        id: 'govt_track',
        text: 'Commit to Government Exam Track — GATE/TNPSC prep',
        consequence: 'Family cheers. Long road ahead. Placement Readiness stagnates but CGPA matters more now.',
        delta: { familyPressure: -15, cgpa: 0.1, placementReadiness: -10, mentalHealth: 5 }
      },
      {
        id: 'undecided',
        text: 'Keep options open — decide later',
        consequence: 'Smart or procrastinating? Only time will tell, machi.',
        delta: { mentalHealth: 3, socialBattery: 5 }
      }
    ]
  },

  // ====== SEMESTER 3 ======
  {
    id: 's3w1',
    week: 1,
    semester: 3,
    title: 'Sem 3, Week 1 — 3rd Sem Hits Different',
    narrative: `3rd semester. Core subjects start getting real. Data Structures, DBMS, Computer Networks. Ramkumar sir is now your project mentor. Keerthana is somehow studying for both semester exams and GATE simultaneously.\n\nSenthil informs you that Guna has been whispering to faculty that you copied in sem 2. You don't know if it's true or jealousy.\n\n"This is when college separates the real ones, da," says Prakash at Coding Club.`,
    choices: [
      {
        id: 'focus_dsa',
        text: 'Deep focus on Data Structures — coding club and placements need this',
        consequence: 'Placement readiness climbs hard. Prakash is visibly impressed.',
        delta: { placementReadiness: 15, cgpa: 0.15, physicalEnergy: -8, socialBattery: -5 }
      },
      {
        id: 'confront_guna3',
        text: 'Confront Guna about the rumors — settle this now',
        consequence: 'He admits nothing. Rivalry intensifies. But your reputation with batchmates improves.',
        delta: { rivalry: 15, reputation: 8, mentalHealth: -8 }
      },
      {
        id: 'balanced_approach',
        text: 'Attend everything, do your work — let results counter the rumors',
        consequence: 'Steady. Reliable. Boring to some, dependable to HOD.',
        delta: { cgpa: 0.1, hodRelation: 5, mentalHealth: 2 }
      }
    ]
  },
  {
    id: 's3w2',
    week: 2,
    semester: 3,
    title: 'Sem 3, Week 2 — Guest Lecture Opportunity',
    narrative: `A guest lecture by a Zoho senior software engineer. Attendance is compulsory. The hall is packed. The talk is about "real-world coding skills vs. theoretical nonsense."\n\nAt the end: Q&A. The engineer says, "Anyone who asks a genuinely smart question, I'll personally review their profile for our next hiring cycle."`,
    randomEvent: 'Surprise Zoho guest lecture — career moment!',
    choices: [
      {
        id: 'ask_good',
        text: 'Prepare and ask a sharp, specific question about product engineering',
        consequence: 'Engineer nods slowly. "Good question." Prakash taps your shoulder. Placement +15.',
        delta: { placementReadiness: 15, reputation: 12, mentalHealth: 3, socialBattery: -3 }
      },
      {
        id: 'ask_generic',
        text: 'Ask a safe, general question — at least you participated',
        consequence: 'She answers politely. Nothing special happens. Participation noted.',
        delta: { placementReadiness: 3, reputation: 2 }
      },
      {
        id: 'stay_silent',
        text: 'Stay silent — you\'re not ready and you know it',
        consequence: 'Others ask questions. You take notes. Missed chance but no embarrassment.',
        delta: { mentalHealth: -3, placementReadiness: 2 }
      }
    ]
  },
  {
    id: 's3w3',
    week: 3,
    semester: 3,
    title: 'Sem 3, Week 3 — Arrear Scare',
    narrative: `Sem 2 results confirm it — you have 1 arrear in Engineering Maths II. Not the end of the world but Amma doesn't see it that way. The phone call lasts 45 minutes. Family pressure surges.\n\nSaravanan: "Machi one arrear is nothing. I have three. Seri vidu."\nKeerthana: "Clear it this semester. First attempt. Don't let it compound."`,
    choices: [
      {
        id: 'clear_arrear',
        text: 'Prioritize clearing the arrear — rewrite exam next month',
        consequence: 'Passed the rewrite. Clean slate. Family relaxes. CGPA improves slightly.',
        delta: { arrears: -1, cgpa: 0.1, familyPressure: -15, physicalEnergy: -10, mentalHealth: -8 }
      },
      {
        id: 'delay_arrear',
        text: 'Focus on current sem — will clear arrear next sem',
        consequence: 'Current sem performance is better. But arrear count stays. Family pressure high.',
        delta: { cgpa: 0.1, familyPressure: 10, mentalHealth: -5 }
      },
      {
        id: 'ignore_arrear',
        text: 'Ignore it — it\'s just one subject, it\'ll work out',
        consequence: 'It won\'t. Family pressure spikes. HOD notices. A mistake you\'ll pay for later.',
        delta: { familyPressure: 20, hodRelation: -10, mentalHealth: -10 }
      }
    ]
  },
  {
    id: 's3w4',
    week: 4,
    semester: 3,
    title: 'Sem 3, Week 4 — Divya Situation',
    narrative: `Badminton court. After a surprisingly competitive game, Divya and you end up buying filter coffee at the canteen stall. Ranga akka watches with knowing eyes.\n\n"You're actually decent at badminton for a CSE guy," Divya says. An hour of conversation follows. It feels easy. Natural.\n\nSaravanan texts: "MACHI WHAT IS HAPPENING GIVE DETAILS."`,
    choices: [
      {
        id: 'be_honest',
        text: 'Be honest — "I like talking to you. Can we hang out more?"',
        consequence: 'She smiles. "Let\'s see." Romance intensifies. Your focus wavers slightly.',
        delta: { romance: 25, mentalHealth: 10, cgpa: -0.05, socialBattery: 5 }
      },
      {
        id: 'stay_casual',
        text: 'Keep it casual — don\'t rush anything',
        consequence: 'Slow burn. She respects the patience. Romance grows slowly but steady.',
        delta: { romance: 12, mentalHealth: 5, cgpa: 0.0 }
      },
      {
        id: 'ignore_feelings',
        text: 'Nothing — focus on studies. No distractions this sem.',
        consequence: 'Disciplined. CGPA benefits. But something quiet is missed.',
        delta: { romance: -5, cgpa: 0.1, mentalHealth: -5 }
      }
    ]
  },
  {
    id: 's3w5',
    week: 5,
    semester: 3,
    title: 'Sem 3, Week 5 — Coding Competition',
    narrative: `Annual Inter-College Coding Competition. Prakash wants to register you and Saravanan as a team. Entry fee ₹200. Problem sets are medium-hard. Prize: ₹10,000 + certificates that look great on resumes.\n\nSaravanan: "Machi I'll be moral support. You do the coding."`,
    choices: [
      {
        id: 'compete',
        text: 'Register and compete — give it your best',
        consequence: 'You reach Round 2. Don\'t win but the certificate and experience are real gold.',
        delta: { placementReadiness: 18, money: -200, reputation: 12, mentalHealth: -5, physicalEnergy: -8 }
      },
      {
        id: 'skip',
        text: 'Skip it — internals are next week, priorities',
        consequence: 'Internal marks improve. But Prakash is slightly disappointed. Missed opportunity.',
        delta: { cgpa: 0.1, placementReadiness: -5, reputation: -3 }
      },
      {
        id: 'volunteer',
        text: 'Volunteer to organize instead — networking over competing',
        consequence: 'Met 12 students from different colleges. Networking = future referrals.',
        delta: { placementReadiness: 8, socialBattery: 15, reputation: 8, money: 200 }
      }
    ]
  },
  {
    id: 's3w6',
    week: 6,
    semester: 3,
    title: 'Sem 3, Week 6 — Power Cut Exam Disaster',
    narrative: `Mid-exam. DBMS theory paper. 45 minutes in — power cut. Backup generator takes 12 minutes to start. Your concentration: shattered.\n\nWhen power returns, the faculty says: "Continue from where you stopped. 3 extra minutes will be given."\n\nGuna is loudly arguing for a full re-exam. Keerthana is already back to writing.`,
    randomEvent: 'Power cut mid-exam!',
    choices: [
      {
        id: 'continue_calm',
        text: 'Breathe and continue writing from where you stopped',
        consequence: 'You recover 80%. CGPA loss is minimal. Calm under pressure noted by faculty.',
        delta: { cgpa: -0.05, mentalHealth: -5, reputation: 3 }
      },
      {
        id: 'join_argument',
        text: 'Join Guna\'s re-exam argument loudly',
        consequence: 'They gave 5 more minutes — that\'s it. But your argument was noted negatively by faculty.',
        delta: { cgpa: -0.1, hodRelation: -8, reputation: -5 }
      },
      {
        id: 'use_chaos',
        text: 'Use the dark minutes to discreetly check notes on phone',
        consequence: 'Got a few answers. But another student saw. Risk of getting reported.',
        delta: { cgpa: 0.05, reputation: -15, mentalHealth: -10 }
      }
    ]
  },
  {
    id: 's3w7',
    week: 7,
    semester: 3,
    title: 'Sem 3, Week 7 — Burnout Warning',
    narrative: `You've been running on 4 hours sleep for two weeks. Saravanan says your eyes look like "unripe tamarind." You missed breakfast twice and dinner once this week.\n\nMental Health is low. Physical Energy is lower. But exams are in 8 days.`,
    choices: [
      {
        id: 'push_through',
        text: 'Push through — rest after exams, this is the finish line',
        consequence: 'You manage. But burnout sets in hard post-exam. Recovery takes a week.',
        delta: { cgpa: 0.1, mentalHealth: -20, physicalEnergy: -15 }
      },
      {
        id: 'take_break',
        text: 'Take 2 days off completely — recharge and then study',
        consequence: 'Counter-intuitive but effective. Rested mind absorbs more. Smart move.',
        delta: { mentalHealth: 15, physicalEnergy: 12, cgpa: 0.05 }
      },
      {
        id: 'talk_saravanan',
        text: 'Talk to Saravanan about how you\'re feeling — he\'s been there',
        consequence: 'He drags you to the terrace, makes maggi, and gives you a proper pep talk. You needed this.',
        delta: { mentalHealth: 18, socialBattery: 10, physicalEnergy: 5, cgpa: -0.05 }
      }
    ]
  },
  {
    id: 's3w8',
    week: 8,
    semester: 3,
    title: 'Sem 3, Week 8 — Halfway Through Engineering',
    narrative: `Semester 3 done. You're halfway through your engineering degree. The scoreboard of life:\n\nSaravanan: somehow passing everything. Keerthana: CGPA 9.4, nobody is surprised. Guna: competitive, sneaky, and still making your life difficult. Divya: smiling at you from across the campus sometimes.\n\nThe second half of engineering begins next semester. What matters to you most right now?`,
    choices: [
      {
        id: 'cgpa_focus',
        text: 'CGPA above all — every 0.1 point matters for placements',
        consequence: 'Disciplined mindset locked in. Academic path is clear.',
        delta: { cgpa: 0.1, placementReadiness: 5, familyPressure: -8, mentalHealth: -3 }
      },
      {
        id: 'holistic',
        text: 'Balance everything — CGPA, skills, relationships, health',
        consequence: 'The hardest path but the richest one. All stats nudge slightly positive.',
        delta: { cgpa: 0.05, mentalHealth: 5, socialBattery: 5, placementReadiness: 5, physicalEnergy: 5 }
      },
      {
        id: 'skills_only',
        text: 'Skills and portfolio — CGPA is just a filter',
        consequence: 'Right for some companies. Risky for others. Prakash respects this.',
        delta: { placementReadiness: 18, cgpa: -0.05, reputation: 8, familyPressure: 10 }
      }
    ]
  },

  // ====== SEMESTER 4 ======
  {
    id: 's4w1',
    week: 1,
    semester: 4,
    title: 'Sem 4, Week 1 — Internship Season Begins',
    narrative: `Third year. Internship applications open. Prakash is already sorting people into "placement-ready" and "not yet." You're in a gray zone.\n\nTwo internship options emerge:\n1. Startup — unpaid, real work, portfolio gold\n2. Government project under a professor — stipend ₹3000/month, safe, boring\n\nKeerthana is applying to both and a research paper simultaneously.`,
    choices: [
      {
        id: 'startup',
        text: 'Apply for the startup internship — build real portfolio',
        consequence: 'You get it. Unpaid but the experience is 10x better than theory.',
        delta: { placementReadiness: 20, money: -500, mentalHealth: -5, cgpa: -0.05 }
      },
      {
        id: 'govt_internship',
        text: 'Take the professor\'s government project — stipend + safety',
        consequence: 'Stable. Boring. ₹3000 helps. Bala sir approves.',
        delta: { money: 3000, hodRelation: 8, placementReadiness: 5, mentalHealth: 5 }
      },
      {
        id: 'both_attempt',
        text: 'Try to manage both simultaneously',
        consequence: 'Overambitious. You manage 60% of each. Physical energy crashes.',
        delta: { physicalEnergy: -20, placementReadiness: 12, money: 1500, mentalHealth: -12 }
      }
    ]
  },
  {
    id: 's4w2',
    week: 2,
    semester: 4,
    title: 'Sem 4, Week 2 — Guna Spreads Placement Rumors',
    narrative: `Senthil intercepts information: Guna told the placement coordinator that "he heard" you had attendance issues and an unresolved arrear. The coordinator is now pulling your file.\n\nThis could affect company shortlisting. Saravanan: "Machi, that guy is kaattu madu da. Do something."`,
    choices: [
      {
        id: 'escalate',
        text: 'Go to placement coordinator and clarify your record directly',
        consequence: 'Record is clean enough. Coordinator respects the initiative. Crisis managed.',
        delta: { placementReadiness: 5, hodRelation: 5, reputation: 8 }
      },
      {
        id: 'guna_revenge',
        text: 'Counter with your own intel — tell coordinator about Guna\'s copied project',
        consequence: 'Coordinator investigates both. Mutual damage. Your integrity is questioned.',
        delta: { reputation: -8, rivalry: 20, hodRelation: -5 }
      },
      {
        id: 'let_go',
        text: 'Let it go — your record speaks for itself',
        consequence: 'Faith in the system. It mostly works out. But slightly paranoid.',
        delta: { mentalHealth: -5, placementReadiness: 0, reputation: 3 }
      }
    ]
  },
  {
    id: 's4w3',
    week: 3,
    semester: 4,
    title: 'Sem 4, Week 3 — Placement Season Preview',
    narrative: `Final placement drive orientation. Companies visiting next semester: TCS, Wipro, Infosys (mass recruiters), Zoho (skills-based), and — if your CGPA is 8.5+ — an off-campus Amazon referral program via Prakash's connection.\n\nPrakash to you privately: "Machi, your current profile — where do you stand honestly?"`,
    choices: [
      {
        id: 'self_assess_honest',
        text: 'Honest assessment — "TCS is safe, Zoho is stretch, Amazon is a dream"',
        consequence: 'Prakash gives you a realistic 6-week prep roadmap. Very useful.',
        delta: { placementReadiness: 10, mentalHealth: 5, cgpa: 0.05 }
      },
      {
        id: 'overconfident',
        text: '"I\'m ready for Amazon" — swing for the fences',
        consequence: 'Prakash raises an eyebrow. Pushes you to prove it. High pressure, high reward.',
        delta: { placementReadiness: 15, mentalHealth: -10, reputation: 5 }
      },
      {
        id: 'fake_cert',
        text: 'Show a slightly inflated certificate — fake it till you make it?',
        consequence: 'Prakash notices inconsistencies. You are quietly removed from his mentee list.',
        delta: { placementReadiness: -10, reputation: -15, hodRelation: -10 }
      }
    ]
  },
  {
    id: 's4w4',
    week: 4,
    semester: 4,
    title: 'Sem 4, Week 4 — Breakup or Breakthrough',
    narrative: `If you've been pursuing romance, a pivotal moment arrives. Divya asks: "Are you serious about us or is this just college-time fun?"\n\nIf romance is low, skip this moment — life is already too complicated.\n\nFor everyone: semester pressure is real. Something has to give.`,
    choices: [
      {
        id: 'commit',
        text: 'Commit — "I\'m serious, let\'s figure it out together"',
        consequence: 'Romance deepens. Study sessions together actually help your CGPA. Partners in crime.',
        delta: { romance: 20, cgpa: 0.1, mentalHealth: 15, socialBattery: 5 }
      },
      {
        id: 'pause',
        text: '"Let\'s focus on placements first, then continue?" — honest and fair',
        consequence: 'She understands. Romance pauses but doesn\'t end. Mutual respect.',
        delta: { romance: -10, mentalHealth: 5, cgpa: 0.1, placementReadiness: 5 }
      },
      {
        id: 'end_it',
        text: '"I\'m not in the right headspace for this right now." — end it',
        consequence: 'Painful. Mental health drops hard. But academic focus sharpens eventually.',
        delta: { romance: -30, mentalHealth: -25, cgpa: 0.15, placementReadiness: 5 }
      }
    ]
  },
  {
    id: 's4w5',
    week: 5,
    semester: 4,
    title: 'Sem 4, Week 5 — Final Semester Preparations',
    narrative: `Everything is converging. Final semester exams. Last internship submissions. Placement drives starting in 6 weeks. Family pressure: maximum. Saravanan is somehow still calm — "Machi, God is with us."\n\nYou have one last major choice before the placement season begins.`,
    choices: [
      {
        id: 'dsa_grind',
        text: 'Full DSA grind for coding interviews — LeetCode mode',
        consequence: 'Coding skills sharpen hard. Interview-ready. Physical energy sacrifice.',
        delta: { placementReadiness: 25, physicalEnergy: -15, mentalHealth: -10, socialBattery: -10 }
      },
      {
        id: 'soft_skills',
        text: 'Focus on communication + resume polish — holistic preparation',
        consequence: 'Good for service companies. TCS/Wipro very likely. Zoho: needs more.',
        delta: { placementReadiness: 15, reputation: 8, mentalHealth: 5 }
      },
      {
        id: 'prayer',
        text: 'Visit Murugan temple + trust in your preparation',
        consequence: 'Inner peace. Physical rest. Mental clarity. The divine timing approach.',
        delta: { mentalHealth: 20, physicalEnergy: 10, socialBattery: 5, familyPressure: -5 }
      }
    ]
  },
  {
    id: 's4w6',
    week: 6,
    semester: 4,
    title: 'Week 6 — The Placement Drive',
    narrative: `Day 1 of campus placement drives. You're wearing a formal shirt (ironed last night at 11PM). The campus has a different energy — nervous laughter, résumés printed six times over, faculty wishing everyone.\n\nCompanies are here. This is what 4 years led to. Bala sir is proud regardless of outcome. Even Guna looks nervous.\n\nSaravanan: "Machi, whatever happens — we made it to this day, da."`,
    choices: [
      {
        id: 'aim_high',
        text: 'Apply for Zoho first — shoot for the best fit',
        consequence: 'Technical round went well. Waiting for results. Confidence up.',
        delta: { placementReadiness: 5, mentalHealth: -5, reputation: 8 }
      },
      {
        id: 'mass_recruit',
        text: 'Lock in TCS/Wipro first — secure the base, then swing high',
        consequence: 'Got TCS offer. Relief floods in. Family calls get warm.',
        delta: { money: 5000, familyPressure: -20, mentalHealth: 15, reputation: 5, placementReadiness: -3 }
      },
      {
        id: 'wait_for_dream',
        text: 'Wait for off-campus Amazon referral from Prakash — all in',
        consequence: 'High risk. Application submitted. Waiting. Very stressful.',
        delta: { mentalHealth: -15, placementReadiness: 5, reputation: 3 }
      }
    ]
  },
  {
    id: 's4w7',
    week: 7,
    semester: 4,
    title: 'Week 7 — Final Results & Farewell',
    narrative: `Placements are done. Results are in. Final semester marks are out. 4 years of UIT have come to a close.\n\nThe farewell function happens in the college auditorium. Bala sir gives a speech. Ranga akka cries. Saravanan cries (he denies this). Even Guna shakes your hand — genuinely.\n\nWhatever happened — whatever CGPA, whatever company, whatever relationships — this chapter ends now.\n\nThanks for surviving UIT, da. Semma jolly ah iruku.`,
    choices: [
      {
        id: 'reflect_gratitude',
        text: '"It was hard. It was real. I wouldn\'t trade it."',
        consequence: 'A complete human experience. You\'re ready for whatever comes next.',
        delta: { mentalHealth: 15, reputation: 5, familyPressure: -10 }
      },
      {
        id: 'reflect_grind',
        text: '"I could have done more. But what I did made me."',
        consequence: 'The hunger remains. Good engineers are always students.',
        delta: { placementReadiness: 5, cgpa: 0.1, mentalHealth: 10 }
      },
      {
        id: 'reflect_people',
        text: '"The people mattered most — Saravanan, Keerthana, everyone."',
        consequence: 'Rich life. Relationships that will last decades. Worth it.',
        delta: { socialBattery: 20, mentalHealth: 15, romance: 5 }
      }
    ]
  },
  {
    id: 's4w8',
    week: 8,
    semester: 4,
    title: 'Week 8 — Life After UIT',
    narrative: `The results are final. The degree is yours (hopefully). The placement is decided. Your 4-year UIT story concludes.\n\nThis is the final chapter, machi. How your story ends depends on everything you chose.\n\nVanakkam to the next chapter. Go build something worthy of all those sleepless nights.`,
    choices: [
      {
        id: 'final',
        text: 'See how my UIT story ends — show final results',
        consequence: 'Story complete.',
        delta: {}
      }
    ]
  }
];

export const INITIAL_STATS = {
  cgpa: 7.5,
  mentalHealth: 70,
  socialBattery: 70,
  physicalEnergy: 80,
  attendance: 80,
  arrears: 0,
  money: 5000,
  placementReadiness: 10,
  hodRelation: 50,
  romance: 0,
  rivalry: 0,
  reputation: 50,
  familyPressure: 30
};

export const TRAIT_BONUSES: Record<string, import('../types/game').StatDelta> = {
  'Gym rat': { physicalEnergy: 15, mentalHealth: -5 },
  'Coder': { placementReadiness: 15, socialBattery: -8 },
  'Romantic': { romance: 15, socialBattery: 10, cgpa: -0.1 },
  'Rebel': { reputation: 15, hodRelation: -10, rivalry: 10 },
  "Teacher's pet": { hodRelation: 20, cgpa: 0.2, reputation: -5 }
};
