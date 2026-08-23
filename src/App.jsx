import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Inventory from './components/Inventory';
import Testimonials from './components/Testimonials';
import DirectContact from './components/DirectContact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ManagerCallModal from './components/ManagerCallModal';
import CarDetailModal from './components/CarDetailModal';
import TradeInModal from './components/TradeInModal';

export default function App() {
  const [managerCallOpen, setManagerCallOpen] = useState(false);
  const [tradeInOpen, setTradeInOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col selection:bg-yellow-500 selection:text-black">
      {/* Navigation */}
      <Navbar
        onOpenManagerCall={() => setManagerCallOpen(true)}
        onOpenTradeIn={() => setTradeInOpen(true)}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onOpenManagerCall={() => setManagerCallOpen(true)}
          onOpenTradeIn={() => setTradeInOpen(true)}
        />

        {/* Trust Badges (3-Column Grid) */}
        <TrustBadges
          onOpenTradeIn={() => setTradeInOpen(true)}
        />

        {/* Curated Showroom Inventory */}
        <Inventory
          onSelectCar={(car) => setSelectedCar(car)}
          onOpenManagerCall={() => setManagerCallOpen(true)}
        />

        {/* Client Endorsements & Social Proof */}
        <Testimonials />

        {/* Direct Contact Footer & Showroom Hours */}
        <DirectContact
          onOpenManagerCall={() => setManagerCallOpen(true)}
        />
      </main>

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Modals */}
      <ManagerCallModal
        isOpen={managerCallOpen}
        onClose={() => setManagerCallOpen(false)}
      />

      <TradeInModal
        isOpen={tradeInOpen}
        onClose={() => setTradeInOpen(false)}
      />

      <CarDetailModal
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
        onOpenManagerCall={() => {
          setSelectedCar(null);
          setManagerCallOpen(true);
        }}
      />
    </div>
  );
}
