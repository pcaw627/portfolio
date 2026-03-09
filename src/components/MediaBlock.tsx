import Image from "next/image";
import { Media } from "@/data/types";

/** Renders either a responsive image or an embedded YouTube player. */
export default function MediaBlock({ media }: { media: Media }) {
  if (media.type === "image") {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
        <Image
          src={media.src}
          alt={media.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${media.videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
