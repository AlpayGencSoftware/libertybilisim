import {
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  Database,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Geliştirme",
    desc: "React, Next.js ve modern framework'ler ile performanslı, SEO uyumlu kurumsal web siteleri ve web uygulamaları geliştiriyoruz.",
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    desc: "iOS ve Android platformları için React Native ile kullanıcı dostu, yüksek performanslı mobil uygulamalar oluşturuyoruz.",
  },
  {
    icon: Cloud,
    title: "Bulut Çözümleri",
    desc: "AWS, Azure ve Google Cloud altyapılarıyla ölçeklenebilir, güvenli ve maliyet etkin bulut mimarileri kuruyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "Siber Güvenlik",
    desc: "Penetrasyon testleri, güvenlik denetimleri ve 7/24 izleme hizmetleriyle dijital varlıklarınızı koruyoruz.",
  },
  {
    icon: Database,
    title: "Veritabanı Yönetimi",
    desc: "Yüksek erişilebilirlik ve performans için veritabanı tasarımı, optimizasyon ve yedekleme çözümleri sunuyoruz.",
  },
  {
    icon: BarChart3,
    title: "Dijital Danışmanlık",
    desc: "İş süreçlerinizi analiz ederek dijital dönüşüm stratejinizi oluşturuyor ve uygulama desteği sağlıyoruz.",
  },
];

export function Services() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="hizmetler">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Hizmetlerimiz
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            İşletmenizi Büyütecek Çözümler
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Uçtan uca dijital hizmetlerle projenizi hayata geçiriyoruz.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
