import React from 'react';
import { ShieldCheck, Repeat2, Award, ArrowRight, Star } from 'lucide-react';
import { trustBadgesData, showroom } from '../config';

const ICON_MAP = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-yellow-700" strokeWidth={1.5} />,
  Repeat:      <Repeat2    className="w-5 h-5 text-yellow-700" strokeWidth={1.5} />,
  Award:       <Award      className="w-5 h-5 text-yellow-700" strokeWidth={1.5} />,
};

export default function TrustBadges({ onOpenTradeIn }) {
  return (
    <section id="trust" className="py-20 sm:py-28 bg-slate-950 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Section Label ── */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-yellow-700 mb-3">
              Why {showroom.city}'s Executive Class Chooses Us
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100 leading-snug">
              Uncompromising Standards
            </h2>
          </div>
          <p className="text-stone-400 text-sm max-w-xs leading-relaxed sm:text-right">
            Every transaction conducted with complete transparency, speed, and dignity.
          </p>
        </div>

        {/* ── 3-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {trustBadgesData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-950 p-8 sm:p-10 flex flex-col gap-5 group hover:bg-slate-900/60 transition-colors duration-300"
            >
              {/* Icon + Badge row */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-yellow-800/30 flex items-center justify-center">
                  {ICON_MAP[item.icon]}
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-yellow-800">
                  {item.badge}
                </span>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-stone-100 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Inline action */}
              {item.id === 2 && (
                <button
                  onClick={onOpenTradeIn}
                  className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-yellow-700 hover:text-yellow-600 transition-colors"
                >
                  Estimate Trade-In Value
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              )}
              {item.id === 3 && (
                <a
                  href={showroom.googleMapsUrl}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-yellow-700 hover:text-yellow-600 transition-colors"
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-700 text-yellow-700" />)}
                  </div>
                  Read {showroom.reviewsCount}+ Google Reviews
                </a>
              )}
            </div>
          ))}
        </div>

        {/* ── Metric Strip ── */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center pt-10 border-t border-white/[0.04]">
          {[
            { value: `${showroom.vehiclesDelivered}`, label: 'Premium Cars Delivered' },
            { value: '100%', label: 'Clear Biometric Transfers' },
            { value: `${showroom.exchangeTime}`, label: 'Spot Exchange Settlement' },
            { value: `${showroom.rating} ★`, label: 'Verified Google Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl sm:text-3xl font-serif font-bold brushed-gold mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-stone-500 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
