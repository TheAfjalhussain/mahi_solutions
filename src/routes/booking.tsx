import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  BadgeCheck,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { BookingForm } from "@/components/site/BookingForm";
import { site } from "@/lib/site";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      {
        title: "Book a Repair Service — Mahi Solutions Doorstep Technicians",
      },
      {
        name: "description",
        content:
          "Book a same-day appliance repair with Mahi Solutions. Choose appliance, time slot and address — certified technician at your door.",
      },
      {
        property: "og:title",
        content: "Book a Service — Mahi Solutions",
      },
      {
        property: "og:description",
        content:
          "Same-day appliance repair, certified technicians, fast confirmation.",
      },
    ],
  }),
  component: BookingPage,
});

const trustPoints = [
  {
    title: "Fast response",
    text: "Most bookings are confirmed within 30 minutes.",
    icon: Clock,
  },
  {
    title: "Trusted technicians",
    text: "Experienced and verified service professionals.",
    icon: BadgeCheck,
  },
  {
    title: "Warranty included",
    text: "Repairs are backed with service assurance.",
    icon: ShieldCheck,
  },
];

const bookingSteps = [
  "Choose your appliance and issue",
  "Share your address and preferred time",
  "Confirm on WhatsApp or phone",
];

function BookingPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Book a service"
        title="Premium repair booking made simple."
        description="Tell us what needs fixing, and our team will handle the rest with quick confirmation, professional support, and doorstep service."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="whatsapp" size="lg" className="rounded-full px-6">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              Book via WhatsApp
            </a>
          </Button>

          <Button asChild variant="soft" size="lg" className="rounded-full px-6">
            <a href={site.phoneHref}>
              <Phone className="h-5 w-5" />
              {site.phone}
            </a>
          </Button>

          <Button asChild variant="hero" size="lg" className="rounded-full px-6">
            <Link to="/contact">
              <ArrowRight className="h-4 w-4" />
              Contact us
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="py-10 md:py-14">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {trustPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary ring-1 ring-primary/10">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-6 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      Booking form
                    </p>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Tell us what is wrong
                    </h2>
                  </div>
                </div>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Share a few details about the appliance, the problem, and your
                  location. This helps us prepare the right technician and
                  respond faster.
                </p>
              </div>

              <BookingForm />
            </div>

            <aside className="space-y-6 lg:col-span-2">
              <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary via-primary/95 to-slate-900 p-6 text-primary-foreground shadow-elevated">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  Priority booking
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  Need quick repair support?
                </h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/80">
                  For urgent bookings, call us directly or send your details on
                  WhatsApp for the fastest response.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="hero" className="rounded-full">
                    <a href={site.phoneHref}>
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  <Button asChild variant="soft" className="rounded-full bg-white/10 text-white hover:bg-white/15">
                    <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/80">
                  <Star className="h-4 w-4 fill-current text-yellow-300" />
                  Professional, fast, and customer-friendly support
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-xl font-bold tracking-tight">
                  How the booking works
                </h3>

                <div className="mt-5 space-y-4">
                  {bookingSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start gap-4 rounded-2xl border border-border bg-secondary/50 px-4 py-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-6 text-foreground">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-xl font-bold tracking-tight">
                  Service details
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{site.hours}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{site.address}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>Same-day support in selected service areas</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}