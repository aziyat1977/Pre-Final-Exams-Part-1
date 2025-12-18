
import { GrammarRule, QuizQuestion, DetailedTense } from './types';

// ... existing basic data arrays ...
export const TENSES_DATA: GrammarRule[] = [
  { title: 'Present Simple', formula: 'Subj + V1(s)', russian: 'Подлежащее + Гл(s)', uzbek: "Sub'ekt + fe'l" },
  { title: 'Present Continuous', formula: 'Subj + am/is/are + V-ing', russian: 'Подлежащее + Гл прямо сейчас', uzbek: "Sub'ekt + fe'l-yapman/yapsan..." },
  { title: 'Past Simple', formula: 'Subj + V2 (ed)', russian: 'Подлежащее + Гл-прош.вр', uzbek: "Sub'ekt + fe'l-di" },
  { title: 'Past Continuous', formula: 'Subj + was/were + V-ing', russian: 'Подлежащее + был/были + Гл-ing', uzbek: "Sub'ekt + fe'l-ayotgan edi" },
];

export const CONNECTORS_DATA: GrammarRule[] = [
  { title: 'Relative Clauses', formula: 'Noun + who/which/where', russian: 'Сущ. + который / где', uzbek: 'Ot + ...digan / qaysiki' },
  { title: 'Future (Plans)', formula: 'Subj + am/is/are + going to', russian: 'Подлежащее + собираться', uzbek: "Sub'ekt + fe'l-moqchi" },
  { title: 'Verb Patterns', formula: 'Verb + to-V1 / V-ing', russian: 'Гл + инфинитив / герундий', uzbek: "Fe'l + fe'l (ko'rinishi)" },
];

