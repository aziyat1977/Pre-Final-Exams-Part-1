
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
      description: "Happens regularly. Yesterday, Today, Tomorrow.",
      exampleSentence: "I play football every Sunday.",
      exampleRussian: "Я играю в футбол каждое воскресенье.",
      exampleUzbek: "Men har yakshanba futbol o'ynayman.",
      visualType: 'point-now'
    },
    forms: {
      positive: "Subject + V1 (s/es)",
      negative: "Subject + don't/doesn't + V1",
      question: "Do/Does + Subject + V1?"
    },
    pronunciation: {
      text: "I play football every Sunday.",
      tips: "Focus on the 's' sound in 3rd person (He playS). Don't stress the 'do' in questions."
    },
    additionalExamples: [
      "The sun rises in the east.",
      "She works at a hospital.",
      "Water boils at 100 degrees.",
      "We usually take the bus."
    ],
    commonMistakes: [
      {
        wrong: "He play football.",
        right: "He plays football.",
        explanation: "Don't forget the 'S' for He/She/It!"
      },
      {
        wrong: "I am play football every day.",
        right: "I play football every day.",
        explanation: "Don't use 'am/is/are' with the verb in Present Simple unless it's passive."
      },
      {
        wrong: "Does she likes pizza?",
        right: "Does she like pizza?",
        explanation: "In questions with 'Does', the main verb loses the 's'."
      }
    ]
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
    },
    additionalExamples: [
      "Look! It is raining.",
      "She is studying for her exam this week.",
      "Why are you crying?",
      "The bus is coming!"
    ],
    commonMistakes: [
      {
        wrong: "I playing football.",
        right: "I am playing football.",
        explanation: "You must use the helper 'am/is/are'!"
      },
      {
        wrong: "I am knowing him.",
        right: "I know him.",
        explanation: "Stative verbs (know, like, love) generally don't use Continuous form."
      },
      {
        wrong: "Look, he comes.",
        right: "Look, he is coming.",
        explanation: "'Look!' implies it is happening right now."
      }
    ]
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
    },
    additionalExamples: [
      "We went to London last year.",
      "She didn't buy the dress.",
      "Did you see the match?",
      "I was tired yesterday."
    ],
    commonMistakes: [
      {
        wrong: "I didn't went there.",
        right: "I didn't go there.",
        explanation: "After 'didn't', use V1 (base form), not V2."
      },
      {
        wrong: "Did you played?",
        right: "Did you play?",
        explanation: "After 'Did', use V1, not V2/ed."
      },
      {
        wrong: "I was work yesterday.",
        right: "I worked yesterday.",
        explanation: "Use V2 (worked), not 'was + V1'."
      }
    ]
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
    },
    additionalExamples: [
      "At 8 PM, I was reading a book.",
      "They were playing while it was raining.",
      "She was cooking when he arrived.",
      "What were you doing at 9:00?"
    ],
    commonMistakes: [
      {
        wrong: "I sleeping when you called.",
        right: "I was sleeping when you called.",
        explanation: "Don't forget 'was/were'!"
      },
      {
        wrong: "I was sleep.",
        right: "I was sleeping.",
        explanation: "Continuous needs -ing."
      },
      {
        wrong: "When the phone rang, I slept.",
        right: "When the phone rang, I was sleeping.",
        explanation: "If the action was in progress (longer), use Past Continuous."
      }
    ]
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
