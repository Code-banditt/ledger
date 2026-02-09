"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const coins = [
  { name: "Bitcoin", symbol: "btc", color: "#F7931A" },
  { name: "Ethereum", symbol: "eth", color: "#627EEA" },
  { name: "Tether", symbol: "usdt", color: "#26A17B" },
  { name: "USD Coin", symbol: "usdc", color: "#2775CA" },
  { name: "Solana", symbol: "sol", color: "#000000" },
  { name: "XRP", symbol: "xrp", color: "#23292F" },
  { name: "Cardano", symbol: "ada", color: "#0033AD" },
  { name: "BNB", symbol: "bnb", color: "#F3BA2F" },
  { name: "Polygon", symbol: "matic", color: "#8247E5" },
  { name: "Dogecoin", symbol: "doge", color: "#C2A633" },
  { name: "Arbitrum", symbol: "arb", color: "#2D374B" },
  { name: "Tron", symbol: "trx", color: "#FF060A" },
];

export function CoinsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Triple the coins for seamless infinite loop
  const doubledCoins = [...coins, ...coins, ...coins];

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Thousands of supported coins and tokens
            </h2>
            <p className="text-gray-400 text-lg mt-4">
              Bitcoin, Ethereum, USDT, Solana and more...
            </p>
          </div>

          <button className="flex items-center w-fit gap-2 border border-white/20 hover:border-white/60 px-6 py-3 rounded-full text-sm font-medium transition-all">
            See all supported cryptos
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative mt-10">
          {/* FIX: Increased width and added 'via-black/80' for a smoother fade into deep black */}
          <div className="absolute -left-36 top-0 bottom-0 w-2/4 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute -right-36 top-0 bottom-0 w-2/4 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-10 items-center"
            animate={{
              x: [0, -1400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {doubledCoins.map((coin, index) => (
              <div
                key={`${coin.symbol}-${index}`}
                className="flex-shrink-0 group relative"
              >
                <div
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#111] border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-white/30 overflow-hidden"
                  style={{ boxShadow: `0 0 20px ${coin.color}20` }}
                >
                  <img
                    src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${coin.symbol}.png`}
                    alt={coin.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        `https://ui-avatars.com/api/?name=${coin.symbol}&background=333&color=fff`;
                    }}
                  />
                </div>

                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {coin.symbol}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
