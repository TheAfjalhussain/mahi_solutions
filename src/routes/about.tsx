import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, HeartHandshake, ShieldCheck, Sparkles, Target, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { stats } from "@/lib/site";
import teamImg from "@/assets/team.jpg";
import teamImg2 from "@/assets/repair2.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Mahi Solutions — Certified & Experienced Technicians, Trusted Service" },
      { name: "description", content: "12+ years of trusted appliance repair. Meet the Mahi Solutions team — certified, background-verified technicians committed to quality and warranty-backed service." },
      { property: "og:title", content: "About Mahi Solutions" },
      { property: "og:description", content: "Certified & experienced technicians. Genuine parts. 30-day warranty." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="Repair done right — by people who care."
        description="Since 2015 we've helped over 1,000+ homes and offices keep their appliances running smoothly. Honest pricing, genuine parts and a service experience built around you."
      >
        <Button asChild variant="hero" size="lg"><Link to="/booking">Book a Service</Link></Button>
        <Button asChild variant="soft" size="lg"><Link to="/services">View Services</Link></Button>
      </PageHero>

      <section className="py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <img src={teamImg2} alt="Mahi Solutions technician team" loading="lazy" width={1536} height={1024}
            className="rounded-3xl shadow-elevated" />
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Mahi Solutions- A trusted name in appliance repair."
              description="we started as a small one-person workshop has grown into a multiple service network of certified & experienced technicians. We've stayed true to one principle: treat every customer's appliance like our own."
            />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-card border border-border p-5 shadow-soft">
                  <div className="font-display text-3xl font-bold text-tech">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-surface border-y border-border">
        <div className="container-page">
          <SectionHeading eyebrow="Mission & values" title="What we stand for" />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { Icon: Target, title: "Honest diagnostics", text: "Clear assessments. No upselling. You only pay for what's truly needed." },
              { Icon: ShieldCheck, title: "Real warranty", text: "Every repair is backed by a 30-day workmanship guarantee." },
              { Icon: HeartHandshake, title: "Customer first", text: "Punctual, polite and respectful of your home. Always." },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl bg-card border border-border p-7 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-tech text-tech-foreground">
                  <v.Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our team"
              title="Certified, trained, background-verified."
              description="Every technician completes brand-specific training and a strict background check before joining Mahi Solutions. They carry calibrated tools, wear ID badges, and work to a written checklist."
            />
            <div className="mt-6 space-y-3">
              {[
                "Brand-specific certifications (LG, Samsung, Bosch, Daikin & more)",
                "Calibrated diagnostic tools on every job",
                "Polite, uniformed and ID-verified",
                "Continuous training on the latest models",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                    <Sparkles className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-foreground/90">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { Icon: Users, title: "Certified & Experienced Technicians", text: "Across the Multiple area" },
              { Icon: Wrench, title: "All Appliances", text: "Residential & commercial" },
              { Icon: Award, title: "Top-Rated", text: "4.9★ across platforms" },
              { Icon: ShieldCheck, title: "Fully Insured", text: "Liability covered" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-card border border-border p-5 shadow-soft">
                <c.Icon className="h-6 w-6 text-gold" />
                <div className="mt-3 font-display font-bold">{c.title}</div>
                <div className="text-sm text-muted-foreground">{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
