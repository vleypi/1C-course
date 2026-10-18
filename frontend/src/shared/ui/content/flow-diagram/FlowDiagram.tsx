import { Fragment } from "react";
import type { IFlowNode } from "@/shared/ui/content/flow-diagram/flow-diagram.constant";
import { FlowNode } from "@/shared/ui/content/flow-diagram/FlowNode";

interface IFlowDiagramProps {
  nodes: readonly IFlowNode[];
  caption: string;
}

export const FlowDiagram = ({ nodes, caption }: IFlowDiagramProps) => (
  <figure className="mt-10 rounded-2xl bg-card p-5 sm:p-8">
    <div className="flex flex-col items-stretch gap-3 text-center sm:flex-row sm:items-center">
      {nodes.map((node, index) => (
        <Fragment key={node.title}>
          {index > 0 && <span className="rotate-90 text-2xl text-muted sm:rotate-0" aria-hidden="true">→</span>}
          <FlowNode {...node} />
        </Fragment>
      ))}
    </div>
    <figcaption className="mt-5 text-center text-sm text-muted">{caption}</figcaption>
  </figure>
);
