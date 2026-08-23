import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { createWhatsAppUrl } from '../config';

export default function FloatingWhatsApp() {
  const [dismissed, setDismissed] = useState(false);

  const url = createWhatsAppUrl('general');

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {!dismissed && (
        <div className="hidden sm:flex items-center gap-2 surface-card px-3.5 py-2 rounded-xl text-xs text-stone-300 shadow-xl">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block shrink-0"></span>
          Chat with Manager
          <button
            onClick={() => setDismissed(true)}
            className="ml-1 text-stone-600 hover:text-stone-400 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* FAB */}
      <a
        href={url}
        target="_blank" rel="noopener noreferrer"
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-emerald-800 hover:bg-emerald-700 transition-colors shadow-lg shadow-black/40"
        style={{ width: '52px', height: '52px' }}
        aria-label="WhatsApp Chat"
      >
        {/* Subtle pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-600 animate-ping opacity-[0.18]"></span>
        <MessageSquare className="w-5 h-5 text-white relative z-10" strokeWidth={1.75} />
        {/* Online dot */}
        <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950"></span>
      </a>
    </div>
  );
}
