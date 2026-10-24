import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Projenizi Hayata Geçirmeye
              <span className="block text-blue-400">Hazır mısınız?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
              İhtiyaçlarınızı dinliyor, en uygun teknolojiyi belirliyor ve
              projenizi zamanında teslim ediyoruz. Hemen bizimle iletişime geçin.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/iletisim"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-8 text-base font-medium text-white transition-colors hover:bg-blue-700"
              >
                Ücretsiz Teklif Alın
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="tel:+905392164273"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-600 px-8 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800"
              >
                Bizi Arayın
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
