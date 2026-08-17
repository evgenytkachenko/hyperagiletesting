import Image from "next/image";
import { author } from "@/lib/config";
import { HeadshotPlaceholder } from "./HeadshotPlaceholder";

export function Headshot({ className = "" }: { className?: string }) {
  if (!author.headshot) {
    return <HeadshotPlaceholder className={className} />;
  }

  return (
    <div
      className={`relative aspect-square w-full max-w-[220px] overflow-hidden rounded-full border border-paper-line ${className}`}
    >
      <Image
        src={author.headshot}
        alt={author.name}
        fill
        sizes="220px"
        className="object-cover"
      />
    </div>
  );
}
