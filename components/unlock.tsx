import { Button } from "./ui/button";
import Image from "next/image";

export function Unlock() {
  return (
    <section
      id="unlock"
      className="container mx-auto mt-[42px] flex flex-col items-center gap-[49px] px-4 lg:flex-row"
      aria-labelledby="unlock-title"
    >
      <figure>
        <Image
          src="/images/unlock-illustration.svg"
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
        <h2 id="unlock-title">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="text-body-regular-3 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <Button className="text-body-medium-2 mt-8 h-[52px] w-[151px] text-white">
          Learn More
        </Button>
      </div>
    </section>
  );
}
