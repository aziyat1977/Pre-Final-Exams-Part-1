
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
    else if (type === 'Adjective') {
        const fallbacks = ["more " + correct.replace('er', ''), correct.replace('er', 'est'), correct.replace('est', 'er'), "the " + correct];
        d = getRandom(fallbacks);
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
  
  // Specific data for A2 Adjectives
  const adjectives = [
      { base: 'fast', comp: 'faster', super: 'fastest' },
      { base: 'cool', comp: 'cooler', super: 'coolest' },
      { base: 'big', comp: 'bigger', super: 'biggest' },
      { base: 'strong', comp: 'stronger', super: 'strongest' },
      { base: 'expensive', comp: 'more expensive', super: 'most expensive' },
      { base: 'popular', comp: 'more popular', super: 'most popular' }
  ];

  for (let i = 0; i < count; i++) {
    const subj = getRandom(SUBJECTS);
    const verb = getRandom(VERBS);
    const context = getRandom(CONTEXTS);
    const adj = getRandom(adjectives);
    
    // Select Grammar Rule based on Level
    let rule = '';
    const a2Rules = ['PresSimple', 'PresCont', 'PastSimple', 'FuturePlan', 'Comparatives', 'Superlatives', 'ShouldMust', 'PastSimple_Be'];
    const b1Rules = ['PresSimple', 'PresCont', 'PastSimple', 'PresPerf', 'Will', 'GoingTo', 'Modals', 'FirstCond'];
    const b1PlusRules = ['PresPerfCont', 'PastPerf', 'SecondCond', 'ThirdCond', 'Passive', 'Reported', 'Relative', 'FutureCont'];
    
    if (level === 'A2') rule = getRandom(a2Rules);
    else if (level === 'B1') rule = getRandom(b1Rules);
    else rule = getRandom(b1PlusRules);

    let qText = '';
    let correct = '';
    let distractorType = '';

    switch (rule) {
      // --- A2 RULES ---
      case 'FuturePlan':
         qText = `${subj.text} _______ (${verb.base}) ${context.text} tomorrow.`;
         correct = (subj.isPlural ? "are " : "is ") + "going to " + verb.base;
         distractorType = 'Will';
         break;
      
      case 'Comparatives':
         qText = `${subj.text} is _______ than the old one.`;
         correct = adj.comp;
         distractorType = 'Adjective';
         break;

      case 'Superlatives':
         qText = `${subj.text} is the _______ thing in the world!`;
         correct = adj.super;
         distractorType = 'Adjective';
         break;

      case 'ShouldMust':
         qText = `${subj.text} _______ (${verb.base}) ${context.text} (It's a good idea).`;
         correct = "should " + verb.base;
         distractorType = 'Will';
         break;
      
      case 'PastSimple_Be':
         qText = `${subj.text} _______ happy yesterday.`;
         correct = subj.isPlural ? "were" : "was";
         distractorType = 'V2';
         break;

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
    } else if (distractorType === 'Adjective') {
        // Simple distractors for adjs
        if (rule === 'Comparatives') opts = [adj.base, adj.super, "more " + adj.base];
        else opts = [adj.base, adj.comp, "most " + adj.base];
        opts.push(correct);
    } else if (distractorType === 'V2' && rule === 'PastSimple_Be') {
        opts = ["were", "was", "is", "are"];
    } else {
        opts = generateDistractors(correct, distractorType, verb, subj.isPlural);
        opts.push(correct);
    }
    
    // Shuffle Options
    opts.sort(() => Math.random() - 0.5);

    // Limit to 3-4 options unique
    opts = Array.from(new Set(opts)).slice(0, 4);

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
