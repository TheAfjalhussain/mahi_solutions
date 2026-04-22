import { useMemo, useState, type FormEvent } from "react";
import { CheckCircle2, CalendarDays, MessageCircle, Phone } from "lucide-react";

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

import { services, site } from "@/lib/site";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

function formatDateTime(value: string) {
  if (!value) return "—";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function BookingForm({
  defaultAppliance,
}: {
  defaultAppliance?: string;
}) {
  const initialAppliance = useMemo(() => {
    if (defaultAppliance) return defaultAppliance;
    return services[0]?.slug ?? "other";
  }, [defaultAppliance]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [appliance, setAppliance] = useState(initialAppliance);

  function getApplianceLabel(value: string) {
    if (!value || value === "other") return "Other";
    return services.find((s) => s.slug === value)?.name ?? value;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const fd = new FormData(form);

    const get = (key: string) => (fd.get(key)?.toString() ?? "").trim();

    const name = get("name");
    const phone = get("phone");
    const address = get("address");
    const when = get("when");
    const problem = get("problem");
    const applianceLabel = getApplianceLabel(appliance);

    const lines = [
      "*New Service Booking Request*",
      "",
      `*Name:* ${name || "—"}`,
      `*Phone:* ${phone || "—"}`,
      `*Address:* ${address || "—"}`,
      `*Appliance:* ${applianceLabel}`,
      `*Preferred Date/Time:* ${formatDateTime(when)}`,
      `*Problem:* ${problem || "—"}`,
    ];

    const url = buildWhatsAppUrl(lines.join("\n"));
    const opened = window.open(url, "_blank", "noopener,noreferrer");

    if (!opened) {
      window.location.href = url;
    }

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-card">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>

        <h3 className="mt-5 text-2xl font-bold tracking-tight">
          Booking message opened in WhatsApp
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Review the details and tap send. Our team will respond shortly.
        </p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="whatsapp" className="rounded-full">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              Open WhatsApp Again
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            className="rounded-full"
            onClick={() => setSubmitted(false)}
          >
            <CalendarDays className="h-4 w-4" />
            Book Another Service
          </Button>

          <Button asChild variant="soft" className="rounded-full">
            <a href={site.phoneHref}>
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            name="name"
            required
            placeholder="Your name"
            className="h-12 rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            placeholder="+91 98765 43210"
            className="h-12 rounded-xl"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Service address</Label>
        <Input
          id="address"
          name="address"
          required
          placeholder="House / flat, street, area, landmark"
          className="h-12 rounded-xl"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Appliance</Label>
          <Select value={appliance} onValueChange={setAppliance}>
            <SelectTrigger className="h-12 rounded-xl">
              <SelectValue placeholder="Select appliance" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s.slug} value={s.slug}>
                  {s.name}
                </SelectItem>
              ))}
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="when">Preferred date & time</Label>
          <Input
            id="when"
            name="when"
            type="datetime-local"
            required
            className="h-12 rounded-xl"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="problem">Describe the problem</Label>
        <Textarea
          id="problem"
          name="problem"
          rows={4}
          required
          placeholder="e.g. Refrigerator is not cooling properly since yesterday..."
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button
          type="submit"
          variant="hero"
          size="lg"
          className="flex-1 rounded-full"
          disabled={loading}
        >
          {loading ? "Opening WhatsApp..." : "Book Service"}
        </Button>

        <Button asChild variant="whatsapp" size="lg" className="rounded-full">
          <a href={site.whatsappHref} target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" />
            Book via WhatsApp
          </a>
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">
        By submitting, you agree to be contacted regarding your service request.
      </p>
    </form>
  );
}