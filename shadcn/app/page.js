import Image from "next/image";
import { ButtonDemo } from "../component/boton";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Menú de navegación */}
      <nav className="mb-4">
        <ul className="flex gap-4">
          <li>
            {/* Actualización para cumplir con las nuevas convenciones de Next.js */}
            <Link href="/aboutus" passHref>
              About Us
            </Link>
          </li>
          <li>
            {/* Actualización para cumplir con las nuevas convenciones de Next.js */}
            <Link href="/content" passHref>
              Content
            </Link>
          </li>
        </ul>
      </nav>
      {/* Resto del componente */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Contenido existente */}
      </div>
      {/* Más contenido existente */}
    </main>
  );
}