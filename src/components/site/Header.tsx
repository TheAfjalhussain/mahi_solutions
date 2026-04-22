import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, Wrench, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-background/60 backdrop-blur",
      )}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-secondary transition-colors data-[status=active]:text-foreground data-[status=active]:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-tech transition-colors"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Button asChild variant="hero" size="default">
            <Link to="/booking">Book Service</Link>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-secondary"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="px-3 py-2.5 rounded-md text-base font-medium hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-foreground text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-3">
              <Button asChild variant="navy" className="flex-1">
                <a href={site.phoneHref}><Phone className="h-4 w-4" /> Call</a>
              </Button>
              <Button asChild variant="hero" className="flex-1" onClick={() => setOpen(false)}>
                <Link to="/booking">Book</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
