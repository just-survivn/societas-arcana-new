import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export default function Benefits() {
  const items = [
    {
      title: "Personalised Security Assessments",
      description:
        "Receive tailored evaluations and expert recommendations specifically designed to address your unique security needs.",
      className: "lg:col-span-2",
      colour: "bg-[#F7AB0A]/[0.30]",
    },
    {
      title: "24/7 Priority Response",
      description:
        "Access immediate and reliable assistance from our dedicated team, available around the clock to respond to your emergencies.",
      className: "lg:col-span-1",
      colour: "bg-darkGrey",
    },
    {
      title: "Confidential Consultations",
      description:
        "Enjoy private and discreet sessions with our top security experts, ensuring your concerns are addressed with the utmost confidentiality.",
      className: "lg:col-span-1",
      colour: "bg-[#F7AB0A]/[0.30]",
    },
    {
      title: "Exclusive Event Access",
      description:
        "Gain invitations to exclusive, members-only events, offering unique networking opportunities and insights from industry leaders.",
      className: "lg:col-span-2",
      colour: "bg-darkGrey",
    },
    {
      title: "Global Intelligence Network",
      description:
        "Leverage insights from our extensive worldwide network of professionals, providing you with up-to-date intelligence and analysis.",
      className: "lg:col-span-2",
      colour: "bg-darkGrey",
    },
    {
      title: "Bespoke Risk Management Plans",
      description:
        "Benefit from custom strategies developed to protect your assets and mitigate risks tailored to your specific situation.",
      className: "lg:col-span-1",
      colour: "bg-[#F7AB0A]/[0.30]",
    },
    {
      title: "Real-Time Security Updates",
      description:
        "Stay informed with real-time updates and alerts, keeping you ahead of potential threats and security developments.",
      className: "lg:col-span-1",
      colour: "bg-[#F7AB0A]/[0.30]",
    },
    {
      title: "Access to Elite Professionals",
      description:
        "Connect with and consult experts from military, special forces, and intelligence backgrounds, bringing unparalleled expertise to your service.",
      className: "lg:col-span-2",
      colour: "bg-darkGrey",
    },
    {
      title: "Comprehensive Security Solutions",
      description:
        "Take advantage of our end-to-end security services, covering all aspects of your personal and corporate security needs.",
      className: "lg:col-span-2",
      colour: "bg-darkGrey",
    },
    {
      title: "Discreet and Reliable Service",
      description:
        "Trust in our proven track record of providing discreet and dependable protection, ensuring your privacy and security are always maintained.",
      className: "lg:col-span-1",
      colour: "bg-[#F7AB0A]/[0.30]",
    },
  ];

  return (
    <div className="w-screen h-auto py-20 border-t border-white">
      <div className="flex flex-col relative text-center md:text-left px-6 md:px-10 justify-center gap-10 md:gap-20 mx-auto items-center z-20">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-10">
          Benefits
        </h3>
        <h4 className="text-xl md:text-4xl font-semibold text-center cursor-default">
          Discover some of the exclusive benefits that come with membership at Societas Arcana, tailored to ensure your security and peace of mind.
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-4 md:px-10">
          {items.map((benefit, i) => (
            <WobbleCard
              containerClassName={`col-span-1 ${benefit.className} ${benefit.colour}`}
              className="w-full h-full"
              key={i}
            >
              <div className="mx-auto p-4">
                <h2 className="text-left text-base font-semibold uppercase tracking-[-0.015em] text-white md:text-xl lg:text-2xl">
                  {benefit.title}
                </h2>
                <p className="mt-4 text-left text-base text-neutral-200">
                  {benefit.description}
                </p>
              </div>
            </WobbleCard>
          ))}
        </div>
      </div>
    </div>
  );
}
