"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
const testimonials = [
  {
    text: "Ledger = peace of mind. I'm sure some of us know that unsettling feeling when you know you need a Ledger but haven't quite organized yourself to get it sorted.",
    author: "Janet Onagah",
    handle: "@Janet_Oganah",
    image: "/imgs/janet.png", // Path to your extracted image
  },
  {
    text: "I got hacked in January and lost 1000s worth of NFTs. I felt disgusted, lost, and willing to quit. Until my friend told me he's ordering a Ledger.",
    author: "PrimeNic.eth",
    handle: "@primenic_eth",
    image: "/imgs/primenic.png",
  },
  {
    text: "I use multiple Ledgers. Different colours = different uses. Public Wallet. Never touch long term storage. Day to day fund holdings. A back up just in case.",
    author: "winny.eth",
    handle: "@winnyeth",
    image: "/imgs/winny.png",
  },
];
export function TestimonialsSection() {
  return (
    <section className="px-6 py-20 bg-black">
      <div className="mx-auto max-w-7xl">
        {/* Header with Nav Buttons */}
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

        {/* Carousel */}
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="snap-start min-w-[85vw] md:min-w-[400px] bg-transparent p-8 flex flex-col border border-white/10 h-[380px]"
            >
              <p className="text-lg lg:text-xl text-white leading-relaxed mb-8 flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                {/* PROFILE PICTURE START */}
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/20 bg-neutral-800">
                  <Image
                    src={t.image}
                    alt={t.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                {/* PROFILE PICTURE END */}

                <div>
                  <p className="text-sm font-bold text-white">{t.author}</p>
                  <p className="text-xs text-gray-500 font-mono">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
