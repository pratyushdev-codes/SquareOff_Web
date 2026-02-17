import React from 'react';
import { Button } from '../components/ui/Button';
import { UserPlus, ShieldCheck, FileText, Target, Wallet, Zap, BarChart2, ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { AnimateSection } from '../components/AnimateSection';
import servicesImage from '../assets/partners.jpg';

const steps = [
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Create Account",
    description: "Sign up in seconds. We require basic details to set up your secure profile on our platform."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "KYC & Verification",
    description: "Complete your Know Your Customer (KYC) compliance digitally. Fast, paperless, and secure."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Risk Profiling",
    description: "We analyze your Annual Income, Assets, Liabilities, and financial goals to mathematically determine your risk tolerance."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Strategy Selection",
    description: "Based on your profile, choose a plan that fits. From conservative wealth preservation to aggressive growth models."
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Fund Your Account",
    description: "Transfer capital securely. We utilize trusted Partner Platforms for all fund handling to ensure maximum security."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Execute & Start",
    description: "Confirm your allocation. Our algorithms or advisory team (depending on your plan) take over the execution."
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Track Performance",
    description: "Monitor your portfolio in real-time. Receive quarterly reports and rebalancing alerts automatically."
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

export const StartInvesting: React.FC = () => {
  return (
    <div className="pt-24 bg-black text-white min-h-screen">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl font-bold font-serif mb-6">
            Begin Your <br /> Wealth Journey
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg sm:text-xl xl:text-2xl text-neutral-400 mb-8 max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
            Institutional-grade strategies, now accessible to everyone. <br />
            <span className="text-white font-semibold">No minimum capital required.</span>
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">Get Started Now</Button>
          </motion.div>
        </motion.div>
      </div>

      {/* The Process Timeline */}
      <AnimateSection>
        <section className="py-24 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">How It Works</h2>
              <p className="text-neutral-500">A seamless path from onboarding to execution.</p>
            </div>

            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-px bg-neutral-800 md:left-1/2 md:-ml-px"></div>

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Icon Bubble */}
                  <div className="absolute left-0 md:left-1/2 md:-ml-7 w-14 h-14 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center text-white z-10">
                    {step.icon}
                  </div>

                  {/* Content - Left Side (for even indices on desktop) */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-neutral-950 p-6 border border-white/5 hover:border-white/20 transition-colors duration-300">
                      <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2 block">Step {index + 1}</span>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* Paid Consultation Block */}
      <AnimateSection>
        <section className="py-24 bg-white text-black">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-bold mb-6">Need a personalized roadmap?</h2>
                <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                  Before executing, you may want a deep-dive into your financial health. Book a paid consultation with our senior strategy team.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-neutral-700">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>1-on-1 Session with Investment Manager</span>
                  </li>
                  <li className="flex items-center text-neutral-700">
                    <FileText className="w-5 h-5 mr-3" />
                    <span>Detailed Portfolio Audit</span>
                  </li>
                </ul>
                <Button variant="secondary" className="bg-black text-white hover:bg-neutral-800">
                  Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] xl:h-[500px] bg-neutral-100 p-8 flex items-center justify-center border border-black/10">
                <div className="text-center">
                  <h3 className="text-9xl font-serif font-bold text-neutral-200">?</h3>
                </div>
                <div className="absolute inset-0 border border-black/5 m-4">
                  <img src={servicesImage} alt="Squareoff InvestTech" className="w-full h-full object-cover" />

                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* Final CTA */}
      <AnimateSection>
        <section className="py-24 bg-neutral-900 text-center">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6">Ready to professionalize your portfolio?</h2>
            <p className="text-neutral-400 mb-8">
              Whether you have ₹5,000 or ₹5 Crore, our process remains the same: Disciplined. Data-driven. Transparent.
            </p>
            <NavLink to="/contact">
              <Button variant="primary" size="lg" className="w-full md:w-auto">
                Create Account & Start Investing
              </Button>
            </NavLink>
            <p className="mt-6 text-xs text-neutral-600">
              *Investments are subject to market risks. Read all scheme related documents carefully.
            </p>
          </div>
        </section>
      </AnimateSection>

    </div>
  );
};