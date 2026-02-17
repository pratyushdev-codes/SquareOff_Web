import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'What We Do', path: '/services' },
  { label: 'Why India', path: '/why-india' },
  { label: 'TradeCraft', path: '/academy' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-[9998] transition-all duration-500 ${scrolled
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md py-4 border-b border-neutral-200 dark:border-white/5 text-black dark:text-white shadow-sm dark:shadow-none'
          : 'bg-transparent py-6 text-white dark:text-white' // Keep transparent nav text white on hero images usually
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="group">
            <Logo variant="navbar" className={!scrolled ? "text-white" : "text-black dark:text-white"} />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-300 ${isActive
                    ? 'border-b pb-1 border-current'
                    : 'opacity-70 hover:opacity-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink to="/contact">
              <Button variant="outline" size="sm" className={!scrolled ? "border-white/30 text-white hover:bg-white hover:text-black" : ""}>
                Contact Us
              </Button>
            </NavLink>
            <NavLink to="/start-investing">
              <Button variant="primary" size="sm">
                Start Investing
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              className=""
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - full viewport, above all content */}
      <div
        className={`fixed inset-0 z-[9999] md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop - covers entire screen so content is not visible/clickable */}
        <div
          className="absolute inset-0 bg-white dark:bg-black"
          onClick={() => setIsOpen(false)}
        />
        {/* Menu panel - same content, with close button inside overlay */}
        <div className="relative flex flex-col h-full w-full p-8 pt-24 text-black dark:text-white">
          <button
            className="absolute top-6 right-6 p-2 -m-2"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-2xl font-light ${isActive ? 'font-medium' : 'opacity-70'}`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="h-px bg-neutral-200 dark:bg-neutral-800 my-4" />
            <NavLink to="/contact" className="text-xl" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
            <NavLink to="/start-investing" className="flex items-center text-xl" onClick={() => setIsOpen(false)}>
              Start Investing <ArrowRight className="ml-2 w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};