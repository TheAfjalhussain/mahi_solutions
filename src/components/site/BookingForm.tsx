import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
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

export function BookingForm({ defaultAppliance }: { defaultAppliance?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [appliance, setAppliance] = useState(defaultAppliance ?? "");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k)?.toString() ?? "").trim();

    // ✅ Validation
    if (!get("name") || !get("phone") || !get("address") || !get("when")) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ Clean WhatsApp number (remove +, spaces)
    const whatsappNumber = site.whatsapp.replace(/\D/g, "");

    const applianceLabel =
      services.find((s) => s.slug === appliance)?.name ||
      appliance ||
      "Other";

    const message = `
*New Service Booking Request*

*Name:* ${get("name")}
*Phone:* ${get("phone")}
*Address:* ${get("address")}
*Appliance:* ${applianceLabel}
*Preferred Date/Time:* ${get("when")}
*Problem:* ${get("problem") || "—"}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // ✅ Open WhatsApp safely
    const opened = window.open(url, "_blank");

    if (!opened) {
      window.location.href = url;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-2xl font-bold">Booking received!</h3>
        <p className="mt-2 text-muted-foreground">
          Our team will contact you shortly.
        </p>

        <div className="mt-6 flex gap-3 justify-center">
          <Button asChild>
            <a href={site.whatsappHref} target="_blank">Chat on WhatsApp</a>
          </Button>
          <Button asChild variant="outline">
            <a href={site.phoneHref}>Call us</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>

        <div>
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" name="phone" required type="tel" placeholder="9876543210" />
        </div>
      </div>

      <div>
        <Label htmlFor="address">Service address</Label>
        <Input
          id="address"
          name="address"
          required
          placeholder="House / flat, street, area"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label>Appliance</Label>
          <Select value={appliance} onValueChange={setAppliance}>
            <SelectTrigger>
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

          {/* ✅ Important hidden input */}
          <input type="hidden" name="appliance" value={appliance} />
        </div>

        <div>
          <Label htmlFor="when">Preferred date & time</Label>
          <Input id="when" name="when" type="datetime-local" required />
        </div>
      </div>

      <div>
        <Label htmlFor="problem">Describe the problem</Label>
        <Textarea
          id="problem"
          name="problem"
          rows={4}
          placeholder="e.g. AC not cooling..."
        />
      </div>

      <Button type="submit" className="w-full">
        Book Service
      </Button>

      <p className="text-xs text-muted-foreground">
        By submitting, you agree to be contacted.
      </p>
    </form>
  );
}