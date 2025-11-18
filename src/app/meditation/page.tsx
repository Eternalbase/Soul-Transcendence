'use client';
import { Livepeer } from 'livepeer';
import { useState } from 'react';

const livepeer = new Livepeer({ apiKey: process.env.NEXT_PUBLIC_LIVEPEER_KEY! });

export default function MeditationRoom() {
  const [streamId, setStreamId] = useState<string | null>(null);

  const createStream = async () => {
    const stream = await livepeer.stream.create({
      name: `Void Meditation ${Date.now()}`,
      profiles: [{ width: 1920, height: 1080 }],
    });
    setStreamId(stream.id);
  };

  return (
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-8 text-red-500 glitch" data-text="MEDITATE OR PERISH">
        MEDITATE OR PERISH
      </h1>

      {!streamId ? (
        <button onClick={createStream} className="px-12 py-8 text-3xl bg-purple-900/80 rounded-full hover:bg-purple-800 animate-pulse">
          BEGIN COLLECTIVE MEDITATION
        </button>
      ) : (
        <div>
          <iframe
            src={`https://lvpr.tv/v/${streamId}?autoplay=true&muted=false`}
            className="w-full h-96 rounded-xl border-4 border-red-900/50"
            allow="autoplay; encrypted-media"
          />
          <p className="mt-4 text-xl">Keep this tab open. Every hour = +meditation blocks</p>
          <MeditationTimer />
        </div>
      )}
    </div>
  );
}
