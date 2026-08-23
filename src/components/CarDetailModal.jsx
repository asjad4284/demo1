import React from 'react';
import { X, Phone, MessageSquare, CheckCircle, FileCheck } from 'lucide-react';
import { showroomInfo } from '../data/cars';

export default function CarDetailModal({ car, onClose, onOpenManagerCall }) {
  if (!car) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-white/[0.07] shadow-2xl my-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-lg text-stone-500 hover:text-stone-200 hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] bg-slate-950">
          <img src={car.image} alt={car.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-black/20" />
          <div className="absolute top-3 left-4">
            <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-yellow-700 border border-yellow-800/30">
              {car.badge}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="block text-[10px] text-stone-400 uppercase tracking-wider mb-0.5">Asking Price</span>
              <span className="text-xl font-serif font-bold brushed-gold">{car.price}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-sm border border-emerald-800/30 text-emerald-400 text-xs font-semibold">
              <FileCheck className="w-3.5 h-3.5" strokeWidth={1.75} />
              150-Point Cleared
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100 mb-1">{car.title}</h3>
          <p className="text-sm text-yellow-700 mb-5">{car.tagline} · {car.color}</p>

          {/* Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950 border border-white/[0.04] text-xs mb-6">
            {[
              { label: 'Year', value: car.year },
              { label: 'Mileage', value: car.mileage },
              { label: 'Engine', value: car.engine },
              { label: 'Gearbox', value: car.transmission },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="block text-stone-600 mb-0.5">{label}</span>
                <span className="text-stone-200 font-medium text-[11px]">{value}</span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mb-7">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-3">Key Highlights</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {car.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-stone-300">
                  <CheckCircle className="w-4 h-4 text-yellow-700 shrink-0 mt-0.5" strokeWidth={1.5} />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5 border-t border-white/[0.04]">
            <a
              href={`https://wa.me/${showroomInfo.whatsappNumberRaw}?text=${encodeURIComponent(`Hello, I'm interested in the ${car.title} (${car.price}). Please share the inspection report.`)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 hover:bg-emerald-900 text-sm font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4" strokeWidth={1.75} />
              Request Inspection Sheet
            </a>
            <button
              onClick={() => { onClose(); onOpenManagerCall(); }}
              className="btn-primary flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold"
            >
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              Call Showroom Manager
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
