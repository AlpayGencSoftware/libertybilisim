import { CheckCircle2 } from "lucide-react";

const highlights = [
  "8+ yıllık sektör deneyimi",
  "150+ başarıyla tamamlanan proje",
  "Uzman mühendis kadrosu",
  "7/24 teknik destek hizmeti",
  "Agile proje yönetimi",
  "Uçtan uca çözüm ortaklığı",
];

export function About() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50" id="hakkimizda">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Hakkımızda
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Güvenilir Teknoloji Ortağınız
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Liberty Bilişim olarak 2016 yılından bu yana işletmelerin dijital
              dönüşüm süreçlerinde yanlarında yer alıyoruz. Deneyimli ekibimiz
              ile en güncel teknolojileri kullanarak, müşterilerimize özel
              çözümler üretiyoruz.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Müşteri memnuniyetini ön planda tutarak, her projede kaliteli ve
              sürdürülebilir sonuçlar elde etmeyi hedefliyoruz.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 p-1">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-xl bg-slate-950 text-white">
                <span className="text-7xl font-bold">8+</span>
                <span className="mt-2 text-lg text-slate-300">Yıllık Deneyim</span>
                <div className="mt-8 grid grid-cols-2 gap-8 text-center">
                  <div>
                    <span className="text-3xl font-bold text-blue-400">150+</span>
                    <span className="block text-sm text-slate-400">Proje</span>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-blue-400">50+</span>
                    <span className="block text-sm text-slate-400">Mutlu Müşteri</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
