import { readdir } from "node:fs/promises";
import { join } from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

export interface ProjectMediaItem {
  src: string;
  isFull: boolean;
  isTitle: boolean;
}

function hasImageExtension(filename: string): boolean {
  const dot = filename.lastIndexOf(".");
  if (dot < 0) return false;
  return IMAGE_EXTENSIONS.has(filename.slice(dot).toLowerCase());
}

function toMediaItem(slug: string, filename: string): ProjectMediaItem {
  const lower = filename.toLowerCase();
  return {
    src: `/assets/${slug}/${filename}`,
    isFull: lower.includes("[full]"),
    isTitle: lower.includes("[title]"),
  };
}

export async function getProjectMedia(slug: string): Promise<ProjectMediaItem[]> {
  const directory = join(process.cwd(), "public", "assets", slug);
  try {
    const files = await readdir(directory, { withFileTypes: true });
    return files
      .filter((file) => file.isFile())
      .map((file) => file.name)
      .filter(hasImageExtension)
      .sort((a, b) => a.localeCompare(b))
      .map((filename) => toMediaItem(slug, filename));
  } catch {
    return [];
  }
}

export async function getProjectPreviewImage(
  slug: string,
  fallbackPreviewImage: string
): Promise<string> {
  const media = await getProjectMedia(slug);
  const taggedTitle = media.find((item) => item.isTitle);
  if (taggedTitle) return taggedTitle.src;

  const firstImage = media[0];
  if (firstImage) return firstImage.src;

  return fallbackPreviewImage;
}
