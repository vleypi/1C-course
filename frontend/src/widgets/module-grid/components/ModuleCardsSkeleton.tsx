interface IModuleCardsSkeletonProps {
  count: number;
}

export const ModuleCardsSkeleton = ({ count }: IModuleCardsSkeletonProps) =>
  Array.from({ length: count }, (_, index) => (
    <div key={index} className="h-64 animate-pulse rounded-2xl bg-card" aria-hidden="true" />
  ));
