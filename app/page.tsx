import { Achievements } from "@/components/achievements";
import { Community } from "@/components/community";
import { Hero } from "@/components/hero";
import { OurClients } from "@/components/our-clients";

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <OurClients />
      <Community />
      <Achievements />
    </main>
  );
}
