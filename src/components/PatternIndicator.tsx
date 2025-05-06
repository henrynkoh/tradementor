'use client';

interface PatternIndicatorProps {
  pattern: {
    name: string;
    confidence: number;
    description: string;
    suggestedAction: 'buy' | 'sell' | 'neutral';
  } | null;
}

export default function PatternIndicator({ pattern }: PatternIndicatorProps) {
  if (!pattern) {
    return (
      <div className="bg-slate-700 p-4 rounded-lg shadow-md border border-slate-600">
        <p className="text-gray-300">No pattern detected</p>
      </div>
    );
  }

  const actionColors = {
    buy: 'bg-green-900 border-green-500 text-green-200',
    sell: 'bg-red-900 border-red-500 text-red-200',
    neutral: 'bg-yellow-900 border-yellow-500 text-yellow-200',
  };

  return (
    <div className={`p-4 rounded-lg shadow-md border-l-4 ${actionColors[pattern.suggestedAction]}`}>
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg text-white">{pattern.name}</h3>
        <div className="text-sm bg-slate-800 px-2 py-1 rounded-full text-gray-200 border border-slate-600">
          {Math.round(pattern.confidence * 100)}% confidence
        </div>
      </div>
      <p className="mt-2 text-sm">{pattern.description}</p>
      <div className="mt-3 text-sm font-medium">
        Suggested action: <span className="capitalize font-bold">{pattern.suggestedAction}</span>
      </div>
    </div>
  );
} 