import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { ColorCollection } from "@/components/landing/color-collection"
import { ProductsSection } from "@/components/landing/products-section"
import { SecuritySection } from "@/components/landing/security-section"
import { CoinsSection } from "@/components/landing/coins-section"
import { LedgerLiveSection } from "@/components/landing/ledger-live-section"
import { CryptoSecurity } from "@/components/landing/crypto-security"
import { RecoverySection } from "@/components/landing/recovery-section"
import { IntegrationSection } from "@/components/landing/integration-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ColorCollection />
      <ProductsSection />
      <SecuritySection />
      <CoinsSection />
      <LedgerLiveSection />
      <CryptoSecurity />
      <RecoverySection />
      <IntegrationSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
