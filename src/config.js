/**
 * ═══════════════════════════════════════════════════════════════════════════
 * SHOWROOM TEMPLATE CONFIGURATION (Single Source of Truth)
 * ═══════════════════════════════════════════════════════════════════════════
 * To customize this template for cold-calling a new dealership (e.g. Kashif Motors,
 * Tariq Cars, Royal Auto), simply update the showroom object and inventory array below.
 */

export const showroom = {
  // ── Brand & Identity ──
  name: "Multan Premier Motors",
  shortName: "Multan Premier",
  tagline: "Executive & Luxury Certified Auto Dealership",
  city: "Multan",
  regionTag: "South Punjab's Finest · Bosan Road, Multan",

  // ── General Manager / Sales Contact ──
  managerName: "Malik Shaharyar",
  managerTitle: "General Showroom Manager",
  managerPhone: "+92 300 8639999",
  managerPhoneRaw: "923008639999",

  // ── WhatsApp Desk (No + or spaces in raw format for wa.me links) ──
  whatsappNumber: "+92 300 8639999",
  whatsappNumberRaw: "923008639999",

  // ── Showroom Location & Map ──
  address: "Plot 14-B, Executive Auto Boulevard, Bosan Road, Multan, Pakistan",
  googleMapsUrl: "https://maps.google.com/?q=Bosan+Road+Multan+Pakistan",

  // ── Reputation & Metrics ──
  rating: 4.9,
  reviewsCount: 384,
  vehiclesDelivered: "250+",
  exchangeTime: "45 min",

  // ── Business Hours ──
  businessHours: [
    { days: "Monday – Saturday", hours: "10:00 AM – 10:00 PM" },
    { days: "Sunday", hours: "2:00 PM – 9:00 PM (VIP Viewing by Appointment)" }
  ],

  // ── Zero-Backend Form Webhook (Optional Web3Forms / Formspree ID) ──
  // If set to an Access Key, submissions can also send email notifications
  web3FormsKey: "" // e.g. "YOUR-ACCESS-KEY-HERE"
};

// Backwards compatibility alias
export const showroomInfo = showroom;

/**
 * ── Contextual WhatsApp Pre-filled Link Generator ──
 */
export const createWhatsAppUrl = (type, data = {}) => {
  const base = `https://wa.me/${showroom.whatsappNumberRaw}?text=`;
  let msg = "";

  switch (type) {
    case "car-inquiry":
      // Pre-qualified vehicle inquiry
      msg = `Hi ${showroom.managerName}, I am interested in the *${data.title}* (${data.price}) listed at *${showroom.name}*. Is this vehicle available for private viewing?`;
      break;

    case "inspection-request":
      msg = `Hi ${showroom.managerName}, please share the computerized 150-point inspection sheet and high-res video for the *${data.title}* (${data.price}).`;
      break;

    case "callback-form":
      msg = `*New VIP Callback Request*\n\n` +
            `• *Client Name:* ${data.name || "N/A"}\n` +
            `• *Contact Number:* ${data.phone || "N/A"}\n` +
            `• *Vehicle of Interest:* ${data.interest || "General Showroom Fleet"}\n` +
            `• *Client Notes:* ${data.message || "Immediate Viewing / Callback Requested"}\n\n` +
            `_Sent via ${showroom.name} Portal_`;
      break;

    case "trade-in":
      msg = `*Instant Trade-In / Exchange Valuation*\n\n` +
            `• *Current Car:* ${data.car || "N/A"} (${data.year || "N/A"})\n` +
            `• *Mileage:* ${data.mileage || "Not specified"}\n` +
            `• *Desired Upgrade:* ${data.target || "Showroom Fleet"}\n` +
            `• *Client Phone:* ${data.phone || "N/A"}\n\n` +
            `_Requesting 45-min spot valuation at ${showroom.name}_`;
      break;

    case "general":
    default:
      msg = `Hello ${showroom.managerName}, I am viewing the *${showroom.name}* digital showroom and would like to speak directly with you.`;
      break;
  }

  return `${base}${encodeURIComponent(msg)}`;
};

