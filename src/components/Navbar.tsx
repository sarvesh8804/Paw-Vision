
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Leaf, Camera, Image, Info, TreePine } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', name: 'Home', icon: <Leaf className="w-4 h-4 mr-1" /> },
    { path: '/predict', name: 'Predict', icon: <Camera className="w-4 h-4 mr-1" /> },
    { path: '/gallery', name: 'Gallery', icon: <Image className="w-4 h-4 mr-1" /> },
    { path: '/conservation', name: 'Conservation', icon: <TreePine className="w-4 h-4 mr-1" /> },
    { path: '/about', name: 'About', icon: <Info className="w-4 h-4 mr-1" /> },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-jungle-leaf rounded-full animate-pulse-soft"></div>
              <Leaf className="absolute inset-0 m-auto text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-jungle-canopy to-jungle-moss">
              JungleGuardian
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-200 flex items-center",
                  location.pathname === link.path
                    ? "bg-jungle-leaf/10 text-jungle-canopy font-medium" 
                    : "hover:bg-jungle-leaf/5 text-foreground/80 hover:text-jungle-canopy"
                )}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button className="p-2 rounded-full hover:bg-jungle-leaf/5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
