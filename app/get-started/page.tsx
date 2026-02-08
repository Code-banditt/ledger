import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LedgerLogo } from "@/components/ledger-logo";

export default function GetStartedPage() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-black">
      {/* Left panel: Fixed Sidebar */}
      <div className="flex h-full w-full max-w-sm flex-col justify-between bg-black-[#111] p-8 lg:p-12 z-10 border-r border-white/5">
        <div>
          <LedgerLogo className="mb-8 lg:mb-12" />
          <h1 className="font-mono text-2xl font-bold uppercase leading-tight tracking-wider text-white lg:text-3xl">
            The most secure cryptocurrency &amp; NFT wallet
          </h1>
        </div>

        <div className="pb-4">
          <Link
            href="/select-device"
            className="mb-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-center text-[11px] text-gray-500 leading-relaxed px-2">
            By tapping &quot;Get started&quot; you consent and agree to our{" "}
            <a
              href="#"
              className="font-medium text-white underline underline-offset-2"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="font-medium text-white underline underline-offset-2"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>

      {/* Right panel: Video Background */}
      <div className="hidden h-full flex-1 relative lg:flex overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          {/* Ensure your file is in the /public/videos/ folder */}
          <source src="/videos/uQovUOQx.mov" type="video/quicktime" />
          <source src="/videos/uQovUOQx.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional: Subtle dark overlay to match the left panel's mood */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </div>
    </div>
  );
}
