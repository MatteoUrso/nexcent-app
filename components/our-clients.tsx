import { Icons } from "./icons";

const CLIENTS = [
  {
    name: "GitHub",
    icon: Icons.gitHub,
    url: "https://github.com",
  },
  {
    name: "Radix",
    icon: Icons.radix,
    url: "https://radix-ui.com",
  },
  {
    name: "Tailwind",
    icon: Icons.tailwind,
    url: "https://tailwindcss.com",
  },
  {
    name: "Google",
    icon: Icons.google,
    url: "https://google.com",
  },
  {
    name: "Apple",
    icon: Icons.apple,
    url: "https://apple.com",
  },
  {
    name: "PayPal",
    icon: Icons.paypal,
    url: "https://paypal.com",
  },
];

export function OurClients() {
  return (
    <section
      id="our-clients"
      className="container mx-auto mt-10 px-4 md:px-0"
      aria-labelledby="our-clients-title"
    >
      <h2 id="our-clients-title" className="text-center">
        Our Clients
      </h2>
      <p className="text-body-regular-2 text-grey mt-2 text-center">
        We have been working with some Fortune 500+ clients
      </p>
      <ul className="flex h-[98px] flex-wrap items-center justify-between">
        {CLIENTS.map((client) => {
          return (
            <li key={client.name}>
              <client.icon className="h-12 w-12 text-black" />
              <span className="sr-only">{client.name}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
