import type { ReactNode } from "react";
import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";

import appCss from "../styles.css?url";

const SITE_NAME = "Mahi Solutions";
const SITE_URL = "https://mahisolutions.in";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

function NotFoundComponent() {
  return (
    <SiteLayout>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-tech">
            404
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground">
            Page not found
          </h1>
          <p className="mt-3 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:brightness-105"
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

      { title: "Mahi Solutions | AC, RO, Geyser & Cooler Repair in Nawada" },

      {
        name: "description",
        content:
          "Trusted AC, RO, geyser, cooler, refrigerator, washing machine and home appliance repair in Nawada district and within 10 km nearby areas. Fast doorstep service, skilled technicians, genuine parts, and warranty support.",
      },

      {
        name: "keywords",
        content:
          "AC service in Nawada, RO service in Nawada, geyser service in Nawada, cooler service in Nawada, refrigerator repair Nawada, washing machine repair Nawada, home appliance repair Nawada, doorstep service Nawada, appliance repair near Nawada, 10 km service area Nawada",
      },

      { name: "author", content: SITE_NAME },
      { name: "application-name", content: SITE_NAME },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow" },
      { name: "theme-color", content: "#0f1a3a" },

      { name: "geo.region", content: "IN-BR" },
      { name: "geo.placename", content: "Nawada" },
      { name: "geo.position", content: "24.8867;85.5433" },
      { name: "ICBM", content: "24.8867, 85.5433" },

      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: "Mahi Solutions | AC, RO, Geyser & Cooler Repair in Nawada" },
      {
        property: "og:description",
        content:
          "Fast and trusted doorstep repair for AC, RO, geyser, cooler and all home appliances in Nawada and nearby 10 km areas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mahi Solutions | AC, RO, Geyser & Cooler Repair in Nawada" },
      {
        name: "twitter:description",
        content:
          "Doorstep appliance repair in Nawada district and nearby 10 km areas.",
      },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: SITE_URL,
    image: OG_IMAGE,
    description:
      "Doorstep repair and maintenance for AC, RO, geyser, cooler and other home appliances in Nawada and nearby areas.",
    areaServed: [
      {
        "@type": "City",
        name: "Nawada",
      },
      {
        "@type": "AdministrativeArea",
        name: "Nawada district",
      },
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 24.8867,
          longitude: 85.5433,
        },
        geoRadius: 10000,
      },
    ],
    serviceType: [
      "AC Service",
      "RO Service",
      "Geyser Service",
      "Cooler Service",
      "Refrigerator Repair",
      "Washing Machine Repair",
      "Microwave Repair",
      "Home Appliance Repair",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nawada",
      addressRegion: "Bihar",
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
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