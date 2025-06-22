import { Skeleton, Card } from '@heroui/react';

export default function WeatherLoading() {
  return (
    <div className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 md:h-screen">
      {/* Blurred background placeholder */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/30 to-slate-100/40 opacity-60 blur-lg" />

      {/* Main content window */}
      <div className="relative z-10 my-4 flex w-11/12 flex-col rounded-xl bg-white/40 text-slate-700 shadow-lg outline outline-4 outline-white/60 backdrop-blur-md md:my-0 md:h-4/5 md:flex-row">
        {/* Display Section Skeleton */}
        <article className="flex h-full flex-col justify-between p-4 md:order-first md:w-8/12 lg:w-9/12">
          {/* Date and time header skeleton */}
          <section className="flex w-full justify-end gap-4">
            <Skeleton className="h-4 w-32 rounded-lg bg-slate-200/40" />
            <Skeleton className="h-4 w-16 rounded-lg bg-slate-200/40" />
          </section>

          {/* Main weather display skeleton */}
          <section className="my-4 space-y-6 lg:my-0">
            {/* Weather title skeleton */}
            <div className="text-end">
              <Skeleton className="mb-6 ml-auto h-12 w-3/4 rounded-lg bg-slate-200/40 md:h-16" />
            </div>

            {/* Hourly forecast cards skeleton */}
            <div className="scrollbar-hidden flex space-x-4 overflow-x-auto">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex min-w-[80px] flex-col items-center space-y-3 rounded-lg border border-white/20 bg-white/30 p-3 backdrop-blur-sm"
                >
                  <Skeleton className="h-3 w-12 rounded bg-slate-200/50" />
                  <Skeleton className="h-8 w-8 rounded bg-slate-200/50" />
                  <Skeleton className="h-4 w-10 rounded bg-slate-200/50" />
                </div>
              ))}
            </div>
          </section>
        </article>

        {/* Side Panel Skeleton */}
        <Card
          className="flex h-screen flex-col items-center border-l border-white/30 bg-white/20 md:h-full md:w-5/12 lg:w-3/12"
          isBlurred
        >
          {/* Search and current weather section skeleton */}
          <div className="my-4 flex w-full flex-col items-center space-y-4 lg:my-8">
            {/* Search bar skeleton */}
            <div className="w-10/12">
              <Skeleton className="h-10 w-full rounded-lg bg-slate-200/40" />
            </div>

            {/* Current temperature skeleton */}
            <Skeleton className="h-16 w-24 rounded-lg bg-slate-200/40" />

            {/* Wind info skeleton */}
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4 rounded bg-slate-200/40" />
              <Skeleton className="h-3 w-16 rounded bg-slate-200/40" />
              <Skeleton className="h-3 w-12 rounded bg-slate-200/40" />
            </div>
          </div>

          {/* Forecast section skeleton */}
          <div className="my-4 flex w-10/12 flex-col items-center space-y-4 md:my-0 lg:my-4">
            {/* Section title skeleton */}
            <Skeleton className="h-5 w-48 rounded bg-slate-200/40" />

            {/* Day selection buttons skeleton */}
            <div className="flex justify-between space-x-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-8 w-16 rounded bg-slate-200/40"
                />
              ))}
            </div>

            {/* Daily forecast list skeleton */}
            <div className="mt-4 w-full space-y-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-3 py-2">
                  {/* Weather icon skeleton */}
                  <Skeleton className="h-10 w-10 rounded-lg bg-slate-200/40" />

                  {/* Weather description and date skeleton */}
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-3 w-24 rounded bg-slate-200/40" />
                    <Skeleton className="h-3 w-16 rounded bg-slate-200/40" />
                  </div>

                  {/* Temperature skeleton */}
                  <div className="space-y-1">
                    <Skeleton className="h-3 w-8 rounded bg-slate-200/40" />
                    <Skeleton className="h-3 w-8 rounded bg-slate-200/40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
