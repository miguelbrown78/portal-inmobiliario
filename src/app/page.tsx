import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tu Hogar Bahía · Inmobiliaria en la Bahía de Cádiz",
  description:
    "Compra, vende o alquila tu propiedad en la Bahía de Cádiz con el Grupo Inmobiliario Posada & Marín. Más de 340 propiedades en Chiclana, Conil, Vejer y toda la costa gaditana.",
  openGraph: {
    title: "Tu Hogar Bahía · Inmobiliaria en la Bahía de Cádiz",
    description:
      "Compra, vende o alquila tu propiedad en la Bahía de Cádiz con el Grupo Inmobiliario Posada & Marín.",
    images: ["/img/fondo-desktop.jpg"],
  },
};

export default function Inicio() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Fondo responsive */}
        <div className="absolute inset-0 -z-10">
          {/* Desktop */}
          <Image
            src="/img/fondo-desktop.jpg"
            alt="Bahía de Cádiz"
            fill
            priority
            className="object-cover hidden lg:block"
          />
          {/* Tablet */}
          <Image
            src="/img/fondo-tablet.jpg"
            alt="Bahía de Cádiz"
            fill
            priority
            className="object-cover hidden sm:block lg:hidden"
          />
          {/* Mobile */}
          <Image
            src="/img/fondo-mobile.jpg"
            alt="Bahía de Cádiz"
            fill
            priority
            className="object-cover block sm:hidden"
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[var(--teal-lt)] uppercase tracking-[0.25em] text-sm font-medium mb-4">
            Grupo Inmobiliario Posada &amp; Marín
          </p>
          <h1 className="font-serif text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Tu hogar en la bahía de Cádiz
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-xl mx-auto mb-10">
            Compra, vende o alquila tu propiedad con los especialistas de la costa gaditana.
          </p>
          <Link
            href="/propiedades"
            className="inline-block bg-[var(--green)] hover:bg-[var(--green-dk)] text-white font-medium px-8 py-4 rounded-full transition-colors duration-200 text-base"
          >
            Ver propiedades
          </Link>
        </div>
      </section>
    </main>
  );
}