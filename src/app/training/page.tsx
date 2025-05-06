'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import TrainingModule from '@/components/TrainingModule';

// Mock training modules data
const trainingModules = [
  {
    id: 'module-1',
    title: 'Introduction to Candlestick Patterns',
    description: 'Learn the basics of candlestick patterns and how to identify them on charts.',
    content: 'This module covers the fundamentals of candlestick analysis.',
    completed: false,
    steps: [
      {
        id: 'step-1-1',
        title: 'Understanding Candlestick Anatomy',
        content: `
          <p>A candlestick represents price movement over a specific time period. It consists of:</p>
          <ul>
            <li><strong>Body:</strong> The rectangular part representing the opening and closing prices.</li>
            <li><strong>Shadows (Wicks):</strong> The thin lines extending from the body, showing the high and low prices.</li>
          </ul>
          <p>A green/white candle means the price closed higher than it opened (bullish). A red/black candle means the price closed lower than it opened (bearish).</p>
        `,
      },
      {
        id: 'step-1-2',
        title: 'Basic Candlestick Patterns',
        content: `
          <p>Some common single candlestick patterns include:</p>
          <ul>
            <li><strong>Hammer:</strong> A bullish reversal pattern with a small body and a long lower shadow.</li>
            <li><strong>Shooting Star:</strong> A bearish reversal pattern with a small body and a long upper shadow.</li>
            <li><strong>Doji:</strong> A candlestick with a very small body, indicating indecision in the market.</li>
          </ul>
        `,
      },
      {
        id: 'step-1-3',
        title: 'Practice Identifying Patterns',
        content: `
          <p>Look at the examples below and try to identify the patterns:</p>
          <div style="display: flex; justify-content: space-between; margin-top: 20px;">
            <div style="text-align: center;">
              <div style="width: 20px; height: 100px; margin: 0 auto; position: relative;">
                <div style="position: absolute; top: 30px; left: 9px; width: 2px; height: 30px; background-color: black;"></div>
                <div style="position: absolute; top: 30px; left: 0; width: 20px; height: 40px; background-color: green;"></div>
                <div style="position: absolute; top: 70px; left: 9px; width: 2px; height: 30px; background-color: black;"></div>
              </div>
              <p>Hammer</p>
            </div>
            <div style="text-align: center;">
              <div style="width: 20px; height: 100px; margin: 0 auto; position: relative;">
                <div style="position: absolute; top: 0; left: 9px; width: 2px; height: 30px; background-color: black;"></div>
                <div style="position: absolute; top: 30px; left: 0; width: 20px; height: 40px; background-color: red;"></div>
                <div style="position: absolute; top: 70px; left: 9px; width: 2px; height: 30px; background-color: black;"></div>
              </div>
              <p>Doji</p>
            </div>
            <div style="text-align: center;">
              <div style="width: 20px; height: 100px; margin: 0 auto; position: relative;">
                <div style="position: absolute; top: 0; left: 9px; width: 2px; height: 30px; background-color: black;"></div>
                <div style="position: absolute; top: 30px; left: 0; width: 20px; height: 20px; background-color: red;"></div>
                <div style="position: absolute; top: 50px; left: 9px; width: 2px; height: 50px; background-color: black;"></div>
              </div>
              <p>Shooting Star</p>
            </div>
          </div>
        `,
      },
    ],
  },
  {
    id: 'module-2',
    title: 'Using VWAP (Volume Weighted Average Price)',
    description: 'Learn how the VWAP indicator helps identify trend strength and potential reversals.',
    content: 'This module focuses on the VWAP indicator and its applications in trading.',
    completed: false,
    steps: [
      {
        id: 'step-2-1',
        title: 'What is VWAP?',
        content: `
          <p>Volume Weighted Average Price (VWAP) is a trading indicator that shows the average price a security has traded at throughout the day, based on both volume and price.</p>
          <p>It's calculated by:</p>
          <ol>
            <li>Multiplying the typical price (high + low + close / 3) by volume for each period</li>
            <li>Creating a cumulative total of price × volume</li>
            <li>Dividing by the cumulative volume</li>
          </ol>
        `,
      },
      {
        id: 'step-2-2',
        title: 'Trading with VWAP',
        content: `
          <p>VWAP can be used in several ways:</p>
          <ul>
            <li><strong>Trend Confirmation:</strong> Prices above VWAP indicate bullish sentiment, while prices below VWAP indicate bearish sentiment.</li>
            <li><strong>Support/Resistance:</strong> VWAP often acts as a dynamic support/resistance level.</li>
            <li><strong>Entry/Exit Points:</strong> Some traders buy when price crosses above VWAP and sell when it crosses below.</li>
          </ul>
          <p>Institutional traders often use VWAP to minimize market impact by executing orders near the VWAP level.</p>
        `,
      },
      {
        id: 'step-2-3',
        title: 'VWAP with Other Indicators',
        content: `
          <p>VWAP works well when combined with other indicators:</p>
          <ul>
            <li><strong>With Moving Averages:</strong> When the 8-day SMA crosses above the 20-day SMA near the VWAP, it can signal a strong bullish trend.</li>
            <li><strong>With Candlestick Patterns:</strong> A hammer pattern forming near the VWAP can provide a stronger reversal signal.</li>
            <li><strong>With Volume:</strong> High volume when price approaches VWAP can indicate a significant level of interest at that price.</li>
          </ul>
        `,
      },
    ],
  },
  {
    id: 'module-3',
    title: 'Confirming Signals with Multiple Indicators',
    description: 'Learn how to combine candlestick patterns, VWAP, and other indicators for higher-probability trades.',
    content: 'This module teaches you how to use multiple indicators to confirm trading signals.',
    completed: false,
    steps: [
      {
        id: 'step-3-1',
        title: 'The Importance of Confirmation',
        content: `
          <p>Using multiple indicators to confirm a signal can significantly improve trading accuracy. This is often called "confluence."</p>
          <p>A single indicator or pattern might give false signals, but when multiple indicators align, the probability of a successful trade increases.</p>
        `,
      },
      {
        id: 'step-3-2',
        title: '3-Step Confirmation Strategy',
        content: `
          <p>Following Ross Cameron's approach, consider this 3-step confirmation process:</p>
          <ol>
            <li><strong>Step 1:</strong> Identify a candlestick pattern (e.g., hammer, engulfing).</li>
            <li><strong>Step 2:</strong> Check the VWAP - is price above VWAP for buys or below for sells?</li>
            <li><strong>Step 3:</strong> Confirm with volume and moving averages - is there higher volume on the signal candle? Are short-term MAs crossing long-term MAs in the direction of your trade?</li>
          </ol>
        `,
      },
      {
        id: 'step-3-3',
        title: 'Putting It All Together',
        content: `
          <p>Example of a high-probability buy setup:</p>
          <ul>
            <li>A hammer candlestick forms after a downtrend</li>
            <li>Price is above the VWAP</li>
            <li>The 8-day SMA is crossing above the 20-day SMA</li>
            <li>Volume is higher than average on the hammer candle</li>
          </ul>
          <p>This combined setup provides much stronger evidence of a potential reversal than any single indicator alone.</p>
        `,
      },
    ],
  },
];

