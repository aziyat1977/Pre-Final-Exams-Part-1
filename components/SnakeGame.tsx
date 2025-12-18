
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { SnakeLevel } from '../types';

interface SnakeGameProps {
  customLevels?: SnakeLevel[];
  onBack?: () => void;
}

const GRID_SIZE = 20;
const CELL_SIZE = 20;

// Default Fallback Levels
const DEFAULT_LEVELS = [
  { prompt: "I met him __ 2 PM", correct: "at", options: ["at", "on", "in"] },
  { prompt: "He ___ wearing red", correct: "was", options: ["was", "were", "is"] },
  { prompt: "Boy ___ helps me", correct: "who", options: ["who", "which", "where"] }
];

const SnakeGame: React.FC<SnakeGameProps> = ({ customLevels, onBack }) => {
  const levels = customLevels || DEFAULT_LEVELS;
  
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [foods, setFoods] = useState<{x: number, y: number, text: string}[]>([]);
  const [direction, setDirection] = useState<'UP' | 'DOWN' | 'LEFT' | 'RIGHT'>('RIGHT');
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [levelIndex, setLevelIndex] = useState(0);
  const [message, setMessage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const spawnFoods = () => {
    const currentLevel = levels[levelIndex % levels.length];
    const newFoods = [];
    // Spawn 3 options
    for (const opt of currentLevel.options) {
      let valid = false;
      let x = 0, y = 0;
      while (!valid) {
        x = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1; // Margin
        y = Math.floor(Math.random() * (GRID_SIZE - 2)) + 1;
        // Check collision with snake or other foods
        valid = !snake.some(s => s.x === x && s.y === y) && !newFoods.some(f => Math.abs(f.x - x) < 3 && Math.abs(f.y - y) < 3);
      }
      newFoods.push({ x, y, text: opt });
    }
    setFoods(newFoods);
  };

  useEffect(() => {
    if (isPlaying && foods.length === 0) {
      spawnFoods();
    }
  }, [isPlaying, foods, levelIndex]);

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

        // Collision Check (Walls or Self)
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE || prevSnake.some(s => s.x === head.x && s.y === head.y)) {
          setIsPlaying(false);
          setMessage("GAME OVER");
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];
        
        // Collision with Food
        const eatenFoodIndex = foods.findIndex(f => f.x === head.x && f.y === head.y);

        if (eatenFoodIndex !== -1) {
          const eatenFood = foods[eatenFoodIndex];
          const currentLevel = levels[levelIndex % levels.length];
          
          if (eatenFood.text === currentLevel.correct) {
            // Correct!
            setScore(s => s + 100);
            if (levelIndex + 1 >= levels.length) {
                setIsPlaying(false);
                setMessage("VICTORY!");
                return newSnake;
            }
            setLevelIndex(l => l + 1);
            setFoods([]); // Clear foods to trigger respawn
            newSnake.pop(); // Don't grow too fast
          } else {
            // Wrong!
            setIsPlaying(false);
            setMessage(`Wrong! Correct was: ${currentLevel.correct}`);
            return prevSnake;
          }
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 200); // Slightly slower for reading

    return () => clearInterval(moveSnake);
  }, [isPlaying, direction, foods, levelIndex]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp': if (direction !== 'DOWN') setDirection('UP'); break;
      case 'ArrowDown': if (direction !== 'UP') setDirection('DOWN'); break;
      case 'ArrowLeft': if (direction !== 'RIGHT') setDirection('LEFT'); break;
      case 'ArrowRight': if (direction !== 'LEFT') setDirection('RIGHT'); break;
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 p-6 rounded-3xl border-4 border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.3)] max-w-md mx-auto">
      <div className="flex justify-between w-full mb-4 items-center">
         <h2 className="text-xl font-block text-white">SNAKE LOGIC</h2>
         {onBack && <Button label="Exit" onClick={onBack} variant="roblox" className="py-1 px-2 text-xs" />}
      </div>
      
      <div className="mb-4 bg-gray-800 p-3 rounded-lg w-full text-center border border-gray-600 min-h-[80px] flex items-center justify-center flex-col">
         {message ? (
             <p className={`font-bold text-xl ${message === 'VICTORY!' ? 'text-green-400' : 'text-red-400'}`}>{message}</p>
         ) : (
             <>
                <p className="text-yellow-400 font-bold mb-1 text-xs uppercase">Mission:</p>
                <p className="text-white text-lg font-bold">{levels[levelIndex % levels.length].prompt}</p>
             </>
         )}
      </div>

      <div 
        className="relative bg-black border-4 border-gray-700 rounded-lg overflow-hidden outline-none"
        style={{ width: GRID_SIZE * CELL_SIZE, height: GRID_SIZE * CELL_SIZE }}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        ref={containerRef}
      >
        {snake.map((segment, i) => (
          <div
            key={i}
            className="absolute bg-green-500 border border-green-700"
            style={{
              left: segment.x * CELL_SIZE,
              top: segment.y * CELL_SIZE,
              width: CELL_SIZE,
              height: CELL_SIZE,
              borderRadius: i === 0 ? '4px' : '2px',
              zIndex: 10
            }}
          />
        ))}
        
        {foods.map((food, i) => (
            <div
                key={i}
                className="absolute flex flex-col items-center justify-center z-20"
                style={{
                    left: food.x * CELL_SIZE - 20, // Offset for text centering
                    top: food.y * CELL_SIZE - 20,
                    width: 60, // Wider area for text
                    height: 60
                }}
            >
                <span className="text-[10px] text-white font-bold bg-black/70 px-1 rounded mb-1 whitespace-nowrap">{food.text}</span>
                <div className="w-5 h-5 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_red]" />
            </div>
        ))}
        
        {!isPlaying && (
           <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
             <p className="text-white font-block mb-4 text-xl">Score: {score}</p>
             <Button 
                label={score > 0 || message ? "Try Again" : "Start Game"} 
                variant="roblox" 
                onClick={() => {
                   setSnake([{ x: 10, y: 10 }]);
                   setScore(0);
                   setLevelIndex(0);
                   setFoods([]);
                   setMessage(null);
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
