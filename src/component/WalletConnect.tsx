'use client';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

export default function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({ connector: new InjectedConnector() });
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="flex items-center gap-4">
        <SoulCard address={address!} />
        <button onClick={() => disconnect()} className="px-4 py-2 bg-red-900/50 rounded hover:bg-red-800 transition">
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect()}
      className="px-8 py-3 bg-gradient-to-r from-red-600 to-purple-800 rounded-full hover:scale-105 transition transform font-bold tracking-wider"
    >
      ENTER THE VOID
    </button>
  );
}
