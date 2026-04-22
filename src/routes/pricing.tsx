import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, CheckCircle2, MessageCircle, Phone, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/lib/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Transparent Repair Pricing | Mahi Solutions" },
      { name: "description", content: "Upfront, transparent pricing for AC, fridge, washing machine, RO, microwave, geyser & dishwasher repair." },
      { property: "og:title", content: "Pricing — Mahi Solutions" },
      { property: "og:description", content: "Transparent service fees and annual maintenance contracts for every appliance." },
    ],
  }),
  component: PricingPage,
});

const priceTables = [
  {
    category: "Cooling appliances",
    rows: [
      { name: "AC inspection / diagnosis", price: "500" },
      { name: "AC general service", price: "500" },
      { name: "AC gas refilling (split)", price: "" },
      { name: "AC installation / uninstallation", price: "" },
      { name: "Refrigerator inspection", price: "" },
      { name: "Refrigerator gas refilling", price: "" },
      { name: "Refrigerator PCB repair", price: "" },
    ],
  },
  {
    category: "Kitchen appliances",
    rows: [
      { name: "Microwave inspection", price: "" },
      { name: "Microwave magnetron replacement", price: "" },
      { name: "Oven heating element repair", price: "" },
      { name: "Dishwasher inspection", price: "" },
      { name: "Dishwasher pump / drain repair", price: "" },
    ],
  },
  {
    category: "Water & laundry",
    rows: [
      { name: "Washing machine inspection", price: "" },
      { name: "Washing machine motor / belt repair", price: "" },
      { name: "RO purifier service & filter change", price: "" },
      { name: "RO membrane replacement", price: "" },
      { name: "Geyser inspection", price: "" },
      { name: "Geyser heating element repair", price: "" },
    ],
  },
  {
    category: "Add-ons",
    rows: [
      { name: "Emergency / same-day visit", price: "" },
      { name: "After-hours visit", price: "" },
      { name: "Spare parts (genuine)", price: "At cost" },
      { name: "Re-visit within 30 days", price: "" },
    ],
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Pricing"
        title="Transparent pricing. No surprises."
        description="Honest, upfront service fees for every appliance."
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
            {priceTables.map((t) => (
              <div key={t.category} className="rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
                <div className="px-6 py-4 bg-gradient-surface border-b border-border">
                  <h3 className="font-display text-lg font-bold">{t.category}</h3>
                </div>
                <ul className="divide-y divide-border">
                  {t.rows.map((r) => (
                    <li key={r.name} className="flex items-center justify-between gap-4 px-6 py-3.5 text-sm">
                      <span className="text-foreground/90">{r.name}</span>
                      <span className="font-display font-bold text-tech whitespace-nowrap">{r.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-center text-muted-foreground">
            * Prices may vary based on appliance brand, model, and required spare parts. All repairs include a 90-day service warranty.
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
