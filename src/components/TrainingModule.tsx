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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="mb-4 bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-primary-600 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">
            Step {currentStepIndex + 1}: {currentStep.title}
          </h3>
          <div className="prose max-w-none">
            {currentStep.content}
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={handlePrevStep}
            disabled={currentStepIndex === 0}
            className={`px-4 py-2 rounded-md ${
              currentStepIndex === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }`}
          >
            Previous
          </button>
          
          <button
            onClick={handleNextStep}
            className={`px-4 py-2 rounded-md ${
              isCompleted
                ? 'bg-success text-white'
                : 'bg-primary-600 text-white hover:bg-primary-700'
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