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

// Cursor image from public/ — path works for root and subpath deployments
const CURSOR_SRC = (() => {
  const base = typeof import.meta.env !== 'undefined' && import.meta.env.BASE_URL ? import.meta.env.BASE_URL : '/';
  const path = base.endsWith('/') ? base + 'cursorChart-32.png' : base + '/cursorChart-32.png';
  return path;
})();

const CustomCursor: React.FC = () => {
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [visible]);

  if (!visible) return null;
  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: pos.x,
        top: pos.y,
        width: 32,
        height: 32,
        marginLeft: -16,
        marginTop: -16,
      }}
      aria-hidden
    >
      <img
        src={CURSOR_SRC}
        alt=""
        width={32}
        height={32}
        className="w-full h-full object-contain"
        style={{ display: 'block' }}
      />
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MOBILE_BREAKPOINT = 768;

const ParallaxMain: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    setIsMobile(mq.matches);
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const y = useTransform(scrollY, (v) => (isMobile ? 0 : v * 0.22));
  return <motion.div style={{ y }}>{children}</motion.div>;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <CustomCursor />
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