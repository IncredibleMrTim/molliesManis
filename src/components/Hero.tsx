import Image from "next/image";
import { heroBanner, heroLogo, heroStats } from "@/data/content";
import DiamondDecor from "@/components/decor/DiamondDecor";
import HeartDecor from "@/components/decor/HeartDecor";
import StarDecor from "@/components/decor/StarDecor";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 translate-x-[30%] -translate-y-[30%] rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent)] opacity-30" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 -translate-x-[30%] translate-y-[30%] rounded-full bg-[radial-gradient(circle,var(--color-border),transparent)] opacity-20" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:grid-cols-2">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <HeartDecor size={18} color="#e91e8c" />
            <span className="text-sm font-bold tracking-wider text-primary-dark uppercase">
              Personalised Hand-Painted Nail Art
            </span>
            <HeartDecor size={18} color="#e91e8c" />
          </div>

          <h1 className="mb-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-primary-dark">
            Painted by hand, <span className="shimmer-text">worn with love</span>
          </h1>

          <p className="mb-8 text-lg leading-relaxed font-semibold text-body">
            Every set is hand-painted and crafted by me — tiny brushstrokes, real artistry, zero
            shortcuts. From galaxy glam to mermaid dreams, bold 3D sculpture to sweet character
            nails. ✨
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#collections"
              className="rounded-full bg-gradient-to-br from-primary to-accent px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg transition-all hover:scale-105 hover:brightness-110 active:scale-95"
            >
              Shop Collections
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-primary bg-card px-8 py-3.5 text-base font-bold text-primary transition-all hover:scale-105 active:scale-95"
            >
              Custom Order
            </a>
          </div>

          <div className="mt-10 flex gap-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl text-primary">{stat.value}</div>
                <div className="text-xs font-bold text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="float relative">
            <div className="doily-border relative h-[300px] w-[300px] overflow-hidden rounded-full">
              <Image
                src={heroLogo}
                alt="Mollies Manis logo"
                fill
                sizes="300px"
                placeholder="blur"
                className="object-cover"
                priority
              />
            </div>
            <StarDecor
              size={28}
              color="#e91e8c"
              className="absolute -top-2.5 -right-2.5 animate-[sparkle_2s_ease-in-out_infinite]"
            />
            <HeartDecor
              size={22}
              color="#ce93d8"
              className="absolute bottom-2.5 -left-5 animate-[sparkle_2.5s_ease-in-out_0.5s_infinite]"
            />
            <DiamondDecor
              size={20}
              color="#f48fb1"
              className="absolute top-5 -left-[25px] animate-[sparkle_3s_ease-in-out_1s_infinite]"
            />
            <StarDecor
              size={16}
              color="#ce93d8"
              className="absolute -bottom-2 right-5 animate-[sparkle_2s_ease-in-out_1.5s_infinite]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-8 gap-y-1 bg-primary py-3">
        {heroBanner.map((tag) => (
          <span key={tag} className="text-sm font-bold text-primary-foreground">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
