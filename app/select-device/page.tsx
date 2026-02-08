"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LedgerLogo } from "@/components/ledger-logo";

const devices = [
  { name: "Ledger Stax", image: "/imgs/l1.webp" },
  { name: "Ledger Flex", image: "/imgs/l2.webp" },
  { name: "Ledger Nano S", image: "/imgs/l3.webp" },
  { name: "Ledger Nano S &Plus", image: "/imgs/l4.webp" },
  { name: "Ledger Nano X", image: "/imgs/l5.webp" },
];

export default function SelectDevicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-6 lg:px-12">
        <Link
          href="/get-started"
          className="flex items-center gap-2 text-sm hover:text-foreground transition-colors text-white"
        >
          <ArrowLeft className="h-4 w-4 text-white" />
          Previous
        </Link>
        <LedgerLogo />
        <div className="w-20" />
      </header>

      {/* Content */}
      <main className="flex flex-1 flex-col items-center px-6 py-8">
        <h1 className="mb-16 text-center font-mono text-2xl font-bold uppercase tracking-wider text-foreground lg:text-3xl">
          Select your device
        </h1>

        <div className="grid w-full max-w-6xl grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {devices.map((device) => (
            <Link
              key={device.name}
              href="/connect"
              className="group flex flex-col items-center gap-4 h-full"
            >
              <div className="flex h-48 w-full items-center justify-center rounded-xl transition-colors group-hover:bg-card">
                <Image
                  src={device.image || "/placeholder.svg"}
                  alt={device.name}
                  width={160}
                  height={160}
                  className="h-40 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <p className="text-sm font-semibold text-foreground">
                {device.name}
              </p>
              <span> select</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
