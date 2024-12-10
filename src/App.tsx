import React, { useState } from 'react';
import { Activity, Dumbbell } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './components/Logo';
import { ExerciseCard } from './components/ExerciseCard';
import { CameraView } from './components/CameraView';

const exercises = [
  {
    id: 'squat',
    name: 'Squat Analysis',
    icon: <Dumbbell className="w-6 h-6" />,
    description: 'Perfect your squat form with real-time AI feedback',
    active: true
  },
  {
    id: 'pushup',
    name: 'Push-up Form',
    icon: <Activity className="w-6 h-6" />,
    description: 'Master the perfect push-up technique',
    active: false
  },
  {
    id: 'plank',
    name: 'Plank Position',
    icon: <Activity className="w-6 h-6" />,
    description: 'Maintain proper plank alignment',
    active: false
  }
];

function App() {
  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);
  const [cameraActive, setCameraActive] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <header className="bg-[#12172B] border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex space-x-6">
            <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How it Works</a>
            <a href="#exercises" className="hover:text-blue-400 transition-colors">Exercises</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-[250px,1fr] gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Exercise Selection</h2>
            <div className="space-y-3">
              {exercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  name={exercise.name}
                  icon={exercise.icon}
                  description={exercise.description}
                  active={exercise.active}
                  selected={selectedExercise.id === exercise.id}
                  onClick={() => setSelectedExercise(exercise)}
                />
              ))}
            </div>

            {selectedExercise.active && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20"
              >
                <h3 className="font-semibold text-blue-400 mb-2">How it Works</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                  <li>Position yourself in front of the camera</li>
                  <li>Ensure your full body is visible</li>
                  <li>Start the camera to begin analysis</li>
                  <li>Follow the real-time feedback</li>
                </ol>
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
            <CameraView
              active={cameraActive}
              onToggle={() => setCameraActive(!cameraActive)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;