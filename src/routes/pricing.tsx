import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, CheckCircle2, MessageCircle, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Transparent Repair Pricing & AMC Plans | Mahi Solutions" },
      { name: "description", content: "Upfront, transparent pricing for AC, fridge, washing machine, RO, microwave, geyser & dishwasher repair. Plus Basic, Standard & Premium AMC plans." },
      { property: "og:title", content: "Pricing & AMC Plans — Mahi Solutions" },
      { property: "og:description", content: "Transparent service fees and annual maintenance contracts for every appliance." },
    ],
  }),
  component: PricingPage,
});

const addOns = [
  { name: "Emergency / Same-day visit", price: "+₹200" },
  { name: "After-hours visit (after 9 PM)", price: "+₹250" },
  { name: "Genuine spare parts", price: "At cost" },
  { name: "Re-visit within 30 days", price: "Free" },
];

function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing"
        title="Transparent pricing. No surprises."
        description="Honest, upfront service fees for every appliance"
      >
        <Button asChild variant="hero" size="lg"><Link to="/booking"><Calendar className="h-5 w-5" /> Book Service</Link></Button>
        <Button asChild variant="whatsapp" size="lg"><a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> Get a Quote</a></Button>
        <Button asChild variant="soft" size="lg"><a href={site.phoneHref}><Phone className="h-5 w-5" /> Call Now</a></Button>
      </PageHero>

      <section className="py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Service fees" title="Standard repair pricing" />
          <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
            Final price depends on your appliance model and any spare parts required. Your technician will share an exact quote before starting work.
          </p>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.slug} className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
                <div className="px-6 py-4 bg-gradient-surface border-b border-border flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-tech shadow-tech">
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold">{s.name}</h3>
                  </div>
                  <span className="hidden sm:inline-block rounded-full bg-tech/10 text-tech text-xs font-semibold px-3 py-1">
                    Visit {s.visitCharge}
                  </span>
                </div>
                <ul className="divide-y divide-border">
                  {s.pricing.map((r) => (
                    <li key={r.name} className="flex items-center justify-between gap-4 px-6 py-3.5 text-sm">
                      <span className="text-foreground/90">{r.name}</span>
                      <span className="font-display font-bold text-tech whitespace-nowrap">{r.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="px-6 py-4 border-t border-border flex flex-wrap gap-2">
                  <Button asChild variant="hero" size="sm" className="flex-1 min-w-[8rem]">
                    <Link to="/booking"><Calendar className="h-4 w-4" /> Book Now</Link>
                  </Button>
                  <Button asChild variant="whatsapp" size="sm">
                    <a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> Quote</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-card border border-border shadow-soft overflow-hidden max-w-2xl mx-auto">
            <div className="px-6 py-4 bg-gradient-surface border-b border-border">
              <h3 className="font-display text-lg font-bold">Add-ons & policies</h3>
            </div>
            <ul className="divide-y divide-border">
              {addOns.map((r) => (
                <li key={r.name} className="flex items-center justify-between gap-4 px-6 py-3.5 text-sm">
                  <span className="text-foreground/90">{r.name}</span>
                  <span className="font-display font-bold text-tech whitespace-nowrap">{r.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-xs text-center text-muted-foreground">
            * Prices may vary based on appliance brand, model, and required spare parts. All repairs include a 30-day service warranty.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-hero text-brand-foreground p-10 md:p-14 text-center shadow-elevated">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Need a custom quote?</h2>
            <p className="mt-3 text-brand-foreground/80 max-w-2xl mx-auto">
              Tell us about your appliance and we'll share a transparent estimate within minutes.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="hero" size="lg"><Link to="/booking"><Calendar className="h-5 w-5" /> Book Service</Link></Button>
              <Button asChild variant="whatsapp" size="lg"><a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp Us</a></Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
