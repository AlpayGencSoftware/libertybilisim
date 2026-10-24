import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Stats } from "@/components/sections/stats";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Hakkımızda | Liberty Bilişim",
  description: "Liberty Bilişim hakkında - 2016'dan bu yana dijital dönüşümde güvenilir çözüm ortağınız.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 to-blue-950 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold sm:text-5xl">Hakkımızda</h1>
          <p className="mt-4 text-lg text-slate-300">
            Teknoloji tutkumuz ve deneyimimizle işletmenizi geleceğe taşıyoruz.
          </p>
        </div>
      </section>
      <About />
      <Stats />
      <CTA />
    </>
  );
}
