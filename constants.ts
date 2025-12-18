
import { GrammarRule, QuizQuestion, DetailedTense, IntermediateLesson } from './types';

// ... existing constants (TENSES_DATA, CONNECTORS_DATA, etc.) ...
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

// --- STATIC QUESTION BANKS FOR MISSIONS ---

const PS_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: "My internet connection usually _______ very fast.", options: ["work", "works", "is working"], correctAnswer: "works", type: 'choice' },
    { id: 2, question: "Naruto never _______ up, even when the fight is hard.", options: ["give", "gives", "giving"], correctAnswer: "gives", type: 'choice' },
    { id: 3, question: "How often _______ you check TikTok?", options: ["do", "does", "are"], correctAnswer: "do", type: 'choice' },
    { id: 4, question: "Billie Eilish _______ sad songs most of the time.", options: ["sing", "sings", "is singing"], correctAnswer: "sings", type: 'choice' },
    { id: 5, question: "Pro gamers _______ spend hours training every day.", options: ["don't", "doesn't", "aren't"], correctAnswer: "don't", type: 'choice' },
    { id: 6, question: "This server _______ too much lag! I hate it.", options: ["have", "has", "is having"], correctAnswer: "has", type: 'choice' },
    { id: 7, question: "My squad _______ usually land at Tilted Towers.", options: ["don't", "doesn't", "isn't"], correctAnswer: "doesn't", type: 'choice' },
    { id: 8, question: "The sun _______ in the east (It's a fact, bro).", options: ["rise", "rises", "is rising"], correctAnswer: "rises", type: 'choice' },
    { id: 9, question: "_______ your avatar look cool?", options: ["Do", "Does", "Is"], correctAnswer: "Does", type: 'choice' },
    { id: 10, question: "He _______ understand the rules of the game.", options: ["don't", "doesn't", "not"], correctAnswer: "doesn't", type: 'choice' }
];

const PC_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: "Quiet! The imposter _______ the vents right now!", options: ["enters", "is entering", "entered"], correctAnswer: "is entering", type: 'choice' },
    { id: 2, question: "Why _______ you _______ AFK? Move!", options: ["do / stand", "are / standing", "did / stand"], correctAnswer: "are / standing", type: 'choice' },
    { id: 3, question: "Look! BTS _______ live on stage!", options: ["perform", "are performing", "performed"], correctAnswer: "are performing", type: 'choice' },
    { id: 4, question: "I can't talk, I _______ a ranked match.", options: ["play", "am playing", "played"], correctAnswer: "am playing", type: 'choice' },
    { id: 5, question: "My download speed _______ slower and slower.", options: ["get", "is getting", "gets"], correctAnswer: "is getting", type: 'choice' },
    { id: 6, question: "_______ they _______ a new update today?", options: ["Do / release", "Are / releasing", "Did / release"], correctAnswer: "Are / releasing", type: 'choice' },
    { id: 7, question: "She _______ always _______ selfies! It's so annoying.", options: ["is / taking", "does / take", "has / taken"], correctAnswer: "is / taking", type: 'choice' },
    { id: 8, question: "Listen! The zombies _______ closer.", options: ["come", "are coming", "came"], correctAnswer: "are coming", type: 'choice' },
    { id: 9, question: "We _______ at my friend's house until the server is fixed.", options: ["stay", "are staying", "stayed"], correctAnswer: "are staying", type: 'choice' },
    { id: 10, question: "I _______ it! (McDonald's slogan is grammatically wrong, remember?)", options: ["am loving", "love", "loved"], correctAnswer: "love", type: 'choice' }
];

const PAST_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: "GTA V _______ out in 2013.", options: ["come", "came", "coming"], correctAnswer: "came", type: 'choice' },
    { id: 2, question: "I _______ the battle pass yesterday.", options: ["buy", "bought", "buyed"], correctAnswer: "bought", type: 'choice' },
    { id: 3, question: "Where _______ you find that diamond sword?", options: ["did", "do", "were"], correctAnswer: "did", type: 'choice' },
    { id: 4, question: "The creeper _______ up my house last night.", options: ["blow", "blew", "blown"], correctAnswer: "blew", type: 'choice' },
    { id: 5, question: "We _______ win the tournament last season.", options: ["didn't", "don't", "weren't"], correctAnswer: "didn't", type: 'choice' },
    { id: 6, question: "She _______ a picture on Instagram 5 minutes ago.", options: ["post", "posted", "has posted"], correctAnswer: "posted", type: 'choice' },
    { id: 7, question: "I _______ see him at the party.", options: ["didn't", "wasn't", "not"], correctAnswer: "didn't", type: 'choice' },
    { id: 8, question: "When _______ the first iPhone release?", options: ["did", "was", "does"], correctAnswer: "did", type: 'choice' },
    { id: 9, question: "He _______ very angry when he lost the game.", options: ["did", "was", "were"], correctAnswer: "was", type: 'choice' },
    { id: 10, question: "I _______ to London last summer.", options: ["fly", "flew", "flown"], correctAnswer: "flew", type: 'choice' }
];

const PAST_CONT_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: "I _______ streaming when the power went out.", options: ["am", "was", "were"], correctAnswer: "was", type: 'choice' },
    { id: 2, question: "While we _______ B site, the bomb exploded.", options: ["rushed", "were rushing", "are rushing"], correctAnswer: "were rushing", type: 'choice' },
    { id: 3, question: "He _______ listening when the teacher asked the question.", options: ["isn't", "wasn't", "didn't"], correctAnswer: "wasn't", type: 'choice' },
    { id: 4, question: "What _______ you doing at 3 AM last night?", options: ["did", "were", "was"], correctAnswer: "were", type: 'choice' },
    { id: 5, question: "The sun was shining and the birds _______ singing.", options: ["are", "were", "did"], correctAnswer: "were", type: 'choice' },
    { id: 6, question: "I _______ sleeping when you called me.", options: ["was", "were", "am"], correctAnswer: "was", type: 'choice' },
    { id: 7, question: "While the game _______ loading, I checked my phone.", options: ["is", "was", "did"], correctAnswer: "was", type: 'choice' },
    { id: 8, question: "You _______ driving too fast when the police stopped you.", options: ["was", "were", "are"], correctAnswer: "were", type: 'choice' },
    { id: 9, question: "They _______ fighting the boss when the server crashed.", options: ["was", "were", "are"], correctAnswer: "were", type: 'choice' },
    { id: 10, question: "I _______ cheating! It was just skill.", options: ["wasn't", "didn't", "not"], correctAnswer: "wasn't", type: 'choice' }
];

