
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
      english: "1. Facts & General Truths. 2. Habits & Routines. 3. Timetables (Trains/Buses).",
      russian: "1. Факты и истины. 2. Привычки. 3. Расписания (поезда/самолеты).",
      uzbek: "1. Faktlar. 2. Odatlar. 3. Jadvallar (Poyezd/Avtobus)."
    },
    timeline: {
      description: "Happens regularly. Past, Present, and Future (Always true).",
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
      "The sun rises in the east. (Fact)",
      "She works at a hospital. (Permanent state)",
      "Water boils at 100 degrees. (Science)",
      "The train leaves at 6:00 PM. (Timetable)",
      "We usually take the bus to school. (Habit)",
      "I don't speak French. (Fact)",
      "Do you live in London? (Question)",
      "He never eats meat. (Habit)"
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
      },
      {
        wrong: "I am go to school by bus.",
        right: "I go to school by bus.",
        explanation: "Never mix 'To Be' (am) with Action Verbs (go) in Simple tenses."
      }
    ]
  },
  {
    id: 'present_continuous',
    title: 'Present Continuous',
    meaning: {
      english: "1. Action NOW. 2. Temporary situation. 3. Future Arrangements (Plans).",
      russian: "1. Сейчас. 2. Временно. 3. Личные планы на будущее.",
      uzbek: "1. Hozir. 2. Vaqtinchalik. 3. Kelajakdagi shaxsiy rejalar."
    },
    timeline: {
      description: "Happening at the exact moment of speaking OR a fixed future plan.",
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
      "Look! It is raining. (Now)",
      "She is studying for her exam this week. (Temporary)",
      "I am meeting Tom tonight. (Future Plan)",
      "Why are you crying? (Now)",
      "The bus is coming! (Visible future)",
      "You are always losing your keys! (Annoying habit)",
      "My English is getting better. (Changing situation)",
      "Are they staying at a hotel? (Temporary)"
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
      },
      {
        wrong: "I am hating this movie.",
        right: "I hate this movie.",
        explanation: "'Hate' is a feeling, so it stays Simple."
      }
    ]
  },
  {
    id: 'past_simple',
    title: 'Past Simple',
    meaning: {
      english: "1. Finished action. 2. Sequence of events (Story). 3. Past habits.",
      russian: "1. Законченное действие. 2. Последовательность событий. 3. Прошлые привычки.",
      uzbek: "1. Tugallangan harakat. 2. Voqealar ketma-ketligi. 3. O'tmishdagi odatlar."
    },
    timeline: {
      description: "Happened at a specific time in the past. It is dead and gone.",
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
      "We went to London last year. (Finished)",
      "She didn't buy the dress. (Negative)",
      "He came in, took off his coat, and sat down. (Sequence)",
      "Did you see the match? (Question)",
      "I was tired yesterday. (State)",
      "Mozart wrote more than 600 pieces of music. (Historical fact)",
      "I saw him 5 minutes ago. (Time signal)",
      "When did you arrive? (Specific time question)"
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
      },
      {
        wrong: "I have seen him yesterday.",
        right: "I saw him yesterday.",
        explanation: "If you say 'Yesterday', you must use Past Simple, not Present Perfect."
      }
    ]
  },
  {
    id: 'past_continuous',
    title: 'Past Continuous',
    meaning: {
      english: "1. Action in progress in past. 2. Interrupted action. 3. Parallel actions.",
      russian: "1. Действие в процессе. 2. Прерванное действие. 3. Параллельные действия.",
      uzbek: "1. Jarayondagi harakat. 2. Bo'lingan harakat. 3. Parallel harakatlar."
    },
    timeline: {
      description: "A long line in the past. Often cut by a short action (Past Simple).",
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
      "At 8 PM, I was reading a book. (Specific time)",
      "They were playing while it was raining. (Parallel)",
      "She was cooking when he arrived. (Interrupted)",
      "What were you doing at 9:00? (Question)",
      "The sun was shining and the birds were singing. (Story background)",
      "I was wondering if you could help me. (Polite)",
      "He was constantly talking in class. (Annoying past habit)",
      "You were not listening to me. (Negative)"
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
      },
      {
        wrong: "I was knowing the answer.",
        right: "I knew the answer.",
        explanation: "Stative verbs (Know) cannot be continuous."
      }
    ]
  }
];

