
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BloodTypeCard from '@/components/BloodTypeCard';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const bloodTypeData = [
  {
    bloodType: 'A+',
    canDonateTo: ['A+', 'AB+'],
    canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
    percentage: 35.7
  },
  {
    bloodType: 'A-',
    canDonateTo: ['A+', 'A-', 'AB+', 'AB-'],
    canReceiveFrom: ['A-', 'O-'],
    percentage: 6.3
  },
  {
    bloodType: 'B+',
    canDonateTo: ['B+', 'AB+'],
    canReceiveFrom: ['B+', 'B-', 'O+', 'O-'],
    percentage: 8.5
  },
  {
    bloodType: 'B-',
    canDonateTo: ['B+', 'B-', 'AB+', 'AB-'],
    canReceiveFrom: ['B-', 'O-'],
    percentage: 1.5
  },
  {
    bloodType: 'AB+',
    canDonateTo: ['AB+'],
    canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    percentage: 3.4
  },
  {
    bloodType: 'AB-',
    canDonateTo: ['AB+', 'AB-'],
    canReceiveFrom: ['A-', 'B-', 'AB-', 'O-'],
    percentage: 0.6
  },
  {
    bloodType: 'O+',
    canDonateTo: ['A+', 'B+', 'AB+', 'O+'],
    canReceiveFrom: ['O+', 'O-'],
    percentage: 37.4
  },
  {
    bloodType: 'O-',
    canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    canReceiveFrom: ['O-'],
    percentage: 6.6
  }
];

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
              Simple Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Blood Donation Works</h2>
            <p className="text-gray-600">
              Donating blood is a simple and rewarding process that takes less than an hour of your time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Registration',
                description: 'Complete a quick registration form and brief medical history check.',
                icon: (
                  <svg className="w-8 h-8 text-blood-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H10V20M8,18H12.1L13,17.1V16H8V18M8,10H16V8H8V10Z" />
                  </svg>
                )
              },
              {
                title: 'Donation',
                description: 'The actual blood donation process takes only about 8-10 minutes.',
                icon: (
                  <svg className="w-8 h-8 text-blood-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,20A6,6 0 0,1 6,14C6,10 12,3.25 12,3.25C12,3.25 18,10 18,14A6,6 0 0,1 12,20Z" />
                  </svg>
                )
              },
              {
                title: 'Recovery',
                description: 'Enjoy refreshments while resting for 10-15 minutes before leaving.',
                icon: (
                  <svg className="w-8 h-8 text-blood-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V5H19V19H5V5H7V7M12,17V15H17V17H12M12,11V9H17V11H12M8,12V9H7V8H9V12H8Z" />
                  </svg>
                )
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-blood-50 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/donate"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 rounded-full",
                "bg-blood-500 hover:bg-blood-600 text-white font-medium",
                "shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              )}
            >
              Schedule Your Donation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blood Types Section */}
      <section className="py-20 bg-gray-50" id="blood-types">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
              Know Your Type
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Blood Types</h2>
            <p className="text-gray-600">
              Different blood types have different compatibilities. Understanding your blood type can help save lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {bloodTypeData.map((type) => (
              <BloodTypeCard
                key={type.bloodType}
                bloodType={type.bloodType}
                canDonateTo={type.canDonateTo}
                canReceiveFrom={type.canReceiveFrom}
                percentage={type.percentage}
              />
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mt-16 bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-blood-50 flex items-center justify-center">
                  <svg className="w-12 h-12 text-blood-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Universal Donors and Recipients</h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium text-blood-600">O-negative</span> blood type is known as the universal donor, as it can be given to patients of all blood types. 
                  <span className="font-medium text-blood-600 ml-1">AB-positive</span> is the universal recipient, able to receive blood from all types.
                </p>
                <Link
                  to="/about"
                  className="text-blood-500 font-medium inline-flex items-center hover:text-blood-600"
                >
                  Learn more about blood types
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <Stats />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Donor Experiences</h2>
            <p className="text-gray-600">
              Read about the experiences of our blood donors and how their contributions have made an impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Donating blood has become a regular part of my life. It's a small act that can make a huge difference to someone in need.",
                author: "Sarah Johnson",
                role: "Regular Donor"
              },
              {
                quote: "After my accident, blood donors saved my life. Now I donate regularly to pay it forward. The process is quick and the staff is amazing.",
                author: "Michael Chen",
                role: "Recipient & Donor"
              },
              {
                quote: "As a healthcare worker, I've seen firsthand how critical blood donations are. The process is simple and the impact is immeasurable.",
                author: "Dr. Emma Rodriguez",
                role: "Medical Professional"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative"
              >
                <div className="absolute top-0 right-0 w-12 h-12 bg-blood-50 rounded-full -mr-6 -mt-6"></div>
                <div className="relative z-10">
                  <svg className="w-8 h-8 text-blood-200 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11,7H15V11H11V7M7,7H11V11H7V7M11,15H15V19H11V15M7,15H11V19H7V15Z" />
                  </svg>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blood-100 flex items-center justify-center text-blood-600 font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blood-600 to-blood-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your donation can save up to three lives. Schedule your appointment today and join our community of lifesavers.
          </p>
          <Link
            to="/donate"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4 rounded-full",
              "bg-white text-blood-600 font-medium",
              "shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            )}
          >
            Donate Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
