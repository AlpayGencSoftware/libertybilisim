"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50" id="iletisim">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            İletişim
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Bizimle İletişime Geçin
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Projeleriniz hakkında konuşmak için bize ulaşın.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Telefon</h3>
                <p className="mt-1 text-slate-600">+90 (212) 000 00 00</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">E-posta</h3>
                <p className="mt-1 text-slate-600">info@libertybilisim.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Adres</h3>
                <p className="mt-1 text-slate-600">
                  İstanbul, Türkiye
                </p>
              </div>
            </div>
          </div>

          <form className="lg:col-span-3 space-y-5 rounded-2xl border bg-white p-8 shadow-sm">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                  Ad Soyad
                </label>
                <input
                  id="name"
                  type="text"
                  className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                  E-posta
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700">
                Konu
              </label>
              <input
                id="subject"
                type="text"
                className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Proje hakkında bilgi almak istiyorum"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Mesaj
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1.5 block w-full resize-none rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
              <Send className="mr-2 h-4 w-4" />
              Gönder
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
