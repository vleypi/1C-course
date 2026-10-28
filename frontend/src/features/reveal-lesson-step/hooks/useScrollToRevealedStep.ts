"use client";

import { useEffect, useRef } from "react";
import { animateScrollTo } from "@/shared/lib";
import { REDUCED_MOTION_QUERY, STEP_SCROLL } from "@/features/reveal-lesson-step/constants/reveal-step.constant";

const scrollToStep = (element: HTMLElement) => {
  const targetY = element.getBoundingClientRect().top + window.scrollY - STEP_SCROLL.offsetPx;
  if (window.matchMedia(REDUCED_MOTION_QUERY).matches) window.scrollTo(0, targetY);
  else animateScrollTo(targetY, STEP_SCROLL.durationMs);
};

export const useScrollToRevealedStep = (visibleCount: number) => {
  const stepElements = useRef<(HTMLElement | null)[]>([]);
  const awaitedStepIndex = useRef<number | null>(null);

  useEffect(() => {
    const stepIndex = awaitedStepIndex.current;
    const element = stepIndex === null ? null : stepElements.current[stepIndex];
    if (stepIndex === null || stepIndex >= visibleCount || !element) return;

    awaitedStepIndex.current = null;
    scrollToStep(element);
  }, [visibleCount]);

  const awaitStep = (stepIndex: number) => {
    awaitedStepIndex.current = stepIndex;
  };

  const registerStep = (stepIndex: number) => (element: HTMLElement | null) => {
    stepElements.current[stepIndex] = element;
  };

  return { awaitStep, registerStep };
};
