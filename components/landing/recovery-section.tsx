import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function RecoverySection() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-7xl border-2 border-white/5 px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left side: Image (Made larger with scale-110) */}
          <div className="flex-1 w-full transform lg:scale-110">
            <div className="rounded-2xl">
              <Image
                src="/imgs/Ledgerrecover.png"
                alt="Ledger Recovery"
                width={800} // Increased base width
                height={800}
                className="object-contain mx-auto w-full max-w-[650px]"
                priority
              />
            </div>
          </div>

          {/* Right side: Content */}
          <div className="flex-1">
            {/* TARGET LOCKIN TAG */}
            <span className="relative inline-block text-[#c4b5fd] px-3 py-1.5 text-xs font-bold bg-[#2e1065]/30 uppercase tracking-widest mb-8">
              <div className="absolute -top-1 -left-1 w-1 h-1 border-t-2 border-l-2 border-[#c4b5fd]" />
              <div className="absolute -top-1 -right-1 w-1 h-1 border-t-2 border-r-2 border-[#c4b5fd]" />
              <div className="absolute -bottom-1 -left-1 w-1 h-1 border-b-2 border-l-2 border-[#c4b5fd]" />
              <div className="absolute -bottom-1 -right-1 w-1 h-1 border-b-2 border-r-2 border-[#c4b5fd]" />
              Ledger Recover
            </span>

            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.1]">
              Never lose access to
              <br />
              your wallet
            </h2>

            <p className="text-gray-300 text-lg lg:text-xl max-w-md mb-8 leading-relaxed">
              Secure peace of mind with Ledger Recover. Restore access to your
              crypto wallet in case of a lost, damaged, or out of reach recovery
              phrase.
            </p>

            <div className="space-y-2">
              <button className="flex text-white items-center gap-2 text-base font-semibold hover:opacity-80 transition-opacity">
                Learn more about Ledger Recover{" "}
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* SERVICE PROVIDED BY COINCOVER */}
              <p className="text-xs text-muted-foreground font-medium tracking-wide">
                Service provided by Coincover.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
