"use client";

import { LedgerLogo } from "@/components/ledger-logo";
import { Twitter, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

// --- CUSTOM SVG ICONS ---
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

const footerColumns = [
  {
    title: "Products",
    links: [
      "Ledger Stax",
      "Ledger Flex",
      "Ledger Nano X",
      "Ledger Nano S Plus",
      "Compare our devices",
      "Bundles",
    ],
  },
  { title: "For Business", links: ["Ledger Enterprise", "Partners"] },
  {
    title: "Get Started",
    links: [
      "Get started",
      "Supported crypto",
      "Ledger Live",
      "Supported wallets",
    ],
  },
  { title: "For Startups", links: ["Grants", "Partnerships"] },
  {
    title: "Crypto Assets",
    links: ["Bitcoin", "Ethereum", "Cardano", "XRP", "Solana"],
  },
  {
    title: "See also",
    links: ["Affiliate Program", "Status", "Tax Reporting"],
  },
  {
    title: "Crypto Education",
    links: [
      "What is Bitcoin?",
      "What is Ethereum?",
      "What are NFTs?",
      "What is DeFi?",
    ],
  },
];

export function Footer() {
  return (
    <footer className="px-6 py-16 bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        {/* TOP SECTION: RESPONSIVE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 pb-16 border-b border-white/10 pt-8">
          {/* Left Column: Stay in touch */}
          <div className="flex flex-col">
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-4 tracking-tight">
              Stay in touch
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Announcements can be found in our blog. Press contact:
              <br />
              <a
                href="mailto:media@ledger.com"
                className="text-white underline underline-offset-4 hover:text-gray-300"
              >
                media@ledger.com
              </a>
            </p>

            {/* Social Icons - Added flex-wrap for small screens */}
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((s) => (
                <div
                  key={s.name}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#252525] hover:text-orange-500 cursor-pointer transition-all border border-white/5"
                  title={s.name}
                >
                  {s.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Subscribe to newsletter */}
          <div className="flex flex-col">
            <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-4 tracking-tight">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              New coins supported, blog updates and exclusive offers directly in
              your inbox
            </p>

            {/* Input & Button Group - Fixed Overflow */}
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

            <p className="text-[11px] text-gray-500 leading-relaxed max-w-xl">
              Your email address will only be used to send you our newsletter,
              as well as updates and offers. You can unsubscribe at any time.
              <br />
              <a
                href="#"
                className="underline hover:text-gray-400 mt-1 inline-block"
              >
                Learn more about your data rights.
              </a>
            </p>
          </div>
        </div>

        {/* MIDDLE SECTION: NAV LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-10 mb-20">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">
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
          <div className="flex flex-col items-center sm:items-start gap-2">
            <LedgerLogo />
            <p className="text-[10px] text-gray-600 font-mono text-center sm:text-left">
              © LEDGER SAS. ALL RIGHTS RESERVED.
            </p>
          </div>
          <button className="rounded-full border border-white/10 px-5 py-2 text-xs font-medium text-gray-400 hover:text-white transition-all">
            English
          </button>
        </div>
      </div>
    </footer>
  );
}
