'use client';
import { useEffect, useState } from 'react';
import { getContract } from '@/lib/contract';
import { ethers } from 'ethers';

export default function SoulCard({ address }: { address: string }) {
  const [soul, setSoul] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const contract = await getContract();
      const s = await contract.souls(address);
      const level = await contract.currentLevel(address);
      setSoul({ ...s, level: Number(level) });
    })();
  }, [address]);

  if (!soul) return <div className="text-red-500 animate-pulse">Loading soul...</div>;

  const levelNames = ["Mortal", "Awakened", "Adept", "Ascended", "Archon", "GODFORM"];

  return (
    <div className="bg-black/80 border border-red-900/50 rounded-lg p-4 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-red-400">{soul.name || "Nameless"}</h3>
      <p className="text-sm opacity-70">{address.slice(0, 8)}...</p>
      <div className="mt-2 space-y-1 text-sm">
        <p>Level: <span className="text-purple-400">{levelNames[soul.level]}</span></p>
        <p>Souls Devoured: <span className="text-red-400">{soul.soulsCollected.toString()}</span></.npy
        <p>Meditation: <span className="text-cyan-400">{soul.meditationBlocks.toString()} blocks</span></p>
        {soul.hasTranscended && (
          <p className="text-2xl animate-pulse text-yellow-500">✦ TRANSCENDED ✦</p>
        )}
      </div>
    </div>
  );
}
