
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
    <html lang="ru" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
