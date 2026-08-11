import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7FAF9] text-[#18322D]">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 sm:px-8 lg:px-12">
        <Header />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}