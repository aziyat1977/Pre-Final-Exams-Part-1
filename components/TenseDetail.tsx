
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, Clock, BookOpen, Layers, Mic, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { DetailedTense } from '../types';

interface TenseDetailProps {
  tense: DetailedTense;
  onBack: () => void;
}

const TenseDetail: React.FC<TenseDetailProps> = ({ tense, onBack }) => {
  const [activeTab, setActiveTab] = useState<'meaning' | 'timeline' | 'forms' | 'pronunciation' | 'mistakes'>('meaning');
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB'; // British Accent
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
      <div className="h-48 w-full bg-gray-900 rounded-xl relative flex items-center justify-center my-6 border-4 border-green-500/30 overflow-hidden shadow-[inset_0_0_50px_rgba(0,0,0,0.8)]">
        
        {/* Retro Grid Background (Moving) */}
        <motion.div 
           className="absolute inset-0 opacity-20"
           style={{ 
             backgroundImage: 'linear-gradient(90deg, transparent 95%, #00ff00 95%), linear-gradient(transparent 95%, #00ff00 95%)',
             backgroundSize: '40px 40px'
           }}
           animate={{ backgroundPosition: ['0px 0px', '-40px 0px'] }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />

        {/* Base Time Line */}
        <div className="absolute w-full h-1 bg-gray-600 z-10"></div>
        <div className="absolute left-[15%] text-sm font-hud text-gray-500 -bottom-8 z-20">PAST</div>
        <div className="absolute left-[50%] text-sm font-hud text-green-400 font-bold -bottom-8 -translate-x-1/2 z-20">NOW</div>
        <div className="absolute right-[15%] text-sm font-hud text-gray-500 -bottom-8 z-20">FUTURE</div>
        
        {/* NOW Marker */}
        <div className="absolute left-[50%] h-full w-1 bg-green-500/50 -translate-x-1/2 z-0 blur-sm"></div>
        <div className="absolute left-[50%] h-full w-[2px] bg-green-400 -translate-x-1/2 z-10"></div>

        {/* Visual Logic - Ultra Animated */}
        {type === 'point-now' && (
           // Present Simple: Events constantly passing by like a treadmill of habits
           <div className="absolute inset-0 z-20 flex items-center">
             {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_10px_#eab308]"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ 
                    x: ['0%', '100%'],
                    opacity: [0, 1, 1, 1, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: i * 1 // Staggered delay
                  }}
                  style={{ top: '50%', marginTop: '-8px' }}
                />
             ))}
             <div className="absolute left-1/2 -translate-x-1/2 top-[30%] text-green-400 font-bold font-gta text-xs bg-black/50 px-2 rounded">HABIT LOOP</div>
           </div>
        )}

        {type === 'continuous-now' && (
          // Present Continuous: A glowing, morphing energy ball AT "NOW"
          <div className="absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
             <motion.div 
               className="w-16 h-16 bg-blue-500/30 rounded-full border-2 border-blue-400 blur-md"
               animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
               transition={{ duration: 2, repeat: Infinity }}
             />
             <motion.div 
               className="absolute w-20 h-20 border border-blue-300 rounded-full"
               animate={{ rotate: 360, scale: [1, 1.1, 1] }}
               transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
             />
             <div className="absolute text-blue-200 font-bold font-gta text-xs bg-black/50 px-2 rounded mt-24">HAPPENING</div>
          </div>
        )}

        {type === 'point-past' && (
          // Past Simple: A meteor hitting the past and disappearing (scrolling)
          <div className="absolute inset-0 z-20">
             <motion.div
                className="absolute w-8 h-8 bg-red-500 rotate-45 border-2 border-white"
                initial={{ x: '100%', y: -100, opacity: 0 }}
                animate={{ 
                  x: ['50%', '30%'], 
                  y: ['-100%', '50%'],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.8, 1] }}
             >
                <div className="absolute -inset-2 bg-red-500/50 blur-lg rounded-full"></div>
             </motion.div>
             
             {/* Impact Ripple in Past */}
             <motion.div 
                className="absolute left-[30%] top-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 2], opacity: [1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
             />
             <div className="absolute left-[25%] top-[70%] text-red-400 font-bold font-gta text-xs bg-black/50 px-2 rounded">DONE</div>
          </div>
        )}

        {type === 'continuous-past' && (
          // Past Continuous: A flowing wave in the past section
          <div className="absolute inset-0 z-20">
            <motion.div 
               className="absolute top-1/2 -translate-y-1/2 h-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
               initial={{ left: '10%', width: '0%' }}
               animate={{ width: ['0%', '30%', '30%', '0%'], left: ['10%', '10%', '20%', '40%'] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* The interruption */}
            <motion.div 
               className="absolute top-1/2 -translate-y-1/2 h-12 w-1 bg-white left-[35%]"
               initial={{ scaleY: 0 }}
               animate={{ scaleY: [0, 1, 1, 0] }}
               transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.8, 1] }}
            />
            <div className="absolute left-[15%] top-[30%] text-purple-400 font-bold font-gta text-xs bg-black/50 px-2 rounded">WAS HAPPENING</div>
          </div>
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
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up pb-20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="p-3 bg-black border-2 border-green-600 rounded-full hover:bg-green-900 transition-colors text-green-500"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-3xl md:text-5xl font-gta text-white uppercase tracking-wider">
          <span className="text-green-500">MISSION:</span> {tense.title}
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-bold transition-all whitespace-nowrap border-t-2 border-x-2
              ${activeTab === tab.id 
                ? 'bg-green-600 border-green-400 text-black shadow-[0_-5px_20px_rgba(22,163,74,0.4)] translate-y-1' 
                : 'bg-gray-800 border-gray-600 text-gray-400 hover:text-white'}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-black/80 border-2 border-green-600 rounded-b-xl rounded-tr-xl p-6 md:p-10 backdrop-blur-md min-h-[400px] relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-3xl rounded-full pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-6"
          >
            {activeTab === 'meaning' && (
              <div className="space-y-8">
                <div className="bg-gray-900/80 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-sm text-blue-400 uppercase font-bold mb-2">English Definition</h3>
                  <p className="text-2xl md:text-3xl font-hud">{tense.meaning.english}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10">
                    <span className="text-xs text-gray-500 uppercase">Russian</span>
                    <p className="text-lg">{tense.meaning.russian}</p>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-white/10">
                    <span className="text-xs text-gray-500 uppercase">Uzbek</span>
                    <p className="text-lg">{tense.meaning.uzbek}</p>
                  </div>
                </div>

                {/* Additional Examples */}
                <div className="mt-8">
                  <h3 className="text-green-400 font-gta mb-4 border-b border-gray-700 pb-2">More Examples</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {tense.additionalExamples.map((ex, i) => (
                      <div key={i} className="flex items-start gap-3 bg-gray-900 p-3 rounded border border-gray-700">
                        <CheckCircle size={20} className="text-green-500 mt-1 shrink-0" />
                        <span className="text-gray-200 italic">"{ex}"</span>
                      </div>
                    ))}
                  </div>
                </div>
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
                     <button 
                        onClick={() => speak(tense.timeline.exampleSentence)}
                        className="p-3 bg-green-600 rounded-full hover:bg-green-500 transition-colors shadow-lg group"
                     >
                        <Volume2 className={`w-6 h-6 text-black ${isPlaying ? 'animate-pulse' : ''}`} />
                     </button>
                     <p className="text-2xl md:text-3xl font-bold text-white">"{tense.timeline.exampleSentence}"</p>
                  </div>
                  <div className="text-sm text-gray-400 space-y-1 pl-14">
                    <p>RU: {tense.timeline.exampleRussian}</p>
                    <p>UZ: {tense.timeline.exampleUzbek}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'forms' && (
              <div className="grid gap-6">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-500/50">
                  <h3 className="text-green-400 font-gta mb-2 text-xl">+ POSITIVE</h3>
                  <code className="text-xl md:text-2xl bg-black/50 p-2 rounded block">{tense.forms.positive}</code>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/50">
                  <h3 className="text-red-400 font-gta mb-2 text-xl">- NEGATIVE</h3>
                  <code className="text-xl md:text-2xl bg-black/50 p-2 rounded block">{tense.forms.negative}</code>
                </div>
                <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/50">
                  <h3 className="text-blue-400 font-gta mb-2 text-xl">? QUESTION</h3>
                  <code className="text-xl md:text-2xl bg-black/50 p-2 rounded block">{tense.forms.question}</code>
                </div>
              </div>
            )}

            {activeTab === 'pronunciation' && (
              <div className="text-center py-10">
                <div className="mb-8">
                  <div className="w-32 h-32 mx-auto bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(34,197,94,0.4)] mb-6 cursor-pointer hover:scale-105 transition-transform" onClick={() => speak(tense.pronunciation.text)}>
                     <Volume2 className="w-16 h-16 text-black" />
                  </div>
                  <p className="text-sm text-gray-400 mb-2">Click to Listen (British Accent)</p>
                  <h3 className="text-3xl md:text-4xl font-serif italic text-white mb-6">"{tense.pronunciation.text}"</h3>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/50 p-6 rounded-xl max-w-xl mx-auto text-left">
                  <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                    <SparklesIcon /> PRO TIP:
                  </h4>
                  <p className="text-yellow-100">{tense.pronunciation.tips}</p>
                </div>
              </div>
            )}

            {activeTab === 'mistakes' && (
              <div className="space-y-6">
                 <h3 className="text-red-500 font-gta text-2xl mb-4 flex items-center gap-2">
                    <AlertTriangle />
                    WARNING: COMMON TRAPS
                 </h3>
                 <div className="grid gap-6">
                    {tense.commonMistakes.map((mistake, i) => (
                       <div key={i} className="bg-gray-900/80 p-6 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors">
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                             <div className="flex items-center gap-3 text-red-400 bg-red-900/20 p-3 rounded">
                                <XCircle className="shrink-0" />
                                <span className="line-through">{mistake.wrong}</span>
                             </div>
                             <div className="flex items-center gap-3 text-green-400 bg-green-900/20 p-3 rounded">
                                <CheckCircle className="shrink-0" />
                                <span className="font-bold">{mistake.right}</span>
                             </div>
                          </div>
                          <p className="text-gray-400 text-sm ml-2 border-l-2 border-yellow-500 pl-3">
                             <span className="text-yellow-500 font-bold">Why? </span>
                             {mistake.explanation}
                          </p>
                       </div>
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
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
);

export default TenseDetail;
