import Image from "next/image";
import { ArrowRight, Lock, Accessibility, UserCheck } from "lucide-react"; // Swapped for Ease of Use icon
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-black px-6 py-12 lg:py-20 mt-12 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          <div className="flex-1">
            {/* TAG WITH CORNER ACCENTS */}
            <span className="relative inline-block text-white px-2 py-1 text-xs font-bold bg-accent/50 uppercase tracking-[0.1em] mb-5">
              <div className="absolute -top-1 -left-1 w-1 h-1 border-t-2 border-l-2 border-[#c4b5fd]" />
              <div className="absolute -top-1 -right-1 w-1 h-1 border-t-2 border-r-2 border-[#c4b5fd]" />
              <div className="absolute -bottom-1 -left-1 w-1 h-1 border-b-2 border-l-2 border-[#c4b5fd]" />
              <div className="absolute -bottom-1 -right-1 w-1 h-1 border-b-2 border-r-2 border-[#c4b5fd]" />
              Ledger Crypto Wallets
            </span>

            {/* HEADING: Fixed Font Size and Leading */}
            <h1 className="text-4xl lg:text-[48px] font-bold text-white leading-[1.1] mb-4 tracking-normal">
              Transaction Check
            </h1>

            {/* DESCRIPTION: Fixed Colors and Line Height */}
            <p className="text-white text-sm lg:text-lg max-w-xl mb-6 leading-6">
              Transaction Check adds an extra layer of protection by reviewing
              each transaction before approval, helping you clearly understand
              what you&apos;re confirming and reducing the risk of unauthorized
              or misleading actions.
            </p>

            <p className="text-gray-300 text-lg lg:text-md max-w-xl mb-6 leading-5">
              Enable Transaction Check to stay in control and sign with
              confidence.
            </p>

            {/* BUTTON: Exact Screenshot Orange-Red */}
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff4f00] text-white px-6 py-4 text-sm font-bold hover:brightness-110 transition-all mb-12"
            >
              Transaction Check
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>

            {/* FEATURES FOOTER: Fixed Icons and Spacing */}
            <div className="flex items-center gap-12 mt-4">
              <div className="flex items-center gap-4">
                <Lock className="h-6 w-6 text-white" />
                <div className="border-r border-gray-700 pr-8">
                  <p className="text-[12px] text-white font-medium">
                    Uncompromising
                  </p>
                  <p className="text-sm text-white font-bold">security</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <UserCheck className="h-6 w-6 text-white" />
                <div>
                  <p className="text-[12px] text-white font-medium">Ease</p>
                  <p className="text-sm text-white font-bold">of use</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE */}
          <div className="flex-1 relative w-full">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/imgs/leggerheader.png"
                alt="Ledger Transaction Check interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
