import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-lg">
                L
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Liberty<span className="text-blue-400">Bilişim</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Dijital dönüşümde güvenilir çözüm ortağınız. Modern teknolojilerle
              işletmenizi geleceğe taşıyoruz.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Hizmetler
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/hizmetler" className="hover:text-white transition-colors">Web Geliştirme</Link></li>
              <li><Link href="/hizmetler" className="hover:text-white transition-colors">Mobil Uygulama</Link></li>
              <li><Link href="/hizmetler" className="hover:text-white transition-colors">Bulut Çözümleri</Link></li>
              <li><Link href="/hizmetler" className="hover:text-white transition-colors">Siber Güvenlik</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Şirket
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              İletişim
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>0539 216 42 73</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@libertybilisim.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-blue-400" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © 2026 Liberty Bilişim. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
