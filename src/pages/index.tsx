import Header from "@/components/header/header";
import { Button } from "@/components/ui/button";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} 
      flex min-h-screen justify-center p-8 pb-20 gap-16
      sm:p-4  bg-zinc-50 font-sans dark:bg-black`}
    >
      <Header />
    </div>
  );
}
