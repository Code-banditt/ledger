"use client";

import { ChevronRight } from "lucide-react";

const faqs = [
  "What is a crypto wallet?",
  "How do crypto wallets work?",
  "What are the different types of crypto wallets?",
  "Why do I need a hardware wallet?",
  "How to get a crypto wallet?",
];

export function FAQSection() {
  return (
    <section className="relative px-6 py-20 mx-auto max-w-7xl overflow-hidden">
      {/* THE PURPLE GLOW (Placed specifically behind the list) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[400px] bg-[#5c2d91]/20 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">FAQ</h2>
        <p className="text-xl text-white/80 mb-16">
          Find answers to some of the most common questions.
        </p>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: FAQ List with matching Backgrounds */}
          <div className="flex-1 w-full flex flex-col gap-3">
            {faqs.map((faq) => (
              <button
                key={faq}
                className="group flex items-center justify-between p-6 bg-white/5 border border-white/10 rounded-sm text-left transition-all hover:bg-white/10"
              >
                <span className="text-md lg:text-md h-2 text-white group-hover:text-accent transition-colors">
                  {faq}
                </span>
                <ChevronRight className="h-5 w-5 text-white/50 group-hover:text-white transition-all" />
              </button>
            ))}
          </div>

          {/* Right Side: Description text matching the screenshot layout */}
          <div className="flex-1 lg:pt-6">
            <div className="space-y-8">
              <p className="text-lg text-white font-medium">
                Thinking about buying crypto or NFTs? You'll need a{" "}
                <span className="underline decoration-white underline-offset-4">
                  crypto wallet
                </span>
                .
              </p>
              <p className="text-md text-white leading-relaxed">
                When you create a wallet, two keys are generated: a private one
                and a public one. The wallet stores your keys and enables you to
                sign transactions, generate new addresses, initiate transfers,
                track portfolio balances, manage your crypto, and interact with
                dApps.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Crypto wallets come in many forms, from hardware wallets, like
                Ledger's, to mobile apps that you can download on your phone or
                tablet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
