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
    <section className="relative bg-black px-6 py-24 overflow-hidden">
      {/* THE CENTRAL PURPLE GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-purple-900/20 blur-[140px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">FAQ</h2>
        <p className="text-lg text-white/90 mb-16 font-light">
          Find answers to some of the most common questions.
        </p>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: FAQ List */}
          <div className="flex-1 w-full max-w-xl flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <button
                key={faq}
                className={`group flex items-center justify-between p-4 border-b border-white/10 text-left transition-all duration-300
                  ${
                    index === 0
                      ? "bg-gradient-to-r from-white/10 to-transparent border-l-2 border-l-white"
                      : "bg-white/5 hover:bg-white/10 border-l-2 border-l-transparent"
                  }`}
              >
                <span className="text-sm font-medium text-white group-hover:pl-1 transition-all duration-300">
                  {faq}
                </span>
                <ChevronRight
                  className={`h-4 w-4 transition-all ${
                    index === 0
                      ? "text-white"
                      : "text-white/30 group-hover:text-white"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Side: Description text */}
          <div className="flex-1 lg:pt-0">
            <div className="space-y-6 max-w-xl">
              <p className="text-lg text-white font-medium leading-relaxed">
                Thinking about buying crypto or NFTs? You&apos;ll need a{" "}
                <span className="underline decoration-white/40 underline-offset-8 cursor-pointer hover:decoration-white transition-all">
                  crypto wallet
                </span>
                .
              </p>

              <div className="space-y-4">
                <p className="text-base text-white leading-relaxed">
                  When you create a wallet, two keys are generated: a private
                  one and a public one. The wallet stores your keys and enables
                  you to sign transactions, generate new addresses, initiate
                  transfers, track portfolio balances, manage your crypto, and
                  interact with dApps.
                </p>
                <p className="text-base text-white leading-relaxed">
                  Crypto wallets come in many forms, from hardware wallets, like
                  Ledger&apos;s, to mobile apps that you can download on your
                  phone or tablet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <p className="mt-24 text-center text-[12px] font-normal text-white">
          *Crypto transaction services are provided by third-party providers.
          Ledger provides no advice or recommendations on use of these
          third-party services.
        </p>
      </div>
    </section>
  );
}
