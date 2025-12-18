import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, Swords, Gamepad2, Skull, GraduationCap, Sun, Moon } from 'lucide-react';
import { Theme } from '../types';

interface NavigationProps {
  currentView: string;
  setView: (view: string) => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView, toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: { id: string; label: string; icon: React.ReactNode; theme?: Theme }[] = [
    { id: 'home', label: 'Mission Select', icon: <GlobeIcon /> },
    { id: 'tenses', label: 'Tense Mastery (GTA)', icon: <Skull />, theme: 'gta' },
    { id: 'connectors', label: 'Wizardry (Hogwarts)', icon: <BookOpen />, theme: 'hogwarts' },
    { id: 'games', label: 'Mini Games (Roblox)', icon: <Gamepad2 />, theme: 'roblox' },
    { id: 'quiz', label: 'Combat Test (Standoff)', icon: <Swords />, theme: 'standoff' },
  ];

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-3 bg-black/80 text-white rounded-lg border border-white/20 hover:bg-purple-600 transition-colors backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
      >
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: -300 }} animate={{ x: 0 }} exit={{ x: -300 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="fixed top-0 left-0 h-full w-80 bg-gray-900 border-r border-gray-700 z-50 overflow-hidden flex flex-col"
            >
              <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-black/40">
                <h2 className="text-xl font-hud font-bold text-white">COMMAND CENTER</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { setView(item.id); setIsOpen(false); }}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all border
                      ${currentView === item.id 
                        ? 'bg-purple-600 border-purple-400 text-white shadow-lg' 
                        : 'bg-gray-800/50 border-transparent hover:bg-gray-700 text-gray-300 hover:text-white'}`}
                  >
                    <div className={`p-2 rounded-lg ${
                      item.theme === 'gta' ? 'bg-green-500/20 text-green-400' :
                      item.theme === 'hogwarts' ? 'bg-yellow-500/20 text-yellow-400' :
                      item.theme === 'roblox' ? 'bg-red-500/20 text-red-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.icon}
                    </div>
                    <span className="font-bold text-left">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-6 border-t border-gray-800 bg-black/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">System Theme</span>
                  <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                    {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
                  </button>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 text-xs text-gray-400 border border-gray-700">
                  <p className="font-bold text-white mb-1">STATUS: ONLINE</p>
                  <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[75%] animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper for icon
const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);

export default Navigation;