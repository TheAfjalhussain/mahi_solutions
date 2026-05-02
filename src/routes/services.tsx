import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { services, site } from "@/lib/site";
import { applianceImages } from "@/lib/applianceImages";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Appliance Repair Services — AC, Fridge, Washing Machine & More | Mahi Solutions" },
      { name: "description", content: "Doorstep repair & maintenance for AC, refrigerator, washing machine, RO purifier, microwave, geyser and dishwasher. Same-day service, certified technicians." },
      { property: "og:title", content: "Our Services — Mahi Solutions" },
      { property: "og:description", content: "All appliance repairs, one trusted team." },
    ],
  }),
  component: ServicesPage,
});

const commonServices = [
  "Installation & uninstallation", "Gas refilling", "Deep cleaning", "Annual maintenance (AMC)",
  "Part replacement", "Water leakage repair", "Cooling/heating issues", "Noise & vibration",
  "Electrical & PCB faults", "Performance tuning",
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Services"
        title="Expert repair for every appliance in your home."
        description="From split ACs to dishwashers — Mahi Solutions covers all major brands with certified technicians and genuine parts."
      >
        <Button asChild variant="hero" size="lg"><Link to="/booking"><Calendar className="h-5 w-5" /> Book Service</Link></Button>
        <Button asChild variant="soft" size="lg"><a href={site.phoneHref}><Phone className="h-5 w-5" /> Call Now</a></Button>
        <Button asChild variant="whatsapp" size="lg"><a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp</a></Button>
      </PageHero>

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="What we fix" title="Choose your appliance" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.slug} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <Link to="/services/$slug" params={{ slug: s.slug }} className="relative block aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={applianceImages[s.slug]}
                    alt={s.name}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 backdrop-blur text-tech shadow-tech">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </div>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold">{s.name}</h3>
                    <span className="shrink-0 rounded-full bg-tech/10 text-tech text-xs font-semibold px-2.5 py-1">
                      Visit {s.visitCharge}
                    </span>
                  </div>
                  <p className="mt-2 text-muted-foreground text-sm">{s.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {s.symptoms.slice(0, 3).map((sy) => (
                      <li key={sy} className="rounded-full bg-secondary border border-border px-2.5 py-1 text-xs text-muted-foreground">{sy}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button asChild variant="hero" size="sm" className="flex-1 min-w-[8rem]">
                      <Link to="/booking"><Calendar className="h-4 w-4" /> Book Service</Link>
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

      <section className="py-16 bg-gradient-surface border-y border-border">
        <div className="container-page">
          <SectionHeading eyebrow="Common repair services" title="What's included in every visit" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {commonServices.map((c) => (
              <div key={c} className="rounded-xl bg-card border border-border px-4 py-3 text-sm font-medium shadow-soft">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
