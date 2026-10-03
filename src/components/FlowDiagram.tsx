import type { FlowKind, FlowNode } from "@/lib/inPractice";

const kindStyles: Record<FlowKind, { node: string; branch: string; swatch: string; legend: string }> = {
  io: {
    node: "border-paper-line bg-white text-ink-900",
    branch: "border-paper-line bg-white text-ink-700",
    swatch: "border-paper-line bg-white",
    legend: "Input / output",
  },
  orchestration: {
    node: "border-violet-500/50 bg-violet-500/10 text-ink-900",
    branch: "border-violet-500/40 bg-white text-ink-700",
    swatch: "border-violet-500/50 bg-violet-500/10",
    legend: "Orchestration",
  },
  ai: {
    node: "border-blue-500/50 bg-blue-500/10 text-ink-900",
    branch: "border-blue-500/40 bg-white text-ink-700",
    swatch: "border-blue-500/50 bg-blue-500/10",
    legend: "AI-assisted analysis",
  },
  context: {
    node: "border-cyan-500/60 bg-cyan-500/10 text-ink-900",
    branch: "border-cyan-500/40 bg-white text-ink-700",
    swatch: "border-cyan-500/60 bg-cyan-500/10",
    legend: "Repository context",
  },
  code: {
    node: "border-charcoal-700 bg-charcoal-900 text-paper",
    branch: "border-charcoal-700 bg-charcoal-800 text-paper",
    swatch: "border-charcoal-700 bg-charcoal-900",
    legend: "Deterministic code",
  },
  human: {
    node: "border-gold-600 bg-gold-500 text-charcoal-950",
    branch: "border-gold-600 bg-gold-300 text-charcoal-950",
    swatch: "border-gold-600 bg-gold-500",
    legend: "Human judgment",
  },
};

/** Note text tuned per fill so it stays readable on dark and gold nodes. */
const noteTone: Record<FlowKind, string> = {
  io: "text-ink-500",
  orchestration: "text-ink-500",
  ai: "text-ink-500",
  context: "text-ink-500",
  code: "text-mist-300",
  human: "text-charcoal-950/75",
};

const legendOrder: FlowKind[] = ["io", "orchestration", "ai", "context", "code", "human"];

function Arrow({ compact }: { compact: boolean }) {
  return (
    <div aria-hidden="true" className={`flex justify-center ${compact ? "py-0.5" : "py-1"}`}>
      <svg width="12" height={compact ? 12 : 18} viewBox="0 0 12 18" preserveAspectRatio="none" className="text-ink-500">
        <path d="M6 0v15M1.5 11 6 16l4.5-5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/**
 * Vertical architecture flow used on /in-practice. HTML rather than SVG so
 * labels reflow at phone width instead of scaling down. `compact` drops the
 * per-node notes and tightens spacing for the overview cards.
 */
export function FlowDiagram({
  nodes,
  label,
  compact = false,
}: {
  nodes: FlowNode[];
  label: string;
  compact?: boolean;
}) {
  const kinds = legendOrder.filter((kind) => nodes.some((node) => node.kind === kind));

  return (
    <figure className="mx-auto w-full max-w-sm">
      <ol aria-label={label}>
        {nodes.map((node, index) => {
          const style = kindStyles[node.kind];
          return (
            <li key={node.label}>
              {index > 0 && <Arrow compact={compact} />}
              <div
                className={`rounded-md border px-4 text-center ${compact ? "py-2" : "py-2.5"} ${style.node} ${
                  node.emphasis ? "outline-2 outline-offset-2 outline-dashed outline-gold-500" : ""
                }`}
              >
                <p className="text-sm font-semibold leading-snug">{node.label}</p>
                {node.note && !compact && (
                  <p className={`mt-0.5 text-xs leading-snug ${noteTone[node.kind]}`}>
                    {node.note}
                  </p>
                )}
              </div>
              {node.branches && (
                <>
                  <div aria-hidden="true" className={`mx-[16.5%] border-x border-t border-ink-500/50 ${compact ? "h-2" : "h-3"}`} />
                  <ul className="grid grid-cols-3 gap-2">
                    {node.branches.map((branch) => (
                      <li
                        key={branch}
                        className={`flex items-center justify-center rounded border px-1.5 py-1.5 text-center text-xs font-medium leading-tight ${style.branch}`}
                      >
                        {branch}
                      </li>
                    ))}
                  </ul>
                  <div aria-hidden="true" className={`mx-[16.5%] border-x border-b border-ink-500/50 ${compact ? "h-2" : "h-3"}`} />
                </>
              )}
            </li>
          );
        })}
      </ol>
      <figcaption className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-ink-500">
        {kinds.map((kind) => (
          <span key={kind} className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className={`h-3 w-3 rounded-sm border ${kindStyles[kind].swatch}`} />
            {kindStyles[kind].legend}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
