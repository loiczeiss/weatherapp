import { Skeleton, Card } from '@heroui/react';

export default function WeatherLoading() {
  return (
    <div
      className="relative w-screen min-h-screen md:h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Blurred background placeholder */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-100/30 to-slate-100/40 blur-lg opacity-60" />

      {/* Main content window */}
      <div
        className="relative z-10 w-11/12 md:h-4/5 bg-white/40 backdrop-blur-md rounded-xl shadow-lg text-slate-700 flex md:flex-row outline outline-4 outline-white/60 flex-col my-4 md:my-0">
        {/* Display Section Skeleton */}
        <article className="flex flex-col md:w-8/12 lg:w-9/12 h-full p-4 justify-between md:order-first">
          {/* Date and time header skeleton */}
          <section className="flex justify-end w-full gap-4">
            <Skeleton className="h-4 w-32 rounded-lg bg-slate-200/40" />
            <Skeleton className="h-4 w-16 rounded-lg bg-slate-200/40" />
          </section>

          {/* Main weather display skeleton */}
          <section className="my-4 lg:my-0 space-y-6">
            {/* Weather title skeleton */}
            <div className="text-end">
              <Skeleton className="h-12 md:h-16 w-3/4 ml-auto rounded-lg bg-slate-200/40 mb-6" />
            </div>

            {/* Hourly forecast cards skeleton */}
            <div className="flex overflow-x-auto space-x-4 scrollbar-hidden">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-3 min-w-[80px] p-3 bg-white/30 rounded-lg backdrop-blur-sm border border-white/20"
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
          className="flex flex-col md:w-5/12 lg:w-3/12 items-center h-screen md:h-full bg-white/20 border-l border-white/30"
          isBlurred
        >
          {/* Search and current weather section skeleton */}
          <div className="flex flex-col w-full items-center my-4 lg:my-8 space-y-4">
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
          <div className="flex flex-col w-10/12 items-center my-4 md:my-0 lg:my-4 space-y-4">
            {/* Section title skeleton */}
            <Skeleton className="h-5 w-48 rounded bg-slate-200/40" />

            {/* Day selection buttons skeleton */}
            <div className="flex justify-between space-x-2">
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton key={index} className="h-8 w-16 rounded bg-slate-200/40" />
              ))}
            </div>

            {/* Daily forecast list skeleton */}
            <div className="w-full space-y-3 mt-4">
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
