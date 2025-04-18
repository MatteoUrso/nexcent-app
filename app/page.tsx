import { Achievements } from "@/components/achievements";
import { Hero } from "@/components/hero";
import { OurClients } from "@/components/our-clients";

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <OurClients />
      <Achievements />
    </main>
  );
}
