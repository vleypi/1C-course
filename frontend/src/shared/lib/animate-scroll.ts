const USER_SCROLL_EVENTS = ["wheel", "touchstart", "keydown"] as const;

const easeInOutCubic = (progress: number): number =>
  progress < 0.5 ? 4 * progress ** 3 : 1 - (-2 * progress + 2) ** 3 / 2;

export const animateScrollTo = (targetY: number, durationMs: number): void => {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();
  let frameId = 0;

  const stop = () => {
    cancelAnimationFrame(frameId);
    USER_SCROLL_EVENTS.forEach((eventName) => window.removeEventListener(eventName, stop));
  };

  const step = (now: number) => {
    const progress = Math.min(1, (now - startTime) / durationMs);
    window.scrollTo(0, startY + distance * easeInOutCubic(progress));
    if (progress < 1) frameId = requestAnimationFrame(step);
    else stop();
  };

  USER_SCROLL_EVENTS.forEach((eventName) => window.addEventListener(eventName, stop, { passive: true }));
  frameId = requestAnimationFrame(step);
};
