import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const GRID_SIZE = 20;
const CELL_SIZE = 20;

const QUESTIONS = [
  { q: "I met him __ 2 PM", a: "at" },
  { q: "He ___ wearing red", a: "was" },
  { q: "Boy ___ helps me", a: "who" },
  { q: "I have ___ books", a: "enough" }
];

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);

  // Focus ref for keyboard controls
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;

    const moveSnake = setInterval(() => {
      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };

        switch (direction) {
          case 'UP': head.y -= 1; break;
          case 'DOWN': head.y += 1; break;
          case 'LEFT': head.x -= 1; break;
          case 'RIGHT': head.x += 1; break;
        }

        // Collision Check
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE || prevSnake.some(s => s.x === head.x && s.y === head.y)) {
          setIsPlaying(false);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        if (head.x === food.x && head.y === food.y) {
          setScore(s => s + 1);
          setLevel(l => (l + 1) % QUESTIONS.length);
          setFood({
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE)
          });
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 150);

    return () => clearInterval(moveSnake);
  }, [isPlaying, direction, food]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp': if (direction !== 'DOWN') setDirection('UP'); break;
      case 'ArrowDown': if (direction !== 'UP') setDirection('DOWN'); break;
      case 'ArrowLeft': if (direction !== 'RIGHT') setDirection('LEFT'); break;
      case 'ArrowRight': if (direction !== 'LEFT') setDirection('RIGHT'); break;
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-3xl border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
      <h2 className="text-2xl font-block text-white mb-4 text-center">PATH TO UNIVERSITY</h2>
      
      <div className="mb-4 bg-gray-800 p-3 rounded-lg w-full text-center">
         <p className="text-yellow-400 font-bold mb-1">Fill the blank:</p>
         <p className="text-white text-lg">{QUESTIONS[level].q}</p>
         <p className="text-sm text-gray-400 mt-2">Next Food: <span className="text-green-400 font-bold">{QUESTIONS[level].a}</span></p>
      </div>

      <div 
        className="relative bg-black border-2 border-gray-700"
        style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={containerRef}
      >
        {snake.map((segment, i) => (
          <div
            key={i}
            className="absolute bg-green-500 border border-black"
            style={{
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: i === 0 ? '4px' : '0'
            }}
          />
        ))}
        <div
          className="absolute bg-red-500 rounded-full animate-pulse flex items-center justify-center text-[8px] font-bold text-white overflow-hidden"
          style={{
            left: food.x * CELL_SIZE,
            top: food.y * CELL_SIZE,
            width: CELL_SIZE,
            height: CELL_SIZE,
          }}
        >
          ?
        </div>
        
        {!isPlaying && (
           <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10">
             <p className="text-white font-block mb-4">Score: {score}</p>
             <Button 
                label={score > 0 ? "Try Again" : "Start Game"} 
                variant="roblox" 
                onClick={() => {
                   setSnake([{ x: 10, y: 10 }]);
                   setScore(0);
                   setIsPlaying(true);
                   setTimeout(() => containerRef.current?.focus(), 100);
                }} 
             />
             <p className="text-xs text-gray-400 mt-4">Use Arrow Keys</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default SnakeGame;