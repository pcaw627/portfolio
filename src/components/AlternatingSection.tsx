import { Media } from "@/data/types";
import MediaBlock from "./MediaBlock";

interface Props {
  heading: string;
  body: string;
  media: Media;
  /** When true the media appears on the left and text on the right. */
  reversed?: boolean;
}

/**
 * A section with text on one side and media on the other.
 * Pass `reversed` to flip the layout — used for the alternating pattern.
 */
export default function AlternatingSection({
  heading,
  body,
  media,
  reversed = false,
}: Props) {
  return (
    <section
      className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl font-semibold text-white">{heading}</h3>
        <p className="leading-relaxed text-zinc-400">{body}</p>
      </div>

      {/* Media */}
      <div className="flex-1">
        <MediaBlock media={media} />
      </div>
    </section>
  );
}
