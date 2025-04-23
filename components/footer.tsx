import { Icons } from "./icons";

export function Footer() {
  return (
    <footer className="flex w-full items-center bg-black py-16">
      <div className="container mx-auto flex flex-col-reverse justify-center gap-[125px] sm:flex-row">
        <div className="flex flex-col items-center sm:items-start">
          <Icons.lotoWhite />
          <p className="text-body-regular-3 text-silver mt-10">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="text-body-regular-3 text-silver mt-2">
            All rights reserved
          </p>
        </div>
        <div className="flex flex-col gap-[30px] px-12 sm:flex-row sm:px-0">
          <section id="company" aria-labelledby="company-title">
            <h4 id="company-title" className="text-white">
              Company
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="text-body-regular-3 text-white">About us</li>
              <li className="text-body-regular-3 text-white">Blog</li>
              <li className="text-body-regular-3 text-white">Contact us</li>
              <li className="text-body-regular-3 text-white">Pricing</li>
              <li className="text-body-regular-3 text-white">Testimonials</li>
            </ul>
          </section>
          <section id="support" aria-labelledby="support-title">
            <h4 id="support-title" className="text-white">
              Support
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="text-body-regular-3 text-white">Help center</li>
              <li className="text-body-regular-3 text-white">
                Terms of service
              </li>
              <li className="text-body-regular-3 text-white">Legal</li>
              <li className="text-body-regular-3 text-white">Privacy policy</li>
              <li className="text-body-regular-3 text-white">Status</li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
}
