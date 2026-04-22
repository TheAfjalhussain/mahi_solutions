import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-elevated hover:scale-110 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute right-16 hidden md:group-hover:inline whitespace-nowrap rounded-md bg-foreground text-background px-3 py-1.5 text-xs font-medium shadow-card">
          WhatsApp us
        </span>
      </a>
      <a
        href={site.phoneHref}
        aria-label="Call now"
        className="group md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-gold-foreground shadow-gold hover:scale-110 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
