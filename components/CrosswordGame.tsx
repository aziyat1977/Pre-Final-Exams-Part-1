
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { CrosswordClue } from '../types';

interface CrosswordGameProps {
  data: CrosswordClue[];
  onBack: () => void;
}

const CrosswordGame: React.FC<CrosswordGameProps> = ({ data, onBack }) => {
  const [inputs, setInputs] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const handleInput = (id: number, val: string) => {
    setInputs(prev => ({ ...prev, [id]: val.toUpperCase() }));
  };

  const isCorrect = (clue: CrosswordClue) => {
      return (inputs[clue.id] || '').trim() === clue.answer;
  };

  return (
    <div className="bg-slate-900 p-6 rounded-xl border-2 border-slate-600 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white font-mono">CODE BREAKER (Crossword)</h2>
          <Button label="Exit" onClick={onBack} variant="standoff" className="py-1 px-3 text-xs" />
      </div>

      <div className="space-y-6">
        {data.map((clue) => (
          <motion.div 
            key={clue.id} 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-slate-800 p-4 rounded-lg border border-slate-700"
          >
            <div className="flex justify-between mb-2">
                <span className="text-blue-400 font-bold text-sm uppercase">{clue.direction} {clue.number}</span>
                <span className="text-gray-500 text-xs">{clue.answer.length} letters</span>
            </div>
            <p className="text-white mb-3 text-lg">{clue.clue}</p>
            
            <div className="flex gap-2">
               {/* Simplified input: just one box for the word, but styled like tiles if possible? 
                   Let's stick to a solid input for robustness given variable lengths. 
               */}
               <input 
                 type="text" 
                 maxLength={clue.answer.length}
                 value={inputs[clue.id] || ''}
                 onChange={(e) => handleInput(clue.id, e.target.value)}
                 disabled={showResults}
                 className={`w-full bg-black/50 border-2 p-3 font-mono text-xl tracking-[0.5em] uppercase rounded focus:outline-none transition-colors
                    ${showResults 
                        ? (isCorrect(clue) ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400')
                        : 'border-slate-600 text-white focus:border-blue-500'}`}
                 placeholder={"_".repeat(clue.answer.length)}
               />
            </div>
            {showResults && !isCorrect(clue) && (
                <p className="text-red-400 text-xs mt-2">Answer: {clue.answer}</p>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-8 text-center">
        {!showResults ? (
            <Button label="Decrypt" onClick={() => setShowResults(true)} variant="primary" />
        ) : (
             <div className="animate-fade-in-up">
                 <h3 className="text-2xl font-bold text-white mb-4">
                     Score: {data.filter(c => isCorrect(c)).length} / {data.length}
                 </h3>
                 <Button label="Close" onClick={onBack} variant="standoff" />
             </div>
        )}
      </div>
    </div>
  );
};

export default CrosswordGame;