const CONNECTORS_QUESTIONS: QuizQuestion[] = [
    { id: 1, question: "That is the streamer _______ has 10 million subs.", options: ["which", "who", "where"], correctAnswer: "who", type: 'choice' },
    { id: 2, question: "This is the map _______ we always lose.", options: ["which", "who", "where"], correctAnswer: "where", type: 'choice' },
    { id: 3, question: "The skin _______ I bought cost 5000 V-Bucks.", options: ["who", "which", "where"], correctAnswer: "which", type: 'choice' },
    { id: 4, question: "I _______ to buy a new PC next week.", options: ["will", "am going", "go"], correctAnswer: "am going", type: 'choice' },
    { id: 5, question: "Look at those graphics! It _______ be an amazing game.", options: ["is going to", "will", "goes to"], correctAnswer: "is going to", type: 'choice' },
    { id: 6, question: "I enjoy _______ horror games at night.", options: ["play", "to play", "playing"], correctAnswer: "playing", type: 'choice' },
    { id: 7, question: "I decided _______ my username.", options: ["change", "to change", "changing"], correctAnswer: "to change", type: 'choice' },
    { id: 8, question: "Do you mind _______ the door?", options: ["close", "to close", "closing"], correctAnswer: "closing", type: 'choice' },
    { id: 9, question: "I stopped _______ to check the map (paused).", options: ["running", "to run", "run"], correctAnswer: "to run", type: 'choice' },
    { id: 10, question: "I stopped _______ Fortnite (quit forever).", options: ["play", "to play", "playing"], correctAnswer: "playing", type: 'choice' }
];

export const DETAILED_TENSES: DetailedTense[] = [
  // ... existing detailed tenses ...
  {
    id: 'present_simple',
    title: 'Present Simple',
    meaning: {
      english: "1. Facts (The sun is hot). 2. Habits (I stream daily). 3. Timetables (The update drops at 5).",
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
        kahoot: PS_QUESTIONS,
        mcqTests: [{ title: "Deep Dive 1", questions: PS_QUESTIONS.slice(0, 5) }, { title: "Deep Dive 2", questions: PS_QUESTIONS.slice(5, 10) }],
        miniQuizzes: Array(3).fill({ title: "Drill", questions: PS_QUESTIONS.slice(0, 5) }),
        dragAndDrop: { title: "Sorting", groups: ["A", "B"], items: [] }
    }
  },
  // ... other tenses ...
  {
    id: 'present_continuous',
    title: 'Present Continuous',
    meaning: {
      english: "1. Action happening NOW. 2. Temporary situation. 3. Future fixed plans. 4. Annoying habits.",
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
        kahoot: PC_QUESTIONS,
        mcqTests: [{ title: "Deep Dive 1", questions: PC_QUESTIONS.slice(0, 5) }],
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
      uzbek: "1. Факт в прошлом. 2. Цепочка действий. 3. Длительность в прошлом (уже нет)."
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
        kahoot: PAST_QUESTIONS,
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
        kahoot: PAST_CONT_QUESTIONS,
        mcqTests: [],
        miniQuizzes: [],
        dragAndDrop: { title: "Sort", groups: [], items: [] }
    }
  }
];

export const DETAILED_CONNECTORS: DetailedTense[] = [
  // ... existing detailed connectors ...
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
        kahoot: CONNECTORS_QUESTIONS,
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
        kahoot: CONNECTORS_QUESTIONS,
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
        kahoot: CONNECTORS_QUESTIONS,
        mcqTests: [],
        miniQuizzes: [],
        dragAndDrop: { title: "Sort", groups: [], items: [] }
    }
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ... existing mixed questions ...
  { id: 1, question: "Look! The zombie _______ towards us! Shoot!", options: ["comes", "is coming", "came"], correctAnswer: "is coming", type: 'choice' },
  { id: 2, question: "Billie Eilish _______ a new album last year.", options: ["drops", "dropped", "has dropped"], correctAnswer: "dropped", type: 'choice' },
  { id: 3, question: "Is that the gamer _______ won the championship?", options: ["which", "who", "where"], correctAnswer: "who", type: 'choice' },
  { id: 4, question: "I don't have _______ money for the new skin.", options: ["many", "much", "some"], correctAnswer: "much", type: 'choice' },
  { id: 5, question: "I decided _______ the stream early.", options: ["ending", "to end", "end"], correctAnswer: "to end", type: 'choice' },
  { id: 6, question: "While we _______ B Site, they flanked us.", options: ["rushed", "were rushing", "rushing"], correctAnswer: "were rushing", type: 'gap' },
  { id: 7, question: "Los Santos is the city _______ I stole my first car.", options: ["which", "who", "where"], correctAnswer: "where", type: 'gap' },
  { id: 8, question: "Shh! The teacher _______ right now.", options: ["looks", "is looking", "looked"], correctAnswer: "is looking", type: 'choice' },
  { id: 9, question: "I _______ to Japan in 2019.", options: ["go", "went", "have gone"], correctAnswer: "went", type: 'choice' },
  { id: 10, question: "We _______ ranked when the Wi-Fi crashed.", options: ["played", "were playing", "play"], correctAnswer: "were playing", type: 'choice' },
  { id: 11, question: "The YouTuber _______ channel was deleted is crying.", options: ["who", "which", "whose"], correctAnswer: "whose", type: 'choice' },
  { id: 12, question: "How _______ followers do you have?", options: ["many", "much", "any"], correctAnswer: "many", type: 'choice' },
  { id: 13, question: "I have a _______ V-Bucks left.", options: ["few", "little", "much"], correctAnswer: "few", type: 'choice' },
  { id: 14, question: "I enjoy _______ anime on weekends.", options: ["watch", "to watch", "watching"], correctAnswer: "watching", type: 'choice' },
  { id: 15, question: "He promised _______ me with the raid.", options: ["helping", "to help", "help"], correctAnswer: "to help", type: 'choice' },
  { id: 16, question: "Look at his HP! He _______ die!", options: ["will", "is going to", "goes to"], correctAnswer: "is going to", type: 'choice' },
  { id: 17, question: "Water _______ at 100 degrees (Minecraft physics?).", options: ["boil", "boils", "is boiling"], correctAnswer: "boils", type: 'choice' },
  { id: 18, question: "This is the server _______ we met.", options: ["which", "where", "that"], correctAnswer: "where", type: 'choice' },
  { id: 19, question: "While I _______ AFK, they killed me.", options: ["was", "were", "am"], correctAnswer: "was", type: 'choice' },
  { id: 20, question: "I have _______ time for noobs.", options: ["no", "any", "none"], correctAnswer: "no", type: 'choice' },
  { id: 21, question: "Where _______ you buy that expensive keyboard?", options: ["do", "did", "were"], correctAnswer: "did", type: 'choice' },
  { id: 22, question: "I have a _______ information about the update.", options: ["few", "little", "many"], correctAnswer: "little", type: 'choice' },
  { id: 23, question: "Stop _______! The boss is coming.", options: ["talking", "to talk", "talk"], correctAnswer: "talking", type: 'choice' },
  { id: 24, question: "If I grind hard, I _______ reach Global Elite.", options: ["will", "would", "am"], correctAnswer: "will", type: 'choice' },
  { id: 25, question: "The car _______ I stole is fast.", options: ["who", "which", "where"], correctAnswer: "which", type: 'choice' }
];

