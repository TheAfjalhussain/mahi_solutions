import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  Clock,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  ThumbsUp,
  Wrench,
  Zap,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { SiteLayout } from "@/components/site/Layout";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { SectionHeading } from "@/components/site/SectionHeading";
import { brandsServiced, services, site, stats } from "@/lib/site";
import heroImg from "@/assets/hero-technician.jpg";
import heroImg2 from "@/assets/repair2.png";
import { applianceImages } from "@/lib/applianceImages";

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
  {
    name: "Priya S.",
    role: "Nawada Bazar",
    text: "Booked at 9 AM, technician arrived by 11. AC fixed and serviced — works like new. Super professional.",
    rating: 5,
  },
  {
    name: "Rohit M.",
    role: "Par Nawada",
    text: "Honest pricing, no upselling. They replaced our washing machine motor with genuine parts. Highly recommend.",
    rating: 5,
  },
  {
    name: "Anita & Sam",
    role: "Navin Nagar",
    text: "Our fridge stopped cooling on a Sunday. Mahi Solutions came the same day evening and fixed it. Lifesavers!",
    rating: 5,
  },
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

const whyUs = [
  {
    Icon: BadgeCheck,
    title: "Certified & Experienced Technicians",
    text: "Brand-trained and background-verified.",
  },
  {
    Icon: ShieldCheck,
    title: "30-Day Warranty",
    text: "Workmanship and parts guarantee.",
  },
  {
    Icon: Wrench,
    title: "Genuine Parts",
    text: "OEM-approved spares, with bills.",
  },
  {
    Icon: Clock,
    title: "On-Time Service",
    text: "Quick response and reliable arrival.",
  },
];

const processSteps = [
  {
    Icon: Calendar,
    step: "01",
    title: "Book online or call",
    text: "Pick a slot via our form, WhatsApp, or a quick phone call.",
  },
  {
    Icon: Search,
    step: "02",
    title: "Diagnose & quote",
    text: "Technician inspects the appliance and shares a transparent estimate.",
  },
  {
    Icon: ThumbsUp,
    step: "03",
    title: "Repair & relax",
    text: "We fix it on the spot whenever possible — backed by warranty.",
  },
];

const highlights = [
  "Same-day doorstep repair",
  "Genuine parts only",
  "Transparent pricing",
  "Fast WhatsApp support",
];

function HomePage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div
          aria-hidden
          className="absolute inset-0 opacity-45"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, oklch(0.7 0.15 220 / 0.55), transparent 45%), radial-gradient(circle at 85% 90%, oklch(0.78 0.16 60 / 0.35), transparent 45%)",
          }}
        />

        <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-14 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Same-day doorstep service
            </span>

            <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              Trusted Repair Experts for{" "}
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                All Home Appliances
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Fast, affordable, doorstep repair and maintenance by certified & experienced
              technicians. Genuine parts, transparent pricing, and 30-day
              service warranty.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl" className="rounded-full px-6">
                <Link to="/booking">
                  <Calendar className="h-5 w-5" />
                  Book a Service
                </Link>
              </Button>

              <Button asChild variant="soft" size="xl" className="rounded-full px-6">
                <a href={site.phoneHref}>
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>

              <Button
                asChild
                variant="whatsapp"
                size="xl"
                className="rounded-full px-6"
              >
                <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur"
                >
                  <div className="font-display text-2xl font-bold text-gold">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-xs text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-tech opacity-30 blur-3xl" />
              <img
                src={heroImg2}
                alt="Mahi Solutions certified technician repairing a split AC"
                width={1536}
                height={1024}
                className="relative rounded-3xl ring-1 ring-white/10 shadow-elevated"
              />

              <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 text-foreground shadow-elevated sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-success/15 text-success">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">30-Day Warranty</div>
                  <div className="text-xs text-muted-foreground">
                    on all repairs
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 -top-5 hidden items-center gap-2 rounded-full bg-gradient-gold px-4 py-2 text-gold-foreground shadow-gold sm:flex">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-bold">60-min response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we fix"
            title="Repair and maintenance for every appliance"
            description="From your AC to your dishwasher — one trusted team for all your home and office repair needs."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.slug}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="relative block aspect-[4/3] overflow-hidden bg-secondary"
                >
                  <img
                    src={applianceImages[s.slug]}
                    alt={s.name}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-tech shadow-soft backdrop-blur">
                    <ServiceIcon name={s.icon} />
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-bold">{s.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">
                    {s.short}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button
                      asChild
                      variant="hero"
                      size="sm"
                      className="min-w-[7rem] flex-1 rounded-full"
                    >
                      <Link to="/booking">
                        <Calendar className="h-4 w-4" />
                        Book
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="whatsapp"
                      size="icon"
                      className="rounded-full"
                      aria-label="WhatsApp"
                    >
                      <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="rounded-full"
                      aria-label="Call"
                    >
                      <a href={site.phoneHref}>
                        <Phone className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="mt-3 inline-flex items-center text-sm font-semibold text-tech"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-gradient-surface py-20 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why Mahi Solutions"
              align="left"
              title="Premium service. Built on trust."
              description="We treat every home like our own. That means honest diagnostics, genuine parts, and clear communication from booking to finish."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft"
              >
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

      <section className="py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it works"
            title="Book a repair in 3 simple steps"
          />

          <div className="relative mt-14 grid gap-6 md:grid-cols-3">
            {processSteps.map((s) => (
              <div
                key={s.step}
                className="relative rounded-3xl border border-border bg-card p-7 shadow-card"
              >
                <span className="absolute -top-4 left-7 inline-flex items-center justify-center rounded-full bg-gradient-gold px-3 py-1.5 text-xs font-bold tracking-wider text-gold-foreground shadow-gold">
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

      <section className="border-y border-border bg-gradient-surface py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Loved by 1,000+ homes"
            title="What our customers say"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-3xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>

                <p className="mt-4 leading-relaxed text-foreground/90">
                  "{t.text}"
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-tech font-bold text-tech-foreground">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Brands we service"
            title="All major brands, one trusted team"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {brandsServiced.map((b) => (
              <span
                key={b}
                className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-soft"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Questions, answered" />

          <Accordion
            type="single"
            collapsible
            className="mt-10 rounded-3xl border border-border bg-card px-2 shadow-soft"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="px-4">
                <AccordionTrigger className="text-left font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-3xl bg-brand p-10 text-center text-brand-foreground shadow-elevated md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 0%, oklch(0.66 0.14 220 / 0.5), transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-balance md:text-5xl">
                Ready to fix it the right way?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-brand-foreground/80">
                Book a certified & experienced technician now — same-day service, transparent
                pricing, and real warranty.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="xl">
                  <Link to="/booking">
                    <Calendar className="h-5 w-5" />
                    Book Service
                  </Link>
                </Button>
                <Button asChild variant="soft" size="xl">
                  <a href={site.phoneHref}>
                    <Phone className="h-5 w-5" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}