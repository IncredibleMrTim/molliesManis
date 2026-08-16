import Image from "next/image";
import { galleryStripImages } from "@/data/content";

export default function GalleryStrip() {
  return (
    <div className="overflow-hidden bg-secondary py-2">
      <div className="flex gap-3">
        {galleryStripImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Nail art"
            width={120}
            height={120}
            placeholder="blur"
            className="h-[120px] w-[120px] flex-shrink-0 rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}
