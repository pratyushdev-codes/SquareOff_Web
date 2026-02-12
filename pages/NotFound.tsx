import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-24 bg-black text-white">
      <h1 className="text-9xl font-serif font-bold text-neutral-800 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-6">Page Not Found</h2>
      <p className="text-neutral-400 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <NavLink to="/">
        <Button variant="primary">Return Home</Button>
      </NavLink>
    </div>
  );
};