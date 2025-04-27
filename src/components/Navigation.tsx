import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, Github } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { 
      name: 'Repositórios', 
      href: '#repositories',
      icon: <Github size={20} />
    },
    { name: 'Contato', href: '#contact' }
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a href="#home" className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-[#1a237e]' : 'text-white'
            }`}>
              DCP
            </a>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-300 flex items-center gap-2 hover:text-[#1a237e] ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
              ) : (
                <Menu size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-effect animate-fade-in">
            <div className="px-4 py-2 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 py-2 text-gray-700 hover:text-[#1a237e] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#1a237e] text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-110 z-50 animate-fade-in"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
}