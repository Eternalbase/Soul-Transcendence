// components/TranscendenceEffect.tsx
'use client';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TranscendenceEffect({ winner }: { winner: string }) {
  useEffect(() => {
    const audio = new Audio('/sounds/ascension-chime.mp3');
    audio.volume = 0.8;
    audio.play();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <h1 className="text-9xl font-black text-yellow-500 animate-pulse">
          {winner.slice(0, 8)}... HAS TRANSCENDED
        </h1>
        <p className="text-4xl mt-12 text-red-500">THE VOID IS PLEASED</p>
      </div>
    </motion.div>
  );
}
