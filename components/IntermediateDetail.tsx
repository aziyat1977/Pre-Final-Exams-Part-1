

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Layers, PenTool, Swords, Gamepad2, Brain, Check, X } from 'lucide-react';
import { IntermediateLesson } from '../types';
import Button from './Button';
import SnakeGame from './SnakeGame';
import DragDropGame from './DragDropGame';
import CombatQuiz from './CombatQuiz';
import CrosswordGame from './CrosswordGame';

interface IntermediateDetailProps {
  lesson: IntermediateLesson;
  onBack: () => void;
}

const IntermediateDetail: React.FC<IntermediateDetailProps> = ({ lesson, onBack }) => {
  const [activeTab, setActiveTab] = useState<'mfp' | 'exercises'>('mfp');
  const [activeExercise, setActiveExercise] = useState<'quiz' | 'gap' | 'drag' | 'crossword' | 'snake' | null>(null);
  
  // Gap Fill State
  const [gapAnswers, setGapAnswers] = useState<{ [key: number]: string }>({});
  const [showGapResults, setShowGapResults] = useState(false);

  const handleGapCheck = () => {
    setShowGapResults(true);
  };

  const renderContent = () => {
    if (activeExercise) {
      switch (activeExercise) {
        case 'quiz':
          return <div className="pt-4 h-full"><CombatQuiz questions={lesson.exercises.quizzes} onBack={() => setActiveExercise(null)} isKahootMode={false} title="Nuance Check" /></div>;
        case 'drag':
          return <div className="pt-4 h-full"><DragDropGame data={lesson.exercises.dragDrop} onBack={() => setActiveExercise(null)} onComplete={() => {}} /></div>;
        case 'crossword':
            return <div className="pt-4 h-full"><CrosswordGame data={lesson.exercises.crossword} onBack={() => setActiveExercise(null)} /></div>;
        case 'snake':
            return <div className="pt-4 h-full"><SnakeGame customLevels={lesson.exercises.snake} onBack={() => setActiveExercise(null)} /></div>;
        case 'gap':
            return (
                <div className="bg-gray-800 p-8 rounded-xl border border-gray-600 max-w-2xl mx-auto mt-4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white">Gap Fill Challenge</h2>
                        <Button label="Exit" onClick={() => setActiveExercise(null)} variant="standoff" className="text-xs py-1 px-3" />
                    </div>
                    <div className="space-y-6">
                        {lesson.exercises.gapFill.map((item, idx) => (
                            <div key={idx} className="bg-gray-900 p-4 rounded border border-gray-700">
                                <p className="text-lg leading-relaxed">
                                    {item.question.split('_______').map((part, i, arr) => (
                                        <React.Fragment key={i}>
                                            {part}
                                            {i < arr.length - 1 && (
                                                <input 
                                                    type="text"
                                                    className={`bg-black border-b-2 mx-2 px-2 py-1 w-32 text-center focus:outline-none transition-colors
                                                        ${showGapResults 
                                                            ? (gapAnswers[idx]?.toLowerCase().trim() === item.answer.toLowerCase().trim() ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400')
                                                            : 'border-blue-500 text-white'}`}
                                                    value={gapAnswers[idx] || ''}
                                                    onChange={(e) => setGapAnswers(prev => ({...prev, [idx]: e.target.value}))}
                                                    disabled={showGapResults}
                                                />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </p>
                                {showGapResults && gapAnswers[idx]?.toLowerCase().trim() !== item.answer.toLowerCase().trim() && (
                                    <p className="text-green-500 text-sm mt-2 font-bold">Answer: {item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        {!showGapResults ? (
                            <Button label="Check Answers" onClick={handleGapCheck} variant="primary" />
                        ) : (
                            <Button label="Try Again" onClick={() => { setShowGapResults(false); setGapAnswers({}); }} variant="standoff" />
                        )}
                    </div>
                </div>
            );
      }
    }

    if (activeTab === 'mfp') {
      return (
        <div className="space-y-8 animate-fade-in">
           {/* Visual Concepts */}
           <div className="grid md:grid-cols-3 gap-6">
              {lesson.mfp.concepts.map((concept, i) => (
                  <div key={i} className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center hover:border-yellow-500 transition-colors group">
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform inline-block">{concept.visual}</div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-2">{concept.title}</h3>
                      <p className="text-gray-400 text-sm">{concept.description}</p>
                  </div>
              ))}
           </div>

           {/* Formulas */}
           <div className="bg-black/40 p-6 rounded-xl border-l-4 border-blue-500">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2"><Layers /> Formulas</h3>
               <div className="grid gap-4">
                   {lesson.mfp.formulas.map((form, i) => (
                       <div key={i} className="bg-gray-900 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
                           <div className="font-bold text-blue-400 w-full md:w-1/4">{form.title}</div>
                           <div className="font-mono bg-black px-3 py-1 rounded text-green-400 w-full md:w-1/3 text-center">{form.eng}</div>
                           <div className="text-xs text-gray-500 w-full md:w-1/3 text-center md:text-right">
                               <div className="uppercase font-bold">RU: {form.rus}</div>
                               <div className="uppercase font-bold">UZ: {form.uzb}</div>
                           </div>
                       </div>
                   ))}
               </div>
           </div>

           {/* Examples */}
           <div className="grid md:grid-cols-3 gap-4">
               {lesson.mfp.examples.map((ex, i) => (
                   <div key={i} className="bg-gray-800 p-4 rounded-lg border-t-4 border-green-500">
                       <span className="text-xs font-bold text-green-500 uppercase tracking-widest">{ex.type}</span>
                       <p className="text-lg font-serif italic mt-2">"{ex.text}"</p>
                   </div>
               ))}
           </div>
        </div>
      );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            <button onClick={() => setActiveExercise('quiz')} className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl border-2 border-blue-500/50 hover:border-blue-500 transition-all text-left group">
                <Brain className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-1">Nuance Check</h3>
                <p className="text-sm text-gray-400">5 Quick Quizzes</p>
            </button>

            <button onClick={() => setActiveExercise('gap')} className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl border-2 border-purple-500/50 hover:border-purple-500 transition-all text-left group">
                <PenTool className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-1">Gap Fill</h3>
                <p className="text-sm text-gray-400">Complete the sentences</p>
            </button>

            <button onClick={() => setActiveExercise('drag')} className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl border-2 border-yellow-500/50 hover:border-yellow-500 transition-all text-left group">
                <Layers className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-1">Drag & Drop</h3>
                <p className="text-sm text-gray-400">Sort and categorize</p>
            </button>

            <button onClick={() => setActiveExercise('crossword')} className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl border-2 border-green-500/50 hover:border-green-500 transition-all text-left group">
                <div className="w-12 h-12 border-2 border-green-500 mb-4 grid grid-cols-2 gap-0.5 p-0.5"><div className="bg-green-500"/><div/><div/><div className="bg-green-500"/></div>
                <h3 className="text-xl font-bold text-white mb-1">Crossword</h3>
                <p className="text-sm text-gray-400">Solve the puzzle</p>
            </button>

            <button onClick={() => setActiveExercise('snake')} className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl border-2 border-red-500/50 hover:border-red-500 transition-all text-left group">
                <Gamepad2 className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-1">Snake Logic</h3>
                <p className="text-sm text-gray-400">Eat the correct answers</p>
            </button>
        </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto pb-20">
       <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-3 bg-gray-800 border border-gray-600 rounded-full hover:bg-gray-700 transition-colors text-white"><ArrowLeft size={24} /></button>
        <div>
            <div className="text-sm text-yellow-500 uppercase tracking-widest font-bold mb-1">Intermediate Level</div>
            <h1 className="text-3xl md:text-5xl font-bold text-white">{lesson.title}</h1>
            <p className="text-gray-400 mt-2">{lesson.topicDescription}</p>
        </div>
      </div>

      <div className="flex gap-4 mb-8 border-b border-gray-700">
          <button 
            onClick={() => { setActiveTab('mfp'); setActiveExercise(null); }}
            className={`pb-4 px-2 font-bold flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'mfp' && !activeExercise ? 'border-yellow-500 text-yellow-500' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
              <BookOpen size={20} /> Meaning & Form
          </button>
          <button 
            onClick={() => setActiveTab('exercises')}
            className={`pb-4 px-2 font-bold flex items-center gap-2 border-b-2 transition-colors ${activeTab === 'exercises' || activeExercise ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
              <Swords size={20} /> Interactive Exercises
          </button>
      </div>

      <div className="min-h-[500px]">
        {renderContent()}
      </div>
    </div>
  );
};

export default IntermediateDetail;