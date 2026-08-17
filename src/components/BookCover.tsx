import Image from "next/image";
import { book } from "@/lib/config";

export function BookCover({
  priority = false,
  sizes = "(min-width: 1024px) 320px, (min-width: 640px) 280px, 55vw",
  className = "",
}: {
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[320px] overflow-hidden rounded-sm shadow-[0_25px_60px_-15px_rgba(14,15,19,0.55)] ${className}`}
      style={{ aspectRatio: `${book.coverWidth} / ${book.coverHeight}` }}
    >
      <Image
        src={book.coverImage}
        alt={book.coverAlt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
