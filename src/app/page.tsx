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

const estiloSeccion = "relative min-h-screen flex flex-col items-center justify-center text-center px-6";
const estiloFondoContenedor = "absolute inset-0 -z-10";
const estiloImagenDesktop = "object-cover hidden lg:block";
const estiloImagenTablet = "object-cover hidden sm:block lg:hidden";
const estiloImagenMobile = "object-cover block sm:hidden";
const estiloGradiente = "absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70";
const estiloContenido = "relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6";
const estiloEmpresa = "animate-fade-in-up flex flex-col items-center gap-2";
const estiloTextoEmpresa = "text-[var(--teal-lt)] uppercase tracking-[0.3em] text-xs font-medium";
const estiloLinea = "w-10 h-px bg-[var(--teal-lt)]/60 mt-1";
const estiloH1 = "bg-[white]/10 px-10 py-4 rounded-xl border-2 border-white/20 font-bold tracking-wide animate-fade-in-up-delay-1 font-serif text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight";
const estiloSubtitulo = "uppercase tracking-wide animate-fade-in-up-delay-2 text-white/75 text-base sm:text-lg max-w-md leading-relaxed";
const estiloSubtitulo2 = "text-black/80 uppercase tracking-[0.3em] text-xs font-light";
const estiloSubtitulo3 = "text-white/80 tracking-[0.1em] text-s";
const estiloCta = "animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 mt-2";
const estiloBotonPrimario = "bg-[white] hover:bg-[#ffeeee] font-semibold px-10 py-4 rounded-full transition-all duration-200 text-sm tracking-wide uppercase shadow-[0_0_20px_rgba(45,143,160,0.5)] hover:shadow-[0_0_30px_rgba(45,143,160,0.7)]";
const estiloBotonSecundario = "border-2 border-white hover:border-[var(--teal-lt)] hover:text-[var(--teal-lt)] text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 text-sm tracking-wide uppercase shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(123,224,239,0.3)]";
const estiloScroll = "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow";
const estiloScrollTexto = "text-white/40 text-xs uppercase tracking-widest";
const estiloScrollSvg = "text-white/40";

export default function Inicio() {
  return (
    <main>
      {/* Hero */}
      <section className={estiloSeccion}>

        {/* Fondo responsive */}
        <div className={estiloFondoContenedor}>
          <Image src="/img/fondo-desktop.jpg" alt="Bahía de Cádiz" fill priority className={estiloImagenDesktop} />
          <Image src="/img/fondo-tablet.jpg" alt="Bahía de Cádiz" fill priority className={estiloImagenTablet} />
          <Image src="/img/fondo-mobile.jpg" alt="Bahía de Cádiz" fill priority className={estiloImagenMobile} />
          <div className={estiloGradiente} />
        </div>

        {/* Contenido */}
        <div className={estiloContenido}>

          {/* Empresa */}


          {/* Subtítulo */}
          <p className={estiloSubtitulo2}>
            Los mejores de la Bahía
          </p>

          {/* Titular */}
          <h1 className={estiloH1}>
            Tu hogar<br />en la bahía<br />de Cádiz
          </h1>

          {/* Subtítulo */}
          <p className={estiloSubtitulo3}>
            Compra, vende o alquila<br />
            tu propiedad con nosotros.
          </p>
          <div className={estiloLinea} />
          {/* CTA */}
          <div className={estiloCta}>
            <Link href="/propiedades" className={estiloBotonPrimario}>
              Ver propiedades
            </Link>
            <Link href="/contacto" className={estiloBotonSecundario}>
              Contactar
            </Link>
          </div>
        </div>

        {/* Stats */}
<div className="flex items-center gap-0 mt-8">
  <div className="flex flex-col items-center px-4 sm:px-8">
    <span className="text-white font-serif text-xl sm:text-2xl font-bold">+340</span>
    <span className="text-white/60 uppercase tracking-[0.2em] text-[10px] sm:text-xs mt-1">Propiedades</span>
  </div>
  <div className="w-px h-8 sm:h-10 bg-white/20" />
  <div className="flex flex-col items-center px-4 sm:px-8">
    <span className="text-white font-serif text-xl sm:text-2xl font-bold">12</span>
    <span className="text-white/60 uppercase tracking-[0.2em] text-[10px] sm:text-xs mt-1">Municipios</span>
  </div>
  <div className="w-px h-8 sm:h-10 bg-white/20" />
  <div className="flex flex-col items-center px-4 sm:px-8">
    <span className="text-white font-serif text-xl sm:text-2xl font-bold">98%</span>
    <span className="text-white/60 uppercase tracking-[0.2em] text-[10px] sm:text-xs mt-1">Satisfacción</span>
  </div>
</div>

        {/* Scroll indicator */}
        <div className={estiloScroll}>
          <span className={estiloScrollTexto}>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={estiloScrollSvg}>
            <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      </section>
    </main>
  );
}