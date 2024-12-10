import React, { useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { socket } from '../utils/socket';

interface CameraViewProps {
  active: boolean;
  onToggle: () => void;
}

export const CameraView: React.FC<CameraViewProps> = ({ active, onToggle }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (active && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            
            // Send video frames to Python backend
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            
            const sendFrame = () => {
              if (context && videoRef.current) {
                canvas.width = videoRef.current.videoWidth;
                canvas.height = videoRef.current.videoHeight;
                context.drawImage(videoRef.current, 0, 0);
                const frame = canvas.toDataURL('image/jpeg', 0.5);
                socket.emit('video_frame', { frame });
              }
              if (active) {
                requestAnimationFrame(sendFrame);
              }
            };
            
            sendFrame();
          }
        })
        .catch(err => console.error('Error accessing camera:', err));
    }
  }, [active]);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`absolute top-4 right-4 z-10 px-6 py-3 rounded-lg flex items-center space-x-2 ${
          active
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
        onClick={onToggle}
      >
        <Camera className="w-5 h-5" />
        <span>{active ? 'Stop Camera' : 'Start Camera'}</span>
      </motion.button>

      <div className="h-[80vh] bg-gray-900 rounded-lg overflow-hidden relative">
        {active ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Click 'Start Camera' to begin analysis</p>
          </div>
        )}
      </div>
    </div>
  );
};