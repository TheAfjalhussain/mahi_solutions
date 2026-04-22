import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Calendar,
  CheckCircle2,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { BookingForm } from "@/components/site/BookingForm";
import { services, site, type ServiceMeta, type ServiceSlug } from "@/lib/site";
import { applianceImages } from "@/lib/applianceImages";
import heroImg from "@/assets/hero-technician.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const slug = params.slug as ServiceSlug;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
      throw notFound();
    }

    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;

    if (!s) {
      return {
        meta: [{ title: "Service — Mahi Solutions" }],
      };
    }

    return {
      meta: [
        {
          title: `${s.name} — Same-Day Service | Mahi Solutions`,
        },
        {
          name: "description",
          content: `${s.description} Book certified technicians with genuine parts and 90-day warranty.`,
        },
        {
          property: "og:title",
          content: `${s.name} — Mahi Solutions`,
        },
        {
          property: "og:description",
          content: s.description,
        },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Service not found</h1>
        <p className="mt-4 text-muted-foreground">
          The service you are looking for does not exist or was removed.
        </p>
        <Link to="/services" className="mt-6 inline-flex text-tech">
          Back to all services
        </Link>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetailPage,
});

const featurePoints = [
  {
    icon: ShieldCheck,
    title: "Warranty included",
    text: "Service backed by clear workmanship support.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    text: "Quick diagnosis and prompt service scheduling.",
  },
  {
    icon: Wrench,
    title: "Genuine parts",
    text: "OEM or approved parts used wherever required.",
  },
  {
    icon: Sparkles,
    title: "Premium service",
    text: "Clean, professional and customer-friendly experience.",
  },
];

function ServiceDetailPage() {
  const { service } = Route.useLoaderData() as { service: ServiceMeta };

  const imageSrc = applianceImages[service.slug] ?? heroImg;
  const symptoms = service.symptoms ?? [];
  const causes = service.causes ?? [];
  const included = service.included ?? [];
  const faqs = service.faqs ?? [];

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service detail"
        title={service.name}
        description={service.description}
      >
        <Button asChild variant="hero" size="lg" className="rounded-full px-6">
          <Link to="/booking">
            <Calendar className="h-5 w-5" />
            Same-Day Booking
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

      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">
            <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
              <div className="relative aspect-[16/8] overflow-hidden bg-secondary">
                <img
                  src={imageSrc}
                  alt={service.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-tech shadow-soft backdrop-blur">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>
                <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Same-day support
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-tech text-tech-foreground shadow-tech">
                    <ServiceIcon name={service.icon} className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="font-display text-3xl font-bold">Overview</h2>
                    <p className="text-sm text-muted-foreground">
                      Trusted doorstep service for {service.name.toLowerCase()}.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featurePoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-border bg-card p-6 shadow-soft"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-tech text-tech-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-gold" />
                  <h3 className="font-display text-lg font-bold">
                    Common symptoms
                  </h3>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {symptoms.length ? (
                    symptoms.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-muted-foreground">
                      Symptoms information is not available for this service.
                    </li>
                  )}
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-tech" />
                  <h3 className="font-display text-lg font-bold">
                    Likely causes
                  </h3>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {causes.length ? (
                    causes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tech" />
                        {item}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-muted-foreground">
                      Cause information is not available for this service.
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-gradient-surface p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold">What&apos;s included</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.length ? (
                  included.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                      <span className="text-foreground/90">{item}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Included service details are not available for this page.
                  </p>
                )}
              </div>
            </div>

            <div>
              <SectionHeading
                align="left"
                eyebrow="FAQ"
                title="Frequently asked"
              />
              <Accordion
                type="single"
                collapsible
                className="mt-6 rounded-3xl border border-border bg-card px-2 shadow-soft"
              >
                {faqs.length ? (
                  faqs.map((f, i) => (
                    <AccordionItem key={i} value={`f-${i}`} className="px-4">
                      <AccordionTrigger className="text-left font-semibold">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))
                ) : (
                  <div className="px-4 py-6 text-sm text-muted-foreground">
                    FAQ content is not available for this service.
                  </div>
                )}
              </Accordion>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Book this service
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight">
                Need {service.name} today?
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Fill the booking form and our team will confirm the slot as
                quickly as possible.
              </p>
            </div>

            <BookingForm defaultAppliance={service.slug} />

            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary via-primary/95 to-slate-900 p-6 text-primary-foreground shadow-elevated">
              <h3 className="text-xl font-bold tracking-tight">
                Need help right now?
              </h3>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/80">
                For urgent support, call us directly or message on WhatsApp for
                the fastest response.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild variant="hero" className="rounded-full">
                  <a href={site.phoneHref}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>

                <Button
                  asChild
                  variant="soft"
                  className="rounded-full bg-white/10 text-white hover:bg-white/15"
                >
                  <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Other services"
            title="Need help with something else?"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-tech">
                  <ServiceIcon name={s.icon} />
                </div>
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {s.short ?? "Professional repair service"}
                  </div>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}