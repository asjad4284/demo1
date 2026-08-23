import React from 'react';
import { X, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { showroom, createWhatsAppUrl } from '../config';

export default function ManagerCallModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Extract initials dynamically from managerName
  const initials = showroom.managerName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-slate-900 border border-white/[0.07] p-7 sm:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-stone-500 hover:text-stone-200 hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-7">
          <div className="w-14 h-14 rounded-xl bg-slate-800 border border-white/[0.06] flex items-center justify-center font-serif font-bold text-lg brushed-gold">
            {initials}
          </div>
          <div>
            <div className="text-xs font-semibold tracking-[0.14em] uppercase text-yellow-700 mb-1">
              Direct Manager Line
            </div>
            <div className="text-base font-semibold text-stone-100">{showroom.managerName}</div>
            <div className="text-xs text-stone-500">{showroom.managerTitle}</div>
          </div>
        </div>

        {/* Benefits */}
        <ul className="space-y-2 mb-7">
          {[
            'Direct final-price negotiation',
            'VIP viewing & test drive booking',
            'Instant trade-in evaluation',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm text-stone-300">
              <CheckCircle className="w-4 h-4 text-yellow-700 shrink-0" strokeWidth={1.5} />
              {item}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="space-y-2.5">
          <a
            href={`tel:${showroom.managerPhoneRaw}`}
            className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" strokeWidth={1.75} />
            Dial {showroom.managerPhone}
          </a>
          <a
            href={createWhatsAppUrl('general')}
            target="_blank" rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-emerald-950 border border-emerald-800/40 text-emerald-400 hover:bg-emerald-900 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <MessageSquare className="w-4 h-4" strokeWidth={1.75} />
            Message on WhatsApp
          </a>
        </div>

        <p className="text-center text-[11px] text-stone-600 mt-4">
          Available 7 days · Strictly confidential
        </p>
      </div>
    </div>
  );
}
