
export type Theme = 'gta' | 'hogwarts' | 'roblox' | 'standoff' | 'default';

export interface GrammarRule {
  title: string;
  formula: string;
  russian: string;
  uzbek: string;
  example?: string;
}

export interface DragItem {
  id: string;
  content: string;
  group: string;
}

export interface DragDropData {
  title: string;
  groups: string[];
  items: DragItem[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  type: 'choice' | 'gap' | 'logic';
}

export interface PracticeExercises {
  kahoot: QuizQuestion[];
  mcqTests: { title: string; questions: QuizQuestion[] }[];
  miniQuizzes: { title: string; questions: QuizQuestion[] }[];
  dragAndDrop: DragDropData;
}

export interface DetailedTense {
  id: string;
  title: string;
  meaning: {
    english: string;
    russian: string;
    uzbek: string;
  };
  deepDive: {
    signalWords: string[];
    nuances: { title: string; description: string; example: string }[];
    comparisons: { vs: string; rule: string; example: string }[];
  };
  timeline: {
    description: string;
    exampleSentence: string;
    exampleRussian: string;
    exampleUzbek: string;
    visualType: 'point-now' | 'continuous-now' | 'point-past' | 'continuous-past' | 'magic-link' | 'crystal-ball' | 'potion-mix' | 'present-perfect-bridge' | 'future-intent' | 'state-static' | 'past-perfect-flashback' | 'passive-focus-shift';
  };
  forms: {
    positive: string;
    negative: string;
    question: string;
  };
  pronunciation: {
    text: string;
    tips: string;
  };
  additionalExamples: string[];
  commonMistakes: {
    wrong: string;
    right: string;
    explanation: string;
  }[];
  practice: PracticeExercises;
}

// --- NEW TYPES FOR INTERMEDIATE SECTION ---

export interface SnakeLevel {
  prompt: string;
  correct: string;
  options: string[]; // 1 Correct + Distractors
}

export interface CrosswordClue {
  id: number;
  direction: 'across' | 'down';
  number: number;
  clue: string;
  answer: string;
}

export interface IntermediateLesson {
  id: string;
  title: string;
  topicDescription: string;
  mfp: {
    concepts: { title: string; description: string; visual: string }[];
    formulas: { title: string; eng: string; rus: string; uzb: string }[];
    examples: { type: string; text: string }[];
  };
  timeline: {
    description: string;
    exampleSentence: string;
    exampleRussian: string;
    exampleUzbek: string;
    visualType: 'point-now' | 'continuous-now' | 'point-past' | 'continuous-past' | 'present-perfect-bridge' | 'future-intent' | 'state-static' | 'past-perfect-flashback' | 'passive-focus-shift';
  };
  exercises: {
    quizzes: QuizQuestion[]; // These act as the primary 'Nuance Check'
    mcqTests?: { title: string; questions: QuizQuestion[] }[];
    miniQuizzes?: { title: string; questions: QuizQuestion[] }[];
    gapFill: { question: string; answer: string }[];
    dragDrop: DragDropData;
    crossword: CrosswordClue[];
    snake: SnakeLevel[];
  };
}

export interface GameState {
  score: number;
  streak: number;
  health: number;
}

export interface SectionProps {
  isActive: boolean;
  toggleView: (view: string) => void;
}

// --- LIMITLESS GENERATOR TYPES ---

export type GeneratorLevel = 'B1' | 'B1+';

export interface Verb {
  base: string;     // play
  past: string;     // played
  pastPart: string; // played
  ing: string;      // playing
  s: string;        // plays
}

export interface Subject {
  text: string;     // "The player"
  isPlural: boolean;
  theme: string;
}

export interface Context {
  text: string;     // "in the middle of the match"
  theme: string;    // "Gaming"
}

export interface GeneratedTest {
  id: string;
  date: string;
  level: GeneratorLevel;
  questions: QuizQuestion[];
}
