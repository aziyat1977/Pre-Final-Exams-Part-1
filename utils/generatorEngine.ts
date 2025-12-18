
import { QuizQuestion } from '../types';

// --- ELITE LINGUISTIC CORE ---

type GrammarLevel = 'B1' | 'B1+';

interface VerbSet {
  v1: string;
  v3s: string;
  v2: string;
  v3: string;
  ving: string;
}

interface ScenarioData {
  subjects: { text: string; type: '3s' | 'pl' }[];
  objects: string[];
  verbs: VerbSet[];
}

// VERSION A: SOCIAL MEDIA & DIGITAL FAME (B1/B1+)
const DATA_A: ScenarioData = {
  subjects: [
    { text: "The viral influencer", type: "3s" },
    { text: "My TikTok followers", type: "pl" },
    { text: "The community moderator", type: "3s" },
    { text: "A group of toxic trolls", type: "pl" },
    { text: "The lead designer", type: "3s" },
    { text: "The algorithm", type: "3s" }
  ],
  objects: ["the latest dance challenge", "a private DM", "the leaked selfie", "the 10-million-subscriber plaque", "the community guidelines", "the sponsorship deal"],
  verbs: [
    { v1: "ghost", v3s: "ghosts", v2: "ghosted", v3: "ghosted", ving: "ghosting" },
    { v1: "flex", v3s: "flexes", v2: "flexed", v3: "flexed", ving: "flexing" },
    { v1: "cancel", v3s: "cancels", v2: "cancelled", v3: "cancelled", ving: "cancelling" },
    { v1: "upload", v3s: "uploads", v2: "uploaded", v3: "uploaded", ving: "uploading" },
    { v1: "leak", v3s: "leaks", v2: "leaked", v3: "leaked", ving: "leaking" },
    { v1: "block", v3s: "blocks", v2: "blocked", v3: "blocked", ving: "blocking" }
  ]
};

// VERSION B: GAMING & ESPORTS (B1/B1+)
const DATA_B: ScenarioData = {
  subjects: [
    { text: "The rookie speedrunner", type: "3s" },
    { text: "Professional eSports athletes", type: "pl" },
    { text: "The final boss", type: "3s" },
    { text: "My entire Discord squad", type: "pl" },
    { text: "The server admin", type: "3s" },
    { text: "The camper", type: "3s" }
  ],
  objects: ["the secret world record", "the golden armor set", "the tournament finals", "the laggy server", "the hidden easter egg", "the ranked match"],
  verbs: [
    { v1: "grind", v3s: "grinds", v2: "ground", v3: "ground", ving: "grinding" },
    { v1: "clutch", v3s: "clutches", v2: "clutched", v3: "clutched", ving: "clutching" },
    { v1: "ban", v3s: "bans", v2: "banned", v3: "banned", ving: "banning" },
    { v1: "stream", v3s: "streams", v2: "streamed", v3: "streamed", ving: "streaming" },
    { v1: "find", v3s: "finds", v2: "found", v3: "found", ving: "finding" },
    { v1: "loot", v3s: "loots", v2: "looted", v3: "looted", ving: "looting" }
  ]
};

// VERSION C: FUTURE & TECH DYSTOPIA (B1/B1+)
const DATA_C: ScenarioData = {
  subjects: [
    { text: "The AI companion", type: "3s" },
    { text: "Cybernetic citizens", type: "pl" },
    { text: "The holographic teacher", type: "3s" },
    { text: "Deep-space explorers", type: "pl" },
    { text: "The quantum processor", type: "3s" },
    { text: "The drone swarm", type: "pl" }
  ],
  objects: ["the virtual reality matrix", "the memory chip", "the neural network", "the hover-car engine", "the star-gate coordinates", "the encrypted data"],
  verbs: [
    { v1: "upgrade", v3s: "upgrades", v2: "upgraded", v3: "upgraded", ving: "upgrading" },
    { v1: "malfunction", v3s: "malfunctions", v2: "malfunctioned", v3: "malfunctioned", ving: "malfunctioning" },
    { v1: "reboot", v3s: "reboots", v2: "rebooted", v3: "rebooted", ving: "rebooting" },
    { v1: "simulate", v3s: "simulates", v2: "simulated", v3: "simulated", ving: "simulating" },
    { v1: "detect", v3s: "detects", v2: "detected", v3: "detected", ving: "detecting" },
    { v1: "hack", v3s: "hacks", v2: "hacked", v3: "hacked", ving: "hacking" }
  ]
};

// --- GENERIC QUESTION FACTORY ---

const rnd = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

