import React from 'react';
import { motion } from 'framer-motion';

export const Logo = () => (
  <motion.div 
    className="flex items-center space-x-2"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-300 rounded-lg flex items-center justify-center">
      <span className="text-2xl font-bold text-white">P</span>
    </div>
    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
      PhysioLearn
    </h1>
  </motion.div>
);