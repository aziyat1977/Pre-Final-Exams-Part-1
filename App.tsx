
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { GraduationCap, Sword, Ghost, Blocks, ChevronRight, Sparkles, Volume2, Brain, Lock } from 'lucide-react';
import Navigation from './components/Navigation';
import CheatSheet3D from './components/CheatSheet3D';
import CombatQuiz from './components/CombatQuiz';
import SnakeGame from './components/SnakeGame';
import Button from './components/Button';
import TenseDetail from './components/TenseDetail';
import ConnectorDetail from './components/ConnectorDetail';
import IntermediateDetail from './components/IntermediateDetail'; 
import { QUANTITY_DATA, EXAM_KILLERS, DETAILED_TENSES, DETAILED_CONNECTORS, QUIZ_QUESTIONS, INTERMEDIATE_LESSONS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState('home');
  const [selectedTenseId, setSelectedTenseId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isKahootMode, setIsKahootMode] = useState(false);

  // Simulated student progress data
  const studentData = [
    { name: 'Tenses', score: 85 },
    { name: 'Connectors', score: 65 },
    { name: 'Quantifiers', score: 90 },
    { name: 'Vocab', score: 40 },
  ];

  const getBackgroundClass = () => {
    switch (view) {
      case 'tenses': return 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 via-gray-900 to-black'; // GTA
      case 'connectors': return 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2A1810] via-[#1a0f0a] to-black'; // Hogwarts
      case 'games': return 'bg-blue-900'; // Roblox
      case 'quiz': return 'bg-slate-900'; // Standoff
      case 'intermediate': return 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-900 via-gray-900 to-black';
      default: return 'bg-gray-900';
    }
  };

  const handleViewChange = (newView: string) => {
    setView(newView);
    setSelectedTenseId(null); // Reset detail view when changing main sections
  };

  const renderContent = () => {
    switch (view) {
      case 'tenses':
        if (selectedTenseId) {
          const tense = DETAILED_TENSES.find(t => t.id === selectedTenseId);
          if (tense) {
            return <TenseDetail tense={tense} onBack={() => setSelectedTenseId(null)} />;
          }
        }

        return (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-gta text-white mb-4 text-shadow-lg tracking-wider">
                <span className="text-green-500">LOS SANTOS</span> SYNTAX
              </h1>
              <p className="text-gray-400 font-hud text-xl">Mission: Master the Time Flow</p>
            </div>
            
            {/* Tense Selection Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {DETAILED_TENSES.map((tense, idx) => (
                <motion.div
                  key={tense.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedTenseId(tense.id)}
                  className="bg-black/60 border-2 border-green-800 hover:border-green-400 hover:bg-green-900/30 p-6 rounded-xl cursor-pointer group transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="text-green-500 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-gta text-white group-hover:text-green-400 transition-colors mb-2">{tense.title}</h3>
                  <p className="text-gray-400 text-sm font-mono mb-4">{tense.meaning.english}</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Timeline</span>
                    <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Audio</span>
                    <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Deep Dive</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 bg-black/60 p-6 rounded-2xl border-l-4 border-green-500 backdrop-blur-md max-w-2xl mx-auto">
              <h3 className="text-2xl font-gta text-green-400 mb-4">Exam Killers (Rules of the Street)</h3>
              <ul className="space-y-4 font-mono text-sm md:text-base">
                {EXAM_KILLERS.slice(0, 2).map((k, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-green-500 font-bold">0{i+1}.</span>
                    <span dangerouslySetInnerHTML={{ __html: k.text.replace(/\*\*(.*?)\*\*/g, '<span class="text-white bg-green-800 px-1 rounded">$1</span>') }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'connectors':
        if (selectedTenseId) {
          const topic = DETAILED_CONNECTORS.find(t => t.id === selectedTenseId);
          if (topic) {
            return <ConnectorDetail topic={topic} onBack={() => setSelectedTenseId(null)} />;
          }
        }

        return (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center mb-12 relative">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
              <h1 className="text-5xl md:text-6xl font-magic text-[#D4AF37] mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Wizardry of Words
              </h1>
              <p className="text-[#a89f91] font-serif italic text-xl">The Spells of Connection & Future</p>
            </div>

             {/* Connector Selection Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto relative z-10">
              {DETAILED_CONNECTORS.map((topic, idx) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setSelectedTenseId(topic.id)}
                  className="bg-[#1a0f0a]/80 border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] p-8 rounded-xl cursor-pointer group transition-all relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]"
                >
                  <div className="absolute top-2 right-2 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="text-[#D4AF37] w-6 h-6 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-magic text-[#D4AF37] mb-2">{topic.title}</h3>
                  <p className="text-[#e5dcc5] font-serif italic mb-4 opacity-80">{topic.meaning.english}</p>
                  
                  <div className="flex gap-2 mt-4">
                    <span className="text-xs bg-[#2A1810] text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded font-serif">Spell</span>
                    <span className="text-xs bg-[#2A1810] text-[#D4AF37] border border-[#D4AF37]/30 px-3 py-1 rounded font-serif">Curses</span>
                  </div>
                </motion.div>
              ))}
            </div>

             <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div className="p-6 bg-[#2A1810] border border-[#D4AF37] rounded-lg shadow-xl relative overflow-hidden">
                    <h3 className="font-magic text-[#D4AF37] text-xl mb-2">Teacher's Prophecy</h3>
                    <p className="font-serif text-[#e5dcc5]">"If you see a person, use <span className="text-[#D4AF37] font-bold">WHO</span>. If you see a castle, use <span className="text-[#D4AF37] font-bold">WHERE</span>."</p>
                </div>
                <div className="p-6 bg-[#2A1810] border border-[#D4AF37] rounded-lg shadow-xl relative overflow-hidden">
                   <h3 className="font-magic text-[#D4AF37] text-xl mb-2">The "When" Curse</h3>
                   <p className="font-serif text-[#e5dcc5]">"After 'When', usually cast the <span className="text-[#D4AF37] font-bold">Past Simple (V2)</span> spell."</p>
                </div>
             </div>
          </div>
        );

      case 'intermediate':
        if (selectedTenseId) {
            const lesson = INTERMEDIATE_LESSONS.find(l => l.id === selectedTenseId);
            if (lesson) {
                return <IntermediateDetail lesson={lesson} onBack={() => setSelectedTenseId(null)} />;
            }
        }

        return (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-hud text-white mb-4 text-shadow-lg tracking-wider">
                <span className="text-yellow-500">INTERMEDIATE</span> SECTOR
              </h1>
              <p className="text-gray-400 font-mono text-xl">Level 2 Clearance. Advanced Mechanics.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
               {INTERMEDIATE_LESSONS.map((lesson, i) => (
                 <motion.div 
                    key={lesson.id}
                    onClick={() => setSelectedTenseId(lesson.id)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-800/80 border-2 border-yellow-600/50 p-6 rounded-xl relative overflow-hidden group hover:border-yellow-500 transition-all cursor-pointer hover:bg-yellow-900/10"
                 >
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-hud text-white">{lesson.title}</h3>
                        <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded font-bold">{lesson.id}</span>
                    </div>
                    <p className="text-gray-400 font-mono mb-6">{lesson.topicDescription}</p>
                    <div className="absolute right-0 bottom-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                         <Brain size={80} />
                    </div>
                 </motion.div>
               ))}
               
               {/* Placeholder for future content */}
               <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-black/40 border-2 border-gray-700 p-6 rounded-xl relative overflow-hidden opacity-50 flex items-center justify-center min-h-[150px]"
               >
                   <div className="text-center">
                       <Lock className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                       <p className="text-gray-500 font-bold">More Coming Soon</p>
                   </div>
               </motion.div>
            </div>
          </div>
        );

      case 'games':
        return (
          <div className="space-y-8 animate-fade-in-up">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-block text-white mb-4 drop-shadow-md">
                <span className="text-red-500">BLOCKY</span> BASICS
              </h1>
              <p className="text-blue-300 font-mono">Build your knowledge brick by brick.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <CheatSheet3D title="Quantities" data={QUANTITY_DATA} theme="roblox" />
              <SnakeGame />
            </div>
          </div>
        );

      case 'quiz':
        return (
          <div className="space-y-6">
             <div className="flex justify-between items-center bg-slate-800/80 p-4 rounded-xl backdrop-blur">
                <h1 className="text-3xl font-hud font-bold text-white flex items-center gap-3">
                  <Sword className="text-orange-500" />
                  COMBAT ZONE
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-400 uppercase">Mode:</span>
                  <button 
                    onClick={() => setIsKahootMode(!isKahootMode)}
                    className={`px-4 py-1 rounded-full text-sm font-bold transition-colors ${isKahootMode ? 'bg-purple-600 text-white shadow-[0_0_10px_#9333ea]' : 'bg-gray-700 text-gray-400'}`}
                  >
                    {isKahootMode ? 'KAHOOT (TIMED)' : 'STUDENT (CASUAL)'}
                  </button>
                </div>
             </div>
             <CombatQuiz questions={QUIZ_QUESTIONS} onBack={() => setView('home')} isKahootMode={isKahootMode} />
          </div>
        );

      default: // Home
        return (
          <div className="max-w-6xl mx-auto pt-12 text-center space-y-16">
            <motion.div 
              initial={{ y: -50, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-sm font-hud tracking-tighter">
                GRAMMAR LEGENDS
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
                The Ultimate Exam-Ready RPG. Choose your world, master the rules, defeat the exams.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
               {/* Dashboard Card */}
               <div className="md:col-span-2 bg-gray-800/50 rounded-2xl p-6 border border-white/10 text-left">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="text-blue-500" /> 
                    Student Stats
                  </h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={studentData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="name" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', color: '#fff' }}
                        />
                        <Bar dataKey="score" fill="#8884d8" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
               </div>

               {/* Quick Actions */}
               <div className="grid gap-4">
                  <Button 
                    label="ENTER LOS SANTOS (TENSES)" 
                    variant="gta" 
                    icon={<Ghost />} 
                    onClick={() => setView('tenses')} 
                    className="h-full text-sm"
                  />
                  <Button 
                    label="ENTER HOGWARTS (CONNECTORS)" 
                    variant="hogwarts" 
                    icon={<Ghost />} 
                    onClick={() => setView('connectors')} 
                    className="h-full text-sm"
                  />
                  <Button 
                    label="ENTER ROBLOX (BASICS)" 
                    variant="roblox" 
                    icon={<Blocks />} 
                    onClick={() => setView('games')} 
                    className="h-full text-sm"
                  />
               </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-md w-full max-w-md">
                 <h3 className="text-2xl font-bold text-white mb-4">Ready for the Combat Test?</h3>
                 <Button label="START QUIZ MODE" variant="primary" className="text-lg w-full py-4" onClick={() => setView('quiz')} />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen text-white transition-colors duration-500 ${getBackgroundClass()} ${isDarkMode ? '' : 'filter brightness-125 saturate-150'}`}>
      <Navigation 
        currentView={view} 
        setView={handleViewChange} 
        toggleTheme={() => setIsDarkMode(!isDarkMode)} 
        isDarkMode={isDarkMode} 
      />
      
      <main className="container mx-auto px-4 py-20 min-h-screen print:p-0 print:min-h-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Floating Teacher Advice */}
      <motion.div 
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-4 right-4 bg-yellow-500 text-black p-4 rounded-tl-2xl rounded-br-2xl shadow-xl max-w-xs border-4 border-black font-block text-xs hidden lg:block z-40 print:hidden"
      >
        <p className="font-bold mb-2">TEACHER'S SURGICAL ADVICE:</p>
        <p>"Money, Water, Information are UNCOUNTABLE. Use much/little. Watch the 'C'!"</p>
      </motion.div>
    </div>
  );
};

export default App;
