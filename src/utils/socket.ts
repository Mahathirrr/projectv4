import { io } from 'socket.io-client';

export const socket = io('http://localhost:5000');

socket.on('connect', () => {
  console.log('Connected to Python backend');
});

socket.on('pose_analysis', (data) => {
  console.log('Received pose analysis:', data);
});