import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About TradeMentor</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            TradeMentor was created to help traders of all levels master candlestick chart analysis
            and technical indicators through interactive learning and practical application.
          </p>
          <p>
            Inspired by the trading methodologies of top traders like Ross Cameron, we've built
            a platform that combines the best features from TradingView, TrendSpider, and MetaTrader 5,
            but with a focus on education and practical training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Interactive candlestick charts with VWAP, SMA, and volume indicators</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Automated pattern detection for hammer, shooting star, doji, and more</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Step-by-step educational modules based on proven strategies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">✓</span>
                <span>Responsive design that works on desktop, tablet, and mobile</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="mb-4">
              We believe in a simplified approach to trading education that focuses on:
            </p>
            <ol className="list-decimal ml-5 space-y-2">
              <li>Understanding basic chart patterns and what they represent</li>
              <li>Using a few powerful indicators rather than overwhelming with dozens</li>
              <li>Confirming signals with multiple data points for higher probability trades</li>
              <li>Learning through practical examples and interactive exercises</li>
            </ol>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4">Educational Philosophy</h2>
          <p className="mb-4">
            Our educational content follows Ross Cameron's 3-step approach:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="text-primary-600 text-xl font-bold mb-2">Step 1</div>
              <h3 className="font-semibold mb-2">Simplify Indicators</h3>
              <p className="text-sm">Focus on a few powerful indicators: VWAP, 8/20-day SMA, and volume bars.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="text-primary-600 text-xl font-bold mb-2">Step 2</div>
              <h3 className="font-semibold mb-2">Identify Patterns</h3>
              <p className="text-sm">Learn to recognize key candlestick patterns like hammer, shooting star, and engulfing patterns.</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <div className="text-primary-600 text-xl font-bold mb-2">Step 3</div>
              <h3 className="font-semibold mb-2">Confirm Signals</h3>
              <p className="text-sm">Use multiple indicators to confirm signals for higher probability trades.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="mb-6">
            Ready to improve your trading skills? Start by exploring our interactive charts
            and educational modules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/charts" className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 text-center">
              Explore Charts
            </Link>
            <Link href="/training" className="bg-secondary-600 text-white px-6 py-3 rounded-lg hover:bg-secondary-700 text-center">
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 