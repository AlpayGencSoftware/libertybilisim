import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <About />
      <CTA />
    </>
  );
}
