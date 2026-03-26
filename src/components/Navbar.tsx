import Link from "next/link";
import Image from "next/image";

const estiloNavbar = "fixed top-0 left-0 right-0 z-50 h-20 bg-white";
const estiloContenedor = "h-full px-6 flex items-center";
const estiloLogo = "flex items-center gap-3";
const estiloTextoMarca = "text-[var(--text-dark)] font-semibold text-xl tracking-wide";
const estiloTextoTagline = "text-[var(--text-mid)] text-s font-light";

export default function Navbar() {
  return (
    <header className={estiloNavbar}>
      <div className={estiloContenedor}>
        <Link href="/" className={estiloLogo}>
          <Image src="/img/logo200.png" alt="Tu Hogar Bahía" width={60} height={44} />
          <div className="flex flex-col leading-tight">
            <span className={estiloTextoMarca}>tuhogarbahia.com</span>
            <span className={estiloTextoTagline}>Grupo Inmobiliario Posada &amp; Marín</span>
          </div>
        </Link>
      </div>
    </header>
  );
}