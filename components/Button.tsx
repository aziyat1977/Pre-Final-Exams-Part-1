import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gta' | 'hogwarts' | 'roblox' | 'standoff';
  label: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', label, icon, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400",
    gta: "bg-green-500 hover:bg-green-400 text-black font-gta uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_#000]",
    hogwarts: "bg-[#2A1810] text-[#D4AF37] font-magic border-2 border-[#D4AF37] shadow-[0_0_10px_#D4AF37] hover:text-white",
    roblox: "bg-red-500 hover:bg-red-400 text-white font-block border-b-4 border-red-800 rounded-lg shadow-lg",
    standoff: "bg-slate-800 text-orange-500 border-2 border-orange-500 font-bold hover:bg-slate-700",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  );
};

export default Button;