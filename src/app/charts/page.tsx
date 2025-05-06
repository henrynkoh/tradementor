'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ChartComponent from '@/components/ChartComponent';
import PatternIndicator from '@/components/PatternIndicator';

// Mock data for demonstration
const mockStockData = [
  { time: '2023-01-01', open: 100, high: 105, low: 98, close: 103, volume: 1000 },
  { time: '2023-01-02', open: 103, high: 108, low: 102, close: 107, volume: 1200 },
  { time: '2023-01-03', open: 107, high: 110, low: 105, close: 109, volume: 1500 },
  { time: '2023-01-04', open: 109, high: 112, low: 107, close: 108, volume: 1300 },
  { time: '2023-01-05', open: 108, high: 110, low: 103, close: 105, volume: 1400 },
  { time: '2023-01-06', open: 105, high: 107, low: 100, close: 101, volume: 1600 },
  { time: '2023-01-07', open: 101, high: 103, low: 99, close: 102, volume: 1200 },
  { time: '2023-01-08', open: 102, high: 105, low: 101, close: 104, volume: 1300 },
  { time: '2023-01-09', open: 104, high: 106, low: 102, close: 105, volume: 1100 },
  { time: '2023-01-10', open: 105, high: 108, low: 104, close: 107, volume: 1500 },
  { time: '2023-01-11', open: 107, high: 110, low: 106, close: 109, volume: 1400 },
  { time: '2023-01-12', open: 109, high: 112, low: 108, close: 111, volume: 1600 },
  { time: '2023-01-13', open: 111, high: 114, low: 110, close: 112, volume: 1800 },
  { time: '2023-01-14', open: 112, high: 115, low: 111, close: 114, volume: 2000 },
  { time: '2023-01-15', open: 114, high: 117, low: 113, close: 116, volume: 2200 },
  { time: '2023-01-16', open: 116, high: 118, low: 114, close: 117, volume: 1900 },
  { time: '2023-01-17', open: 117, high: 120, low: 116, close: 119, volume: 2100 },
  { time: '2023-01-18', open: 119, high: 121, low: 116, close: 117, volume: 2300 },
  { time: '2023-01-19', open: 117, high: 118, low: 112, close: 114, volume: 2000 },
  { time: '2023-01-20', open: 114, high: 116, low: 110, close: 112, volume: 1800 },
  { time: '2023-01-21', open: 112, high: 114, low: 108, close: 110, volume: 1600 },
  { time: '2023-01-22', open: 110, high: 112, low: 107, close: 109, volume: 1400 },
  { time: '2023-01-23', open: 109, high: 111, low: 105, close: 107, volume: 1300 },
  { time: '2023-01-24', open: 107, high: 109, low: 106, close: 108, volume: 1200 },
  { time: '2023-01-25', open: 108, high: 110, low: 107, close: 109, volume: 1400 },
  { time: '2023-01-26', open: 109, high: 112, low: 108, close: 111, volume: 1600 },
  { time: '2023-01-27', open: 111, high: 113, low: 110, close: 112, volume: 1500 },
  { time: '2023-01-28', open: 112, high: 114, low: 109, close: 110, volume: 1400 },
  { time: '2023-01-29', open: 110, high: 111, low: 108, close: 109, volume: 1300 },
  { time: '2023-01-30', open: 109, high: 111, low: 106, close: 107, volume: 1200 }
];

// Mock pattern detection function (should be replaced with actual algorithm)
const detectPattern = (data: typeof mockStockData) => {
  // Example hammmer pattern detector
  // A hammer has a small body, a long lower shadow, and a small or no upper shadow
  const lastCandle = data[data.length - 1];
  const prevCandle = data[data.length - 2];
  
  // Simplified pattern detection
  if (
    lastCandle.close > lastCandle.open &&
    (lastCandle.low - Math.min(lastCandle.open, lastCandle.close)) >
      2 * Math.abs(lastCandle.close - lastCandle.open) &&
    (Math.max(lastCandle.open, lastCandle.close) - lastCandle.high) <
      0.2 * Math.abs(lastCandle.close - lastCandle.open) &&
    prevCandle.close < prevCandle.open
  ) {
    return {
      name: 'Hammer',
      confidence: 0.85,
      description: 'A bullish reversal pattern that forms during a downtrend, signifying a potential trend reversal.',
      suggestedAction: 'buy' as const,
    };
  }
  
  // Check for bearish engulfing
  if (
    lastCandle.open > lastCandle.close &&
    lastCandle.open > prevCandle.close &&
    lastCandle.close < prevCandle.open &&
    lastCandle.high - lastCandle.low > 2 * (lastCandle.open - lastCandle.close)
  ) {
    return {
      name: 'Bearish Engulfing',
      confidence: 0.78,
      description: 'A bearish reversal pattern that forms during an uptrend, suggesting a potential downward trend.',
      suggestedAction: 'sell' as const,
    };
  }
  
  return null;
};

