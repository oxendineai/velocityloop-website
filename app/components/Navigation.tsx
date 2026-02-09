'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A2540]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0A2540] flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-black text-lg">VL</span>
            </div>
            <span className="text-white font-black text-xl tracking-tight">VELOCITYLOOP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#hvac-solution" className="text-slate-300 hover:text-white font-medium transition-colors">
              Solutions
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white font-medium transition-colors">
              Pricing
            </a>
            <a href="#live-demo" className="text-slate-300 hover:text-white font-medium transition-colors">
              Live Demo
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-[#00D4FF] text-[#0A2540] font-bold rounded-lg hover:bg-[#00E5FF] transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <a 
                href="#hvac-solution" 
                className="text-slate-300 hover:text-white font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="#pricing" 
                className="text-slate-300 hover:text-white font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#live-demo" 
                className="text-slate-300 hover:text-white font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Live Demo
              </a>
              <a 
                href="#contact" 
                className="px-6 py-2.5 bg-[#00D4FF] text-[#0A2540] font-bold rounded-lg hover:bg-[#00E5FF] transition-all text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}