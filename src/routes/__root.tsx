import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-tech">404</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground">Page not found</h1>
          <p className="mt-3 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-gold text-gold-foreground px-6 py-3 text-sm font-semibold shadow-gold hover:brightness-105"
          >
            Go home
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mahi Solutions — Trusted Repair Experts for All Home Appliances" },
      { name: "description", content: "Premium doorstep repair & maintenance for AC, refrigerator, washing machine, RO, oven, microwave, geyser & more. Same-day service, certified technicians, 90-day warranty." },
      { name: "author", content: "Mahi Solutions" },
      { name: "theme-color", content: "#0f1a3a" },
      { property: "og:title", content: "Mahi Solutions — Trusted Repair Experts" },
      { property: "og:description", content: "Doorstep repair for every appliance. Certified technicians. Same-day service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
