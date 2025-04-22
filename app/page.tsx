import { Achievements } from "@/components/achievements";
import { Community } from "@/components/community";
import { Hero } from "@/components/hero";
import { Latin } from "@/components/latin";
import { OurClients } from "@/components/our-clients";
import { Unlock } from "@/components/unlock";

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <OurClients />
      <Community />
      <Unlock />
      <Achievements />
      <Latin />
    </main>
  );
}
