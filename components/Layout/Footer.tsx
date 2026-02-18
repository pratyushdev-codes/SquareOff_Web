import React from 'react';
import { NavLink } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';
import algoryxLogo from '../../assets/Algoryx.jpeg';
import logoCombined from '../../assets/FullLogo.jpeg';

export const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 bg-black text-white pt-20 border-t border-white/10 min-h-[320px] pb-[max(6rem,env(safe-area-inset-bottom,0px))] md:pb-10">
            <div className="max-w-[1800px] mx-auto px-6 lg:px-8 xl:px-12">

                {/* Top Section: Brand + Links + Locations — matches reference layout */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 mb-16">

                    {/* Brand — logo + name only (no social here) */}
                    <div className="flex items-center shrink-0">
                        <img
                            src={logoCombined}
                            alt="Squareoff InvestTech"
                            className="shrink-0 object-contain h-20 sm:h-24 md:h-28 w-auto max-w-[340px] sm:max-w-[420px] md:max-w-[500px]"
                        />
                    </div>

                    {/* EXPLORE + CONNECT — two columns */}
                    <div className="grid grid-cols-2 gap-x-16 gap-y-0 text-sm">
                        <div>
                            <h4 className="font-semibold uppercase tracking-widest mb-6 text-neutral-400 text-xs">Explore</h4>
                            <ul className="space-y-4">
                                <li><NavLink to="/" className="text-white hover:text-neutral-300 transition-colors">Home</NavLink></li>
                                <li><NavLink to="/about" className="text-white hover:text-neutral-300 transition-colors">About Us</NavLink></li>
                                <li><NavLink to="/services" className="text-white hover:text-neutral-300 transition-colors">Services</NavLink></li>
                                <li><NavLink to="/why-india" className="text-white hover:text-neutral-300 transition-colors">Why India</NavLink></li>
                                <li><NavLink to="/academy" className="text-white hover:text-neutral-300 transition-colors">TradeCraft</NavLink></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold uppercase tracking-widest mb-6 text-neutral-400 text-xs">Connect</h4>
                            <ul className="space-y-4">
                                <li><NavLink to="/contact" className="text-white hover:text-neutral-300 transition-colors">Contact</NavLink></li>
                                <li><NavLink to="/start-investing" className="text-white hover:text-neutral-300 transition-colors">Start Investing</NavLink></li>
                            </ul>
                        </div>
                    </div>

                    {/* PRESENCE — India | Canada prominent */}
                    <div className="shrink-0">
                        <h4 className="font-semibold uppercase tracking-widest mb-6 text-neutral-400 text-xs">Presence</h4>
                        <p className="text-2xl md:text-3xl font-serif text-white">India | Canada</p>
                    </div>
                </div>

                {/* Divider + AlgoStrategic & AI Partner — centered */}
                <div className="border-t border-white/10 pt-10 pb-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-neutral-400">
                    <span className="text-sm">Our AlgoStrategic and AI partner</span>
                    <a href="https://algoryx.io" target="_blank" rel="noopener noreferrer" className="inline-block focus:outline-none focus:ring-2 focus:ring-white/20 rounded">
                        <img src={algoryxLogo} alt="ALGORYX.io" className="h-8 w-auto object-contain rounded-xl" />
                    </a>
                </div>

                {/* Divider + Social Icons — centered at bottom only */}
                <div className="border-t border-white/10 pt-10 flex justify-center items-center gap-6 pb-4">
                    <a
                        href="https://www.linkedin.com/company/squareoff-investtech/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} strokeWidth={1.5} />
                    </a>
                    <a
                        href="https://www.instagram.com/squareoffinvesttech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={24} strokeWidth={1.5} />
                    </a>
                </div>

                {/* Disclaimer Section */}
                <div className="border-t border-white/10 pt-12 mb-10">
                    <h5 className="text-[10px] font-bold uppercase tracking-widest text-neutral-600 mb-6">Important Disclaimers</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-3 text-[10px] text-neutral-600 leading-relaxed text-justify font-light">
                        <p>1. <strong>No Guarantee of Returns</strong> – Past performance does not indicate future results.</p>
                        <p>2. <strong>Market Risk</strong> – Investments are subject to market fluctuations and risks.</p>
                        <p>3. <strong>Liability Disclaimer</strong> – Squareoff InvestTech is not responsible for any losses incurred by clients.</p>
                        <p>4. <strong>Advisory Role</strong> – Services provided are for guidance; ultimate investment decisions are made by the client.</p>
                        <p>5. <strong>Client Responsibility</strong> – Clients must assess their risk appetite and financial goals before investing.</p>
                        <p>6. <strong>Information Accuracy</strong> – While efforts are made to provide accurate information, the firm does not guarantee completeness or correctness of data.</p>
                        <p>7. <strong>Regulatory Compliance</strong> – Investments may be subject to applicable laws, rules, and regulations.</p>
                        <p>8. <strong>Non-SEBI Registered Entity</strong> – SquareOff InvestTech is a privately operated algorithmic software and technology company and is not registered with the Securities and Exchange Board of India (SEBI).</p>
                        <p>9. <strong>Educational & Informational Use Only</strong> – We do not provide investment advice, recommendations, or portfolio management services. All tools, algorithms, and information provided by us are for educational, research, and informational purposes only.</p>
                        <p>10. <strong>User Risk</strong> – Any trading or investment decisions made using our software are entirely at the user's own risk, and SquareOff InvestTech will not be liable for any losses or damages arising from such decisions.</p>
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