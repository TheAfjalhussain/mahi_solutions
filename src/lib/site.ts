export const site = {
  name: "Mahi Solutions",
  tagline: "Trusted Repair Experts for All Home Appliances",
  phone: "+91 8825381397",
  phoneHref: "tel:+918825381397",
  whatsapp: "918825381397",
  whatsappHref:
    "https://wa.me/918825381397?text=Hi%20Mahi%20Solutions%2C%20I'd%20like%20to%20book%20a%20service.",
  email: "support@mahisolutions.in",
  hours: "Mon–Sun · 7 AM – 11 PM",
  address: "Service across Nawada & surrounding 5 km radius in Nawada City.",
  areas: ["Nawada City", "Nawada Rural", "Surrounding 5 km radius in Nawada"],
  social: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    youtube: "#",
  },
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/areas", label: "Areas" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

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
  icon: "AirVent" | "Refrigerator" | "WashingMachine" | "Droplets" | "Microwave" | "Flame" | "Utensils";
  visitCharge: string;
  pricing: { name: string; price: string }[];
}

export const services: ServiceMeta[] = [
  {
    slug: "ac",
    name: "AC Repair & Service",
    short: "Cooling, gas refill, installation",
    description:
      "Expert repair, gas refilling, deep cleaning and installation for split, window and cassette ACs.",
    symptoms: ["Not cooling", "Water leakage", "Strange noise", "Bad smell", "AC not turning on"],
    causes: ["Low refrigerant", "Choked filter", "Faulty compressor", "Drainage block", "PCB issue"],
    included: ["Diagnosis", "Gas top-up", "Filter cleaning", "Coil wash", "Electrical check", "Performance test"],
    faqs: [
      { q: "Do you provide same-day AC service?", a: "Yes, in most service areas we dispatch the same day." },
      { q: "Is gas refill covered?", a: "Gas top-up is charged separately based on type (R32/R410/R22)." },
    ],
    icon: "AirVent",
    visitCharge: "₹499",
    pricing: [
      { name: "AC Visit / Inspection Charge", price: "₹499" },
      { name: "AC Only Water Service", price: "₹799" },
      { name: "AC Coil Foam Service (Deep Clean)", price: "₹999" },
      { name: "AC Gas Refill", price: "₹2,199" },
      { name: "AC Installation / Uninstallation", price: "On request" },
    ],
  },
  {
    slug: "refrigerator",
    name: "Refrigerator Repair",
    short: "Cooling, compressor, gas leakage",
    description:
      "Single door, double door, side-by-side and inverter fridge repair with genuine spares.",
    symptoms: ["No cooling", "Excess frost", "Water pooling", "Loud humming", "Door not sealing"],
    causes: ["Gas leak", "Faulty thermostat", "Compressor wear", "Defrost timer issue", "Seal damage"],
    included: ["Cooling check", "Gas charging", "Thermostat replacement", "Coil cleaning", "Door gasket fix"],
    faqs: [
      { q: "Do you handle inverter fridges?", a: "Yes — including inverter compressor and PCB repair." },
      { q: "Warranty on repair?", a: "Up to 30 days on workmanship and 6 months on replaced parts." },
    ],
    icon: "Refrigerator",
    visitCharge: "₹450",
    pricing: [
      { name: "Visit / Inspection Charge", price: "₹450" },
      { name: "Gas Refill / Charging", price: "From ₹1,499" },
      { name: "Thermostat / Sensor Replacement", price: "₹450 + Parts" },
      { name: "Compressor Service", price: "On request" },
    ],
  },
  {
    slug: "washing-machine",
    name: "Washing Machine Repair",
    short: "Front load, top load, semi-auto",
    description:
      "Drum, motor, PCB and drainage repair for all major brands of washing machines.",
    symptoms: ["Not spinning", "Water not draining", "Excessive vibration", "Door locked", "Error codes"],
    causes: ["Belt wear", "Drain pump block", "Motor issue", "PCB fault", "Bearing damage"],
    included: ["Drain pump cleaning", "Belt change", "Motor service", "PCB diagnostics", "Calibration"],
    faqs: [
      { q: "Do you service IFB / Bosch / LG?", a: "Yes, we service all major brands including imported models." },
    ],
    icon: "WashingMachine",
    visitCharge: "₹499",
    pricing: [
      { name: "Washing Machine Visit Charge", price: "₹499" },
      { name: "Drain Pump / Belt Replacement", price: "₹499 + Parts" },
      { name: "Motor / PCB Repair", price: "On request" },
      { name: "Full Service & Cleaning", price: "From ₹899" },
    ],
  },
  {
    slug: "ro-water-purifier",
    name: "RO Water Purifier",
    short: "Filter change, AMC, installation",
    description:
      "RO/UV/UF purifier installation, filter replacement and annual maintenance contracts.",
    symptoms: ["Slow water flow", "Bad taste", "Leakage", "Continuous beeping", "TDS too high"],
    causes: ["Choked filter", "Membrane life over", "Pump failure", "Leaky fittings", "Solenoid issue"],
    included: ["Sediment & carbon filter change", "Membrane test", "TDS check", "Sanitization", "AMC plans"],
    faqs: [
      { q: "How often should filters be changed?", a: "Sediment & carbon every 6–8 months, membrane every 18–24 months." },
    ],
    icon: "Droplets",
    visitCharge: "₹450",
    pricing: [
      { name: "RO Service & Filter Check", price: "₹349 + Parts" },
      { name: "Visit Charge", price: "₹450" },
      { name: "RO Membrane Replacement", price: "From ₹999" },
      { name: "New RO Installation", price: "On request" },
    ],
  },
  {
    slug: "microwave-oven",
    name: "Microwave & Oven Repair",
    short: "Heating, magnetron, control panel",
    description:
      "Solo, grill and convection microwave plus OTG repair by certified technicians.",
    symptoms: ["Not heating", "Sparks inside", "Turntable not rotating", "Display dead", "Door issue"],
    causes: ["Magnetron failure", "Capacitor issue", "Coupler wear", "Control board fault", "Door switch"],
    included: ["Heating diagnostics", "Magnetron replacement", "Cavity cleaning", "Switch replacement"],
    faqs: [
      { q: "Is microwave repair safe?", a: "Yes, our technicians are trained to handle high-voltage capacitors safely." },
    ],
    icon: "Microwave",
    visitCharge: "₹450",
    pricing: [
      { name: "Visit / Inspection Charge", price: "₹450" },
      { name: "Magnetron Replacement", price: "₹450 + Parts" },
      { name: "Heating Element / Switch Repair", price: "From ₹599" },
    ],
  },
  {
    slug: "geyser",
    name: "Geyser / Water Heater",
    short: "Heating element, thermostat, leakage",
    description:
      "Instant and storage geyser repair, descaling and safe installation services.",
    symptoms: ["No hot water", "Tripping power", "Water leakage", "Slow heating", "Strange noise"],
    causes: ["Element burnt", "Thermostat fault", "Scale buildup", "Tank corrosion", "MCB issue"],
    included: ["Element replacement", "Thermostat fix", "Descaling", "Leak repair", "Earthing check"],
    faqs: [
      { q: "Do you install new geysers?", a: "Yes, we provide safe installation with proper electrical work." },
    ],
    icon: "Flame",
    visitCharge: "₹450",
    pricing: [
      { name: "Visit / Inspection Charge", price: "₹450" },
      { name: "Heating Element Replacement", price: "₹450 + Parts" },
      { name: "Thermostat / Descaling", price: "From ₹599" },
    ],
  },
  {
    slug: "dishwasher",
    name: "Dishwasher Repair",
    short: "Drainage, spray arm, heating",
    description:
      "Modern dishwasher repair including drainage, heating element and control board issues.",
    symptoms: ["Not draining", "Dishes not clean", "Leakage", "Not starting", "Error codes"],
    causes: ["Spray arm blocked", "Drain pump issue", "Heater fault", "Door latch", "Control board"],
    included: ["Spray arm cleaning", "Drain pump service", "Heater check", "Control diagnostics"],
    faqs: [
      { q: "Do you stock dishwasher parts?", a: "We source genuine OEM parts within 24–48 hours." },
    ],
    icon: "Utensils",
    visitCharge: "₹450",
    pricing: [
      { name: "Visit / Inspection Charge", price: "₹450" },
      { name: "Drain Pump / Spray Arm Service", price: "₹450 + Parts" },
      { name: "Heater / Control Board Repair", price: "On request" },
    ],
  },
];

export const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "1000+", label: "Happy Customers" },
  { value: "60 min", label: "Avg. Response" },
  { value: "4.9★", label: "Customer Rating" },
];

export const brandsServiced = [
  "Samsung", "LG", "Whirlpool", "Bosch", "IFB", "Daikin", "Voltas", "Hitachi",
  "Panasonic", "Godrej", "Haier", "Siemens", "Carrier", "Blue Star",
];
