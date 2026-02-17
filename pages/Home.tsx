import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { MarketFeed } from '../components/MarketFeed';
import { AnimateSection } from '../components/AnimateSection';
import backgroundImage from '../assets/background 3.jpg';

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

export const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image - light and translucent */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 dark:opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Background gradient adjustment for light/dark */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-200/50 via-white to-white dark:from-neutral-800/20 dark:via-black dark:to-black"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="space-y-8"
          >
            <motion.span variants={fadeInUp} className="inline-block py-1 px-3 border border-black/10 dark:border-white/20 rounded-full text-xs font-medium tracking-[0.2em] text-neutral-600 dark:text-neutral-400 uppercase">
              Institutional Grade Investment
            </motion.span>
            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] 2xl:text-[11rem] font-bold tracking-tight text-black dark:text-white font-serif">
              Elevate Your <br className="hidden md:block" />
              <span className="text-neutral-500">Portfolio</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="max-w-2xl xl:max-w-3xl mx-auto text-base sm:text-lg md:text-xl xl:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              We bridge the gap between retail ambition and institutional discipline. Serving clients across India with premium advisory and automated strategies.
            </motion.p>
            <motion.div variants={fadeInUp} className="pt-8 flex flex-col md:flex-row items-center justify-center gap-4">
              <NavLink to="/start-investing">
                <Button variant="primary" size="lg">Start Investing</Button>
              </NavLink>
              <NavLink to="/services">
                <Button variant="outline" size="lg">Our Strategies</Button>
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <AnimateSection>
        <section className="py-24 bg-neutral-100 dark:bg-white text-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4">
                  <TrendingUp size={24} />
                </div>
                <h3 className="text-xl font-bold">Data-Driven Alpha</h3>
                <p className="text-neutral-600 leading-relaxed">
                  We don't guess. We analyze. Our algorithms process millions of data points to identify high-probability investment opportunities in the Indian markets.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold">Cross-Border Expertise</h3>
                <p className="text-neutral-600 leading-relaxed">
                  With presence in Ahmedabad and Toronto, we offer a unique perspective for NRIs and global investors looking to tap into India's growth story.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-full mb-4">
                  <Shield size={24} />
                </div>
                <h3 className="text-xl font-bold">Risk First Approach</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Capital preservation is our primary mandate. We employ rigorous risk management protocols typically reserved for hedge funds.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* Introduction */}
      <AnimateSection>
        <section className="py-20 md:py-32 xl:py-40 border-t border-neutral-200 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col justify-center h-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-8 font-serif">From Traders <br />to <span className="text-neutral-500"><span className="text-green-500">I</span>nvest<span className="text-red-500">T</span>ech</span></h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6 leading-relaxed">
                  Formerly known as Squareoff Traders, we have evolved. Our journey began on the trading floor, executing high-frequency strategies. Today, as Squareoff InvestTech, we bring that same execution precision to long-term wealth creation.
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-8 leading-relaxed">
                  We believe technology is the great equalizer. By combining human insight with machine efficiency, we deliver a superior investment experience.
                </p>

                <div className="space-y-8">
                  <NavLink to="/about" className="inline-flex items-center text-black dark:text-white border-b border-black dark:border-white pb-1 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors">
                    Read our full story <ArrowRight className="ml-2 w-4 h-4" />
                  </NavLink>

                  <div className="p-6 bg-neutral-50 dark:bg-neutral-900 border-l-4 border-black dark:border-white">
                    <p className="font-serif text-xl font-bold italic text-black dark:text-white">"Discipline is the bridge between goals and accomplishment."</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] max-h-[500px] lg:max-h-[600px] xl:max-h-[700px] bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden border border-neutral-200 dark:border-white/10 shadow-2xl relative z-10">
                  <MarketFeed />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* CTA */}
      <AnimateSection>
        <section className="py-24 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-black dark:text-white">Ready to professionalize your portfolio?</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8 text-lg">Join a select group of investors who prioritize process over prediction.</p>
            <NavLink to="/contact">
              <Button variant="primary" size="lg">Schedule a Consultation</Button>
            </NavLink>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
};