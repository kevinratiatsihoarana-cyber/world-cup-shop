import { createFileRoute } from "@tanstack/react-router";
import { Trophy, ShoppingBag, ExternalLink, Star } from "lucide-react";

import homme from "@/assets/products/nike-france-homme.jpg.asset.json";
import enfant from "@/assets/products/nike-france-enfant.jpg.asset.json";
import unisex from "@/assets/products/nike-france-unisex.jpg.asset.json";
import puma from "@/assets/products/puma-replica.jpg.asset.json";
import fff from "@/assets/products/nike-fff.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "World Cup Store 2026 — Maillots officiels Coupe du Monde" },
      { name: "description", content: "Boutique de maillots officiels pour la Coupe du Monde 2026 : Équipe de France, FFF, Portugal et plus. Livraison via Amazon." },
      { property: "og:title", content: "World Cup Store 2026" },
      { property: "og:description", content: "Maillots officiels Coupe du Monde 2026 — Nike, Puma, FFF." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  link: string;
  badge?: string;
};

const products: Product[] = [
  {
    id: "m1",
    name: "Nike France Stadium Home — Homme",
    description: "Maillot officiel domicile France 2026, Bleu Royal inspiré de la Statue de la Liberté. Technologie Dri-FIT respirante, col polo moderne.",
    price: "109,95€ – 109,99€",
    image: homme.url,
    link: "https://www.amazon.fr/Nike-France-Homme-XL-National/dp/B0FNRRS4ZX?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1B4TFD1MJKVVR&dib=eyJ2IjoiMSJ9.FpFT-Srxp4VhCWbFf9iQbmQaogDq831PF5UL_lfuAB322qG8kiScWq8CFgr1cmIfD29fSUpAudu29Cv-DxxHvLvFZQVRbQs3qcB8Ghvq4X5OY3tLQ7hV43UdZ8AShrclfBjYbFDrkbP1pa_NZI7E2Mc-p_dMIwzSeiSlFK2Tf56zY9d6oAkM3rx4NEGZeUwnz3Rb7PTsbkUSbr5_PHVPRPy3fNpieMknv1a7O2x7StKBcjOGVbr4XAzBPdn4K2k__c6H0vdY79MmP1LkSzjRAKMDL5GV1XHCIJlB2GkIHgk.vsAlCTv_IVtgw-ukYIyL05ynb8XtxpTuhuJ488zYuE4&dib_tag=se&keywords=Nike%2BFrance%2BNational%2BTeam%2BDri-fit%2BStadium%2BHome%2BT-Shirt%2BHomme%2B%28Lot%2Bde%2B1%29&qid=1781080259&sr=8-1&linkCode=ll2&tag=monsitehub04-21&linkId=b7652bc8ba655764d0e0208433d341b9&ref_=as_li_ss_tl",
    badge: "Best-seller",
  },
  {
    id: "m2",
    name: "Nike France Stadium Away — Enfant",
    description: "Maillot extérieur enfant France 2026, vert menthe « Igloo/Monarch ». Détails cuivrés, Dri-FIT, coupe légère.",
    price: "79,95€ – 85,00€",
    image: enfant.url,
    link: "https://www.amazon.fr/Nike-France-Enfants-12-Ans/dp/B0FNRN42KF?linkCode=ll2&tag=monsitehub04-21&linkId=bfdec98c82ca4d778102ec238eb4d09a&ref_=as_li_ss_tl",
  },
  {
    id: "m3",
    name: "Nike France Stadium Home — Unisexe Enfant",
    description: "Version enfant du maillot domicile Bleu Royal. Design Statue de la Liberté, accents cuivre métallisé, technologie Dri-FIT.",
    price: "84,99€",
    image: unisex.url,
    link: "https://www.amazon.fr/Nike-France-Enfants-Ans-National/dp/B0FNRSLVRX?linkCode=ll2&tag=monsitehub04-21&linkId=1d91e86336c72fd0235be92c2d91571c&ref_=as_li_ss_tl",
  },
  {
    id: "m4",
    name: "PUMA FPF Away Replica — Homme",
    description: "Maillot extérieur Portugal FPF. Polyester 100% respirant, coupe moderne, col rond. Idéal entraînement & supporters.",
    price: "99,95€",
    image: puma.url,
    link: "https://www.amazon.fr/PUMA-R%C3%A9plique-Maillot-ext%C3%A9rieur-FPF/dp/B0FFNGDSRN?linkCode=ll2&tag=monsitehub04-21&linkId=928a2e3c843d4923f997aee7dc5b626a&ref_=as_li_ss_tl",
  },
  {
    id: "m5",
    name: "Nike FFF 2025 Stadium Domicile (Équipe Féminine)",
    description: "Réplique maillot Équipe de France Féminine. Imprimé tweed, col Claudine, Dri-FIT. Message « Nos différences nous unissent ».",
    price: "95,99€ – 100,21€",
    image: fff.url,
    link: "https://www.amazon.fr/Stadium-Dri-FIT-R%C3%A9plique-Maillot-Football/dp/B0F7PRW2VP?linkCode=ll2&tag=monsitehub04-21&linkId=6ee1a433f0ef176167af4872f92c1807&ref_=as_li_ss_tl",
    badge: "Édition Féminine",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-primary">
            <Trophy className="size-6" />
            <span className="font-display text-2xl tracking-wider">WORLD CUP STORE</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#products" className="hover:text-primary transition">Maillots</a>
            <a href="#about" className="hover:text-primary transition">À propos</a>
            <a href="#products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
              <ShoppingBag className="size-4" /> Acheter
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.82 0.16 85 / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.62 0.22 25 / 0.4) 0%, transparent 50%)",
        }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            <Star className="size-3 fill-primary" /> Coupe du Monde 2026
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-foreground leading-none">
            Portez les couleurs<br />
            <span style={{ background: "var(--gradient-gold)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              de la légende
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            La collection officielle des maillots de la Coupe du Monde 2026.
            Nike, Puma, FFF — livrés directement par Amazon.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a href="#products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition" style={{ boxShadow: "var(--shadow-glow)" }}>
              <ShoppingBag className="size-5" /> Découvrir la collection
            </a>
            <a href="#about" className="inline-flex items-center gap-2 border border-border px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition">
              En savoir plus
            </a>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-2">Notre sélection</p>
            <h2 className="font-display text-5xl md:text-6xl">Maillots officiels</h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            {products.length} pièces emblématiques. Chaque article est expédié et garanti par Amazon.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <article
              key={p.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all flex flex-col"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {p.badge && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl text-foreground leading-tight mb-3">{p.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-4 flex-1">{p.description}</p>
                <div className="mt-6 flex items-center justify-between gap-3">
                  <span className="text-primary font-bold text-lg">{p.price}</span>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition"
                  >
                    Acheter <ExternalLink className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <Trophy className="size-12 text-primary mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl mb-6">L'esprit de la Coupe du Monde</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            World Cup Store rassemble les maillots officiels les plus iconiques de la Coupe du Monde 2026.
            Nous sélectionnons pour vous des pièces authentiques signées Nike, Puma et les grandes fédérations.
            Chaque achat est traité, expédié et garanti par Amazon, en toute sécurité.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 text-primary">
            <Trophy className="size-5" />
            <span className="font-display text-lg tracking-wider">WORLD CUP STORE</span>
          </div>
          <p>© 2026 — Maillots officiels de la Coupe du Monde. En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.</p>
        </div>
      </footer>
    </div>
  );
}
