import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car } from 'lucide-react';
import { showroomInfo } from '../data/cars';

export default function Navbar({ onOpenManagerCall, onOpenTradeIn }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inventory', href: '#inventory' },
    { label: 'Exchange', href: '#exchange', action: onOpenTradeIn },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-400 ${
          isScrolled
            ? 'bg-slate-950/96 backdrop-blur-xl border-b border-white/[0.04] shadow-lg shadow-black/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">

          {/* ── Logo ── */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg border border-yellow-700/40 flex items-center justify-center bg-slate-900/80">
              <Car className="w-4.5 h-4.5 text-yellow-600" strokeWidth={1.5} />
            </div>
            <div>
              <span className="text-base font-semibold tracking-wide text-stone-100">
                Multan Premier
              </span>
              <span className="text-[10px] block text-stone-400 tracking-widest uppercase leading-none mt-0.5">
                Motors
              </span>
            </div>
          </a>

          {/* ── Desktop Nav Links ── */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={link.action ? (e) => { e.preventDefault(); link.action(); } : undefined}
                className="text-sm font-medium text-stone-300 hover:text-stone-100 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenManagerCall}
              className="btn-nav-call flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium tracking-wide"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
              Call Manager
            </button>
          </div>

          {/* ── Mobile Trigger ── */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenManagerCall}
              className="btn-nav-call flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
              Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-white/[0.06] text-stone-300 hover:text-stone-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-t border-white/[0.04] backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-5 py-5 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (link.action) { e.preventDefault(); link.action(); }
                    setMobileMenuOpen(false);
                  }}
                  className="block py-2.5 text-sm font-medium text-stone-300 hover:text-stone-100 border-b border-white/[0.04] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenManagerCall(); }}
                  className="btn-primary w-full py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.75} />
                  Call Showroom Manager
                </button>
                <a
                  href={`https://wa.me/${showroomInfo.whatsappNumberRaw}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-ghost-gold w-full py-3 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
