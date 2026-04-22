import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import fridgeImg from "@/assets/service-fridge.jpg";
import washingImg from "@/assets/service-washing.jpg";
import teamImg from "@/assets/team.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Tips & Guides — Appliance Care, Maintenance & Energy Saving | Mahi Solutions" },
      { name: "description", content: "Practical tips for AC maintenance, fridge care, energy saving and seasonal appliance care from Mahi Solutions experts." },
      { property: "og:title", content: "Tips & Guides — Mahi Solutions" },
      { property: "og:description", content: "Care, cleaning and energy-saving tips for every appliance." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  {
    title: "10 AC maintenance tips to cut your power bill",
    excerpt: "Simple monthly habits that keep your AC running efficiently and reduce energy consumption by up to 25%.",
    img: washingImg,
    tag: "AC Care",
    read: "5 min",
  },
  {
    title: "How to keep your fridge running for 15+ years",
    excerpt: "A practical guide to coil cleaning, gasket care, temperature settings and what to do when cooling drops.",
    img: fridgeImg,
    tag: "Fridge",
    read: "6 min",
  },
  {
    title: "Front-load vs top-load: which to repair, which to replace",
    excerpt: "When repair makes sense — and when investing in a new washing machine is the smarter call.",
    img: washingImg,
    tag: "Washing Machine",
    read: "4 min",
  },
  {
    title: "RO purifier care: filter changes, TDS and AMC plans",
    excerpt: "How often to change filters, what TDS levels mean and whether an annual maintenance contract is worth it.",
    img: teamImg,
    tag: "RO Purifier",
    read: "5 min",
  },
  {
    title: "Seasonal appliance checklist: monsoon edition",
    excerpt: "Protect your geyser, washing machine and electricals from humidity and voltage fluctuations.",
    img: teamImg,
    tag: "Seasonal",
    read: "4 min",
  },
  {
    title: "Energy-saving habits that actually work",
    excerpt: "Forget the myths. These five science-backed habits genuinely reduce your monthly utility bill.",
    img: fridgeImg,
    tag: "Energy",
    read: "3 min",
  },
];

function BlogPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Tips & guides"
        title="Care advice from real technicians."
        description="Practical articles to help your appliances last longer, run quieter and cost less to operate."
      >
        <Button asChild variant="hero" size="lg"><Link to="/booking"><Calendar className="h-5 w-5" /> Book a Service</Link></Button>
      </PageHero>

      <section className="py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Latest" title="Articles, tips & guides" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.title} className="group rounded-2xl overflow-hidden border border-border bg-card shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" width={1280} height={896}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded-full bg-secondary px-3 py-1 font-semibold text-tech">{p.tag}</span>
                    <span className="text-muted-foreground">{p.read} read</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-5 inline-flex items-center text-sm font-semibold text-tech">
                    Read article <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
