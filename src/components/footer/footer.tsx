import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-4 bg-cyan-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center md:flex-row lg:justify-between gap-8">
          <Link href="/">
            <Image src="/CGM.png" alt="logo-cgm" width={300} height={300} />
          </Link>
          <nav className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-300">
            <Link href="/termos-de-uso" className="hover:text-white">
              Termos de Uso
            </Link>
            <Link href="/politica-de-privacidade" className="hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="/pesquisa-de-satisfacao" className="hover:text-white">
              Pesquisa de Satisfação
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
