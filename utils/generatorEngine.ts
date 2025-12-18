
import { QuizQuestion } from '../types';

// THEMATIC DATABASE

const SUBJECTS = [
    { text: "The imposter", type: "3s" },
    { text: "My teammate", type: "3s" },
    { text: "The zombies", type: "pl" },
    { text: "Billie Eilish", type: "3s" },
    { text: "We", type: "pl" },
    { text: "The hacker", type: "3s" },
    { text: "Travis Scott", type: "3s" },
    { text: "My avatar", type: "3s" },
    { text: "Naruto", type: "3s" },
    { text: "The server", type: "3s" },
    { text: "My mom", type: "3s" },
    { text: "Pro players", type: "pl" }
];

const ACTIONS = [
    { base: "stream", v3s: "streams", ving: "streaming", ved: "streamed", obj: "on Twitch" },
    { base: "camp", v3s: "camps", ving: "camping", ved: "camped", obj: "in the bush" },
    { base: "defuse", v3s: "defuses", ving: "defusing", ved: "defused", obj: "the bomb" },
    { base: "drop", v3s: "drops", ving: "dropping", ved: "dropped", obj: "a new album" },
    { base: "lag", v3s: "lags", ving: "lagging", ved: "lagged", obj: "badly" },
    { base: "ban", v3s: "bans", ving: "banning", ved: "banned", obj: "the cheater" },
    { base: "follow", v3s: "follows", ving: "following", ved: "followed", obj: "the trend" },
    { base: "raid", v3s: "raids", ving: "raiding", ved: "raided", obj: "the village" },
    { base: "travel", v3s: "travels", ving: "traveling", ved: "traveled", obj: "to Japan" },
    { base: "play", v3s: "plays", ving: "playing", ved: "played", obj: "Minecraft" },
    { base: "watch", v3s: "watches", ving: "watching", ved: "watched", obj: "TikToks" }
];

const TIME_MARKERS = {
  present_simple: ["every day", "usually", "often", "on Sundays", "always", "never", "every stream"],
  present_continuous: ["right now", "at the moment", "look!", "listen!", "currently"],
  past_simple: ["yesterday", "last night", "in 2020", "two hours ago", "last season"],
  past_continuous: ["at 3 AM", "while I was sleeping", "all day yesterday"],
  future_plans: ["tomorrow", "next week", "tonight", "next season", "soon"]
};

// Helper to get random item
const rnd = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export const generateTest = (topics: string[], count: number): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  const questionsPerTopic = Math.ceil(count / topics.length);

  topics.forEach(topic => {
    for (let i = 0; i < questionsPerTopic; i++) {
      if (questions.length >= count) break;
      questions.push(generateQuestionForTopic(topic, questions.length + 1));
    }
  });

  // Shuffle
  return questions.sort(() => Math.random() - 0.5);
};

