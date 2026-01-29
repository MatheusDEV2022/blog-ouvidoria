import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const isBlogPage = router.pathname.startsWith("/blog");

  return (
    <header
      className="fixed top-0 z-50 w-full bg-cyan-900 backdrop-blur
     supports-[backdrop-filter]:bg-cyan-900/90 text-white"
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-80">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">Logo</Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-gray-100",
                isHomePage ? "text-white" : "text-gray-300"
              )}
            >
              Início
            </Link>
            <Link
              href="/blog"
              className={cn(
                "transition-colors hover:text-gray-100",
                isBlogPage ? "text-white" : "text-gray-300"
              )}
            >
              Blog
            </Link>
            <Button variant="default" className="rounded-2xl p-5">
              Ouvidoria
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
