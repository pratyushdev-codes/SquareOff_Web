import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { TrendingUp, Users, Smartphone, Globe, ArrowRight, BarChart3, Building2, Coins, PieChart } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

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

const AnimatedCounter = ({ value, prefix = '', suffix = '', decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 60 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });
  
    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);
  
    useEffect(() => {
      return springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
        }
      });
    }, [springValue, decimals, prefix, suffix]);
  
    return <span ref={ref}>{prefix}0{suffix}</span>;
};

export const WhyIndia: React.FC = () => {
  return (
    <div className="pt-24 bg-black text-white min-h-screen">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.span variants={fadeInUp} className="inline-block mb-4 text-xs font-bold tracking-[0.2em] uppercase text-green-500">
            The Global Alpha
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-bold font-serif mb-8 text-white leading-tight">
            The India <br/> Opportunity.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light max-w-3xl border-l border-white/20 pl-6">
            India is one of the fastest-growing markets in the world. With a digital-first economy and robust demographics, it offers structural growth that is becoming scarce in the developed world.
          </motion.p>
        </motion.div>
      </div>

      {/* Key Statistics - Enhanced Animated Cards */}
      <section className="bg-neutral-50 text-black py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                
                {/* Stat Card 1 */}
                <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                        <TrendingUp size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-6 text-green-600">
                            <TrendingUp size={24} />
                        </div>
                        <div className="text-5xl font-serif font-bold mb-2 tracking-tighter">
                            <AnimatedCounter value={18} suffix="%" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">5-Year CAGR</span>
                        <div className="h-px w-12 bg-neutral-200 my-4"></div>
                        <p className="text-xs text-neutral-500 leading-relaxed font-medium">Outperforming global markets (~12%)</p>
                    </div>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                        <Coins size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 text-blue-600">
                            <Coins size={24} />
                        </div>
                        <div className="text-5xl font-serif font-bold mb-2 tracking-tighter">
                            <AnimatedCounter value={5.1} prefix="$" suffix="T" decimals={1} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">Market Cap</span>
                        <div className="h-px w-12 bg-neutral-200 my-4"></div>
                        <p className="text-xs text-neutral-500 leading-relaxed font-medium">Ranked 4th largest globally</p>
                    </div>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                        <Building2 size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center mb-6 text-purple-600">
                            <Building2 size={24} />
                        </div>
                        <div className="text-5xl font-serif font-bold mb-2 tracking-tighter">
                            <AnimatedCounter value={2.6} suffix="k+" decimals={1} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">Listed Co's</span>
                        <div className="h-px w-12 bg-neutral-200 my-4"></div>
                        <p className="text-xs text-neutral-500 leading-relaxed font-medium">Available on National Stock Exchange</p>
                    </div>
                </div>

                {/* Stat Card 4 */}
                <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                        <Users size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-6 text-orange-600">
                            <Users size={24} />
                        </div>
                        <div className="text-5xl font-serif font-bold mb-2 tracking-tighter">
                            <AnimatedCounter value={110} suffix="M" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 block">Investors</span>
                        <div className="h-px w-12 bg-neutral-200 my-4"></div>
                        <p className="text-xs text-neutral-500 leading-relaxed font-medium">Rapidly growing domestic participation</p>
                    </div>
                </div>

            </div>
        </div>
      </section>

      {/* Detailed Analysis Content Blocks */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
            
            {/* Block 1: Growth Economy */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative">
                    <div className="bg-neutral-900 p-8 md:p-12 rounded-sm border border-white/10">
                        <BarChart3 className="w-12 h-12 text-white mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Outperformance is the Norm</h3>
                        <p className="text-neutral-400 mb-6 leading-relaxed">
                            Indian equities have delivered ~18% annualized returns over the past five years, significantly outperforming both developed and other emerging markets which averaged ~12% (IBEF).
                        </p>
                        <p className="text-neutral-400 leading-relaxed">
                            Even in the short term, the momentum is visible. Recent three-month performance shows Indian equities delivering ~16% returns, far ahead of the global average of 2% (Business Today).
                        </p>
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -z-10 top-4 -left-4 w-full h-full border border-white/20"></div>
                </div>
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">A Structural Growth Story</h2>
                    <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                        This isn't just a cyclical upswing. The market cap-to-GDP ratio is at 15-year highs, reflecting a fundamental shift where equity value is growing faster than the broader economy.
                    </p>
                    <p className="text-neutral-400 leading-relaxed">
                        With over 2,600 listed companies, investors can build truly diversified portfolios across high-growth sectors like Technology, Healthcare, Finance, and Consumer Goods.
                    </p>
                </div>
            </div>

            {/* Block 2: Ecosystem & Demographics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Demographics & Digital Infrastructure</h2>
                    <p className="text-xl text-neutral-300 leading-relaxed mb-6">
                        India is home to a young, aspirational population that is rapidly digitizing.
                    </p>
                    <ul className="space-y-6 mt-8">
                        <li className="flex items-start">
                            <Users className="w-6 h-6 text-white mr-4 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold">110 Million+ Unique Investors</h4>
                                <p className="text-neutral-500 text-sm">Domestic participation is creating a strong floor for market liquidity, reducing reliance on foreign flows.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <Smartphone className="w-6 h-6 text-white mr-4 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold">Tech-Driven Finance</h4>
                                <p className="text-neutral-500 text-sm">The 'India Stack' has revolutionized payments and settlement, creating one of the most efficient financial ecosystems in the world.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <div className="bg-white text-black p-8 md:p-12 rounded-sm">
                        <h3 className="text-3xl font-serif font-bold mb-6">The Regulation Advantage</h3>
                        <p className="text-neutral-600 mb-6 leading-relaxed">
                            Unlike many emerging markets, India boasts a robust regulatory framework overseen by SEBI (Securities and Exchange Board of India).
                        </p>
                        <p className="text-neutral-600 leading-relaxed font-medium">
                            Transparent reporting, strict corporate governance norms, and mature settlement systems make it a safe harbor for global capital.
                        </p>
                    </div>
                     <div className="absolute -z-10 bottom-4 -right-4 w-full h-full border border-white/20"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Strategic Advantage for Global Investors */}
      <section className="bg-neutral-900 py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <Globe className="w-16 h-16 text-white mx-auto mb-8" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Canada-India Corridor</h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                For Canada-based investors, accessing India can often feel complex. Squareoff InvestTech bridges this gap. Our team has deep experience and a strong track record in the Indian market, enabling you to navigate local nuances with the comfort of a global partner.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto mb-16">
                 <div className="border border-white/10 p-8 bg-black">
                    <h3 className="text-xl font-bold mb-4">Currency Diversification</h3>
                    <p className="text-neutral-500">Hedge against local currency stagnation by gaining exposure to a high-growth Rupee economy.</p>
                 </div>
                 <div className="border border-white/10 p-8 bg-black">
                    <h3 className="text-xl font-bold mb-4">Boots on the Ground</h3>
                    <p className="text-neutral-500">We don't just allocate from afar. Our research teams in Mumbai provide real-time, on-ground insights.</p>
                 </div>
                 <div className="border border-white/10 p-8 bg-black">
                    <h3 className="text-xl font-bold mb-4">Seamless Execution</h3>
                    <p className="text-neutral-500">We handle the complexity of asset allocation so you can focus on the returns.</p>
                 </div>
            </div>

            <NavLink to="/contact">
                <Button variant="primary" size="lg">
                    Explore Indian Equities <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </NavLink>
        </div>
      </section>

    </div>
  );
};