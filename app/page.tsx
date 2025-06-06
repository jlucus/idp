import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { AuditionsBanner } from "@/components/auditions-banner";

export default function Home() {
    return (
        <>
            {/* <AuditionsBanner /> */}
            <main className="relative flex min-h-screen flex-col items-center justify-center bg-black">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black z-0" />
            <div className="absolute top-1/4 left-0 md:-left-20 w-64 md:w-72 h-64 md:h-72 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-0 md:-right-20 w-64 md:w-72 h-64 md:h-72 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse delay-700" />

            <div className="z-10 w-full max-w-[90%] md:max-w-4xl lg:max-w-5xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                    Its Different Productions™
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-xl sm:max-w-2xl mx-auto">
                    Music • Merch • Digital Art • A.I. Innovation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Link href="/store" className="inline-block">
                        <Button size="lg" className="h-auto px-6 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-glow">
                            ENTER STORE
                        </Button>
                    </Link>
                    <Link href="/ai-auditions" className="inline-block">
                        <Button variant="outline" size="lg" className="h-auto px-6 py-4 text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 border-red-500/50 text-red-300 hover:bg-red-500/10">
                            🎤 A.I. AUDITIONS
                        </Button>
                    </Link>
                </div>
                <div className="text-sm text-gray-500 space-y-2">
                    <p>🚀 Revolutionary A.I. Voice Technology</p>
                    <p>💰 Monetization Opportunities Available</p>
                </div>
            </div>
            <div className="absolute bottom-4 w-full text-center text-gray-500 text-xs z-10">
                © {new Date().getFullYear()} Its Different Productions
            </div>
        </main>
        </>
    );
}
