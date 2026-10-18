"use client";

import type { ReactNode } from "react";
import { useVisibleStepCount } from "@/entities/progress/client";
import { DEFAULT_ASK } from "@/features/reveal-lesson-step/constants/reveal-step.constant";
import { useRevealNextStep } from "@/features/reveal-lesson-step/hooks/useRevealNextStep";
import { AskButton } from "@/features/reveal-lesson-step/components/AskButton";

interface ILessonStepsProps {
  lessonId: string;
  steps: readonly ReactNode[];
  asks: readonly (string | null)[];
  footer: ReactNode;
}

export const LessonSteps = ({ lessonId, steps, asks, footer }: ILessonStepsProps) => {
  const visibleCount = useVisibleStepCount(lessonId, steps.length);
  const revealNextStep = useRevealNextStep(lessonId, visibleCount);
  const hasHiddenSteps = visibleCount < steps.length;

  return (
    <>
      {steps.slice(0, visibleCount).map((step, index) => (
        <section key={index} className="animate-fade-in">
          {step}
        </section>
      ))}
      {hasHiddenSteps ? (
        <AskButton question={asks[visibleCount] ?? DEFAULT_ASK} onAsk={revealNextStep} />
      ) : (
        footer
      )}
    </>
  );
};
