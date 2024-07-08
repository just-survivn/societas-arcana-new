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
    // test
    <div className="w-screen h-screen ">
      <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row  px-10 justify-center gap-20 mx-auto items-center z-20 ">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
          About
        </h3>
      <div className="sm:pt-10 border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <EvervaultCard text="" />    
    </div>
    <div className={`space-y-6 px-0 md:px-3 lg:pr-20 flex items-center`}>
      <motion.p
            initial={{
              x: 100,
            }}
            whileInView={{
              y: 0,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="text-justify text-sm font-bold  antialiased sm:text-base sm:font-normal md:max-w-xl md:text-base  md:leading-7 xl:text-xl  xl:leading-8 pb-4 sm:mt-12 relative"
          >
            {/* upper quote */}
            {/* <Image
              src={quote}
              alt="open quote"
              width={35}
              height={35}
              className="absolute top-[-60px] left-[-10px] fill-inherit"
              priority
            /> */}
            {/* lower quote */}
            {/* <Image
              src={quote}
              alt="open quote"
              width={35}
              height={35}
              className="absolute bottom-[-40px] right-[-10px] rotate-180"
              priority
            /> */}

            {props.data.aboutText.split(" ").map((word: any, key: any) => {
              return (
                <span
                  className="hover:text-[#F7AB0A] transition-all ease-in-out hover:scale-105 tracking-wide"
                  key={key}
                >
                  {word}{" "}
                </span>
              );
            })}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default About;
