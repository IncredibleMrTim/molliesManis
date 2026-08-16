import Image from "next/image"
import {
  oceanSpellPosterImage,
  oceanSpellVideoSrc,
  oneOfAKindItems,
} from "@/data/content"
import DiamondDecor from "@/components/decor/DiamondDecor"

export default function Bespoke() {
  return (
    <section id="bespoke" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="mb-4 flex gap-2">
            <DiamondDecor size={18} color="#ce93d8" />
            <DiamondDecor size={22} color="#e91e8c" />
            <DiamondDecor size={18} color="#ce93d8" />
          </div>
          <h2 className="mb-5 font-display text-4xl text-primary-dark md:text-5xl">
            One-of-a-Kind Nails
          </h2>
          <p className="mb-6 text-base leading-relaxed font-semibold text-body">
            These are the singles — individual statement nails, accent pieces,
            and sample designs showing the full range of what I can do. Snoopy,
            stars, florals, characters — each one a miniature painting on a
            nail.
          </p>
          <p className="mb-8 rounded-2xl border-l-[3px] border-primary bg-background px-4 py-3 text-sm font-bold text-primary-dark">
            All sets are hand-painted to order. Lead time is typically 1–2 weeks
            depending on design complexity.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-gradient-to-br from-primary to-accent px-8 py-3.5 text-base font-bold text-primary-foreground transition-all hover:scale-105 hover:brightness-110"
          >
            Start Your Custom Order ✨
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {oneOfAKindItems.map((item) => (
            <div
              key={item.label}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                placeholder="blur"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-3">
                <span className="text-sm font-bold text-white">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
          <div className="group relative col-span-2 h-[200px] overflow-hidden rounded-2xl shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
            <video
              src={oceanSpellVideoSrc}
              poster={oceanSpellPosterImage.src}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
