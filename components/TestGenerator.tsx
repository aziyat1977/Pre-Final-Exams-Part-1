
import React, { useState } from 'react';
import { Printer, RefreshCw, Zap, Settings, CheckSquare, FileText } from 'lucide-react';
import Button from './Button';
import { generateLimitlessTest } from '../utils/limitlessEngine';
import { QuizQuestion, GeneratorLevel } from '../types';

const TestGenerator: React.FC = () => {
  const [level, setLevel] = useState<GeneratorLevel>('B1');
  const [count, setCount] = useState(20);
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);

  const handleGenerate = () => {
    const newTest = generateLimitlessTest(level, count);
    setQuestions(newTest);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up pb-20">
      
      {/* --- CONFIGURATION PANEL (HIDDEN ON PRINT) --- */}
      <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl print:hidden">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-hud text-white mb-2 flex items-center justify-center gap-4">
            <Zap className="text-blue-400 w-10 h-10 animate-pulse" />
            LIMITLESS GENERATOR
          </h1>
          <p className="text-gray-400 font-mono">Infinite Variations // Oxford Navigate Compatible</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Level Selector */}
          <div className="space-y-4">
            <label className="block text-gray-400 font-bold uppercase text-sm">Target Level</label>
            <div className="flex gap-4">
              <button 
                onClick={() => setLevel('B1')}
                className={`flex-1 py-4 rounded-xl font-bold transition-all border-2 ${level === 'B1' ? 'bg-blue-600 border-blue-400 text-white shadow-lg' : 'bg-gray-700 border-gray-600 text-gray-400'}`}
              >
                B1 (Pre-Int)
              </button>
              <button 
                onClick={() => setLevel('B1+')}
                className={`flex-1 py-4 rounded-xl font-bold transition-all border-2 ${level === 'B1+' ? 'bg-purple-600 border-purple-400 text-white shadow-lg' : 'bg-gray-700 border-gray-600 text-gray-400'}`}
              >
                B1+ (Int)
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {level === 'B1' ? 'Topics: Present Simple/Cont, Past, Will/Going to, 1st Cond.' : 'Topics: Pres Perf Cont, Past Perf, Passive, Reported, 3rd Cond.'}
            </p>
          </div>

          {/* Count Selector */}
          <div className="space-y-4">
            <label className="block text-gray-400 font-bold uppercase text-sm">Question Count: <span className="text-white">{count}</span></label>
            <input 
              type="range" 
              min="10" 
              max="50" 
              step="5"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
             <div className="flex justify-between text-xs text-gray-500 font-mono">
                <span>10</span>
                <span>25</span>
                <span>50</span>
             </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4 justify-end">
            <Button 
              label="GENERATE TEST" 
              onClick={handleGenerate} 
              variant="primary" 
              className="w-full py-4 text-lg bg-gradient-to-r from-blue-600 to-purple-600 border-none"
              icon={<RefreshCw />}
            />
          </div>
        </div>
      </div>

      {/* --- PREVIEW & PRINT AREA --- */}
      {questions && (
        <div className="relative">
           {/* Print FAB */}
           <button 
             onClick={handlePrint}
             className="absolute -top-4 right-4 bg-green-500 hover:bg-green-400 text-black font-bold p-4 rounded-full shadow-lg z-50 flex items-center gap-2 print:hidden transition-transform hover:scale-110"
           >
             <Printer size={24} /> PRINT A4
           </button>

           {/* The Paper Sheet */}
           <div className="bg-white text-black p-10 shadow-2xl min-h-[1000px] print:p-0 print:shadow-none mx-auto max-w-[210mm] print:max-w-none">
              
              {/* Header */}
              <div className="border-b-2 border-black pb-6 mb-8 flex justify-between items-end">
                <div>
                  <h1 className="text-3xl font-serif font-bold uppercase tracking-wider mb-1">English Proficiency Test</h1>
                  <p className="text-sm font-bold text-gray-600 uppercase">Level: {level} // Oxford Navigate Curriculum</p>
                </div>
                <div className="text-right font-mono text-sm space-y-2">
                   <div className="border-b border-gray-400 w-48 text-left px-1 py-1">Name:</div>
                   <div className="border-b border-gray-400 w-48 text-left px-1 py-1">Date:</div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-gray-100 p-4 rounded mb-8 border border-gray-300 text-sm">
                <strong>INSTRUCTIONS:</strong> Choose the correct form to complete the sentences. Pay attention to the context and time markers. 
                <span className="italic ml-2">(Score: _____ / {questions.length})</span>
              </div>

              {/* Questions Grid - Using pure inline styles for print grid to avoid Tailwind compilation issues in some environments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 print-grid">
                 {questions.map((q, idx) => (
                    <div key={q.id} className="break-inside-avoid">
                       <p className="font-bold mb-2 text-base leading-snug">
                         {idx + 1}. {q.question.replace('_______', '__________________')}
                       </p>
                       <div className="grid grid-cols-2 gap-2 text-sm">
                          {q.options.map((opt, i) => (
                             <div key={i} className="flex items-center gap-2">
                                <span className="w-5 h-5 border border-black rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">
                                   {String.fromCharCode(65 + i)}
                                </span>
                                <span>{opt}</span>
                             </div>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>

              {/* Footer / Branding */}
              <div className="mt-12 pt-4 border-t border-gray-300 text-center text-xs text-gray-400 font-mono print:hidden">
                 Generated by Grammar Legends Engine v2.5
              </div>

              {/* --- ANSWER KEY (Always breaks to new page or bottom) --- */}
              <div className="mt-16 pt-8 border-t-2 border-dashed border-gray-400 break-before-page print:break-before-page">
                 <h3 className="font-bold text-lg uppercase mb-4 flex items-center gap-2">
                   <FileText size={20} /> Teacher's Answer Key
                 </h3>
                 <div className="grid grid-cols-5 md:grid-cols-10 gap-2 text-xs font-mono">
                    {questions.map((q, idx) => (
                       <div key={q.id} className="border border-gray-300 p-1 text-center">
                          <span className="font-bold text-gray-500 mr-1">{idx+1}.</span>
                          {q.correctAnswer}
                       </div>
                    ))}
                 </div>
              </div>

           </div>
        </div>
      )}
      
      {/* Print Styles Injection - Simplified to avoid 'Invalid Token' errors with escaping */}
      <style>{`
        @media print {
          @page { margin: 15mm; size: A4; }
          body { background: white; color: black; }
          /* Manually define print grid to be safe */
          .print-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; }
          .break-inside-avoid { break-inside: avoid; }
          .break-before-page { break-before: page; }
        }
      `}</style>
    </div>
  );
};

export default TestGenerator;
