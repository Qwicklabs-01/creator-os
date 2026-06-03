import { Navbar } from "./components/landing/navbar";
import { Hero } from "./components/landing/hero";
import { Features } from "./components/landing/features";
import { Stats } from "./components/landing/stats";
import { Pricing } from "./components/landing/pricing";
import { CTA } from "./components/landing/cta";
import { Footer } from "./components/landing/footer";
import { Reviews } from "./components/landing/reviews";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Reviews />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
