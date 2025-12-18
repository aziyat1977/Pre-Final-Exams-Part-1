
export type Theme = 'gta' | 'hogwarts' | 'roblox' | 'standoff' | 'default';

export interface GrammarRule {
  title: string;
  formula: string;
  russian: string;
  uzbek: string;
  example?: string;
}

export interface DetailedTense {
  id: string;
  title: string;
  meaning: {
    english: string;
    russian: string;
    uzbek: string;
  };
  timeline: {
    description: string;
    exampleSentence: string;
    exampleRussian: string;
    exampleUzbek: string;
    visualType: 'point-now' | 'continuous-now' | 'point-past' | 'continuous-past';
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
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  type: 'choice' | 'gap' | 'logic';
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
