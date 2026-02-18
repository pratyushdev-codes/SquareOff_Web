import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui/Button';

export const FooterCTA: React.FC = () => {
  return (
    <div className="bg-black text-white py-20 md:py-24 pb-[max(5rem,env(safe-area-inset-bottom,0px))] md:pb-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6 text-white">
          Ready to professionalize your <span className="text-green-400">portfolio</span>?
        </h2>
        <p className="text-neutral-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Join a select group of investors who prioritize process over prediction.
        </p>
        <NavLink to="/contact">
          <Button variant="primary" size="lg" className="bg-white text-black hover:bg-neutral-200 border-0">
            Schedule a Consultation
          </Button>
        </NavLink>
      </div>
    </div>
  );
};
