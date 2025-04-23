import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ITEMS = [
  {
    title: "Creating Streamlined Safeguarding Processes with OneRen",
    img: "/images/community-updates-18.png",
    alt: "A person reviewing safeguarding documentation on a digital device, showcasing OneRen's streamlined processes for organizational protection and compliance.",
  },
  {
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
    img: "/images/community-updates-19.png",
    alt: "A professional analyzing safeguarding data on a laptop with charts and reports, alongside printed documents and a cup of coffee on a white desk.",
  },
  {
    title: "Revamping the Membership Model with Triathlon Australia",
    img: "/images/community-updates-20.png",
    alt: "A triathlete in motion with Triathlon Australia branding displayed on a digital platform showing the new membership model interface with various subscription options.",
  },
];

export function CommunityUpdates() {
  return (
    <section
      id="community-updates"
      className="container mx-auto mt-12 px-4"
      aria-labelledby="community-updates-title"
    >
      <h2 id="community-updates-title" className="text-center">
        Caring is the new marketing
      </h2>
      <div className="mt-2 flex w-full items-center justify-center">
        <p className="text-body-regular-2 text-grey max-w-[628px] text-center">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.
        </p>
      </div>
      <ul className="mt-4 flex flex-col items-center justify-between gap-6 lg:flex-row">
        {ITEMS.map((item, index) => (
          <li className="h-[366px] w-[368px]" key={index}>
            <Image src={item.img} alt={item.alt} width={368} height={286} />
            <div className="bg-silver relative bottom-[88px] left-[25.5px] flex h-[176px] w-[317px] flex-col items-center rounded-[8px] p-4 shadow-lg">
              <h4 className="text-grey text-center">{item.title}</h4>
              <Button
                variant="link"
                className="mt-4 text-sm leading-5 font-medium tracking-normal"
              >
                Readmore <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
