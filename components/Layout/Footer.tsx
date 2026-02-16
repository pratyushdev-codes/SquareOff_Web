import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import { Logo } from '../ui/Logo';
import algoryxLogo from '../../assets/Algoryx.jpeg';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section: Brand + Links + Locations */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
            
            {/* Brand Logo Section */}
            <div className="space-y-6 max-w-xs">
                <div className="flex flex-col items-start">
                    <Logo variant="footer" />
                </div>
            </div>

            {/* Navigation Grid */}
            <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm">
                <div>
                    <h4 className="font-semibold uppercase tracking-widest mb-6 text-neutral-500 text-xs">Explore</h4>
                    <ul className="space-y-4">
                        <li><NavLink to="/" className="text-neutral-400 hover:text-white transition-colors">Home</NavLink></li>
                        <li><NavLink to="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</NavLink></li>
                        <li><NavLink to="/services" className="text-neutral-400 hover:text-white transition-colors">Services</NavLink></li>
                        <li><NavLink to="/why-india" className="text-neutral-400 hover:text-white transition-colors">Why India</NavLink></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold uppercase tracking-widest mb-6 text-neutral-500 text-xs">Connect</h4>
                    <ul className="space-y-4">
                        <li><NavLink to="/academy" className="text-neutral-400 hover:text-white transition-colors">TradeCraft</NavLink></li>
                        <li><NavLink to="/contact" className="text-neutral-400 hover:text-white transition-colors">Contact</NavLink></li>
                        <li><NavLink to="/start-investing" className="text-neutral-400 hover:text-white transition-colors">Start Investing</NavLink></li>
                    </ul>
                </div>
            </div>

            {/* Locations (Simplified) */}
            <div>
                 <h4 className="font-semibold uppercase tracking-widest mb-6 text-neutral-500 text-xs">Presence</h4>
                 <p className="text-2xl font-serif">India | Canada</p>
            </div>
        </div>

        {/* AlgoStrategic & AI Partner */}
        <div className="border-t border-white/10 pt-10 pb-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-neutral-500">
            <span className="text-sm">Our AlgoStrategic and AI partner</span>
            <a href="https://algoryx.io" target="_blank" rel="noopener noreferrer" className="inline-block focus:outline-none focus:ring-2 focus:ring-white/20 rounded">
                <img src={algoryxLogo} alt="ALGORYX.io" className="h-8 w-auto object-contain" />
            </a>
        </div>

        {/* Social Icons - Centered */}
        <div className="flex justify-center items-center gap-6 pb-10">
            <a 
                href="https://www.linkedin.com/company/squareoff-investtech/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
            >
                <Linkedin size={24} strokeWidth={1.5} />
            </a>
            <a 
                href="https://www.instagram.com/squareoffinvesttech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Instagram"
            >
                <Instagram size={24} strokeWidth={1.5} />
            </a>
        </div>

        {/* Disclaimer Section */}
        <div className="border-t border-white/10 pt-12 mb-10">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-6">Important Disclaimers</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-[10px] text-neutral-600 leading-relaxed text-justify font-light">
                <p>1. <strong>No Guarantee of Returns</strong> – Past performance does not indicate future results.</p>
                <p>2. <strong>Market Risk</strong> – Investments are subject to market fluctuations and risks.</p>
                <p>3. <strong>Liability Disclaimer</strong> – Squareoff InvestTech is not responsible for any losses incurred by clients.</p>
                <p>4. <strong>Advisory Role</strong> – Services provided are for guidance; ultimate investment decisions are made by the client.</p>
                <p>5. <strong>Client Responsibility</strong> – Clients must assess their risk appetite and financial goals before investing.</p>
                <p>6. <strong>Information Accuracy</strong> – While efforts are made to provide accurate information, the firm does not guarantee completeness or correctness of data.</p>
                <p>7. <strong>Regulatory Compliance</strong> – Investments may be subject to applicable laws, rules, and regulations.</p>
            </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-700 uppercase tracking-wider">
            <p>&copy; {new Date().getFullYear()} Squareoff InvestTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};