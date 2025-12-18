
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, BookOpen, Layers, PenTool, Swords, Gamepad2, Brain, Clock, Timer, Move, Microscope, Activity, ArrowRight, User, Shield } from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'mfp' | 'timeline' | 'exercises'>('mfp');
  const [activeExercise, setActiveExercise] = useState<{ type: 'kahoot' | 'mcq' | 'quiz' | 'gap' | 'drag' | 'crossword' | 'snake', index?: number } | null>(null);
  
  // Gap Fill State
  const [gapAnswers, setGapAnswers] = useState<{ [key: number]: string }>({});
  const [showGapResults, setShowGapResults] = useState(false);

  const handleGapCheck = () => {
    setShowGapResults(true);
  };

  const renderTimelineVisual = (type: string) => {
    return (
      <div className="h-80 w-full bg-black rounded-2xl relative flex items-center justify-center my-8 border-4 border-yellow-500/30 overflow-hidden shadow-[inset_0_0_100px_rgba(234,179,8,0.2)] perspective-1000">
        {/* Animated HUD Background */}
        <motion.div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(90deg, transparent 98%, #eab308 98%), linear-gradient(transparent 98%, #eab308 98%)', backgroundSize: '40px 40px' }} animate={{ backgroundPosition: ['0px 0px', '-40px 40px'] }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
        
        {/* Time Axis */}
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gray-800 z-0"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-yellow-500/20 z-0 shadow-[0_0_15px_#eab308]"></div>
        <div className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-yellow-500 z-10 shadow-[0_0_20px_#eab308]"><div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" /><div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" /></div>
        <div className="absolute left-[50%] bottom-6 text-[10px] font-hud text-yellow-400 font-black -translate-x-1/2 bg-black/80 px-3 py-1 rounded border border-yellow-500/50 z-20">SYSTEM TIME: NOW</div>

        {/* 3D Visuals based on type */}
        {type === 'present-perfect-bridge' && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg width="600" height="200" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible">
                 <motion.path 
                    d="M -200 100 Q 0 0 200 100" 
                    fill="none" 
                    stroke="#eab308" 
                    strokeWidth="4" 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    className="drop-shadow-[0_0_10px_#eab308]"
                 />
                 <circle cx="-200" cy="100" r="8" fill="#eab308" className="animate-ping" />
                 <circle cx="200" cy="100" r="8" fill="#eab308" />
              </svg>
              <div className="absolute left-[15%] top-[65%] text-xs font-hud text-yellow-500 bg-black/60 p-2 border border-yellow-500/20">PAST START</div>
              <div className="absolute right-[15%] top-[65%] text-xs font-hud text-yellow-500 bg-black/60 p-2 border border-yellow-500/20">PRESENT RESULT</div>
              <motion.div className="absolute top-20 text-yellow-400 font-hud text-sm tracking-widest px-4 py-1 border-2 border-yellow-500/50 bg-black/80" animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>BRIDGE OF EXPERIENCE</motion.div>
           </div>
        )}

        {type === 'state-static' && (
           <div className="flex gap-12 items-center justify-center">
              {[0, 1, 2].map(i => (
                <motion.div 
                    key={i} 
                    className="w-16 h-16 bg-gray-900 border-2 border-yellow-500 flex items-center justify-center relative shadow-[0_0_20px_#eab308]"
                    animate={{ rotateY: [0, 360], scale: [1, 1.1, 1] }}
                    transition={{ duration: 8, repeat: Infinity, delay: i * 2 }}
                >
                    <Activity size={32} className="text-yellow-500" />
                    <div className="absolute -top-6 text-[10px] font-hud text-yellow-500">CONSTANT</div>
                </motion.div>
              ))}
           </div>
        )}

        {type === 'past-perfect-flashback' && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="relative w-full h-full">
                {/* Event 1 */}
                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <motion.div className="w-12 h-12 bg-red-900/50 border-2 border-red-500 flex items-center justify-center" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                        <span className="font-hud text-white font-bold">1</span>
                    </motion.div>
                    <span className="text-[10px] font-hud text-red-400 mt-2 uppercase">Past Perfect</span>
                </div>
                {/* Connector */}
                <motion.div className="absolute left-[20%] right-[65%] top-1/2 h-0.5 bg-gradient-to-r from-red-500 to-blue-500" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2, repeat: Infinity }} />
                {/* Event 2 */}
                <div className="absolute left-[35%] top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <motion.div className="w-12 h-12 bg-blue-900/50 border-2 border-blue-500 flex items-center justify-center" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
                        <span className="font-hud text-white font-bold">2</span>
                    </motion.div>
                    <span className="text-[10px] font-hud text-blue-400 mt-2 uppercase">Past Simple</span>
                </div>
                <div className="absolute left-[25%] top-[25%] text-yellow-500 font-hud text-xs border border-yellow-500/50 p-2 bg-black/80">SEQUENCE OF PAST EVENTS</div>
            </div>
          </div>
        )}

        {type === 'passive-focus-shift' && (
           <div className="absolute inset-0 z-20 flex items-center justify-center overflow-visible">
              <div className="relative w-full h-full flex items-center justify-center gap-12">
                 {/* The Receiver (New Focus) */}
                 <motion.div 
                    className="flex flex-col items-center z-30"
                    animate={{ scale: [1, 1.1, 1], rotateY: [0, 360] }}
                    transition={{ duration: 10, repeat: Infinity }}
                 >
                    <div className="w-24 h-24 bg-yellow-500/20 border-4 border-yellow-500 rounded-full flex items-center justify-center shadow-[0_0_30px_#eab308]">
                        <Shield className="w-12 h-12 text-yellow-500" />
                    </div>
                    <span className="text-xs font-hud text-yellow-400 mt-4 bg-black/60 px-2 py-1 border border-yellow-500/50">SUBJECT (RECEIVER)</span>
                 </motion.div>

                 <ArrowRight className="text-yellow-500/40 w-12 h-12" />

                 {/* The Doer (Backgrounded) */}
                 <motion.div 
                    className="flex flex-col items-center opacity-40 z-20 grayscale"
                    animate={{ x: [0, 20, 0], opacity: [0.4, 0.2, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity }}
                 >
                    <div className="w-16 h-16 bg-gray-800 border-2 border-gray-600 rounded flex items-center justify-center">
                        <User className="w-8 h-8 text-gray-400" />
                    </div>
                    <span className="text-[10px] font-hud text-gray-500 mt-4 uppercase">Agent (By...)</span>
                 </motion.div>

                 <div className="absolute top-[20%] font-hud text-yellow-500/50 tracking-widest text-sm border-b border-yellow-500/20 px-4">FOCUS SHIFT DETECTED</div>
              </div>
           </div>
        )}

        {/* Default / Fallback placeholders */}
        {!['present-perfect-bridge', 'state-static', 'past-perfect-flashback', 'passive-focus-shift'].includes(type) && (
            <div className="text-gray-500 font-hud">HUD DATA: 3D_TIMELINE_SYNCING...</div>
        )}
      </div>
    );
  };

  const renderContent = () => {
    if (activeExercise) {
      switch (activeExercise.type) {
        case 'quiz':
          return <div className="pt-4 h-full"><CombatQuiz questions={lesson.exercises.quizzes} onBack={() => setActiveExercise(null)} isKahootMode={false} title="Nuance Check" /></div>;
        case 'mcq':
            const mcq = lesson.exercises.mcqTests?.[activeExercise.index || 0];
            return <div className="pt-4 h-full"><CombatQuiz questions={mcq?.questions || []} onBack={() => setActiveExercise(null)} isKahootMode={false} title={mcq?.title} /></div>;
        case 'mini':
            const mini = lesson.exercises.miniQuizzes?.[activeExercise.index || 0];
            return <div className="pt-4 h-full"><CombatQuiz questions={mini?.questions || []} onBack={() => setActiveExercise(null)} isKahootMode={false} title={mini?.title} /></div>;
        case 'drag':
          return <div className="pt-4 h-full"><DragDropGame data={lesson.exercises.dragDrop} onBack={() => setActiveExercise(null)} onComplete={() => {}} /></div>;
        case 'crossword':
            return <div className="pt-4 h-full"><CrosswordGame data={lesson.exercises.crossword} onBack={() => setActiveExercise(null)} /></div>;
        case 'snake':
            return <div className="pt-4 h-full"><SnakeGame customLevels={lesson.exercises.snake} onBack={() => setActiveExercise(null)} /></div>;
        case 'gap':
            return (
                <div className="bg-gray-800 p-8 rounded-xl border border-gray-600 max-w-2xl mx-auto mt-4 shadow-2xl">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-white font-hud">Gap Fill Challenge</h2>
                        <Button label="Exit" onClick={() => setActiveExercise(null)} variant="standoff" className="text-xs py-1 px-3" />
                    </div>
                    <div className="space-y-6">
                        {lesson.exercises.gapFill.map((item, idx) => (
                            <div key={idx} className="bg-gray-900 p-4 rounded border border-gray-700">
                                <p className="text-lg leading-relaxed text-gray-200">
                                    {item.question.split('_______').map((part, i, arr) => (
                                        <React.Fragment key={i}>
                                            {part}
                                            {i < arr.length - 1 && (
                                                <input 
                                                    type="text"
                                                    className={`bg-black border-b-2 mx-2 px-2 py-1 w-32 text-center focus:outline-none transition-colors font-bold
                                                        ${showGapResults 
                                                            ? (gapAnswers[idx]?.toLowerCase().trim() === item.answer.toLowerCase().trim() ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400')
                                                            : 'border-yellow-500 text-white'}`}
                                                    value={gapAnswers[idx] || ''}
                                                    onChange={(e) => setGapAnswers(prev => ({...prev, [idx]: e.target.value}))}
                                                    disabled={showGapResults}
                                                />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </p>
                                {showGapResults && gapAnswers[idx]?.toLowerCase().trim() !== item.answer.toLowerCase().trim() && (
                                    <p className="text-green-500 text-sm mt-2 font-bold flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full" /> Solution: {item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center flex justify-center gap-4">
                        {!showGapResults ? (
                            <Button label="Verify Intelligence" onClick={handleGapCheck} variant="primary" />
                        ) : (
                            <Button label="Re-Simulate" onClick={() => { setShowGapResults(false); setGapAnswers({}); }} variant="standoff" />
                        )}
                    </div>
                </div>
            );
        default: return null;
      }
    }

    if (activeTab === 'mfp') {
      return (
        <div className="space-y-8 animate-fade-in-up">
           {/* Visual Concepts */}
           <div className="grid md:grid-cols-3 gap-6">
              {lesson.mfp.concepts.map((concept, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center hover:border-yellow-500 transition-colors group relative overflow-hidden"
                  >
                      <div className="text-6xl mb-4 group-hover:scale-110 transition-transform inline-block z-10 relative">{concept.visual}</div>
                      <h3 className="text-xl font-bold text-yellow-400 mb-2 font-hud">{concept.title}</h3>
                      <p className="text-gray-400 text-sm">{concept.description}</p>
                      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500/10 group-hover:bg-yellow-500/40 transition-colors" />
                  </motion.div>
              ))}
           </div>

           {/* Formulas */}
           <div className="bg-black/40 p-6 rounded-xl border-l-4 border-yellow-500 backdrop-blur-md">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-hud"><Layers className="text-yellow-500" /> Advanced Formulas</h3>
               <div className="grid gap-4">
                   {lesson.mfp.formulas.map((form, i) => (
                       <div key={i} className="bg-gray-900/60 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 border border-gray-800">
                           <div className="font-bold text-yellow-400 w-full md:w-1/4 uppercase text-sm font-hud">{form.title}</div>
                           <div className="font-mono bg-black px-4 py-2 rounded text-blue-400 w-full md:w-1/3 text-center border border-blue-900/50">{form.eng}</div>
                           <div className="text-xs text-gray-500 w-full md:w-1/3 text-center md:text-right">
                               <div className="uppercase font-bold mb-1">RU: {form.rus}</div>
                               <div className="uppercase font-bold">UZ: {form.uzb}</div>
                           </div>
                       </div>
                   ))}
               </div>
           </div>

           {/* Examples */}
           <div className="grid md:grid-cols-3 gap-4">
               {lesson.mfp.examples.map((ex, i) => (
                   <div key={i} className="bg-gray-800/80 p-5 rounded-lg border-t-4 border-green-500 shadow-lg">
                       <span className="text-xs font-bold text-green-500 uppercase tracking-[0.2em]">{ex.type}</span>
                       <p className="text-lg font-serif italic mt-3 text-white">"{ex.text}"</p>
                   </div>
               ))}
           </div>
        </div>
      );
    }

    if (activeTab === 'timeline') {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="text-center">
                    <h2 className="text-2xl font-hud text-yellow-500 mb-2 uppercase">Temporal Logic Mapping</h2>
                    <p className="text-gray-400 italic max-w-2xl mx-auto">"{lesson.timeline.description}"</p>
                </div>
                {renderTimelineVisual(lesson.timeline.visualType)}
                
                <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500/30 flex flex-col md:flex-row items-center gap-8">
                    <div className="p-6 bg-yellow-500 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.5)]"><Clock className="w-12 h-12 text-black" /></div>
                    <div className="flex-1">
                        <h4 className="text-sm font-hud text-yellow-500 mb-2">Example Use Case</h4>
                        <p className="text-3xl font-bold text-white mb-4">"{lesson.timeline.exampleSentence}"</p>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-500">
                            <p><span className="font-bold text-gray-400">RU:</span> {lesson.timeline.exampleRussian}</p>
                            <p><span className="font-bold text-gray-400">UZ:</span> {lesson.timeline.exampleUzbek}</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            <button onClick={() => setActiveExercise({ type: 'quiz' })} className="bg-gray-800/80 hover:bg-gray-700 p-6 rounded-xl border-2 border-blue-500/50 hover:border-blue-500 transition-all text-left group shadow-xl">
                <Brain className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-1 font-hud uppercase">Nuance Check</h3>
                <p className="text-sm text-gray-400">Contextual Accuracy Quiz</p>
            </button>

            <button onClick={() => setActiveExercise({ type: 'gap' })} className="bg-gray-800/80 hover:bg-gray-700 p-6 rounded-xl border-2 border-purple-500/50 hover:border-purple-500 transition-all text-left group shadow-xl">
                <PenTool className="w-12 h-12 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-1 font-hud uppercase">Gap Fill</h3>
                <p className="text-sm text-gray-400">Syntax Reconstruction</p>
            </button>

            <button onClick={() => setActiveExercise({ type: 'drag' })} className="bg-gray-800/80 hover:bg-gray-700 p-6 rounded-xl border-2 border-yellow-500/50 hover:border-yellow-500 transition-all text-left group shadow-xl">
                <Layers className="w-12 h-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-1 font-hud uppercase">Concept Sort</h3>
                <p className="text-sm text-gray-400">Classification Training</p>
            </button>

            {lesson.exercises.mcqTests && lesson.exercises.mcqTests.map((test, i) => (
                <button key={`mcq-${i}`} onClick={() => setActiveExercise({ type: 'mcq', index: i })} className="bg-gray-800/80 hover:bg-gray-700 p-6 rounded-xl border-2 border-orange-500/50 hover:border-orange-500 transition-all text-left group shadow-xl">
                    <Swords className="w-12 h-12 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-white mb-1 font-hud uppercase">{test.title}</h3>
                    <p className="text-sm text-gray-400">{test.questions.length} Mission Rounds</p>
                </button>
            ))}

            <button onClick={() => setActiveExercise({ type: 'crossword' })} className="bg-gray-800/80 hover:bg-gray-700 p-6 rounded-xl border-2 border-green-500/50 hover:border-green-500 transition-all text-left group shadow-xl">
                <div className="w-12 h-12 border-2 border-green-500 mb-4 grid grid-cols-2 gap-0.5 p-0.5 group-hover:scale-110 transition-transform"><div className="bg-green-500"/><div/><div/><div className="bg-green-500"/></div>
                <h3 className="text-xl font-bold text-white mb-1 font-hud uppercase">Code Breaker</h3>
                <p className="text-sm text-gray-400">Vocabulary Cross-check</p>
            </button>

            <button onClick={() => setActiveExercise({ type: 'snake' })} className="bg-gray-800/80 hover:bg-gray-700 p-6 rounded-xl border-2 border-red-500/50 hover:border-red-500 transition-all text-left group shadow-xl">
                <Gamepad2 className="w-12 h-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-1 font-hud uppercase">Snake Logic</h3>
                <p className="text-sm text-gray-400">Real-time Decision Speed</p>
            </button>
        </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto pb-20">
       <div className="flex items-center gap-6 mb-10">
        <button onClick={onBack} className="p-4 bg-gray-800 border-2 border-yellow-600 rounded-full hover:bg-yellow-900/30 transition-all text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]"><ArrowLeft size={28} /></button>
        <div className="flex-1">
            <div className="text-sm text-yellow-500 uppercase tracking-[0.4em] font-black mb-1 drop-shadow-sm">INTERMEDIATE SECTOR // CLEARANCE L2</div>
            <h1 className="text-4xl md:text-6xl font-hud font-black text-white tracking-tighter uppercase">{lesson.title}</h1>
        </div>
      </div>

      <div className="flex gap-4 md:gap-8 mb-10 border-b border-gray-800 overflow-x-auto scrollbar-hide">
          <button 
            onClick={() => { setActiveTab('mfp'); setActiveExercise(null); }}
            className={`pb-4 px-2 font-hud font-bold flex items-center gap-3 border-b-2 transition-all text-xs md:text-sm whitespace-nowrap ${activeTab === 'mfp' && !activeExercise ? 'border-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
              <BookOpen size={18} /> MEANING & FORM
          </button>
          <button 
            onClick={() => { setActiveTab('timeline'); setActiveExercise(null); }}
            className={`pb-4 px-2 font-hud font-bold flex items-center gap-3 border-b-2 transition-all text-xs md:text-sm whitespace-nowrap ${activeTab === 'timeline' && !activeExercise ? 'border-yellow-500 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
              <Clock size={18} /> TEMPORAL HUD
          </button>
          <button 
            onClick={() => setActiveTab('exercises')}
            className={`pb-4 px-2 font-hud font-bold flex items-center gap-3 border-b-2 transition-all text-xs md:text-sm whitespace-nowrap ${activeTab === 'exercises' || activeExercise ? 'border-blue-500 text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]' : 'border-transparent text-gray-400 hover:text-white'}`}
          >
              <Swords size={18} /> COMBAT DRILLS
          </button>
      </div>

      <div className="min-h-[600px] relative">
        <AnimatePresence mode="wait">
            <motion.div
                key={activeTab + (activeExercise ? activeExercise.type : '')}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
            >
                {renderContent()}
            </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IntermediateDetail;
