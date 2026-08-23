import React, { useState } from 'react';
import { Phone, MessageSquare, Gauge, Calendar, ChevronRight, Eye } from 'lucide-react';
import { inventoryCars, showroomInfo } from '../data/cars';

const CATEGORIES = ['All', 'Luxury SUV', 'Executive Sedan', 'Electric Supercar'];

export default function Inventory({ onSelectCar, onOpenManagerCall }) {
  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All'
    ? inventoryCars
    : inventoryCars.filter(c => c.category === selected);

  return (
    <section id="inventory" className="py-20 sm:py-28 bg-slate-900/50 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* ── Header ── */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-yellow-700 mb-3">
              Ready for Immediate Delivery
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-100">
              Current Showroom Fleet
            </h2>
          </div>

          {/* ── Category Tabs ── */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  selected === cat
                    ? 'bg-slate-800 text-stone-100 border border-yellow-800/50'
                    : 'text-stone-500 hover:text-stone-300 border border-transparent hover:border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((car) => (
            <article key={car.id} className="inventory-card rounded-2xl overflow-hidden flex flex-col">
              {/* Image */}
              <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/20" />

                {/* Top badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-yellow-700 border border-yellow-800/30">
                    {car.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="block text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Price</span>
                    <span className="text-lg font-bold font-serif brushed-gold leading-none">{car.price}</span>
                  </div>
                  <button
                    onClick={() => onSelectCar(car)}
                    className="flex items-center gap-1 text-[11px] font-semibold text-stone-300 hover:text-stone-100 transition-colors px-2.5 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10"
                  >
                    <Eye className="w-3 h-3" strokeWidth={1.75} />
                    Specs
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-base font-semibold text-stone-100 leading-snug mb-0.5">{car.title}</h3>
                  <p className="text-[11px] text-yellow-700 font-medium">{car.tagline}</p>

                  {/* Specs row */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-xs text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-stone-600" strokeWidth={1.5} />
                      {car.year}
                    </span>
                    <span className="flex items-center gap-1.5 truncate">
                      <Gauge className="w-3.5 h-3.5 text-stone-600" strokeWidth={1.5} />
                      <span className="truncate">{car.mileage}</span>
                    </span>
                    <span className="col-span-2 text-stone-500 truncate">{car.engine}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-auto grid grid-cols-2 gap-2 pt-4 border-t border-white/[0.04]">
                  <a
                    href={`https://wa.me/${showroomInfo.whatsappNumberRaw}?text=${encodeURIComponent(`Hello, I am inquiring about the ${car.title} (${car.price}) at Multan Premier Motors.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-emerald-950 border border-emerald-800/40 text-emerald-400 hover:bg-emerald-900 text-xs font-semibold transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" strokeWidth={1.75} />
                    WhatsApp
                  </a>
                  <button
                    onClick={() => onSelectCar(car)}
                    className="flex items-center justify-center gap-1 py-2.5 rounded-lg border border-white/[0.06] text-stone-300 hover:text-stone-100 hover:border-yellow-800/30 text-xs font-semibold transition-colors"
                  >
                    Details
                    <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Bottom CTA Banner ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 px-8 py-8 rounded-2xl border border-white/[0.05] bg-slate-900/40">
          <div>
            <h3 className="text-lg font-semibold text-stone-100 font-serif mb-1">
              Looking for a specific model or custom import?
            </h3>
            <p className="text-sm text-stone-500">
              We source zero-meter luxury vehicles from Japan, UAE & UK to your exact specification.
            </p>
          </div>
          <button
            onClick={onOpenManagerCall}
            className="btn-primary shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide whitespace-nowrap"
          >
            <Phone className="w-4 h-4" strokeWidth={1.75} />
            Consult Manager
          </button>
        </div>

      </div>
    </section>
  );
}
