
import React from 'react';
import { cn } from '@/lib/utils';

interface BloodTypeCardProps {
  bloodType: string;
  canDonateTo: string[];
  canReceiveFrom: string[];
  percentage: number;
  className?: string;
}

const BloodTypeCard: React.FC<BloodTypeCardProps> = ({
  bloodType,
  canDonateTo,
  canReceiveFrom,
  percentage,
  className
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 transition-all duration-500",
        "bg-white hover:shadow-xl border border-gray-100",
        "transform hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-blood-50 rounded-full -mr-12 -mt-12 z-0"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blood-500 text-white font-bold text-lg">
              {bloodType}
            </div>
            <div>
              <h3 className="font-bold text-lg">Type {bloodType}</h3>
              <p className="text-sm text-gray-500">{percentage}% of population</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-2">Can donate to</h4>
            <div className="flex flex-wrap gap-2">
              {canDonateTo.map((type) => (
                <span 
                  key={`donate-${type}`}
                  className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blood-100 text-blood-800 font-semibold text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-500 mb-2">Can receive from</h4>
            <div className="flex flex-wrap gap-2">
              {canReceiveFrom.map((type) => (
                <span 
                  key={`receive-${type}`}
                  className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-100 text-gray-800 font-semibold text-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodTypeCard;
