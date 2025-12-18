
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Printer, RefreshCw, Layers, CheckSquare, Settings, Zap } from 'lucide-react';
import Button from './Button';
import { generateTest } from '../utils/generatorEngine';
import CombatQuiz from './CombatQuiz';

const TOPICS = [
  { id: 'present_perfect_continuous', label: 'Present Perfect Continuous (B1+)' },
  { id: 'past_perfect', label: 'Past Perfect Narrative (B1)' },
  { id: 'third_conditional', label: 'Third Conditional (B1+)' },
  { id: 'modals_deduction_past', label: 'Modals of Deduction: Past (B1+)' },
  { id: 'passive_mixed', label: 'Mixed Passive Tenses (B1+)' },
  { id: 'reported_speech_advanced', label: 'Reported Questions (B1+)' },
  { id: 'wish_regret', label: 'Wishes & Regrets (B1+)' },
  { id: 'gerund_inf_meaning', label: 'Gerund vs Inf: Meaning Change (B1+)' },
  { id: 'relative_clauses_non_defining', label: 'Non-Defining Relative Clauses (B1)' },
  { id: 'used_to_be_used_to', label: 'Used to vs Be used to (B1+)' },
  { id: 'mixed_tenses', label: 'Mixed Tense Battle (B1/B1+)' }
];

const TestGenerator: React.FC = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['mixed_tenses']);
  const [questionCount, setQuestionCount] = useState(20);
  const [generatedTest, setGeneratedTest] = useState<any[] | null>(null);
  const [mode, setMode] = useState<'setup' | 'preview' | 'play'>('setup');

  const toggleTopic = (id: string) => {
    setSelectedTopics(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const handleGenerate = () => {
    if (selectedTopics.length === 0) return;
    const test = generateTest(selectedTopics, questionCount);
    setGeneratedTest(test);
    setMode('preview');
  };

  const handlePrint = () => {
    window.print();
  };

  if (mode === 'play' && generatedTest) {
    return (
      <div className="h-full">
        <CombatQuiz 
          questions={generatedTest} 
          onBack={() => setMode('setup')} 
          isKahootMode={false} 
          title="B1+ Proficiency Exam" 
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up pb-20">
      <div className="text-center print:hidden">
        <h1 className="text-4xl md:text-6xl font-hud text-white mb-2 flex items-center justify-center gap-4">
          <Zap className="text-yellow-400 w-12 h-12 animate-pulse" />
          ELITE GENERATOR
        </h1>
        <p className="text-gray-400 font-mono">B1+ Intelligence Logic // Advanced Tense Calibration</p>
      </div>

      {mode === 'setup' && (
        <div className="grid md:grid-cols-2 gap-8 print:hidden">
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl overflow-y-auto max-h-[600px] scrollbar-hide">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="text-blue-400" /> Profiency Levels
            </h3>
            <div className="space-y-3">
              {TOPICS.map(topic => (
                <label key={topic.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors border border-transparent hover:border-gray-600">
                  <div className={`w-6 h-6 rounded flex items-center justify-center border-2 transition-colors ${selectedTopics.includes(topic.id) ? 'bg-yellow-600 border-yellow-400' : 'border-gray-500'}`}>
                    {selectedTopics.includes(topic.id) && <CheckSquare size={16} className="text-white" />}
                  </div>
                  <input 
                    type="checkbox" 
                    className="hidden" 
                    checked={selectedTopics.includes(topic.id)}
                    onChange={() => toggleTopic(topic.id)}
                  />
                  <span className={selectedTopics.includes(topic.id) ? 'text-white font-bold' : 'text-gray-400'}>{topic.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Settings className="text-purple-400" /> Parameters
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Item Count</span>
                    <span className="text-yellow-400 font-bold font-mono">{questionCount}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="50" 
                    step="5"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                  />
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg text-sm text-gray-400 font-mono space-y-2">
                  <p className="flex justify-between"><span>Cognitive Load:</span> <span className="text-white">Medium-High</span></p>
                  <p className="flex justify-between"><span>CEFR Mapping:</span> <span className="text-white">B1 - B2</span></p>
                  <p className="flex justify-between"><span>Engine Integrity:</span> <span className="text-green-500">Verified</span></p>
                </div>

                <Button 
                  label="CALIBRATE & GENERATE" 
                  variant="primary" 
                  onClick={handleGenerate}
                  className="w-full py-4 text-xl bg-gradient-to-r from-blue-600 to-purple-600 border-none"
                  disabled={selectedTopics.length === 0}
                  icon={<RefreshCw className={selectedTopics.length > 0 ? "animate-spin-once" : ""} />}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'preview' && generatedTest && (
        <div className="bg-white text-black p-8 rounded-xl shadow-2xl relative min-h-[600px]">
          <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-black print:hidden">
            <h2 className="text-2xl font-bold">Exam Preview</h2>
            <div className="flex gap-4">
              <button onClick={() => setMode('setup')} className="text-gray-600 hover:text-black font-bold">Reselect</button>
              <Button label="Save PDF/Print" onClick={handlePrint} variant="standoff" icon={<Printer />} className="bg-gray-800 text-white" />
              <Button label="Interactive Mission" onClick={() => setMode('play')} variant="primary" />
            </div>
          </div>

          <div className="print-content">
            <div className="text-center mb-8 border-b-2 border-black pb-4">
              <h1 className="text-4xl font-serif font-bold mb-2 uppercase">Grammar Proficiency Exam</h1>
              <p className="text-sm italic">CEFR LEVEL B1/B1+</p>
              <div className="flex justify-between text-sm font-mono mt-6">
                <span>Candidate: _______________________</span>
                <span>ID: ________________</span>
                <span>Score: _____ / {questionCount}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 print-grid">
              {generatedTest.map((q, idx) => (
                <div key={q.id} className="mb-2 break-inside-avoid border-l-2 border-gray-100 pl-4">
                  <p className="font-bold mb-3 text-lg leading-snug">{idx + 1}. {q.question.replace('_______', '________________')}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm font-serif">
                    {q.options.map((opt: string, i: number) => (
                      <span key={i} className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-black rounded-full flex items-center justify-center text-[10px] font-bold">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t-2 border-black text-center text-xs text-gray-500 font-mono">
              GENERATED BY THE ELITE GRAMMAR ENGINE L3.0 • SECURE OFFLINE MODULE
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          @page { margin: 20mm; size: A4; }
          body * { visibility: hidden; }
          .print-content, .print-content * { visibility: visible; }
          .print-content {
            position: absolute;
            left: 0; top: 0;
            width: 100%;
            background: white !important;
            color: black !important;
          }
          .print\\:hidden { display: none !important; }
          .print-grid { display: grid !important; grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
};

export default TestGenerator;