// List of available stocks
const stockOptions = [
  { symbol: 'AAPL', name: 'Apple Inc.' },
  { symbol: 'MSFT', name: 'Microsoft Corp.' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.' },
  { symbol: 'AMZN', name: 'Amazon.com Inc.' },
  { symbol: 'TSLA', name: 'Tesla Inc.' },
];

// Timeframe options
const timeframeOptions = [
  { value: '1m', label: '1 Minute' },
  { value: '5m', label: '5 Minutes' },
  { value: '15m', label: '15 Minutes' },
  { value: '1h', label: '1 Hour' },
  { value: '4h', label: '4 Hours' },
  { value: '1d', label: '1 Day' },
];

export default function ChartsPage() {
  const [selectedStock, setSelectedStock] = useState(stockOptions[0]);
  const [selectedTimeframe, setSelectedTimeframe] = useState(timeframeOptions[2]);
  const [chartData, setChartData] = useState(mockStockData);
  const [detectedPattern, setDetectedPattern] = useState(detectPattern(mockStockData));
  const [showVWAP, setShowVWAP] = useState(true);
  const [showSMA, setShowSMA] = useState(true);
  
  // In a real app, you would fetch data based on selected stock and timeframe
  useEffect(() => {
    // Mock API call
    // In reality, you would call an actual API like Alpha Vantage or similar
    console.log(`Fetching data for ${selectedStock.symbol} with ${selectedTimeframe.value} timeframe`);
    
    // For mock demo, we'll just use the same data with a slight offset
    const offset = stockOptions.findIndex(s => s.symbol === selectedStock.symbol) * 10;
    const modifiedData = mockStockData.map(candle => ({
      ...candle,
      open: candle.open + offset,
      high: candle.high + offset,
      low: candle.low + offset,
      close: candle.close + offset,
    }));
    
    setChartData(modifiedData);
    setDetectedPattern(detectPattern(modifiedData));
  }, [selectedStock, selectedTimeframe]);
  
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Stock Charts</h1>
        
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Stock</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={selectedStock.symbol}
              onChange={(e) => {
                const selected = stockOptions.find(s => s.symbol === e.target.value);
                if (selected) setSelectedStock(selected);
              }}
            >
              {stockOptions.map((stock) => (
                <option key={stock.symbol} value={stock.symbol}>
                  {stock.symbol} - {stock.name}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Timeframe</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={selectedTimeframe.value}
              onChange={(e) => {
                const selected = timeframeOptions.find(t => t.value === e.target.value);
                if (selected) setSelectedTimeframe(selected);
              }}
            >
              {timeframeOptions.map((timeframe) => (
                <option key={timeframe.value} value={timeframe.value}>
                  {timeframe.label}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Indicators</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary-600"
                  checked={showVWAP}
                  onChange={(e) => setShowVWAP(e.target.checked)}
                />
                <span className="ml-2">VWAP</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-primary-600"
                  checked={showSMA}
                  onChange={(e) => setShowSMA(e.target.checked)}
                />
                <span className="ml-2">8/20 SMA</span>
              </label>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">
                {selectedStock.symbol} - {selectedTimeframe.label} Chart
              </h2>
              <ChartComponent 
                data={chartData} 
                showVWAP={showVWAP}
                showSMA={showSMA}
              />
            </div>
          </div>
          
          <div>
            <div className="bg-white p-4 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Pattern Detection</h2>
              <PatternIndicator pattern={detectedPattern} />
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Stock Info</h2>
              <div>
                <div className="mb-2">
                  <span className="font-medium">Symbol:</span> {selectedStock.symbol}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Name:</span> {selectedStock.name}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Last Price:</span> ${chartData[chartData.length - 1].close.toFixed(2)}
                </div>
                <div className="mb-2">
                  <span className="font-medium">Daily Change:</span>{' '}
                  <span className={
                    chartData[chartData.length - 1].close > chartData[chartData.length - 1].open
                      ? 'text-green-600'
                      : 'text-red-600'
                  }>
                    {(chartData[chartData.length - 1].close - chartData[chartData.length - 1].open).toFixed(2)} 
                    ({((chartData[chartData.length - 1].close / chartData[chartData.length - 1].open - 1) * 100).toFixed(2)}%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 