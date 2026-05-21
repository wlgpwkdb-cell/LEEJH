/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Expertise } from './components/About';
import KeyProjects from './components/KeyProjects';
import Works from './components/Works';
import { Process, Contact } from './components/Contact';
import { motion } from 'motion/react';
import PrintPortfolio from './components/PrintPortfolio';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen font-sans text-black antialiased selection:bg-emerald-100 selection:text-emerald-900"
    >
      {/* Screen layout - Hidden on print */}
      <div className="no-print">
        <Navbar />
        <main>
          <Hero />
          <Expertise />
          <KeyProjects />
          <Works />
          <Process />
          <Contact />
        </main>
      </div>

      {/* Print-only layout - Displayed only on print */}
      <div className="print-only">
        <PrintPortfolio />
      </div>
    </motion.div>
  );
}
