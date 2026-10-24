import Link from "next/link";
import { ArrowRight, Code2, Shield, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDI5M2EiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHY0aC0ydjJoNHYyaDJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <Zap className="h-4 w-4" />
            Dijital Dönüşümde Lider
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Teknoloji ile
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Geleceği İnşa Ediyoruz
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            Modern web teknolojileri, bulut çözümleri ve güvenlik hizmetleriyle
            işletmenizi dijital dünyada bir adım öne taşıyoruz.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/iletisim"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-blue-600 px-8 text-base font-medium text-white transition-colors hover:bg-blue-700"
            >
              Ücretsiz Danışmanlık
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-600 px-8 text-base font-medium text-slate-200 transition-colors hover:bg-slate-800"
            >
              Hizmetlerimiz
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Modern Teknoloji",
              desc: "React, Next.js, Node.js ile ölçeklenebilir çözümler",
            },
            {
              icon: Shield,
              title: "Güvenli Altyapı",
              desc: "Uçtan uca şifreleme ve siber güvenlik koruması",
            },
            {
              icon: Zap,
              title: "Hızlı Teslimat",
              desc: "Agile metodoloji ile zamanında proje teslimi",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-700/50 bg-slate-800/50 p-6 backdrop-blur-sm"
            >
              <item.icon className="h-8 w-8 text-blue-400" />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