/**
 * ── Trust Badges Data ──
 */
export const trustBadgesData = [
  {
    id: 1,
    title: "150-Point Verified Inventory",
    subtitle: "Bumper-to-Bumper Certified",
    description: "Every vehicle undergoes biometric verification, full computerized diagnostic scanning, paint meter verification, and certified auction sheet history before entering our showroom.",
    icon: "ShieldCheck",
    badge: "100% Authentic"
  },
  {
    id: 2,
    title: "Fair Exchange & Instant Valuation",
    subtitle: "Zero-Hassle Trade-In",
    description: "Upgrade your current ride seamlessly. Get instantaneous market-clearing valuation with same-day transfer processing and direct bank settlements without broker cuts.",
    icon: "Repeat",
    badge: "Spot Cash Settlement"
  },
  {
    id: 3,
    title: "Top Rated on Google Maps",
    subtitle: "4.9 ★ Rating (380+ Reviews)",
    description: "Ranked as Multan's #1 trusted high-end auto hub. Celebrated by industrial leaders, landlords, and luxury car enthusiasts across South Punjab for transparent dealings.",
    icon: "Award",
    badge: "Multan's Choice"
  }
];

/**
 * ── Showroom Fleet Inventory ──
 */
export const inventoryCars = [
  {
    id: "haval-h6-black",
    title: "Haval H6 Supreme Plus",
    tagline: "1.5T Turbo | Full Option | 2024",
    category: "Luxury SUV",
    price: "PKR 82 Lac",
    year: 2024,
    mileage: "12,000 km (Single Owner)",
    engine: "1.5L Turbo Petrol (184 HP)",
    transmission: "7-Speed DCT Automatic",
    fuel: "Petrol",
    color: "Obsidian Black / Black Leather Interior",
    features: [
      "12.3-inch Dual Floating Display",
      "360° Panoramic Camera System",
      "Full Leather Heated & Ventilated Seats",
      "Wireless CarPlay & Android Auto",
      "Adaptive Cruise Control & Lane Assist"
    ],
    image: "/car-haval-h6-black.jpg",
    badge: "Top Seller",
    isFeatured: true
  },
  {
    id: "land-cruiser-zx",
    title: "Toyota Land Cruiser ZX",
    tagline: "V8 | Highest Grade | Full Option",
    category: "Luxury SUV",
    price: "PKR 2.85 Crore",
    year: 2020,
    mileage: "68,000 km (Verified & Maintained)",
    engine: "4.6L V8 DOHC (318 HP)",
    transmission: "8-Speed ECT-i Automatic",
    fuel: "Petrol",
    color: "Black Mica / Beige Full Leather",
    features: [
      "ZX Grade — Top Land Cruiser Trim Level",
      "Multi-Terrain Select & Crawl Control",
      "Semi-Aniline Leather Seats (3 Rows)",
      "JBL 14-Speaker Premium Audio System",
      "Rear-View Monitor & All-Round Sensors"
    ],
    image: "/car-land-cruiser-zx.jpg",
    badge: "Showroom Crown",
    isFeatured: true
  },
  {
    id: "hilux-gr-sport",
    title: "Toyota Hilux GR Sport",
    tagline: "2.8L Turbo Diesel | 4x4 | 2023",
    category: "Pickup / 4x4",
    price: "PKR 1.35 Crore",
    year: 2023,
    mileage: "22,000 km (Well Maintained)",
    engine: "2.8L 1GD-FTV Turbo Diesel (204 HP)",
    transmission: "6-Speed Automatic 4WD",
    fuel: "Diesel",
    color: "White Pearl Crystal Shine / Black GR Accents",
    features: [
      "GR Sport Body Kit — Exclusive Aero Package",
      "GR 18-inch Black Alloy Wheels",
      "Multi-Terrain Select & Active Traction Control",
      "9-inch Toyota Multimedia Touchscreen",
      "Leather-Appointed Seats & GR Sport Interior"
    ],
    image: "/car-hilux-gr-sport.jpg",
    badge: "GR Edition",
    isFeatured: true
  },
  {
    id: "corolla-altis-x",
    title: "Toyota Corolla Altis X",
    tagline: "1.6 CVT Grande | 2022",
    category: "Executive Sedan",
    price: "PKR 52 Lac",
    year: 2022,
    mileage: "38,000 km (First Owner)",
    engine: "1.6L Dual VVT-i (132 HP)",
    transmission: "CVT Automatic",
    fuel: "Petrol",
    color: "Graphite Metallic / Fabric Interior",
    features: [
      "Grande X Aerobody Kit (Factory Fitted)",
      "7-inch Toyota Smart Link Display",
      "Rear Camera & Parking Sensors",
      "Push-Button Start & Smart Entry Key",
      "Auto Headlamps & Rain Sensing Wipers"
    ],
    image: "/car-corolla-altis.jpg",
    badge: "Certified Clean",
    isFeatured: true
  },
  {
    id: "honda-city-aspire",
    title: "Honda City Aspire",
    tagline: "1.5L i-VTEC CVT | 2021",
    category: "Family Sedan",
    price: "PKR 39 Lac",
    year: 2021,
    mileage: "44,000 km (Showroom Maintained)",
    engine: "1.5L i-VTEC (118 HP)",
    transmission: "CVT Automatic",
    fuel: "Petrol",
    color: "Platinum White Pearl / Beige Fabric",
    features: [
      "Honda Sensing Safety Suite",
      "7-inch Honda Connect Touchscreen",
      "Lane Keeping Assist & Collision Mitigation",
      "Full LED Headlamps & DRL",
      "Keyless Entry & Push-Button Start"
    ],
    image: "/car-honda-city.jpg",
    badge: "Top Condition",
    isFeatured: true
  },
  {
    id: "corolla-gli-2015",
    title: "Toyota Corolla GLi",
    tagline: "1.3 Automatic | 2015",
    category: "Family Sedan",
    price: "PKR 26.5 Lac",
    year: 2015,
    mileage: "92,000 km (Fully Maintained)",
    engine: "1.3L VVT-i (95 HP)",
    transmission: "4-Speed Automatic",
    fuel: "Petrol",
    color: "Silky Silver / Grey Fabric",
    features: [
      "Original Auction Sheet Available",
      "Genuine Paint — Paint Meter Verified",
      "Power Windows & Central Locking",
      "Factory ABS & Dual Airbags",
      "Fresh Inspection — Zero Hidden Issues"
    ],
    image: "/car-corolla-gli.jpg",
    badge: "Budget Pick",
    isFeatured: true
  }
];

/**
 * ── Client Reviews & Testimonials ──
 */
export const clientReviews = [
  {
    name: "Mian Tariq Rasheed",
    role: "Chairman, Multan Textile Mills",
    text: "Purchased my Land Cruiser from Malik Shaharyar at Multan Premier Motors. The level of transparency, computerized documentation, and swift transfer was unlike any experience in Punjab.",
    car: "Toyota Land Cruiser ZX",
    rating: 5
  },
  {
    name: "Chaudhry Farooq Dogar",
    role: "Agricultural Exporter & Landlord",
    text: "Exchanged my 2019 vehicle for the Haval H6. They gave me a completely honest valuation on spot and transferred payment in 45 minutes. Truly executive service.",
    car: "Haval H6 Supreme Plus",
    rating: 5
  },
  {
    name: "Dr. Hamza Bilal",
    role: "Senior Consultant Neurosurgeon",
    text: "Acquiring a clean, certified vehicle in Multan felt intimidating until I visited this showroom. Flawless 150-point report, original keys, and complete peace of mind.",
    car: "Toyota Corolla Altis X",
    rating: 5
  }
];
