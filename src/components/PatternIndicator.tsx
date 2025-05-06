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
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <p className="text-gray-500">No pattern detected</p>
      </div>
    );
  }

  const actionColors = {
    buy: 'bg-green-100 border-green-500 text-green-700',
    sell: 'bg-red-100 border-red-500 text-red-700',
    neutral: 'bg-yellow-100 border-yellow-500 text-yellow-700',
  };

  return (
    <div className={`p-4 rounded-lg shadow-sm border-l-4 ${actionColors[pattern.suggestedAction]}`}>
      <div className="flex justify-between items-start">
        <h3 className="font-bold text-lg">{pattern.name}</h3>
        <div className="text-sm bg-white px-2 py-1 rounded-full">
          {Math.round(pattern.confidence * 100)}% confidence
        </div>
      </div>
      <p className="mt-2 text-sm">{pattern.description}</p>
      <div className="mt-3 text-sm font-medium">
        Suggested action: <span className="capitalize">{pattern.suggestedAction}</span>
      </div>
    </div>
  );
} 