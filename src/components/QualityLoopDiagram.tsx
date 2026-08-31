import { loopActivities } from "@/lib/content";

/**
 * Circular Hyper-Agile Quality Loop diagram for the homepage. The order-10
 * arrow at the end of the loop below deliberately points from the last node
 * back to the first (index 0), closing the cycle.
 */

const SIZE = 840;
const CENTER = SIZE / 2;
const NODE_ORBIT = 240;
const NODE_RADIUS = 38;
const LABEL_GAP = NODE_RADIUS + 14;
const ARROW_TRIM_DEG = 9;
const LINE_HEIGHT = 16;

function toRadians(deg: number) {
  return (deg * Math.PI) / 180;
}

function pointOnOrbit(angleDeg: number) {
  const angle = toRadians(angleDeg);
  return {
    x: CENTER + NODE_ORBIT * Math.cos(angle),
    y: CENTER + NODE_ORBIT * Math.sin(angle),
  };
}

function angleForIndex(index: number, total: number) {
  return -90 + (index * 360) / total;
}

function wrapLabel(name: string, maxChars = 16): string[] {
  const words = name.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export function QualityLoopDiagram() {
  const total = loopActivities.length;

  return (
    <div>
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="mx-auto hidden w-full max-w-2xl md:block"
        role="group"
        aria-label="Hyper-Agile Quality Loop: ten connected activities forming a continuous cycle"
      >
        <defs>
          <marker
            id="loop-arrowhead"
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 Z" className="fill-ink-500" />
          </marker>
        </defs>

        {loopActivities.map((activity, index) => {
          const nextIndex = (index + 1) % total;
          const startAngle = angleForIndex(index, total) + ARROW_TRIM_DEG;
          const endAngle = angleForIndex(nextIndex, total) - ARROW_TRIM_DEG;
          const start = pointOnOrbit(startAngle);
          const end = pointOnOrbit(endAngle);
          return (
            <path
              key={`arrow-${activity.order}`}
              d={`M ${start.x} ${start.y} A ${NODE_ORBIT} ${NODE_ORBIT} 0 0 1 ${end.x} ${end.y}`}
              className="fill-none stroke-ink-500"
              strokeWidth={2}
              markerEnd="url(#loop-arrowhead)"
            />
          );
        })}

        {loopActivities.map((activity, index) => {
          const angle = angleForIndex(index, total);
          const { x, y } = pointOnOrbit(angle);
          const cosA = Math.cos(toRadians(angle));
          const sinA = Math.sin(toRadians(angle));
          const isRight = cosA > 0.2;
          const isLeft = cosA < -0.2;
          const textAnchor = isRight ? "start" : isLeft ? "end" : "middle";
          const labelX = x + (isRight ? LABEL_GAP : isLeft ? -LABEL_GAP : 0);
          const lines = wrapLabel(activity.name);
          const labelY =
            textAnchor === "middle"
              ? sinA < 0
                ? y - LABEL_GAP - (lines.length - 1) * LINE_HEIGHT
                : y + LABEL_GAP
              : y - ((lines.length - 1) * LINE_HEIGHT) / 2 + 5;

          return (
            <g
              key={activity.order}
              tabIndex={0}
              role="img"
              aria-label={`Step ${activity.order} of ${total}: ${activity.name}`}
              className="focus:outline-none"
            >
              <circle
                cx={x}
                cy={y}
                r={NODE_RADIUS}
                className="fill-charcoal-900 stroke-paper-line"
                strokeWidth={1}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-gold-400 text-sm font-semibold"
              >
                {String(activity.order).padStart(2, "0")}
              </text>
              <text x={labelX} y={labelY} textAnchor={textAnchor} className="fill-ink-900 text-sm font-medium">
                {lines.map((line, lineIndex) => (
                  <tspan key={line} x={labelX} dy={lineIndex === 0 ? 0 : LINE_HEIGHT}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
      </svg>

      <ol className="flex flex-col divide-y divide-paper-line rounded-lg border border-paper-line bg-white md:sr-only">
        {loopActivities.map((activity, index) => (
          <li key={activity.order} className="flex items-center gap-3 px-4 py-3">
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-charcoal-900 text-sm font-semibold text-gold-400"
              aria-hidden="true"
            >
              {activity.order}
            </span>
            <span className="text-sm font-medium text-ink-900">{activity.name}</span>
            <span className="sr-only">
              {index < total - 1 ? ", then" : ", loops back to Clarify intent"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