const generateFromTemplate = (id: number, topic: string, data: ScenarioData): QuizQuestion => {
  const s = rnd(data.subjects);
  const v = rnd(data.verbs);
  const o = rnd(data.objects);
  const is3s = s.type === '3s';

  // Helper to ensure we don't pick the same verb twice in a question
  const v2_diff = rnd(data.verbs.filter(verb => verb.v1 !== v.v1)) || data.verbs[0];

  switch (topic) {
    case 'present_perfect_continuous':
      return {
        id,
        question: `Actually, ${s.text} _______ ${v.ving} ${o} since the season started.`,
        options: [
            is3s ? "has been" : "have been", 
            is3s ? "have been" : "has been", 
            "is being", 
            "was being"
        ],
        correctAnswer: is3s ? "has been" : "have been",
        type: 'choice'
      };

    case 'third_conditional':
      return {
        id,
        question: `If ${s.text} _______ ${v.v3} ${o}, the whole situation would have been different.`,
        options: [
            `hadn't ${v.v3}`, 
            `hasn't ${v.v3}`, 
            `didn't ${v.v1}`, 
            `wouldn't ${v.v1}`
        ],
        correctAnswer: `hadn't ${v.v3}`,
        type: 'choice'
      };

    case 'modals_deduction_past':
      return {
        id,
        question: `The account is gone! ${s.text} _______ ${v.v3} ${o} by mistake.`,
        options: [
            `must have ${v.v3}`, 
            `must ${v.v1}`, 
            `should have ${v.v3}`, 
            `might ${v.v1}`
        ],
        correctAnswer: `must have ${v.v3}`,
        type: 'choice'
      };

    case 'wish_regret':
      return {
        id,
        question: `I really wish ${s.text} _______ ${v.v1} ${o} during the live event.`,
        options: [
            `hadn't ${v.v3}`, 
            `didn't ${v.v1}`, 
            `doesn't ${v.v3s}`, 
            `wasn't ${v.ving}`
        ],
        correctAnswer: `hadn't ${v.v3}`,
        type: 'choice'
      };

    case 'passive_mixed':
      const useContinuous = Math.random() > 0.5;
      return {
        id,
        question: useContinuous 
          ? `Wait! ${o} _______ by ${s.text} at this very moment.`
          : `By midnight, ${o} already _______ by ${s.text}.`,
        options: useContinuous 
          ? [`is being ${v.v3}`, `is ${v.v3}`, `was being ${v.v3}`, `has been ${v.v3}`]
          : [`had been ${v.v3}`, `was ${v.v3}`, `has been ${v.v3}`, `is ${v.v3}`],
        correctAnswer: useContinuous ? `is being ${v.v3}` : `had been ${v.v3}`,
        type: 'choice'
      };
    
    case 'past_perfect':
      return {
        id,
        question: `Before I joined, ${s.text} _______ already ${v.v3} ${o}.`,
        options: [
            `had`, 
            `has`, 
            `have`, 
            `was`
        ],
        correctAnswer: `had`,
        type: 'choice'
      };

    case 'reported_speech_advanced':
      const reporter = rnd(["The admin", "My friend", "The news bot"]);
      return {
        id,
        question: `${reporter} asked if ${s.text} _______ ${v.v3} ${o}.`,
        options: [
            `had`, 
            `has`, 
            `have`, 
            `will`
        ],
        correctAnswer: `had`,
        type: 'choice'
      };

    case 'relative_clauses_non_defining':
      return {
        id,
        question: `${s.text}, _______ usually ignores ${o}, is acting strange today.`,
        options: ["who", "which", "that", "whose"],
        correctAnswer: "who", // Subjects in our DB are mostly people/entities acting like people
        type: 'choice'
      };

    case 'gerund_inf_meaning':
      const pattern = rnd([
          { verb: "stopped", form: v.ving, dist: "to "+v.v1 }, 
          { verb: "decided", form: "to "+v.v1, dist: v.ving },
          { verb: "avoided", form: v.ving, dist: "to "+v.v1 }
      ]);
      return {
          id,
          question: `Finally, ${s.text} ${pattern.verb} _______ ${o}.`,
          options: [pattern.form, pattern.dist, v.v1, v.v3],
          correctAnswer: pattern.form,
          type: 'choice'
      };

    case 'used_to_be_used_to':
      return {
          id,
          question: `${s.text} isn't used to _______ ${o} without help.`,
          options: [v.ving, v.v1, "to " + v.v1, v.v3],
          correctAnswer: v.ving,
          type: 'choice'
      };

    default: // Mixed Tenses / Standard
       const tenseType = rnd(['simple', 'continuous', 'perfect']);
       if (tenseType === 'simple') {
         return {
             id,
             question: `Every day, ${s.text} _______ ${o}.`,
             options: [is3s ? v.v3s : v.v1, is3s ? v.v1 : v.v3s, v.ving, v.v3],
             correctAnswer: is3s ? v.v3s : v.v1,
             type: 'choice'
         };
       } else if (tenseType === 'continuous') {
         return {
             id,
             question: `Look! ${s.text} _______ ${o} right now!`,
             options: [is3s ? "is " + v.ving : "are " + v.ving, v.ving, v.v3s, "will " + v.v1],
             correctAnswer: is3s ? "is " + v.ving : "are " + v.ving,
             type: 'choice'
         };
       } else {
         return {
             id,
             question: `${s.text} _______ just ${v.v3} ${o}.`,
             options: [is3s ? "has" : "have", is3s ? "have" : "has", "did", "was"],
             correctAnswer: is3s ? "has" : "have",
             type: 'choice'
         };
       }
  }
};

export const generateTest = (topics: string[], count: number): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  let safetyBreak = 0;

  // We loop until we have enough questions
  while (questions.length < count && safetyBreak < 2000) {
    // 1. Pick a Random Topic from user selection
    const topic = rnd(topics);
    
    // 2. Pick a Random Dataset (A, B, or C) to ensure maximum variety
    const dataset = rnd([DATA_A, DATA_B, DATA_C]);

    // 3. Generate
    const q = generateFromTemplate(questions.length + 1, topic, dataset);

    // 4. Duplicate Check (Simple String check)
    const exists = questions.some(ex => ex.question === q.question);
    
    if (!exists) {
        questions.push(q);
    }
    safetyBreak++;
  }

  return questions;
};
