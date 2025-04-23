import { Icons } from "./icons";

export function Footer() {
  return (
    <footer className="flex h-[328px] w-full items-center bg-black">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row lg:gap-x-[125px]">
        <div className="flex flex-col items-center lg:items-start">
          <Icons.lotoWhite />
          <p className="text-body-regular-3 text-silver mt-10">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-body-regular-3 text-silver mt-2">
            All rights reserved
          </p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
