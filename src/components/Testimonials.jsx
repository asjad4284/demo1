import React from 'react';
import { Star, Quote } from 'lucide-react';
import { clientReviews, showroom } from '../config';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-slate-950 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Header ── */}
        <div className="max-w-xl mb-14">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-yellow-700 mb-3">
            Client Endorsements
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
            Trusted by South Punjab's Business Leaders
          </h2>
        </div>

        {/* ── Reviews ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clientReviews.map((review, idx) => (
            <div
              key={idx}
              className="surface-card rounded-2xl p-7 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-700 text-yellow-700" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-stone-300 leading-relaxed italic flex-1">
                "{review.text}"
              </blockquote>

              {/* Author */}
              <div className="pt-4 border-t border-white/[0.05]">
                <div className="text-sm font-semibold text-stone-100">{review.name}</div>
                <div className="text-xs text-yellow-700 mt-0.5">{review.role}</div>
                <div className="text-xs text-stone-600 mt-1.5">{review.car}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Google Badge ── */}
        <div className="mt-12 flex justify-center">
          <a
            href={showroom.googleMapsUrl}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/[0.07] bg-slate-900/50 text-sm text-stone-400 hover:text-stone-200 hover:border-yellow-800/30 transition-all"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-700 text-yellow-700" />)}
            </div>
            <span><strong className="text-stone-200">{showroom.rating} / 5.0</strong> · {showroom.reviewsCount}+ Verified Google Reviews</span>
          </a>
        </div>

      </div>
    </section>
  );
}
