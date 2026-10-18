export type FlowNodeTone = "paper" | "accent" | "outline";

export interface IFlowNode {
  label: string;
  title: string;
  tone: FlowNodeTone;
}

export const FLOW_NODE_CLASSES: Record<FlowNodeTone, { box: string; label: string; title: string }> = {
  paper: { box: "bg-paper text-ink", label: "text-ink/50", title: "" },
  accent: { box: "bg-accent text-ink", label: "text-ink/60", title: "" },
  outline: { box: "border-2 border-dashed border-zinc-400", label: "text-muted", title: "text-zinc-50" },
};
