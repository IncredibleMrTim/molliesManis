import { collections } from "@/data/content";
import CollectionCard from "@/components/CollectionCard";
import StarDecor from "@/components/decor/StarDecor";

export default function Collections() {
  return (
    <section id="collections" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 text-center">
        <div className="mb-3 flex justify-center gap-2">
          <StarDecor size={20} color="#e91e8c" />
          <StarDecor size={24} color="#ce93d8" />
          <StarDecor size={20} color="#e91e8c" />
        </div>
        <h2 className="mb-4 font-display text-4xl text-primary-dark md:text-5xl">
          The Collection
        </h2>
        <p className="mx-auto max-w-lg text-base font-semibold text-body">
          Every set is painted by hand using real brushwork and crafted with care. Browse
          Mollie&apos;s current designs or commission something completely your own.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </section>
  );
}
