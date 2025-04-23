import { Button } from "./ui/button";
import Image from "next/image";

export function Calendar() {
  return (
    <section
      id="calendar"
      className="container mx-auto mt-[48px] flex flex-col items-center gap-[49px] px-4 lg:flex-row"
      aria-labelledby="calendar-title"
    >
      <figure>
        <Image
          src="/images/calendar-illustration.svg"
          alt="Two people interacting with a large mobile login form. One person is seated and typing, while the other is standing and pointing at the screen."
          width={442}
          height={433}
        />
        <figcaption className="sr-only">
          Illustration of two people interacting with a large mobile login form.
          One person is seated and typing on the screen, while the other stands
          and points at it. The form includes input fields for username and
          password.
        </figcaption>
      </figure>
      <div className="flex-1">
        <h2 id="calendar-title">How to design your site footer like we did</h2>
        <p className="text-body-regular-3 mt-4">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
          habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
          facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet
          urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
          quis massa. Praesent felis est, finibus et nisi ac, hendrerit
          venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>
        <Button className="text-body-medium-2 mt-8 h-[52px] w-[151px] text-white">
          Learn More
        </Button>
      </div>
    </section>
  );
}
