import { Icons } from "./icons";
import { NavBar } from "./nav-bar";

export function Header() {
  return (
    <header className="bg-tint-t5 h-[84px] w-full">
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:px-0">
        <Icons.logo className="hidden md:block" />
        <Icons.icon className="block md:hidden" />
        <NavBar />
        <div className="flex gap-3.5">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>
  );
}
