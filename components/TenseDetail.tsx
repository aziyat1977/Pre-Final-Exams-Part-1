
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, Clock, BookOpen, Layers, Mic, AlertTriangle, CheckCircle, XCircle, Swords, Brain, Timer, Move } from 'lucide-react';
import { DetailedTense } from '../types';
import CombatQuiz from './CombatQuiz';
import DragDropGame from './DragDropGame';

interface TenseDetailProps {
  tense: DetailedTense;
  onBack: () => void;
}

const TenseDetail: React.FC<TenseDetailProps> = ({ tense, onBack }) => {
  const [activeTab, setActiveTab] = useState<'meaning' | 'timeline' | 'forms' | 'pronunciation' | 'mistakes' | 'practice'>('meaning');
  const [activePractice, setActivePractice] = useState<{ type: 'kahoot' | 'mcq' | 'quiz' | 'drag'; index?: number } | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB';
      utterance.rate = 0.8; 
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Browser does not support Text-to-Speech");
    }
  };

  const renderTimelineVisual = (type: string) => {
    return (
      <div className="h-64 w-full bg-gray-950 rounded-xl relative flex items-center justify-center my-6 border-4 border-green-500/30 overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] perspective-1000">
        <motion.div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, transparent 98%, #00ff00 98%), linear-gradient(transparent 98%, #00ff00 98%)', backgroundSize: '60px 60px' }} animate={{ backgroundPosition: ['0px 0px', '-60px 60px'] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 z-0"></div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-500/30 z-0 shadow-[0_0_10px_#22c55e]"></div>
        <div className="absolute top-0 bottom-0 left-[20%] border-l border-dashed border-gray-700 z-0 flex flex-col justify-end pb-4"><span className="text-[10px] font-hud text-gray-500 pl-2">PAST</span></div>
        <div className="absolute top-0 bottom-0 right-[20%] border-r border-dashed border-gray-700 z-0 flex flex-col justify-end pb-4 items-end"><span className="text-[10px] font-hud text-gray-500 pr-2">FUTURE</span></div>
        <div className="absolute left-[50%] top-8 bottom-8 w-[2px] bg-green-500 z-10 shadow-[0_0_15px_#22c55e] -translate-x-1/2"><div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full" /><div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full" /></div>
        <div className="absolute left-[50%] bottom-4 text-xs font-hud text-green-400 font-bold -translate-x-1/2 bg-black/80 px-2 rounded border border-green-500/50 z-20">NOW</div>
        {type === 'point-now' && (
           <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
             {[...Array(5)].map((_, i) => (<motion.div key={i} className="absolute w-8 h-8 bg-green-900/40 border border-green-400 rounded flex items-center justify-center backdrop-blur-sm shadow-[0_0_10px_rgba(34,197,94,0.3)]" initial={{ x: -300, opacity: 0, rotateY: 0 }} animate={{ x: ['-45vw', '45vw'], opacity: [0, 1, 1, 1, 0], rotateY: [0, 180, 360] }} transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: i * 2.4 }} style={{ top: '50%', marginTop: '-16px' }}><div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_5px_#fff]" /></motion.div>))}
             <motion.div className="absolute top-[20%] text-green-400 font-gta text-sm tracking-widest bg-black/60 px-4 py-1 rounded border border-green-500/30" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity }}>REPEATED ACTION</motion.div>
           </div>
        )}
        {type === 'continuous-now' && (
          <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"><motion.div className="w-12 h-12 bg-blue-500 rounded-full blur-md" animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} /><motion.div className="absolute w-20 h-20 border-2 border-blue-400 rounded-full border-t-transparent border-l-transparent" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} /><motion.div className="absolute w-32 h-32 border border-blue-300/30 rounded-full border-b-transparent border-r-transparent" animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />{[0, 1, 2].map(i => (<motion.div key={i} className="absolute w-10 h-10 border border-blue-400 rounded-full" animate={{ width: '300px', height: '300px', opacity: 0 }} transition={{ duration: 4, repeat: Infinity, delay: i * 1.3, ease: "easeOut" }} />))}<div className="absolute top-24 text-blue-300 font-gta text-xs tracking-widest bg-black/80 px-2 py-1 rounded">HAPPENING NOW</div></div>
        )}
        {type === 'point-past' && (
          <div className="absolute inset-0 z-20"><div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-red-900 rounded-full border border-red-500" /><motion.div className="absolute left-[30%] w-1 bg-red-500" style={{ height: '50px', top: '-60px' }} animate={{ top: ['-60px', '50%'], opacity: [1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeIn", times: [0, 0.8] }}><div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_10px_red]" /></motion.div><motion.div className="absolute left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-red-500 rounded-full" initial={{ width: 0, height: 0, opacity: 1 }} animate={{ width: 100, height: 100, opacity: 0 }} transition={{ duration: 3, repeat: Infinity, delay: 2.4, ease: "easeOut" }} /><div className="absolute left-[30%] -translate-x-1/2 bottom-8 text-red-400 font-gta text-xs bg-black/60 px-2 rounded">FINISHED</div></div>
        )}
        {type === 'continuous-past' && (
          <div className="absolute inset-0 z-20"><div className="absolute left-[15%] right-[55%] top-1/2 -translate-y-1/2 h-6 bg-gray-800 rounded-full border border-gray-600 overflow-hidden"><motion.div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} /><div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-30 mix-blend-overlay" /></div><motion.div className="absolute left-[45%] top-0 bottom-0 w-[2px] bg-yellow-400 z-30" initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: [0, 1, 1, 0], scaleY: [0, 1, 1, 2] }} transition={{ duration: 4, repeat: Infinity, times: [0, 0.6, 0.8, 1] }}><div className="absolute top-1/2 -translate-y-1/2 -left-3 bg-yellow-500 text-black font-bold text-[10px] px-1 rounded rotate-90 origin-center">INTERRUPT</div></motion.div><div className="absolute left-[25%] top-[65%] text-purple-300 font-gta text-xs">WAS IN PROGRESS</div></div>
        )}
      </div>
    );
  };

  const tabs = [
    { id: 'meaning', label: '1. Meaning', icon: <BookOpen size={18} /> },
    { id: 'timeline', label: '2. Timeline', icon: <Clock size={18} /> },
    { id: 'forms', label: '3. Forms', icon: <Layers size={18} /> },
    { id: 'pronunciation', label: '4. Voice', icon: <Mic size={18} /> },
    { id: 'mistakes', label: '5. Mistakes', icon: <AlertTriangle size={18} /> },
    { id: 'practice', label: '6. Combat', icon: <Swords size={18} /> },
  ];

  if (activePractice) {
      if (activePractice.type === 'drag') {
          return <div className="h-full pt-4"><DragDropGame data={tense.practice.dragAndDrop} onBack={() => setActivePractice(null)} onComplete={() => {}} /></div>;
      }
      
      let questions;
      let title;
      let isKahoot = false;

      if (activePractice.type === 'kahoot') {
          questions = tense.practice.kahoot;
          title = "Kahoot Speed Run";
          isKahoot = true;
      } else if (activePractice.type === 'mcq' && activePractice.index !== undefined) {
          questions = tense.practice.mcqTests[activePractice.index].questions;
          title = tense.practice.mcqTests[activePractice.index].title;
      } else if (activePractice.type === 'quiz' && activePractice.index !== undefined) {
          questions = tense.practice.miniQuizzes[activePractice.index].questions;
          title = tense.practice.miniQuizzes[activePractice.index].title;
      }

      if (questions) {
          return <div className="h-full pt-4"><CombatQuiz questions={questions} onBack={() => setActivePractice(null)} isKahootMode={isKahoot} title={title} /></div>;
      }
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up pb-20">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-3 bg-black border-2 border-green-600 rounded-full hover:bg-green-900 transition-colors text-green-500"><ArrowLeft size={24} /></button>
        <h1 className="text-3xl md:text-5xl font-gta text-white uppercase tracking-wider"><span className="text-green-500">MISSION:</span> {tense.title}</h1>
      </div>

      <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-bold transition-all whitespace-nowrap border-t-2 border-x-2
              ${activeTab === tab.id ? 'bg-green-600 border-green-400 text-black shadow-[0_-5px_20px_rgba(22,163,74,0.4)] translate-y-1' : 'bg-gray-800 border-gray-600 text-gray-400 hover:text-white'}`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-black/80 border-2 border-green-600 rounded-b-xl rounded-tr-xl p-6 md:p-10 backdrop-blur-md min-h-[400px] relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-6">
            {activeTab === 'meaning' && (
              <div className="space-y-8">
                <div className="bg-gray-900/80 p-6 rounded-lg border-l-4 border-blue-500"><h3 className="text-sm text-blue-400 uppercase font-bold mb-2">English Definition</h3><p className="text-2xl md:text-3xl font-hud">{tense.meaning.english}</p></div>
                <div className="grid md:grid-cols-2 gap-4"><div className="bg-gray-900/50 p-4 rounded-lg border border-white/10"><span className="text-xs text-gray-500 uppercase">Russian</span><p className="text-lg">{tense.meaning.russian}</p></div><div className="bg-gray-900/50 p-4 rounded-lg border border-white/10"><span className="text-xs text-gray-500 uppercase">Uzbek</span><p className="text-lg">{tense.meaning.uzbek}</p></div></div>
                <div className="mt-8"><h3 className="text-green-400 font-gta mb-4 border-b border-gray-700 pb-2">More Examples</h3><div className="grid md:grid-cols-2 gap-4">{tense.additionalExamples.map((ex, i) => (<div key={i} className="flex items-start gap-3 bg-gray-900 p-3 rounded border border-gray-700"><CheckCircle size={20} className="text-green-500 mt-1 shrink-0" /><span className="text-gray-200 italic">"{ex}"</span></div>))}</div></div>
              </div>
            )}
            {activeTab === 'timeline' && (
              <div>
                <h3 className="text-xl font-gta text-green-400 mb-2">TEMPORAL LOCATOR</h3>
                <p className="text-gray-300 mb-4">{tense.timeline.description}</p>
                {renderTimelineVisual(tense.timeline.visualType)}
                <div className="mt-8 bg-gray-900 p-6 rounded-xl border border-green-500/30">
                  <h4 className="text-sm text-green-500 uppercase font-bold mb-3">Example Scenario</h4>
                  <div className="flex items-center gap-4 mb-4">
                     <button onClick={() => speak(tense.timeline.exampleSentence)} className="p-3 bg-green-600 rounded-full hover:bg-green-500 transition-colors shadow-lg group"><Volume2 className={`w-6 h-6 text-black ${isPlaying ? 'animate-pulse' : ''}`} /></button>
                     <p className="text-2xl md:text-3xl font-bold text-white">"{tense.timeline.exampleSentence}"</p>
                  </div>
                  <div className="text-sm text-gray-400 space-y-1 pl-14"><p>RU: {tense.timeline.exampleRussian}</p><p>UZ: {tense.timeline.exampleUzbek}</p></div>
                </div>
              </div>
            )}
            {activeTab === 'forms' && (
              <div className="grid gap-6">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/50"><h3 className="text-green-400 font-gta mb-2 text-xl">+ POSITIVE</h3><code className="text-xl md:text-2xl bg-black/50 p-2 rounded block">{tense.forms.positive}</code></div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/50"><h3 className="text-red-400 font-gta mb-2 text-xl">- NEGATIVE</h3><code className="text-xl md:text-2xl bg-black/50 p-2 rounded block">{tense.forms.negative}</code></div>
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/50"><h3 className="text-blue-400 font-gta mb-2 text-xl">? QUESTION</h3><code className="text-xl md:text-2xl bg-black/50 p-2 rounded block">{tense.forms.question}</code></div>
              </div>
            )}
            {activeTab === 'pronunciation' && (
              <div className="text-center py-10">
                <div className="mb-8"><div className="w-32 h-32 mx-auto bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.4)] mb-6 cursor-pointer hover:scale-105 transition-transform" onClick={() => speak(tense.pronunciation.text)}><Volume2 className="w-16 h-16 text-black" /></div><p className="text-sm text-gray-400 mb-2">Click to Listen (British Accent)</p><h3 className="text-3xl md:text-4xl font-serif italic text-white mb-6">"{tense.pronunciation.text}"</h3></div>
                <div className="bg-yellow-500/10 border border-yellow-500/50 p-6 rounded-xl max-w-xl mx-auto text-left"><h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2"><SparklesIcon /> PRO TIP:</h4><p className="text-yellow-100">{tense.pronunciation.tips}</p></div>
              </div>
            )}
            {activeTab === 'mistakes' && (
              <div className="space-y-6">
                 <h3 className="text-red-500 font-gta text-2xl mb-4 flex items-center gap-2"><AlertTriangle /> WARNING: COMMON TRAPS</h3>
                 <div className="grid gap-6">{tense.commonMistakes.map((mistake, i) => (<div key={i} className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors"><div className="grid md:grid-cols-2 gap-4 mb-4"><div className="flex items-center gap-3 text-red-400 bg-red-900/20 p-3 rounded"><XCircle className="shrink-0" /><span className="line-through">{mistake.wrong}</span></div><div className="flex items-center gap-3 text-green-400 bg-green-900/20 p-3 rounded"><CheckCircle className="shrink-0" /><span className="font-bold">{mistake.right}</span></div></div><p className="text-gray-400 text-sm ml-2 border-l-2 border-yellow-500 pl-3"><span className="text-yellow-500 font-bold">Why? </span>{mistake.explanation}</p></div>))}</div>
              </div>
            )}
            {activeTab === 'practice' && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-gta text-white mb-6 flex items-center gap-2"><Swords /> TRAINING GROUNDS</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <button onClick={() => setActivePractice({ type: 'kahoot' })} className="bg-purple-600 hover:bg-purple-500 p-6 rounded-xl border-2 border-purple-400 text-left transition-all group relative overflow-hidden">
                            <div className="absolute right-0 bottom-0 opacity-20"><Timer size={80} /></div>
                            <h4 className="text-xl font-bold mb-2">Kahoot Challenge</h4>
                            <p className="text-sm opacity-80">15 Questions • Timed Mode</p>
                        </button>

                        <button onClick={() => setActivePractice({ type: 'drag' })} className="bg-blue-600 hover:bg-blue-500 p-6 rounded-xl border-2 border-blue-400 text-left transition-all group relative overflow-hidden">
                             <div className="absolute right-0 bottom-0 opacity-20"><Move size={80} /></div>
                            <h4 className="text-xl font-bold mb-2">Drag & Drop</h4>
                            <p className="text-sm opacity-80">Sort the concepts</p>
                        </button>
                    </div>

                    <h4 className="text-green-400 font-bold mt-8 mb-4 border-b border-gray-700 pb-2">MCQ Tests</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {tense.practice.mcqTests.map((test, i) => (
                             <button key={i} onClick={() => setActivePractice({ type: 'mcq', index: i })} className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg border border-gray-600 flex justify-between items-center">
                                <span>{test.title}</span>
                                <span className="bg-gray-900 px-2 py-1 rounded text-xs">{test.questions.length} Qs</span>
                             </button>
                        ))}
                    </div>

                    <h4 className="text-green-400 font-bold mt-8 mb-4 border-b border-gray-700 pb-2">Mini Quizzes</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                         {tense.practice.miniQuizzes.map((quiz, i) => (
                             <button key={i} onClick={() => setActivePractice({ type: 'quiz', index: i })} className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg border border-gray-600 flex flex-col items-center justify-center gap-2">
                                <Brain size={20} className="text-gray-400" />
                                <span className="text-xs text-center">{quiz.title}</span>
                             </button>
                        ))}
                    </div>
                </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z"/></svg>
);

export default TenseDetail;
