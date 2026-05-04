import type { Metadata, Viewport } from "next";
import { Inter, Merriweather, Nunito_Sans, ZCOOL_XiaoWei } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

const zcoolXiaoWei = ZCOOL_XiaoWei({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zcool-xiaowei",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
      className={`${inter.variable} ${merriweather.variable} ${nunitoSans.variable} ${zcoolXiaoWei.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
