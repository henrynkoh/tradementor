import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      <section className="w-full bg-gradient-to-b from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Master Candlestick Charts & Technical Indicators</h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">Learn to trade effectively with our interactive charts and educational resources, inspired by industry experts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/charts" className="px-6 py-3 bg-white text-primary-700 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Explore Charts
            </Link>
            <Link href="/training" className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-colors">
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 w-full">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-500 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Interactive Charts</h3>
              <p>Analyze candlestick patterns with VWAP, moving averages, and volume indicators.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-500 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Pattern Recognition</h3>
              <p>Automatically detect important chart patterns like hammer, doji, and shooting star.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-500 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Educational Modules</h3>
              <p>Step-by-step training based on proven strategies for practical trading effectiveness.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 w-full bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-500 font-bold text-xl mb-3">Step 1</div>
              <h3 className="text-xl font-semibold mb-2">Simplify Indicators</h3>
              <p>Focus on just a few powerful indicators instead of overwhelming yourself with dozens of data points.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-500 font-bold text-xl mb-3">Step 2</div>
              <h3 className="text-xl font-semibold mb-2">Identify Patterns</h3>
              <p>Learn to recognize key candlestick patterns that provide reliable trading signals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary-500 font-bold text-xl mb-3">Step 3</div>
              <h3 className="text-xl font-semibold mb-2">Confirm Signals</h3>
              <p>Use multiple indicators together to confirm signals for higher probability trades.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 w-full">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Trading Journey Today</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto">Join TradeMentor and gain the skills you need to analyze candlestick charts like a professional trader.</p>
          <Link href="/training" className="px-8 py-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
            Get Started for Free
          </Link>
        </div>
      </section>

      <footer className="w-full bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TradeMentor. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 