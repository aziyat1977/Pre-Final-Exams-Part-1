
import { QuizQuestion, GeneratorLevel, Verb } from '../types';
import { VERBS, SUBJECTS, CONTEXTS } from './limitlessData';

const getRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Helper to construct distractors
const generateDistractors = (correct: string, type: string, v: Verb, isPlural: boolean): string[] => {
  const distractors = new Set<string>();
  
  while (distractors.size < 3) {
    let d = '';
    const r = Math.random();

    // Generate grammatically plausible but wrong forms based on the verb
    if (type === 'V1' || type === 'V1s') {
      if (r < 0.3) d = v.ing; // playing
      else if (r < 0.6) d = isPlural ? v.s : v.base; // Wrong S agreement
      else d = "is " + v.ing;
    } 
    else if (type === 'V2') {
      if (r < 0.3) d = v.base;
      else if (r < 0.6) d = "has " + v.pastPart;
      else d = "was " + v.base; 
    }
    else if (type === 'Will') {
      if (r < 0.3) d = "is going to " + v.base;
      else if (r < 0.6) d = "wills " + v.base;
      else d = v.ing;
    }
    else if (type === 'PresentPerfect') {
      if (r < 0.3) d = v.past; // Past Simple confusion
      else if (r < 0.6) d = (isPlural ? "has " : "have ") + v.pastPart; // Wrong aux
      else d = "did " + v.base;
    }
    else if (type === 'PastPerfect') {
      if (r < 0.3) d = "has " + v.pastPart;
      else if (r < 0.6) d = v.past;
      else d = "had " + v.past;
    }
    
    // Generic fallbacks if generator failed
    if (!d || d === correct) {
       const fallbacks = [v.base, v.past, v.ing, "to " + v.base, "being " + v.pastPart];
       d = getRandom(fallbacks);
    }

    if (d !== correct) distractors.add(d);
  }
  return Array.from(distractors);
};

export const generateLimitlessTest = (level: GeneratorLevel, count: number): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  
  for (let i = 0; i < count; i++) {
    const subj = getRandom(SUBJECTS);
    const verb = getRandom(VERBS);
    const context = getRandom(CONTEXTS);
    
    // Select Grammar Rule based on Level
    let rule = '';
    const b1Rules = ['PresSimple', 'PresCont', 'PastSimple', 'PresPerf', 'Will', 'GoingTo', 'Modals', 'FirstCond'];
    const b1PlusRules = ['PresPerfCont', 'PastPerf', 'SecondCond', 'ThirdCond', 'Passive', 'Reported', 'Relative', 'FutureCont'];
    
    rule = level === 'B1' ? getRandom(b1Rules) : getRandom(b1PlusRules);

    let qText = '';
    let correct = '';
    let distractorType = '';

    switch (rule) {
      // --- B1 RULES ---
      case 'PresSimple':
        qText = `${subj.text} usually _______ (${verb.base}) ${context.text}.`;
        correct = subj.isPlural ? verb.base : verb.s;
        distractorType = subj.isPlural ? 'V1' : 'V1s';
        break;
      
      case 'PresCont':
        qText = `Look! ${subj.text} _______ (${verb.base}) ${context.text} right now!`;
        correct = (subj.isPlural ? "are " : "is ") + verb.ing;
        distractorType = 'V1'; 
        break;

      case 'PastSimple':
        qText = `Yesterday, ${subj.text} _______ (${verb.base}) ${context.text}.`;
        correct = verb.past;
        distractorType = 'V2';
        break;

      case 'PresPerf':
        qText = `${subj.text} _______ just _______ (${verb.base}) ${context.text}.`;
        correct = (subj.isPlural ? "have / " : "has / ") + verb.pastPart;
        distractorType = 'PresentPerfect';
        break;

      case 'Will':
        qText = `I think ${subj.text} _______ (${verb.base}) ${context.text} in the future.`;
        correct = "will " + verb.base;
        distractorType = 'Will';
        break;

      case 'GoingTo':
        qText = `Look at the evidence! ${subj.text} _______ (${verb.base}) ${context.text}.`;
        correct = (subj.isPlural ? "are " : "is ") + "going to " + verb.base;
        distractorType = 'Will';
        break;

      case 'Modals':
        qText = `${subj.text} _______ (${verb.base}) ${context.text} (It is necessary).`;
        correct = (subj.isPlural ? "have to " : "has to ") + verb.base; 
        distractorType = 'Will';
        break;

      case 'FirstCond':
        qText = `If ${subj.text} _______ (${verb.base}) hard, they will get ${context.text}.`;
        correct = subj.isPlural ? verb.base : verb.s;
        distractorType = 'V1';
        break;

      // --- B1+ RULES ---
      case 'PresPerfCont':
        qText = `${subj.text} _______ (${verb.base}) ${context.text} for 3 hours!`;
        correct = (subj.isPlural ? "have " : "has ") + "been " + verb.ing;
        distractorType = 'PresentPerfect';
        break;

      case 'PastPerf':
        qText = `When I arrived, ${subj.text} _______ already _______ (${verb.base}) ${context.text}.`;
        correct = "had / " + verb.pastPart;
        distractorType = 'PastPerfect';
        break;

      case 'SecondCond':
        qText = `If I were ${subj.text}, I _______ (${verb.base}) ${context.text}.`;
        correct = "would " + verb.base;
        distractorType = 'Will';
        break;

      case 'ThirdCond':
        qText = `If ${subj.text} hadn't been late, they _______ (${verb.base}) ${context.text}.`;
        correct = "would have " + verb.pastPart;
        distractorType = 'PastPerfect';
        break;
      
      case 'Passive':
        qText = `The item "${context.text}" _______ (${verb.base}) by ${subj.text} yesterday.`;
        correct = "was " + verb.pastPart;
        if (context.text.endsWith('s')) correct = "were " + verb.pastPart;
        distractorType = 'V2';
        break;

      case 'Reported':
        qText = `She said that ${subj.text} _______ (${verb.base}) ${context.text} the day before.`;
        correct = "had " + verb.pastPart; 
        distractorType = 'PastPerfect';
        break;

      case 'FutureCont':
        qText = `This time tomorrow, ${subj.text} _______ (${verb.base}) ${context.text}.`;
        correct = "will be " + verb.ing;
        distractorType = 'Will';
        break;
        
      case 'Relative':
         qText = `This is ${subj.text}, _______ ${verb.s} ${context.text}.`;
         correct = "who";
         distractorType = 'Relative';
         break;

      default:
        qText = `${subj.text} _______ (${verb.base}) ${context.text}.`;
        correct = verb.base;
        distractorType = 'V1';
    }

    // Generate Options
    let opts: string[] = [];
    if (distractorType === 'Relative') {
        opts = ["who", "which", "where", "whose"];
    } else {
        opts = generateDistractors(correct, distractorType, verb, subj.isPlural);
        opts.push(correct);
    }
    
    // Shuffle Options
    opts.sort(() => Math.random() - 0.5);

    questions.push({
      id: i + 1,
      question: qText,
      options: opts,
      correctAnswer: correct,
      type: 'choice'
    });
  }

  return questions;
};
