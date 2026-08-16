"use client";

import { useState } from "react";
import Image from "next/image";
import type { ICollection } from "@/types/interfaces";

interface CollectionCardProps {
  collection: ICollection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImage = collection.images[activeImageIndex];

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative aspect-3/4 overflow-hidden">
        <Image
          src={activeImage}
          alt={collection.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <span
          className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold text-white ${collection.tagColorClass}`}
        >
          {collection.tag}
        </span>

        {collection.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {collection.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                aria-label={`Show image ${index + 1} of ${collection.name}`}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeImageIndex ? "scale-125 bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="mb-1 font-display text-xl text-primary-dark">{collection.name}</h3>
        <p className="text-sm leading-relaxed text-body">{collection.description}</p>
        <button className="mt-4 w-full rounded-full bg-gradient-to-br from-primary to-accent py-2.5 text-sm font-bold text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-95">
          Enquire About This Set ✨
        </button>
      </div>
    </div>
  );
}
