import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, Calendar, CheckCircle2, MessageCircle, Phone, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { BookingForm } from "@/components/site/BookingForm";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: `Service — ${site.name}` }] };
    return {
      meta: [
        { title: `${s.name} — Same-Day Service | ${site.name}` },
        { name: "description", content: `${s.description} Book certified technicians with genuine parts and 30-day warranty.` },
        { property: "og:title", content: `${s.name} — ${site.name}` },
        { property: "og:description", content: s.description },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-page py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Service not found</h1>
        <Link to="/services" className="text-tech mt-4 inline-block">Back to all services</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="container-page py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">{error.message}</p>
        <Link to="/services" className="text-tech mt-4 inline-block">Back to all services</Link>
      </div>
    </SiteLayout>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service detail"
        title={service.name}
        description={service.description}
      >
        <Button asChild variant="hero" size="lg"><Link to="/booking"><Calendar className="h-5 w-5" /> Same-Day Booking</Link></Button>
        <Button asChild variant="soft" size="lg"><a href={site.phoneHref}><Phone className="h-5 w-5" /> Call Now</a></Button>
        <Button asChild variant="whatsapp" size="lg"><a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp</a></Button>
      </PageHero>

      <section className="py-20">
        <div className="container-page grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-tech text-tech-foreground shadow-tech">
                  <ServiceIcon name={service.icon} className="h-7 w-7" />
                </div>
                <h2 className="font-display text-3xl font-bold">Overview</h2>
              </div>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{service.description}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-gold" />
                  <h3 className="font-display text-lg font-bold">Common symptoms</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {service.symptoms.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-card border border-border p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-tech" />
                  <h3 className="font-display text-lg font-bold">Likely causes</h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {service.causes.map((s) => (
                    <li key={s} className="flex gap-2.5 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-tech shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
              <div className="px-6 py-4 bg-gradient-surface border-b border-border flex items-center justify-between">
                <h3 className="font-display text-xl font-bold">Pricing</h3>
                <span className="rounded-full bg-tech/10 text-tech text-xs font-semibold px-3 py-1">
                  Visit charge {service.visitCharge}
                </span>
              </div>
              <ul className="divide-y divide-border">
                {service.pricing.map((r) => (
                  <li key={r.name} className="flex items-center justify-between gap-4 px-6 py-3.5 text-sm">
                    <span className="text-foreground/90">{r.name}</span>
                    <span className="font-display font-bold text-tech whitespace-nowrap">{r.price}</span>
                  </li>
                ))}
              </ul>
              <p className="px-6 py-3 text-xs text-muted-foreground border-t border-border">
                * Final price depends on appliance model & required spare parts. Technician shares an exact quote before starting work.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-surface border border-border p-8 shadow-soft">
              <h3 className="font-display text-2xl font-bold">What's included</h3>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {service.included.map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{i}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading align="left" eyebrow="FAQ" title="Frequently asked" />
              <Accordion type="single" collapsible className="mt-6 rounded-2xl bg-card border border-border shadow-soft px-2">
                {service.faqs.map((f, i) => (
                  <AccordionItem key={i} value={`f-${i}`} className="px-4">
                    <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 self-start space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold">Book this service</h3>
              <p className="text-muted-foreground mt-1 text-sm">Same-day slots available.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/booking"><Calendar className="h-5 w-5" /> Book a Service</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <SectionHeading eyebrow="Other services" title="Need help with something else?" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.filter((s) => s.slug !== service.slug).slice(0, 6).map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-tech">
                  <ServiceIcon name={s.icon} />
                </div>
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.short}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
