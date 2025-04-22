import { Icons } from "./icons";
import { NavBar } from "./nav-bar";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="bg-silver h-[84px] w-full">
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <Icons.logo className="hidden md:block" />
        <Icons.icon className="block md:hidden" />
        <NavBar />
        <div className="flex items-center gap-3.5">
          <Button
            variant="link"
            className="h-10 rounded-[6px] px-5 py-2.5 text-sm leading-5 font-medium tracking-normal"
          >
            Login
          </Button>
          <Button className="h-10 rounded-[6px] px-5 py-2.5 text-sm leading-5 font-medium tracking-normal">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
