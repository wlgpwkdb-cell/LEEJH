import React from 'react';
import { motion } from 'motion/react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-sans font-bold text-xl tracking-tighter"
        >
          LEE JI HYE
        </motion.div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-black/60">
          {[
            { label: 'About', href: '#expertise' },
            { label: 'Highlights', href: '#highlights' },
            { label: 'Key Project', href: '#key-projects' },
            { label: 'Works', href: '#works' },
            { label: 'Workflow', href: '#process' },
            { label: 'Contact', href: '#contact' }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
