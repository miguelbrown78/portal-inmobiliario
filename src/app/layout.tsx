import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://inmonext.browny.es"),
  title: {
    default: "Tu Hogar Bahía · Inmobiliaria en la Bahía de Cádiz",
    template: "%s · Tu Hogar Bahía",
  },
  description:
    "Compra, vende o alquila tu propiedad en la Bahía de Cádiz con el Grupo Inmobiliario Posada & Marín. Más de 340 propiedades en Chiclana, Conil, Vejer y toda la costa gaditana.",
  openGraph: {
    siteName: "Tu Hogar Bahía",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-[#001820] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}