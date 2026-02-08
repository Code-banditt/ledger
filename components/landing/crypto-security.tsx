import { ArrowRight } from "lucide-react";

export function CryptoSecurity() {
  return (
    <section className="bg-black px-6 py-16">
      <div className="mx-auto max-w-7xl border-2 px-8 py-12">
        <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
          Crypto security made easy
        </h2>
        <p className="text-white text-2xl max-w-xl mb-6 leading-7 font-semibold">
          Ledger is the easiest and safest way to secure crypto, digital assets,
          and your peace of mind.
        </p>
        <button className="flex items-center gap-2 rounded-full border border-[#ccc] px-5 py-5 text-base text-white hover:bg-[#e5e5e5] transition-colors">
          View Ledger wallets
        </button>
      </div>
    </section>
  );
}
