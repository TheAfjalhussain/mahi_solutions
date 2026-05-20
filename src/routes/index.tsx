import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, BadgeCheck, Building2, Calendar, CheckCircle2, Clock, Clock3, Droplets, Home, HomeIcon, House, MessageCircle, Phone,
  Search, ShieldCheck, Sparkles, Star, ThumbsUp, Users, Waves, Wrench, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/Layout";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services, site, stats } from "@/lib/site";
import img from "@/assets/repair2.png";
import heroImg from "@/assets/hero-technician.jpg";
import { applianceImages } from "@/lib/applianceImages";
import samsung from "@/assets/company/Samsung.jpg.jpeg";
import lg from "@/assets/company/LG.jpg.jpeg";
import hitachi from "@/assets/company/Hitachi.jpg.jpeg";
import daikin from "@/assets/company/Daikin.jpg.jpeg";
import whirlpool from "@/assets/company/Whirpool.jpg.jpeg";
import blueStar from "@/assets/company/bluestar.jpg.jpeg";
import voltas from "@/assets/company/Voltas.jpg.jpeg";
import panasonic from "@/assets/company/Panasonic.jpg.jpeg";
import godrej from "@/assets/company/Godreg.jpg.jpeg";

type BrandItem = {
  name: string;
  image?: string;
};

const brandsServiced: BrandItem[] = [
  { name: "Samsung", image: samsung },
  { name: "LG", image: lg },
  { name: "Whirlpool", image: whirlpool },
  { name: "Daikin", image: daikin },
  { name: "Voltas", image: voltas },
  { name: "Hitachi", image: hitachi },
  { name: "Panasonic", image: panasonic },
  { name: "Godrej", image: godrej },
  { name: "Blue Star", image: blueStar },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Mahi Solutions — Trusted Appliance Repair, Same-Day Doorstep Service",
      },
      {
        name: "description",
        content:
          "Book trusted repair experts for AC, fridge, washing machine, RO, microwave, geyser and more. Certified technicians, genuine parts, 90-day warranty.",
      },
      {
        property: "og:title",
        content: "Mahi Solutions — Trusted Appliance Repair",
      },
      {
        property: "og:description",
        content: "Same-day doorstep repair for every home appliance.",
      },
    ],
  }),
  component: HomePage,
});

const testimonials = [
  { name: "Priya S.", role: "Nawada City", text: "Booked at 9 AM, technician arrived by 11. AC fixed and serviced — works like new. Super professional.", rating: 5 },
  { name: "Rohit M.", role: "Nawada Rural", text: "Honest pricing, no upselling. They replaced our washing machine motor with genuine parts. Highly recommend.", rating: 5 },
  { name: "Anita & Sam",  role: "Nawada (5 km radius)", text: "Our fridge stopped cooling on a Sunday. Mahi Solutions came the same evening. Lifesavers!", rating: 5 },
];

const heroStats = [
  { value: "12+", label: "Years Experience", icon: ShieldCheck },
  { value: "1000+", label: "Happy Customers", icon: Users },
  { value: "60 min", label: "Avg. Response", icon: Clock3 },
  { value: "4.9/5", label: "Customer Rating", icon: Star },
];


