import { Google_Sans } from "next/font/google";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

export default function Home (){
  return (
    <div
      className={`${googleSans.variable}
      flex min-h-screen justify-center p-8 pb-20 gap-16
      sm:p-4  bg-zinc-50 dark:bg-black font-[family-name:var(--font-google-sans)]`}
    >
    </div>
  );
}
