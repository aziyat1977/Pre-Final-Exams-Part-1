
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DragDropData, DragItem } from '../types';
import Button from './Button';

interface DragDropGameProps {
  data: DragDropData;
  onComplete: (score: number) => void;
  onBack: () => void;
}

const DragDropGame: React.FC<DragDropGameProps> = ({ data, onComplete, onBack }) => {
  const [items, setItems] = useState<DragItem[]>(data.items);
  const [droppedItems, setDroppedItems] = useState<{ [key: string]: DragItem[] }>(
    Object.fromEntries(data.groups.map(g => [g, []]))
  );
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const handleDragStart = (e: React.DragEvent, item: DragItem) => {
    e.dataTransfer.setData('itemId', item.id);
  };

  const handleDrop = (e: React.DragEvent, group: string) => {
    const itemId = e.dataTransfer.getData('itemId');
    const item = items.find(i => i.id === itemId);
    
    if (item) {
      setItems(prev => prev.filter(i => i.id !== itemId));
      setDroppedItems(prev => ({
        ...prev,
        [group]: [...prev[group], item]
      }));
    }
  };

  const checkResults = () => {
    let correct = 0;
    Object.keys(droppedItems).forEach(group => {
      droppedItems[group].forEach(item => {
        if (item.group === group) correct++;
      });
    });
    setScore(correct);
    setCompleted(true);
    if (correct === data.items.length) {
        onComplete(correct * 100);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl border-2 border-blue-500 min-h-[500px] flex flex-col">
      <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{data.title}</h2>
          <Button label="Exit" onClick={onBack} variant="standoff" className="text-xs py-2 px-4" />
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8 flex-1">
        {data.groups.map(group => (
          <div
            key={group}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, group)}
            className="bg-gray-800 rounded-xl p-4 border-2 border-dashed border-gray-600 min-h-[200px]"
          >
            <h3 className="text-center font-bold text-xl mb-4 text-blue-400">{group}</h3>
            <div className="space-y-2">
              {droppedItems[group].map(item => (
                <div 
                    key={item.id} 
                    className={`p-3 rounded-lg font-bold text-center ${completed 
                        ? (item.group === group ? 'bg-green-600' : 'bg-red-600') 
                        : 'bg-gray-700'}`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!completed && items.length > 0 && (
        <div className="flex flex-wrap gap-3 justify-center bg-black/50 p-4 rounded-xl min-h-[100px]">
          {items.map(item => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg cursor-move font-bold shadow-lg active:scale-95 transition-transform"
            >
              {item.content}
            </div>
          ))}
        </div>
      )}

      {items.length === 0 && !completed && (
        <div className="text-center mt-6">
            <Button label="Check Answers" onClick={checkResults} variant="primary" />
        </div>
      )}

      {completed && (
        <div className="text-center mt-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-2 text-yellow-400">Score: {score} / {data.items.length}</h3>
            <Button label="Finish" onClick={onBack} variant="primary" />
        </div>
      )}
    </div>
  );
};

export default DragDropGame;
