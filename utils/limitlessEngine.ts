
import { QuizQuestion, GeneratorLevel, Verb } from '../types';
import { VERBS, SUBJECTS, CONTEXTS, NOUNS, VERB_PATTERNS } from './limitlessData';

const getRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Helper to construct distractors
const generateDistractors = (correct: string, type: string, v: Verb, isPlural: boolean): string[] => {
  const distractors = new Set<string>();
  
  while (distractors.size < 3) {
    let d = '';
    const r = Math.random();

    // Standard Verb Logic
    if (type === 'V1' || type === 'V1s') {
      if (r < 0.3) d = v.ing; 
      else if (r < 0.6) d = isPlural ? v.s : v.base; 
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
      if (r < 0.3) d = v.past; 
      else if (r < 0.6) d = (isPlural ? "has " : "have ") + v.pastPart; 
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
    else if (type === 'Quantifier_Countable') {
        d = getRandom(['much', 'a little', 'any']);
    }
    else if (type === 'Quantifier_Uncountable') {
        d = getRandom(['many', 'a few', 'a']);
    }
    else if (type === 'Article') {
        d = getRandom(['a', 'an', 'the', '-']);
    }
    else if (type === 'VerbPattern') {
        d = correct.startsWith('to') ? v.ing : "to " + v.base;
        if (d === correct) d = v.base; // Fallback
    }

    // Generic fallbacks if generator failed or produced duplicate
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
    const noun = getRandom(NOUNS);
    const vPattern = getRandom(VERB_PATTERNS);
    
    // Select Grammar Rule based on Level (Mapped to Oxford Navigate)
    let rule = '';
    
    // A2: Pre-Intermediate Syllabus
    const a2Rules = [
        'PresSimple', 'PresCont', 'PastSimple', 'FuturePlan', // Basics
        'Quantifiers', 'Articles', 'Comparatives', 'Superlatives', // Nouns/Adjs
        'ShouldMust', 'PresPerf_Exp', 'UsedTo', 'Passive_Simple' // Advanced A2
    ];

    // B1: Intermediate Syllabus
    const b1Rules = [
        'PresSimple', 'PresCont', 'PastSimple', 'PastCont', // Narrative Tenses
        'PresPerf_ForSince', 'Will_vs_GoingTo', 'Modals_Obligation', // Time & Rules
        'FirstCond', 'SecondCond', 'GerundInf', 'StateVerbs', 'Quantifiers_Adv'
    ];

    // B1+: Upper Intermediate Syllabus
    const b1PlusRules = [
        'PresPerfCont', 'PastPerf', 'ThirdCond', 'Passive_Adv', 
        'Reported', 'Relative', 'FutureCont', 'FuturePerf'
    ];
    
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
      
      case 'Quantifiers': // A2 Basic Count/Uncount
         qText = `How _______ ${noun.text} do we have?`;
         correct = noun.type === 'countable' ? "many" : "much";
         distractorType = noun.type === 'countable' ? 'Quantifier_Countable' : 'Quantifier_Uncountable';
         break;

      case 'Articles':
         qText = `I saw _______ ${noun.text} yesterday.`;
         correct = noun.vowel ? "an" : "a";
         distractorType = 'Article';
         break;

      case 'UsedTo':
         qText = `${subj.text} _______ live here, but not anymore.`;
         correct = "used to";
         distractorType = 'V2';
         break;

      case 'PresPerf_Exp': // Experience (Have you ever...)
         qText = `${subj.isPlural ? "Have" : "Has"} ${subj.text} ever _______ (${verb.base}) ${context.text}?`;
         correct = verb.pastPart;
         distractorType = 'V2'; // Distract with Past Simple
         break;
        
      case 'Passive_Simple':
         qText = `The car _______ (make) in Germany.`;
         correct = "was made";
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

      case 'PastCont':
        qText = `${subj.text} _______ (${verb.base}) when the phone rang.`;
        correct = (subj.isPlural ? "were " : "was ") + verb.ing;
        distractorType = 'V2';
        break;

      case 'PresPerf_ForSince':
        qText = `${subj.text} _______ (${verb.base}) here for 10 years.`;
        correct = (subj.isPlural ? "have / " : "has / ") + verb.pastPart; // Simplified check
        // Ideally prompt asks for full form, here simplifying for multiple choice structure
        correct = (subj.isPlural ? "have " : "has ") + verb.pastPart;
        distractorType = 'PresentPerfect';
        break;

      case 'Will_vs_GoingTo': // Prediction vs Plan
        // Simplified context for generator
        qText = `I think ${subj.text} _______ (${verb.base}) soon. (Prediction)`;
        correct = "will " + verb.base;
        distractorType = 'Will';
        break;

      case 'Modals_Obligation':
        qText = `You _______ (${verb.base})! It's the law.`;
        correct = "must " + verb.base; 
        distractorType = 'Will';
        break;

      case 'FirstCond':
        qText = `If ${subj.text} _______ (${verb.base}) hard, they will get ${context.text}.`;
        correct = subj.isPlural ? verb.base : verb.s;
        distractorType = 'V1';
        break;
      
      case 'SecondCond':
        qText = `If I were ${subj.text}, I _______ (${verb.base}) ${context.text}.`;
        correct = "would " + verb.base;
        distractorType = 'Will';
        break;

      case 'GerundInf':
        qText = `${subj.text} ${vPattern.verb}s _______ (${verb.base}).`;
        correct = vPattern.follow === 'to' ? "to " + verb.base : verb.ing;
        distractorType = 'VerbPattern';
        break;

      case 'StateVerbs':
        qText = `I _______ (know) the answer now.`;
        correct = "know";
        distractorType = 'V1'; // Distractor will be "am knowing" via generator
        break;

      case 'Quantifiers_Adv': // A few vs A little
         qText = `We have _______ ${noun.text} left.`;
         correct = noun.type === 'countable' ? "a few" : "a little";
         distractorType = noun.type === 'countable' ? 'Quantifier_Countable' : 'Quantifier_Uncountable';
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

      case 'ThirdCond':
        qText = `If ${subj.text} hadn't been late, they _______ (${verb.base}) ${context.text}.`;
        correct = "would have " + verb.pastPart;
        distractorType = 'PastPerfect';
        break;
      
      case 'Passive_Adv':
        qText = `The item "${context.text}" _______ (${verb.base}) by ${subj.text} recently.`;
        correct = "has been " + verb.pastPart;
        distractorType = 'PresentPerfect';
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
      
      case 'FuturePerf':
        qText = `By next year, ${subj.text} _______ (${verb.base}) the project.`;
        correct = "will have " + verb.pastPart;
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

    // Generate Options logic
    let opts: string[] = [];
    
    if (distractorType === 'Relative') {
        opts = ["who", "which", "where", "whose"];
    } else if (distractorType === 'Adjective') {
        if (rule === 'Comparatives') opts = [adj.base, adj.super, "more " + adj.base];
        else opts = [adj.base, adj.comp, "most " + adj.base];
        opts.push(correct);
    } else if (distractorType === 'Quantifier_Countable') {
        opts = ["much", "a little", "any", correct];
    } else if (distractorType === 'Quantifier_Uncountable') {
        opts = ["many", "a few", "a", correct];
    } else if (distractorType === 'Article') {
        opts = ["a", "an", "the", "-"];
    } else if (distractorType === 'VerbPattern') {
        opts = [verb.ing, "to " + verb.base, verb.base, "for " + verb.ing];
    } else if (rule === 'StateVerbs') {
        opts = ["am knowing", "know", "have known", "knew"];
    } else if (rule === 'UsedTo') {
        opts = ["used to", "use to", "usually", "using"];
    } else if (rule === 'Passive_Simple') {
        opts = ["made", "was made", "is making", "has made"];
    } else {
        opts = generateDistractors(correct, distractorType, verb, subj.isPlural);
        opts.push(correct);
    }
    
    // Shuffle Options
    opts.sort(() => Math.random() - 0.5);

    // Ensure Unique
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
