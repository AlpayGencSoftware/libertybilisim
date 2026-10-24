import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StoreProvider } from "@/store/provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liberty Bilişim | Dijital Dönüşüm Çözümleri",
  description:
    "Liberty Bilişim - Web geliştirme, mobil uygulama, bulut çözümleri ve siber güvenlik hizmetleri ile dijital dönüşümde güvenilir çözüm ortağınız.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <StoreProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
