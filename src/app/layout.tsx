import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
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
    <html lang="es" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>      
      <body className="font-sans bg-[#001820] overflow-x-hidden h-screen overflow-y-scroll snap-y snap-mandatory">
        <Navbar />
        {children}
      </body>
    </html>
  );
}