"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
  ShoppingCart, // Added for the cart
} from "lucide-react";
import { LedgerLogo } from "@/components/ledger-logo";

// Navigation Component
const navItems = [
  { label: "Products", hasDropdown: true },
  { label: "App and services", hasDropdown: true },
  { label: "Learn", hasDropdown: true },
  { label: "For Business", hasDropdown: true },
  { label: "For Developers", hasDropdown: true },
  { label: "Support", hasDropdown: true },
  { label: "English", hasDropdown: true }, // Icon removed here
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-6 bg-background">
        {/* Left side: Logo */}
        <Link href="/" className="flex items-center">
          <LedgerLogo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center text-white font-medium gap-1 text-sm hover:text-amber-500 transition-colors px-2 py-1"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown className="h-3 w-3 ml-1" />}
            </button>
          ))}

          {/* Cart Icon at the end */}
          <button className="text-white hover:text-amber-500 transition-colors ml-2">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          <button className="text-white">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border px-6 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="flex items-center justify-between text-white font-medium py-2 text-sm hover:text-amber-500 transition-colors"
              >
                <div className="flex items-center gap-2">{item.label}</div>
                {item.hasDropdown && <ChevronDown className="h-3 w-3" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
