import axios from 'axios';

// This is a placeholder API integration.
// In a real application, you would use an actual market data API like Alpha Vantage, 
// Yahoo Finance, or a paid service like Polygon.io

// Function to fetch stock data
export async function fetchStockData(symbol: string, timeframe: string) {
  try {
    // In a real app, this would be a call to an external API
    // Example:
    // const response = await axios.get(
    //   `https://api.example.com/stocks/${symbol}/candles?timeframe=${timeframe}`,
    //   { headers: { 'Authorization': `Bearer ${process.env.API_KEY}` } }
    // );
    // return response.data;
    
    // For demo purposes, we're returning mock data
    return generateMockData(symbol, timeframe);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
}

// Generate mock data for demonstration
function generateMockData(symbol: string, timeframe: string) {
  const basePrice = getBasePrice(symbol);
  const volatility = getVolatility(symbol);
  const candles = [];
  
  let currentPrice = basePrice;
  const now = new Date();
  
  // Generate 30 candles
  for (let i = 30; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    const change = (Math.random() - 0.5) * volatility;
    currentPrice = Math.max(1, currentPrice + change);
    
    const open = currentPrice;
    const close = open + (Math.random() - 0.5) * (volatility / 2);
    const high = Math.max(open, close) + Math.random() * (volatility / 2);
    const low = Math.min(open, close) - Math.random() * (volatility / 2);
    const volume = Math.floor(1000 + Math.random() * 2000);
    
    candles.push({
      time: date.toISOString().split('T')[0],
      open,
      high,
      low,
      close,
      volume,
    });
  }
  
  return candles;
}

// Helper function to get a base price for a stock symbol
function getBasePrice(symbol: string) {
  const prices: { [key: string]: number } = {
    'AAPL': 150,
    'MSFT': 300,
    'GOOGL': 2800,
    'AMZN': 3200,
    'TSLA': 900,
  };
  
  return prices[symbol] || 100;
}

// Helper function to get volatility for a stock symbol
function getVolatility(symbol: string) {
  const volatility: { [key: string]: number } = {
    'AAPL': 3,
    'MSFT': 5,
    'GOOGL': 20,
    'AMZN': 30,
    'TSLA': 15,
  };
  
  return volatility[symbol] || 5;
}

// Function to detect patterns in candlestick data
export function detectCandlestickPatterns(data: any[]) {
  if (data.length < 2) return null;
  
  const lastCandle = data[data.length - 1];
  const prevCandle = data[data.length - 2];
  
  // Detect Hammer pattern
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
  
  // Detect Shooting Star pattern
  if (
    lastCandle.close < lastCandle.open &&
    (lastCandle.high - Math.max(lastCandle.open, lastCandle.close)) >
      2 * Math.abs(lastCandle.close - lastCandle.open) &&
    (Math.min(lastCandle.open, lastCandle.close) - lastCandle.low) <
      0.2 * Math.abs(lastCandle.close - lastCandle.open) &&
    prevCandle.close > prevCandle.open
  ) {
    return {
      name: 'Shooting Star',
      confidence: 0.80,
      description: 'A bearish reversal pattern that forms during an uptrend, indicating a potential reversal.',
      suggestedAction: 'sell' as const,
    };
  }
  
  // Detect Bearish Engulfing
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
  
  // Detect Bullish Engulfing
  if (
    lastCandle.close > lastCandle.open &&
    lastCandle.open < prevCandle.close &&
    lastCandle.close > prevCandle.open &&
    lastCandle.high - lastCandle.low > 2 * (lastCandle.close - lastCandle.open)
  ) {
    return {
      name: 'Bullish Engulfing',
      confidence: 0.75,
      description: 'A bullish reversal pattern that forms during a downtrend, suggesting a potential upward trend.',
      suggestedAction: 'buy' as const,
    };
  }
  
  // Detect Doji
  if (
    Math.abs(lastCandle.close - lastCandle.open) < 
    (lastCandle.high - lastCandle.low) * 0.1
  ) {
    return {
      name: 'Doji',
      confidence: 0.65,
      description: 'A candle with a small body, indicating indecision in the market. May signal a trend reversal.',
      suggestedAction: 'neutral' as const,
    };
  }
  
  return null;
} 