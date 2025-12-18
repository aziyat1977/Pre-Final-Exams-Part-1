
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crosshair, Trophy, Clock } from 'lucide-react';
import { QuizQuestion } from '../types';
import Button from './Button';

interface CombatQuizProps {
  questions: QuizQuestion[];
  onBack: () => void;
  isKahootMode: boolean;
  onComplete?: (score: number) => void;
  title?: string;
}

const CombatQuiz: React.FC<CombatQuizProps> = ({ questions, onBack, isKahootMode, onComplete, title }) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showResult, setShowResult] = useState<'correct' | 'wrong' | null>(null);
  const [gameOver, setGameOver] = useState(false);

  // Reset state when questions change
  useEffect(() => {
    setCurrentQ(0);
    setScore(0);
    setStreak(0);
    setGameOver(false);
    setTimeLeft(15);
  }, [questions]);

  useEffect(() => {
    if (isKahootMode && !gameOver && showResult === null) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            handleAnswer('TIMEOUT');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [currentQ, gameOver, showResult, isKahootMode]);

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQ].correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + (isKahootMode ? timeLeft * 10 + 100 : 100));
      setStreak(prev => prev + 1);
      setShowResult('correct');
    } else {
      setStreak(0);
      setShowResult('wrong');
    }

    setTimeout(() => {
      setShowResult(null);
      if (currentQ < questions.length - 1) {
        setCurrentQ(prev => prev + 1);
        setTimeLeft(15);
      } else {
        setGameOver(true);
        if(onComplete) onComplete(score + (isCorrect ? 100 : 0));
      }
    }, 1500);
  };

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-fade-in p-8 bg-black/90 absolute inset-0 z-50">
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }} 
          className="bg-gray-800/80 backdrop-blur-xl p-10 rounded-3xl border-4 border-yellow-500 shadow-[0_0_50px_rgba(234,179,8,0.3)]"
        >
          <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-4 animate-bounce" />
          <h2 className="text-4xl font-hud font-bold mb-2 text-white">MISSION COMPLETED</h2>
          <p className="text-6xl font-gta text-green-400 mb-6">{score} XP</p>
          <Button label="Return to Base" onClick={onBack} variant="standoff" className="w-full bg-blue-600 text-white" />
        </motion.div>
      </div>
    );
  }

  const question = questions[currentQ];

  return (
    <div className="w-full relative h-full flex flex-col justify-center">
      {/* HUD Header */}
      <div className="flex justify-between items-center mb-8 bg-black/60 p-4 rounded-xl border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-4">
            <Button label="Exit" onClick={onBack} variant="standoff" className="py-1 px-3 text-xs" />
          <div className="text-yellow-400 font-hud text-xl flex items-center gap-2">
            <Trophy size={20} />
            <span>{score}</span>
          </div>
          <div className="text-orange-500 font-hud text-xl flex items-center gap-2">
            <span className="text-xs uppercase">Streak</span>
            <span>x{streak}</span>
          </div>
        </div>
        
        {title && <h3 className="text-white font-bold hidden md:block">{title}</h3>}

        <div className="flex items-center gap-4">
             <span className="text-gray-400 text-sm">Q: {currentQ + 1}/{questions.length}</span>
            {isKahootMode && (
            <div className={`flex items-center gap-2 font-block text-2xl ${timeLeft < 5 ? 'text-red-500 animate-pulse' : 'text-white'}`}>
                <Clock />
                {timeLeft}s
            </div>
            )}
        </div>
      </div>

      {/* Question Card */}
      <motion.div 
        key={currentQ}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border-t border-slate-600 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-4 opacity-20">
          <Crosshair size={100} />
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-8 font-hud leading-relaxed">
          {question.question.includes('_______') ? (
              question.question.split('_______').map((part, i, arr) => (
                <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                    <span className="inline-block w-24 border-b-4 border-yellow-400 mx-2 animate-pulse bg-white/10 h-8 align-middle rounded"></span>
                )}
                </React.Fragment>
            ))
          ) : (
              question.question
          )}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {question.options.map((opt, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswer(opt)}
              disabled={showResult !== null}
              className={`p-6 text-xl text-left rounded-xl border-2 font-bold transition-all relative overflow-hidden group
                ${showResult === 'correct' && opt === question.correctAnswer ? 'bg-green-600 border-green-400 text-white' : 
                  showResult === 'wrong' && opt === question.correctAnswer ? 'bg-green-600 border-green-400 text-white opacity-50' :
                  'bg-slate-700/50 border-slate-600 hover:border-blue-400 text-slate-200'}`}
            >
              <div className="absolute inset-0 bg-blue-400/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-black/30 flex items-center justify-center text-sm">{String.fromCharCode(65 + idx)}</span>
                {opt}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Result Overlay */}
      <AnimatePresence>
        {showResult && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-50"
          >
            {showResult === 'correct' ? (
              <div className="bg-green-500 text-black font-gta text-6xl uppercase p-8 border-8 border-black shadow-2xl rotate-[-5deg]">
                Wasted... NOT!
                <div className="text-xl mt-2 font-sans bg-black text-white p-2 text-center">Correct Answer +XP</div>
              </div>
            ) : (
              <div className="bg-red-600 text-white font-gta text-6xl uppercase p-8 border-8 border-white shadow-2xl rotate-[5deg]">
                WASTED
                <div className="text-xl mt-2 font-sans bg-black text-white p-2 text-center">Correct: {question.correctAnswer}</div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CombatQuiz;