const generateQuestionForTopic = (topic: string, id: number): QuizQuestion => {
  const subj = rnd(SUBJECTS);
  const action = rnd(ACTIONS);
  
  switch (topic) {
    case 'present_simple': {
      const isNeg = Math.random() > 0.6;
      const marker = rnd(TIME_MARKERS.present_simple);
      
      if (isNeg) {
        // Negative: Don't / Doesn't
        const aux = (subj.type === "3s") ? "doesn't" : "don't";
        const wrongAux = (subj.type === "3s") ? "don't" : "doesn't";
        return {
          id,
          question: `${subj.text} _______ ${action.base} ${action.obj} ${marker}.`,
          options: [aux, wrongAux, (subj.type === "3s" ? "isn't" : "aren't")].sort(() => Math.random() - 0.5),
          correctAnswer: aux,
          type: 'choice'
        };
      } else {
        // Positive: V1 / V1s
        const correct = (subj.type === "3s") ? action.v3s : action.base;
        const wrong1 = (subj.type === "3s") ? action.base : action.v3s;
        const wrong2 = action.ving;
        return {
          id,
          question: `${subj.text} _______ ${action.obj} ${marker}.`,
          options: [correct, wrong1, wrong2].sort(() => Math.random() - 0.5),
          correctAnswer: correct,
          type: 'choice'
        };
      }
    }

    case 'present_continuous': {
      const marker = rnd(TIME_MARKERS.present_continuous);
      const be = (subj.type === "3s" ? "is" : "are");
      const wrongBe1 = (be === "is") ? "are" : "is";
      const wrongBe2 = "do";
      
      const type = Math.random();
      if (type > 0.5) {
        // Test Verb-ing
        return {
          id,
          question: `${marker} ${subj.text} is _______ ${action.obj}!`,
          options: [action.ving, action.base, action.v3s].sort(() => Math.random() - 0.5),
          correctAnswer: action.ving,
          type: 'choice'
        };
      } else {
        // Test Aux
        return {
          id,
          question: `${subj.text} _______ ${action.ving} ${action.obj} ${marker}.`,
          options: [be, wrongBe1, wrongBe2].sort(() => Math.random() - 0.5),
          correctAnswer: be,
          type: 'choice'
        };
      }
    }

    case 'past_simple': {
      const marker = rnd(TIME_MARKERS.past_simple);
      const isNeg = Math.random() > 0.7;

      if (isNeg) {
         return {
          id,
          question: `${subj.text} _______ ${action.base} ${action.obj} ${marker}.`,
          options: ["didn't", "don't", "wasn't"].sort(() => Math.random() - 0.5),
          correctAnswer: "didn't",
          type: 'choice'
        };
      } else {
         return {
          id,
          question: `${subj.text} _______ ${action.obj} ${marker}.`,
          options: [action.ved, action.base, action.ving].sort(() => Math.random() - 0.5),
          correctAnswer: action.ved,
          type: 'choice'
        };
      }
    }

    case 'past_continuous': {
       const be = (subj.type === "3s") ? "was" : "were";
       const wrongBe = (be === "was") ? "were" : "was";
       return {
          id,
          question: `While I was AFK, ${subj.text} _______ ${action.ving} ${action.obj}.`,
          options: [be, wrongBe, "is"].sort(() => Math.random() - 0.5),
          correctAnswer: be,
          type: 'choice'
       };
    }

    case 'future_plans': {
        const be = (subj.type === "3s" ? "is" : "are");
        return {
            id,
            question: `${subj.text} _______ going to ${action.base} ${action.obj} tomorrow.`,
            options: [be, "will", "go"].sort(() => Math.random() - 0.5),
            correctAnswer: be,
            type: 'choice'
        }
    }

    case 'relative_clauses': {
        const person = rnd(["The streamer", "The hacker", "The noob", "The celebrity"]);
        const thing = rnd(["The skin", "The car", "The phone", "The loot box"]);
        const place = rnd(["The server", "The city", "The map", "The house"]);
        
        const qType = Math.random();
        
        if (qType < 0.33) {
             return {
                id,
                question: `${person} _______ banned me was angry.`,
                options: ["who", "which", "where"].sort(() => Math.random() - 0.5),
                correctAnswer: "who",
                type: 'choice'
            };
        } else if (qType < 0.66) {
            return {
                id,
                question: `${thing} _______ I bought is legendary.`,
                options: ["which", "who", "where"].sort(() => Math.random() - 0.5),
                correctAnswer: "which",
                type: 'choice'
            };
        } else {
            return {
                id,
                question: `${place} _______ we camp is safe.`,
                options: ["where", "which", "who"].sort(() => Math.random() - 0.5),
                correctAnswer: "where",
                type: 'choice'
            };
        }
    }

    case 'articles_quantifiers': {
        const countable = rnd(["skins", "followers", "loot boxes", "kills"]);
        const uncountable = rnd(["money", "lag", "health", "armor"]);
        
        if (Math.random() > 0.5) {
             return {
                id,
                question: `I don't have _______ ${uncountable} left.`,
                options: ["much", "many", "a few"].sort(() => Math.random() - 0.5),
                correctAnswer: "much",
                type: 'choice'
            };
        } else {
             return {
                id,
                question: `I have a _______ ${countable}.`,
                options: ["few", "little", "much"].sort(() => Math.random() - 0.5),
                correctAnswer: "few",
                type: 'choice'
            };
        }
    }
      
    // Default fallback
    default: return {
      id,
      question: `Identify the correct form: ${subj.text} _______ (to be).`,
      options: ["is", "are", "am"],
      correctAnswer: "is",
      type: 'choice'
    };
  }
};
