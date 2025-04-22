import { Building2, Club, Users } from "lucide-react";

const ITEMS = [
  {
    title: "Membership Organisations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: Users,
  },
  {
    title: "National Associations",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: Building2,
  },
  {
    title: "Clubs And Groups",
    description:
      "Our membership management software provides full automation of membership renewals and payments",
    icon: Club,
  },
];

export function Community() {
  return (
    <section
      id="community"
      className="container mx-auto mt-10 px-4"
      aria-labelledby="community-title"
    >
      <h2 id="community-title" className="text-center">
        Manage your entire community in a single system
      </h2>
      <p className="text-body-regular-2 text-grey mt-2 text-center">
        Who is Nextcent suitable for?
      </p>
      <ul className="flex flex-col items-center justify-between gap-y-7 lg:flex-row">
        {ITEMS.map((item) => {
          return (
            <li
              key={item.title}
              className="flex h-[260px] w-full flex-col items-center pt-6 lg:max-w-[300px]"
            >
              <div
                className="bg-tint-t5 relative h-[50px] w-[50px] rounded-tl-[10px] rounded-tr-[5px] rounded-br-[18px] rounded-bl-[5px]"
                aria-hidden="true"
              >
                <item.icon className="text-shade-s5 absolute h-12 w-12 -translate-x-1/3 -translate-y-1/3" />
              </div>
              <h3 className="mt-4 text-center">{item.title}</h3>
              <p className="text-body-regular-3 text-grey mt-2 text-center">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
