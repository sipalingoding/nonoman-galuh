import type { Metadata } from "next";
import { Merriweather, Inter, ZCOOL_XiaoWei, Nunito_Sans } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const zcoolXiaoWei = ZCOOL_XiaoWei({
  weight: "400",
  variable: "--font-logo",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  weight: ["400", "700", "800"],
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nonoman Galuh — Platform Kebudayaan",
  description: "Nata Salira, Nata Nagara, Nata Buana — Platform Kebudayaan Nonoman Galuh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${merriweather.variable} ${inter.variable} ${zcoolXiaoWei.variable} ${nunitoSans.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
