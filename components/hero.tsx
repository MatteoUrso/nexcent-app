import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-silver w-full py-24"
      aria-labelledby="hero-title"
    >
      <div className="container mx-auto flex items-center gap-[104px] px-4">
        <div className="flex-1">
          <h1 id="hero-title" className="text-d-grey">
            Lessons and insights
            <br />
            <span className="text-primary">from 8 years</span>
          </h1>
          <p className="text-body-regular-2 text-grey mt-4 mb-8">
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button className="text-body-medium-2 px-8 py-3.5 text-white">
            Register
          </Button>
        </div>
        <figure className="hidden lg:block">
          <Image
            src="/images/hero-illustration.svg"
            alt="Hero illustration"
            width={391}
            height={407}
          />
          <figcaption className="sr-only">
            Hero illustration showing a developer working on a computer with a
            flowchart and code interface
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
