"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { ProjectMediaItem } from "@/lib/projectMedia";

interface MediaGalleryProps {
  title: string;
  mediaItems: ProjectMediaItem[];
}

export default function MediaGallery({ title, mediaItems }: MediaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ProjectMediaItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const openImage = (item: ProjectMediaItem) => {
    setSelectedImage(item);
    // Trigger CSS transitions after mount.
    requestAnimationFrame(() => setIsVisible(true));
  };

  const closeImage = () => {
    setIsVisible(false);
    window.setTimeout(() => setSelectedImage(null), 220);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeImage();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {mediaItems.map((item) => (
          <button
            key={item.src}
            type="button"
            onClick={() => openImage(item)}
            className={`group relative aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 ${
              item.isFull
                ? "w-full max-w-5xl"
                : "w-full max-w-xl sm:w-[calc(50%-0.5rem)]"
            }`}
            aria-label={`Open image from ${title}`}
          >
            <Image
              src={item.src}
              alt={`${title} media`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <button
          type="button"
          data-media-lightbox="open"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-colors duration-300 ease-out ${
            isVisible ? "bg-black/85" : "bg-black/0"
          }`}
          onClick={closeImage}
          aria-label="Close enlarged image"
        >
          <div
            className={`relative h-[85vh] w-full max-w-6xl transition-all duration-300 ease-out ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={`${title} enlarged media`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </button>
      )}
    </>
  );
}
