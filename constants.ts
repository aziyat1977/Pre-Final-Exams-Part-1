
import { GrammarRule, QuizQuestion, DetailedTense } from './types';

export const TENSES_DATA: GrammarRule[] = [
  {
    title: 'Present Simple',
    formula: 'Subj + V1(s)',
    russian: 'Подлежащее + Гл(s)',
    uzbek: "Sub'ekt + fe'l",
  },
  {
    title: 'Present Continuous',
    formula: 'Subj + am/is/are + V-ing',
    russian: 'Подлежащее + Гл прямо сейчас',
    uzbek: "Sub'ekt + fe'l-yapman/yapsan...",
  },
  {
    title: 'Past Simple',
    formula: 'Subj + V2 (ed)',
    russian: 'Подлежащее + Гл-прош.вр',
    uzbek: "Sub'ekt + fe'l-di",
  },
  {
    title: 'Past Continuous',
    formula: 'Subj + was/were + V-ing',
    russian: 'Подлежащее + был/были + Гл-ing',
    uzbek: "Sub'ekt + fe'l-ayotgan edi",
  },
];

export const DETAILED_TENSES: DetailedTense[] = [
  {
    id: 'present_simple',
    title: 'Present Simple',
    meaning: {
      english: "Used for facts, habits, and routines.",
      russian: "Используется для фактов, привычек и рутины.",
      uzbek: "Faktlar, odatlar va doimiy harakatlar uchun ishlatiladi."
    },
    timeline: {
      description: "Happens regularly or is always true.",
      exampleSentence: "I play football every Sunday.",
      exampleRussian: "Я играю в футбол каждое воскресенье.",
      exampleUzbek: "Men har yakshanba futbol o'ynayman.",
      visualType: 'point-now' // Using a generic placeholder, visualized in component
    },
    forms: {
      positive: "Subject + V1 (s/es)",
      negative: "Subject + don't/doesn't + V1",
      question: "Do/Does + Subject + V1?"
    },
    pronunciation: {
      text: "I play football every Sunday.",
      tips: "Focus on the 's' sound in 3rd person (He playS). Don't stress the 'do' in questions."
    }
  },
  {
    id: 'present_continuous',
    title: 'Present Continuous',
    meaning: {
      english: "Action happening right now or temporary.",
      russian: "Действие происходит прямо сейчас или временно.",
      uzbek: "Harakat hozirgi paytda sodir bo'lmoqda."
    },
    timeline: {
      description: "Happening at the exact moment of speaking.",
      exampleSentence: "I am sleeping now.",
      exampleRussian: "Я сплю сейчас.",
      exampleUzbek: "Men hozir uxlayapman.",
      visualType: 'continuous-now'
    },
    forms: {
      positive: "Subj + am/is/are + V-ing",
      negative: "Subj + am/is/are + not + V-ing",
      question: "Am/Is/Are + Subj + V-ing?"
    },
    pronunciation: {
      text: "I am sleeping now.",
      tips: "Link the verb 'to be' with the verb. 'I'm sleeping', not 'I... am... sleeping'."
    }
  },
  {
    id: 'past_simple',
    title: 'Past Simple',
    meaning: {
      english: "Finished action in the past.",
      russian: "Законченное действие в прошлом.",
      uzbek: "O'tmishda tugallangan harakat."
    },
    timeline: {
      description: "Happened at a specific time in the past.",
      exampleSentence: "I watched a movie yesterday.",
      exampleRussian: "Я смотрел фильм вчера.",
      exampleUzbek: "Men kecha kino ko'rdim.",
      visualType: 'point-past'
    },
    forms: {
      positive: "Subject + V2 (-ed)",
      negative: "Subject + didn't + V1",
      question: "Did + Subject + V1?"
    },
    pronunciation: {
      text: "I watched a movie yesterday.",
      tips: "For regular verbs (-ed), 'watched' sounds like 'watch-t', not 'watch-id'."
    }
  },
  {
    id: 'past_continuous',
    title: 'Past Continuous',
    meaning: {
      english: "Action in progress at a specific time in the past.",
      russian: "Действие в процессе в определенный момент прошлого.",
      uzbek: "O'tmishning ma'lum bir vaqtida davom etayotgan harakat."
    },
    timeline: {
      description: "Interrupted action or parallel action.",
      exampleSentence: "I was sleeping when the phone rang.",
      exampleRussian: "Я спал, когда зазвонил телефон.",
      exampleUzbek: "Telefon jiringlaganda men uxlayotgan edim.",
      visualType: 'continuous-past'
    },
    forms: {
      positive: "Subj + was/were + V-ing",
      negative: "Subj + was/were + not + V-ing",
      question: "Was/Were + Subj + V-ing?"
    },
    pronunciation: {
      text: "I was sleeping when the phone rang.",
      tips: "Stress 'sleeping' and 'rang'. 'Was' is usually weak/fast."
    }
  }
];

