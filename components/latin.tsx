import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Latin() {
  return (
    <section
      id="latin"
      className="bg-silver mt-[94px] w-full py-8"
      aria-labelledby="latin-title"
    >
      <h2 id="latin-title" className="text-center text-black">
        Pellentesque suscipit fringilla libero eu.
      </h2>
      <div className="mt-8 flex items-center justify-center">
        <Button className="text-body-medium-2 h-[52px] px-8 text-white">
          Get a Demo <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
