export const site = {
  name: "Mahi Solutions",
  tagline: "Trusted Repair, Experts for All Home Appliances",
  phone: "+91 8825381397",
  phoneHref: "tel:+918825381397",
  whatsapp: "918825381397",
  whatsappHref: "https://wa.me/918825381397?text=Hi%20Mahi%20Solutions%2C%20I%27d%20like%20to%20book%20a%20service.",
  email: "support@mahisolutions.in",
  hours: "Mon–Sun · 7 AM – 11 PM",
  address: "Service across Nawada & Surrounding 5 km radius in Nawada City.",
  areas: ["Nawada City", "Nawada Rural", "Surrounding 5 km radius in Nawada"],
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
} as const;


export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/areas", label: "Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

// src/lib/site.ts

export type ServiceSlug =
  | "ac"
  | "refrigerator"
  | "washing-machine"
  | "ro-water-purifier"
  | "microwave-oven"
  | "geyser"
  | "dishwasher";

export interface ServiceMeta {
  slug: ServiceSlug;
  name: string;
  short: string;
  description: string;
  symptoms: string[];
  causes: string[];
  included: string[];
  faqs: { q: string; a: string }[];
  icon:
    | "AirVent"
    | "Refrigerator"
    | "WashingMachine"
    | "Droplets"
    | "Microwave"
    | "Flame"
    | "Utensils";

  // Extra fields to make slug pages more premium and more useful
  tagline?: string;
  heroNote?: string;
  highlights?: string[];
  process?: string[];
  warrantyNote?: string;
  serviceNotes?: string[];
}

