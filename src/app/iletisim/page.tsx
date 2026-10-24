import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "İletişim | Liberty Bilişim",
  description: "Liberty Bilişim ile iletişime geçin. Projeleriniz için ücretsiz danışmanlık alın.",
};

export default function IletisimPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-950 to-blue-950 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold sm:text-5xl">İletişim</h1>
          <p className="mt-4 text-lg text-slate-300">
            Projeleriniz hakkında konuşmak için bize ulaşın.
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
}
