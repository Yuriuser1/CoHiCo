
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KOHICO - Премиальная корейская косметика",
  description: "Интернет-магазин премиальной корейской косметики. Sulwhasoo, AmorePacific, The History of Whoo. Доставка по России.",
  keywords: "корейская косметика, Sulwhasoo, AmorePacific, The History of Whoo, премиум косметика",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main>{children}</main>
            <footer className="bg-white border-t mt-16">
              <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div className="col-span-1 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">KOHICO</h3>
                    <p className="text-gray-600 mb-4">
                      Премиальная корейская косметика от ведущих брендов. Аутентичные товары,
                      быстрая доставка, профессиональные консультации.
                    </p>
                    <div className="text-sm text-gray-500">
                      © 2024 KOHICO. Все права защищены.
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Покупателям</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li><a href="/catalog" className="hover:text-pink-600">Каталог</a></li>
                      <li><a href="/brands" className="hover:text-pink-600">О брендах</a></li>
                      <li><a href="/delivery" className="hover:text-pink-600">Доставка и оплата</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Контакты</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>Telegram: @KoHiCo</li>
                      <li>Email: info@kohico.ru</li>
                      <li><a href="/contacts" className="hover:text-pink-600">Связаться с нами</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
