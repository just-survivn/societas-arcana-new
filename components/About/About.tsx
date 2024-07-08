import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import quote from "./quote.svg";
import { EvervaultCard, Icon } from "../ui/evervault-card";

type Props = {
  data: any;
};

const About = (props: Props) => {
  const x = useMotionValue(100);
  const y = useMotionValue(100);

  const rotateX = useTransform(y, [0, 200], [10, -10]);
  const rotateY = useTransform(x, [0, 200], [-10, 10]);

  function handleMouse(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function mouseLeave(event: any) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(100);
    y.set(100);
  }

  return (
    <div className="w-screen h-auto py-20 border-t border-white">
      <div className="flex flex-col relative text-center md:text-left px-6 justify-center gap-10 mx-auto items-center z-20">
        <h3 className="uppercase tracking-[10px] text-gray-500 text-2xl mb-10">
          About
        </h3>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center w-full max-w-6xl mx-auto">
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start w-full max-w-xs sm:max-w-sm mx-auto p-4 relative h-auto">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <EvervaultCard text="" />
          </div>
          <div className="space-y-6 px-4 md:px-3 lg:pr-20 flex items-center justify-center w-full max-w-lg">
            <motion.p
              initial={{ x: 100 }}
              whileInView={{ y: 0, x: 0 }}
              transition={{ duration: 1 }}
              className=" text-lg font-bold antialiased sm:text-base sm:font-normal md:text-lg md:leading-7 xl:text-xl xl:leading-8 pb-4 sm:mt-12 relative"
            >
              {props.data.aboutText.split(" ").map((word: any, key: any) => (
                <span
                  className="hover:text-[#F7AB0A] transition-all ease-in-out hover:scale-105 tracking-wide"
                  key={key}
                >
                  {word}{" "}
                </span>
              ))}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
