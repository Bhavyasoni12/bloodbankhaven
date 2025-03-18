
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Heart, Clock, X, Check } from 'lucide-react';

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-blood-50 to-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-blood-100 text-blood-600 rounded-full text-sm font-medium">
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Our Mission to <span className="text-blood-500">Save Lives</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
            BloodBankHaven is dedicated to ensuring a safe and adequate blood supply for patients in need. 
            Together, we're making a difference in our community.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building a Community of Lifesavers</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, BloodBankHaven began with a simple mission: to connect blood donors 
                with patients in need. What started as a small community initiative has grown into a 
                nationwide network of donors, volunteers, and medical professionals.
              </p>
              <p className="text-gray-600 mb-6">
                Our organization was born out of a critical shortage of blood supplies in local hospitals. 
                We recognized the need for a more efficient and accessible blood donation system, 
                and we've been working tirelessly to meet that need ever since.
              </p>
              <p className="text-gray-600">
                Today, we operate over 120 donation centers across the country and have facilitated 
                more than 75,000 blood donations, helping save countless lives in the process.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blood-100 to-blood-50 rounded-2xl transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1615461066841-6116e61059a0?auto=format&fit=crop&q=80&w=1000" 
                  alt="Blood donation center" 
                  className="relative z-10 rounded-2xl shadow-lg transform -rotate-3 object-cover w-full h-80 md:h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Our Mission</h2>
            <p className="text-gray-600">
              At BloodBankHaven, our core values guide everything we do as we work to serve our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Community Service',
                description: 'We believe in the power of community to solve critical healthcare challenges through voluntary blood donation.',
                icon: <Users className="w-8 h-8 text-blood-500" />
              },
              {
                title: 'Excellence',
                description: 'We maintain the highest standards in blood collection, testing, processing, and distribution to ensure safety.',
                icon: <Award className="w-8 h-8 text-blood-500" />
              },
              {
                title: 'Compassion',
                description: 'We approach our work with empathy, recognizing that behind every blood donation is a life-changing impact.',
                icon: <Heart className="w-8 h-8 text-blood-500" />
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-blood-50 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Eligibility Section */}
      <section className="py-16 md:py-24 bg-white" id="eligibility">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
              Donor Eligibility
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Can Donate Blood?</h2>
            <p className="text-gray-600">
              Most healthy adults are eligible to donate blood. Here are some general guidelines to help you determine if you're eligible.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center text-green-600">
                <Check className="w-5 h-5 mr-2" /> Eligible Donors
              </h3>
              <ul className="space-y-3">
                {[
                  'Are at least 17 years old (16 with parental consent in some states)',
                  'Weigh at least 110 pounds (50 kg)',
                  'Are in good general health and feeling well',
                  'Have not donated whole blood in the last 56 days',
                  'Have normal blood pressure and pulse',
                  'Have hemoglobin levels within an acceptable range'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center text-red-600">
                <X className="w-5 h-5 mr-2" /> Temporary Deferrals
              </h3>
              <ul className="space-y-3">
                {[
                  'Have cold or flu symptoms',
                  'Have received a tattoo in the past 3 months',
                  'Have traveled to certain countries with high risk of malaria',
                  'Have had certain vaccinations in the past 2 weeks',
                  'Are pregnant or have given birth in the past 6 weeks',
                  'Are taking certain medications'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <X className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-10 p-6 bg-blood-50 rounded-2xl">
            <div className="flex items-center">
              <Clock className="w-6 h-6 text-blood-600 mr-3 flex-shrink-0" />
              <p className="text-blood-800">
                <span className="font-semibold">Important Note:</span> Eligibility criteria may vary slightly based on local regulations and specific health conditions. When you arrive to donate, you'll complete a confidential health history questionnaire and have a mini-physical to ensure it's safe for you to donate.
              </p>
            </div>
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
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-blood-50 text-blood-600 rounded-full text-sm font-medium">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-gray-600">
              Our dedicated team of professionals is committed to our mission of saving lives through blood donation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Dr. Emily Chen',
                role: 'Chief Medical Officer',
                image: 'https://randomuser.me/api/portraits/women/44.jpg',
                bio: 'Dr. Chen has over 15 years of experience in transfusion medicine and hematology.'
              },
              {
                name: 'Michael Rodriguez',
                role: 'Executive Director',
                image: 'https://randomuser.me/api/portraits/men/32.jpg',
                bio: 'Michael brings 20 years of healthcare administration experience to BloodBankHaven.'
              },
              {
                name: 'Sarah Johnson',
                role: 'Director of Operations',
                image: 'https://randomuser.me/api/portraits/women/68.jpg',
                bio: 'Sarah oversees our network of donation centers and ensures smooth operations.'
              },
              {
                name: 'Dr. James Wilson',
                role: 'Research Director',
                image: 'https://randomuser.me/api/portraits/men/75.jpg',
                bio: 'Dr. Wilson leads our research initiatives to improve blood banking practices.'
              }
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blood-500 font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        className="py-20 bg-cover bg-center text-white relative"
        style={{
          backgroundImage: 'linear-gradient(rgba(183, 28, 28, 0.9), rgba(183, 28, 28, 0.8)), url(https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blood-900/80 to-blood-800/80"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Lifesaving Mission</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Whether you donate blood, volunteer your time, or support our initiatives, you can make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/donate"
              className={cn(
                "px-8 py-3 rounded-full bg-white text-blood-600 font-medium",
                "shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
                "flex items-center gap-2"
              )}
            >
              Donate Blood
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className={cn(
                "px-8 py-3 rounded-full bg-transparent text-white font-medium",
                "border border-white/70 hover:bg-white/10 transition-all duration-300",
                "flex items-center gap-2"
              )}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
