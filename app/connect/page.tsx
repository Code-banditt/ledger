"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LedgerLogo } from "@/components/ledger-logo";

export default function ConnectPage() {
  const [wireless, setWireless] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#121212]">
      {/* Left panel - lavender */}
      <div className="hidden w-64 flex-col items-center justify-between bg-lavender p-8 lg:flex">
        <LedgerLogo className="[&_span]:text-[#111]" />
        <Image
          src="/imgs/connection.png"
          alt="Connection verification illustration"
          width={200}
          height={200}
          className="object-contain"
        />
        <div />
      </div>

      {/* Right panel - main content */}
      <div className="flex flex-1 flex-col bg-[#121212]">
        {/* Progress bar */}
        <div className="flex items-center justify-center px-8 pt-6">
          <div className="flex w-full max-w-2xl items-center gap-2">
            <div className="h-0.5 flex-1 bg-foreground" />
            <div className="flex items-center gap-2 rounded-sm border border-border px-3 py-1">
              <div className="flex h-4 w-4 items-center justify-center rounded-sm bg-accent text-xs font-bold text-accent-foreground">
                2
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground">
                Connect Ledger
              </span>
            </div>
            <div className="h-0.5 flex-1 bg-border" />
          </div>
        </div>

        {/* Content */}
        <main className="flex flex-1 flex-col px-8 py-12 lg:px-16">
          <h1 className="mb-4 font-mono text-2xl font-bold uppercase tracking-wider text-foreground">
            Connect Ledger
          </h1>
          <p className="mb-8 text-sm text-muted-foreground">
            Please confirm you want to connect your ledger wirelessly.
          </p>

          {/* Toggle */}
          <div className="mb-8 flex items-center gap-4 rounded-lg border border-border p-4">
            <button
              type="button"
              onClick={() => setWireless(!wireless)}
              className={`relative h-7 w-12 rounded-full transition-colors ${
                wireless ? "bg-accent" : "bg-card"
              }`}
              aria-label="Toggle wireless connection"
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-foreground transition-transform ${
                  wireless ? "left-5.5" : "left-0.5"
                }`}
              />
            </button>
            <span className="text-sm text-foreground">
              I want to run this check wirelessly.
            </span>
          </div>
        </main>

        {/* Bottom navigation */}
        <div className="flex items-center justify-between px-8 py-6 lg:px-16">
          <Link
            href="/select-device"
            className="flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground hover:bg-card transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <button className="flex items-center gap-2 rounded-full bg-card px-5 py-2 text-sm font-medium text-muted-foreground hover:bg-border transition-colors">
            Next Step <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
