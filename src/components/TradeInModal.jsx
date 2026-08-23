import React, { useState } from 'react';
import { X, Repeat2, ArrowRight, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { showroom, inventoryCars, createWhatsAppUrl } from '../config';

export default function TradeInModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    car: '',
    year: '2021',
    mileage: '',
    target: inventoryCars[0]?.title || 'Showroom Fleet Vehicle',
    phone: ''
  });
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(true);
    const waUrl = createWhatsAppUrl('trade-in', form);
    setTimeout(() => window.open(waUrl, '_blank'), 400);
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
            <p className="text-xs text-stone-500">Fair spot-valuation · {showroom.exchangeTime} settlement</p>
          </div>
        </div>

        {!done ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                Your Current Car (Make & Model)
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Toyota Prado TX / Fortuner Legender"
                value={form.car}
                onChange={(e) => setForm({ ...form, car: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-100 placeholder-stone-700 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                  Model Year
                </label>
                <select
                  value={form.year}
                  onChange={(e) => setForm({ ...form, year: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-200 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
                >
                  {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013].map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                  Approx. Mileage
                </label>
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
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                Desired Upgrade From Showroom
              </label>
              <select
                value={form.target}
                onChange={(e) => setForm({ ...form, target: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-200 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
              >
                {inventoryCars.map((c) => (
                  <option key={c.id} value={`${c.title} (${c.price})`}>
                    {c.title} — {c.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">
                Your Contact Phone
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 0300 1234567"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-100 placeholder-stone-700 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 mt-1"
            >
              Get Instant Spot Valuation
              <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
            </button>
          </form>
        ) : (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" strokeWidth={1.5} />
            <h4 className="text-base font-semibold text-stone-100">Trade-In Request Ready</h4>
            <p className="text-xs text-stone-400 max-w-sm mx-auto">
              Connecting with {showroom.managerName} on WhatsApp for your estimated spot valuation…
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href={createWhatsAppUrl('trade-in', form)}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Launch WhatsApp Chat
              </a>
              <a
                href={`tel:${showroom.managerPhoneRaw}`}
                className="btn-ghost-gold inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold"
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={1.75} />
                Call {showroom.managerName}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
