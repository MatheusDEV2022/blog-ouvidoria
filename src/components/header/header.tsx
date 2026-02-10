import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ActiveLink } from "../active-link";
import Image from "next/image";

export const Header = () => {

  return (
    <header
      className="fixed top-0 z-50 w-full bg-cyan-900 backdrop-blur
     supports-[backdrop-filter]:bg-cyan-900 text-white"
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-80">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
           <Image src="/CGM.png" alt="logo-cgm" width={300} height={300}/>
          </Link>
          <nav className="flex items-center gap-6">
            <ActiveLink href="/">
              Início
            </ActiveLink>
            <ActiveLink href="/blog">
              Blog
            </ActiveLink>
            <Button variant="default" className="rounded-2xl p-5" asChild>
              <Link href="/ouvidoria">Ouvidoria</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
