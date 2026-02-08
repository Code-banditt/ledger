import { Lock } from "lucide-react";

export function SecuritySection() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 w-full">
            {/* VIDEO REPLACING IMAGE */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[500px] h-auto mx-auto rounded-xl object-contain"
            >
              {/* Ensure your video is in public/videos/second.webm */}
              <source src="/videos/ledgerwallet.webm" type="video/webm" />
              {/* Fallback for older browsers */}
              <source src="/videos/ledgerwallet.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Physically secure
              <br />
              your transactions with
              <br />
              <span className="text-accent">Ledger crypto wallets</span>{" "}
              <Lock className="inline h-8 w-8 text-accent mb-2" />
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
