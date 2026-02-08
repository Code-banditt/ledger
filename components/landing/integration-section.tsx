export function IntegrationSection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-16 border-t border-border">
      {/* ===== LEDGER ATMOSPHERIC PURPLE LIGHTING ===== */}

      {/* Base Massive Atmosphere (Ultra Soft) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 w-[180%] h-[120%] -translate-x-1/2 -translate-y-1/2 bg-[#5c2d91]/10 blur-[220px] rounded-full" />
      </div>

      {/* Center Energy Band */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[160%] h-[55%] bg-[#5c2d91]/25 blur-[160px] rounded-full" />
      </div>

      {/* Top Dark Compression */}
      <div className="absolute top-0 left-0 right-0 h-[45%] bg-gradient-to-b from-background via-background/90 to-transparent pointer-events-none" />

      {/* Bottom Dark Compression */}
      <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none" />

      {/* ===== CONTENT (UNCHANGED) ===== */}
      <div className="mx-auto max-w-7xl text-center relative z-10">
        <h2 className="text-2xl lg:text-5xl font-bold text-foreground mb-10">
          Integrate your Ledger device with numerous wallets
        </h2>

        <p className="text-white text-base mb-48">
          Ledger hardware wallet secures more than 50 software wallets
        </p>
      </div>
    </section>
  );
}
