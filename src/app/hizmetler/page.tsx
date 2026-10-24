import type { Metadata } from "next";
import { Services } from "@/components/sections/services";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Hizmetler | Liberty Bilişim",
  description: "Web geliştirme, mobil uygulama, bulut çözümleri, siber güvenlik ve dijital danışmanlık hizmetlerimiz.",
};

export default function HizmetlerPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 to-blue-950 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold sm:text-5xl">Hizmetlerimiz</h1>
          <p className="mt-4 text-lg text-slate-300">
            İşletmenizin ihtiyaçlarına özel, uçtan uca dijital çözümler sunuyoruz.
          </p>
        </div>
      </section>
      <Services />
      <CTA />
    </>
  );
}