const faqs = [
  {
    q: "Do you offer same-day service?",
    a: "Yes. For bookings before 6 PM in our service areas, we usually dispatch a technician the same day.",
  },
  {
    q: "Are your technicians certified & experienced?",
    a: "All technicians are background-verified, brand-trained, and carry calibrated diagnostic tools.",
  },
  {
    q: "What about warranty?",
    a: "We offer a 30-day workmanship warranty and up to 6 months on replaced parts.",
  },
  {
    q: "How is pricing decided?",
    a: "A flat visit and diagnosis fee, then a transparent quotation before any repair starts. No hidden charges.",
  },
  {
    q: "Do you use genuine parts?",
    a: "Yes — we source OEM or brand-approved equivalent parts only, with bills.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f5f8fc] text-slate-900">
      <div className="container-page">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(37, 99, 235, 0.16), transparent 28%), radial-gradient(circle at 85% 12%, rgba(14, 165, 233, 0.14), transparent 24%), radial-gradient(circle at 88% 84%, rgba(15, 23, 42, 0.08), transparent 26%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.65),rgba(255,255,255,0.88))]" />

      <div className="container relative mx-auto grid items-center gap-10 px-4 py-10 md:px-6 md:py-14 lg:grid-cols-12 lg:gap-12 lg:py-16">
        {/* Left content */}
        <div className="relative lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-sm backdrop-blur">
            <HomeIcon className="h-3.5 w-3.5" />
            SAME-DAY DOORSTEP SERVICE IN NAWADA
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
            Trusted Repair Experts for{" "}
            <span className="bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-500 bg-clip-text text-transparent">
              All Home Appliances
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Fast, affordable, doorstep repair & maintenance by certified technicians. Genuine parts, transparent pricing and a 30-day service warranty — guaranteed.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-6 shadow-lg shadow-blue-500/20">
              <Link to="/contact" className="inline-flex items-center gap-2">
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-slate-300 bg-white/80 px-6 backdrop-blur hover:bg-white"
            >
              <a href={site.phoneHref} className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              size="lg"
              className="h-12 rounded-full bg-emerald-500/10 px-6 text-emerald-700 hover:bg-emerald-500/15 hover:text-emerald-800"
            >
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                WhatsApp Us <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {heroStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-2xl font-black tracking-tight text-slate-950">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative lg:col-span-5">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-slate-950/5" />

            <img
              src={img}
              alt="Mahi Solutions premium water purifier"
              className="h-full w-full object-cover"
            />

            {/* Floating top badge */}
            <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg backdrop-blur">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-blue-700" />
                Certified Service
              </span>
            </div>

            {/* Floating response badge */}
            <div className="absolute right-4 top-4 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white shadow-lg">
              <span className="inline-flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-300" />
                60-min response
              </span>
            </div>

          </div>

          {/* Decorative side note */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4 text-blue-700" />
            Genuine parts • Transparent pricing • AMC support
          </div>
        </div>
      </div>
      </div>
    </section>
      {/* SERVICE GRID */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we fix"
            title="Repair & maintenance for every appliance"
            description="From your AC to your dishwasher — one trusted team for all your home & office repair needs."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <Link to="/services/$slug" params={{ slug: s.slug }} className="relative block aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={applianceImages[s.slug]}
                    alt={s.name}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/30 backdrop-blur text-tech shadow-soft">
                    <ServiceIcon name={s.icon} />
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-bold">{s.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button asChild variant="hero" size="sm" className="flex-1 min-w-[7rem]">
                      <Link to="/booking"><Calendar className="h-4 w-4" /> Book</Link>
                    </Button>
                    <Button asChild variant="whatsapp" size="icon" aria-label="WhatsApp">
                      <a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /></a>
                    </Button>
                    <Button asChild variant="outline" size="icon" aria-label="Call">
                      <a href={site.phoneHref}><Phone className="h-4 w-4" /></a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 md:py-24 bg-gradient-surface border-y border-border">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Why Mahi Solutions"
              align="left"
              title="Premium service. Built on trust."
              description="We treat every home like our own. That means honest diagnostics, genuine parts and clear communication from booking to finish."
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { Icon: BadgeCheck, title: "Certified Technicians", text: "Brand-trained and background-verified." },
              { Icon: ShieldCheck, title: "30-day Warranty", text: "Workmanship & parts guarantee." },
              { Icon: Wrench, title: "Genuine Parts", text: "OEM-approved spares, with bills." },
              { Icon: Clock, title: "On-Time Service", text: "Live tracking & 60-min response." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl bg-card border border-border p-5 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-tech text-tech-foreground">
                  <f.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Book a repair in 3 simple steps"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6 relative">
            {[
              { Icon: Calendar, step: "01", title: "Book online or call", text: "Pick a slot via our form, WhatsApp, or a quick phone call." },
              { Icon: Search, step: "02", title: "Diagnose & quote", text: "Technician inspects the appliance and shares a transparent estimate." },
              { Icon: ThumbsUp, step: "03", title: "Repair & relax", text: "We fix it on the spot whenever possible — backed by warranty." },
            ].map((s) => (
              <div key={s.step} className="relative rounded-2xl bg-card border border-border p-7 shadow-card">
                <span className="absolute -top-4 left-7 inline-flex items-center justify-center rounded-full bg-gradient-gold text-gold-foreground text-xs font-bold tracking-wider px-3 py-1.5 shadow-gold">
                  STEP {s.step}
                </span>
                <s.Icon className="h-9 w-9 text-tech" />
                <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-gradient-surface border-y border-border">
        <div className="container-page">
          <SectionHeading
            eyebrow="Loved by 50,000+ homes"
            title="What our customers say"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-card border border-border p-7 shadow-soft">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-4 text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-tech text-tech-foreground font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="py-16 md:py-24 bg-background">
      <div className="container-page">
        <SectionHeading
          eyebrow="Brands we service"
          title="All major brands, one trusted team"
          description="We repair and service leading home appliance and cooling brands with care, speed, and professional support."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {brandsServiced.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-card p-4 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-muted/40">
                {brand.image ? (
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    loading="lazy"
                    className="max-h-14 w-auto object-contain transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-sm font-semibold text-foreground shadow-sm">
                    {brand.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                )}
              </div>

              <p className="mt-3 text-sm font-semibold tracking-tight text-foreground">
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />
          <Accordion type="single" collapsible className="mt-10 rounded-2xl bg-card border border-border shadow-soft px-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="px-4">
                <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-brand text-brand-foreground p-10 md:p-16 text-center shadow-elevated">
            <div aria-hidden className="absolute inset-0 opacity-30"
              style={{ backgroundImage: "radial-gradient(circle at 50% 0%, oklch(0.66 0.14 220 / 0.5), transparent 60%)" }} />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-balance">
                Ready to fix it the right way?
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-brand-foreground/80">
                Book a certified technician now — same-day service, transparent pricing, real warranty.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="xl"><Link to="/booking"><Calendar className="h-5 w-5" /> Book Service</Link></Button>
                <Button asChild variant="soft" size="xl"><a href={site.phoneHref}><Phone className="h-5 w-5" /> {site.phone}</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
