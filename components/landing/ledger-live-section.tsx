import Image from "next/image";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Buying, selling and swapping",
    description:
      "Buy crypto directly with a credit card, swap between currencies, or sell to your bank account in Ledger Live.",
    cta: "Find out about Ledger Live",
  },
  {
    title: "Staking crypto",
    description:
      "Grow your portfolio passively by staking ETH, SOL, ATOM, and more than other coins and earn rewards.",
    cta: "Learn more about staking",
  },
  {
    title: "Stay on top of your assets",
    description:
      "Keep a clear view of your entire portfolio: track balances, view detailed histories, and check prices.",
    cta: "Try it yourself",
  },
];

export function LedgerLiveSection() {
  return (
    <section className="bg-background px-6 py-16 ">
      <div className="mx-auto max-w-7xl">
        <span className="text-2xl lg:text-5xl font-bold text-foreground mb-2">
          <strong className="text-purple-400 font-medium">Ledger Live </strong>-
          The crypto companion app
          <br />
          for your Ledger crypto wallet
        </span>
        <p className="text-white text-xl mb-10 max-w-4xl mt-4">
          With Ledger Live, it&apos;s possible to manage and stake your digital
          assets, all from one place.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {[1, 2, 3].map((i) => (
            <div key={i} className=" rounded-2xl">
              <Image
                src="/imgs/swap1.png"
                alt={`Ledger Live app screenshot ${i}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 rounded-lg">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col  border border-gray-400 rounded-md px-6 py-4 h-54 bg-stone-900"
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <span className="text-base text-white leading-relaxed mb-4 flex-1">
                {feature.description}
                <button className="flex items-center gap-1 text-base font-semibold text-white hover:text-foreground transition-colors mt-4">
                  {feature.cta} <ArrowRight className="h-4 w-4" />
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
