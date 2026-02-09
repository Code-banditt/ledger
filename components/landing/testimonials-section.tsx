"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "Ledger = peace of mind. I'm sure some of us know that unsettling feeling when you know you need a Ledger but haven't quite organized yourself to get it sorted.",
    author: "Janet Onagah",
    handle: "@Janet_Oganah",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    text: "I got hacked in January and lost 1000s worth of NFTs. I felt disgusted, lost, and willing to quit. Until my friend told me he's ordering a Ledger.",
    author: "PrimeNic.eth",
    handle: "@primenic_eth",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    text: "I use multiple Ledgers. Different colours = different uses. Public Wallet. Never touch long term storage. Day to day fund holdings. A back up just in case.",
    author: "winny.eth",
    handle: "@winnyeth",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "The security provided by the Stax is unmatched. Being able to see my NFTs directly on the device gives me total confidence.",
    author: "CryptoGhost",
    handle: "@ghost_nft",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24 bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
            Testimonials
          </h2>
          <div className="flex gap-3">
            <button className="flex items-center justify-center h-12 w-12 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              <ChevronLeft className="text-white h-6 w-6" />
            </button>
            <button className="flex items-center justify-center h-12 w-12 rounded-full border border-white/20 hover:bg-white/10 transition-all">
              <ChevronRight className="text-white h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Subtle Fade on the right to blend the peek-a-boo card */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* The Scroll Container */}
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="snap-start min-w-[60%] md:min-w-[28.5%] bg-transparent p-10 flex flex-col border border-white/40 h-[300px] transition-all group"
              >
                <p className="text-lg lg:text-base text-white leading-8 flex-1">
                  “{t.text}”
                </p>

                <div className="flex items-center gap-4 mt-6">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/20">
                    <img
                      src={t.image}
                      alt={t.author}
                      className="object-cover h-full w-full"
                    />
                  </div>

                  <div>
                    <p className="text-base font-bold text-white">{t.author}</p>
                    <p className="text-xs text-gray-500 font-mono">
                      {t.handle}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Spacer so the last card doesn't stretch */}
            <div className="min-w-[10%] shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
