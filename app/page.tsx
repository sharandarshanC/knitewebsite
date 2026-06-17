import { HomeHero } from "@/components/home/home-hero"
import { StatsBand } from "@/components/home/stats-band"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ProductCategories } from "@/components/home/product-categories"
import { LocationAdvantage } from "@/components/home/location-advantage"
import { QuoteCta } from "@/components/quote-cta"

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBand />
      <WhyChooseUs />
      <ProductCategories />
      <LocationAdvantage />
      <QuoteCta />
    </>
  )
}