export const QUANTITY_DATA: GrammarRule[] = [
  { title: 'A / An', formula: 'First time / 1 thing', russian: 'Один из / Впервые', uzbek: 'Bitta / Birinchi marta' },
  { title: 'The', formula: 'Specific / Known', russian: 'Тот самый / Известный', uzbek: "O'sha / Ma'lum" },
  { title: 'A few', formula: 'Countable (+)', russian: 'Несколько (счит.)', uzbek: 'Bir nechta (sanalsa)' },
  { title: 'A little', formula: 'Uncountable (+)', russian: 'Немного (несчит.)', uzbek: 'Ozroq (sanalmasa)' },
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

const PS_KAHOOT: QuizQuestion[] = Array.from({ length: 15 }).map((_, i) => ({
    id: i, question: "Placeholder Question", options: ["A", "B", "C"], correctAnswer: "A", type: 'choice'
}));

export const DETAILED_TENSES: DetailedTense[] = [
  {
    id: 'present_simple',
    title: 'Present Simple',
    meaning: {
      english: "1. Facts (The sun is hot). 2. Habits (I smoke). 3. Timetables (The train leaves at 5). 4. Stories/Jokes (So this guy walks into a bar...).",
      russian: "1. Факты. 2. Привычки. 3. Расписания. 4. Заголовки газет и истории.",
      uzbek: "1. Faktlar. 2. Odatlar. 3. Jadvallar. 4. Hikoyalar."
    },
    deepDive: {
        signalWords: ["Always", "Usually", "Often", "Sometimes", "Rarely", "Never", "Every day/week/month", "On Mondays", "Once a week"],
        nuances: [
            { title: "Adverb Position", description: "Signal words go BEFORE the main verb but AFTER 'To Be'.", example: "He ALWAYS eats. He IS always hungry." },
            { title: "Spelling: -es", description: "Add -es if verb ends in -o, -ch, -sh, -ss, -x.", example: "Go -> Goes, Watch -> Watches, Kiss -> Kisses." },
            { title: "Spelling: -ies", description: "Consonant + y = -ies. Vowel + y = -ys.", example: "Study -> Studies. Play -> Plays." }
        ],
        comparisons: [
            { vs: "Present Continuous", rule: "Simple is for PERMANENT states. Continuous is for TEMPORARY actions.", example: "I live in London (Home). I am living in London (Just for a month)." }
        ]
    },
    timeline: {
      description: "A solid block of reality. It was true yesterday, is true today, and will likely be true tomorrow.",
      exampleSentence: "I play football every Sunday.",
      exampleRussian: "Я играю в футбол каждое воскресенье.",
      exampleUzbek: "Men har yakshanba futbol o'ynayman.",
      visualType: 'point-now'
    },
    forms: {
      positive: "He/She/It + V1(s). I/You/We/They + V1.",
      negative: "Don't / Doesn't + V1 (No 's'!)",
      question: "Do / Does + Subject + V1?"
    },
    pronunciation: {
      text: "She watches TV every night.",
      tips: "The '-es' in 'watches' adds an extra syllable /iz/. Watch-iz. But 'Plays' is just /z/."
    },
    additionalExamples: [
      "Water boils at 100°C. (Scientific Fact)",
      "The plane lands at 9:00 PM. (Schedule - Future meaning!)",
      "I promise I won't tell. (Performative Verbs)",
      "He never listens to me. (Habit)"
    ],
    commonMistakes: [
      { wrong: "He play football.", right: "He plays football.", explanation: "3rd Person Singular (He/She/It) needs 'S'." },
      { wrong: "Does she likes?", right: "Does she like?", explanation: "DOES steals the 'S' from the main verb." },
      { wrong: "I am work here.", right: "I work here.", explanation: "Don't mix 'To Be' (am) with Action verbs unless it's -ing." }
    ],
    practice: {
        kahoot: PS_KAHOOT,
        mcqTests: [{ title: "Deep Dive 1", questions: PS_KAHOOT }, { title: "Deep Dive 2", questions: PS_KAHOOT }],
        miniQuizzes: Array(5).fill({ title: "Drill", questions: PS_KAHOOT }),
        dragAndDrop: { title: "Sorting", groups: ["A", "B"], items: [] }
    }
  },
  {
    id: 'present_continuous',
    title: 'Present Continuous',
    meaning: {
      english: "1. Action happening NOW. 2. Temporary situation around now. 3. Future fixed arrangement. 4. Annoying habits with 'always'.",
      russian: "1. Сейчас. 2. В данный период. 3. Точный план. 4. Раздражающие привычки.",
      uzbek: "1. Hozir. 2. Vaqtinchalik. 3. Aniq reja. 4. G'ashga tegadigan odatlar."
    },
    deepDive: {
        signalWords: ["Now", "At the moment", "Right now", "Look!", "Listen!", "Currently", "These days", "Tonight/Tomorrow (Future)"],
        nuances: [
            { title: "Stative Verbs", description: "Verbs of feeling/mind (Love, Hate, Know, Believe, Understand) are NEVER Continuous.", example: "I am knowing him -> I know him." },
            { title: "The 'Annoying' Exception", description: "Use 'Always' + Continuous to complain.", example: "You are ALWAYS leaving your socks on the floor!" },
            { title: "Changing States", description: "Verbs describing change prefer continuous.", example: "The climate is getting warmer." }
        ],
        comparisons: [
            { vs: "Present Simple", rule: "Simple = Routine. Continuous = Deviation from routine.", example: "I usually drink coffee (Simple), but today I am drinking tea (Continuous)." }
        ]
    },
    timeline: {
      description: "A wavy line flowing through the present moment. It started before now and will end after now.",
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
      text: "He's running very fast.",
      tips: "Swallow the 'g' in -ing. 'Runnin', not 'Running-g'. Contract 'He is' to 'He's'."
    },
    additionalExamples: [
      "I'm living with my parents until I find a flat. (Temporary)",
      "We are meeting John at 6. (Arrangement)",
      "Why are you being so rude? (Temporary behavior)"
    ],
    commonMistakes: [
      { wrong: "I loving it.", right: "I love it.", explanation: "Love is a Stative Verb." },
      { wrong: "I waiting for you.", right: "I AM waiting for you.", explanation: "Never drop the helper verb (am/is/are)." }
    ],
    practice: {
        kahoot: PS_KAHOOT,
        mcqTests: [],
        miniQuizzes: [],
        dragAndDrop: { title: "Sort", groups: [], items: [] }
    }
  },
  {
    id: 'past_simple',
    title: 'Past Simple',
    meaning: {
      english: "1. Completed action in the past. 2. Series of completed actions (A story). 3. Duration in the past (now finished).",
      russian: "1. Факт в прошлом. 2. Цепочка действий. 3. Длительность в прошлом (уже нет).",
      uzbek: "1. O'tmishdagi fakt. 2. Ketma-ketlik. 3. O'tmishdagi davomiylik."
    },
    deepDive: {
        signalWords: ["Yesterday", "Last week/month/year", "...ago", "In 1990", "When I was a child"],
        nuances: [
            { title: "Used To", description: "Past Simple can be replaced by 'Used to' for past habits, but NOT for single events.", example: "I smoked / I used to smoke. (Both OK). I bought a car / I used to buy a car (Wrong)." },
            { title: "The 'When' Clause", description: "In a sentence with 'When' + 'Past Continuous', the 'When' part is usually Simple.", example: "When I ARRIVED, he was sleeping." }
        ],
        comparisons: [
            { vs: "Present Perfect", rule: "Past Simple has a FINISHED time word (Yesterday). Present Perfect has UNFINISHED time (Today/Ever).", example: "I saw him yesterday (Simple). I have seen him today (Perfect)." }
        ]
    },
    timeline: {
      description: "An X on the timeline. Disconnected from the present.",
      exampleSentence: "I watched a movie yesterday.",
      exampleRussian: "Я смотрел фильм вчера.",
      exampleUzbek: "Men kecha kino ko'rdim.",
      visualType: 'point-past'
    },
    forms: {
      positive: "V2 (Regular: -ed, Irregular: Memorize!)",
      negative: "Didn't + V1 (Base form!)",
      question: "Did + Subj + V1?"
    },
    pronunciation: {
      text: "Worked, Played, Started.",
      tips: "-ed has 3 sounds: /t/ (Work-t), /d/ (Play-d), /id/ (Start-id). Only use /id/ if verb ends in T or D."
    },
    additionalExamples: [
      "I lived in China for 5 years. (I don't live there now)",
      "He woke up, washed his face, and left. (Sequence)",
      "Did you see the match?"
    ],
    commonMistakes: [
      { wrong: "I didn't went.", right: "I didn't go.", explanation: "DID takes the past power. The main verb stays V1." },
      { wrong: "Where you went?", right: "Where DID you go?", explanation: "Questions need a helper 'Did'." }
    ],
    practice: {
        kahoot: PS_KAHOOT,
        mcqTests: [],
        miniQuizzes: [],
        dragAndDrop: { title: "Sort", groups: [], items: [] }
    }
  },
  {
    id: 'past_continuous',
    title: 'Past Continuous',
    meaning: {
      english: "1. Action in progress at a specific past time. 2. Parallel actions (While). 3. Setting the scene in a story.",
      russian: "1. Процесс в прошлом. 2. Параллельные действия. 3. Описание фона истории.",
      uzbek: "1. Jarayon o'tmishda. 2. Parallel harakatlar. 3. Hikoya foni."
    },
    deepDive: {
        signalWords: ["While", "As", "At 5 PM yesterday", "All day yesterday"],
        nuances: [
            { title: "Interruption Pattern", description: "Long action (Past Cont) interrupted by Short action (Past Simple).", example: "I WAS SHOWERING (Long) when the phone RANG (Short)." },
            { title: "Polite Requests", description: "Used with 'wonder' or 'hope' to sound polite.", example: "I was wondering if you could help me." }
        ],
        comparisons: [
            { vs: "Past Simple", rule: "Continuous focuses on the DURATION/PROCESS. Simple focuses on the COMPLETION/RESULT.", example: "I was reading a book (maybe didn't finish). I read a book (finished it)." }
        ]
    },
    timeline: {
      description: "A long line in the past, often cut by a short vertical line (interruption).",
      exampleSentence: "I was sleeping when the phone rang.",
      exampleRussian: "Я спал, когда зазвонил телефон.",
      exampleUzbek: "Telefon jiringlaganda men uxlayotgan edim.",
      visualType: 'continuous-past'
    },
    forms: {
      positive: "Was/Were + V-ing",
      negative: "Wasn't / Weren't + V-ing",
      question: "Was/Were + Subj + V-ing?"
    },
    pronunciation: {
      text: "They were walking home.",
      tips: "Were is weak /wə/. 'They wə walking'."
    },
    additionalExamples: [
      "The birds were singing and the sun was shining. (Background)",
      "While I was cooking, he was cleaning. (Parallel)",
      "At 8 PM, I was watching TV."
    ],
    commonMistakes: [
      { wrong: "When the accident happened, I drove.", right: "I was driving.", explanation: "Driving was in progress when the accident happened." }
    ],
    practice: {
        kahoot: PS_KAHOOT,
        mcqTests: [],
        miniQuizzes: [],
        dragAndDrop: { title: "Sort", groups: [], items: [] }
    }
  }
];

export const DETAILED_CONNECTORS: DetailedTense[] = [
  {
    id: 'relative_clauses',
    title: 'Relative Clauses',
    meaning: {
      english: "Connecting sentences by describing a noun. Essential vs Non-essential information.",
      russian: "Определительные придаточные предложения.",
      uzbek: "Nisbiy olmoshli gaplar."
    },
    deepDive: {
        signalWords: ["Who", "Which", "That", "Where", "When", "Whose", "Whom"],
        nuances: [
            { title: "Omitting the Pronoun", description: "You can drop Who/Which/That if it is the OBJECT of the verb.", example: "The book (which) I bought. BUT: The man who called me (Cannot drop subject)." },
            { title: "That vs Which", description: "In defining clauses (no commas), you can use THAT instead of Which/Who. In non-defining (commas), NEVER use THAT.", example: "The car that I drive (OK). My car, that is red, is fast (WRONG)." },
            { title: "Prepositions", description: "Formal: The house in which I live. Informal: The house I live in.", example: "" }
        ],
        comparisons: [
            { vs: "Defining vs Non-Defining", rule: "Defining: Tells you WHICH one. Non-Defining: Adds EXTRA info (surrounded by commas).", example: "My brother who lives in NY (I have many brothers). My brother, who lives in NY, is tall (I have one brother)." }
        ]
    },
    timeline: {
      description: "A magical bridge linking two ideas into one seamless concept.",
      exampleSentence: "This is the boy who helps me.",
      exampleRussian: "Это мальчик, который помогает мне.",
      exampleUzbek: "Bu menga yordam beradigan bola.",
      visualType: 'magic-link'
    },
    forms: {
      positive: "Noun + Who/Which/That + Verb/Subject",
      negative: "Same structure",
      question: "Can be embedded: Do you know the man who...?"
    },
    pronunciation: {
      text: "The book that I read.",
      tips: "The 'that' is usually unstressed /ðət/."
    },
    additionalExamples: [
      "The reason why I came is secret.",
      "The person to whom I spoke.",
      "My boss, whose car is new, is happy."
    ],
    commonMistakes: [
        { wrong: "The man which...", right: "The man who...", explanation: "People are not things!" },
        { wrong: "The place which I live.", right: "The place where I live.", explanation: "Use WHERE for locations." }
    ],
    practice: {
        kahoot: PS_KAHOOT,
        mcqTests: [],
        miniQuizzes: [],
        dragAndDrop: { title: "Sort", groups: [], items: [] }
    }
  },
  {
    id: 'future_plans',
    title: 'Future (Going To)',
    meaning: {
      english: "1. Plans decided BEFORE speaking. 2. Predictions based on PRESENT EVIDENCE.",
      russian: "1. Заранее принятые планы. 2. Очевидные предсказания.",
      uzbek: "1. Oldindan rejalashtirilgan ishlar. 2. Dalilga asoslangan bashorat."
    },
    deepDive: {
        signalWords: ["Tomorrow", "Next week", "In a few days", "Look at those clouds!"],
        nuances: [
            { title: "Gonna", description: "In informal speech, 'going to' becomes 'gonna'. Never write this in formal exams.", example: "I'm gonna win." },
            { title: "Present Continuous for Future", description: "Very similar to Going To, but implies a stronger arrangement (booked tickets, time set).", example: "I'm flying (Tickets bought) vs I'm going to fly (Intention)." }
        ],
        comparisons: [
            { vs: "Will", rule: "Will = Instant decision / Prediction without evidence. Going To = Plan / Evidence.", example: "I think I'll go (Guess). I'm going to buy a car (Plan). Look at the clouds, it's going to rain (Evidence)." }
        ]
    },
    timeline: {
      description: "Looking into a crystal ball showing a clear path to the future.",
      exampleSentence: "I am going to fly to Paris.",
      exampleRussian: "Я собираюсь лететь в Париж.",
      exampleUzbek: "Men Parijga uchmoqchiman.",
      visualType: 'crystal-ball'
    },
    forms: {
      positive: "Am/Is/Are + Going to + V1",
      negative: "Am/Is/Are + Not + Going to + V1",
      question: "Are you going to + V1?"
    },
    pronunciation: {
      text: "I am going to do it.",
      tips: "Native speakers say 'I'monna' or 'I'm gonna'."
    },
    additionalExamples: [
      "Look! He's going to fall!",
      "Are you going to eat that?"
    ],
    commonMistakes: [
        { wrong: "I go to visit.", right: "I am going to visit.", explanation: "Don't forget the 'am/is/are'." }
    ],
    practice: {
        kahoot: PS_KAHOOT,
        mcqTests: [],
        miniQuizzes: [],
        dragAndDrop: { title: "Sort", groups: [], items: [] }
    }
  },
  {
    id: 'verb_patterns',
    title: 'Verb Patterns',
    meaning: {
      english: "When two verbs touch, the second one changes form. Gerund (-ing) or Infinitive (to).",
      russian: "Глагол + Глагол.",
      uzbek: "Ikki fe'l birikmasi."
    },
    deepDive: {
        signalWords: ["Enjoy", "Want", "Decide", "Avoid", "Mind", "Hope", "Offer"],
        nuances: [
            { title: "Stop", description: "Stop doing = Quit. Stop to do = Pause to do something else.", example: "I stopped smoking (Quit). I stopped to smoke (Paused walking to smoke)." },
            { title: "Remember/Forget", description: "Remember doing = Memory of past. Remember to do = Task for future.", example: "I remember locking the door (Memory). Remember to lock the door (Task)." }
        ],
        comparisons: [
            { vs: "Prepositions", rule: "After any preposition (in, on, at, of, about), always use -ING.", example: "I am good AT swimming." }
        ]
    },
    timeline: {
      description: "Mixing two potions to create a new meaning.",
      exampleSentence: "I enjoy swimming.",
      exampleRussian: "Я люблю плавать.",
      exampleUzbek: "Men suzishni yoqtiraman.",
      visualType: 'potion-mix'
    },
    forms: {
      positive: "Verb + V-ing OR Verb + to V1",
      negative: "Decided NOT to go. Enjoy NOT working.",
      question: "Do you want to go?"
    },
    pronunciation: {
      text: "I want to go.",
      tips: "Wanna. 'I wanna go'."
    },
    additionalExamples: [
      "I promised to help.",
      "She suggested going to the park.",
      "I look forward to seeing you."
    ],
    commonMistakes: [
        { wrong: "I enjoy to play.", right: "I enjoy playing.", explanation: "Enjoy is always -ING." },
        { wrong: "I want going.", right: "I want to go.", explanation: "Want is always TO." }
    ],
    practice: {
        kahoot: PS_KAHOOT,
        mcqTests: [],
        miniQuizzes: [],
        dragAndDrop: { title: "Sort", groups: [], items: [] }
    }
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ... existing questions ...
  { id: 1, question: "Look! The bus _______. We must run!", options: ["comes", "is coming", "came"], correctAnswer: "is coming", type: 'choice' },
  { id: 2, question: "Valentina Tereshkova _______ the space program in 1961.", options: ["joins", "joined", "has joined"], correctAnswer: "joined", type: 'choice' },
  { id: 3, question: "Is that the man _______ stole your bag?", options: ["which", "who", "where"], correctAnswer: "who", type: 'choice' },
  { id: 4, question: "I don't have _______ time before the exam starts.", options: ["many", "much", "some"], correctAnswer: "much", type: 'choice' },
  { id: 5, question: "We decided _______ a new laptop yesterday.", options: ["buying", "to buy", "buy"], correctAnswer: "to buy", type: 'choice' },
  { id: 6, question: "While the students _______, the teacher walked in.", options: ["talked", "were talking", "talking"], correctAnswer: "were talking", type: 'gap' },
  { id: 7, question: "Paris is the city _______ the Eiffel Tower is located.", options: ["which", "who", "where"], correctAnswer: "where", type: 'gap' },
  { id: 8, question: "Listen! Someone _______ the piano.", options: ["plays", "is playing", "played"], correctAnswer: "is playing", type: 'choice' },
  { id: 9, question: "I _______ to the cinema three times last week.", options: ["go", "went", "have gone"], correctAnswer: "went", type: 'choice' },
  { id: 10, question: "We _______ dinner when the lights went out.", options: ["had", "were having", "have"], correctAnswer: "were having", type: 'choice' },
  { id: 11, question: "The girl _______ mother is a doctor is my friend.", options: ["who", "which", "whose"], correctAnswer: "whose", type: 'choice' },
  { id: 12, question: "How _______ money do you have?", options: ["many", "much", "any"], correctAnswer: "much", type: 'choice' },
  { id: 13, question: "There are only a _______ students in the class.", options: ["few", "little", "much"], correctAnswer: "few", type: 'choice' },
  { id: 14, question: "I enjoy _______ movies.", options: ["watch", "to watch", "watching"], correctAnswer: "watching", type: 'choice' },
  { id: 15, question: "She promised _______ me.", options: ["helping", "to help", "help"], correctAnswer: "to help", type: 'choice' },
  { id: 16, question: "Look at those clouds! It _______ rain.", options: ["will", "is going to", "goes to"], correctAnswer: "is going to", type: 'choice' },
  { id: 17, question: "Water _______ at 100 degrees Celsius.", options: ["boil", "boils", "is boiling"], correctAnswer: "boils", type: 'choice' },
  { id: 18, question: "This is the restaurant _______ we ate last night.", options: ["which", "where", "that"], correctAnswer: "where", type: 'choice' },
  { id: 19, question: "While I _______, my sister was reading.", options: ["cooked", "was cooking", "cook"], correctAnswer: "was cooking", type: 'choice' },
  { id: 20, question: "I have _______ friends in this city.", options: ["no", "any", "none"], correctAnswer: "no", type: 'choice' },
  { id: 21, question: "Where _______ you go yesterday?", options: ["do", "did", "were"], correctAnswer: "did", type: 'choice' },
  { id: 22, question: "I have a _______ water left.", options: ["few", "little", "many"], correctAnswer: "little", type: 'choice' },
  { id: 23, question: "Stop _______! It is very noisy.", options: ["talking", "to talk", "talk"], correctAnswer: "talking", type: 'choice' },
  { id: 24, question: "If I study hard, I _______ pass the exam.", options: ["will", "would", "am"], correctAnswer: "will", type: 'choice' },
  { id: 25, question: "The car _______ I bought is blue.", options: ["who", "which", "where"], correctAnswer: "which", type: 'choice' }
];
