import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { services, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title:
          "Contact Mahi Solutions — Phone, WhatsApp, Email & Service Areas",
      },
      {
        name: "description",
        content:
          "Reach Mahi Solutions by phone, WhatsApp, email or contact form. Doorstep service across Nawada and nearby areas, 7 days a week.",
      },
      {
        property: "og:title",
        content: "Contact Mahi Solutions",
      },
      {
        property: "og:description",
        content:
          "Phone, WhatsApp, email and service areas with fast response support.",
      },
    ],
  }),
  component: ContactPage,
});

type ContactCard = {
  title: string;
  value: string;
  link: string;
  icon: typeof Phone;
  note: string;
};

const contactCards: ContactCard[] = [
  {
    title: "Call us",
    value: site.phone,
    link: site.phoneHref,
    icon: Phone,
    note: "Direct calling support",
  },
  {
    title: "WhatsApp",
    value: "Chat with our team",
    link: site.whatsappHref,
    icon: MessageCircle,
    note: "Fastest response",
  },
  {
    title: "Email",
    value: site.email,
    link: `mailto:${site.email}`,
    icon: Mail,
    note: "Send detailed queries",
  },
];

const trustPoints = [
  "Fast response",
  "Doorstep service",
  "7 days availability",
  "Experienced technicians",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const [quickMessage, setQuickMessage] = useState("");

  function getServiceLabel(value: string) {
    return (
      services.find((s) => s.slug === value)?.name ||
      (value === "other" ? "Other appliance" : "General enquiry")
    );
  }

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k)?.toString() ?? "").trim();

    const name = get("cname");
    const email = get("cemail");
    const phone = get("cphone");
    const message = get("cmsg");
    const address = get("caddress");
    const preferredTime = get("ctime");
    const serviceLabel = getServiceLabel(serviceType);

    const lines = [
      "*New Customer Contact Message*",
      "",
      `*Name:* ${name}`,
      `*Email:* ${email}`,
      `*Phone:* ${phone}`,
      `*Service:* ${serviceLabel}`,
      `*Preferred Time:* ${preferredTime || "Not mentioned"}`,
      `*Address:* ${address || "Not mentioned"}`,
      `*Message:* ${message}`,
    ];

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    const opened = window.open(url, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = url;
    }

    setLoading(false);
    setSent(true);
  }

  function handleQuickService(value: string) {
    setServiceType(value);
    const label = getServiceLabel(value);
    setQuickMessage(`I need help with ${label.toLowerCase()}.`);
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Any support for bookings, repairs, and quick help."
        description="Call, WhatsApp, or send us a detailed message. We keep the process simple, fast, and professional."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="hero" size="lg" className="rounded-full px-6">
            <Link to="/booking">
              <Calendar className="h-5 w-5" />
              Book a Service
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            asChild
            variant="whatsapp"
            size="lg"
            className="rounded-full px-6"
          >
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </a>
          </Button>

          <Button asChild variant="soft" size="lg" className="rounded-full px-6">
            <a href={site.phoneHref}>
              <Phone className="h-5 w-5" />
              {site.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="py-14">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const isExternal = card.link.startsWith("http");

              return (
                <a
                  key={card.title}
                  href={card.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary ring-1 ring-primary/10">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                      {card.note}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {card.value}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                    Open contact
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <SectionHeading
                align="left"
                eyebrow="Send a message"
                title="Tell us what you need"
              />

              {sent ? (
                <div className="mt-8 rounded-3xl border border-border bg-card p-8 shadow-card">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="mt-4 text-2xl font-bold tracking-tight">
                      Message prepared successfully
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">
                      Your message has been opened in WhatsApp with all details
                      filled in. Tap send to continue.
                    </p>

                    <div className="mt-6 flex flex-wrap justify-center gap-3">
                      <Button asChild variant="hero" className="rounded-full">
                        <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                          <MessageCircle className="h-4 w-4" />
                          Open WhatsApp Again
                        </a>
                      </Button>
                      <Button
                        variant="soft"
                        className="rounded-full"
                        onClick={() => setSent(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleContactSubmit}
                  className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="cname">Full name</Label>
                      <Input
                        id="cname"
                        name="cname"
                        required
                        placeholder="Enter your name"
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cemail">Email address</Label>
                      <Input
                        id="cemail"
                        name="cemail"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cphone">Phone number</Label>
                      <Input
                        id="cphone"
                        name="cphone"
                        type="tel"
                        required
                        placeholder="Your mobile number"
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ctime">Preferred time</Label>
                      <Input
                        id="ctime"
                        name="ctime"
                        placeholder="Morning, evening, today, etc."
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="mt-5 space-y-2">
                    <Label>Service needed</Label>
                    <Select value={serviceType} onValueChange={setServiceType}>
                      <SelectTrigger className="h-12 rounded-xl">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.slug} value={s.slug}>
                            {s.name}
                          </SelectItem>
                        ))}
                        <SelectItem value="other">Other appliance</SelectItem>
                        <SelectItem value="general">General enquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {services.slice(0, 6).map((s) => (
                      <button
                        key={s.slug}
                        type="button"
                        onClick={() => handleQuickService(s.slug)}
                        className={`rounded-full border px-4 py-2 text-sm transition-all ${
                          serviceType === s.slug
                            ? "border-primary bg-primary text-primary-foreground shadow-sm"
                            : "border-border bg-secondary text-foreground hover:border-primary/40 hover:bg-primary/5"
                        }`}
                      >
                        {s.name}
                      </button>
                    ))}
                  </div>

                  <div className="mt-5 space-y-2">
                    <Label htmlFor="caddress">Address / area</Label>
                    <Input
                      id="caddress"
                      name="caddress"
                      placeholder="Your location or landmark"
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="mt-5 space-y-2">
                    <Label htmlFor="cmsg">Message</Label>
                    <Textarea
                      id="cmsg"
                      name="cmsg"
                      rows={6}
                      required
                      placeholder="Tell us the issue, what appliance needs help, and any important details..."
                      className="rounded-xl"
                      value={quickMessage}
                      onChange={(e) => setQuickMessage(e.target.value)}
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="rounded-full px-6"
                      disabled={loading}
                    >
                      <MessageCircle className="h-5 w-5" />
                      {loading ? "Opening WhatsApp..." : "Send via WhatsApp"}
                    </Button>

                    <p className="text-sm text-muted-foreground">
                      Your details open in WhatsApp pre-filled. Just review and send.
                    </p>
                  </div>
                </form>
              )}
            </div>

            <aside className="space-y-6 lg:col-span-2">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Quick support
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight">
                  Service hours & location
                </h3>

                <div className="mt-5 space-y-4">
                  <p className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{site.hours}</span>
                  </p>
                  <p className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{site.address}</span>
                  </p>
                  <p className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Headphones className="mt-0.5 h-4 w-4 text-primary" />
                    <span>Professional support for quick queries and service bookings.</span>
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-xl font-bold tracking-tight">Why customers contact us</h3>
                <div className="mt-5 grid gap-3">
                  {trustPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/60 px-4 py-3"
                    >
                      <ShieldCheck className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary via-primary/95 to-slate-900 p-6 text-primary-foreground shadow-elevated">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                  <Zap className="h-3.5 w-3.5" />
                  Emergency support
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight">
                  Appliance breakdown after hours?
                </h3>
                <p className="mt-3 text-sm leading-6 text-primary-foreground/80">
                  Call our team for urgent repair help, weekend issues, or
                  late-night service needs.
                </p>

                <Button asChild variant="hero" className="mt-5 rounded-full">
                  <a href={site.phoneHref}>
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>

                <div className="mt-6 flex items-center gap-2 text-sm text-primary-foreground/80">
                  <Star className="h-4 w-4 fill-current text-yellow-300" />
                  Fast, polite, and professional response
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-24 pt-8">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Find us"
            title="Visit our service area on the map"
          />

          <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="aspect-[16/7] w-full bg-secondary">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14478.56513497224!2d85.55069439999998!3d24.876098349999996!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f2ff84175a8cfd%3A0xa95c38e4e40673aa!2sMahitech%20Ro%20Systems%2C%20Navin%20Nagar%20Rd%2C%20Navi%20Nagar%2C%20Nawada%2C%20Bihar%20805110!3m2!1d24.895597499999997!2d85.5451926!5e0!3m2!1sen!2sin!4v1776843770049!5m2!1sen!2sin"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahi Solutions location map"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}