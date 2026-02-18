import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Shield, TrendingUp, Anchor } from 'lucide-react';
import { AnimateSection } from '../components/AnimateSection';
import timelineImage from '../assets/Timeline.jpeg';

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

export const About: React.FC = () => {
  return (
    <div className="pt-24 bg-black text-white min-h-screen">

      {/* Hero Section */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-9xl font-bold font-serif mb-8 text-white">
            About Squareoff <span className="text-green-500">I</span>nvest<span className="text-red-500">T</span>ech
          </motion.h1>
          <motion.div variants={fadeInUp} className="border-l-2 border-white/20 pl-8 ml-2">
            <p className="text-lg sm:text-xl md:text-2xl xl:text-2xl text-neutral-300 leading-relaxed font-light mb-8">
              Squareoff InvestTech was founded in 2021 to bring a professional, research-first approach to wealth management. Born from the founder’s practical trading experience, the firm now delivers disciplined strategies and clear reporting so clients can build wealth with confidence.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* The Evolution Story */}
      <AnimateSection>
        <section className="py-24 bg-neutral-900/50 border-y border-white/5">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-neutral-500 uppercase tracking-[0.2em] text-sm mb-4 block">Our Journey</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-bold mb-8">From Traders to <span className="text-green-500">I</span>nvest<span className="text-red-500">T</span>ech</h2>
                <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                  <p>
                    Squareoff Traders began as a venture led by a founder exploring the markets without formal boundaries. It was a period of intense learning, testing hypotheses, and understanding the raw mechanics of market movements.
                  </p>
                  <p>
                    With experience and expertise gained over time, the founder launched <strong>Squareoff InvestTech</strong>—a professional, market-ready firm focused on disciplined strategies, research-backed decisions, and delivering consistent returns for clients.
                  </p>
                  <p className="text-white italic pt-4">
                    "Formerly Squareoff Traders — now a market-ready firm focused on disciplined strategies, research-backed decisions, and transparent client outcomes."
                  </p>
                </div>
              </div>

              <img
                src={timelineImage}
                alt="technical-chart"
                className="object-contain w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[700px]"
              />

            </div>
          </div>
        </section>
      </AnimateSection>

      {/* Mission & Vision */}
      <AnimateSection>
        <section className="py-24">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white text-black p-8 sm:p-10 md:p-14 xl:p-16 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-60">Our Mission</h3>
                  <h4 className="text-2xl sm:text-3xl xl:text-4xl font-serif font-bold mb-6">Where Smart Money Begins.</h4>
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    We help clients grow and protect their wealth through disciplined, transparent, and research-backed strategies.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 text-neutral-100 transform group-hover:scale-110 transition-transform duration-700">
                  <Anchor size={200} strokeWidth={0.5} />
                </div>
              </div>

              <div className="bg-neutral-900 text-white p-8 sm:p-10 md:p-14 xl:p-16 border border-white/10 relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-neutral-400">Our Vision</h3>
                  <h4 className="text-2xl sm:text-3xl xl:text-4xl font-serif font-bold mb-6">Global Leadership.</h4>
                  <p className="text-neutral-400 text-lg leading-relaxed">
                    To be a trusted leader in wealth management over the next decade, delivering high-performing, transparent investment solutions to clients across India and Canada.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 text-neutral-800 transform group-hover:scale-110 transition-transform duration-700">
                  <TrendingUp size={200} strokeWidth={0.5} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* Core Values */}
      <AnimateSection>
        <section className="py-16">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold mb-12 border-b border-white/10 pb-6">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4 group">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full text-neutral-400 group-hover:text-white group-hover:border-white transition-colors">
                  <Eye size={20} />
                </div>
                <h3 className="text-xl font-bold">Transparency</h3>
                <p className="text-neutral-500 leading-relaxed">
                  We believe in complete openness about our strategies, fees, and performance. No hidden clauses, just clear results.
                </p>
              </div>

              <div className="space-y-4 group">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full text-neutral-400 group-hover:text-white group-hover:border-white transition-colors">
                  <Shield size={20} />
                </div>
                <h3 className="text-xl font-bold">Risk Management</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Protecting capital is our first priority. Our rigorous risk protocols ensure that we stay resilient in volatile markets.
                </p>
              </div>

              <div className="space-y-4 group">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full text-neutral-400 group-hover:text-white group-hover:border-white transition-colors">
                  <TrendingUp size={20} />
                </div>
                <h3 className="text-xl font-bold">Long-Term Growth</h3>
                <p className="text-neutral-500 leading-relaxed">
                  We ignore short-term noise to focus on structural wealth creation over decades, not days.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimateSection>

      {/* Founder Profile */}
      <AnimateSection>
        <section className="py-24 pb-40 bg-white text-black mt-16">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
            <div className="gap-16 items-center">
              {/* Left Column: Text */}
              <div className="order-2 lg:order-1">
                <div className="mb-12">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif font-bold mb-2">Varun Pandya</h2>
                  <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Founder & Strategy Lead</p>
                </div>

                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    Varun is a professional trader with an Electrical Engineering background and a postgraduate degree in Automation. A <strong>CFA Level 1 candidate</strong>, he combines technical expertise with hands-on trading experience.
                  </p>
                  <p>
                    Varun leads the firm’s research and strategy, focused on disciplined, risk-aware investing. He is passionate about empowering clients with disciplined, research-backed strategies to grow and protect wealth in global financial markets.
                  </p>
                  <p>
                    His unique background in automation allows Squareoff InvestTech to bridge the gap between algorithmic precision and fundamental financial principles.
                  </p>
                </div>

                <div className="pt-8 border-t border-black/10 mt-12">
                  <p className="font-serif italic text-xl">
                    "Technology doesn't replace the human advisor; it liberates them to focus on what matters—the client's goals."
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}

            </div>
          </div>
        </section>
      </AnimateSection>
    </div>
  );
};
