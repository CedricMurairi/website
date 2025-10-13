import IdCard from "@/app/ui/id-card";
import Footer from "@/app/ui/footer";
import Hero from "@/app/ui/hero";
import Navbar from "@/app/ui/nav";

export default function Home() {
  return (
    <main className="flex gap-15 md:gap-0 md:min-h-[100vh] flex-col items-start justify-between w-[90%] m-auto">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}