import React, { useState } from 'react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, ExternalLink, Car } from 'lucide-react';
import { showroomInfo } from '../data/cars';

export default function DirectContact({ onOpenManagerCall }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '',
    interest: 'General Inquiry / Showroom Visit',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `*Callback Request*\nName: ${formData.name}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\nNotes: ${formData.message || '—'}`;
    setTimeout(() => {
      window.open(`https://wa.me/${showroomInfo.whatsappNumberRaw}?text=${encodeURIComponent(text)}`, '_blank');
    }, 600);
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/[0.04]">

      {/* ── Lead Hero ── */}
      <div className="border-b border-white/[0.04] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-yellow-700 mb-4">
            Direct Executive Line
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-100 mb-4 leading-snug">
            Speak Directly with Our<br className="hidden sm:block" />{' '}
            <span className="brushed-gold">Showroom Manager</span>
          </h2>
          <p className="text-stone-400 text-sm sm:text-base max-w-lg mx-auto mb-10">
            For private viewings, instant valuations, spot exchanges, or custom luxury imports — reach Malik Shaharyar directly.
          </p>

          {/* Massive Phone CTA */}
          <a
            href={`tel:${showroomInfo.managerPhoneRaw}`}
            className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl border border-yellow-800/40 bg-slate-900/60 hover:bg-slate-900 hover:border-yellow-700/60 transition-all group mx-auto max-w-lg w-full"
          >
            <div className="w-12 h-12 rounded-xl border border-yellow-800/40 bg-slate-950 flex items-center justify-center text-yellow-700 group-hover:border-yellow-700/60 transition-colors">
              <Phone className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <span className="block text-[10px] font-bold tracking-[0.15em] uppercase text-stone-500 mb-1">
                Tap to Dial · Available 7 Days
              </span>
              <span className="block text-2xl sm:text-3xl font-serif font-bold brushed-gold tracking-tight">
                {showroomInfo.managerPhone}
              </span>
            </div>
          </a>

          {/* Secondary actions */}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <a
              href={`https://wa.me/${showroomInfo.whatsappNumberRaw}?text=${encodeURIComponent('Hello Malik Shaharyar, I would like to book a private viewing at Multan Premier Motors.')}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 hover:bg-emerald-900 text-sm font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4" strokeWidth={1.75} />
              WhatsApp Inquiry
            </a>
            <button
              onClick={onOpenManagerCall}
              className="btn-ghost-gold flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
            >
              <Clock className="w-4 h-4" strokeWidth={1.75} />
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>

      {/* ── Details + Form ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left: Location + Hours */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-yellow-700" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-stone-500">Location</span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed mb-3">{showroomInfo.address}</p>
            <a
              href={showroomInfo.googleMapsUrl}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-700 hover:text-yellow-600 transition-colors"
            >
              Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="h-px bg-white/[0.04]" />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-yellow-700" strokeWidth={1.5} />
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-stone-500">Business Hours</span>
            </div>
            <div className="space-y-2.5">
              {showroomInfo.businessHours.map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-stone-400">{item.days}</span>
                  <span className="text-stone-200 font-medium">{item.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-600 mt-4 italic">
              Valet parking available. Security escort on request.
            </p>
          </div>
        </div>

        {/* Right: Callback Form */}
        <div className="surface-card rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-serif font-semibold text-stone-100 mb-1">Request a Callback</h3>
          <p className="text-xs text-stone-500 mb-6">We call back within 15 minutes during showroom hours.</p>

          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" strokeWidth={1.5} />
              <p className="text-sm text-stone-300">Opening WhatsApp to connect you with the manager…</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: 'Full Name', key: 'name', placeholder: 'e.g. Mian Tariq Rasheed', type: 'text' },
                { label: 'Phone Number', key: 'phone', placeholder: '0300 0000000', type: 'tel' },
              ].map(({ label, key, placeholder, type }) => (
                <div key={key}>
                  <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">{label}</label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={formData[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-100 placeholder-stone-700 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Interest</label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-200 focus:outline-none focus:border-yellow-800/50 text-sm transition-colors"
                >
                  {['Toyota Land Cruiser 300 ZX', 'Mercedes-Benz S-Class S580', 'Audi RS e-tron GT', 'Porsche Cayenne GTS', 'BMW 7-Series 740Li', 'Lexus LX600 VIP', 'Trade-In / Exchange', 'Custom Import Order'].map(v => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Notes (optional)</label>
                <textarea
                  rows={2}
                  placeholder="Preferred viewing time or car you want to exchange..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-white/[0.07] text-stone-100 placeholder-stone-700 focus:outline-none focus:border-yellow-800/50 text-sm resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2 mt-1"
              >
                <Send className="w-4 h-4" strokeWidth={1.75} />
                Submit & Connect to Manager
              </button>
            </form>
          )}
        </div>
      </div>

      {/* ── Footer Bar ── */}
      <div className="border-t border-white/[0.04] py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <Car className="w-3.5 h-3.5 text-yellow-800" strokeWidth={1.5} />
            <span>Multan Premier Motors © {new Date().getFullYear()}</span>
          </div>
          <span>Executive Auto Boulevard, Bosan Road, Multan, Pakistan</span>
        </div>
      </div>

    </footer>
  );
}
