import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, ShieldCheck, Twitter, Wrench, Youtube } from "lucide-react";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand text-brand-foreground">
      <div className="container-page py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="font-display text-2xl font-bold">{site.name}</span>
          </Link>
          <p className="mt-4 text-sm text-brand-foreground/70 leading-relaxed">
            Doorstep repair & maintenance for every home appliance — by certified and Experience technicians, with genuine parts.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium">
            <ShieldCheck className="h-4 w-4 text-gold" /> 30-day service warranty
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-foreground/60">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="text-brand-foreground/80 hover:text-gold transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-foreground/60">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="text-brand-foreground/80 hover:text-gold">About Us</Link></li>
            <li><Link to="/services" className="text-brand-foreground/80 hover:text-gold">All Services</Link></li>
            <li><Link to="/pricing" className="text-brand-foreground/80 hover:text-gold">Pricing & AMC</Link></li>
            <li><Link to="/areas" className="text-brand-foreground/80 hover:text-gold">Service Areas</Link></li>
            <li><Link to="/booking" className="text-brand-foreground/80 hover:text-gold">Book Service</Link></li>
            <li><Link to="/faq" className="text-brand-foreground/80 hover:text-gold">FAQ</Link></li>
            <li><Link to="/contact" className="text-brand-foreground/80 hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-brand-foreground/60">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-tech" />
              <a href={site.phoneHref} className="text-brand-foreground/90 hover:text-gold">{site.phone}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-tech" />
              <a href={`mailto:${site.email}`} className="text-brand-foreground/90 hover:text-gold">{site.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-tech" />
              <span className="text-brand-foreground/80">{site.address}</span>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Facebook, href: site.social.facebook, label: "Facebook" },
              { Icon: Instagram, href: site.social.instagram, label: "Instagram" },
              { Icon: Twitter, href: site.social.twitter, label: "Twitter" },
              { Icon: Youtube, href: site.social.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 hover:bg-gold hover:text-gold-foreground transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-brand-foreground/60">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Genuine parts · Experienced technicians · Transparent pricing</p>
          <div className="text-xs">
          Designed & Developed by :
          <a
            href="https://growthix.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <span className="font-semibold"> Growthix</span>
          </a>
      </div>
        </div>
      </div>
    </footer>
  );
}
