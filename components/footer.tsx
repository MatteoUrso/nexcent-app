import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send } from "lucide-react";

const sections = {
  company: {
    title: "Company",
    items: [
      { label: "About us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact us", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Testimonials", href: "#" },
    ],
  },
  support: {
    title: "Support",
    items: [
      { label: "Help center", href: "#" },
      { label: "Terms of service", href: "#" },
      { label: "Legal", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="flex w-full items-center bg-black py-16">
      <div className="container mx-auto flex flex-col-reverse justify-center gap-[125px] md:flex-row">
        <div className="flex flex-col items-center md:items-start">
          <Icons.lotoWhite />
          <p className="text-body-regular-3 text-silver mt-10">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-body-regular-3 text-silver mt-2">
            All rights reserved
          </p>
        </div>
        <div className="flex flex-col-reverse justify-center gap-[30px] px-12 sm:flex-row sm:px-0 md:justify-normal">
          {Object.entries(sections).map(([key, section]) => (
            <section key={key} id={key} aria-labelledby={`${key}-title`}>
              <h4 id={`${key}-title`} className="text-white">
                {section.title}
              </h4>
              <ul className="mt-6 flex flex-col gap-3">
                {section.items.map((item) => (
                  <li
                    key={item.label}
                    className="text-body-regular-3 text-white"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section id="stay-up" aria-labelledby="stay-up-title">
            <h4 id="stay-up-title" className="text-white">
              Stay up to date
            </h4>
            <div className="relative mt-6">
              <Input
                placeholder="Your email address"
                type="email"
                className="pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                className="absolute top-0 right-0 h-full px-3 py-2 text-white hover:bg-transparent"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Subscribe to our newsletter</span>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
