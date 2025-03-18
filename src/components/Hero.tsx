
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childElements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    childElements?.forEach(el => observer.observe(el));
    
    return () => {
      childElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgb(255, 235, 238) 0%, rgb(255, 255, 255) 80%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-blood-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -left-24 top-1/3 w-64 h-64 bg-blood-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blood-50 rounded-full opacity-50 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between z-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 pt-10 md:pt-0 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div className="max-w-xl">
            <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
              Saving Lives Together
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
              Your Donation <br />
              <span className="text-blood-500">Saves Lives</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl mb-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700">
              Every drop counts. Join our community of donors and help someone in need. One donation can save up to three lives.
            </p>
            <div className="flex flex-wrap gap-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-900">
              <Link
                to="/donate"
                className={cn(
                  'btn-animated px-8 py-3 rounded-full bg-blood-500 text-white',
                  'shadow-lg hover:shadow-xl hover:bg-blood-600 font-medium',
                  'flex items-center gap-2'
                )}
              >
                Donate Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className={cn(
                  'btn-animated px-8 py-3 rounded-full bg-white text-blood-500',
                  'shadow-md hover:shadow-lg font-medium border border-gray-100',
                  'flex items-center gap-2'
                )}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Right Content - Image */}
        <div className="w-full md:w-1/2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-blood-100 to-blood-50 rounded-full opacity-80 animate-pulse-slow"></div>
            <div className="absolute inset-8 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-1/2 h-1/2 text-blood-500 animate-float" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-blood-300 flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-blood-500 rounded-full animate-slide-down"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
