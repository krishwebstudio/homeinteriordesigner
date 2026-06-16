// Build trigger: 2026-06-16
import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, X, Play, MapPin, Instagram, Facebook, Ghost } from "lucide-react";

import hero from "@/assets/hero.jpg";
import founder from "@/assets/founder.jpg";
import sArch from "@/assets/service-architecture.jpg";
import sInt from "@/assets/service-interiors.jpg";
import sFurn from "@/assets/service-furniture.jpg";
import wPent from "@/assets/walk-penthouse.jpg";
import wVilla from "@/assets/walk-villa.jpg";
import wTown from "@/assets/walk-townhouse.jpg";
import parallax from "@/assets/parallax.jpg";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HOME INTERIOR DESIGNER — Crafting Luxury Spaces" },
      { name: "description", content: "Bespoke residential architecture, interiors and furniture by HOME INTERIOR DESIGNER." },
      { property: "og:title", content: "HOME INTERIOR DESIGNER — Crafting Luxury Spaces" },
      { property: "og:description", content: "Bespoke residential architecture, interiors and furniture." },
    ],
  }),
  component: Home,
});

const NAV = [
  "Home",
  "About HOME INTERIOR DESIGNER",
  "Services",
  "Bespoke Furniture",
  "Walkthroughs",
  "Shop Online",
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 md:px-12 py-6 bg-background/70 backdrop-blur-md border-b border-border/40">
          <a href="#top" className="min-w-0">
            <span className="block truncate text-[0.7rem] sm:text-xs font-medium tracking-[0.32em] text-foreground">
              HOME INTERIOR DESIGNER
            </span>
            <span className="hidden sm:block text-[0.55rem] tracking-[0.4em] text-gold mt-1">
              EST · MMXXVI
            </span>
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="shrink-0 flex flex-col items-end gap-[5px] p-2 group"
          >
            <span className="block h-px w-7 bg-foreground transition-all group-hover:w-9" />
            <span className="block h-px w-5 bg-foreground transition-all group-hover:w-9" />
            <span className="block h-px w-7 bg-foreground transition-all group-hover:w-9" />
          </button>
        </div>
      </header>

      {/* OVERLAY MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] animate-fade-in-slow">
          <div className="absolute inset-0 bg-charcoal/90 backdrop-blur-2xl" />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="absolute top-6 right-6 md:top-8 md:right-12 p-2 text-ivory hover:text-gold transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative h-full flex flex-col justify-center px-8 md:px-24">
            <span className="eyebrow mb-10 menu-item" style={{ animationDelay: "0.05s" }}>
              Menu / Navigation
            </span>
            <nav className="flex flex-col gap-5 md:gap-7">
              {NAV.map((item, i) => (
                <a
                  key={item}
                  href="#top"
                  onClick={() => setMenuOpen(false)}
                  className="menu-item group flex items-baseline gap-6 text-ivory hover:text-gold transition-colors duration-500"
                  style={{ animationDelay: `${0.15 + i * 0.07}s` }}
                >
                  <span className="text-[0.6rem] tracking-[0.3em] text-gold-soft/70">
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
                    {item}
                  </span>
                </a>
              ))}
            </nav>
            <div className="hairline mt-16 max-w-md menu-item" style={{ animationDelay: "0.7s" }} />
            <p className="mt-6 text-xs tracking-[0.2em] text-ivory/50 menu-item" style={{ animationDelay: "0.75s" }}>
              © 2026 HOME INTERIOR DESIGNER
            </p>
          </div>
        </div>
      )}

      {/* HERO */}
      <section id="top" className="relative h-screen w-full overflow-hidden">
        <img src={hero} alt="Luxury interior" className="absolute inset-0 w-full h-full object-cover" />
        <div className="tint-overlay" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="eyebrow text-gold-soft mb-6 animate-fade-up">An Atelier of Interiors</span>
          <h1 className="animate-fade-up text-ivory text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light max-w-5xl leading-[1.05]" style={{ animationDelay: "0.15s" }}>
            HOME INTERIOR DESIGNER
          </h1>
          <p className="mt-6 text-gold text-sm md:text-base tracking-[0.4em] uppercase animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Crafting Luxury Spaces
          </p>
          <a
            href="#portfolio"
            className="mt-12 group inline-flex items-center gap-4 border border-ivory/60 text-ivory px-8 md:px-10 py-4 text-[0.7rem] md:text-xs tracking-[0.32em] uppercase hover:bg-ivory hover:text-charcoal transition-all duration-700 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            Explore Portfolio
            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
          </a>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ivory/70 animate-fade-in-slow" style={{ animationDelay: "1s" }}>
          <span className="text-[0.6rem] tracking-[0.4em] uppercase">Scroll</span>
          <span className="block w-px h-12 bg-ivory/40" />
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 md:px-12 py-24 md:py-36">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img src={founder} alt="The founder" loading="lazy" className="w-full h-full object-cover grayscale-[15%]" />
            <div className="absolute bottom-6 left-6 text-ivory text-[0.6rem] tracking-[0.3em] uppercase">
              Founder · Principal Designer
            </div>
          </div>
          <div>
            <span className="eyebrow">Chapter 01 — The Atelier</span>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl leading-[1.1]">
              The Visionary Behind <span className="italic text-gold">HOME INTERIOR DESIGNER</span>
            </h2>
            <div className="hairline w-24 my-8" />
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
              With more than two decades of devotion to residential architecture and atelier-grade interiors,
              our founder has shaped homes across three continents — from sun-bleached Mediterranean villas to
              skyline penthouses. Each commission is approached as a private commission of couture: tailored,
              quiet, and built to outlive the trends that surround it.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl">
              Trained at the Royal College of Art and a fellow of the Institute of Interior Design, the studio's
              philosophy is grounded in restraint, material honesty, and an obsession with light.
            </p>
            <a href="#" className="arrow-link mt-10">
              Know More
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-12 py-24 md:py-32 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <span className="eyebrow">Chapter 02 — Disciplines</span>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl max-w-3xl">
              A trinity of practice, one singular standard.
            </h2>
            <div className="hairline w-24 mt-8" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "HID Architecture", n: 1, desc: "Structural composition, spatial mass and the choreography of light.", img: sArch },
              { title: "HID Interiors", n: 2, desc: "Curated living spaces composed in material, texture and patina.", img: sInt },
              { title: "HID Bespoke Furniture", n: 3, desc: "Heirloom pieces handcrafted in walnut, brass and stone.", img: sFurn },
            ].map((c) => (
              <a key={c.title} href="#" className="group relative block overflow-hidden bg-charcoal aspect-[3/4]">
                <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-ivory">
                  <span className="text-[0.6rem] tracking-[0.4em] text-gold">/ 0{c.n}</span>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl mb-3">{c.title}</h3>
                    <p className="text-sm text-ivory/70 max-w-xs leading-relaxed">{c.desc}</p>
                    <div className="mt-6 inline-flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-gold">
                      Discover <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WALKTHROUGHS */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow">Chapter 03 — In Motion</span>
              <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl max-w-3xl">
                Immersive Project Walkthroughs by <span className="italic text-gold">HOME INTERIOR DESIGNER</span>
              </h2>
            </div>
            <a href="#" className="arrow-link shrink-0">
              View All <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "The HID Penthouse", loc: "Manhattan, NY", img: wPent },
              { title: "The Beachfront Villa", loc: "Amalfi, IT", img: wVilla },
              { title: "The Heritage Townhouse", loc: "Kensington, UK", img: wTown },
            ].map((w) => (
              <div key={w.title} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={w.img} alt={w.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
                  <div className="tint-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-ivory/70 flex items-center justify-center backdrop-blur-sm group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                      <Play className="w-5 h-5 text-ivory fill-ivory group-hover:text-charcoal group-hover:fill-charcoal translate-x-[2px]" />
                    </div>
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                  <h3 className="font-display text-xl md:text-2xl">{w.title}</h3>
                  <span className="text-[0.65rem] tracking-[0.25em] uppercase text-muted-foreground shrink-0 pt-2">
                    {w.loc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARALLAX */}
      <section className="relative h-[90vh] md:h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${parallax})` }}
        />
        <div className="absolute inset-0 bg-charcoal/55" />
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="max-w-3xl text-center bg-background/85 backdrop-blur-md px-8 md:px-16 py-14 md:py-20 border border-gold/30 animate-fade-up">
            <span className="eyebrow">Design Philosophy</span>
            <p className="mt-8 font-display text-2xl md:text-4xl leading-[1.3] text-foreground">
              "Design is not just what it looks like and feels like.
              <span className="block italic text-gold mt-3">Design is how it works."</span>
            </p>
            <div className="hairline w-24 mx-auto my-10" />
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-charcoal text-ivory px-10 py-4 text-[0.7rem] tracking-[0.32em] uppercase hover:bg-gold hover:text-charcoal transition-all duration-700 group"
            >
              Contact HOME INTERIOR DESIGNER
              <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="eyebrow">Chapter 04 — Selected Commissions</span>
            <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl">
              HOME INTERIOR DESIGNER <span className="italic text-gold">Featured Work</span>
            </h2>
            <div className="hairline w-24 mt-8" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {[
              { img: w1, title: "Aria Dining Room", cat: "Residential · 2025" },
              { img: w2, title: "Walnut Suite", cat: "Residential · 2025" },
              { img: w3, title: "Marble Atelier Bath", cat: "Bespoke · 2024" },
              { img: w4, title: "The Library Office", cat: "Residential · 2024" },
              { img: w5, title: "Grand Foyer", cat: "Architecture · 2024" },
              { img: w6, title: "Reading Nook", cat: "Interiors · 2023" },
            ].map((p) => (
              <div key={p.title} className="group relative aspect-square overflow-hidden bg-muted">
                <img src={p.img} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/65 transition-all duration-700 flex flex-col items-center justify-center text-center text-ivory opacity-0 group-hover:opacity-100 px-4">
                  <span className="text-[0.6rem] tracking-[0.35em] uppercase text-gold mb-3">{p.cat}</span>
                  <h3 className="font-display text-xl md:text-2xl">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-ivory pt-20 md:pt-28 pb-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
            <div>
              <span className="eyebrow">Studio</span>
              <h3 className="font-display text-2xl md:text-3xl mt-5 mb-6">Visit the Atelier</h3>
              <div className="text-ivory/70 text-sm leading-loose">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-1 text-gold shrink-0" />
                  <div>
                    HOME INTERIOR DESIGNER<br />
                    No. 17, Lavelle Road<br />
                    Bengaluru 560001<br />
                    India
                  </div>
                </div>
                <div className="mt-6 text-xs tracking-[0.2em] uppercase">
                  studio@homeinteriordesigner.com<br />
                  +91 80 4567 8910
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">Coordinates</span>
              <h3 className="font-display text-2xl md:text-3xl mt-5 mb-6">Live Map</h3>
              <div className="relative aspect-[4/3] overflow-hidden border border-gold/30">
                <iframe
                  title="Studio Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.594%2C12.969%2C77.610%2C12.978&layer=mapnik"
                  className="absolute inset-0 w-full h-full grayscale contrast-[0.85] brightness-[0.6] sepia-[0.3]"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none bg-gold/10 mix-blend-overlay" />
              </div>
            </div>

            <div>
              <span className="eyebrow">Connect</span>
              <h3 className="font-display text-2xl md:text-3xl mt-5 mb-6">
                Connect with HOME INTERIOR DESIGNER
              </h3>
              <p className="text-ivory/60 text-sm leading-relaxed mb-8 max-w-xs">
                Follow our daily field notes, mood boards and on-site moments across the social channels.
              </p>
              <div className="flex gap-4">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Ghost, label: "Snapchat" },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-11 h-11 grid place-items-center border border-ivory/30 hover:border-gold hover:text-gold transition-colors duration-500"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hairline mt-20 mb-6 opacity-40" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.65rem] tracking-[0.3em] uppercase text-ivory/50">
            <span>© 2026 HOME INTERIOR DESIGNER. All rights reserved.</span>
            <span>Crafted with restraint.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
