import { cn } from "../utils";
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div aria-live="polite" aria-busy="true" className={className}>
      <span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none"></span>
      <br />
    </div>
  );
}

function SVGSkeleton({ className }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <svg className={cn(className, " animate-pulse rounded bg-gray-300")} />
  );
}

export { Skeleton, SVGSkeleton };
