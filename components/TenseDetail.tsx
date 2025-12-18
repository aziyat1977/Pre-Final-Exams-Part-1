
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, Clock, BookOpen, Layers, Mic } from 'lucide-react';
import { DetailedTense } from '../types';
import Button from './Button';

interface TenseDetailProps {
  tense: DetailedTense;
  onBack: () => void;
}

const TenseDetail: React.FC<TenseDetailProps> = ({ tense, onBack }) => {
  const [activeTab, setActiveTab] = useState<'meaning' | 'timeline' | 'forms' | 'pronunciation'>('meaning');
  const [isPlaying, setIsPlaying] = useState(false);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-GB'; // British Accent
      utterance.rate = 0.8; // Slightly slower for students
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Browser does not support Text-to-Speech");
    }
  };

  const renderTimelineVisual = (type: string) => {
    return (
      <div className="h-32 w-full bg-gray-800 rounded-xl relative flex items-center justify-center my-6 border-2 border-green-500/30 overflow-hidden">
        {/* Base Time Line */}
        <div className="absolute w-[90%] h-1 bg-gray-500"></div>
        <div className="absolute left-[10%] text-xs text-gray-400 -bottom-4">PAST</div>
        <div className="absolute left-[50%] text-xs text-green-400 font-bold -bottom-4">NOW</div>
        <div className="absolute right-[10%] text-xs text-gray-400 -bottom-4">FUTURE</div>
        
        {/* NOW Marker */}
        <div className="absolute left-[50%] h-4 w-1 bg-green-500 -translate-x-1/2"></div>

        {/* Visual Logic */}
        {type === 'point-now' && (
           // Xs everywhere for habits
           <>
            <div className="absolute left-[30%] text-green-400 font-bold text-xl">x</div>
            <div className="absolute left-[40%] text-green-400 font-bold text-xl">x</div>
            <div className="absolute left-[50%] text-green-400 font-bold text-xl">x</div>
            <div className="absolute left-[60%] text-green-400 font-bold text-xl">x</div>
            <div className="absolute left-[70%] text-green-400 font-bold text-xl">x</div>
           </>
        )}
        {type === 'continuous-now' && (
          // Squiggly line around NOW
          <motion.div 
            animate={{ scaleX: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute left-[50%] w-24 h-8 border-2 border-green-400 rounded-full -translate-x-1/2 bg-green-500/20"
          />
        )}
        {type === 'point-past' && (
          // Single X in past
          <div className="absolute left-[30%] text-yellow-400 font-bold text-4xl">X</div>
        )}
        {type === 'continuous-past' && (
          // Squiggly line in past
          <div className="absolute left-[25%] w-32 h-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse"></div>
        )}
      </div>
    );
  };

  const tabs = [
    { id: 'meaning', label: '1. Meaning', icon: <BookOpen size={18} /> },
    { id: 'timeline', label: '2. Timeline', icon: <Clock size={18} /> },
    { id: 'forms', label: '3. Forms', icon: <Layers size={18} /> },
    { id: 'pronunciation', label: '4. Voice', icon: <Mic size={18} /> },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      {/* GTA Header */}
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
