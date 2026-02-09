"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LedgerLogo } from "@/components/ledger-logo";

const devices = [
  { name: "Ledger Stax", image: "/imgs/l1.webp" },
  { name: "Ledger Flex", image: "/imgs/l2.webp" },
  { name: "Ledger Nano S", image: "/imgs/l3.webp" },
  { name: "Ledger Nano S & Plus", image: "/imgs/l4.webp" },
  { name: "Ledger Nano X", image: "/imgs/l5.webp" },
];

export default function SelectDevicePage() {
  return (
    <div className="flex h-screen w-full flex-col bg-[#121212] text-white overflow-hidden">
      {/* Header - Stays on top */}
      <header className="relative z-30 flex items-center justify-between px-6 py-8 lg:px-12 shrink-0">
        <Link
          href="/get-started"
          className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Link>
        <LedgerLogo />
        <div className="w-20" />
      </header>

      {/* Main Content Area */}
      <main className="relative flex-1">
        {/* Fixed Title - Positioned absolutely so it doesn't push the grid down */}
        <div className="absolute top-4 left-0 w-full z-20 pointer-events-none text-center">
          <h1 className="font-mono text-xl font-bold uppercase tracking-[0.2em] lg:text-1xl">
            Select your device
          </h1>
        </div>

        {/* The Grid - Now starts exactly where the header ends */}
        <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-full">
          {devices.map((device) => (
            <Link
              key={device.name}
              href="/connect"
              className="group relative flex flex-col items-center justify-center  transition-all duration-500 hover:bg-[#1a1a1a]"
            >
              {/* Top-to-bottom highlight overlay - Spans 100% of the main height */}
              <div className="absolute inset-0 z-0 bg-neutral-800/30 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

              <div className="relative z-10 flex flex-col items-center px-4 text-center mt-12">
                {/* Image Container */}
                <div className="mb-8 flex h-48 lg:h-64 w-full items-center justify-center">
                  <Image
                    src={device.image || "/placeholder.svg"}
                    alt={device.name}
                    width={220}
                    height={220}
                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2"
                  />
                </div>

                {/* Name */}
                <h2 className="mb-6 text-lg lg:text-xl font-bold tracking-tight">
                  {device.name}
                </h2>

                {/* Select Button */}
                <div className="h-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="rounded-full bg-white px-6 py-2 text-xs font-bold uppercase tracking-wider text-black">
                    Select
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
