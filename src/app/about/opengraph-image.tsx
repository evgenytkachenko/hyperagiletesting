import { ImageResponse } from "next/og";
import { SocialImageFrame } from "@/lib/socialImageFrame";

export const dynamic = "force-static";
export const alt = "Evgeny Tkachenko — Quality Engineering Leader, Author, and Industry Speaker | Hyper-Agile Testing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SocialImageFrame headline="About Evgeny Tkachenko" />, size);
}