export const services: ServiceMeta[] = [
  {
    slug: "ac",
    name: "AC Repair & Service",
    short: "Cooling, gas refill, installation",
    description:
      "Expert repair, gas refilling, deep cleaning and installation for split, window and cassette ACs.",
    tagline: "Fast cooling restoration with professional AC servicing.",
    heroNote: "Ideal for cooling issues, gas leakage, and installation support.",
    symptoms: [
      "Not cooling",
      "Water leakage",
      "Strange noise",
      "Bad smell",
      "AC not turning on",
    ],
    causes: [
      "Low refrigerant",
      "Choked filter",
      "Faulty compressor",
      "Drainage block",
      "PCB issue",
    ],
    included: [
      "Diagnosis",
      "Gas top-up",
      "Filter cleaning",
      "Coil wash",
      "Electrical check",
      "Performance test",
    ],
    highlights: [
      "Split AC",
      "Window AC",
      "Cassette AC",
      "Gas refill",
      "Installation",
    ],
    process: [
      "Inspect cooling and airflow",
      "Check gas pressure and leakage",
      "Clean filters, coils, and drainage",
      "Repair faulty parts if needed",
      "Final cooling and performance test",
    ],
    warrantyNote: "Up to 90 days workmanship warranty on eligible repairs.",
    serviceNotes: [
      "Same-day service in selected areas",
      "OEM or approved parts used where required",
    ],
    faqs: [
      {
        q: "Do you provide same-day AC service?",
        a: "Yes, in most service areas we dispatch the same day.",
      },
      {
        q: "Is gas refill covered?",
        a: "Gas top-up is charged separately based on type (R32/R410/R22).",
      },
    ],
    icon: "AirVent",
  },
  {
    slug: "refrigerator",
    name: "Refrigerator Repair",
    short: "Cooling, compressor, gas leakage",
    description:
      "Single door, double door, side-by-side and inverter fridge repair with genuine spares.",
    tagline: "Reliable fridge repair for cooling, compressor, and gas issues.",
    heroNote: "Best for cooling failure, excess frost, and water leakage issues.",
    symptoms: [
      "No cooling",
      "Excess frost",
      "Water pooling",
      "Loud humming",
      "Door not sealing",
    ],
    causes: [
      "Gas leak",
      "Faulty thermostat",
      "Compressor wear",
      "Defrost timer issue",
      "Seal damage",
    ],
    included: [
      "Cooling check",
      "Gas charging",
      "Thermostat replacement",
      "Coil cleaning",
      "Door gasket fix",
    ],
    highlights: [
      "Single door",
      "Double door",
      "Side-by-side",
      "Inverter fridge",
      "Door gasket",
    ],
    process: [
      "Check temperature and airflow",
      "Inspect compressor and gas lines",
      "Test thermostat and defrost system",
      "Repair or replace faulty components",
      "Verify stable cooling performance",
    ],
    warrantyNote: "Up to 90 days workmanship warranty and part warranty where applicable.",
    serviceNotes: [
      "Supports major brands",
      "Genuine spare parts available",
    ],
    faqs: [
      {
        q: "Do you handle inverter fridges?",
        a: "Yes — including inverter compressor and PCB repair.",
      },
      {
        q: "Warranty on repair?",
        a: "Up to 90 days on workmanship and 6 months on replaced parts.",
      },
    ],
    icon: "Refrigerator",
  },
  {
    slug: "washing-machine",
    name: "Washing Machine Repair",
    short: "Front load, top load, semi-auto",
    description:
      "Drum, motor, PCB and drainage repair for all major brands of washing machines.",
    tagline: "Complete washing machine repair for all load types.",
    heroNote: "Useful for vibration, drainage, spin, and error-code problems.",
    symptoms: [
      "Not spinning",
      "Water not draining",
      "Excessive vibration",
      "Door locked",
      "Error codes",
    ],
    causes: [
      "Belt wear",
      "Drain pump block",
      "Motor issue",
      "PCB fault",
      "Bearing damage",
    ],
    included: [
      "Drain pump cleaning",
      "Belt change",
      "Motor service",
      "PCB diagnostics",
      "Calibration",
    ],
    highlights: [
      "Front load",
      "Top load",
      "Semi-auto",
      "Drainage issue",
      "Motor issue",
    ],
    process: [
      "Inspect drum, motor, and drain system",
      "Identify vibration or spin issue",
      "Test belt, pump, and PCB",
      "Repair or replace damaged parts",
      "Run wash-cycle calibration",
    ],
    warrantyNote: "Warranty included on eligible repairs and replaced components.",
    serviceNotes: [
      "Supports IFB, Bosch, LG, Samsung and more",
      "Imported and Indian models serviced",
    ],
    faqs: [
      {
        q: "Do you service IFB / Bosch / LG?",
        a: "Yes, we service all major brands including imported models.",
      },
    ],
    icon: "WashingMachine",
  },
  {
    slug: "ro-water-purifier",
    name: "RO Water Purifier",
    short: "Filter change, AMC, installation",
    description:
      "RO/UV/UF purifier installation, filter replacement and annual maintenance contracts.",
    tagline: "Safe drinking water support with purifier service and AMC.",
    heroNote: "Great for slow flow, taste issues, leakage, and TDS problems.",
    symptoms: [
      "Slow water flow",
      "Bad taste",
      "Leakage",
      "Continuous beeping",
      "TDS too high",
    ],
    causes: [
      "Choked filter",
      "Membrane life over",
      "Pump failure",
      "Leaky fittings",
      "Solenoid issue",
    ],
    included: [
      "Sediment & carbon filter change",
      "Membrane test",
      "TDS check",
      "Sanitization",
      "AMC plans",
    ],
    highlights: [
      "RO",
      "UV",
      "UF",
      "AMC",
      "Filter change",
    ],
    process: [
      "Check water output and TDS",
      "Inspect filters and membrane",
      "Test pump and valves",
      "Replace worn parts",
      "Sanitize system and verify flow",
    ],
    warrantyNote: "Service warranty depends on parts replaced and AMC coverage.",
    serviceNotes: [
      "Filter replacement available",
      "Installation and maintenance supported",
    ],
    faqs: [
      {
        q: "How often should filters be changed?",
        a: "Sediment and carbon every 6–8 months, membrane every 18–24 months.",
      },
    ],
    icon: "Droplets",
  },
  {
    slug: "microwave-oven",
    name: "Microwave & Oven Repair",
    short: "Heating, magnetron, control panel",
    description:
      "Solo, grill and convection microwave plus OTG repair by certified technicians.",
    tagline: "Microwave and oven repair with safe diagnostics and accurate fixing.",
    heroNote: "Best for heating failure, spark issues, and display faults.",
    symptoms: [
      "Not heating",
      "Sparks inside",
      "Turntable not rotating",
      "Display dead",
      "Door issue",
    ],
    causes: [
      "Magnetron failure",
      "Capacitor issue",
      "Coupler wear",
      "Control board fault",
      "Door switch",
    ],
    included: [
      "Heating diagnostics",
      "Magnetron replacement",
      "Cavity cleaning",
      "Switch replacement",
    ],
    highlights: [
      "Solo microwave",
      "Grill microwave",
      "Convection microwave",
      "OTG",
    ],
    process: [
      "Check heating and turntable",
      "Inspect door switch and board",
      "Test magnetron and capacitor",
      "Repair faulty components",
      "Final safety and heating test",
    ],
    warrantyNote: "Warranty available on selected repairs and parts.",
    serviceNotes: [
      "Safe high-voltage handling",
      "Brand-compatible repairs",
    ],
    faqs: [
      {
        q: "Is microwave repair safe?",
        a: "Yes, our technicians are trained to handle high-voltage capacitors safely.",
      },
    ],
    icon: "Microwave",
  },
  {
    slug: "geyser",
    name: "Geyser / Water Heater",
    short: "Heating element, thermostat, leakage",
    description:
      "Instant and storage geyser repair, descaling and safe installation services.",
    tagline: "Hot water repair and installation with safe electrical checks.",
    heroNote: "Ideal for no hot water, tripping, leakage, and slow heating.",
    symptoms: [
      "No hot water",
      "Tripping power",
      "Water leakage",
      "Slow heating",
      "Strange noise",
    ],
    causes: [
      "Element burnt",
      "Thermostat fault",
      "Scale buildup",
      "Tank corrosion",
      "MCB issue",
    ],
    included: [
      "Element replacement",
      "Thermostat fix",
      "Descaling",
      "Leak repair",
      "Earthing check",
    ],
    highlights: [
      "Instant geyser",
      "Storage geyser",
      "Element",
      "Thermostat",
      "Descaling",
    ],
    process: [
      "Check heating and electrical supply",
      "Inspect tank, element, and thermostat",
      "Remove scale and sediment buildup",
      "Repair leakage or faulty parts",
      "Verify safe heating performance",
    ],
    warrantyNote: "Warranty depends on the repair type and replaced parts.",
    serviceNotes: [
      "Safe installation available",
      "Proper earthing and wiring checks included",
    ],
    faqs: [
      {
        q: "Do you install new geysers?",
        a: "Yes, we provide safe installation with proper electrical work.",
      },
    ],
    icon: "Flame",
  },
  {
    slug: "dishwasher",
    name: "Dishwasher Repair",
    short: "Drainage, spray arm, heating",
    description:
      "Modern dishwasher repair including drainage, heating element and control board issues.",
    tagline: "Dishwasher repairs with drainage, heating, and cleaning support.",
    heroNote: "Useful for drainage blockage, poor cleaning, and error codes.",
    symptoms: [
      "Not draining",
      "Dishes not clean",
      "Leakage",
      "Not starting",
      "Error codes",
    ],
    causes: [
      "Spray arm blocked",
      "Drain pump issue",
      "Heater fault",
      "Door latch",
      "Control board",
    ],
    included: [
      "Spray arm cleaning",
      "Drain pump service",
      "Heater check",
      "Control diagnostics",
    ],
    highlights: [
      "Drainage",
      "Heating",
      "Spray arm",
      "Control board",
    ],
    process: [
      "Inspect spray arms and drainage",
      "Test heating and water circulation",
      "Check door latch and sensors",
      "Repair electrical or mechanical faults",
      "Run cleaning and performance test",
    ],
    warrantyNote: "Warranty support available on eligible repairs and parts.",
    serviceNotes: [
      "OEM parts sourced when needed",
      "24–48 hour part sourcing in most cases",
    ],
    faqs: [
      {
        q: "Do you stock dishwasher parts?",
        a: "We source genuine OEM parts within 24–48 hours.",
      },
    ],
    icon: "Utensils",
  },
];

export const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "1000+", label: "Happy Customers" },
  { value: "60 min", label: "Avg. Response" },
  { value: "4.9★", label: "Customer Rating" },
];

export const brandsServiced = [
  "Samsung",
  "LG",
  "Whirlpool",
  "Bosch",
  "IFB",
  "Daikin",
  "Voltas",
  "Hitachi",
  "Panasonic",
  "Godrej",
  "Haier",
  "Siemens",
  "Carrier",
  "Blue Star",
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceLabel(slug: string) {
  return getServiceBySlug(slug)?.name ?? "General Service";
}