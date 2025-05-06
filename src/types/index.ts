// Chart related types
export interface CandlestickData {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}

export interface StockInfo {
  symbol: string;
  name: string;
  sector?: string;
  industry?: string;
  country?: string;
}

export interface TimeframeOption {
  value: string;
  label: string;
}

// Pattern detection types
export type TradeAction = 'buy' | 'sell' | 'neutral';

export interface PatternInfo {
  name: string;
  confidence: number;
  description: string;
  suggestedAction: TradeAction;
}

// Training module types
export interface TrainingStep {
  id: string;
  title: string;
  content: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  content: string;
  completed: boolean;
  steps: TrainingStep[];
}

// User related types (for future implementation)
export interface UserProfile {
  id: string;
  username: string;
  email: string;
  completedModules: string[];
  savedCharts: SavedChart[];
}

export interface SavedChart {
  id: string;
  name: string;
  symbol: string;
  timeframe: string;
  indicators: {
    vwap: boolean;
    sma: boolean;
  };
  notes: string;
  createdAt: string;
} 