export default function TrainingPage() {
  const [modules, setModules] = useState(trainingModules);
  
  const handleModuleComplete = (moduleId: string) => {
    setModules(prevModules => 
      prevModules.map(module => 
        module.id === moduleId ? { ...module, completed: true } : module
      )
    );
  };
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Trading Education</h1>
        <p className="text-gray-600 mb-8">Learn to analyze candlestick charts and technical indicators with our structured training modules.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {modules.map((module, index) => (
            <div key={module.id} className={`bg-white p-4 rounded-lg shadow-md ${module.completed ? 'border-l-4 border-green-500' : ''}`}>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{module.title}</h2>
                {module.completed && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Completed</span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{module.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{module.steps.length} steps</span>
                <button
                  className={`px-4 py-2 rounded-md ${
                    module.completed
                      ? 'bg-gray-200 text-gray-700'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                  onClick={() => document.getElementById(`module-${index}`).scrollIntoView({ behavior: 'smooth' })}
                >
                  {module.completed ? 'Review' : 'Start Learning'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-12">
          {modules.map((module, index) => (
            <div key={module.id} id={`module-${index}`}>
              <TrainingModule
                id={module.id}
                title={module.title}
                description={module.description}
                content={module.content}
                steps={module.steps}
                onComplete={handleModuleComplete}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 