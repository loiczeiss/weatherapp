import {Card} from "@nextui-org/react";
import {Skeleton} from "@nextui-org/skeleton";

export default function loadWeatherPage() {


    return<><div className="relative w-screen md:h-screen flex justify-center items-center overflow-hidden">
        {/* Blurred skeleton background */}
        <div className="absolute -inset-4 bg-gray-300 animate-pulse blur-lg"></div>

        {/* Clear div (skeleton window) */}
        <div className="relative z-10 w-11/12 md:h-4/5 bg-gray-400 bg-opacity-30 rounded-xl shadow-lg text-white flex md:flex-row outline outline-8 outline-white/25 flex-col my-4 md:my-0 animate-pulse">

            {/* Skeleton for Display */}
            <div className="flex-1 p-6 space-y-4">
                <div className="h-8 bg-gray-300 rounded w-2/3"></div>
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                <div className="h-40 bg-gray-300 rounded w-full"></div>
            </div>

            {/* Skeleton for SidePanel */}
            <Card className="flex flex-col md:w-5/12 lg:w-3/12 items-center h-screen md:h-full" isBlurred>
                {/* Top Section */}
                <div className="flex flex-col w-full items-center my-4 lg:my-8 z-50">
                    {/* Input Bar */}
                    <Skeleton className="w-10/12 h-10 rounded-lg bg-white/10" />

                    {/* Temperature */}
                    <Skeleton className="my-4 lg:my-8 h-12 w-24 rounded-lg bg-white/10" />

                    {/* Wind Info */}
                    <div className="flex justify-center space-x-2">
                        <Skeleton className="h-4 w-12 rounded bg-white/10" />
                        <Skeleton className="h-4 w-10 rounded bg-white/10" />
                    </div>
                </div>

                {/* Forecast Section */}
                <div className="flex flex-col w-10/12 items-center my-4 md:my-0 lg:my-4">
                    <Skeleton className="h-6 w-1/2 rounded-lg mb-4 bg-white/10" />

                    {/* Forecast Buttons */}
                    <div className="flex lg:flex-row justify-between w-full mb-4 space-x-2">
                        <Skeleton className="h-10 w-full rounded-lg bg-white/10" />
                        <Skeleton className="h-10 w-full rounded-lg bg-white/10" />
                        <Skeleton className="h-10 w-full rounded-lg bg-white/10" />
                    </div>

                    {/* Forecast Items */}
                    <div className="h-48 pb-8 overflow-y-auto overscroll-y-auto scrollbar-hidden space-y-4">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <div key={index} className="flex flex-row items-center space-x-4">
                                <Skeleton className="w-10 h-10 rounded-lg bg-white/10" />
                                <Skeleton className="w-28 h-8 rounded-lg bg-white/10" />
                                <Skeleton className="w-16 h-8 rounded-lg bg-white/10" />
                            </div>
                        ))}
                    </div>
                </div>
            </Card>
        </div>
    </div>
    </>
}