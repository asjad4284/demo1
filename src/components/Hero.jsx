import React from 'react';
import { Phone, ArrowRight, Check, MapPin } from 'lucide-react';
import { showroomInfo } from '../data/cars';

export default function Hero({ onOpenManagerCall }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* ════════════════════════════════════════════
          BACKGROUND — moody forest + car composition
      ════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {/* Base car image */}
        <img
          src="/hero-car.jpg"
          alt="Executive Luxury SUV"
          className="w-full h-full object-cover object-center scale-[1.04] brightness-105 contrast-110 saturate-[0.88]"
        />

        {/* Atmosphere: deepen the forest mood with a dark teal-green color wash */}
        <div className="absolute inset-0 bg-[#040d10]/40 mix-blend-multiply" />

        {/* Left content zone — strong dark ramp */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/82 to-transparent" />

        {/* Edge vignette — top & bottom depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-transparent to-slate-950/90" />

        {/* Subtle radial corner darkening */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 80% at 70% 50%, transparent 40%, rgba(2,4,10,0.55) 100%)',
          }}
        />
      </div>

      {/* ════════════════════════════════════════════
          HERO CONTENT
      ════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-28 lg:pb-36">
        <div className="max-w-[640px]">

          {/* ── Eyebrow ── */}
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-stone-400 mb-8 flex items-center gap-2">
            <span className="w-6 h-px bg-yellow-700/60 inline-block"></span>
            South Punjab's Finest · Bosan Road, Multan
          </p>

          {/* ── Headline ── */}
          <h1
            className="font-serif font-extrabold leading-[1.06] tracking-tight mb-7"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.5rem)' }}
          >
            <span className="block text-stone-50">Multan's</span>
            {/*
              "Premier" — metallic animated gold + bloom halo.
              data-text mirrors the visible text for the ::after pseudo bloom.
            */}
            <span
              className="gold-bloom-wrap metallic-gold"
              data-text="Premier"
            >
              Premier
            </span>
            <span className="block text-stone-50"> Auto Dealership</span>
          </h1>

          {/* ── Subheadline ── */}
          <p className="text-stone-300 font-light leading-[1.75] mb-9 max-w-[520px]"
             style={{ fontSize: 'clamp(0.92rem, 1.4vw, 1.08rem)' }}>
            An exclusive fleet of 150-point certified luxury SUVs, executive sedans, and exotic imports — delivered with complete transparency and guaranteed ownership transfer.
          </p>

          {/* ── Elegant Gold Checkmark Points ── */}
          <ul className="space-y-2.5 mb-10">
            {[
              '100% Genuine Auction Sheet Verified',
              'Instant Biometric Ownership Transfer',
              'Spot Cash Trade-In · 45-Minute Settlement',
            ].map((point) => (
              <li key={point} className="flex items-center gap-3 text-sm text-stone-300 font-light">
                <span className="flex-shrink-0 w-4 h-4 rounded-sm flex items-center justify-center"
                  style={{ background: 'rgba(184,150,46,0.12)', border: '1px solid rgba(184,150,46,0.35)' }}>
                  <Check className="w-2.5 h-2.5" style={{ color: '#C9A84C' }} strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>

          {/* ── CTA Group ── */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-9">
            <button
              onClick={onOpenManagerCall}
              className="btn-primary flex items-center justify-center gap-2.5 px-8 py-[14px] rounded-xl text-[0.875rem] font-semibold"
            >
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              Call Manager Now
            </button>
            <a
              href="#inventory"
              className="btn-ghost-gold flex items-center justify-center gap-2 px-8 py-[14px] rounded-xl text-[0.875rem] font-semibold"
            >
              View Inventory
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </a>
          </div>

          {/* ── Manager Desk Info — small, icon-integrated ── */}
          <div className="flex items-center gap-4 pt-5 border-t border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-[11px] text-stone-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0"></span>
              Desk Active
            </div>
            <div className="w-px h-3 bg-white/10"></div>
            <a
              href={`tel:${showroomInfo.managerPhoneRaw}`}
              className="text-[11px] text-stone-400 hover:text-stone-200 transition-colors font-medium"
            >
              {showroomInfo.managerPhone}
            </a>
            <div className="w-px h-3 bg-white/10"></div>
            <span className="text-[11px] text-stone-500">{showroomInfo.managerName}</span>
            <div className="w-px h-3 bg-white/10 hidden sm:block"></div>
            <a
              href={showroomInfo.googleMapsUrl}
              target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-[11px] text-stone-500 hover:text-stone-300 transition-colors"
            >
              <MapPin className="w-3 h-3" strokeWidth={1.75} />
              Bosan Road, Multan
            </a>
          </div>

        </div>
      </div>

      {/* ── Bottom fade to next section ── */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
