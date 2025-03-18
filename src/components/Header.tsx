
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Donate', path: '/donate' },
  ];

  const NavLink = ({ path, name }: { path: string; name: string }) => {
    const isActive = location.pathname === path;
    
    return (
      <Link
        to={path}
        className={cn(
          'relative px-3 py-2 text-sm font-medium transition-all duration-300',
          'hover:text-blood-500',
          isActive ? 'text-blood-500' : 'text-foreground/80'
        )}
      >
        {name}
        <span 
          className={cn(
            'absolute bottom-0 left-0 h-0.5 bg-blood-500 transition-all duration-300',
            isActive ? 'w-full' : 'w-0 group-hover:w-full'
          )}
        />
      </Link>
    );
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 
          'py-3 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' : 
          'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-bold"
        >
          <span className="inline-block w-8 h-8 rounded-full bg-blood-500 animate-pulse-slow" />
          <span className={cn(
            "transition-all duration-300",
            isScrolled ? 'text-foreground' : 'text-foreground'
          )}>
            BloodBank<span className="text-blood-500">Haven</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink key={link.path} path={link.path} name={link.name} />
          ))}
          <Link
            to="/donate"
            className={cn(
              'ml-4 px-5 py-2 rounded-full text-sm font-medium text-white',
              'bg-blood-500 hover:bg-blood-600 shadow-md hover:shadow-lg',
              'transition-all duration-300 transform hover:-translate-y-0.5',
              'active:translate-y-0 active:shadow-md'
            )}
          >
            Donate Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2 rounded-md"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ top: '61px' }}
      >
        <nav className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-lg font-medium transition-colors',
                location.pathname === link.path ? 'text-blood-500' : 'text-foreground/80 hover:text-blood-500'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/donate"
            className={cn(
              'mt-4 px-5 py-3 rounded-full text-base font-medium text-white text-center',
              'bg-blood-500 hover:bg-blood-600 shadow-md'
            )}
          >
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
