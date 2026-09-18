import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import TrustDanone from "@/components/sections/TrustDanone";
import Problem from "@/components/sections/Problem";
import OldWay from "@/components/sections/OldWay";
import Solutions from "@/components/sections/Solutions";
import Capabilities from "@/components/sections/Capabilities";
import MobileTeaser from "@/components/sections/MobileTeaser";
import MobileApp from "@/components/sections/MobileApp";
import Analytics from "@/components/sections/Analytics";
import TrustGrid from "@/components/sections/TrustGrid";
import Security from "@/components/sections/Security";
import Pricing from "@/components/sections/Pricing";
import FinalCta from "@/components/sections/FinalCta";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

/** Section order mirrors the Figma frame "Landing page v3 — Desktop (EN)" (11686:1781), top to bottom. */
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustDanone />
        <Problem />
        <OldWay />
        <Solutions />
        <Capabilities />
        <MobileTeaser />
        <MobileApp />
        <Analytics />
        <TrustGrid />
        <Security />
        <Pricing />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
