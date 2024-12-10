import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ExerciseCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  active: boolean;
  selected: boolean;
  onClick: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  name,
  icon,
  description,
  active,
  selected,
  onClick,
}) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`w-full p-4 rounded-lg ${
      selected
        ? 'bg-blue-600 bg-opacity-50'
        : 'bg-gray-800 hover:bg-gray-700'
    } transition-colors`}
    onClick={onClick}
  >
    <div className="flex items-center space-x-3">
      {icon}
      <div className="text-left">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-400">{description}</p>
        {!active && (
          <span className="inline-block mt-2 text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded">
            Coming Soon
          </span>
        )}
      </div>
    </div>
  </motion.button>
);