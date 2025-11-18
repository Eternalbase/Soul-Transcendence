import './globals.css';
import { Inter } from 'next/font/google';
import WalletConnect from '@/components/WalletConnect';
import AudioAmbience from '@/components/AudioAmbience';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Soul Transcendence Protocol',
  description: 'Collect. Meditate. Transcend. Or be devoured.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black text-red-50">
      <body className={`${inter.className} min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black`}>
        <AudioAmbience />
        <div className="fixed inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/noise.png')] mix-blend-overlay" />
        </div>
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-red-900/50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-wider text-red-500 glitch" data-text="SOUL">
              SOUL
            </h1>
            <WalletConnect />
          </div>
        </header>
        <main className="pt-24 pb-12">{children}</main>
      </body>
    </html>
  );
}
