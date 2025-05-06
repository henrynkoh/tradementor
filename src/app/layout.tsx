import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TradeMentor - Trading Education Platform',
  description: 'Learn to trade effectively with candlestick charts and technical indicators',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-900 text-gray-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
} 