
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-6 h-6 rounded-full bg-blood-500" />
              <span className="text-xl font-bold">
                BloodBank<span className="text-blood-500">Haven</span>
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              BloodBankHaven is dedicated to saving lives through blood donation. 
              Our mission is to ensure safe blood supply to those in need.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blood-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blood-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blood-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Donate Blood', path: '/donate' },
                { name: 'Blood Types', path: '/about#blood-types' },
                { name: 'Eligibility', path: '/about#eligibility' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-600 hover:text-blood-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-600">
                <MapPin size={18} className="text-blood-500 mt-0.5 flex-shrink-0" />
                <span>123 Blood Center Drive<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone size={18} className="text-blood-500 flex-shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail size={18} className="text-blood-500 flex-shrink-0" />
                <span>contact@bloodbankhaven.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to our newsletter for updates on blood drives and donation tips.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blood-500 text-sm"
              />
              <button 
                type="submit" 
                className="w-full bg-blood-500 hover:bg-blood-600 text-white py-2 rounded-md text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom - Copyright */}
        <div className="border-t border-gray-200 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} BloodBankHaven. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-500 hover:text-blood-500 text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-blood-500 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
