import Skeleton from "@/components/share/Skeleton";

/**
 * Route-level loading UI.
 *
 * Shown while a route segment streams in: a brand progress bar over a short
 * stack of neutral placeholders. Static by design — no hooks, no client
 * directive — so it renders instantly and announces itself to assistive tech.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-busy="true"
      className="flex min-h-screen items-center justify-center bg-white px-6 py-20"
    >
      <span className="sr-only">Loading…</span>

      <div aria-hidden="true" className="w-full max-w-md">
        <div className="h-1 w-full overflow-hidden rounded-full bg-brand-100">
          <div className="h-full w-2/5 rounded-full bg-brand-600" />
        </div>

        <div className="mt-8 space-y-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
          <Skeleton className="h-20" />
        </div>
      </div>
    </div>
  );
}
