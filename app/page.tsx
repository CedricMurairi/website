import IdCard from "@/app/ui/id-card";
import Footer from "@/app/ui/footer";
import CTA from "@/app/ui/cta";

export default function Home() {
  return (
    <main className="flex gap-15 md:gap-0 md:min-h-[100vh] flex-col items-start justify-between w-[90%] m-auto">
      <IdCard />
      <CTA />
      <Footer />
    </main>
  );
}