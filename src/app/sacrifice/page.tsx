'use client';
import { useState } from 'react';
import { getContract } from '@/lib/contract';
import { ethers } from 'ethers';

export default function SacrificeAltar() {
  const [target, setTarget] = useState('');

  const sacrifice = async () => {
    if (!ethers.isAddress(target)) return alert("Invalid soul");
    const contract = await getContract(true);
    const tx = await contract.sacrificeSoul(target, { value: ethers.parseEther("0.008") });
    await tx.wait();
    alert("Soul devoured. The void grows stronger.");
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-6xl font-black text-red-600 mb-12">SACRIFICE</h1>
      <input
        type="text"
        placeholder="0xTheirSoulToDevour..."
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="w-full px-6 py-4 bg-black/80 border border-red-900 text-xl rounded mb-6"
      />
      <button
        onClick={sacrifice}
        className="w-full py-8 text-4xl font-bold bg-gradient-to-b from-red-600 to-red-900 rounded hover:from-red-500 hover:to-red-800 transition transform hover:scale-105"
      >
        PAY 0.008 ETH ✦ DEVOUR THEIR SOUL
      </button>
    </div>
  );
}