export const CONNECTORS_DATA: GrammarRule[] = [
  {
    title: 'Relative Clauses',
    formula: 'Noun + who/which/where',
    russian: 'Сущ. + который / где',
    uzbek: 'Ot + ...digan / qaysiki',
  },
  {
    title: 'Future (Plans)',
    formula: 'Subj + am/is/are + going to',
    russian: 'Подлежащее + собираться',
    uzbek: "Sub'ekt + fe'l-moqchi",
  },
  {
    title: 'Verb Patterns',
    formula: 'Verb + to-V1 / V-ing',
    russian: 'Гл + инфинитив / герундий',
    uzbek: "Fe'l + fe'l (ko'rinishi)",
  },
];

export const QUANTITY_DATA: GrammarRule[] = [
  {
    title: 'A / An',
    formula: 'First time / 1 thing',
    russian: 'Один из / Впервые',
    uzbek: 'Bitta / Birinchi marta',
  },
  {
    title: 'The',
    formula: 'Specific / Known',
    russian: 'Тот самый / Известный',
    uzbek: "O'sha / Ma'lum",
  },
  {
    title: 'A few',
    formula: 'Countable (+)',
    russian: 'Несколько (счит.)',
    uzbek: 'Bir nechta (sanalsa)',
  },
  {
    title: 'A little',
    formula: 'Uncountable (+)',
    russian: 'Немного (несчит.)',
    uzbek: 'Ozroq (sanalmasa)',
  },
];

export const EXAM_KILLERS = [
  { title: "Interruption", text: "I **was sleeping** (longer) when the alarm **rang** (short)." },
  { title: "Relative Clause", text: "This is the city **where** I was born." },
  { title: "Future Arranged", text: "We **are flying** to London tomorrow at 9 PM (Fixed!)." },
  { title: "Quantifiers", text: "I have **a few** friends (Happy) vs. **little** money (Sad)." },
  { title: "Verb Patterns", text: "I **hate waiting** (habit) but I **need to go** (necessity)." },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 1, question: "Look! The bus _______. We must run!", options: ["comes", "is coming", "came"], correctAnswer: "is coming", type: "choice" },
  { id: 2, question: "Valentina Tereshkova _______ the space program in 1961.", options: ["joins", "joined", "has joined"], correctAnswer: "joined", type: "choice" },
  { id: 3, question: "Is that the man _______ stole your bag?", options: ["which", "who", "where"], correctAnswer: "who", type: "choice" },
  { id: 4, question: "I don't have _______ time before the exam starts.", options: ["many", "much", "some"], correctAnswer: "much", type: "choice" },
  { id: 5, question: "We decided _______ a new laptop yesterday.", options: ["buying", "to buy", "buy"], correctAnswer: "to buy", type: "choice" },
  { id: 6, question: "While the students _______, the teacher walked in.", options: ["talked", "were talking", "talking"], correctAnswer: "were talking", type: "gap" },
  { id: 7, question: "Paris is the city _______ the Eiffel Tower is located.", options: ["which", "who", "where"], correctAnswer: "where", type: "gap" },
];
