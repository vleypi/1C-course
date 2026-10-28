"use client";

import type { ReactNode } from "react";
import { useVisibleStepCount } from "@/entities/progress/client";
import { DEFAULT_ASK } from "@/features/reveal-lesson-step/constants/reveal-step.constant";
import { useRevealNextStep } from "@/features/reveal-lesson-step/hooks/useRevealNextStep";
import { useScrollToRevealedStep } from "@/features/reveal-lesson-step/hooks/useScrollToRevealedStep";
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
  const { awaitStep, registerStep } = useScrollToRevealedStep(visibleCount);
  const hasHiddenSteps = visibleCount < steps.length;

  const askNextStep = () => {
    awaitStep(visibleCount);
    revealNextStep();
  };

  return (
    <>
      {steps.slice(0, visibleCount).map((step, index) => (
        <section key={index} ref={registerStep(index)} data-lesson-step className="animate-fade-in">
          {step}
        </section>
      ))}
      {hasHiddenSteps ? (
        <AskButton question={asks[visibleCount] ?? DEFAULT_ASK} onAsk={askNextStep} />
      ) : (
        footer
      )}
    </>
  );
};
