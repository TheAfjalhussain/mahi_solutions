import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { brandsServiced, services, site, stats } from "@/lib/site";
import heroImg from "@/assets/hero-technician.jpg";
import { applianceImages } from "@/lib/applianceImages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title:
          "Appliance Repair Services — AC, Fridge, Washing Machine & More | Mahi Solutions",
      },
      {
        name: "description",
        content:
          "Doorstep repair and maintenance for AC, refrigerator, washing machine, RO purifier, microwave, geyser and dishwasher. Same-day service, certified technicians.",
      },
      { property: "og:title", content: "Our Services — Mahi Solutions" },
      {
        property: "og:description",
        content: "All appliance repairs, one trusted team.",
      },
    ],
  }),
  component: ServicesPage,
});

const commonServices = [
  "Installation & uninstallation",
  "Gas refilling",
  "Deep cleaning",
  "Annual maintenance (AMC)",
  "Part replacement",
  "Water leakage repair",
  "Cooling/heating issues",
  "Noise & vibration",
  "Electrical & PCB faults",
  "Performance tuning",
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Certified & experienced technicians",
    text: "Background-verified and professionally experienced technicians.",
  },
  {
    icon: Clock,
    title: "Fast response",
    text: "Quick booking support and same-day service in many areas.",
  },
  {
    icon: Wrench,
    title: "Genuine parts",
    text: "OEM or brand-approved parts with clear billing.",
  },
  {
    icon: Star,
    title: "Trusted service",
    text: "Reliable repairs with clear communication and warranty.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Expert repair for every appliance in your home."
        description="From split ACs to dishwashers — Mahi Solutions covers all major brands with certified technicians and genuine parts."
      >
        <Button asChild variant="hero" size="lg" className="rounded-full px-6">
          <Link to="/booking">
            <Calendar className="h-5 w-5" />
            Book Service
          </Link>
        </Button>

        <Button asChild variant="soft" size="lg" className="rounded-full px-6">
          <a href={site.phoneHref}>
            <Phone className="h-5 w-5" />
            Call Now
          </a>
        </Button>

        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="rounded-full px-6"
        >
          <a href={site.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </Button>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft"
              >
                <div className="font-display text-3xl font-bold text-tech">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we fix"
            title="Choose your appliance"
            description="Explore our most requested services and book a trusted technician in just a few clicks."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const imageSrc = applianceImages[s.slug] ?? heroImg;
              const shortText =
                s.short ??
                s.description ??
                "Professional repair and maintenance service.";

              return (
                <article
                  key={s.slug}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="relative block aspect-[16/10] overflow-hidden bg-secondary"
                  >
                    <img
                      src={imageSrc}
                      alt={s.name}
                      loading="lazy"
                      width={768}
                      height={512}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-tech shadow-soft backdrop-blur">
                      <ServiceIcon name={s.icon} className="h-6 w-6" />
                    </div>
                    <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      Same-day support
                    </div>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-bold">{s.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {shortText}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {(s.symptoms ?? []).slice(0, 3).map((sy) => (
                        <li
                          key={sy}
                          className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {sy}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      <Button
                        asChild
                        variant="hero"
                        size="sm"
                        className="min-w-[8rem] flex-1 rounded-full"
                      >
                        <Link to="/booking">
                          <Calendar className="h-4 w-4" />
                          Book Service
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
                      className="mt-4 inline-flex items-center text-sm font-semibold text-tech"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-gradient-surface py-16 md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why choose us"
              align="left"
              title="Premium service. Built on trust."
              description="We treat every home like our own. That means honest diagnostics, genuine parts, and clear communication from booking to finish."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-card p-5 shadow-soft"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-tech text-tech-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Common repair services"
            title="What's included in every visit"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {commonServices.map((c) => (
              <div
                key={c}
                className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium shadow-soft"
              >
                {c}
              </div>
            ))}
          </div>
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
                Need help with a repair today?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-brand-foreground/80">
                Book a certified technician now — same-day service, transparent
                pricing, and real warranty.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="hero" size="xl" className="rounded-full px-6">
                  <Link to="/booking">
                    <Calendar className="h-5 w-5" />
                    Book Service
                  </Link>
                </Button>
                <Button asChild variant="soft" size="xl" className="rounded-full px-6">
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