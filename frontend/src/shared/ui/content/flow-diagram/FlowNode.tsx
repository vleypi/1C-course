import { joinClassNames } from "@/shared/lib";
import { FLOW_NODE_CLASSES, type IFlowNode } from "@/shared/ui/content/flow-diagram/flow-diagram.constant";

export const FlowNode = ({ label, title, tone }: IFlowNode) => {
  const classes = FLOW_NODE_CLASSES[tone];

  return (
    <div className={joinClassNames("flex-1 rounded-xl px-4 py-5", classes.box)}>
      <p className={joinClassNames("text-xs font-bold uppercase tracking-widest", classes.label)}>{label}</p>
      <p className={joinClassNames("mt-1 text-lg font-extrabold", classes.title)}>{title}</p>
    </div>
  );
};
