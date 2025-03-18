
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DonationForm from '@/components/DonationForm';
import { cn } from '@/lib/utils';
import { Calendar, MapPin, Clock, AlertCircle, Users, Phone } from 'lucide-react';

const Donate = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const donationCenters = [
    {
      name: 'Downtown Blood Center',
      address: '123 Main Street, New York, NY 10001',
      hours: 'Mon-Fri: 8am-7pm, Sat-Sun: 9am-5pm',
      phone: '(212) 555-1234'
    },
    {
      name: 'Midtown Donation Center',
      address: '456 Park Avenue, New York, NY 10022',
      hours: 'Mon-Fri: 7am-8pm, Sat: 8am-6pm, Sun: Closed',
      phone: '(212) 555-5678'
    },
    {
      name: 'Brooklyn Blood Bank',
      address: '789 Atlantic Avenue, Brooklyn, NY 11217',
      hours: 'Mon-Thu: 9am-6pm, Fri-Sat: 8am-4pm, Sun: Closed',
      phone: '(718) 555-9012'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-blood-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-blood-100 text-blood-600 rounded-full text-sm font-medium">
            Donate Blood
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Schedule Your <span className="text-blood-500">Donation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
            It takes just an hour of your time to save up to three lives. Schedule your donation appointment today.
          </p>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <div className="sticky top-24">
                <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
                  Book Your Appointment
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Your Donation</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form to schedule your blood donation appointment. Our team will 
                  contact you to confirm your appointment and provide any additional information.
                </p>
                
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <AlertCircle className="w-5 h-5 text-blood-500 mr-2" />
                    Before You Donate
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Get a good night\'s sleep the night before your donation",
                      "Eat a healthy meal within 2-3 hours before donating",
                      "Drink plenty of water before and after donating",
                      "Bring a valid ID with you to your appointment",
                      "Wear a short-sleeved shirt or a shirt with sleeves that can be rolled up"
                    ].map((tip, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="text-blood-500 mr-2">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blood-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Donation Process</h4>
                      <p className="text-sm text-gray-600">Takes approximately 1 hour from start to finish</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blood-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Frequency</h4>
                      <p className="text-sm text-gray-600">Whole blood can be donated every 56 days</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blood-500 mr-3" />
                    <div>
                      <h4 className="font-medium">Impact</h4>
                      <p className="text-sm text-gray-600">One donation can save up to three lives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <DonationForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Donation Centers Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
              Our Locations
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Donation Centers</h2>
            <p className="text-gray-600">
              Visit one of our convenient donation centers. Walk-ins are welcome, but appointments are recommended.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationCenters.map((center, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <div className="h-48 bg-blood-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-blood-500" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{center.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blood-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{center.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-blood-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{center.hours}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-blood-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{center.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about blood donation. If you don't see your question here, feel free to contact us.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Does blood donation hurt?',
                answer: 'Most donors report only a brief pinch when the needle is inserted. The actual donation process is typically painless.'
              },
              {
                question: 'How long does a blood donation take?',
                answer: 'The actual blood draw takes about 8-10 minutes. The entire process, including registration, health screening, and refreshments afterward, takes about an hour.'
              },
              {
                question: 'How much blood is taken during a donation?',
                answer: 'A typical whole blood donation is about one pint (about 500 ml), which is about 10% of your total blood volume. Your body replaces the fluid within 24 hours and the red blood cells within a few weeks.'
              },
              {
                question: 'Is it safe to donate blood?',
                answer: 'Yes, blood donation is very safe. All equipment used is sterile and disposed of after a single use, eliminating any risk of infection.'
              },
              {
                question: 'How often can I donate blood?',
                answer: 'Whole blood donors can donate every 56 days (about 8 weeks). Platelet donors can donate more frequently, up to 24 times per year.'
              },
              {
                question: 'Will donating blood make me weak?',
                answer: 'Most people feel fine after donating blood. We recommend having a good meal before donating, drinking extra fluids, and avoiding strenuous activity for the rest of the day.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
              >
                <h3 className="text-lg font-bold mb-3 text-blood-800">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blood-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blood-800">Ready to Make a Difference?</h2>
          <p className="text-xl text-blood-700/90 mb-10 max-w-2xl mx-auto">
            Your blood donation can save lives. Schedule your appointment today or walk in to one of our centers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#top"
              className={cn(
                "px-8 py-3 rounded-full bg-blood-500 text-white font-medium",
                "shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                "flex items-center gap-2"
              )}
            >
              Schedule Now
            </a>
            <a
              href="tel:+12125551234"
              className={cn(
                "px-8 py-3 rounded-full bg-white text-blood-600 font-medium",
                "border border-blood-200 hover:bg-blood-50 transition-all duration-300",
                "flex items-center gap-2"
              )}
            >
              Call Us
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Donate;
