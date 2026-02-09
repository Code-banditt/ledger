"use client";

import {
  ChevronRight,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";

// --- CUSTOM SVG ICONS (Keep these as they are) ---
const DiscordIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8Z" />
    <circle cx="8" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <path d="M7 15s1 1 3 1 3-1 3-1" />
  </svg>
);

const RedditIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M17 12h-5m0 0H7m5 0V7m0 5v5" />
  </svg>
);

const TikTokIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const socials = [
  { icon: <RedditIcon />, name: "Reddit" },
  { icon: <Facebook size={18} />, name: "Facebook" },
  { icon: <Instagram size={18} />, name: "Instagram" },
  { icon: <Twitter size={18} />, name: "X" },
  { icon: <Youtube size={18} />, name: "YouTube" },
  { icon: <Linkedin size={18} />, name: "LinkedIn" },
  { icon: <TikTokIcon />, name: "TikTok" },
  { icon: <DiscordIcon />, name: "Discord" },
];

// UPDATED: Content exactly as seen in the screenshot image
const footerColumns = [
  {
    title: "Products",
    links: [
      "Hardware Wallet",
      "Ledger Stax",
      "Ledger Flex",
      "Ledger Nano X",
      "Ledger Nano S Plus",
      "Compare our devices",
      "Bundles",
      "Accessories",
      "All products",
      "Downloads",
    ],
  },
  {
    title: "Crypto Assets",
    links: [
      "Bitcoin wallet",
      "Ethereum wallet",
      "Solana wallet",
      "Cardano wallet",
      "XRP wallet",
      "Monero wallet",
      "USDT wallet",
    ],
  },
  {
    title: "For Business",
    links: ["Ledger Enterprise Solutions"],
  },
  {
    title: "For Startups",
    links: ["Funding from Ledger Cathay Capital"],
  },
  {
    title: "For Developers",
    links: ["The Developer Portal"],
  },
  {
    title: "Get started",
    links: [
      "Start using your Ledger device",
      "Compatible wallets and services",
      "How to buy Bitcoin",
      "Guide before buying bitcoin",
      "Bitcoin Hardware Wallet",
    ],
  },
  {
    title: "See also",
    links: ["Support", "Bounty program"],
  },
  {
    title: "Careers",
    links: ["Join us", "All jobs"],
  },
  {
    title: "About",
    links: [
      "Our vision",
      "Ledger Academy",
      "The company",
      "The people",
      "Diversity",
      "Blog",
    ],
  },
  {
    title: "Legal",
    links: [
      "Legal Center",
      "Sales Terms and Conditions",
      "Privacy Policy",
      "Cookie Policy",
      "Disclaimers",
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-6 py-20 bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 pb-20 border-b border-white/10 pt-8">
          {/* Left Column: Stay in touch with Glowing White Light */}
          <div className="flex flex-col relative group">
            {/* GLOWING WHITE LIGHT - Circular radial glow in the middle of this div */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
              <div className="h-40 w-40 bg-white/10 blur-[80px] rounded-full opacity-60"></div>
              <div className="h-20 w-20 bg-white/20 blur-[40px] rounded-full opacity-40 -mt-20"></div>
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-4 tracking-tight relative z-10">
              Stay in touch
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed relative z-10">
              Announcements can be found in our blog. Press contact:
              <br />
              <a
                href="mailto:media@ledger.com"
                className="text-white underline underline-offset-4 hover:text-gray-300"
              >
                media@ledger.com
              </a>
            </p>

            <div className="flex flex-wrap items-center gap-3 relative z-10">
              {socials.map((s) => (
                <div
                  key={s.name}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#252525] hover:text-[#fb5e03] cursor-pointer transition-all border border-white/5"
                  title={s.name}
                >
                  {s.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Subscribe */}
          <div className="flex flex-col">
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-4 tracking-tight">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              New coins supported, blog updates and exclusive offers directly in
              your inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white/20 rounded-full px-6 py-3 text-white focus:outline-none focus:border-white/40 transition-all placeholder:text-gray-600"
              />
              <button className="w-full sm:w-auto bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 sm:whitespace-nowrap">
                Register to newsletter <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: NAV LINKS GRID (Restructured to match image) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-12 mb-20">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-5">
              <h4 className="text-[13px] font-bold text-white uppercase tracking-wider">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[13px] text-gray-500 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
          <div className="flex flex-col items-center sm:items-start gap-4">
            {/* Replace with your LedgerLogo component */}
            <div className="text-white font-bold tracking-[0.2em] text-xl">
              [ LEDGER ]
            </div>
            <div className="text-[11px] text-gray-600 max-w-md text-center sm:text-left leading-relaxed">
              Copyright © Ledger SAS. All rights reserved. Ledger, Ledger Stax,
              Ledger Nano S, Ledger Vault, Bolos are trademarks owned by Ledger
              SAS.
              <br />
              <br />
              106 rue du Temple, 75003 Paris, France
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-6">
            <button className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-2 text-xs font-bold text-white hover:bg-white/5 transition-all uppercase tracking-widest">
              English <ChevronRight size={14} className="rotate-90" />
            </button>

            {/* Payment Methods */}
            <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest mr-2">
                Payment methods
              </span>
              <div className="flex gap-3">
                {/* These would be small icons in a real app */}
                <div className="w-8 h-5 bg-white/10 rounded-sm" />
                <div className="w-8 h-5 bg-white/10 rounded-sm" />
                <div className="w-8 h-5 bg-white/10 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
