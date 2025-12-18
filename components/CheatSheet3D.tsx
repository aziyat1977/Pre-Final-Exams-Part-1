import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { GrammarRule } from '../types';

interface CheatSheetProps {
  title: string;
  data: GrammarRule[];
  theme: 'gta' | 'hogwarts' | 'roblox';
}

const CheatSheet3D: React.FC<CheatSheetProps> = ({ title, data, theme }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getThemeStyles = () => {
    switch (theme) {
      case 'gta':
        return 'bg-gradient-to-br from-green-900 to-black border-green-500 font-gta text-green-400';
      case 'hogwarts':
        return 'bg-[#1a1510] border-[#D4AF37] font-magic text-[#D4AF37] bg-[url("https://www.transparenttextures.com/patterns/aged-paper.png")]';
      case 'roblox':
        return 'bg-blue-600 border-white font-block text-white border-4';
      default:
        return 'bg-gray-800 border-gray-600 text-white';
    }
  };

  return (
    <div className="perspective-1000 p-4">
      <motion.div
        initial={{ rotateX: 20, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`relative w-full rounded-2xl p-6 border-2 shadow-2xl ${getThemeStyles()} overflow-hidden`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        
        <h2 className="text-3xl font-bold mb-6 text-center text-3d uppercase tracking-wider relative z-10 flex items-center justify-center gap-3">
          {theme === 'hogwarts' && <Sparkles className="w-6 h-6 animate-pulse" />}
          {title}
          {theme === 'hogwarts' && <Sparkles className="w-6 h-6 animate-pulse" />}
        </h2>

        <div className="grid gap-4 relative z-10">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-4 rounded-xl transition-all duration-300 border backdrop-blur-sm 
                ${theme === 'gta' ? 'bg-black/50 border-green-500/30 hover:bg-green-900/40' : 
                  theme === 'hogwarts' ? 'bg-[#2A1810]/80 border-[#D4AF37]/30 hover:border-[#D4AF37]' : 
                  'bg-white/10 border-white/20 hover:bg-white/20'}`}
              style={{
                transform: hoveredIndex === idx ? 'translateZ(20px) scale(1.02)' : 'translateZ(0px) scale(1)',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                    {theme === 'gta' && <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />}
                    {item.title}
                  </h3>
                  <code className={`block p-2 rounded ${theme === 'roblox' ? 'bg-black text-yellow-400 font-mono' : 'bg-black/40 text-purple-300'}`}>
                    {item.formula}
                  </code>
                </div>
                
                <div className="flex-1 space-y-1 text-sm opacity-90">
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-xs font-bold opacity-50">RU</span>
                    <span className={theme === 'hogwarts' ? 'font-serif italic' : ''}>{item.russian}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-xs font-bold opacity-50">UZ</span>
                    <span className={theme === 'hogwarts' ? 'font-serif italic' : ''}>{item.uzbek}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CheatSheet3D;