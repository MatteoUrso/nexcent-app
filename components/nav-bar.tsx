import { cn } from "@/lib/utils";
import Link from "next/link";

const NAV_LINKS = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "Service",
    href: "#service",
  },
  {
    label: "Feature",
    href: "#feature",
  },
  {
    label: "Testimonial",
    href: "#testimonial",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export function NavBar() {
  return (
    <nav className="hidden flex-1 items-center justify-center md:flex">
      <ul className="flex gap-[50px]">
        {NAV_LINKS.map((link) => {
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-body-regular-2 text-[#18191F]",
                  "hover:underline",
                  "focus-visible:ring-d-grey focus-visible:ring-1 focus-visible:outline-none"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
