import React from 'react';
import { BookOpen, Clock, Monitor, Users, TrendingUp, Target, Shield, Zap, Instagram, ArrowRight, CheckCircle, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimateSection } from '../components/AnimateSection';
import tradecraftLogoImage from '../assets/tradecraft-logo.png.jpeg';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export const Academy: React.FC = () => {
    return (
        <div className="bg-white text-black min-h-screen">
            {/* Hero Section */}
            <div className="bg-black text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/30 via-black to-black"></div>
                <div className="max-w-[1800px] mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.span variants={fadeInUp} className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs font-bold tracking-[0.2em] text-green-400 uppercase mb-6">
                            Trading Simplified!
                        </motion.span>
                        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold font-serif mb-6 tracking-tight">
                            Master The Art of Trading
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light">
                            TradeCraft - The Financial Markets Academy. <br />
                            Empowering traders with practical skills applicable to global financial markets.
                        </motion.p>
                        <motion.div variants={fadeInUp}>
                            <a href="mailto:tradecraftbysquareoff@gmail.com">
                                <Button variant="primary" size="lg">Enquire Now</Button>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Introduction Section */}
            <AnimateSection>
                <section className="py-24 bg-neutral-50">
                    <div className="max-w-4xl xl:max-w-5xl mx-auto px-6 lg:px-8 text-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-bold mb-6">Welcome to TradeCraft</h2>
                        <div className="w-20 h-1 bg-black mx-auto mb-10"></div>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                            TradeCraft Financial Markets Academy, a specialized training institute dedicated to intraday trading through pure price action strategies. The academy focuses on understanding market structure, key price levels, and strategic trade planning rather than relying on complex indicators or shortcuts. The objective is to help traders read the market with clarity and confidence.
                        </p>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                            TradeCraft is committed to developing structured, disciplined, and rule-based trading approaches that remove guesswork and emotional decision-making. Every strategy is built around preparation before the market opens, allowing traders to define entry, exit, and risk parameters in advance. This systematic framework helps traders approach each trading session with a clear plan.
                        </p>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            At its core, TradeCraft emphasizes skill development, risk management, and trading psychology. The academy aims to build independent traders who act with precision, maintain discipline under pressure, and focus on long-term consistency rather than short-term impulses.
                        </p>
                    </div>
                </section>
            </AnimateSection>

            {/* About The Academy */}
            <AnimateSection>
                <section className="py-24 max-w-[1800px] mx-auto px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-bold mb-6">About TradeCraft</h2>
                            <div className="w-20 h-1 bg-black mb-8"></div>
                            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                                Founded by professional trader <strong>Varun Pandya</strong>, TradeCraft Financial Markets Academy offers specialized training in intraday trading based on price action strategies.
                            </p>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                With a background in Electrical Engineering, a postgraduate degree in Automation, and as a CFA Level 1 candidate, Varun brings both technical expertise and hands-on trading experience to the academy.
                            </p>
                            <p className="text-neutral-800 font-medium italic">
                                "Dedicated to providing the knowledge and tools needed for success in the dynamic world of trading."
                            </p>
                        </div>
                        <div className="p-8 rounded-lg border border-neutral-200">
                            <img
                                src={tradecraftLogoImage}
                                alt="Technical Charts"
                                className="w-full h-auto rounded shadow-sm opacity-90"
                            />
                        </div>
                    </div>
                </section>
            </AnimateSection>

            {/* Why Join Us? */}
            <AnimateSection>
                <section className="py-24 bg-neutral-950 text-white">
                    <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-bold mb-4">Why Join Us?</h2>
                            <p className="text-neutral-400">A curriculum designed for the modern market.</p>
                        </div>
                        {/* Featured USP Card */}
                        <div className="mb-12 bg-gradient-to-br from-red-950/40 via-neutral-900 to-neutral-900 p-8 sm:p-10 md:p-14 xl:p-16 border border-red-500/30 hover:border-red-500/60 transition-all duration-500 rounded-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-2">Our USP</div>
                            <Target className="w-14 h-14 text-red-500 mb-6" />
                            <h3 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold font-serif mb-4">Exclusive "Own Levels Strategy"</h3>
                            <p className="text-neutral-300 text-lg leading-relaxed max-w-3xl">
                                My unique levels tell me exactly when to buy, sell, and take action—all planned before the market opens. This proprietary strategy gives you a clear edge in the market with predefined entry and exit points.
                            </p>
                        </div>

                        {/* Other Feature Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
                            <div className="bg-neutral-900 p-8 border border-white/10 hover:border-white/30 transition-colors">
                                <TrendingUp className="w-10 h-10 text-green-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Comprehensive Price Action</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    One complete course that teaches trading strategies for all global markets including stocks, forex, and crypto.
                                </p>
                            </div>
                            <div className="bg-neutral-900 p-8 border border-white/10 hover:border-white/30 transition-colors">
                                <Zap className="w-10 h-10 text-yellow-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Intraday Trading Focus</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Master the art of intraday trading with real-time chart analysis and actionable techniques.
                                </p>
                            </div>
                            <div className="bg-neutral-900 p-8 border border-white/10 hover:border-white/30 transition-colors">
                                <BookOpen className="w-10 h-10 text-blue-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">Raw, Practical Education</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Learn directly from charts with examples, ensuring practical knowledge rather than just theory.
                                </p>
                            </div>
                            <div className="bg-neutral-900 p-8 border border-white/10 hover:border-white/30 transition-colors">
                                <Clock className="w-10 h-10 text-purple-500 mb-6" />
                                <h3 className="text-xl font-bold mb-3">22 Session Curriculum</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    A comprehensive, 1.5-hour per session training program that covers everything you need to know.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimateSection>

            {/* What We Offer */}
            <AnimateSection>
                <section className="py-24 max-w-[1800px] mx-auto px-6 lg:px-8 overflow-visible">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="text-neutral-500 uppercase tracking-widest text-sm font-bold mb-2 block">The Experience</span>
                            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-serif font-bold mb-8">What We Offer?</h2>
                            <div className="space-y-8">
                                <div className="flex">
                                    <div className="bg-neutral-100 p-3 rounded-full h-fit mr-6">
                                        <Clock size={24} className="text-neutral-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Flexible Timings</h4>
                                        <p className="text-neutral-600">Take classes that fit your schedule, offering flexibility for busy individuals.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="bg-neutral-100 p-3 rounded-full h-fit mr-6">
                                        <Users size={24} className="text-neutral-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">One-on-One</h4>
                                        <p className="text-neutral-600">Personalized attention and a focused learning environment for better understanding.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="bg-neutral-100 p-3 rounded-full h-fit mr-6">
                                        <Shield size={24} className="text-neutral-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Post-Course Support</h4>
                                        <p className="text-neutral-600">Ongoing guidance even after completing the course to ensure continued growth and success.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="bg-neutral-100 p-3 rounded-full h-fit mr-6">
                                        <Monitor size={24} className="text-neutral-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Fully Online Learning</h4>
                                        <p className="text-neutral-600">Access all course materials and sessions online, enabling you to learn from anywhere at your convenience.</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="bg-neutral-100 p-3 rounded-full h-fit mr-6">
                                        <TrendingUp size={24} className="text-neutral-700" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Empowerment Through Skill Building</h4>
                                        <p className="text-neutral-600">Gain the confidence and expertise to trade successfully in any financial market.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Social Media & Contact */}
                        <div className="bg-neutral-50 p-10 rounded-xl border border-neutral-100 h-fit">
                            <h3 className="text-2xl font-bold mb-6">Social Media Presence</h3>
                            <p className="text-neutral-600 mb-8 leading-relaxed">
                                Our social media presence is driven by a community of enthusiastic and engaged followers. With their support, we have cultivated a vibrant and positive online environment.
                            </p>

                            <a
                                href="https://www.instagram.com/tradecraftbysquareoff"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-bold hover:opacity-90 transition-opacity mb-8"
                            >
                                <Instagram size={24} />
                                <span>@TRADECRAFTBYSQUAREOFF</span>
                            </a>

                            <div className="border-t border-neutral-200 pt-8">
                                <h4 className="font-bold mb-6 text-lg">Get in Touch</h4>
                                <div className="space-y-6 text-sm text-neutral-600">
                                    <div className="flex items-start">
                                        <MapPin className="w-5 h-5 text-neutral-800 mr-3 shrink-0" />
                                        <span>UL-15 Arjun Tower, Shivranjani Crossroads, Satellite, Ahmedabad-15</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="w-5 h-5 text-neutral-800 mr-3 shrink-0" />
                                        <span>+91-9825367896</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="w-5 h-5 text-neutral-800 mr-3 shrink-0" />
                                        <span className="break-all">tradecraftbysquareoff@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </AnimateSection>
        </div>
    );
};