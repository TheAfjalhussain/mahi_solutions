import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, MapPin, MessageCircle, Phone, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { site } from "@/lib/site";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Service Areas — Nawada Doorstep Appliance Repair | Mahi Solutions" },
      { name: "description", content: "Mahi Solutions covers Nawada City, Nawada Rural and the surrounding 5 km radius with same-day doorstep appliance repair." },
      { property: "og:title", content: "Service Areas — Mahi Solutions" },
      { property: "og:description", content: "Doorstep appliance repair across Nawada and 5 km surrounding area." },
    ],
  }),
  component: AreasPage,
});

const highlights = [
  { Icon: Truck, title: "Doorstep service", text: "Technicians arrive at your home with all standard tools & spares." },
  { Icon: Clock, title: "30-min response", text: "Most bookings get a confirmed slot within 30 minutes." },
  { Icon: ShieldCheck, title: "Local & trusted", text: "Background-verified technicians serving your neighborhood." },
];

function AreasPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Service areas"
        title="Doorstep appliance repair across Nawada."
        description="We bring certified technicians, genuine parts, and same-day service to Nawada City, Nawada Rural, and the surrounding 5 km radius."
      >
        <Button asChild variant="hero" size="lg"><Link to="/booking"><Calendar className="h-5 w-5" /> Book Service</Link></Button>
        <Button asChild variant="whatsapp" size="lg"><a href={site.whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /> WhatsApp</a></Button>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="container-page grid md:grid-cols-3 gap-5">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl bg-card border border-border p-6 shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-tech text-tech-foreground shadow-tech">
                <h.Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{h.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="container-page">
          <SectionHeading eyebrow="Where we serve" title="Neighborhoods we cover" />
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {site.areas.map((area) => (
              <div
                key={area}
                className="group rounded-2xl border border-border bg-card p-5 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-tech group-hover:bg-gradient-tech group-hover:text-tech-foreground transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{area}</div>
                  <div className="text-xs text-muted-foreground">Same-day available</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't see your area? <Link to="/contact" className="text-tech font-semibold">Get in touch</Link> — we're expanding fast.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-hero text-brand-foreground p-10 md:p-14 text-center shadow-elevated">
            <h2 className="font-display text-3xl md:text-4xl font-bold">Ready when you are.</h2>
            <p className="mt-3 text-brand-foreground/80 max-w-2xl mx-auto">
              Book online or call us — a certified technician will be at your door, same day.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="hero" size="lg"><Link to="/booking"><Calendar className="h-5 w-5" /> Book Service</Link></Button>
              <Button asChild variant="soft" size="lg"><a href={site.phoneHref}><Phone className="h-5 w-5" /> {site.phone}</a></Button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
