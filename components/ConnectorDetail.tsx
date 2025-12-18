
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Volume2, Wand2, BookOpen, Scroll, Skull, CheckCircle, XCircle, FlaskConical, Gem } from 'lucide-react';
import { DetailedTense } from '../types';

interface ConnectorDetailProps {
  topic: DetailedTense;
  onBack: () => void;
}

const ConnectorDetail: React.FC<ConnectorDetailProps> = ({ topic, onBack }) => {
  const [activeTab, setActiveTab] = useState<'meaning' | 'magic' | 'forms' | 'voice' | 'curses'>('meaning');
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

  const renderMagicalVisual = (type: string) => {
    return (
      <div className="h-72 w-full bg-[#1a0f0a] rounded-xl relative flex items-center justify-center my-6 border-4 border-[#D4AF37] overflow-hidden shadow-[inset_0_0_80px_rgba(0,0,0,0.9)] bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] perspective-1000">
        
        {/* Animated Dust/Stars Background */}
        {[...Array(20)].map((_, i) => (
           <motion.div
             key={i}
             className="absolute w-1 h-1 bg-[#D4AF37] rounded-full blur-[1px]"
             initial={{ y: 300, x: Math.random() * 800, opacity: 0 }}
             animate={{ y: -50, x: Math.random() * 800, opacity: [0, 0.5, 0] }}
             transition={{ duration: 8 + Math.random() * 10, repeat: Infinity, delay: Math.random() * 5 }}
           />
        ))}

        {type === 'magic-link' && (
           <div className="flex items-center gap-12 relative z-10 w-full justify-center">
              {/* Left Block */}
              <motion.div 
                 className="p-4 bg-[#2A1810] border-2 border-[#D4AF37] text-[#D4AF37] font-magic rounded-lg shadow-2xl text-center min-w-[100px]"
                 animate={{ y: [0, -15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                 <span className="text-xl md:text-2xl font-bold">The Boy</span>
              </motion.div>
              
              {/* Magical Thread */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-10 flex items-center justify-center pointer-events-none">
                 {/* Glowing Path Line */}
                 <svg width="300" height="40" viewBox="0 0 300 40" className="absolute top-1/2 -translate-y-1/2 overflow-visible">
                    <defs>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                    <motion.path 
                       d="M 0 20 Q 150 20 300 20"
                       fill="none"
                       stroke="url(#goldGrad)"
                       strokeWidth="2"
                       strokeDasharray="10 10"
                       initial={{ strokeDashoffset: 100 }}
                       animate={{ strokeDashoffset: 0 }}
                       transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                 </svg>
                 
                 {/* Central Node */}
                 <motion.div 
                    className="relative z-20"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                 >
                    <div className="absolute inset-0 bg-[#D4AF37] blur-lg rounded-full opacity-60"></div>
                    <div className="relative z-10 w-20 h-20 bg-[#1a0f0a] border-2 border-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_20px_#D4AF37]">
                       <span className="font-magic text-white font-bold text-xl">WHO</span>
                    </div>
                 </motion.div>
              </div>

              {/* Right Block */}
              <motion.div 
                 className="p-4 bg-[#2A1810] border-2 border-[#D4AF37] text-[#D4AF37] font-magic rounded-lg shadow-2xl text-center min-w-[100px]"
                 animate={{ y: [0, 15, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                 <span className="text-xl md:text-2xl font-bold">Helps Me</span>
              </motion.div>
           </div>
        )}

        {type === 'crystal-ball' && (
          <div className="relative flex flex-col items-center">
             <div className="relative w-40 h-40 rounded-full border-4 border-[#D4AF37]/50 bg-black overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.3)]">
                {/* Layer 1: Deep Nebula */}
                <motion.div 
                   className="absolute inset-[-50%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-40 bg-cover"
                   animate={{ rotate: 360, scale: [1.5, 2, 1.5] }}
                   transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Layer 2: Moving Mist */}
                <motion.div 
                   className="absolute inset-[-50%] bg-gradient-to-tr from-indigo-900/50 via-purple-800/30 to-transparent"
                   animate={{ rotate: -360 }}
                   transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />

                {/* Layer 3: The Vision (Text) */}
                <motion.div 
                   className="absolute inset-0 flex items-center justify-center flex-col text-center"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: [0, 1, 1, 0] }}
                   transition={{ duration: 6, repeat: Infinity, times: [0, 0.4, 0.7, 1] }}
                >
                   <span className="text-white font-magic text-xs tracking-[0.2em] drop-shadow-[0_0_5px_white]">VISION:</span>
                   <span className="text-[#D4AF37] font-bold text-lg drop-shadow-[0_0_10px_gold]">PARIS</span>
                </motion.div>

                {/* Gloss Reflection */}
                <div className="absolute top-4 left-6 w-10 h-6 bg-white/10 rounded-full blur-md -rotate-45" />
             </div>
             
             {/* Base Stand */}
             <div className="w-24 h-4 bg-[#2A1810] border border-[#8b5a2b] mt-4 rounded-full relative z-10 shadow-xl" />
          </div>
        )}

        {type === 'potion-mix' && (
           <div className="flex items-end gap-4 relative">
              {/* Ingredient 1 */}
              <motion.div className="flex flex-col items-center gap-2" animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                 <FlaskConical className="w-14 h-14 text-purple-400 drop-shadow-[0_0_10px_purple]" strokeWidth={1.5} />
                 <span className="font-magic text-purple-300 text-sm tracking-widest bg-black/50 px-2 rounded">WANT</span>
              </motion.div>
              
              <div className="mb-8 text-2xl font-bold text-white opacity-50">+</div>

              {/* Mixing Beaker */}
              <motion.div className="flex flex-col items-center gap-2">
                 <div className="w-16 h-24 border-2 border-white/30 rounded-b-xl rounded-t-sm flex items-end justify-center bg-white/5 relative overflow-hidden backdrop-blur-sm">
                    {/* Liquid Fill Animation */}
                    <motion.div 
                       className="absolute bottom-0 w-full bg-[#D4AF37]" 
                       initial={{ height: '0%' }}
                       animate={{ height: ['10%', '70%', '70%', '10%'] }}
                       transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Bubbles in liquid */}
                        {[...Array(5)].map((_, i) => (
                          <motion.div 
                             key={i}
                             className="absolute bottom-0 w-2 h-2 bg-white/50 rounded-full"
                             style={{ left: `${Math.random() * 80}%` }}
                             animate={{ y: -60, opacity: 0 }}
                             transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                          />
                        ))}
                    </motion.div>
                    
                    {/* Surface tension line */}
                    <motion.div 
                       className="absolute w-full h-[2px] bg-white/50"
                       style={{ bottom: '10%' }} // Starts here, needs to match liquid height roughly or just fade
                       animate={{ bottom: ['10%', '70%', '70%', '10%'] }}
                       transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <span className="relative z-10 font-bold text-white shadow-black drop-shadow-md text-xl mb-4">TO</span>
                 </div>
                 <span className="font-magic text-[#D4AF37] text-sm tracking-widest bg-black/50 px-2 rounded">BASE</span>
              </motion.div>

              <div className="mb-8 text-2xl font-bold text-white opacity-50">=</div>

              {/* Result */}
              <motion.div 
                 className="flex flex-col items-center justify-center"
                 animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                 transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                 <Gem className="w-16 h-16 text-green-400 drop-shadow-[0_0_20px_green]" strokeWidth={1.5} />
                 <span className="font-magic text-green-300 text-sm tracking-widest bg-black/50 px-2 rounded mt-2">SUCCESS</span>
              </motion.div>
           </div>
        )}

      </div>
    );
  };

  const tabs = [
    { id: 'meaning', label: 'The Spell', icon: <BookOpen size={18} /> },
    { id: 'magic', label: 'Magic', icon: <Wand2 size={18} /> },
    { id: 'forms', label: 'Scrolls', icon: <Scroll size={18} /> },
    { id: 'voice', label: 'Chant', icon: <Volume2 size={18} /> },
    { id: 'curses', label: 'Curses', icon: <Skull size={18} /> },
  ];

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up pb-20">
      {/* Hogwarts Header */}
      <div className="flex items-center gap-4 mb-6">
        <button 
          onClick={onBack}
          className="p-3 bg-[#2A1810] border-2 border-[#D4AF37] rounded-full hover:bg-[#3d2419] transition-colors text-[#D4AF37]"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-3xl md:text-5xl font-magic text-[#D4AF37] uppercase tracking-wider drop-shadow-lg">
          <span className="text-white opacity-50 text-2xl md:text-3xl mr-2">Subject:</span> {topic.title}
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-t-xl font-magic font-bold transition-all whitespace-nowrap border-t-2 border-x-2 relative
              ${activeTab === tab.id 
                ? 'bg-[#2A1810] border-[#D4AF37] text-[#D4AF37] z-10 translate-y-1' 
                : 'bg-black/50 border-[#5c4033] text-[#8b5a2b] hover:text-[#D4AF37]'}`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Parchment Content Area */}
      <div className="bg-[#1a0f0a] border-4 border-[#D4AF37] rounded-b-xl rounded-tr-xl p-6 md:p-10 min-h-[400px] relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 relative z-10"
          >
            {activeTab === 'meaning' && (
              <div className="space-y-8 text-[#e5dcc5]">
                <div className="bg-[#2A1810]/80 p-6 rounded-lg border-2 border-[#D4AF37]/50 relative">
                  <div className="absolute -top-3 left-6 bg-[#1a0f0a] px-2 text-[#D4AF37] font-magic text-sm border border-[#D4AF37]">DEFINITION</div>
                  <p className="text-2xl md:text-3xl font-magic leading-relaxed text-[#D4AF37]">{topic.meaning.english}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-black/40 p-4 rounded-lg border border-[#8b5a2b]">
                    <span className="text-xs text-[#8b5a2b] uppercase font-bold tracking-widest">Russian Translation</span>
                    <p className="text-lg font-serif italic mt-1">{topic.meaning.russian}</p>
                  </div>
                  <div className="bg-black/40 p-4 rounded-lg border border-[#8b5a2b]">
                    <span className="text-xs text-[#8b5a2b] uppercase font-bold tracking-widest">Uzbek Translation</span>
                    <p className="text-lg font-serif italic mt-1">{topic.meaning.uzbek}</p>
                  </div>
                </div>
                
                <div className="mt-8 border-t border-[#D4AF37]/30 pt-6">
                  <h3 className="text-[#D4AF37] font-magic mb-4 text-xl flex items-center gap-2">
                    <CheckCircle size={20} /> Incantations (Examples)
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {topic.additionalExamples.map((ex, i) => (
                      <div key={i} className="flex items-center gap-3 bg-[#2A1810]/50 p-3 rounded border border-[#5c4033]">
                         <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                         <span className="text-[#e5dcc5] font-serif italic">"{ex}"</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'magic' && (
              <div className="text-center">
                <h3 className="text-2xl font-magic text-[#D4AF37] mb-2">Magical Visualization</h3>
                <p className="text-[#8b5a2b] font-serif italic mb-4">{topic.timeline.description}</p>
                
                {renderMagicalVisual(topic.timeline.visualType)}

                <div className="mt-8 bg-[#2A1810] p-6 rounded-xl border-2 border-[#D4AF37] shadow-xl max-w-2xl mx-auto">
                  <h4 className="text-xs text-[#D4AF37] uppercase font-bold mb-3 tracking-[0.2em]">Primary Spell</h4>
                  <div className="flex items-center justify-center gap-4 mb-4">
                     <button 
                        onClick={() => speak(topic.timeline.exampleSentence)}
                        className="p-4 bg-[#D4AF37] rounded-full hover:bg-white transition-colors shadow-lg group text-[#2A1810]"
                     >
                        <Volume2 className={`w-6 h-6 ${isPlaying ? 'animate-pulse' : ''}`} />
                     </button>
                     <p className="text-2xl md:text-3xl font-magic font-bold text-white text-left">"{topic.timeline.exampleSentence}"</p>
                  </div>
                  <div className="text-sm text-[#8b5a2b] font-serif space-y-1">
                    <p>RU: {topic.timeline.exampleRussian}</p>
                    <p>UZ: {topic.timeline.exampleUzbek}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'forms' && (
              <div className="grid gap-6">
                {[
                  { title: "Positive Spell", val: topic.forms.positive, color: "text-green-400", border: "border-green-900", bg: "bg-green-900/10" },
                  { title: "Negative Spell", val: topic.forms.negative, color: "text-red-400", border: "border-red-900", bg: "bg-red-900/10" },
                  { title: "Question Spell", val: topic.forms.question, color: "text-blue-400", border: "border-blue-900", bg: "bg-blue-900/10" }
                ].map((item, i) => (
                  <div key={i} className={`${item.bg} p-6 rounded-lg border ${item.border} relative overflow-hidden group`}>
                    <div className={`absolute top-0 left-0 w-1 h-full ${item.color.replace('text', 'bg')}`} />
                    <h3 className={`${item.color} font-magic mb-2 text-xl uppercase tracking-widest`}>{item.title}</h3>
                    <code className="text-xl md:text-2xl text-[#e5dcc5] font-serif block">{item.val}</code>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'voice' && (
              <div className="text-center py-10">
                <div className="mb-8 relative inline-block">
                  <div className="absolute -inset-4 bg-[#D4AF37] rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <div className="w-32 h-32 bg-[#2A1810] border-2 border-[#D4AF37] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-105 transition-transform relative z-10" onClick={() => speak(topic.pronunciation.text)}>
                     <Volume2 className="w-16 h-16 text-[#D4AF37]" />
                  </div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-magic text-white mb-8 drop-shadow-md">"{topic.pronunciation.text}"</h3>

                <div className="bg-black/30 border border-[#D4AF37]/30 p-6 rounded-xl max-w-xl mx-auto text-left relative">
                  <Wand2 className="absolute -top-3 -left-3 text-[#D4AF37] bg-[#1a0f0a] p-1 border border-[#D4AF37] rounded-full w-8 h-8" />
                  <h4 className="text-[#D4AF37] font-bold mb-2 pl-2">Professor's Tip:</h4>
                  <p className="text-[#e5dcc5] font-serif italic pl-2">{topic.pronunciation.tips}</p>
                </div>
              </div>
            )}

            {activeTab === 'curses' && (
              <div className="space-y-6">
                 <h3 className="text-red-500 font-magic text-2xl mb-4 flex items-center gap-2 border-b border-red-900/50 pb-2">
                    <Skull />
                    Forbidden Curses (Common Mistakes)
                 </h3>
                 <div className="grid gap-6">
                    {topic.commonMistakes.map((mistake, i) => (
                       <div key={i} className="bg-[#0f0a0a] p-6 rounded-xl border border-red-900/30 hover:border-red-500/50 transition-colors group">
                          <div className="grid md:grid-cols-2 gap-4 mb-4">
                             <div className="flex items-center gap-3 text-red-400 bg-red-900/10 p-4 rounded border border-red-900/20">
                                <XCircle className="shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="line-through font-serif">{mistake.wrong}</span>
                             </div>
                             <div className="flex items-center gap-3 text-green-400 bg-green-900/10 p-4 rounded border border-green-900/20">
                                <CheckCircle className="shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="font-bold font-serif">{mistake.right}</span>
                             </div>
                          </div>
                          <p className="text-[#8b5a2b] text-sm ml-2 border-l-2 border-[#D4AF37] pl-3 italic">
                             <span className="text-[#D4AF37] font-bold not-italic">Counter-Curse: </span>
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

export default ConnectorDetail;
