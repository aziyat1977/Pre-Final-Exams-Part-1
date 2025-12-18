
import { QuizQuestion } from '../types';

// Databases for dynamic generation
const SUBJECTS = [
  { text: "I", type: "1s" }, { text: "You", type: "2s" }, { text: "He", type: "3s" }, { text: "She", type: "3s" }, 
  { text: "It", type: "3s" }, { text: "We", type: "pl" }, { text: "They", type: "pl" },
  { text: "My mother", type: "3s" }, { text: "The dog", type: "3s" }, { text: "Tom and Jerry", type: "pl" }
];

const VERBS = [
  { base: "play", v3s: "plays", ving: "playing", ved: "played" },
  { base: "work", v3s: "works", ving: "working", ved: "worked" },
  { base: "watch", v3s: "watches", ving: "watching", ved: "watched" },
  { base: "eat", v3s: "eats", ving: "eating", ved: "ate" },
  { base: "go", v3s: "goes", ving: "going", ved: "went" },
  { base: "study", v3s: "studies", ving: "studying", ved: "studied" },
  { base: "sleep", v3s: "sleeps", ving: "sleeping", ved: "slept" }
];

const TIME_MARKERS = {
  present_simple: ["every day", "usually", "often", "on Sundays", "always", "never"],
  present_continuous: ["now", "at the moment", "right now", "listen!", "look!"],
  past_simple: ["yesterday", "last week", "in 1999", "two days ago", "when I was young"],
  past_continuous: ["at 5 PM yesterday", "while I was reading"],
  future_plans: ["tomorrow", "next week", "tonight", "next year"]
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
  const verb = rnd(VERBS);
  
  switch (topic) {
    case 'present_simple': {
      const isNeg = Math.random() > 0.7;
      const marker = rnd(TIME_MARKERS.present_simple);
      
      if (isNeg) {
        // Negative: Don't / Doesn't
        const aux = (subj.type === "3s") ? "doesn't" : "don't";
        const wrongAux = (subj.type === "3s") ? "don't" : "doesn't";
        return {
          id,
          question: `${subj.text} _______ ${verb.base} ${marker}.`,
          options: [aux, wrongAux, (subj.type === "3s" ? "isn't" : "aren't")].sort(() => Math.random() - 0.5),
          correctAnswer: aux,
          type: 'choice'
        };
      } else {
        // Positive: V1 / V1s
        const correct = (subj.type === "3s") ? verb.v3s : verb.base;
        const wrong1 = (subj.type === "3s") ? verb.base : verb.v3s;
        const wrong2 = verb.ving;
        return {
          id,
          question: `${subj.text} _______ football ${marker}.`,
          options: [correct, wrong1, wrong2].sort(() => Math.random() - 0.5),
          correctAnswer: correct,
          type: 'choice'
        };
      }
    }

    case 'present_continuous': {
      const marker = rnd(TIME_MARKERS.present_continuous);
      const be = (subj.text === "I") ? "am" : (subj.type === "3s" ? "is" : "are");
      const wrongBe1 = (be === "is") ? "are" : "is";
      const wrongBe2 = "do";
      
      const type = Math.random();
      if (type > 0.5) {
        // Test Verb-ing
        return {
          id,
          question: `${marker} ${subj.text} is _______ TV.`,
          options: [verb.ving, verb.base, verb.v3s].sort(() => Math.random() - 0.5),
          correctAnswer: verb.ving,
          type: 'choice'
        };
      } else {
        // Test Aux
        return {
          id,
          question: `${subj.text} _______ ${verb.ving} ${marker}.`,
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
          question: `${subj.text} _______ ${verb.base} ${marker}.`,
          options: ["didn't", "don't", "wasn't"].sort(() => Math.random() - 0.5),
          correctAnswer: "didn't",
          type: 'choice'
        };
      } else {
         return {
          id,
          question: `${subj.text} _______ to the park ${marker}.`,
          options: [verb.ved, verb.base, verb.ving].sort(() => Math.random() - 0.5),
          correctAnswer: verb.ved,
          type: 'choice'
        };
      }
    }

    case 'past_continuous': {
       const be = (subj.type === "3s" || subj.text === "I") ? "was" : "were";
       const wrongBe = (be === "was") ? "were" : "was";
       return {
          id,
          question: `While I was reading, ${subj.text} _______ ${verb.ving}.`,
          options: [be, wrongBe, "is"].sort(() => Math.random() - 0.5),
          correctAnswer: be,
          type: 'choice'
       };
    }

    case 'future_plans': {
        const be = (subj.text === "I") ? "am" : (subj.type === "3s" ? "is" : "are");
        return {
            id,
            question: `${subj.text} _______ going to ${verb.base} tomorrow.`,
            options: [be, "will", "go"].sort(() => Math.random() - 0.5),
            correctAnswer: be,
            type: 'choice'
        }
    }

    case 'relative_clauses': {
        const person = rnd(["The man", "The woman", "The student", "The doctor"]);
        const thing = rnd(["The book", "The car", "The phone", "The house"]);
        const place = rnd(["The city", "The park", "The hotel", "The room"]);
        
        const qType = Math.random();
        
        if (qType < 0.33) {
             return {
                id,
                question: `${person} _______ called me was angry.`,
                options: ["who", "which", "where"].sort(() => Math.random() - 0.5),
                correctAnswer: "who",
                type: 'choice'
            };
        } else if (qType < 0.66) {
            return {
                id,
                question: `${thing} _______ I bought is red.`,
                options: ["which", "who", "where"].sort(() => Math.random() - 0.5),
                correctAnswer: "which",
                type: 'choice'
            };
        } else {
            return {
                id,
                question: `${place} _______ we stayed was nice.`,
                options: ["where", "which", "who"].sort(() => Math.random() - 0.5),
                correctAnswer: "where",
                type: 'choice'
            };
        }
    }

    case 'articles_quantifiers': {
        const countable = rnd(["apples", "friends", "books", "chairs"]);
        const uncountable = rnd(["water", "sugar", "money", "information"]);
        
        if (Math.random() > 0.5) {
             return {
                id,
                question: `I don't have _______ ${uncountable}.`,
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
