import React, { useState } from 'react';
import { X, Repeat2, ArrowRight, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { showroomInfo } from '../data/cars';

const MODELS = [
  'Toyota Land Cruiser 300 ZX',
  'Mercedes-Benz S-Class S580',
  'Audi RS e-tron GT',
  'Porsche Cayenne GTS Coupe',
  'BMW 7-Series 740Li',
  'Lexus LX600 VIP',
];

export default function TradeInModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({ car: '', year: '2021', mileage: '', target: MODELS[0], phone: '' });
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    const text = `*Trade-In Request*\nCurrent Car: ${form.car} (${form.year})\nMileage: ${form.mileage || '—'}\nDesired: ${form.target}\nPhone: ${form.phone}`;
    setTimeout(() => window.open(`https://wa.me/${showroomInfo.whatsappNumberRaw}?text=${encodeURIComponent(text)}`, '_blank'), 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-white/[0.07] p-7 sm:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-500 hover:text-stone-200 hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/[0.06] flex items-center justify-center text-yellow-700">
            <Repeat2 className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-stone-100">Instant Car Exchange</h3>
            <p className="text-xs text-stone-500">Fair spot-valuation · 45-min settlement</p>
          </div>
        </div>

        {!done ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Your Current Car</label>
              <input
                type="text" required
                placeholder="e.g. Toyota Prado TX 2020"
                value={form.car}
                onChange={(e) => setForm({ ...form, car: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-100 placeholder-stone-700 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Year</label>
                <select
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-200 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
                >
                  {[2024,2023,2022,2021,2020,2019,2018,2017,2016,2015].map(y => <option key={y}>{y}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Mileage</label>
                <input
                  type="text"
                  placeholder="e.g. 45,000 km"
                  value={form.mileage}
                  onChange={(e) => setForm({ ...form, mileage: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-100 placeholder-stone-700 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Desired Upgrade</label>
              <select
                value={form.target}
                onChange={(e) => setForm({ ...form, target: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-200 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
              >
                {MODELS.map(m => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Your Phone</label>
              <input
                type="tel" required
                placeholder="0300 0000000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-100 placeholder-stone-700 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
              />
            </div>
            <button type="submit" className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 mt-1">
              Get Exchange Estimate
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </button>
          </form>
        ) : (
          <div className="py-10 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" strokeWidth={1.5} />
            <p className="text-sm text-stone-300">Opening WhatsApp with your trade-in details…</p>
            <a
              href={`tel:${showroomInfo.managerPhoneRaw}`}
              className="btn-ghost-gold inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
            >
              <Phone className="w-4 h-4" strokeWidth={1.75} />
              Call Directly Instead
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
