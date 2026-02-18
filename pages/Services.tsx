import React from 'react';
import { LineChart, ShieldCheck, Briefcase, Compass, Landmark, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimateSection } from '../components/AnimateSection';

import tradecraftLogo from '../assets/tradecraft-logo.png.jpeg';

const services = [
  {
    icon: <Compass className="w-8 h-8" />,
    title: "Investment Advisory",
    description: "Personalized guidance for retail investors tailored to your income, financial goals, and risk tolerance. We provide the clarity needed to make informed decisions for both long-term growth and immediate financial needs."
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Portfolio Management",
    description: "Active, professional management of your capital. Whether starting with ₹1 or ₹1 Crore, our disciplined, algorithm-assisted approach ensures your portfolio is constantly monitored and optimized for consistent performance."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Risk Analysis & Allocation",
    description: "We prioritize capital preservation through a balanced, moderate risk approach. By strategically diversifying across asset classes, we aim to smooth out market volatility while capturing steady, structural growth."
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Market Research & Strategy",
    description: "A dual-lens approach combining Fundamental analysis for intrinsic value and Technical analysis for market timing. We dig deep into data to uncover high-probability opportunities that others might miss."
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Long-term Wealth Planning",
    description: "Goal-based financial architecture. Whether planning for retirement, education, or legacy, we map out a precise financial path to help you achieve your specific life milestones with confidence."
  }
];

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

export const Services: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="mb-24 border-b border-white/10 pb-16"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold font-serif mb-8 text-white">
            What We Do
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl xl:text-2xl text-neutral-400 max-w-3xl xl:max-w-4xl leading-relaxed font-light">
            We simplify complexity. Our suite of services bridges the gap between algorithmic precision and human insight, designed to meet the diverse needs of the modern investor.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <AnimateSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 mb-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border border-white/10 bg-neutral-950 p-10 hover:bg-neutral-900 hover:border-white/30 transition-all duration-500 flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <div className="mb-8 text-neutral-400 group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">{service.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-sm md:text-base group-hover:text-neutral-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA Card injected into grid for visual balance */}
            <div className="border border-white/10 bg-white text-black p-10 flex flex-col justify-center items-start">
              <h3 className="text-3xl font-serif font-bold mb-4">Ready to start?</h3>
              <p className="text-neutral-600 mb-8">
                Let's build a portfolio that aligns with your life goals.
              </p>
              <NavLink to="/contact">
                <Button variant="secondary" className="bg-black text-white hover:bg-neutral-800">
                  Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </NavLink>
            </div>
          </div>
        </AnimateSection>

        {/* Academy Promo */}
        <AnimateSection>
          <div className="relative rounded-sm overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-neutral-900">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
            <div className="relative z-10 p-8 sm:p-12 md:p-20 xl:p-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-4 block">Education First</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6 font-serif">TradeCraft Academy</h2>
                <p className="text-xl text-neutral-400 mb-8 max-w-md">
                  We believe an educated investor is a better investor. Explore our deep dives into market methodologies.
                </p>
                <NavLink to="/academy">
                  <Button variant="outline">Explore The Academy</Button>
                </NavLink>
              </div>
              <div className="flex items-center justify-center">
                <img src={tradecraftLogo} alt="TradeCraft Academy Logo" className="w-full max-w-md object-contain drop-shadow-2xl rounded-xl" />
              </div>
            </div>
          </div>
        </AnimateSection>
      </div>
    </div>
  );
};