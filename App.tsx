import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Navbar } from './components/Layout/Navbar';
import { FooterCTA } from './components/Layout/FooterCTA';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { WhyIndia } from './pages/WhyIndia';
import { Academy } from './pages/Academy';
import { Contact } from './pages/Contact';
import { StartInvesting } from './pages/StartInvesting';
import { NotFound } from './pages/NotFound';
import { Chatbot } from './components/Chatbot';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const ParallaxMain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => v * 0.22);
  return <motion.div style={{ y }}>{children}</motion.div>;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <ParallaxMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-india" element={<WhyIndia />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/start-investing" element={<StartInvesting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </ParallaxMain>
        </main>
        <Chatbot />
        <FooterCTA />
        <Footer />
      </div>
    </Router>
  );
};

export default App;