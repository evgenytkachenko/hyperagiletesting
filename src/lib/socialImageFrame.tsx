import fs from "node:fs";
import path from "node:path";
import { book } from "./config";

const COLORS = {
  charcoal: "#0e0f13",
  charcoalLine: "#2a2c37",
  gold: "#e0ac3f",
  goldLight: "#f6dda0",
  paper: "#faf9f6",
  mist: "#c7c9d6",
  violet: "#7f68d9",
  blue: "#4665d4",
  cyan: "#33b7cf",
};

let cachedCoverDataUri: string | null = null;

function getCoverDataUri(): string {
  if (cachedCoverDataUri) return cachedCoverDataUri;
  const filePath = path.join(process.cwd(), "public", "images", "book-cover.png");
  const buffer = fs.readFileSync(filePath);
  cachedCoverDataUri = `data:image/png;base64,${buffer.toString("base64")}`;
  return cachedCoverDataUri;
}

/** Decorative concentric rings echoing the book cover's vortex motif. Purely ornamental. */
function VortexRings() {
  const cx = 1120;
  const cy = 30;
  const rings = [
    { r: 260, color: COLORS.gold },
    { r: 190, color: COLORS.violet },
    { r: 130, color: COLORS.blue },
    { r: 80, color: COLORS.cyan },
  ];

  return (
    <svg
      width="1200"
      height="630"
      viewBox="0 0 1200 630"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      {rings.map((ring) => (
        <circle
          key={ring.r}
          cx={cx}
          cy={cy}
          r={ring.r}
          fill="none"
          stroke={ring.color}
          strokeWidth={2}
          opacity={0.4}
        />
      ))}
    </svg>
  );
}

export function SocialImageFrame({
  includeCover = false,
  headline = "Hyper-Agile Testing",
}: {
  includeCover?: boolean;
  headline?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: COLORS.charcoal,
        padding: "72px 80px",
      }}
    >
      <VortexRings />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: includeCover ? "68%" : "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: COLORS.goldLight,
          }}
        >
          Hyper-Agile Quality Engineering™
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 18,
            fontSize: 68,
            fontWeight: 700,
            fontFamily: "serif",
            color: COLORS.gold,
            lineHeight: 1.05,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 30,
            color: COLORS.paper,
            maxWidth: 640,
            lineHeight: 1.3,
          }}
        >
          Delivering Software in an AI-Accelerated World
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 36,
            fontSize: 24,
            color: COLORS.mist,
          }}
        >
          Evgeny Tkachenko
        </div>
      </div>

      {includeCover && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: "32%",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getCoverDataUri()}
            alt=""
            width={Math.round(486 * (book.coverWidth / book.coverHeight))}
            height={486}
            style={{
              borderRadius: 4,
              border: `1px solid ${COLORS.charcoalLine}`,
            }}
          />
        </div>
      )}
    </div>
  );
}
