import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Ledger Flex",
    tagline: "SECURE TOUCHSCREEN",
    description:
      "Designed with an accessible safety for all your crypto needs, the Ledger Flex is the easy way to protect and manage crypto and NFTs.",
    image: "/imgs/flex3.png",
    cta: "Discover now",
  },
  {
    name: "Ledger Stax",
    tagline: "PREMIUM TOUCHSCREEN",
    description:
      "Our most advanced and beautifully designed hardware wallet for protect and manage crypto and NFTs.",
    image: "/imgs/stax3.png",
    cta: "Discover now",
  },
  {
    name: "Ledger Nano Range",
    tagline: "",
    description:
      "Our classic, battle tested hardware wallets built to secure and manage crypto and NFTs.",
    image: "/imgs/ledgernanos.png",
    cta: "Discover now",
  },
];

export function ProductsSection() {
  return (
    <section className="relative overflow-hidden bg-[#060606] px-6 py-16 mt-8">
      {/* ===== LEDGER ATMOSPHERIC LIGHTING ===== */}

      {/* Base Massive Atmosphere (Very Soft) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[180%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-[#5c2d91]/10 blur-[220px] rounded-full" />
      </div>

      {/* Center Energy Band (Stronger, Horizontal Feel) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[160%] h-[55%] bg-[#5c2d91]/25 blur-[160px] rounded-full" />
      </div>

      {/* Top Compression Darkness */}
      <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-[#060606] via-[#060606]/90 to-transparent pointer-events-none" />

      {/* Bottom Compression Darkness */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-[#060606] via-[#060606]/90 to-transparent pointer-events-none" />

      {/* ===== CONTENT ===== */}
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl lg:text-5xl font-bold text-white">
            Find the right Ledger hardware wallet for you
          </h2>

          <button className="hidden md:flex items-center gap-2 rounded-full border border-[#ccc] px-5 py-2 text-sm text-[#111] bg-white hover:bg-[#e5e5e5] transition-colors">
            Compare our wallets
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="relative bg-transparent p-8 flex flex-col border border-white/50 overflow-hidden group"
            >
              {/* CARD PURPLE GLOW (UNCHANGED) */}
              <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[60%] bg-[#5c2d91]/20 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative h-64 flex items-center justify-center mb-10 z-10">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={240}
                  height={240}
                  className="object-contain h-full w-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {product.name}
                </h3>

                {product.tagline && (
                  <div className="relative inline-block mb-4">
                    <span className="relative z-10 text-[10px] bg-white/5 text-white px-3 py-1 uppercase tracking-[0.2em] font-bold">
                      <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-accent" />
                      <div className="absolute -top-1 -right-1 w-1.5 h-1.5 border-t border-r border-accent" />
                      <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 border-b border-l border-accent" />
                      <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-accent" />
                      {product.tagline}
                    </span>
                  </div>
                )}

                <p className="text-base text-white leading-relaxed mb-8 h-20">
                  {product.description}
                </p>

                <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-orange-500 transition-colors uppercase tracking-widest">
                  {product.cta} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
