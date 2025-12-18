
import { QuizQuestion } from '../types';

// --- LINGUISTIC DATABASE ---

interface Verb {
  v1: string;
  v3s: string;
  v2: string;
  v3: string;
  ving: string;
  obj: string;
}

const VERB_DB: Verb[] = [
  { v1: "stream", v3s: "streams", v2: "streamed", v3: "streamed", ving: "streaming", obj: "the match" },
  { v1: "buy", v3s: "buys", v2: "bought", v3: "bought", ving: "buying", obj: "the limited skin" },
  { v1: "find", v3s: "finds", v2: "found", v3: "found", ving: "finding", obj: "the secret exploit" },
  { v1: "win", v3s: "wins", v2: "won", v3: "won", ving: "winning", obj: "the tournament" },
  { v1: "lose", v3s: "loses", v2: "lost", v3: "lost", ving: "losing", obj: "the high-stakes bet" },
  { v1: "see", v3s: "sees", v2: "saw", v3: "seen", ving: "seeing", obj: "the enemy squad" },
  { v1: "take", v3s: "takes", v2: "took", v3: "taken", ving: "taking", obj: "the lead" },
  { v1: "write", v3s: "writes", v2: "wrote", v3: "written", ving: "writing", obj: "the script" },
  { v1: "give", v3s: "gives", v2: "gave", v3: "given", ving: "giving", obj: "away free items" },
  { v1: "do", v3s: "does", v2: "did", v3: "done", ving: "doing", obj: "the daily quests" },
];

const SUBJECTS = [
  { text: "The pro player", type: "3s" },
  { text: "My squadmates", type: "pl" },
  { text: "The game developer", type: "3s" },
  { text: "The hackers", type: "pl" },
  { text: "Billie Eilish", type: "3s" },
  { text: "The server host", type: "3s" },
  { text: "We", type: "pl" },
  { text: "Everyone", type: "3s" },
];

// --- ENGINE LOGIC ---

const rnd = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const generateTest = (topics: string[], count: number): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  const itemsPerTopic = Math.ceil(count / topics.length);

  topics.forEach((topic) => {
    for (let i = 0; i < itemsPerTopic; i++) {
      if (questions.length >= count) break;
      questions.push(generateIntelligentQuestion(topic, questions.length + 1));
    }
  });

  return questions.sort(() => Math.random() - 0.5);
};

const generateIntelligentQuestion = (topic: string, id: number): QuizQuestion => {
  const subj = rnd(SUBJECTS);
  const v = rnd(VERB_DB);
  const v2 = rnd(VERB_DB.filter(x => x.v1 !== v.v1));

  switch (topic) {
    case 'present_perfect_continuous': {
      const aux = subj.type === "3s" ? "has been" : "have been";
      const dist = subj.type === "3s" ? "have been" : "has been";
      return {
        id,
        question: `${subj.text} _______ ${v.ving} ${v.obj} for over three hours.`,
        options: [aux, dist, "is being", "was been"],
        correctAnswer: aux,
        type: 'choice'
      };
    }

    case 'third_conditional': {
      return {
        id,
        question: `If ${subj.text} _______ ${v.v3} ${v.obj} earlier, they would have won the match.`,
        options: [`had ${v.v3}`, `have ${v.v3}`, `would have ${v.v3}`, `has ${v.v3}`],
        correctAnswer: `had ${v.v3}`,
        type: 'choice'
      };
    }

    case 'past_perfect': {
      return {
        id,
        question: `By the time I logged in, ${subj.text} already _______ ${v.v3} ${v.obj}.`,
        options: [`had ${v.v3}`, `have ${v.v3}`, `was ${v.v3}`, v.v2],
        correctAnswer: `had ${v.v3}`,
        type: 'choice'
      };
    }

    case 'modals_deduction_past': {
      return {
        id,
        question: `The room is empty. ${subj.text} _______ out to celebrate the victory.`,
        options: ["must have gone", "must go", "must have went", "can't go"],
        correctAnswer: "must have gone",
        type: 'choice'
      };
    }

    case 'passive_mixed': {
      const tense = Math.random() > 0.5 ? 'continuous' : 'perfect';
      if (tense === 'continuous') {
        return {
          id,
          question: `Wait! ${v.obj} _______ by ${subj.text} right now.`,
          options: [`is being ${v.v3}`, `is ${v.v3}`, `was being ${v.v3}`, `has been ${v.v3}`],
          correctAnswer: `is being ${v.v3}`,
          type: 'choice'
        };
      } else {
        return {
          id,
          question: `${v.obj} _______ by ${subj.text} since the update.`,
          options: [`has been ${v.v3}`, `was ${v.v3}`, `is ${v.v3}`, `had been ${v.v3}`],
          correctAnswer: `has been ${v.v3}`,
          type: 'choice'
        };
      }
    }

    case 'reported_speech_advanced': {
      return {
        id,
        question: `The moderator asked ${subj.text} where _______ the hidden items.`,
        options: [`they had found`, `did they find`, `had they found`, `they have found`],
        correctAnswer: `they had found`,
        type: 'choice'
      };
    }

    case 'wish_regret': {
      return {
        id,
        question: `I wish ${subj.text} _______ so much lag during the final boss fight.`,
        options: ["hadn't had", "didn't have", "hasn't had", "wouldn't have had"],
        correctAnswer: "hadn't had",
        type: 'choice'
      };
    }

    case 'gerund_inf_meaning': {
      const type = Math.random() > 0.5 ? 'stop' : 'remember';
      if (type === 'stop') {
        return {
          id,
          question: `The game was so boring that I stopped _______ (play) it.`,
          options: ["playing", "to play", "played", "to playing"],
          correctAnswer: "playing",
          type: 'choice'
        };
      } else {
        return {
          id,
          question: `I remember _______ (see) the trailer, but I don't remember the name.`,
          options: ["seeing", "to see", "saw", "having seen"],
          correctAnswer: "seeing",
          type: 'choice'
        };
      }
    }

    case 'relative_clauses_non_defining': {
      return {
        id,
        question: `${subj.text}, _______ usually plays on the European servers, is actually from Japan.`,
        options: ["who", "that", "which", "whose"],
        correctAnswer: "who",
        type: 'choice'
      };
    }

    case 'used_to_be_used_to': {
      return {
        id,
        question: `I am not used to _______ with a controller yet.`,
        options: ["playing", "play", "played", "be playing"],
        correctAnswer: "playing",
        type: 'choice'
      };
    }

    default: {
      // Fallback for standard topics
      const is3s = subj.type === "3s";
      return {
        id,
        question: `${subj.text} _______ ${v.obj} every weekend.`,
        options: [is3s ? v.v3s : v.v1, is3s ? v.v1 : v.v3s, v.ving, v.v2],
        correctAnswer: is3s ? v.v3s : v.v1,
        type: 'choice'
      };
    }
  }
};
