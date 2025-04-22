import { Book, Club, CreditCard, Users } from "lucide-react";

const ACHIEVEMENTS = [
  {
    value: 2245341,
    label: "Members",
    icon: Users,
  },
  {
    value: 46328,
    label: "Clubs",
    icon: Club,
  },
  {
    value: 828867,
    label: "Event Bookings",
    icon: Book,
  },
  {
    value: 1926436,
    label: "Payments",
    icon: CreditCard,
  },
];

export function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-silver mt-12 w-full py-[84px]"
      aria-labelledby="achievements-title"
    >
      <div className="container mx-auto flex flex-col gap-y-7 px-4 lg:flex-row lg:gap-y-0">
        <div className="flex flex-1 flex-col items-center gap-y-2 lg:items-start">
          <h2 id="achievements-title">
            Helping a local
            <br />
            <span className="text-primary">business reinvent itself</span>
          </h2>
          <p className="text-body-regular-2 text-[#18191F]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="flex-1" aria-labelledby="achievements-title">
          <ul
            className="grid grid-cols-1 gap-[30px] md:grid-cols-2"
            role="list"
          >
            {ACHIEVEMENTS.map((achievement) => {
              const formattedValue = new Intl.NumberFormat("en-US", {
                notation: "standard",
                compactDisplay: "long",
              }).format(achievement.value);

              return (
                <li
                  key={achievement.label}
                  className="flex h-[60px] items-center gap-4"
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center"
                    aria-hidden="true"
                  >
                    <achievement.icon className="text-primary h-8 w-8" />
                  </div>
                  <div>
                    <h3>
                      <span className="sr-only">{achievement.label}: </span>
                      {formattedValue}
                    </h3>
                    <p className="text-body-regular-2 text-grey">
                      {achievement.label}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