export const DETAILED_CONNECTORS: DetailedTense[] = [
  {
    id: 'relative_clauses',
    title: 'Relative Clauses',
    meaning: {
      english: "Magic links to describe nouns. WHO (People), WHICH (Things), WHERE (Places), WHOSE (Possession).",
      russian: "Связи: WHO (Люди), WHICH (Вещи), WHERE (Места), WHOSE (Чей/Владение).",
      uzbek: "Bog'lamalar: WHO (Odam), WHICH (Narsa), WHERE (Joy), WHOSE (Egalik)."
    },
    timeline: {
      description: "Connecting two worlds: The Object and The Description.",
      exampleSentence: "This is the boy who helps me.",
      exampleRussian: "Это мальчик, который помогает мне.",
      exampleUzbek: "Bu menga yordam beradigan bola.",
      visualType: 'magic-link'
    },
    forms: {
      positive: "Person + WHO / Object + WHICH",
      negative: "Place + WHERE",
      question: "Possession + WHOSE"
    },
    pronunciation: {
      text: "The book which is on the table is mine.",
      tips: "Pause slightly before the 'which' or 'who' to create a clear link."
    },
    additionalExamples: [
      "I met a man who speaks ten languages. (Person)",
      "This is the house where I was born. (Place)",
      "The car which I bought is red. (Thing)",
      "Do you know the girl who is singing? (Person)",
      "That's the man whose dog bit me. (Possession)",
      "I remember the day when we met. (Time)",
      "The student, who studied hard, passed the exam. (Extra info)",
      "Is there a shop where I can buy water? (Place)"
    ],
    commonMistakes: [
      {
        wrong: "The man which called me.",
        right: "The man who called me.",
        explanation: "Man is a person! Use WHO. Which is for things/animals."
      },
      {
        wrong: "The city which I live.",
        right: "The city where I live.",
        explanation: "You live IN a city. It's a place. Use WHERE."
      },
      {
        wrong: "The book what I bought.",
        right: "The book which I bought.",
        explanation: "Never use 'what' as a connector in this way."
      },
      {
        wrong: "The man who's car is red.",
        right: "The man whose car is red.",
        explanation: "Who's = Who is. Whose = Possession."
      }
    ]
  },
  {
    id: 'future_plans',
    title: 'Future (Going To)',
    meaning: {
      english: "1. Future Plans (Decided before). 2. Predictions based on evidence (Clouds -> Rain).",
      russian: "1. Планы (решенные заранее). 2. Предсказания на основе фактов (Тучи -> Дождь).",
      uzbek: "1. Rejalar (oldindan). 2. Dalilga asoslangan bashoratlar (Bulut -> Yomg'ir)."
    },
    timeline: {
      description: "Seeing the future in a crystal ball. It is visible and fixed.",
      exampleSentence: "I am going to fly to Paris tomorrow.",
      exampleRussian: "Я собираюсь лететь в Париж завтра.",
      exampleUzbek: "Men ertaga Parijga uchmoqchiman.",
      visualType: 'crystal-ball'
    },
    forms: {
      positive: "S + am/is/are + going to + V1",
      negative: "S + am/is/are + not + going to + V1",
      question: "Am/Is/Are + S + going to + V1?"
    },
    pronunciation: {
      text: "We are going to buy a new car.",
      tips: "In fast speech, 'going to' often sounds like 'gonna'. But write 'going to'!"
    },
    additionalExamples: [
      "Look at those clouds! It is going to rain. (Evidence)",
      "He is going to study medicine. (Plan)",
      "They are not going to come. (Negative Plan)",
      "What are you going to do? (Question)",
      "Watch out! You are going to fall! (Immediate danger)",
      "I am going to be a pilot when I grow up. (Ambition)",
      "Are you going to eat that? (Intent)",
      "She isn't going to buy it. (Decision made)"
    ],
    commonMistakes: [
      {
        wrong: "I go to visit him tomorrow.",
        right: "I am going to visit him.",
        explanation: "For plans, don't use Present Simple. Use 'be going to'."
      },
      {
        wrong: "I will go to visit him (Plan).",
        right: "I am going to visit him (Plan).",
        explanation: "'Will' is for sudden decisions. 'Going to' is for Plans."
      },
      {
        wrong: "I am going visit.",
        right: "I am going to visit.",
        explanation: "Don't forget the 'to'!"
      },
      {
        wrong: "It goes to rain.",
        right: "It is going to rain.",
        explanation: "Always use am/is/are before going to."
      }
    ]
  },
  {
    id: 'verb_patterns',
    title: 'Verb Patterns',
    meaning: {
      english: "Verbs followed by -ING (Enjoy) or TO-V (Want). Some change meaning (Stop).",
      russian: "Глаголы + ING (Enjoy) или TO-V (Want). Некоторые меняют смысл (Stop).",
      uzbek: "Fe'l + ING (Enjoy) yoki TO-V (Want). Ba'zilari ma'noni o'zgartiradi (Stop)."
    },
    timeline: {
      description: "Alchemy: Mixing the first verb with the correct second form.",
      exampleSentence: "I enjoy swimming but I need to study.",
      exampleRussian: "Мне нравится плавать, но мне нужно учиться.",
      exampleUzbek: "Men suzishni yoqtiraman, lekin o'qishim kerak.",
      visualType: 'potion-mix'
    },
    forms: {
      positive: "Enjoy/Hate/Love + V-ing",
      negative: "Want/Need/Hope + To V1",
      question: "Decide/Plan + To V1"
    },
    pronunciation: {
      text: "I decided to go home.",
      tips: "Don't stress the 'to'. Connect it to the verb. 'Decided-to go'."
    },
    additionalExamples: [
      "She avoids eating sugar. (-ING)",
      "We hope to see you soon. (TO)",
      "He promised to help me. (TO)",
      "Do you fancy going out? (-ING)",
      "I stop to smoke (pause to do it). (Meaning change)",
      "I stop smoking (quit habit). (Meaning change)",
      "I remember locking the door (Memory).",
      "Please remember to lock the door (Task)."
    ],
    commonMistakes: [
      {
        wrong: "I want buy a car.",
        right: "I want to buy a car.",
        explanation: "'Want' is incomplete without 'to'."
      },
      {
        wrong: "I enjoy to read.",
        right: "I enjoy reading.",
        explanation: "'Enjoy' always takes the -ING form."
      },
      {
        wrong: "I hope winning.",
        right: "I hope to win.",
        explanation: "'Hope' looks forward to the future, use 'To'."
      },
      {
        wrong: "I look forward to see you.",
        right: "I look forward to seeing you.",
        explanation: "'Look forward to' is a special phrase that takes -ING."
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
  { title: "State Verbs", text: "I **love** it (Correct) vs I **am loving** it (Wrong)." },
  { title: "Ago vs Before", text: "I met him 2 years **ago** (Past Simple Key Word)." },
  { title: "Stop vs Stop", text: "**Stop to smoke** (pause to do it) vs **Stop smoking** (quit)." },
  { title: "Unless", text: "**Unless** it rains = If it **doesn't** rain." },
  { title: "So vs Such", text: "**So** beautiful (Adj) vs **Such a** beautiful day (Noun)." }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 1, question: "Look! The bus _______. We must run!", options: ["comes", "is coming", "came"], correctAnswer: "is coming", type: "choice" },
  { id: 2, question: "Valentina Tereshkova _______ the space program in 1961.", options: ["joins", "joined", "has joined"], correctAnswer: "joined", type: "choice" },
  { id: 3, question: "Is that the man _______ stole your bag?", options: ["which", "who", "where"], correctAnswer: "who", type: "choice" },
  { id: 4, question: "I don't have _______ time before the exam starts.", options: ["many", "much", "some"], correctAnswer: "much", type: "choice" },
  { id: 5, question: "We decided _______ a new laptop yesterday.", options: ["buying", "to buy", "buy"], correctAnswer: "to buy", type: "choice" },
  { id: 6, question: "While the students _______, the teacher walked in.", options: ["talked", "were talking", "talking"], correctAnswer: "were talking", type: "gap" },
  { id: 7, question: "Paris is the city _______ the Eiffel Tower is located.", options: ["which", "who", "where"], correctAnswer: "where", type: "gap" },
  { id: 8, question: "Listen! Someone _______ the piano.", options: ["plays", "is playing", "played"], correctAnswer: "is playing", type: "choice" },
  { id: 9, question: "I _______ to the cinema three times last week.", options: ["go", "went", "have gone"], correctAnswer: "went", type: "choice" },
  { id: 10, question: "We _______ dinner when the lights went out.", options: ["had", "were having", "have"], correctAnswer: "were having", type: "choice" },
  { id: 11, question: "The girl _______ mother is a doctor is my friend.", options: ["who", "which", "whose"], correctAnswer: "whose", type: "choice" },
  { id: 12, question: "How _______ money do you have?", options: ["many", "much", "any"], correctAnswer: "much", type: "choice" },
  { id: 13, question: "There are only a _______ students in the class.", options: ["few", "little", "much"], correctAnswer: "few", type: "choice" },
  { id: 14, question: "I enjoy _______ movies.", options: ["watch", "to watch", "watching"], correctAnswer: "watching", type: "choice" },
  { id: 15, question: "She promised _______ me.", options: ["helping", "to help", "help"], correctAnswer: "to help", type: "choice" },
  { id: 16, question: "Look at those clouds! It _______ rain.", options: ["will", "is going to", "goes to"], correctAnswer: "is going to", type: "choice" },
  { id: 17, question: "Water _______ at 100 degrees Celsius.", options: ["boil", "boils", "is boiling"], correctAnswer: "boils", type: "choice" },
  { id: 18, question: "This is the restaurant _______ we ate last night.", options: ["which", "where", "that"], correctAnswer: "where", type: "choice" },
  { id: 19, question: "While I _______, my sister was reading.", options: ["cooked", "was cooking", "cook"], correctAnswer: "was cooking", type: "choice" },
  { id: 20, question: "I have _______ friends in this city.", options: ["no", "any", "none"], correctAnswer: "no", type: "choice" },
  { id: 21, question: "Where _______ you go yesterday?", options: ["do", "did", "were"], correctAnswer: "did", type: "choice" },
  { id: 22, question: "I have a _______ water left.", options: ["few", "little", "many"], correctAnswer: "little", type: "choice" },
  { id: 23, question: "Stop _______! It is very noisy.", options: ["talking", "to talk", "talk"], correctAnswer: "talking", type: "choice" },
  { id: 24, question: "If I study hard, I _______ pass the exam.", options: ["will", "would", "am"], correctAnswer: "will", type: "choice" },
  { id: 25, question: "The car _______ I bought is blue.", options: ["who", "which", "where"], correctAnswer: "which", type: "choice" }
];
