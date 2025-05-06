import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-900">
      <section className="w-full bg-gradient-to-b from-blue-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Master Candlestick Charts & Technical Indicators</h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-100">Learn to trade effectively with our interactive charts and educational resources, inspired by industry experts.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/charts" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md">
              Explore Charts
            </Link>
            <Link href="/training" className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-medium hover:bg-white/10 transition-colors shadow-md">
              Start Learning
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 w-full bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700 p-6 rounded-lg shadow-lg border border-slate-600">
              <div className="text-blue-400 text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Interactive Charts</h3>
              <p className="text-gray-200">Analyze candlestick patterns with VWAP, moving averages, and volume indicators.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow-lg border border-slate-600">
              <div className="text-blue-400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Pattern Recognition</h3>
              <p className="text-gray-200">Automatically detect important chart patterns like hammer, doji, and shooting star.</p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow-lg border border-slate-600">
              <div className="text-blue-400 text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Educational Modules</h3>
              <p className="text-gray-200">Step-by-step training based on proven strategies for practical trading effectiveness.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 w-full bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
              <div className="text-blue-400 font-bold text-xl mb-3">Step 1</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Simplify Indicators</h3>
              <p className="text-gray-200">Focus on just a few powerful indicators instead of overwhelming yourself with dozens of data points.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
              <div className="text-blue-400 font-bold text-xl mb-3">Step 2</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Identify Patterns</h3>
              <p className="text-gray-200">Learn to recognize key candlestick patterns that provide reliable trading signals.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
              <div className="text-blue-400 font-bold text-xl mb-3">Step 3</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Confirm Signals</h3>
              <p className="text-gray-200">Use multiple indicators together to confirm signals for higher probability trades.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 w-full bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Start Your Trading Journey Today</h2>
          <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-200">Join TradeMentor and gain the skills you need to analyze candlestick charts like a professional trader.</p>
          <Link href="/training" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md">
            Get Started for Free
          </Link>
        </div>
      </section>

      <footer className="w-full bg-slate-900 text-white py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} TradeMentor. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
} 