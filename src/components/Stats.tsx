
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface StatProps {
  value: number;
  label: string;
  delay?: number;
  suffix?: string;
}

const StatItem: React.FC<StatProps> = ({ value, label, delay = 0, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          setTimeout(() => {
            let start = 0;
            const end = value;
            const duration = 2000;
            const step = Math.max(1, Math.floor(end / (duration / 16)));
            
            const timer = setInterval(() => {
              start += step;
              setCount(start);
              
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              }
            }, 16);
            
            return () => clearInterval(timer);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, [value, delay]);
  
  return (
    <div className="flex flex-col items-center" ref={countRef}>
      <div className="text-3xl md:text-4xl font-bold mb-2 text-blood-500">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-500 uppercase font-medium tracking-wider">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Making a Difference Together</h2>
          <p className="text-gray-600">
            Every donation contributes to our mission of saving lives. Here's the impact we've made so far with your help.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatItem value={50000} label="Donors" delay={0} suffix="+" />
          <StatItem value={150000} label="Lives Saved" delay={200} suffix="+" />
          <StatItem value={75000} label="Donations" delay={400} suffix="+" />
          <StatItem value={120} label="Centers" delay={600} suffix="+" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
