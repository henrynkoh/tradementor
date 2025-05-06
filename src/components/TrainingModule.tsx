'use client';

import { useState } from 'react';

interface TrainingModuleProps {
  id: string;
  title: string;
  description: string;
  content: string;
  steps: {
    id: string;
    title: string;
    content: string;
  }[];
  onComplete?: (moduleId: string) => void;
}

export default function TrainingModule({
  id,
  title,
  description,
  content,
  steps,
  onComplete,
}: TrainingModuleProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsCompleted(true);
      onComplete?.(id);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  const currentStep = steps[currentStepIndex];
  const progress = ((currentStepIndex + 1) / steps.length) * 100;

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="mb-4 bg-slate-700 rounded-full h-2.5">
          <div 
            className="bg-blue-500 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-100">
            Step {currentStepIndex + 1}: {currentStep.title}
          </h3>
          <div className="prose prose-invert max-w-none text-gray-200">
            <div dangerouslySetInnerHTML={{ __html: currentStep.content }} />
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={handlePrevStep}
            disabled={currentStepIndex === 0}
            className={`px-4 py-2 rounded-md ${
              currentStepIndex === 0
                ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                : 'bg-slate-600 text-white hover:bg-slate-700'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={handleNextStep}
            className={`px-4 py-2 rounded-md ${
              isCompleted
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isCompleted
              ? 'Completed'
              : currentStepIndex === steps.length - 1
              ? 'Complete'
              : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
} 