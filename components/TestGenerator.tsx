
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Printer, RefreshCw, Layers, CheckSquare, Settings } from 'lucide-react';
import Button from './Button';
import { generateTest } from '../utils/generatorEngine';
import CombatQuiz from './CombatQuiz';

const TOPICS = [
  { id: 'present_simple', label: 'Present Simple' },
  { id: 'present_continuous', label: 'Present Continuous' },
  { id: 'past_simple', label: 'Past Simple' },
  { id: 'past_continuous', label: 'Past Continuous' },
  { id: 'future_plans', label: 'Future Plans' },
  { id: 'relative_clauses', label: 'Relative Clauses' },
  { id: 'articles_quantifiers', label: 'Articles & Quantifiers' }
];

const TestGenerator: React.FC = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['present_simple']);
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
          title="Custom Generated Exam" 
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up pb-20">
      <div className="text-center print:hidden">
        <h1 className="text-4xl md:text-6xl font-hud text-white mb-2 flex items-center justify-center gap-4">
          <Settings className="text-blue-500 w-12 h-12 animate-spin-slow" />
          TEST GENERATOR
        </h1>
        <p className="text-gray-400 font-mono">Algorithm: UNLIMITED VARIATIONS // Status: OFFLINE READY</p>
      </div>

      {mode === 'setup' && (
        <div className="grid md:grid-cols-2 gap-8 print:hidden">
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="text-blue-400" /> Select Topics
            </h3>
            <div className="space-y-3">
              {TOPICS.map(topic => (
                <label key={topic.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors border border-transparent hover:border-gray-600">
                  <div className={`w-6 h-6 rounded flex items-center justify-center border-2 transition-colors ${selectedTopics.includes(topic.id) ? 'bg-blue-600 border-blue-600' : 'border-gray-500'}`}>
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
                <Settings className="text-purple-400" /> Configuration
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Question Count</span>
                    <span className="text-blue-400 font-bold font-mono">{questionCount}</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    step="5"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
                
                <div className="bg-black/30 p-4 rounded-lg text-sm text-gray-400 font-mono">
                  <p>Estimated Duration: {Math.ceil(questionCount * 0.8)} mins</p>
                  <p>Difficulty: Adaptive</p>
                  <p>Variations: ∞</p>
                </div>

                <Button 
                  label="GENERATE EXAM" 
                  variant="primary" 
                  onClick={handleGenerate}
                  className="w-full py-4 text-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"
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
          {/* Screen Only Header */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b-2 border-black print:hidden">
            <h2 className="text-2xl font-bold">Preview Mode</h2>
            <div className="flex gap-4">
              <button onClick={() => setMode('setup')} className="text-gray-600 hover:text-black font-bold">Edit Settings</button>
              <Button label="Print Test" onClick={handlePrint} variant="standoff" icon={<Printer />} className="bg-gray-800 text-white" />
              <Button label="Play Interactive" onClick={() => setMode('play')} variant="primary" />
            </div>
          </div>

          {/* Printable Area */}
          <div className="print-content">
            <div className="text-center mb-8 border-b-2 border-black pb-4">
              <h1 className="text-4xl font-serif font-bold mb-2">ENGLISH GRAMMAR EXAM</h1>
              <div className="flex justify-between text-sm font-mono mt-4">
                <span>Name: _______________________</span>
                <span>Date: ________________</span>
                <span>Score: _____ / {questionCount}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 print:grid-cols-2">
              {generatedTest.map((q, idx) => (
                <div key={q.id} className="mb-2 break-inside-avoid">
                  <p className="font-bold mb-1 text-lg">{idx + 1}. {q.question.replace('_______', '______________')}</p>
                  <div className="pl-4 flex flex-wrap gap-4 text-sm font-serif">
                    {q.options.map((opt: string, i: number) => (
                      <span key={i} className="flex items-center gap-1">
                        <span className="w-4 h-4 border border-black rounded-full inline-block"></span>
                        {String.fromCharCode(97 + i)}) {opt}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t-2 border-black text-center text-sm text-gray-500">
              Generated by Grammar Legends Engine • {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media print {
          @page {
            margin: 20mm;
            size: auto;
          }

          html, body {
            height: auto;
            min-height: 100%;
            overflow: visible !important;
            background: white !important;
            color: black !important;
          }

          /* Hide everything by default */
          body * {
            visibility: hidden;
          }

          /* Ensure root container doesn't block content */
          #root {
            visibility: hidden;
            overflow: visible !important;
          }

          /* Make print content visible and force styles */
          .print-content, .print-content * {
            visibility: visible !important;
            color: black !important;
            text-shadow: none !important;
          }

          .print-content {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            min-height: 100vh;
            margin: 0 !important;
            padding: 0 !important;
            background-color: white !important;
            z-index: 99999;
          }

          /* Hide interactive elements in print */
          button, .print:hidden {
            display: none !important;
          }

          /* Ensure grid layout works in print */
          .print\\:grid-cols-2 {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestGenerator;