// --- INTERMEDIATE LESSONS DATA ---

export const INTERMEDIATE_LESSONS: IntermediateLesson[] = [
  {
    id: '1.1',
    title: 'Present Tenses (Simple, Continuous, Perfect)',
    topicDescription: 'Distinguishing between habits, temporary actions, and life experiences.',
    mfp: {
      concepts: [
        { title: 'Present Simple (The "Always" Box)', description: 'Facts, habits, permanent situations. Solid, unchanging.', visual: '🪨' },
        { title: 'Present Continuous (The "Now" Wave)', description: 'Temporary, happening around now, changing trends.', visual: '🌊' },
        { title: 'Present Perfect (The "Bridge")', description: 'Connecting past to now. Life experience or recent result.', visual: '🌉' }
      ],
      formulas: [
        { title: 'Present Simple', eng: 'Subject + V1 (s/es)', rus: 'Обычное действие / Факт', uzb: "Ega + fe'l + -adi. (Doimiy ish-harakat)" },
        { title: 'Present Continuous', eng: 'Subject + am/is/are + Ving', rus: 'Действие сейчас / Временное', uzb: "Ega + (hozir) + fe'l + -yap + (shaxs). (Ayni damda)" },
        { title: 'Present Perfect', eng: 'Subject + have/has + V3', rus: 'Результат уже есть / Опыт', uzb: "Ega + fe'l + -gan. (Natija yoki tajriba)" }
      ],
      examples: [
        { type: 'Fact', text: "Everyone **needs** friends." },
        { type: 'Trend', text: "Facebook **is changing** the way we look at friendship." },
        { type: 'Experience', text: "I **have lived** here all my life." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "The Earth's temperature is increasing. Why Continuous?", options: ["It happens daily", "It is a changing trend"], correctAnswer: "It is a changing trend", type: 'choice' },
        { id: 2, question: "I have lived here all my life. Can we say 'I am living here'?", options: ["Yes", "No, implies duration"], correctAnswer: "No, implies duration", type: 'choice' },
        { id: 3, question: "He doesn't like his Facebook friends. Why not 'isn't liking'?", options: ["He hates them", "Like is a state verb"], correctAnswer: "Like is a state verb", type: 'choice' },
        { id: 4, question: "We generally have dinner together. 'Generally' signals:", options: ["Present Simple", "Present Continuous"], correctAnswer: "Present Simple", type: 'choice' },
        { id: 5, question: "Translate: 'Do'stlarim ko'payib bormoqda'", options: ["My friends increase", "My friends are increasing"], correctAnswer: "My friends are increasing", type: 'choice' }
      ],
      gapFill: [
        { question: "There _______ (be) over one billion Facebook users.", answer: "are" },
        { question: "The word 'friend' _______ (become) a verb recently.", answer: "has become" },
        { question: "People who we _______ (know) online.", answer: "know" },
        { question: "More and more people _______ (connect) with old friends.", answer: "are connecting" },
        { question: "Is Marco here? No, he _______ (already / left).", answer: "has already left" }
      ],
      dragDrop: {
        title: "Sort by Tense Use",
        groups: ["Permanent/Fact", "Temporary/Now", "Result/Experience"],
        items: [
          { id: '1', content: "I work in Berlin", group: "Permanent/Fact" },
          { id: '2', content: "Earth orbits Sun", group: "Permanent/Fact" },
          { id: '3', content: "I am working in Berlin", group: "Temporary/Now" },
          { id: '4', content: "Jameela is having a lesson", group: "Temporary/Now" },
          { id: '5', content: "I haven't emailed him", group: "Result/Experience" },
          { id: '6', content: "Have you seen Jake?", group: "Result/Experience" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "I _____ lived here for years", answer: "HAVE" },
        { id: 2, direction: 'down', number: 2, clue: "State verbs are rarely used in this form", answer: "CONTINUOUS" },
        { id: 3, direction: 'across', number: 3, clue: "He _____ like fish", answer: "DOESNT" },
        { id: 4, direction: 'down', number: 4, clue: "-ing form of 'begin'", answer: "BEGINNING" }
      ],
      snake: [
        { prompt: "Make continuous: MAKE", correct: "Making", options: ["Makeing", "Making", "Maiking"] },
        { prompt: "Make continuous: BEGIN", correct: "Beginning", options: ["Begining", "Beginning", "Begginning"] },
        { prompt: "Make continuous: LIE", correct: "Lying", options: ["Lieing", "Lying", "Liing"] }
      ]
    }
  },
  {
    id: '1.2',
    title: 'State Verbs',
    topicDescription: 'Verbs describing thoughts, feelings, possession, and senses (Non-Action).',
    mfp: {
      concepts: [
        { title: 'Thoughts', description: 'Think, know, believe, agree. 🧠', visual: '🧠' },
        { title: 'Feelings', description: 'Like, love, hate, want. ❤️', visual: '❤️' },
        { title: 'Possession', description: 'Have, own, belong. 🎒', visual: '🎒' },
        { title: 'Senses', description: 'Smell, taste, sound, look. 👃', visual: '👃' }
      ],
      formulas: [
        { title: 'The Rule', eng: 'NO continuous form (-ing)', rus: 'Я хочу (Нельзя: Я есть хотящий)', uzb: 'Men xohlayman (NOT: Men xohlayapman)' }
      ],
      examples: [
        { type: 'Possession', text: "Who **does** this bag **belong to**?" },
        { type: 'Senses', text: "The soup **tastes** delicious." },
        { type: 'Mental', text: "Do you **believe** me? I **don't agree**." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "I am understanding you.", options: ["Correct", "Incorrect"], correctAnswer: "Incorrect", type: 'choice' },
        { id: 2, question: "I'm loving this pizza!", options: ["Formal Grammar", "Informal Idiom"], correctAnswer: "Informal Idiom", type: 'choice' },
        { id: 3, question: "She has a car.", options: ["State (Possession)", "Action"], correctAnswer: "State (Possession)", type: 'choice' },
        { id: 4, question: "She is having lunch.", options: ["State", "Action (Eating)"], correctAnswer: "Action (Eating)", type: 'choice' },
        { id: 5, question: "This soup is tasting salty.", options: ["Correct", "Incorrect"], correctAnswer: "Incorrect", type: 'choice' }
      ],
      gapFill: [
        { question: "I _______ (think) it's a great idea.", answer: "think" },
        { question: "A: What are you doing? B: I _______ (think) about the file.", answer: "'m thinking" },
        { question: "That _______ (sound) like a good idea.", answer: "sounds" },
        { question: "I _______ (try) to download photos now.", answer: "'m trying" },
        { question: "The umbrella _______ (belong) to Annette.", answer: "belongs" }
      ],
      dragDrop: {
        title: "Categorize Verbs",
        groups: ["State Only", "Can be Action"],
        items: [
          { id: '1', content: "Believe", group: "State Only" },
          { id: '2', content: "Belong", group: "State Only" },
          { id: '3', content: "Know", group: "State Only" },
          { id: '4', content: "Eat", group: "Can be Action" },
          { id: '5', content: "Run", group: "Can be Action" },
          { id: '6', content: "Think", group: "Can be Action" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "I _____ you are right", answer: "AGREE" },
        { id: 2, direction: 'down', number: 2, clue: "Do you _____ any money?", answer: "HAVE" },
        { id: 3, direction: 'across', number: 3, clue: "This flower _____ nice", answer: "SMELLS" },
        { id: 4, direction: 'down', number: 4, clue: "Opposite of 'love'", answer: "HATE" }
      ],
      snake: [
        { prompt: "Select the STATE Verb", correct: "Know", options: ["Run", "Jump", "Know"] },
        { prompt: "Select the ACTION Verb", correct: "Hit", options: ["Belong", "Taste", "Hit"] },
        { prompt: "Select the STATE Verb", correct: "Own", options: ["Cook", "Own", "Play"] }
      ]
    }
  },
  {
    id: '2.1',
    title: 'Narrative Forms (Past Tenses)',
    topicDescription: 'Telling a story. Sequencing events vs. setting the scene.',
    mfp: {
      concepts: [
        { title: 'Past Simple (Main Events)', description: 'The plot points. A then B then C.', visual: '🎞️' },
        { title: 'Past Continuous (Background)', description: 'What was happening *around* the main event.', visual: '🎭' },
        { title: 'Past Perfect (The Flashback)', description: 'Happened *before* the story started.', visual: '⏪' }
      ],
      formulas: [
        { title: 'Past Simple', eng: 'Subject + V2 (ed/irregular)', rus: 'Что сделал? (Завершил)', uzb: '...-di' },
        { title: 'Past Continuous', eng: 'Subject + was/were + Ving', rus: 'Что делал? (Процесс)', uzb: '...-ayotgan edi' },
        { title: 'Past Perfect', eng: 'Subject + had + V3', rus: 'Сделал (до другого действия)', uzb: '...-gan edi' }
      ],
      examples: [
        { type: 'Action', text: "I **arrived** at midnight." },
        { type: 'Background', text: "We **were walking** along the beach." },
        { type: 'Earlier Event', text: "I **had stayed** in the same hotel twice before." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "When I arrived, they had left. Did you see them?", options: ["Yes", "No"], correctAnswer: "No", type: 'choice' },
        { id: 2, question: "When I arrived, they left. Did you see them?", options: ["Yes", "No"], correctAnswer: "Yes", type: 'choice' },
        { id: 3, question: "I was reading when the phone rang. Which is longer?", options: ["Reading", "Ringing"], correctAnswer: "Reading", type: 'choice' },
        { id: 4, question: "We didn't realize how dangerous it ____.", options: ["was", "is"], correctAnswer: "was", type: 'choice' },
        { id: 5, question: "Which tense sets the atmosphere?", options: ["Past Simple", "Past Continuous"], correctAnswer: "Past Continuous", type: 'choice' }
      ],
      gapFill: [
        { question: "We _______ (walk) 2km before we realized.", answer: "had walked" },
        { question: "I _______ (go) for a walk when we finished.", answer: "went" },
        { question: "The sun _______ (shine) and people sat on grass.", answer: "was shining" },
        { question: "I locked the door after I _______ (check) everyone left.", answer: "had checked" },
        { question: "Sam didn't recognize me although we _______ (meet) before.", answer: "had met" }
      ],
      dragDrop: {
        title: "Match Function",
        groups: ["Background", "Main Event", "Flashback"],
        items: [
          { id: '1', content: "It was raining hard", group: "Background" },
          { id: '2', content: "While I was sleeping", group: "Background" },
          { id: '3', content: "The bomb exploded", group: "Main Event" },
          { id: '4', content: "Then I called police", group: "Main Event" },
          { id: '5', content: "He had forgotten passport", group: "Flashback" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "I had _____ (eat)", answer: "EATEN" },
        { id: 2, direction: 'down', number: 2, clue: "Past Perfect Helper", answer: "HAD" },
        { id: 3, direction: 'across', number: 3, clue: "Continuous of 'sit'", answer: "SITTING" },
        { id: 4, direction: 'down', number: 4, clue: "Past of 'catch'", answer: "CAUGHT" }
      ],
      snake: [
        { prompt: "Past Perfect of GO", correct: "Had gone", options: ["Had went", "Had gone", "Has gone"] },
        { prompt: "Past Perfect of SEE", correct: "Had seen", options: ["Had saw", "Had seen", "Had seed"] },
        { prompt: "Past Perfect of EAT", correct: "Had eaten", options: ["Had ate", "Had eaten", "Have eaten"] }
      ]
    }
  },
  {
    id: '2.2',
    title: 'Time Linkers',
    topicDescription: 'Connecting events in a story (Timing and Sequence).',
    mfp: {
      concepts: [
        { title: 'As soon as', description: 'Immediate reaction. [Event A] -> ⚡ -> [Event B]', visual: '⚡' },
        { title: 'While', description: 'Two things happening at the same time. Parallel lines.', visual: '⏸️' },
        { title: 'Meanwhile', description: 'Similar to \'while\', but connects two *separate sentences*.', visual: '🔀' }
      ],
      formulas: [
        { title: 'During vs While', eng: 'During + Noun / While + Subj + Verb', rus: 'Во время (чего-то) / В то время как', uzb: '...davomida / ...-ayotganda' },
        { title: 'By the time', eng: 'By the time + [Action A], [Action B had happened]', rus: 'К тому времени, как...', uzb: '...-guncha (bo\'lgan vaqtda)' }
      ],
      examples: [
        { type: 'Immediate', text: "They realized it was false **as soon as** they found him." },
        { type: 'Parallel', text: "We were waiting. **Meanwhile**, she was on the bus." },
        { type: 'Noun Phrase', text: "I fell asleep **during the meeting**." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "I fell asleep _____ the film.", options: ["while", "during"], correctAnswer: "during", type: 'choice' },
        { id: 2, question: "I fell asleep _____ I was watching.", options: ["while", "during"], correctAnswer: "while", type: 'choice' },
        { id: 3, question: "By the time we arrived, the party _____.", options: ["finished", "had finished"], correctAnswer: "had finished", type: 'choice' },
        { id: 4, question: "We lived in Warsaw _____ I was twelve.", options: ["until", "by the time"], correctAnswer: "until", type: 'choice' },
        { id: 5, question: "Uzbek for 'Meanwhile'", options: ["Shu vaqtda", "Keyin"], correctAnswer: "Shu vaqtda", type: 'choice' }
      ],
      gapFill: [
        { question: "I found old papers _______ (while) tidying up.", answer: "while" },
        { question: "_______ (During) the 1950s, pasta was rare.", answer: "During" },
        { question: "_______ (As soon as) it finished, viewers called.", answer: "As soon as" },
        { question: "We called police. _______ (Meanwhile), thieves escaped.", answer: "Meanwhile" },
        { question: "Luke and I met _______ (while) working.", answer: "while" }
      ],
      dragDrop: {
        title: "Connect the Linker",
        groups: ["Noun Follows", "Clause Follows"],
        items: [
          { id: '1', content: "During", group: "Noun Follows" },
          { id: '2', content: "While", group: "Clause Follows" },
          { id: '3', content: "As soon as", group: "Clause Follows" },
          { id: '4', content: "Until", group: "Clause Follows" },
          { id: '5', content: "During the war", group: "Noun Follows" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "Happening at same time", answer: "WHILE" },
        { id: 2, direction: 'down', number: 2, clue: "Up to point in time", answer: "UNTIL" },
        { id: 3, direction: 'across', number: 3, clue: "In the time of (noun)", answer: "DURING" },
        { id: 4, direction: 'down', number: 4, clue: "Immediately after", answer: "ASSOONAS" }
      ],
      snake: [
        { prompt: "Followed by a NOUN", correct: "During", options: ["While", "During", "When"] },
        { prompt: "Followed by SUBJ + VERB", correct: "While", options: ["During", "While", "In"] },
        { prompt: "Means 'Before'", correct: "By the time", options: ["After", "By the time", "Until"] }
      ]
    }
  },
  {
    id: '3.1',
    title: 'Ability (can, could, be able to)',
    topicDescription: 'Distinguishing between "General Ability" and "Specific Achievement" in the past.',
    mfp: {
      concepts: [
        { title: 'General Past Ability (Could)', description: 'Something you knew how to do anytime.', visual: '🎹' },
        { title: 'Specific Past Achievement (Was able to)', description: 'Doing something difficult once. TRAP: No "could" here.', visual: '🏔️' },
        { title: 'Succeed in', description: 'Formal way to say "managed to". Followed by -ing.', visual: '📜' }
      ],
      formulas: [
        { title: 'Specific Past Achievement', eng: 'Subject + was/were able to + V1', rus: 'Смог / Справился', uzb: '... uddaladi / ...-a oldi' },
        { title: 'Manage vs Succeed', eng: 'managed to + V1 / succeeded in + Ving', rus: 'Справился с (чем-то)', uzb: '...-ishni epladi' }
      ],
      examples: [
        { type: 'General', text: "I **could ride** a bike by the age of six." },
        { type: 'Specific', text: "We **were able to get** tickets." },
        { type: 'Succeed In', text: "They didn't **succeed in winning** the prize." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "The fire was strong, but everyone _____ escape.", options: ["could", "was able to"], correctAnswer: "was able to", type: 'choice' },
        { id: 2, question: "I _____ swim when I was 5.", options: ["managed to", "could"], correctAnswer: "could", type: 'choice' },
        { id: 3, question: "He succeeded _____ the exam.", options: ["to pass", "in passing"], correctAnswer: "in passing", type: 'choice' },
        { id: 4, question: "Manage to means:", options: ["It was easy", "It was difficult but done"], correctAnswer: "It was difficult but done", type: 'choice' },
        { id: 5, question: "Which sentence is WRONG?", options: ["I managed to find keys", "I could find my keys yesterday"], correctAnswer: "I could find my keys yesterday", type: 'choice' }
      ],
      gapFill: [
        { question: "I **__________** (could) walk when I was nine months old.", answer: "could" },
        { question: "I **__________** (couldn't) meet you tomorrow.", answer: "won't be able to" },
        { question: "Some people can **__________** (succeed in) learn languages easily.", answer: "succeed in learning" },
        { question: "Did they **__________** (manage to) reach the top?", answer: "manage to" },
        { question: "I **__________** (managed to) stick to a diet!", answer: "managed to" }
      ],
      dragDrop: {
        title: "Match Grammar Rule",
        groups: ["Followed by -ING", "Followed by TO", "Base Verb Only"],
        items: [
          { id: '1', content: "Succeed", group: "Followed by -ING" },
          { id: '2', content: "Manage", group: "Followed by TO" },
          { id: '3', content: "Able", group: "Followed by TO" },
          { id: '4', content: "Can", group: "Base Verb Only" },
          { id: '5', content: "Could", group: "Base Verb Only" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "He _____ in finishing", answer: "SUCCEEDED" },
        { id: 2, direction: 'down', number: 2, clue: "I _____ to open it", answer: "MANAGED" },
        { id: 3, direction: 'across', number: 3, clue: "Past of can", answer: "COULD" },
        { id: 4, direction: 'down', number: 4, clue: "Are you _____ to help?", answer: "ABLE" }
      ],
      snake: [
        { prompt: "Succeed...", correct: "In", options: ["To", "At", "In"] },
        { prompt: "Capable...", correct: "Of", options: ["Of", "To", "In"] },
        { prompt: "Manage...", correct: "To", options: ["In", "To", "At"] }
      ]
    }
  },
  {
    id: '3.2',
    title: 'Obligation & Permission',
    topicDescription: 'Must, Have to, Need to, Can. (Focus: Past Tense & Differences).',
    mfp: {
      concepts: [
        { title: 'Must vs Have to', description: 'Must = Internal feeling. Have to = External rule.', visual: '👔' },
        { title: 'Past Obligation TRAP', description: 'No "musted". Use "had to".', visual: '📅' },
        { title: 'Permission', description: 'Can (Informal) vs Allowed to (Formal/Rule).', visual: '🚦' }
      ],
      formulas: [
        { title: 'Past Obligation', eng: 'had to + V1', rus: 'Пришлось', uzb: '...-ishimga to\'g\'ri keldi' },
        { title: 'Prohibition', eng: 'You mustn\'t / aren\'t allowed to', rus: 'Нельзя / Запрещено', uzb: 'Mumkin emas' }
      ],
      examples: [
        { type: 'Past Obligation', text: "In my last job we **had to ask** permission." },
        { type: 'No Necessity', text: "I **don't have to work** on Saturdays." },
        { type: 'Permission', text: "In my present job I **can set** my own goals." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "I _____ wear a uniform at school last year.", options: ["must", "had to"], correctAnswer: "had to", type: 'choice' },
        { id: 2, question: "You _____ park here. It's illegal.", options: ["don't have to", "mustn't"], correctAnswer: "mustn't", type: 'choice' },
        { id: 3, question: "You _____ pay. It's free.", options: ["mustn't", "don't have to"], correctAnswer: "don't have to", type: 'choice' },
        { id: 4, question: "Can in the past is:", options: ["canned", "could"], correctAnswer: "could", type: 'choice' },
        { id: 5, question: "Need to is similar to:", options: ["Have to", "Mustn't"], correctAnswer: "Have to", type: 'choice' }
      ],
      gapFill: [
        { question: "Raul **__________** (has to work) very long hours.", answer: "has to work" },
        { question: "I **__________** (didn't need to) set goals.", answer: "didn't need to" },
        { question: "You **__________** (mustn't) be late.", answer: "mustn't" },
        { question: "Women **__________** (couldn't study) until 1876.", answer: "couldn't study" },
        { question: "A PA **__________** (doesn't have to) have qualifications.", answer: "doesn't have to" }
      ],
      dragDrop: {
        title: "Sort by Meaning",
        groups: ["Obligation", "Optional", "Forbidden"],
        items: [
          { id: '1', content: "I must go", group: "Obligation" },
          { id: '2', content: "I have to study", group: "Obligation" },
          { id: '3', content: "You don't have to come", group: "Optional" },
          { id: '4', content: "You neednt worry", group: "Optional" },
          { id: '5', content: "You mustn't smoke", group: "Forbidden" },
          { id: '6', content: "You can't park here", group: "Forbidden" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "You _____ to wear seatbelt", answer: "HAVE" },
        { id: 2, direction: 'down', number: 2, clue: "Strictly forbidden", answer: "MUSTNT" },
        { id: 3, direction: 'across', number: 3, clue: "Past of have to", answer: "HADTO" },
        { id: 4, direction: 'down', number: 4, clue: "To be _____ to do", answer: "ALLOWED" }
      ],
      snake: [
        { prompt: "Past tense: He must go", correct: "He had to go", options: ["He musted go", "He had to go", "He has to go"] },
        { prompt: "Future: I can go", correct: "I will be able to go", options: ["I will can go", "I will be able to go", "I can will go"] },
        { prompt: "Negative Necessity", correct: "Don't have to", options: ["Mustn't", "Don't have to", "Have not to"] }
      ]
    }
  },
  {
    id: '4.1',
    title: 'Future Predictions & Decisions',
    topicDescription: 'Will vs. Be Going To. (The "Evidence" vs. "Opinion" rule).',
    mfp: {
      concepts: [
        { title: 'Will (Opinion)', description: 'I think, I believe, maybe. Mental guess. 🧠', visual: '🧠' },
        { title: 'Going to (Evidence)', description: 'You can SEE it coming. Dark clouds. 👀', visual: '👀' },
        { title: 'Decisions', description: 'Will = Instant (Phone rings). Going to = Plan (Before).', visual: '⚡' }
      ],
      formulas: [
        { title: 'Prediction (Evidence)', eng: 'Look! It is going to rain', rus: 'Собирается / Сейчас пойдет', uzb: '...-moqchi (aniq belgi bor)' },
        { title: 'Prediction (Opinion)', eng: 'I think it will rain', rus: 'Думаю, будет', uzb: '...-sa kerak / ...-adi (taxmin)' }
      ],
      examples: [
        { type: 'Evidence', text: "Look at the traffic! It's **going to take** a long time." },
        { type: 'Opinion', text: "Climate change **will cause** huge problems." },
        { type: 'Instant Decision', text: "What a lovely day! **I'll have** a swim later." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "You see a man walking into a wall.", options: ["He will crash", "He is going to crash"], correctAnswer: "He is going to crash", type: 'choice' },
        { id: 2, question: "I think people _____ live on Mars one day.", options: ["are going to", "will"], correctAnswer: "will", type: 'choice' },
        { id: 3, question: "No milk? Okay, I _____ go buy some.", options: ["'m going to", "'ll"], correctAnswer: "'ll", type: 'choice' },
        { id: 4, question: "Why paint? I _____ paint my room.", options: ["'ll", "'m going to"], correctAnswer: "'m going to", type: 'choice' },
        { id: 5, question: "Look at those clouds!", options: ["It's going to rain", "It will rain"], correctAnswer: "It's going to rain", type: 'choice' }
      ],
      gapFill: [
        { question: "Just a minute. I **__________** (show) you some.", answer: "'ll show" },
        { question: "Look at clouds! I think it **__________** (rain).", answer: "'s going to rain" },
        { question: "I think you **__________** (get) the job.", answer: "'ll get" },
        { question: "My brother **__________** (visit) us in summer.", answer: "'s going to visit" },
        { question: "I'm exhausted. I think I **__________** (go) to bed.", answer: "'ll go" }
      ],
      dragDrop: {
        title: "Will vs Going To",
        groups: ["Will (Opinion/Instant)", "Going to (Evidence/Plan)"],
        items: [
          { id: '1', content: "I bought tickets", group: "Going to (Evidence/Plan)" },
          { id: '2', content: "Phone ringing - I'll get it", group: "Will (Opinion/Instant)" },
          { id: '3', content: "Look at score! 5-0", group: "Going to (Evidence/Plan)" },
          { id: '4', content: "In 2050 cars will fly", group: "Will (Opinion/Instant)" },
          { id: '5', content: "I forgot wallet - I'll pay", group: "Will (Opinion/Instant)" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "I _____ get it! (Instant)", answer: "WILL" },
        { id: 2, direction: 'down', number: 2, clue: "She is _____ to fall", answer: "GOING" },
        { id: 3, direction: 'across', number: 3, clue: "Plans made before speaking", answer: "GOINGTO" },
        { id: 4, direction: 'down', number: 4, clue: "Decisions made while speaking", answer: "WILL" }
      ],
      snake: [
        { prompt: "I bought tickets yesterday", correct: "I am going to fly", options: ["I will fly", "I am going to fly", "I fly"] },
        { prompt: "Wait! I open the door", correct: "I'll", options: ["I'll", "I'm going to", "I shall"] },
        { prompt: "Look at those dark clouds!", correct: "Going to rain", options: ["Will rain", "Going to rain", "Rains"] }
      ]
    }
  },
  {
    id: '4.2',
    title: 'Future Probability',
    topicDescription: 'Expressing how sure you are about the future (may, might, likely).',
    mfp: {
      concepts: [
        { title: 'Scale of Certainty', description: '100% Will -> 75% Likely -> 50% Might -> 0% Won\'t.', visual: '📊' },
        { title: 'Word Position Rule', description: 'Adverbs after "will" (will probably). Adjectives with "be + to" (is likely to).', visual: '📝' }
      ],
      formulas: [
        { title: 'May / Might (50%)', eng: 'Subject + may/might + V1', rus: 'Возможно / Может быть', uzb: '...-ishi mumkin' },
        { title: 'Likely / Unlikely', eng: 'Subject + is/are likely to + V1', rus: 'Вероятно, что...', uzb: '...-ishi ehtimoli bor' }
      ],
      examples: [
        { type: 'Likely', text: "Temperatures are **likely to rise**." },
        { type: 'Might', text: "Owning a home **might become** impossible." },
        { type: 'Adverb', text: "The population... **may possibly have** an impact." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "It _____ rain.", options: ["will probably", "probably will"], correctAnswer: "will probably", type: 'choice' },
        { id: 2, question: "It _____ rain (Negative).", options: ["won't probably", "probably won't"], correctAnswer: "probably won't", type: 'choice' },
        { id: 3, question: "Prices are _____ to rise.", options: ["likely", "probably"], correctAnswer: "likely", type: 'choice' },
        { id: 4, question: "They _____ arrive late.", options: ["might", "are likely"], correctAnswer: "might", type: 'choice' },
        { id: 5, question: "Which is strongest?", options: ["It might rain", "It will definitely rain"], correctAnswer: "It will definitely rain", type: 'choice' }
      ],
      gapFill: [
        { question: "People **__________** (are likely to continue) to move.", answer: "are likely to continue" },
        { question: "Animals **__________** (might communicate) with humans.", answer: "might communicate" },
        { question: "They **__________** (are unlikely to arrive) in time.", answer: "are unlikely to arrive" },
        { question: "It's **__________** (probable that) unemployment will rise.", answer: "probable that" },
        { question: "It **__________** (may rain) later.", answer: "may rain" }
      ],
      dragDrop: {
        title: "Rank Probability",
        groups: ["High", "Medium", "Low"],
        items: [
          { id: '1', content: "Will definitely", group: "High" },
          { id: '2', content: "Is likely to", group: "High" },
          { id: '3', content: "May / Might", group: "Medium" },
          { id: '4', content: "Is unlikely to", group: "Low" },
          { id: '5', content: "Won't", group: "Low" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "It is _____ to snow", answer: "LIKELY" },
        { id: 2, direction: 'down', number: 2, clue: "She _____ not come", answer: "MIGHT" },
        { id: 3, direction: 'across', number: 3, clue: "He _____ won't pass", answer: "PROBABLY" },
        { id: 4, direction: 'down', number: 4, clue: "There is a _____", answer: "POSSIBILITY" }
      ],
      snake: [
        { prompt: "He is _____ to win", correct: "Likely", options: ["Probably", "Likely", "Maybe"] },
        { prompt: "He will _____ win", correct: "Probably", options: ["Likely", "Probably", "Might"] },
        { prompt: "50% Chance", correct: "Might", options: ["Will", "Might", "Won't"] }
      ]
    }
  },
  {
    id: '5.1',
    title: '-ing form and infinitive with to',
    topicDescription: 'Verb Patterns. Knowing which verb follows which. The "Change in Meaning" trap.',
    mfp: {
      concepts: [
        { title: 'Gerund (-ing)', description: 'Activity itself/Memory. I remember going.', visual: '📸' },
        { title: 'Infinitive (to)', description: 'Purpose/Task/Future. Remember to go.', visual: '📝' },
        { title: 'The "Stop" Trap', description: 'Stop doing (Quit) vs Stop to do (Pause).', visual: '🛑' }
      ],
      formulas: [
        { title: 'Verbs + -ing', eng: 'I enjoy reading', rus: 'Я наслаждаюсь чтением', uzb: 'Men o\'qishni yoqtiraman' },
        { title: 'Verbs + to', eng: 'I promised to help', rus: 'Я обещал помочь', uzb: 'Men yordam berishga va\'da berdim' },
        { title: 'Change in Meaning', eng: 'Try/Remember/Stop + ing vs to', rus: 'Разный смысл', uzb: 'Ma\'no o\'zgaradi' }
      ],
      examples: [
        { type: '-ing', text: "I really **enjoy going** to the cinema." },
        { type: 'To', text: "Amir **offered to give** us a lift." },
        { type: 'Meaning Change', text: "We **continued working** vs **continued to work**." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "I stopped to drink coffee.", options: ["I don't drink coffee anymore", "I paused work to drink coffee"], correctAnswer: "I paused work to drink coffee", type: 'choice' },
        { id: 2, question: "I remember locking the door.", options: ["I have a clear memory", "I must not forget"], correctAnswer: "I have a clear memory", type: 'choice' },
        { id: 3, question: "Try pressing the red button.", options: ["Attempt (hard)", "Experiment (test)"], correctAnswer: "Experiment (test)", type: 'choice' },
        { id: 4, question: "I can't afford _____ that car.", options: ["buying", "to buy"], correctAnswer: "to buy", type: 'choice' },
        { id: 5, question: "He admitted _____ the money.", options: ["stealing", "to steal"], correctAnswer: "stealing", type: 'choice' }
      ],
      gapFill: [
        { question: "He denied **__________** (break) the window.", answer: "breaking" },
        { question: "I refused **__________** (speak) to him.", answer: "to speak" },
        { question: "Do you fancy **__________** (go) out tonight?", answer: "going" },
        { question: "She managed **__________** (finish) the report.", answer: "to finish" },
        { question: "I suggest **__________** (take) a taxi.", answer: "taking" }
      ],
      dragDrop: {
        title: "Sort Verbs",
        groups: ["Followed by -ING", "Followed by TO"],
        items: [
          { id: '1', content: "Avoid", group: "Followed by -ING" },
          { id: '2', content: "Suggest", group: "Followed by -ING" },
          { id: '3', content: "Imagine", group: "Followed by -ING" },
          { id: '4', content: "Decide", group: "Followed by TO" },
          { id: '5', content: "Hope", group: "Followed by TO" },
          { id: '6', content: "Plan", group: "Followed by TO" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "Please stop _______!", answer: "TALKING" },
        { id: 2, direction: 'down', number: 2, clue: "I hope _____ see you", answer: "TO" },
        { id: 3, direction: 'across', number: 3, clue: "He avoided _______", answer: "ANSWERING" },
        { id: 4, direction: 'down', number: 4, clue: "I _______ to help", answer: "PROMISED" }
      ],
      snake: [
        { prompt: "I want...", correct: "To go", options: ["Go", "Going", "To go"] },
        { prompt: "I finished...", correct: "Working", options: ["Work", "Working", "To work"] },
        { prompt: "I enjoy...", correct: "Reading", options: ["Read", "Reading", "To read"] }
      ]
    }
  },
  {
    id: '5.2',
    title: 'Time Expressions (Present Perfect vs Past Simple)',
    topicDescription: 'The "Unfinished" vs "Finished" Time Rule.',
    mfp: {
      concepts: [
        { title: 'Finished Time', description: 'Closed Box 📦. The time period is OVER. Past Simple.', visual: '📦' },
        { title: 'Unfinished Time', description: 'Open Box 🔓. Still happening NOW. Present Perfect.', visual: '🔓' }
      ],
      formulas: [
        { title: 'Finished Time (Past Simple)', eng: 'I saw him yesterday', rus: 'Я видел его вчера (время кончилось)', uzb: 'Men uni kecha ko\'rdim' },
        { title: 'Unfinished Time (Present Perfect)', eng: 'I have seen him today', rus: 'Я видел его сегодня (сегодня длится)', uzb: 'Men uni bugun ko\'rdim' }
      ],
      examples: [
        { type: 'Unfinished', text: "Marco's **eaten** three bars of chocolate **so far today**." },
        { type: 'Unfinished', text: "Have you **seen** Okito **recently**?" },
        { type: 'Finished', text: "I **went** about four years ago." }
      ]
    },
    exercises: {
      quizzes: [
        { id: 1, question: "I have been to the gym this morning. What time is it?", options: ["11:00 AM", "2:00 PM"], correctAnswer: "11:00 AM", type: 'choice' },
        { id: 2, question: "I went to the gym this morning. What time is it?", options: ["11:00 AM", "2:00 PM"], correctAnswer: "2:00 PM", type: 'choice' },
        { id: 3, question: "Which word works with Present Perfect?", options: ["Last year", "Lately"], correctAnswer: "Lately", type: 'choice' },
        { id: 4, question: "When _____ you arrive?", options: ["have", "did"], correctAnswer: "did", type: 'choice' },
        { id: 5, question: "I haven't seen him _____.", options: ["yesterday", "yet"], correctAnswer: "yet", type: 'choice' }
      ],
      gapFill: [
        { question: "I **__________** (not / have) lunch yet.", answer: "haven't had" },
        { question: "We **__________** (live) in Venice from 2005 to 2012.", answer: "lived" },
        { question: "I **__________** (start) a new project last week.", answer: "started" },
        { question: "Video games **__________** (exist) for over sixty years.", answer: "have existed" },
        { question: "Pong **__________** (be) a basic game in the 1970s.", answer: "was" }
      ],
      dragDrop: {
        title: "Sort Time Expressions",
        groups: ["Past Simple (Finished)", "Present Perfect (Unfinished)"],
        items: [
          { id: '1', content: "Yesterday", group: "Past Simple (Finished)" },
          { id: '2', content: "Last night", group: "Past Simple (Finished)" },
          { id: '3', content: "In 1999", group: "Past Simple (Finished)" },
          { id: '4', content: "Recently", group: "Present Perfect (Unfinished)" },
          { id: '5', content: "So far", group: "Present Perfect (Unfinished)" },
          { id: '6', content: "Yet", group: "Present Perfect (Unfinished)" }
        ]
      },
      crossword: [
        { id: 1, direction: 'across', number: 1, clue: "I have _______ done it", answer: "ALREADY" },
        { id: 2, direction: 'down', number: 2, clue: "I haven't finished ____", answer: "YET" },
        { id: 3, direction: 'across', number: 3, clue: "I saw him 3 days ____", answer: "AGO" },
        { id: 4, direction: 'down', number: 4, clue: "Up to this point: So ____", answer: "FAR" }
      ],
      snake: [
        { prompt: "Yesterday", correct: "I went", options: ["I have gone", "I went", "I have been"] },
        { prompt: "Recently", correct: "I have seen", options: ["I saw", "I have seen", "I see"] },
        { prompt: "Last week", correct: "I did", options: ["I did", "I have done", "I do"] }
      ]
    }
  }
];
